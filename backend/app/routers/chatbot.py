import logging
import time
from collections import defaultdict

from fastapi import APIRouter, HTTPException, Request
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import Depends

from app.database import get_db
from app.models.chatbot import ChatHistoryResponse, ChatRequest, ChatResponse
from app.services.chatbot import chat, get_chat_history

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/chat", tags=["Chatbot"])

# ──────────────── Simple in-memory rate limiter ────────────────

_rate_limit_store: dict[str, list[float]] = defaultdict(list)
RATE_LIMIT_MAX = 30
RATE_LIMIT_WINDOW = 60  # seconds


def _check_rate_limit(visitor_id: str) -> None:
    """Max 30 requests per minute per visitor_id."""
    now = time.time()
    window_start = now - RATE_LIMIT_WINDOW

    # Clean old entries
    _rate_limit_store[visitor_id] = [
        t for t in _rate_limit_store[visitor_id] if t > window_start
    ]

    if len(_rate_limit_store[visitor_id]) >= RATE_LIMIT_MAX:
        raise HTTPException(
            status_code=429,
            detail="Trop de messages envoyés. Veuillez patienter une minute.",
        )

    _rate_limit_store[visitor_id].append(now)


def _get_ip(request: Request) -> str:
    return request.client.host if request.client else "0.0.0.0"


@router.post("", response_model=ChatResponse)
async def send_chat_message(
    req: ChatRequest,
    request: Request,
    db: AsyncSession = Depends(get_db),
):
    """Send a message to the chatbot (public, no auth required)."""
    _check_rate_limit(req.visitor_id)

    visitor_ip = _get_ip(request)

    response_text, conversation_id = await chat(
        db=db,
        user_message=req.message,
        visitor_id=req.visitor_id,
        page_url=req.page_url,
        visitor_ip=visitor_ip,
    )

    return ChatResponse(message=response_text, conversation_id=conversation_id)


@router.get("/debug")
async def debug_chatbot():
    """Temporary debug endpoint."""
    import anthropic
    from app.config import settings
    import os
    key = settings.anthropic_api_key
    env_key = os.environ.get("ANTHROPIC_API_KEY", "NOT_SET")
    has_key = bool(key) and len(key) > 10
    try:
        client = anthropic.AsyncAnthropic(api_key=key)
        resp = await client.messages.create(
            model="claude-haiku-4-5-20251001",
            max_tokens=50,
            messages=[{"role": "user", "content": "test"}],
        )
        return {"has_key": has_key, "env_key": env_key[:20] + "..." if len(env_key) > 20 else env_key, "settings_key": key[:20] + "..." if key else "EMPTY", "db_url": settings.database_url[:30] + "...", "status": "ok", "response": resp.content[0].text[:100]}
    except Exception as e:
        return {"has_key": has_key, "env_key": env_key[:20] + "..." if len(env_key) > 20 else env_key, "settings_key": key[:20] + "..." if key else "EMPTY", "db_url": settings.database_url[:30] + "...", "status": "error", "error": str(e), "type": type(e).__name__}


@router.get("/history", response_model=ChatHistoryResponse)
async def get_history(
    visitor_id: str,
    db: AsyncSession = Depends(get_db),
):
    """Retrieve chat history for a visitor (public, by visitor_id)."""
    messages = await get_chat_history(db, visitor_id)
    return ChatHistoryResponse(messages=messages)
