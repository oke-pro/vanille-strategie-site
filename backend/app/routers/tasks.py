"""Router API pour les taches -- Portail V2 Phase 4."""

from __future__ import annotations

import uuid

from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.auth.dependencies import require_role
from app.database import get_db
from app.models.db_models import UserDB
from app.models.tasks import TaskCreate, TaskListResponse, TaskResponse, TaskUpdate
from app.services import tasks as task_service

router = APIRouter(prefix="/tasks", tags=["tasks"])


@router.get("", response_model=TaskListResponse)
async def list_tasks(
    status: str | None = Query(None),
    priority: str | None = Query(None),
    assigned_to: uuid.UUID | None = Query(None),
    dossier_id: uuid.UUID | None = Query(None),
    page: int = Query(1, ge=1),
    page_size: int = Query(50, ge=1, le=100),
    user: UserDB = Depends(require_role("staff")),
    db: AsyncSession = Depends(get_db),
):
    """Liste des taches avec filtres."""
    return await task_service.list_tasks(
        db,
        assigned_to=assigned_to,
        dossier_id=dossier_id,
        status_filter=status,
        priority=priority,
        page=page,
        page_size=page_size,
    )


@router.post("", response_model=TaskResponse, status_code=201)
async def create_task(
    body: TaskCreate,
    user: UserDB = Depends(require_role("staff")),
    db: AsyncSession = Depends(get_db),
):
    """Creer une tache."""
    return await task_service.create_task(db, body, user)


@router.patch("/{task_id}", response_model=TaskResponse)
async def update_task(
    task_id: uuid.UUID,
    body: TaskUpdate,
    user: UserDB = Depends(require_role("staff")),
    db: AsyncSession = Depends(get_db),
):
    """Modifier une tache."""
    return await task_service.update_task(db, task_id, body, user)


@router.patch("/{task_id}/complete", response_model=TaskResponse)
async def complete_task(
    task_id: uuid.UUID,
    user: UserDB = Depends(require_role("staff")),
    db: AsyncSession = Depends(get_db),
):
    """Marquer une tache comme terminee."""
    return await task_service.complete_task(db, task_id, user)


@router.delete("/{task_id}", status_code=204)
async def delete_task(
    task_id: uuid.UUID,
    user: UserDB = Depends(require_role("staff")),
    db: AsyncSession = Depends(get_db),
):
    """Supprimer une tache."""
    await task_service.delete_task(db, task_id)
