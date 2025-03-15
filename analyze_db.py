from bson import ObjectId
from datetime import datetime
from part3.utilities.db_connector import get_db_connection

def analyze_db():
    # Get all collections in the database
    db = get_db_connection()
    collections = db.list_collection_names()
    
    print("Database Analysis Report")
    print("=" * 50)
    
    for collection_name in collections:
        print(f"\nCollection: {collection_name}")
        print("-" * 30)
        
        collection = db[collection_name]
        total_documents = collection.count_documents({})
        
        print(f"Total documents: {total_documents}")
        
        # Get a sample document to show structure
        sample = collection.find_one()
        if sample:
            print("\nDocument structure:")
            for key, value in sample.items():
                value_type = type(value).__name__
                if isinstance(value, ObjectId):
                    value = str(value)
                elif isinstance(value, datetime):
                    value = value.strftime("%Y-%m-%d %H:%M:%S")
                print(f"  {key}: {value_type} = {value}")
        
        # Show some statistics based on collection type
        if collection_name == 'products':
            # Count products by category
            categories = collection.distinct('category')
            print("\nProducts by category:")
            for category in categories:
                count = collection.count_documents({'category': category})
                print(f"  {category}: {count} products")
                
        elif collection_name == 'users':
            # Count total users
            total_users = collection.count_documents({})
            print(f"\nTotal registered users: {total_users}")
            
        elif collection_name == 'orders':
            # Analyze orders
            total_orders = collection.count_documents({})
            print(f"\nTotal orders: {total_orders}")
            
            # Get total revenue
            pipeline = [
                {"$group": {
                    "_id": None,
                    "total_revenue": {"$sum": "$total"}
                }}
            ]
            result = list(collection.aggregate(pipeline))
            if result:
                total_revenue = result[0]['total_revenue']
                print(f"Total revenue: ${total_revenue:,.2f}")
                
        elif collection_name == 'contact':
            # Analyze contact messages
            total_messages = collection.count_documents({})
            print(f"\nTotal contact messages: {total_messages}")
            
            # Count messages by status if status field exists
            if sample and 'status' in sample:
                statuses = collection.distinct('status')
                print("\nMessages by status:")
                for status in statuses:
                    count = collection.count_documents({'status': status})
                    print(f"  {status}: {count}")

    print("\n" + "=" * 50)
    client.close()

if __name__ == "__main__":
    try:
        analyze_db()
    except Exception as e:
        print(f"Error analyzing database: {str(e)}") 