from flask import Flask, jsonify, make_response, send_from_directory, request
from flask_cors import CORS
import os
import secrets

# Import blueprints
from part3.blueprints.main import main_bp
from part3.blueprints.products import products_bp
from part3.blueprints.auth import auth_bp
from part3.blueprints.orders import orders_bp
from part3.blueprints.contact import contact_bp

from part3.init_db import init_database

app = Flask(__name__, static_folder=None)  # Disable default static folder
app.secret_key = secrets.token_hex(16)  # Generates a secure random 32-character hex string

app.config.update(
    SESSION_COOKIE_SECURE=True,
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE='Lax',
)

CORS(app, resources={
    r"/*": {
        "origins": ["http://localhost:8000", "http://127.0.0.1:5000", "http://localhost:5000"],  # Allow both origins
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"],
        "supports_credentials": True
    }
})

# MongoDB connection
init_database()

IMG_FOLDER = os.path.join('uploads')
app.config['IMG_FOLDER'] = IMG_FOLDER

# Register blueprints
app.register_blueprint(main_bp)
app.register_blueprint(products_bp)
app.register_blueprint(auth_bp)
app.register_blueprint(orders_bp)
app.register_blueprint(contact_bp)

@app.after_request
def after_request(response):
    origin = request.headers.get('Origin')
    if origin in ["http://localhost:8000", "http://127.0.0.1:5000", "http://localhost:5000"]:
        response.headers.add('Access-Control-Allow-Origin', origin)
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response

if __name__ == '__main__':
    print("Starting AppleSpot Backend Server...")
    print(f"Image folder path: {app.config['IMG_FOLDER']}")
    app.run(debug=True, port=5000) 