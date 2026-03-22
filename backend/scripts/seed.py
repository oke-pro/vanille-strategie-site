"""
Script de seed — Crée les utilisateurs et dossiers de test pour le Portail V2.

Usage :
    cd backend && python -m scripts.seed
"""

import asyncio
import uuid
from datetime import date, datetime, timezone

from sqlalchemy import select

from app.auth.passwords import hash_password
from app.database import async_session, init_db
from app.models.db_models import ClientDB, DossierDB, DossierEventDB, UserDB


async def seed():
    await init_db()

    async with async_session() as db:
        # Vérifier si déjà seedé
        result = await db.execute(select(UserDB).where(UserDB.email == "dl@vanillestrategie.com"))
        if result.scalar_one_or_none():
            print("Base déjà initialisée — seed ignoré.")
            return

        # ── Staff : Didier Laroussinie ────────────────────────────
        staff_id = uuid.uuid4()
        staff = UserDB(
            id=staff_id,
            email="dl@vanillestrategie.com",
            hashed_password=hash_password("VS-Admin-2024!"),
            first_name="Didier",
            last_name="Laroussinie",
            phone="+230 5700 0000",
            role="staff",
            staff_permissions=["admin"],
            is_active=True,
            email_verified=True,
        )
        db.add(staff)

        # ── Client de test : Jean Dupont ──────────────────────────
        client_user_id = uuid.uuid4()
        client_user = UserDB(
            id=client_user_id,
            email="jean@test.com",
            hashed_password=hash_password("Client-Test-2024!"),
            first_name="Jean",
            last_name="Dupont",
            phone="+33 6 12 34 56 78",
            role="client",
            is_active=True,
            email_verified=True,
        )
        db.add(client_user)

        # ── Profil client lié ─────────────────────────────────────
        client_id = uuid.uuid4()
        client = ClientDB(
            id=client_id,
            user_id=client_user_id,
            company_name="Dupont Consulting Ltd",
            company_type="DC",
            profil="entrepreneur",
            nationality="Française",
            assigned_to=staff_id,
            status="active",
        )
        db.add(client)

        # ── Dossier 1 : Création de société ───────────────────────
        dossier1_id = uuid.uuid4()
        dossier1 = DossierDB(
            id=dossier1_id,
            client_id=client_id,
            type="creation_societe",
            title="Création Dupont Consulting Ltd — Domestic Company",
            status="in_progress",
            current_step=2,
            steps=[
                {"label": "Réservation du nom", "done": True},
                {"label": "Rédaction des statuts", "done": True},
                {"label": "Enregistrement au Registrar", "done": False},
                {"label": "Ouverture compte bancaire", "done": False},
                {"label": "Immatriculation MRA", "done": False},
            ],
            priority="high",
            due_date=date(2026, 4, 15),
            assigned_to=staff_id,
        )
        db.add(dossier1)

        # ── Dossier 2 : Permis de résidence ──────────────────────
        dossier2_id = uuid.uuid4()
        dossier2 = DossierDB(
            id=dossier2_id,
            client_id=client_id,
            type="permis_residence",
            title="Occupation Permit — Jean Dupont",
            status="draft",
            current_step=0,
            steps=[
                {"label": "Collecte des documents", "done": False},
                {"label": "Soumission EDB", "done": False},
                {"label": "Approbation EDB", "done": False},
                {"label": "Visa d'entrée", "done": False},
            ],
            priority="normal",
            due_date=date(2026, 5, 30),
            assigned_to=staff_id,
        )
        db.add(dossier2)

        # ── Événements de test ────────────────────────────────────
        event1 = DossierEventDB(
            dossier_id=dossier1_id,
            actor_id=staff_id,
            type="status_change",
            title="Dossier passé en cours de traitement",
            description="Didier Laroussinie a démarré le traitement du dossier.",
        )
        db.add(event1)

        event2 = DossierEventDB(
            dossier_id=dossier1_id,
            actor_id=staff_id,
            type="task_completed",
            title="Réservation du nom validée",
            description="Le nom « Dupont Consulting Ltd » a été approuvé par le Registrar.",
        )
        db.add(event2)

        await db.commit()
        print("Seed terminé avec succès !")
        print(f"  Staff : dl@vanillestrategie.com / VS-Admin-2024!")
        print(f"  Client : jean@test.com / Client-Test-2024!")


if __name__ == "__main__":
    asyncio.run(seed())
