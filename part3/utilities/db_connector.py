import os
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

# MongoDB connection

def get_db_connection():
    load_dotenv()

    uri = os.environ.get('DB_URI')

    # Create a new client and connect to the server
    client = MongoClient(uri, server_api=ServerApi('1'))
    db = client['applespot']
    return db