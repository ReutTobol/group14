from dataclasses import dataclass
from typing import List, Optional

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