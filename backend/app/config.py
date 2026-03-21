from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    # Database
    database_url: str = "postgresql+asyncpg://vs:vs_password@localhost:5432/vanille_strategie"

    # Resend
    resend_api_key: str = ""
    email_from: str = "Vanille Stratégie <noreply@vanillestrategie.fr>"

    # Leads
    leads_notify_email: str = "dl@vanillestrategie.fr"

    # CORS
    frontend_url: str = "https://vanillestrategie.fr"

    # API
    api_key: str = ""

    model_config = {"env_file": ".env", "env_file_encoding": "utf-8"}


settings = Settings()
