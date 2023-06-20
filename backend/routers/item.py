from fastapi import APIRouter

items_router = r = APIRouter(
    prefix="/item",
    tags=['Items']
)
