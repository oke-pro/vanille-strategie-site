"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}

// Track custom events for the sales funnel
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== "undefined" && "gtag" in window) {
    const w = window as Window & { gtag: (command: string, action: string, params: Record<string, unknown>) => void };
    w.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
}
