"""Router API pour l'annuaire entreprises Maurice."""

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.database import get_db
from app.models.companies import (
    CategoryCount,
    CompanyDetail,
    CompanyListItem,
    CompanyListResponse,
)
from app.models.db_models import CompanyDB

router = APIRouter(prefix="/companies", tags=["Annuaire"])


@router.get("/categories", response_model=list[CategoryCount])
async def list_categories(db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(CompanyDB.category, func.count(CompanyDB.id))
        .where(CompanyDB.is_published.is_(True))
        .group_by(CompanyDB.category)
        .order_by(func.count(CompanyDB.id).desc())
    )
    return [CategoryCount(category=row[0], count=row[1]) for row in result.all()]


@router.get("", response_model=CompanyListResponse)
async def list_companies(
    category: str | None = Query(None),
    subcategory: str | None = Query(None),
    search: str | None = Query(None, min_length=2),
    page: int = Query(1, ge=1),
    page_size: int = Query(20, ge=1, le=100),
    db: AsyncSession = Depends(get_db),
):
    query = select(CompanyDB).where(CompanyDB.is_published.is_(True))

    if category:
        query = query.where(CompanyDB.category == category)
    if subcategory:
        query = query.where(CompanyDB.subcategory == subcategory)
    if search:
        query = query.where(CompanyDB.name.ilike(f"%{search}%"))

    # Count
    count_q = select(func.count()).select_from(query.subquery())
    total = (await db.execute(count_q)).scalar() or 0

    # Paginate
    query = query.order_by(CompanyDB.rating.desc().nullslast(), CompanyDB.name)
    query = query.offset((page - 1) * page_size).limit(page_size)
    result = await db.execute(query)
    companies = result.scalars().all()

    items = []
    for c in companies:
        photo_url = c.photo_urls[0] if c.photo_urls else None
        items.append(
            CompanyListItem(
                id=c.id,
                slug=c.slug,
                name=c.name,
                category=c.category,
                subcategory=c.subcategory,
                city=c.city,
                website=c.website,
                rating=c.rating,
                reviews_count=c.reviews_count,
                photo_url=photo_url,
            )
        )

    return CompanyListResponse(companies=items, total=total, page=page, page_size=page_size)


@router.get("/{slug}", response_model=CompanyDetail)
async def get_company(slug: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(CompanyDB).where(CompanyDB.slug == slug, CompanyDB.is_published.is_(True))
    )
    company = result.scalar_one_or_none()
    if not company:
        raise HTTPException(status_code=404, detail="Entreprise non trouvée")
    return CompanyDetail.model_validate(company)
