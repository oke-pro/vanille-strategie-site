"""Schémas Pydantic pour l'annuaire entreprises."""

from pydantic import BaseModel


class CompanyListItem(BaseModel):
    id: int
    slug: str
    name: str
    category: str
    subcategory: str | None = None
    city: str | None = None
    website: str | None = None
    rating: float | None = None
    reviews_count: int | None = None
    photo_url: str | None = None

    model_config = {"from_attributes": True}


class CompanyDetail(BaseModel):
    id: int
    slug: str
    name: str
    description: str | None = None
    editorial_summary: str | None = None
    category: str
    subcategory: str | None = None
    website: str | None = None
    phone: str | None = None
    email: str | None = None
    linkedin: str | None = None
    facebook: str | None = None
    instagram: str | None = None
    address: str | None = None
    city: str | None = None
    latitude: float | None = None
    longitude: float | None = None
    rating: float | None = None
    reviews_count: int | None = None
    photo_urls: list[str] | None = None

    model_config = {"from_attributes": True}


class CompanyListResponse(BaseModel):
    companies: list[CompanyListItem]
    total: int
    page: int
    page_size: int


class CategoryCount(BaseModel):
    category: str
    count: int
