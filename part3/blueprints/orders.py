from flask import Blueprint, jsonify, request
from datetime import datetime
from part3.utilities.db_connector import get_db_connection
from bson import ObjectId

# MongoDB connection
db = get_db_connection()
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

@orders_bp.route('/orders/<order_id>', methods=['DELETE'])
def delete_order(order_id):
    try:
        result = db['orders'].delete_one({'_id': ObjectId(order_id)})
        
        if result.deleted_count > 0:
            return jsonify({'success': True}), 200
        return jsonify({'error': 'Order not found'}), 404
        
    except Exception as e:
        print(f"Error deleting order: {e}")
        return jsonify({'error': str(e)}), 500

@orders_bp.route('/user-orders/<user_email>', methods=['GET'])
def get_user_orders(user_email):
    try:
        orders = list(db['orders'].find(
            {'personal_details.email': user_email},
            {'order_number': 1, 'created_at': 1}
        ).sort('created_at', -1))
        
        for order in orders:
            order['_id'] = str(order['_id'])
            
        return jsonify(orders), 200
    except Exception as e:
        print(f"Error fetching user orders: {e}")
        return jsonify({'error': str(e)}), 500 