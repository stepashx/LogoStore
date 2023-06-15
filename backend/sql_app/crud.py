from sqlalchemy.orm import Session
from fastapi import HTTPException, status

from . import models, schemas
from core.security import get_password_hash


def get_user(db: Session, user_id: int):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = get_password_hash(user.password)
    db_user = models.User(email=user.email, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_items(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Item).offset(skip).limit(limit).all()


def get_item_by_id(db: Session, item_id):
    return db.query(models.Item).get(item_id)


def create_item(db: Session, item: schemas.Item, category_id: int):
    db_item = models.Item(item.dict(), category_id)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)

    return db_item


def create_category(db: Session, category: schemas.Category):
    db_category = models.Category(category.dict())
    db.add(db_category)
    db.commit()
    db.refresh(db_category)

    return db_category