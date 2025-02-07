from flask import Flask, jsonify, request, send_file, session, make_response
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
import os
from datetime import datetime
import bcrypt
import secrets
import re

app = Flask(__name__)
app.secret_key = secrets.token_hex(16)  # Generates a secure random 32-character hex string

app.config.update(
    SESSION_COOKIE_SECURE=True,
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE='Lax',
)

CORS(app, resources={
    r"/*": {
        "origins": ["http://localhost:8000"],  # Your frontend URL
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"],
        "supports_credentials": True
    }
})

# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
db = client['applespot']
products = db['products']
categories = db['categories']
contacts = db['contacts']
users = db['users']

IMG_FOLDER = os.path.join('uploads')
app.config['IMG_FOLDER'] = IMG_FOLDER

@app.route('/')
def home():
    return "AppleSpot Backend Server is Running"

@app.route('/api/products/<category>')
def get_products(category):
    try:
        product_list = list(products.find({'category': category}))
        for product in product_list:
            product['_id'] = str(product['_id'])
            # Convert image path to URL
            product['image'] = f'/api/images/{product["image"]}'
        return jsonify(product_list)
    except Exception as e:
        print(f"Error fetching products: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/api/product/<category>/<product_id>')
def get_product(category, product_id):
    try:
        product = products.find_one({'_id': ObjectId(product_id), 'category': category})
        if product:
            product['_id'] = str(product['_id'])
            product['image'] = f'/api/images/{product["image"]}'
            return jsonify(product)
        return jsonify({'error': 'Product not found'}), 404
    except Exception as e:
        print(f"Error fetching product: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/api/images/<filename>')
def get_image(filename):
        try:
            # Add debug logging
            image_path = os.path.join(app.config['IMG_FOLDER'], filename)
            print(f"Attempting to serve image from: {image_path}")
            if os.path.exists(image_path):
                return send_file(image_path)
            else:
                print(f"Image not found: {image_path}")
                return jsonify({'error': 'Image not found'}), 404
        except Exception as e:
            print(f"Error serving image: {e}")
            return jsonify({'error': str(e)}), 404
        
@app.route('/api/contact', methods=['POST'])
def submit_contact():
    try:
        contact_data = request.json
        contact_doc = {
            'name': contact_data.get('name'),
            'phone': contact_data.get('phone'),
            'email': contact_data.get('email'),
            'message': contact_data.get('message'),
            'created_at': datetime.now(),
            'status': 'new'
        }
        
        result = contacts.insert_one(contact_doc)
        return jsonify({'success': True, 'id': str(result.inserted_id)}), 201
    except Exception as e:
        print(f"Error submitting contact form: {e}")
        return jsonify({'error': str(e)}), 500
    
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:8000')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response

@app.route('/api/orders', methods=['POST'])
def create_order():
    try:
        order_data = request.json
        print(order_data)
        order_doc = {
            'order_number': f"ORD{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'personal_details': {
                'full_name': order_data['personalDetails']['fullName'],
                'email': order_data['personalDetails']['email'],
                'phone': order_data['personalDetails']['phone']
            },
            'delivery_method': order_data['deliveryMethod'],
            'payment_method': order_data['paymentMethod'],
            'items': order_data['items'],
            'delivery_address': order_data.get('deliveryAddress'),
            'total_amount': sum(strip_amount(item['price']) * int(item['quantity']) for item in order_data['items']),
            'delivery_cost': 30 if order_data['deliveryMethod'] == 'delivery' else 0,
            'status': 'pending',
            'created_at': datetime.now()
        }
        
        # Calculate final total including delivery
        order_doc['final_total'] = float(order_doc['total_amount']) + float(order_doc['delivery_cost'])
        result = db['orders'].insert_one(order_doc)
        return jsonify({
            'success': True, 
            'order_id': str(result.inserted_id),
            'order_number': order_doc['order_number']
        }), 201
    except Exception as e:
        print(f"Error creating order: {e}")
        return jsonify({'error': str(e)}), 500
    
@app.route('/api/register', methods=['POST', 'OPTIONS'])
def register():
    if request.method == 'OPTIONS':
        return make_response('', 200)
    
    try:
        user_data = request.json
        
        # Check if email already exists
        if users.find_one({'email': user_data['email']}):
            return jsonify({'error': 'Email already registered'}), 400
        
        # Hash password
        hashed_password = bcrypt.hashpw(user_data['password'].encode('utf-8'), bcrypt.gensalt())
        
        user_doc = {
            'firstName': user_data['firstName'],
            'lastName': user_data['lastName'],
            'email': user_data['email'],
            'password': hashed_password,
            'phone': user_data['phone'],
            'address': user_data['address'],
            'zipCode': user_data['zipCode'],
            'shippingNotes': user_data.get('shippingNotes', ''),
            'newsletter': user_data.get('newsletter', False),
            'created_at': datetime.now()
        }
        
        result = users.insert_one(user_doc)
        return jsonify({'success': True, 'id': str(result.inserted_id)}), 201
        
    except Exception as e:
        print(f"Error registering user: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/api/login', methods=['POST'])
def login():
    try:
        login_data = request.json
        user = users.find_one({'email': login_data['email']})
        
        if user and bcrypt.checkpw(login_data['password'].encode('utf-8'), user['password']):
            user['_id'] = str(user['_id'])
            user.pop('password', None)  # Remove password from response
            session['user_id'] = str(user['_id'])
            return jsonify({'success': True, 'user': user})
        else:
            return jsonify({'error': 'Invalid email or password'}), 401
            
    except Exception as e:
        print(f"Error logging in: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/api/user', methods=['GET'])
def get_user():
    try:
        user_id = session.get('user_id')
        if not user_id:
            return jsonify({'error': 'Not logged in'}), 401
            
        user = users.find_one({'_id': ObjectId(user_id)})
        if user:
            user['_id'] = str(user['_id'])
            user.pop('password', None)
            return jsonify(user)
        return jsonify({'error': 'User not found'}), 404
            
    except Exception as e:
        print(f"Error getting user: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/api/logout', methods=['POST', 'OPTIONS'])
def logout():
    if request.method == 'OPTIONS':
        return make_response('', 200)
        
    try:
        session.clear()
        response = make_response(jsonify({'success': True}))
        response.delete_cookie('session')  # Clear the session cookie
        return response
    except Exception as e:
        print(f"Error logging out: {e}")
        return jsonify({'error': str(e)}), 500
    
@app.route('/api/search')
def search_products():
    try:
        query = request.args.get('q', '')
        if len(query) < 2:
            return jsonify([])

        # Create case-insensitive regex pattern
        pattern = re.compile(query, re.IGNORECASE)
        
        # Search across multiple fields
        search_results = products.find({
            '$or': [
                {'name': {'$regex': pattern}},
                {'description': {'$regex': pattern}},
                {'category': {'$regex': pattern}}
            ]
        }).limit(10)

        # Format results and convert ObjectId to string
        results = []
        for product in search_results:
            results.append({
                'id': str(product['_id']),  # Convert ObjectId to string
                'name': product['name'],
                'price': product.get('basePrice', 0),  # Use basePrice instead of price
                'image': f'/api/images/{product["image"]}',
                'category': product['category']
            })

        return jsonify(results)
    except Exception as e:
        print(f"Search error: {e}")
        return jsonify({'error': 'Search failed'}), 500

def strip_amount(amount):
    return int(amount.replace('₪', '').replace(',', ''))

if __name__ == '__main__':
    print("Starting AppleSpot Backend Server...")
    print(f"Image folder path: {app.config['IMG_FOLDER']}")
    app.run(debug=True, port=5000) 