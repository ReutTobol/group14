from app import db, products, categories
import shutil
import os
from product_data import productData, defaultColors, defaultStorage

def init_database():
    # Clear existing data
    products.delete_many({})
    categories.delete_many({})
    db['contacts'].delete_many({})
    db['orders'].delete_many({})
    
    # Create uploads directory if it doesn't exist
    upload_dir = 'uploads'
    if not os.path.exists(upload_dir):
        os.makedirs(upload_dir)
    
    # Process and insert products
    all_products = []
    for category, category_products in productData.items():
        for product in category_products:
            # Convert price string to number
            base_price = float(product['basePrice'].replace(',', ''))
            
            # Create modified product document
            product_doc = {
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
        products.insert_many(all_products)
        
    # Insert categories
    categories.insert_many([
        {'name': 'mac', 'title': 'מחשבי מק'},
        {'name': 'ipad', 'title': 'אייפד'},
        {'name': 'iphone', 'title': 'אייפון'},
        {'name': 'watch', 'title': 'אפל ווטש'},
        {'name': 'accessories', 'title': 'אביזרים'}
    ])

if __name__ == '__main__':
    init_database() 