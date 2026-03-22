"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

export function StickyCTAMobile() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Toujours visible (le lien pointe vers /contact)
  }, []);

  // Ne pas afficher sur la page /contact
  if (pathname === "/contact") return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-slate-100 bg-white/95 px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Décalage pour ne pas masquer le bouton WhatsApp (bottom-6 right-6 = ~80px) */}
      <div className="mr-16">
        <a
          href="/contact"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 active:scale-[0.98]"
        >
          Étude gratuite
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
