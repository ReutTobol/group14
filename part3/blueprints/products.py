from flask import Blueprint, jsonify, request, send_file
from bson import ObjectId
import os
import re
from part3.utilities.db_connector import get_db_connection

# MongoDB connection
db = get_db_connection()
products = db['products']
categories = db['categories']

products_bp = Blueprint('products', __name__, url_prefix='/api')

@products_bp.route('/products/<category>')
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

@products_bp.route('/product/<category>/<product_id>')
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

@products_bp.route('/images/<filename>')
def get_image(filename):
    try:
        # Add debug logging
        from flask import current_app
        image_path = os.path.join(current_app.config['IMG_FOLDER'], filename)
        print(f"Attempting to serve image from: {image_path}")
        if os.path.exists(image_path):
            return send_file(image_path)
        else:
            print(f"Image not found: {image_path}")
            return jsonify({'error': 'Image not found'}), 404
    except Exception as e:
        print(f"Error serving image: {e}")
        return jsonify({'error': str(e)}), 404

@products_bp.route('/search')
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