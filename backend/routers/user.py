from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

from backend.sql_app.database import get_db
from backend.sql_app.crud import (
    get_users,
    get_user,
    create_user,
    delete_user,
    edit_user,
)
from backend.sql_app.schemas import UserCreate, UserEdit, User, UserOut
from backend.configs.auth import get_current_active_user, get_current_active_superuser

users_router = r = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@r.get(
    "/",
    response_model=t.List[User],
    response_model_exclude_none=True,
)
async def users_list(
    response: Response,
    db=Depends(get_db),
    current_user=Depends(get_current_active_superuser),
):
    users = get_users(db)
    response.headers["Content-Range"] = f"0-9/{len(users)}"
    return users


@r.get("/me", response_model=User, response_model_exclude_none=True)
async def user_me(current_user=Depends(get_current_active_user)):
    return current_user


@r.get(
    "/{user_id}",
    response_model=User,
    response_model_exclude_none=True,
)
async def user_details(
    request: Request,
    user_id: int,
    db=Depends(get_db),
    current_user=Depends(get_current_active_superuser),
):
    user = get_user(db, user_id)
    return user


@r.post("/", response_model=User, response_model_exclude_none=True)
async def user_create(
    request: Request,
    user: UserCreate,
    db=Depends(get_db),
    current_user=Depends(get_current_active_superuser),
):
    return create_user(db, user)


@r.put(
    "/{user_id}", response_model=User, response_model_exclude_none=True
)
async def user_edit(
    request: Request,
    user_id: int,
    user: UserEdit,
    db=Depends(get_db),
    current_user=Depends(get_current_active_superuser),
):
    return edit_user(db, user_id, user)


@r.delete(
    "/{user_id}", response_model=User, response_model_exclude_none=True
)
async def user_delete(
    request: Request,
    user_id: int,
    db=Depends(get_db),
    current_user=Depends(get_current_active_superuser),
):
    return delete_user(db, user_id)
