from dataclasses import dataclass
from typing import List, Optional
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

@dataclass
class ProductSpec:
    name: str
    value: str

@dataclass
class ProductColor:
    name: str
    value: str
    sku: str

@dataclass
class StorageOption:
    size: str
    priceAdd: int

@dataclass
class Product:
    name: str
    description: str
    basePrice: str
    image: str
    fullDescription: str
    specs: List[str]
    category: str
    colors: Optional[List[ProductColor]] = None
    storage: Optional[List[StorageOption]] = None


@dataclass
class User:
    firstName: str
    lastName: str
    email: str
    password: str
    isAdmin: bool = False
    orders: List['Order'] = []

@dataclass
class Order:
    id: int
    userId: int
    orderDate: str
    totalAmount: float
    status: str
    items: List['OrderItem']

@dataclass 
class OrderItem:
    productId: int
    quantity: int
    price: float
    color: Optional[str] = None
    storage: Optional[str] = None

