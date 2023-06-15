from fastapi import Depends, FastAPI, HTTPException
import uvicorn

from sqlalchemy.orm import Session

from sql_app import crud, models, schemas
from sql_app.database import SessionLocal, engine


models.Base.metadata.create_all(bind=engine)

app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/items/{item_id}")
def read_item_by_id(item_id: int, db: Session = Depends(get_db)):
    return crud.get_item_by_id(db, item_id)


@app.post("/items/")
def create_item(item: schemas.Item, db: Session = Depends(get_db)):
    return crud.create_item(db, item, 0)


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", reload=True, port=8000)
