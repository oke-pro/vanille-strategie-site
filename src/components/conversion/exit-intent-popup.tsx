"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitNewsletter } from "@/lib/api";
import { trackEvent } from "@/components/analytics/google-analytics";
import { useConversion } from "./conversion-context";

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const triggered = useRef(false);
  const { setExitPopupOpen } = useConversion();

  const showPopup = useCallback(() => {
    if (triggered.current) return;

    // Ne pas afficher si déjà vu ou si formulaire soumis
    if (typeof window !== "undefined") {
      if (localStorage.getItem("vs_exit_popup_shown") === "1") return;
      if (localStorage.getItem("vs_form_submitted") === "1") return;
    }

    triggered.current = true;
    setVisible(true);
    setExitPopupOpen(true);
    localStorage.setItem("vs_exit_popup_shown", "1");
    trackEvent("popup_show", "exit_intent");
  }, [setExitPopupOpen]);

  const closePopup = useCallback(() => {
    setVisible(false);
    setExitPopupOpen(false);
  }, [setExitPopupOpen]);

  useEffect(() => {
    // Vérification initiale
    if (typeof window === "undefined") return;
    if (localStorage.getItem("vs_exit_popup_shown") === "1") return;
    if (localStorage.getItem("vs_form_submitted") === "1") return;

    // Desktop : détection de sortie du viewport
    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) {
        showPopup();
      }
    }

    // Mobile : inactivité après 45s
    let inactivityTimer: ReturnType<typeof setTimeout>;
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;

    if (isMobile) {
      const resetTimer = () => {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(showPopup, 45000);
      };

      resetTimer();
      document.addEventListener("touchstart", resetTimer);
      document.addEventListener("scroll", resetTimer);

      return () => {
        clearTimeout(inactivityTimer);
        document.removeEventListener("touchstart", resetTimer);
        document.removeEventListener("scroll", resetTimer);
      };
    } else {
      document.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [showPopup]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await submitNewsletter({ email, source: "exit_intent_guide" });
      setSuccess(true);
      trackEvent("form_submit", "exit_intent_guide");
      if (typeof window !== "undefined") {
        localStorage.setItem("vs_form_submitted", "1");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      style={{ animation: "fadeIn 0.3s ease-out" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closePopup();
      }}
    >
      <div
        className="relative mx-4 w-full max-w-md rounded-3xl border border-white/20 bg-white p-8 shadow-2xl sm:p-10"
        style={{ animation: "scaleIn 0.3s ease-out" }}
      >
        {/* Bouton fermer */}
        <button
          onClick={closePopup}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          aria-label="Fermer"
        >
          <X className="h-5 w-5" />
        </button>

        {success ? (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Guide envoyé !</h3>
            <p className="mt-2 text-sm text-slate-600">
              Consultez votre boîte mail. Bonne lecture !
            </p>
            <Button
              onClick={closePopup}
              variant="outline"
              className="mt-6 rounded-full"
            >
              Fermer
            </Button>
          </div>
        ) : (
          <>
            {/* Icône décorative */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>

            <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">
              Avant de partir
            </h2>
            <p className="mt-3 text-center text-slate-600">
              Recevez notre <strong>Guide Fiscal Maurice 2026</strong> gratuitement par email.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <Input
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 rounded-xl border-slate-200 bg-slate-50/50 text-center transition-all focus:bg-white"
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 w-full rounded-xl bg-blue-600 font-bold shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
                disabled={loading}
              >
                {loading ? "Envoi en cours..." : "Recevoir le guide gratuit"}
              </Button>
              {error && (
                <p className="text-center text-sm text-rose-500">{error}</p>
              )}
            </form>

            <p className="mt-4 text-center text-xs text-slate-400">
              Pas de spam. Désinscription en un clic.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
