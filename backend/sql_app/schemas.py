from enum import Enum
from pydantic import BaseModel
import typing as t


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


class UserBase(BaseModel):
    email: str
    is_active: bool = True
    is_superuser: bool = False
    first_name: str = None
    last_name: str = None
    role_id: int
    is_verified: bool = False
    shopping_sessions: list[ShoppingSession]
    order_details: list[OrderDetails]

    class Config:
        orm_mode = True


class UserOut(UserBase):
    pass


class UserCreate(UserBase):
    password: str

    class Config:
        orm_mode = True


class UserEdit(UserBase):
    password: t.Optional[str] = None

    class Config:
        orm_mode = True


class User(UserBase):
    id: int

    class Config:
        orm_mode = True


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: str = None
    permissions: str = "user"


class PaymentDetails(BaseModel):
    id: int
    amount: int
    status: str
    order_details: list[OrderDetails]

    class Config:
        orm_mode = True
