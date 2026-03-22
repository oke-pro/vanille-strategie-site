"""Router d'authentification — Portail V2 Vanille Stratégie."""

from datetime import datetime, timezone

from fastapi import APIRouter, Cookie, Depends, HTTPException, Response, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.auth.dependencies import get_current_user
from app.auth.jwt import create_access_token, create_refresh_token, decode_token
from app.auth.passwords import verify_password
from app.config import settings
from app.database import get_db
from app.models.auth import LoginRequest, TokenResponse, UserResponse, UserUpdate
from app.models.db_models import UserDB

router = APIRouter(prefix="/auth", tags=["auth"])


def _set_token_cookies(response: Response, access_token: str, refresh_token: str) -> None:
    """Place les tokens JWT dans des cookies HttpOnly sécurisés."""
    response.set_cookie(
        key="vs_access_token",
        value=access_token,
        httponly=True,
        secure=True,
        samesite="lax",
        max_age=settings.jwt_access_expire_minutes * 60,
        path="/",
    )
    response.set_cookie(
        key="vs_refresh_token",
        value=refresh_token,
        httponly=True,
        secure=True,
        samesite="lax",
        max_age=settings.jwt_refresh_expire_days * 86400,
        path="/",
    )


@router.post("/login", response_model=TokenResponse)
async def login(
    body: LoginRequest,
    response: Response,
    db: AsyncSession = Depends(get_db),
):
    """Connexion par email + mot de passe → JWT tokens (cookies + body)."""
    result = await db.execute(select(UserDB).where(UserDB.email == body.email))
    user = result.scalar_one_or_none()

    if not user or not verify_password(body.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email ou mot de passe incorrect",
        )

    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Compte désactivé — contactez le cabinet",
        )

    # Mettre à jour le dernier login
    user.last_login = datetime.now(timezone.utc)
    await db.commit()

    token_data = {"sub": str(user.id), "role": user.role}
    access_token = create_access_token(token_data)
    refresh_token = create_refresh_token(token_data)

    _set_token_cookies(response, access_token, refresh_token)

    return TokenResponse(access_token=access_token, refresh_token=refresh_token)


@router.post("/logout")
async def logout(response: Response):
    """Déconnexion — supprime les cookies JWT."""
    response.delete_cookie("vs_access_token", path="/")
    response.delete_cookie("vs_refresh_token", path="/")
    return {"message": "Déconnexion réussie"}


@router.post("/refresh", response_model=TokenResponse)
async def refresh(
    response: Response,
    vs_refresh_token: str | None = Cookie(default=None),
    db: AsyncSession = Depends(get_db),
):
    """Rafraîchit l'access token à partir du refresh token."""
    if not vs_refresh_token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Refresh token manquant",
        )

    payload = decode_token(vs_refresh_token)
    if not payload or payload.get("type") != "refresh":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Refresh token invalide ou expiré",
        )

    user_id = payload.get("sub")
    result = await db.execute(select(UserDB).where(UserDB.id == user_id))
    user = result.scalar_one_or_none()

    if not user or not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Utilisateur introuvable ou désactivé",
        )

    token_data = {"sub": str(user.id), "role": user.role}
    new_access = create_access_token(token_data)
    new_refresh = create_refresh_token(token_data)

    _set_token_cookies(response, new_access, new_refresh)

    return TokenResponse(access_token=new_access, refresh_token=new_refresh)


@router.get("/me", response_model=UserResponse)
async def get_me(user: UserDB = Depends(get_current_user)):
    """Retourne le profil de l'utilisateur connecté."""
    return user


@router.patch("/me", response_model=UserResponse)
async def update_me(
    body: UserUpdate,
    user: UserDB = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Modifie le profil de l'utilisateur connecté."""
    update_data = body.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(user, field, value)

    await db.commit()
    await db.refresh(user)
    return user
