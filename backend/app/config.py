from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    # Resend
    resend_api_key: str = ""
    email_from: str = "Vanille Stratégie <noreply@vanille-strategie.oke.pro>"

    # Leads
    leads_notify_email: str = "dl@vanillestrategie.com"

    # CORS
    frontend_url: str = "https://vanille-strategie.oke.pro"

    # API
    api_key: str = ""

    model_config = {"env_file": ".env", "env_file_encoding": "utf-8"}


settings = Settings()
