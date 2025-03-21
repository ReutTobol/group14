import os
import sys
from pathlib import Path

# Add the project root to Python path
project_root = str(Path(__file__).parent.parent)
sys.path.append(project_root)

from part3.utilities.db_connector import get_db_connection
from part3.product_data import productData, defaultColors, defaultStorage


def init_database(cleanup=False):
    db = get_db_connection()
    
    # Check if collections exist and handle cleanup
    collections_to_check = ['products', 'categories', 'contacts', 'orders', 'users']
    for collection in collections_to_check:
        if collection in db.list_collection_names():
            if cleanup:
                db[collection].delete_many({})
            else:
                print(f"Collection '{collection}' already exists. Skipping...")
                return
    
    # Create uploads directory if it doesn't exist
    upload_dir = 'uploads'
    if not os.path.exists(upload_dir):
        os.makedirs(upload_dir)
    
    # Initialize products collection
    products_collection = db['products']
    all_products = []
    
    for category, category_products in productData.items():
        for product in category_products:
            base_price = float(product['basePrice'].replace(',', ''))
        
            product_doc = {
                'product_id': product['id'],
                'category': category,
                'name': product['name'],
                'description': product['description'],
                'basePrice': base_price,
                'image': product['image'],
                'fullDescription': product['fullDescription'].strip(),
                'specs': product['specs'],
                'colors': product.get('colors', defaultColors.get(category, [])),
                'storage': product.get('storage', defaultStorage.get(category, []))
            }
            all_products.append(product_doc)
    
    # Insert all products
    if all_products:
        products_collection.insert_many(all_products)
        
    # Create indexes for products collection
    products_collection.create_index([("category", 1)])
    products_collection.create_index([("name", 1)])
    products_collection.create_index([("basePrice", 1)])
    products_collection.create_index([("product_id", 1), ("category", 1)], unique=True)
        
    # Initialize categories collection
    categories_collection = db['categories']
    categories = [
        {'name': 'mac', 'title': 'מחשבי מק'},
        {'name': 'ipad', 'title': 'אייפד'},
        {'name': 'iphone', 'title': 'אייפון'},
        {'name': 'watch', 'title': 'אפל ווטש'},
        {'name': 'accessories', 'title': 'אביזרים'}
    ]
    categories_collection.insert_many(categories)
    
    # Create index for categories
    categories_collection.create_index([("name", 1)], unique=True)
    
    # Initialize other collections with indexes
    db['users'].create_index([("email", 1)], unique=True)
    db['orders'].create_index([("user_id", 1)])
    db['orders'].create_index([("order_date", -1)])
    db['contacts'].create_index([("email", 1)])
    db['contacts'].create_index([("date", -1)])

if __name__ == '__main__':
    cleanup = len(sys.argv) > 1 and sys.argv[1] == '--cleanup'
    init_database(cleanup)
    print("Database initialized successfully!") 