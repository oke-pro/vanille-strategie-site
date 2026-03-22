/**
 * Fonctions fetch pour le portail client — cookies inclus automatiquement.
 * Gestion des erreurs 401 → redirection vers /login.
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001";

class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = "ApiError";
  }
}

async function portalFetch<T = unknown>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (res.status === 401) {
    // Token expiré ou invalide → redirection
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
    throw new ApiError("Session expirée", 401);
  }

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new ApiError(
      body.detail || "Une erreur est survenue",
      res.status
    );
  }

  // Certains endpoints renvoient un body vide (204, etc.)
  const text = await res.text();
  return text ? JSON.parse(text) : ({} as T);
}

// ── Raccourcis ─────────────────────────────────────────────

export function portalGet<T = unknown>(path: string) {
  return portalFetch<T>(path, { method: "GET" });
}

export function portalPost<T = unknown>(path: string, data?: unknown) {
  return portalFetch<T>(path, {
    method: "POST",
    body: data ? JSON.stringify(data) : undefined,
  });
}

export function portalPatch<T = unknown>(path: string, data: unknown) {
  return portalFetch<T>(path, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}

export function portalDelete<T = unknown>(path: string) {
  return portalFetch<T>(path, { method: "DELETE" });
}
