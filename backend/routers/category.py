from backend.sql_app import database, schemas, models, crud
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, status, HTTPException


router = APIRouter(
    prefix="/item",
    tags=["Categories"]
)


@router.get('/{category_id}')
def get_item(category_id: int, db: Session = Depends(database.get_db)):
    return crud.get_item_by_id(db, category_id)
