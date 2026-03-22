from datetime import datetime

from pydantic import BaseModel


class ChatRequest(BaseModel):
    message: str
    visitor_id: str
    page_url: str | None = None


class ChatResponse(BaseModel):
    message: str
    conversation_id: str


class ChatMessageOut(BaseModel):
    role: str
    content: str
    created_at: datetime


class ChatHistoryResponse(BaseModel):
    messages: list[ChatMessageOut]
