import os
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import certifi

# MongoDB connection
load_dotenv()

uri = os.environ.get('DB_URI')
client = MongoClient(
    uri,
    tlsCAFile=certifi.where(),
)

def get_db_connection():
    # Create a new client and connect to the server
    db = client['applespot']
    return db

def close_connection():
    client.close()