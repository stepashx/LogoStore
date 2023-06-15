from enum import Enum
from pydantic import BaseModel


class OrderItem(BaseModel):
    id: int
    order_details_id: int
    item_id: int

    class Config:
        orm_mode = True


class CartItem(BaseModel):
    id: int
    quantity: int
    item_id: int
    shopping_session_id: int

    class Config:
        orm_mode = True


class Item(BaseModel):
    id: int
    title: str
    description: str
    price: int
    discount_percent: int
    cart_items: list[CartItem]
    order_items: list[OrderItem]
    category_id: int

    class Config:
        orm_mode = True


class Category(BaseModel):
    id: int
    title: str
    items: list[Item]

    class Config:
        orm_mode = True


class ShoppingSession(BaseModel):
    id: int
    total: int
    cart_items: list[CartItem]
    user_id: int

    class Config:
        orm_mode = True


class OrderDetails(BaseModel):
    id: int
    total: int
    user_id: int
    order_items: list[OrderItem]
    payment_details_id: int

    class Config:
        orm_mode = True


class User(BaseModel):
    id: int
    email: str
    password: str
    username: str
    role_id: int
    is_active: bool = True
    is_superuser: bool = False
    is_verified: bool = False
    shopping_sessions: list[ShoppingSession]
    order_details: list[OrderDetails]

    class Config:
        orm_mode = True


class PaymentDetails(BaseModel):
    id: int
    amount: int
    status: str
    order_details: list[OrderDetails]

    class Config:
        orm_mode = True
