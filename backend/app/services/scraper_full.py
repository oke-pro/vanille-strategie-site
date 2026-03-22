"""
Scraper Google Places COMPLET — toutes catégories, sans PostgreSQL.
Usage : cd backend && uv run python -m app.services.scraper_full
"""

import asyncio
import json
from collections import Counter
from datetime import datetime
from pathlib import Path

import httpx

from app.services.scraper import (
    SEARCH_TYPES,
    TEXT_SEARCHES,
    TYPE_TO_CATEGORY,
    nearby_search,
    parse_place,
    text_search,
)

DATA_DIR = Path(__file__).resolve().parents[2] / "data"
OUTPUT_FILE = DATA_DIR / "companies_full.json"

DELAY = 0.3  # secondes entre chaque requête


async def main():
    print("=" * 70)
    print("  Scraper Google Places — COMPLET (toutes catégories, sans DB)")
    print("=" * 70)

    all_raw: list[tuple[dict, str, str]] = []
    stats_nearby: dict[str, int] = {}
    stats_text: dict[str, int] = {}

    async with httpx.AsyncClient(timeout=30) as client:

        # ==================================================================
        # 1) Nearby Search — tous les SEARCH_TYPES
        # ==================================================================
        total_types = len(SEARCH_TYPES)
        print(f"\n--- NEARBY SEARCH ({total_types} types) ---")
        for i, place_type in enumerate(SEARCH_TYPES, 1):
            cat, subcat = TYPE_TO_CATEGORY[place_type]
            label = f"[{i}/{total_types}] nearby '{place_type}'"
            try:
                result = await nearby_search(client, place_type)
                places = result.get("places", [])
                stats_nearby[place_type] = len(places)
                print(f"  {label:50s} -> {len(places):3d} résultats")
                for p in places:
                    all_raw.append((p, cat, subcat))
            except httpx.HTTPStatusError as e:
                stats_nearby[place_type] = 0
                print(f"  {label:50s} -> ERREUR {e.response.status_code}")
            except Exception as e:
                stats_nearby[place_type] = 0
                print(f"  {label:50s} -> ERREUR {e}")
            await asyncio.sleep(DELAY)

        # ==================================================================
        # 2) Text Search — toutes les TEXT_SEARCHES
        # ==================================================================
        total_text = len(TEXT_SEARCHES)
        print(f"\n--- TEXT SEARCH ({total_text} requêtes) ---")
        for i, (query, cat, subcat) in enumerate(TEXT_SEARCHES, 1):
            label = f"[{i}/{total_text}] text '{query}'"
            try:
                result = await text_search(client, query)
                places = result.get("places", [])
                stats_text[query] = len(places)
                print(f"  {label:55s} -> {len(places):3d} résultats")
                for p in places:
                    all_raw.append((p, cat, subcat))
            except httpx.HTTPStatusError as e:
                stats_text[query] = 0
                print(f"  {label:55s} -> ERREUR {e.response.status_code}")
            except Exception as e:
                stats_text[query] = 0
                print(f"  {label:55s} -> ERREUR {e}")
            await asyncio.sleep(DELAY)

    # ======================================================================
    # 3) Dédupliquer par place_id
    # ======================================================================
    seen: set[str] = set()
    unique_all: list[dict] = []
    for place, cat, subcat in all_raw:
        pid = place.get("id")
        if pid and pid not in seen:
            seen.add(pid)
            unique_all.append(parse_place(place, cat, subcat))

    # ======================================================================
    # 4) Filtrer : garder uniquement ceux avec site web
    # ======================================================================
    with_website = [c for c in unique_all if c.get("website")]

    # ======================================================================
    # 5) Sauvegarde JSON
    # ======================================================================
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    def json_default(obj):
        if isinstance(obj, datetime):
            return obj.isoformat()
        raise TypeError(f"Type {type(obj)} non sérialisable")

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(with_website, f, ensure_ascii=False, indent=2, default=json_default)

    # ======================================================================
    # 6) Résumé détaillé
    # ======================================================================
    print(f"\n{'=' * 70}")
    print(f"  RÉSUMÉ COMPLET")
    print(f"{'=' * 70}")

    total_raw = len(all_raw)
    total_unique = len(unique_all)
    total_with_web = len(with_website)
    duplicates = total_raw - total_unique
    without_web = total_unique - total_with_web

    print(f"\n  Résultats bruts (avec doublons)  : {total_raw}")
    print(f"  Doublons supprimés              : {duplicates}")
    print(f"  Entreprises uniques             : {total_unique}")
    print(f"  Sans site web (exclues)         : {without_web}")
    print(f"  TOTAL FINAL (avec site web)     : {total_with_web}")

    # Stats par type nearby
    print(f"\n  --- Nearby Search par type ---")
    for ptype, count in sorted(stats_nearby.items(), key=lambda x: -x[1]):
        cat, subcat = TYPE_TO_CATEGORY[ptype]
        print(f"    {ptype:30s} ({subcat:25s}) : {count:3d}")
    print(f"    {'TOTAL':30s} {'':25s}   : {sum(stats_nearby.values()):3d}")

    # Stats par text search
    print(f"\n  --- Text Search par requête ---")
    for query, count in sorted(stats_text.items(), key=lambda x: -x[1]):
        print(f"    {query:45s} : {count:3d}")
    print(f"    {'TOTAL':45s} : {sum(stats_text.values()):3d}")

    # Répartition par catégorie (résultat final)
    cat_counter = Counter(c["category"] for c in with_website)
    subcat_counter = Counter(c["subcategory"] for c in with_website)

    print(f"\n  --- Répartition par catégorie (final) ---")
    for cat, count in cat_counter.most_common():
        print(f"    {cat:35s} : {count:3d}")

    print(f"\n  --- Répartition par sous-catégorie (final) ---")
    for subcat, count in subcat_counter.most_common():
        print(f"    {subcat:35s} : {count:3d}")

    # Quelques stats supplémentaires
    with_phone = sum(1 for c in with_website if c.get("phone"))
    with_rating = sum(1 for c in with_website if c.get("rating"))
    avg_rating = 0
    rated = [c["rating"] for c in with_website if c.get("rating")]
    if rated:
        avg_rating = sum(rated) / len(rated)

    print(f"\n  --- Qualité des données ---")
    print(f"    Avec téléphone  : {with_phone:3d} / {total_with_web}")
    print(f"    Avec note Google: {with_rating:3d} / {total_with_web}")
    if rated:
        print(f"    Note moyenne    : {avg_rating:.2f}")

    # Exemples
    print(f"\n  --- EXEMPLES (10 premières) ---")
    for c in with_website[:10]:
        web = c.get("website", "—")
        if len(web) > 40:
            web = web[:37] + "..."
        print(f"    {c['name']:40s} | {c['category']:25s} | {web}")

    print(f"\n  Fichier sauvegardé : {OUTPUT_FILE}")
    print(f"{'=' * 70}\n")


if __name__ == "__main__":
    asyncio.run(main())
