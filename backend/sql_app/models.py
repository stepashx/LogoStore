from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, TIMESTAMP
from sqlalchemy.orm import relationship

from .database import Base


class Category(Base):
    __tablename__ = "category"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)

    item = relationship("Item", back_populates="category")


class Discount(Base):
    __tablename__ = "discount"

    id = Column(Integer, primary_key=True, index=True)
    discount_percent = Column(Integer)

    item = relationship("Item", back_populates="discount")


class Item(Base):
    __tablename__ = "item"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    price = Column(Integer, index=True)
    category_id = Column(Integer, ForeignKey("category.id"))
    discount_id = Column(Integer, ForeignKey("discount.id"))

    category = relationship("Category", back_populates="item")
    discount = relationship("Discount", back_populates="item")
    cart_item = relationship("CartItem", back_populates="item")
    order_item = relationship("Order", back_populates="item")


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)

    shopping_session = relationship("ShoppingSession", back_populates="user")
    order_details = relationship("OrderDetails", back_populates="user")


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
    create_at = Column(TIMESTAMP)
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
