from flask import Blueprint, send_from_directory, current_app
import os

main_bp = Blueprint('main', __name__, static_folder='../static')

@main_bp.route('/')
def home():
    return send_from_directory(current_app.root_path, 'index.html')

@main_bp.route('/<path:path>')
def serve_static(path):
    # First try to find the file in the root directory
    if os.path.exists(os.path.join(current_app.root_path, path)):
        return send_from_directory(current_app.root_path, path)
    
    # If not found in root, check if it's in pages directory
    if path.endswith('.html') and os.path.exists(os.path.join(current_app.root_path, 'pages', path)):
        return send_from_directory(os.path.join(current_app.root_path, 'pages'), path)
    
    # If not found in pages, check other directories (css, js, img)
    for directory in ['css', 'js', 'img']:
        if os.path.exists(os.path.join(current_app.root_path, directory, path)):
            return send_from_directory(os.path.join(current_app.root_path, directory), path)
    
    # If file not found anywhere, return index.html for client-side routing
    return send_from_directory(current_app.root_path, 'index.html') 