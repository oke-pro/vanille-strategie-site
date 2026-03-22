"""Service CRUD pour les taches -- Portail V2 Phase 4."""

from __future__ import annotations

import uuid
from datetime import datetime, timezone

from fastapi import HTTPException, status
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.models.db_models import (
    ClientDB,
    DossierDB,
    DossierEventDB,
    TaskDB,
    UserDB,
)
from app.models.tasks import TaskCreate, TaskListResponse, TaskResponse, TaskUpdate


def _task_to_response(
    task: TaskDB,
    dossier_title: str | None = None,
    client_name: str | None = None,
    assignee_name: str | None = None,
) -> TaskResponse:
    return TaskResponse(
        id=task.id,
        dossier_id=task.dossier_id,
        dossier_title=dossier_title,
        client_name=client_name,
        assigned_to_name=assignee_name,
        title=task.title,
        description=task.description,
        status=task.status,
        priority=task.priority,
        due_date=task.due_date,
        completed_at=task.completed_at,
        created_at=task.created_at,
    )


async def list_tasks(
    db: AsyncSession,
    *,
    assigned_to: uuid.UUID | None = None,
    dossier_id: uuid.UUID | None = None,
    status_filter: str | None = None,
    priority: str | None = None,
    page: int = 1,
    page_size: int = 50,
) -> TaskListResponse:
    """Liste les taches avec filtres."""
    query = (
        select(TaskDB)
        .options(
            selectinload(TaskDB.dossier).selectinload(DossierDB.client).selectinload(ClientDB.user),
            selectinload(TaskDB.assignee),
        )
    )

    if assigned_to:
        query = query.where(TaskDB.assigned_to == assigned_to)
    if dossier_id:
        query = query.where(TaskDB.dossier_id == dossier_id)
    if status_filter:
        query = query.where(TaskDB.status == status_filter)
    if priority:
        query = query.where(TaskDB.priority == priority)

    # Count total
    count_query = select(func.count(TaskDB.id))
    if assigned_to:
        count_query = count_query.where(TaskDB.assigned_to == assigned_to)
    if dossier_id:
        count_query = count_query.where(TaskDB.dossier_id == dossier_id)
    if status_filter:
        count_query = count_query.where(TaskDB.status == status_filter)
    if priority:
        count_query = count_query.where(TaskDB.priority == priority)

    total_result = await db.execute(count_query)
    total = total_result.scalar() or 0

    query = query.order_by(TaskDB.created_at.desc())
    query = query.offset((page - 1) * page_size).limit(page_size)

    result = await db.execute(query)
    tasks = result.scalars().all()

    items = []
    for task in tasks:
        dossier_title = task.dossier.title if task.dossier else None
        client_name = None
        if task.dossier and task.dossier.client and task.dossier.client.user:
            u = task.dossier.client.user
            client_name = f"{u.first_name} {u.last_name}"
        assignee_name = None
        if task.assignee:
            assignee_name = f"{task.assignee.first_name} {task.assignee.last_name}"
        items.append(
            _task_to_response(task, dossier_title, client_name, assignee_name)
        )

    return TaskListResponse(items=items, total=total)


async def create_task(
    db: AsyncSession, data: TaskCreate, user: UserDB
) -> TaskResponse:
    """Cree une tache."""
    # Verifier que le dossier existe
    dossier_result = await db.execute(
        select(DossierDB)
        .options(selectinload(DossierDB.client).selectinload(ClientDB.user))
        .where(DossierDB.id == data.dossier_id)
    )
    dossier = dossier_result.scalar_one_or_none()
    if not dossier:
        raise HTTPException(status_code=404, detail="Dossier introuvable")

    assigned_to = data.assigned_to or user.id

    task = TaskDB(
        dossier_id=data.dossier_id,
        assigned_to=assigned_to,
        title=data.title,
        description=data.description,
        priority=data.priority,
        due_date=data.due_date,
    )
    db.add(task)
    await db.commit()
    await db.refresh(task)

    # Charger l'assignee
    assignee_name = None
    if assigned_to:
        assignee_result = await db.execute(
            select(UserDB).where(UserDB.id == assigned_to)
        )
        assignee = assignee_result.scalar_one_or_none()
        if assignee:
            assignee_name = f"{assignee.first_name} {assignee.last_name}"

    client_name = None
    if dossier.client and dossier.client.user:
        u = dossier.client.user
        client_name = f"{u.first_name} {u.last_name}"

    return _task_to_response(task, dossier.title, client_name, assignee_name)


async def update_task(
    db: AsyncSession, task_id: uuid.UUID, data: TaskUpdate, user: UserDB
) -> TaskResponse:
    """Met a jour une tache."""
    result = await db.execute(
        select(TaskDB)
        .options(
            selectinload(TaskDB.dossier).selectinload(DossierDB.client).selectinload(ClientDB.user),
            selectinload(TaskDB.assignee),
        )
        .where(TaskDB.id == task_id)
    )
    task = result.scalar_one_or_none()
    if not task:
        raise HTTPException(status_code=404, detail="Tache introuvable")

    update_data = data.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(task, field, value)

    await db.commit()
    await db.refresh(task)

    # Recharger les relations
    result = await db.execute(
        select(TaskDB)
        .options(
            selectinload(TaskDB.dossier).selectinload(DossierDB.client).selectinload(ClientDB.user),
            selectinload(TaskDB.assignee),
        )
        .where(TaskDB.id == task_id)
    )
    task = result.scalar_one()

    dossier_title = task.dossier.title if task.dossier else None
    client_name = None
    if task.dossier and task.dossier.client and task.dossier.client.user:
        u = task.dossier.client.user
        client_name = f"{u.first_name} {u.last_name}"
    assignee_name = None
    if task.assignee:
        assignee_name = f"{task.assignee.first_name} {task.assignee.last_name}"

    return _task_to_response(task, dossier_title, client_name, assignee_name)


async def complete_task(
    db: AsyncSession, task_id: uuid.UUID, user: UserDB
) -> TaskResponse:
    """Marque une tache comme terminee et ajoute un evenement au dossier."""
    result = await db.execute(
        select(TaskDB)
        .options(
            selectinload(TaskDB.dossier).selectinload(DossierDB.client).selectinload(ClientDB.user),
            selectinload(TaskDB.assignee),
        )
        .where(TaskDB.id == task_id)
    )
    task = result.scalar_one_or_none()
    if not task:
        raise HTTPException(status_code=404, detail="Tache introuvable")

    task.status = "done"
    task.completed_at = datetime.now(timezone.utc)

    # Ajouter un evenement au dossier
    event = DossierEventDB(
        dossier_id=task.dossier_id,
        actor_id=user.id,
        type="task_completed",
        title=f"Tache terminee : {task.title}",
        description=f"La tache \u00ab {task.title} \u00bb a ete marquee comme terminee.",
    )
    db.add(event)

    await db.commit()
    await db.refresh(task)

    dossier_title = task.dossier.title if task.dossier else None
    client_name = None
    if task.dossier and task.dossier.client and task.dossier.client.user:
        u = task.dossier.client.user
        client_name = f"{u.first_name} {u.last_name}"
    assignee_name = None
    if task.assignee:
        assignee_name = f"{task.assignee.first_name} {task.assignee.last_name}"

    return _task_to_response(task, dossier_title, client_name, assignee_name)


async def delete_task(db: AsyncSession, task_id: uuid.UUID) -> None:
    """Supprime une tache."""
    result = await db.execute(select(TaskDB).where(TaskDB.id == task_id))
    task = result.scalar_one_or_none()
    if not task:
        raise HTTPException(status_code=404, detail="Tache introuvable")

    await db.delete(task)
    await db.commit()
