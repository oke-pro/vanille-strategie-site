"""
Scraper Google Places (New) pour l'annuaire business Maurice.
Usage : python -m app.services.scraper
"""

import asyncio
import logging
import re
import unicodedata
from datetime import datetime, timezone

import httpx
from sqlalchemy import select

from app.config import settings
from app.database import async_session
from app.models.db_models import CompanyDB

logging.basicConfig(level=logging.INFO, format="%(asctime)s | %(levelname)s | %(message)s")
log = logging.getLogger(__name__)

PLACES_BASE = "https://places.googleapis.com/v1/places"

# Centre de l'île Maurice et rayon couvrant toute l'île (~40 km)
MAURITIUS_CENTER = {"latitude": -20.2, "longitude": 57.5}
MAURITIUS_RADIUS = 40000.0

# Mapping type Google → catégorie annuaire
TYPE_TO_CATEGORY: dict[str, tuple[str, str]] = {
    # Finance & Banque
    "bank": ("Finance & Banque", "Banques"),
    "insurance_agency": ("Finance & Banque", "Assurances"),
    # Immobilier
    "real_estate_agency": ("Immobilier", "Agences immobilières"),
    # Tech & Digital
    "electronics_store": ("Tech & Digital", "Électronique"),
    # Tourisme & Hôtellerie
    "hotel": ("Tourisme & Hôtellerie", "Hôtels"),
    "travel_agency": ("Tourisme & Hôtellerie", "Agences de voyage"),
    "resort_hotel": ("Tourisme & Hôtellerie", "Resorts"),
    # Commerce & Import/Export
    "shopping_mall": ("Commerce & Import/Export", "Centres commerciaux"),
    "wholesaler": ("Commerce & Import/Export", "Grossistes"),
    # Santé
    "hospital": ("Santé", "Hôpitaux"),
    "pharmacy": ("Santé", "Pharmacies"),
    "doctor": ("Santé", "Médecins"),
    # Industrie
    "food_manufacturer": ("Industrie & Manufacturing", "Agro-alimentaire"),
    "textile_manufacturer": ("Industrie & Manufacturing", "Textile"),
    # Éducation
    "school": ("Éducation", "Écoles"),
    "university": ("Éducation", "Universités"),
    # Juridique
    "lawyer": ("Juridique & Conseil", "Avocats"),
    # Transport & Logistique
    "shipping_company": ("Transport & Logistique", "Transport maritime"),
    "car_rental": ("Transport & Logistique", "Location de véhicules"),
}

# Types à chercher via Nearby Search
SEARCH_TYPES = list(TYPE_TO_CATEGORY.keys())

# Recherches textuelles complémentaires pour couvrir les entreprises tech/consulting
TEXT_SEARCHES = [
    ("IT company Mauritius", "Tech & Digital", "ESN"),
    ("software company Mauritius", "Tech & Digital", "Logiciels"),
    ("fintech Mauritius", "Tech & Digital", "Fintech"),
    ("fund administration Mauritius", "Finance & Banque", "Administration de fonds"),
    ("fund management Mauritius", "Finance & Banque", "Fonds"),
    ("property developer Mauritius", "Immobilier", "Promoteurs"),
    ("import export Mauritius", "Commerce & Import/Export", "Import/Export"),
    ("logistics Mauritius", "Commerce & Import/Export", "Logistique"),
    ("construction company Mauritius", "Industrie & Manufacturing", "Construction"),
    ("renewable energy Mauritius", "Industrie & Manufacturing", "Énergie"),
    # NB: "accounting firm" et "audit firm" exclus — concurrents BD Star/OKE (voir CLAUDE.md)
    ("law firm Mauritius", "Juridique & Conseil", "Cabinets d'avocats"),
    ("management company Mauritius", "Finance & Banque", "Management Companies"),
    ("international school Mauritius", "Éducation", "Écoles internationales"),
    ("coworking space Mauritius", "Tech & Digital", "Coworking"),
    ("freight forwarder Mauritius", "Transport & Logistique", "Freight"),
    ("consulting firm Mauritius", "Juridique & Conseil", "Conseil"),
    ("recruitment agency Mauritius", "Juridique & Conseil", "Recrutement"),
    ("restaurant Mauritius Port Louis", "Tourisme & Hôtellerie", "Restaurants"),
]


def slugify(text: str) -> str:
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")
    text = re.sub(r"[^\w\s-]", "", text.lower())
    return re.sub(r"[-\s]+", "-", text).strip("-")


async def nearby_search(
    client: httpx.AsyncClient, included_type: str, page_token: str | None = None
) -> dict:
    """Google Places Nearby Search (New)."""
    body: dict = {
        "includedTypes": [included_type],
        "locationRestriction": {
            "circle": {
                "center": MAURITIUS_CENTER,
                "radius": MAURITIUS_RADIUS,
            }
        },
        "maxResultCount": 20,
    }
    if page_token:
        body["pageToken"] = page_token

    headers = {
        "X-Goog-Api-Key": settings.google_maps_api_key,
        "X-Goog-FieldMask": (
            "places.id,places.displayName,places.formattedAddress,"
            "places.location,places.rating,places.userRatingCount,"
            "places.websiteUri,places.nationalPhoneNumber,"
            "places.internationalPhoneNumber,places.types,"
            "places.editorialSummary,places.photos,"
            "places.googleMapsUri"
        ),
    }
    resp = await client.post(f"{PLACES_BASE}:searchNearby", json=body, headers=headers)
    resp.raise_for_status()
    return resp.json()


async def text_search(client: httpx.AsyncClient, query: str) -> dict:
    """Google Places Text Search (New)."""
    body = {
        "textQuery": query,
        "locationBias": {
            "circle": {
                "center": MAURITIUS_CENTER,
                "radius": MAURITIUS_RADIUS,
            }
        },
        "maxResultCount": 20,
    }
    headers = {
        "X-Goog-Api-Key": settings.google_maps_api_key,
        "X-Goog-FieldMask": (
            "places.id,places.displayName,places.formattedAddress,"
            "places.location,places.rating,places.userRatingCount,"
            "places.websiteUri,places.nationalPhoneNumber,"
            "places.internationalPhoneNumber,places.types,"
            "places.editorialSummary,places.photos,"
            "places.googleMapsUri"
        ),
    }
    resp = await client.post(f"{PLACES_BASE}:searchText", json=body, headers=headers)
    resp.raise_for_status()
    return resp.json()


def parse_place(place: dict, category: str, subcategory: str) -> dict:
    """Transforme un résultat Google Places en dict prêt pour CompanyDB."""
    name = place.get("displayName", {}).get("text", "")
    location = place.get("location", {})
    editorial = place.get("editorialSummary", {}).get("text")

    photos = []
    for p in place.get("photos", [])[:5]:
        photo_name = p.get("name", "")
        if photo_name:
            photos.append(
                f"https://places.googleapis.com/v1/{photo_name}/media"
                f"?maxWidthPx=800&key={settings.google_maps_api_key}"
            )

    return {
        "google_place_id": place.get("id"),
        "name": name,
        "slug": slugify(name),
        "description": editorial,
        "editorial_summary": editorial,
        "category": category,
        "subcategory": subcategory,
        "google_types": place.get("types"),
        "website": place.get("websiteUri"),
        "phone": place.get("internationalPhoneNumber") or place.get("nationalPhoneNumber"),
        "address": place.get("formattedAddress"),
        "latitude": location.get("latitude"),
        "longitude": location.get("longitude"),
        "rating": place.get("rating"),
        "reviews_count": place.get("userRatingCount"),
        "photo_urls": photos if photos else None,
        "scraped_at": datetime.now(timezone.utc),
        "is_published": True,
    }


async def upsert_company(session, data: dict) -> bool:
    """Insert ou update une entreprise. Retourne True si nouvelle."""
    place_id = data.get("google_place_id")
    if not place_id:
        return False

    existing = await session.execute(
        select(CompanyDB).where(CompanyDB.google_place_id == place_id)
    )
    existing = existing.scalar_one_or_none()

    if existing:
        for key, value in data.items():
            if key not in ("id", "slug", "created_at") and value is not None:
                setattr(existing, key, value)
        return False

    # Dédupliquer le slug
    base_slug = data["slug"]
    slug = base_slug
    counter = 1
    while True:
        dup = await session.execute(select(CompanyDB).where(CompanyDB.slug == slug))
        if not dup.scalar_one_or_none():
            break
        slug = f"{base_slug}-{counter}"
        counter += 1
    data["slug"] = slug

    session.add(CompanyDB(**data))
    return True


async def run_scraper():
    """Lance le scraping complet."""
    log.info("Démarrage du scraping Google Places pour Maurice")

    async with httpx.AsyncClient(timeout=30) as client:
        all_places: list[tuple[dict, str, str]] = []

        # 1. Nearby Search par type
        for place_type in SEARCH_TYPES:
            cat, subcat = TYPE_TO_CATEGORY[place_type]
            try:
                result = await nearby_search(client, place_type)
                places = result.get("places", [])
                log.info(f"  {place_type}: {len(places)} résultats")
                for p in places:
                    all_places.append((p, cat, subcat))
            except httpx.HTTPStatusError as e:
                log.warning(f"  {place_type}: erreur {e.response.status_code}")
            await asyncio.sleep(0.3)

        # 2. Text Search complémentaire
        for query, cat, subcat in TEXT_SEARCHES:
            try:
                result = await text_search(client, query)
                places = result.get("places", [])
                log.info(f"  '{query}': {len(places)} résultats")
                for p in places:
                    all_places.append((p, cat, subcat))
            except httpx.HTTPStatusError as e:
                log.warning(f"  '{query}': erreur {e.response.status_code}")
            await asyncio.sleep(0.3)

    # 3. Dédupliquer par place_id et filtrer (doit avoir un site web)
    seen: set[str] = set()
    unique_places: list[dict] = []
    for place, cat, subcat in all_places:
        pid = place.get("id")
        if pid and pid not in seen:
            seen.add(pid)
            parsed = parse_place(place, cat, subcat)
            if parsed.get("website"):  # On ne garde que ceux avec un site web
                unique_places.append(parsed)

    log.info(f"Total entreprises uniques avec site web : {len(unique_places)}")

    # 4. Sauvegarder en base
    new_count = 0
    async with async_session() as session:
        for data in unique_places:
            is_new = await upsert_company(session, data)
            if is_new:
                new_count += 1
        await session.commit()

    log.info(f"Scraping terminé : {new_count} nouvelles, {len(unique_places) - new_count} mises à jour")


if __name__ == "__main__":
    asyncio.run(run_scraper())
