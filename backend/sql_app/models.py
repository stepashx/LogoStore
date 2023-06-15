from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, TIMESTAMP, JSON
from sqlalchemy.orm import relationship

from .database import Base

from datetime import datetime

class Category(Base):
    __tablename__ = "category"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)

    item = relationship("Item", back_populates="category")


class Item(Base):
    __tablename__ = "item"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    price = Column(Integer, index=True)
    discount_percent = Column(Integer)
    category_id = Column(Integer, ForeignKey("category.id"))

    category = relationship("Category", back_populates="item")
    cart_item = relationship("CartItem", back_populates="item")
    order_item = relationship("Order", back_populates="item")


class Role(Base):
    __tablename__ = "role"
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    permissions = Column(JSON)
    user = relationship("User", back_populates="role")


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, nullable=False)
    username = Column(String, nullable=False)
    registered_at = Column(TIMESTAMP, default=datetime.utcnow)
    role_id = Column(Integer, ForeignKey("role.id")),
    hashed_password = Column(String, nullable=False),
    is_active = Column("is_active", Boolean, default=True, nullable=False),
    is_superuser = Column("is_superuser", Boolean, default=False, nullable=False),
    is_verified = Column("is_verified", Boolean, default=False, nullable=False),

    shopping_session = relationship("ShoppingSession", back_populates="user")
    order_details = relationship("OrderDetails", back_populates="user")
    role = relationship("Role", back_populates="user")


class ShoppingSession(Base):
    __tablename__ = "shopping_session"

    id = Column(Integer, primary_key=True, index=True)
    total = Column(Integer)
    user_id = Column(Integer, ForeignKey("user.id"))

    user = relationship("User", back_populates="shopping_session")
    cart_item = relationship("CartItem", back_populates="shopping_session")


class CartItem(Base):
    __tablename__ = "cart_item"

    id = Column(Integer, primary_key=True, index=True)
    quantity = Column(Integer)
    item_id = Column(Integer, ForeignKey("item.id"))
    shopping_session_id = Column(Integer, ForeignKey("shopping_session.id"))

    item = relationship("Item", back_populates="cart_item")
    shopping_session = relationship("ShoppingSession", back_populates="cart_item")


class PaymentDetails(Base):
    __tablename__ = "payment_details"

    id = Column(Integer, primary_key=True, index=True)
    amount = Column(Integer)
    status = Column(String)

    order_details = relationship("OrderDetails", back_populates="payment_details")


class OrderDetails(Base):
    __tablename__ = "order_details"

    id = Column(Integer, primary_key=True, index=True)
    total = Column(Integer)
    user_id = Column(Integer, ForeignKey("user.id"))
    payment_details_id = Column(Integer, ForeignKey("payment_details.id"))

    user = relationship("User", back_populates="order_details")
    payment_details = relationship("PaymentDetails", back_populates="order_details")
    order_item = relationship("OrderItem", back_populates="order_details")


class OrderItem(Base):
    __tablename__ = "order_item"

    id = Column(Integer, primary_key=True, index=True)
    order_details_id = Column(Integer, ForeignKey("order_details.id"))
    item_id = Column(Integer, ForeignKey("item.id"))

    order_details = relationship("OrderDetails", back_populates="order_item")
    item = relationship("Item", back_populates="order_item")
