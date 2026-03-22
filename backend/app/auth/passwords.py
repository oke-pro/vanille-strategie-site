"""Hachage et vérification de mots de passe avec bcrypt."""

from passlib.context import CryptContext

_pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str) -> str:
    """Retourne le hash bcrypt du mot de passe."""
    return _pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Vérifie qu'un mot de passe correspond au hash stocké."""
    return _pwd_context.verify(plain_password, hashed_password)
