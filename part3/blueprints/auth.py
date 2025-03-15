from flask import Blueprint, jsonify, request, session, make_response
from bson import ObjectId
from datetime import datetime
import bcrypt
from part3.utilities.db_connector import get_db_connection

# MongoDB connection
db = get_db_connection()
users = db['users']

auth_bp = Blueprint('auth', __name__, url_prefix='/api')

@auth_bp.route('/register', methods=['POST', 'OPTIONS'])
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

@auth_bp.route('/login', methods=['POST'])
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

@auth_bp.route('/user', methods=['GET'])
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

@auth_bp.route('/logout', methods=['POST', 'OPTIONS'])
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