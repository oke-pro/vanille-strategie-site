import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.database import init_db
from app.routers import admin, auth, companies, health, leads

logging.basicConfig(level=logging.INFO, format="%(asctime)s | %(levelname)s | %(message)s")


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    logging.info("Database tables created")
    yield


app = FastAPI(
    lifespan=lifespan,
    title="Vanille Stratégie API",
    description="API backend pour la capture de leads et notifications — vanillestrategie.fr",
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        settings.frontend_url,
        "https://vanille-strategie.oke.pro",
        "https://vanillestrategie.fr",
        "http://localhost:3001",
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(health.router)
app.include_router(leads.router, prefix="/api/v1")
app.include_router(admin.router, prefix="/api/v1")
app.include_router(companies.router, prefix="/api/v1")
app.include_router(auth.router, prefix="/api/v1")


@app.get("/")
async def root():
    return {
        "service": "Vanille Stratégie API",
        "version": "0.1.0",
        "docs": "/docs",
    }
