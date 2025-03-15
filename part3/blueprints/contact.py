from flask import Blueprint, jsonify, request
from datetime import datetime
from ..utilities.db_connector import get_db_connection

# MongoDB connection
db = get_db_connection()
contacts = db['contacts']

contact_bp = Blueprint('contact', __name__, url_prefix='/api')

@contact_bp.route('/contact', methods=['POST'])
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