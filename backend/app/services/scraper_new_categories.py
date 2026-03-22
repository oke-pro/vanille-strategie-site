"""
Scraper Google Places pour les NOUVELLES catégories uniquement.
Utilise Text Search Google Places pour les catégories non encore couvertes.
Usage : cd backend && uv run python -m app.services.scraper_new_categories
"""

import asyncio
import json
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

import httpx

from app.services.scraper import (
    parse_place,
    text_search,
)

DATA_DIR = Path(__file__).resolve().parents[2] / "data"
OUTPUT_FILE = DATA_DIR / "companies_new_categories.json"

# Nouvelles catégories à scraper via Text Search
# Format : (query, category, subcategory)
NEW_CATEGORY_SEARCHES = [
    ("international school Mauritius", "Éducation", "Écoles internationales"),
    ("coworking space Mauritius", "Tech & Digital", "Coworking"),
    ("freight forwarder Mauritius", "Transport & Logistique", "Freight"),
    ("recruitment agency Mauritius", "Services RH", "Recrutement"),
    ("restaurant Mauritius Port Louis", "Tourisme & Hôtellerie", "Restaurants"),
    ("car rental Mauritius", "Transport & Logistique", "Location de véhicules"),
    ("shipping company Mauritius", "Transport & Logistique", "Transport maritime"),
    ("renewable energy Mauritius", "Industrie & Manufacturing", "Énergie"),
    ("gym fitness Mauritius", "Santé", "Fitness"),
    ("private clinic Mauritius", "Santé", "Cliniques privées"),
]


async def main():
    print("=" * 70)
    print("  Scraper Google Places — Nouvelles catégories (sans DB)")
    print("=" * 70)

    all_parsed: list[dict] = []
    seen_ids: set[str] = set()
    search_stats: dict[str, int] = {}

    async with httpx.AsyncClient(timeout=30) as client:

        for idx, (query, category, subcategory) in enumerate(NEW_CATEGORY_SEARCHES, 1):
            print(f"\n[{idx}/{len(NEW_CATEGORY_SEARCHES)}] Text Search — '{query}' ...")
            try:
                result = await text_search(client, query)
                places = result.get("places", [])
                print(f"      -> {len(places)} résultats bruts")

                added_count = 0
                for p in places:
                    pid = p.get("id")
                    if pid and pid not in seen_ids:
                        seen_ids.add(pid)
                        parsed = parse_place(p, category, subcategory)
                        # Ne garder que ceux avec un site web
                        if parsed.get("website"):
                            all_parsed.append(parsed)
                            added_count += 1

                search_stats[query] = added_count
                print(f"      -> {added_count} ajoutés (avec site web)")

            except httpx.HTTPStatusError as e:
                print(f"      ERREUR HTTP {e.response.status_code}: {e.response.text[:200]}")
                search_stats[query] = 0
            except Exception as e:
                print(f"      ERREUR: {e}")
                search_stats[query] = 0

            await asyncio.sleep(0.5)

    # Sauvegarde JSON
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    def json_default(obj):
        if isinstance(obj, datetime):
            return obj.isoformat()
        raise TypeError(f"Type {type(obj)} non sérialisable")

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(all_parsed, f, ensure_ascii=False, indent=2, default=json_default)

    print(f"\n{'=' * 70}")
    print(f"  Résultats sauvegardés dans : {OUTPUT_FILE}")
    print(f"{'=' * 70}")

    # Résumé
    total = len(all_parsed)
    with_website = sum(1 for c in all_parsed if c.get("website"))
    without_website = total - with_website
    with_phone = sum(1 for c in all_parsed if c.get("phone"))
    with_rating = sum(1 for c in all_parsed if c.get("rating"))

    cat_counter = Counter(c.get("category", "?") for c in all_parsed)
    subcat_counter = Counter(c.get("subcategory", "?") for c in all_parsed)

    print(f"\n--- RÉSUMÉ GLOBAL ---")
    print(f"  Entreprises uniques trouvées : {total}")
    print(f"  Avec site web               : {with_website}")
    print(f"  Sans site web               : {without_website}")
    print(f"  Avec téléphone              : {with_phone}")
    print(f"  Avec note Google            : {with_rating}")

    print(f"\n--- PAR RECHERCHE (avec site web) ---")
    for query, count in search_stats.items():
        print(f"  {query:50s} : {count}")

    print(f"\n--- PAR CATÉGORIE ---")
    for cat, count in cat_counter.most_common():
        print(f"  {cat:35s} : {count}")

    print(f"\n--- PAR SOUS-CATÉGORIE ---")
    for subcat, count in subcat_counter.most_common():
        print(f"  {subcat:35s} : {count}")

    # Afficher quelques exemples
    print(f"\n--- EXEMPLES (premiers 10) ---")
    for c in all_parsed[:10]:
        web = c.get("website", "—")
        print(f"  • {c['name']:40s} | {c['category']:25s} | {web}")

    print()


if __name__ == "__main__":
    asyncio.run(main())
