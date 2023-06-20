from fastapi import Depends, FastAPI, HTTPException, status
import uvicorn

from sqlalchemy.orm import Session

from backend.sql_app import crud, models, schemas
from backend.sql_app.database import SessionLocal, engine
from backend.routers import user, auth, item


models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(user.users_router)
app.include_router(auth.auth_router)
app.include_router(item.items_router)

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", reload=True, port=8000)
