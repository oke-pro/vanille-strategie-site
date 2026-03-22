"""Dépendances FastAPI pour l'authentification et l'autorisation."""

from __future__ import annotations

from typing import Callable

from fastapi import Cookie, Depends, Header, HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.auth.jwt import decode_token
from app.database import get_db
from app.models.db_models import UserDB


async def get_current_user(
    authorization: str | None = Header(default=None),
    vs_access_token: str | None = Cookie(default=None),
    db: AsyncSession = Depends(get_db),
) -> UserDB:
    """Extrait l'utilisateur courant depuis le JWT (header ou cookie)."""
    token: str | None = None

    # 1. Essayer le header Authorization: Bearer <token>
    if authorization and authorization.startswith("Bearer "):
        token = authorization[7:]

    # 2. Fallback sur le cookie
    if not token and vs_access_token:
        token = vs_access_token

    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authentification requise",
        )

    payload = decode_token(token)
    if not payload or payload.get("type") != "access":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token invalide ou expiré",
        )

    user_id = payload.get("sub")
    if not user_id:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token invalide",
        )

    result = await db.execute(select(UserDB).where(UserDB.id == user_id))
    user = result.scalar_one_or_none()

    if not user or not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Utilisateur introuvable ou désactivé",
        )

    return user


def require_role(role: str) -> Callable:
    """Retourne une dépendance qui vérifie le rôle de l'utilisateur."""

    async def _check_role(user: UserDB = Depends(get_current_user)) -> UserDB:
        if user.role != role:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"Accès réservé au rôle « {role} »",
            )
        return user

    return _check_role
