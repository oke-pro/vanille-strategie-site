"""
Import des entreprises depuis data/companies_full.json vers PostgreSQL.
Usage : uv run python -m app.services.import_companies
"""

import asyncio
import json
import logging
from datetime import datetime, timezone
from pathlib import Path

from app.database import async_session
from app.services.scraper import upsert_company

logging.basicConfig(level=logging.INFO, format="%(asctime)s | %(levelname)s | %(message)s")
log = logging.getLogger(__name__)

DATA_FILE = Path(__file__).resolve().parent.parent.parent / "data" / "companies_full.json"


def _parse_scraped_at(value: str | None) -> datetime | None:
    """Parse une date ISO depuis le JSON."""
    if not value:
        return None
    try:
        return datetime.fromisoformat(value)
    except (ValueError, TypeError):
        return datetime.now(timezone.utc)


async def run_import():
    if not DATA_FILE.exists():
        log.error(f"Fichier introuvable : {DATA_FILE}")
        return

    with open(DATA_FILE, encoding="utf-8") as f:
        companies: list[dict] = json.load(f)

    log.info(f"Fichier chargé : {len(companies)} entreprises")

    new_count = 0
    update_count = 0
    error_count = 0

    async with async_session() as session:
        for i, raw in enumerate(companies, 1):
            try:
                # Normaliser les champs pour correspondre au modèle CompanyDB
                data = {
                    "google_place_id": raw.get("google_place_id"),
                    "name": raw.get("name", ""),
                    "slug": raw.get("slug", ""),
                    "description": raw.get("description"),
                    "editorial_summary": raw.get("editorial_summary"),
                    "category": raw.get("category", "Autre"),
                    "subcategory": raw.get("subcategory"),
                    "google_types": raw.get("google_types"),
                    "website": raw.get("website"),
                    "phone": raw.get("phone"),
                    "email": raw.get("email"),
                    "linkedin": raw.get("linkedin"),
                    "facebook": raw.get("facebook"),
                    "instagram": raw.get("instagram"),
                    "address": raw.get("address"),
                    "city": raw.get("city"),
                    "latitude": raw.get("latitude"),
                    "longitude": raw.get("longitude"),
                    "rating": raw.get("rating"),
                    "reviews_count": raw.get("reviews_count"),
                    "photo_urls": raw.get("photo_urls"),
                    "scraped_at": _parse_scraped_at(raw.get("scraped_at")),
                    "is_published": True,
                }

                is_new = await upsert_company(session, data)
                if is_new:
                    new_count += 1
                else:
                    update_count += 1

            except Exception as e:
                error_count += 1
                name = raw.get("name", "???")
                log.error(f"  [{i}] Erreur pour '{name}': {e}")

        await session.commit()

    log.info("=" * 50)
    log.info("IMPORT TERMINÉ")
    log.info(f"  Nouvelles entreprises : {new_count}")
    log.info(f"  Mises à jour          : {update_count}")
    log.info(f"  Erreurs               : {error_count}")
    log.info(f"  Total traitées        : {new_count + update_count + error_count}")
    log.info("=" * 50)


if __name__ == "__main__":
    asyncio.run(run_import())
