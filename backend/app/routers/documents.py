"""Router API pour la gestion des documents — Portail V2 Vanille Stratégie."""

from __future__ import annotations

import os
import uuid
from pathlib import Path

from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile, status
from fastapi.responses import FileResponse
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.auth.dependencies import get_current_user, require_role
from app.database import get_db
from app.models.db_models import ClientDB, DocumentDB, UserDB
from app.models.documents import DocumentResponse, DocumentUpdate

router = APIRouter(prefix="/documents", tags=["documents"])

# Répertoire de stockage des fichiers uploadés
UPLOAD_DIR = Path("/data/uploads")


def _doc_to_response(doc: DocumentDB) -> DocumentResponse:
    """Convertit un DocumentDB en DocumentResponse."""
    return DocumentResponse(
        id=doc.id,
        filename=doc.filename,
        original_name=doc.original_name,
        mime_type=doc.mime_type,
        size_bytes=doc.size_bytes,
        category=doc.category,
        status=doc.status,
        uploaded_by_name=f"{doc.uploader.first_name} {doc.uploader.last_name}",
        dossier_id=doc.dossier_id,
        client_id=doc.client_id,
        created_at=doc.created_at,
    )


@router.post("/upload", response_model=DocumentResponse, status_code=201)
async def upload_document(
    file: UploadFile = File(...),
    client_id: uuid.UUID = Form(...),
    category: str = Form("autre"),
    dossier_id: uuid.UUID | None = Form(None),
    user: UserDB = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Upload un fichier (multipart). Sauvegarde sur disque dans /data/uploads/."""
    # Vérifier l'accès : si client, ne peut uploader que pour lui-même
    if user.role == "client":
        client_result = await db.execute(
            select(ClientDB).where(ClientDB.user_id == user.id)
        )
        client = client_result.scalar_one_or_none()
        if not client or client.id != client_id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Accès refusé",
            )
    else:
        # Staff : vérifier que le client existe
        client_result = await db.execute(
            select(ClientDB).where(ClientDB.id == client_id)
        )
        if not client_result.scalar_one_or_none():
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Client introuvable",
            )

    # Générer un nom de fichier unique
    ext = os.path.splitext(file.filename or "file")[1]
    unique_filename = f"{uuid.uuid4().hex}{ext}"

    # Créer le répertoire si nécessaire
    client_dir = UPLOAD_DIR / str(client_id)
    client_dir.mkdir(parents=True, exist_ok=True)

    # Sauvegarder le fichier
    file_path = client_dir / unique_filename
    content = await file.read()
    file_path.write_bytes(content)

    # Créer l'entrée en base
    doc = DocumentDB(
        client_id=client_id,
        dossier_id=dossier_id,
        uploaded_by=user.id,
        filename=unique_filename,
        original_name=file.filename or "fichier",
        mime_type=file.content_type or "application/octet-stream",
        size_bytes=len(content),
        storage_path=str(file_path),
        category=category,
        status="pending",
    )
    db.add(doc)
    await db.commit()
    await db.refresh(doc)

    # Charger les relations
    result = await db.execute(
        select(DocumentDB)
        .options(selectinload(DocumentDB.uploader))
        .where(DocumentDB.id == doc.id)
    )
    doc = result.scalar_one()

    return _doc_to_response(doc)


@router.get("/{document_id}/download")
async def download_document(
    document_id: uuid.UUID,
    user: UserDB = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Télécharge un fichier."""
    result = await db.execute(
        select(DocumentDB)
        .options(selectinload(DocumentDB.uploader))
        .where(DocumentDB.id == document_id)
    )
    doc = result.scalar_one_or_none()
    if not doc:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Document introuvable",
        )

    # Vérifier l'accès pour les clients
    if user.role == "client":
        client_result = await db.execute(
            select(ClientDB).where(ClientDB.user_id == user.id)
        )
        client = client_result.scalar_one_or_none()
        if not client or doc.client_id != client.id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Accès refusé",
            )

    file_path = Path(doc.storage_path)
    if not file_path.exists():
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Fichier introuvable sur le disque",
        )

    return FileResponse(
        path=str(file_path),
        filename=doc.original_name,
        media_type=doc.mime_type,
    )


@router.patch("/{document_id}", response_model=DocumentResponse)
async def update_document(
    document_id: uuid.UUID,
    body: DocumentUpdate,
    user: UserDB = Depends(require_role("staff")),
    db: AsyncSession = Depends(get_db),
):
    """Met à jour le statut d'un document (staff uniquement — valider/rejeter)."""
    result = await db.execute(
        select(DocumentDB)
        .options(selectinload(DocumentDB.uploader))
        .where(DocumentDB.id == document_id)
    )
    doc = result.scalar_one_or_none()
    if not doc:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Document introuvable",
        )

    update_data = body.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(doc, field, value)

    await db.commit()
    await db.refresh(doc)

    # Recharger avec les relations
    result = await db.execute(
        select(DocumentDB)
        .options(selectinload(DocumentDB.uploader))
        .where(DocumentDB.id == doc.id)
    )
    doc = result.scalar_one()

    return _doc_to_response(doc)
