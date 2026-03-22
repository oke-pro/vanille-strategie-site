import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Proxy (remplace middleware.ts dans Next.js 16) — protège les routes /portal/* et /cabinet/*
 * Vérifie la présence du cookie vs_access_token et redirige vers /login si absent.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Routes protégées
  const isPortalRoute = pathname.startsWith("/portal");
  const isCabinetRoute = pathname.startsWith("/cabinet");

  if (!isPortalRoute && !isCabinetRoute) {
    return NextResponse.next();
  }

  const accessToken = request.cookies.get("vs_access_token")?.value;

  if (!accessToken) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Pour les routes /cabinet/*, on vérifie le rôle dans le JWT
  // Le JWT est au format header.payload.signature — on décode le payload (base64)
  if (isCabinetRoute) {
    try {
      const payloadB64 = accessToken.split(".")[1];
      const payload = JSON.parse(atob(payloadB64));
      if (payload.role !== "staff") {
        // Un client qui essaie d'accéder au cabinet → redirigé vers le portail
        return NextResponse.redirect(new URL("/portal/dashboard", request.url));
      }
    } catch {
      // Token malformé → login
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/portal/:path*", "/cabinet/:path*"],
};
