"""Simple in-memory rate limiter per IP — no external dependency."""

from collections import defaultdict
from time import time

from fastapi import HTTPException


class RateLimiter:
    """Simple in-memory rate limiter per IP.

    Usage:
        limiter = RateLimiter(max_requests=5, window_seconds=60)
        limiter.check_or_raise(ip)  # raises 429 if limit exceeded
    """

    def __init__(self, max_requests: int = 5, window_seconds: int = 60):
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self.requests: dict[str, list[float]] = defaultdict(list)

    def _cleanup(self, ip: str, now: float) -> None:
        """Remove timestamps older than the current window."""
        self.requests[ip] = [
            t for t in self.requests[ip] if now - t < self.window_seconds
        ]

    def check(self, ip: str) -> bool:
        """Returns True if the request is allowed, False otherwise."""
        now = time()
        self._cleanup(ip, now)
        if len(self.requests[ip]) >= self.max_requests:
            return False
        self.requests[ip].append(now)
        return True

    def check_or_raise(self, ip: str) -> None:
        """Raise HTTP 429 if the rate limit is exceeded."""
        if not self.check(ip):
            raise HTTPException(
                status_code=429,
                detail="Trop de requêtes. Veuillez réessayer dans quelques instants.",
            )


# Pre-configured limiters for each route group
contact_limiter = RateLimiter(max_requests=3, window_seconds=60)
quick_limiter = RateLimiter(max_requests=3, window_seconds=60)
newsletter_limiter = RateLimiter(max_requests=5, window_seconds=60)
simulateur_limiter = RateLimiter(max_requests=10, window_seconds=60)
