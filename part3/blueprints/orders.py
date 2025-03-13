from flask import Blueprint, jsonify, request
from datetime import datetime
from pymongo import MongoClient

# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
db = client['applespot']

orders_bp = Blueprint('orders', __name__, url_prefix='/api')

def strip_amount(amount):
    return int(amount.replace('₪', '').replace(',', ''))

@orders_bp.route('/orders', methods=['POST'])
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