from sqlalchemy.orm import Session

from . import models, schemas


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