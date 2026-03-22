"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { X } from "lucide-react";
import { useConversion } from "./conversion-context";

const messages = [
  "14 entrepreneurs ont demandé une étude ce mois-ci",
  "Dernière consultation : il y a 2 heures",
  "Maurice classé #1 en Afrique pour la stabilité économique",
];

export function SocialProofNotification() {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const showCount = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dismissTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { exitPopupOpen } = useConversion();

  const dismiss = useCallback(() => {
    setVisible(false);
    if (dismissTimerRef.current) {
      clearTimeout(dismissTimerRef.current);
    }
  }, []);

  const dismissPermanently = useCallback(() => {
    dismiss();
    // Arrêter toutes les futures notifications
    showCount.current = 999;
    if (timerRef.current) clearTimeout(timerRef.current);
    if (typeof window !== "undefined") {
      localStorage.setItem("vs_social_proof_dismissed", "1");
    }
  }, [dismiss]);

  const showNotification = useCallback(() => {
    if (showCount.current >= 3) return;
    if (typeof window !== "undefined" && localStorage.getItem("vs_social_proof_dismissed") === "1") return;

    setCurrentIndex(showCount.current % messages.length);
    setVisible(true);
    showCount.current += 1;

    // Auto-dismiss après 5s
    dismissTimerRef.current = setTimeout(() => {
      setVisible(false);

      // Planifier la prochaine notification après 30s (si pas encore 3)
      if (showCount.current < 3) {
        timerRef.current = setTimeout(showNotification, 30000);
      }
    }, 5000);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("vs_social_proof_dismissed") === "1") return;

    // Première notification après 8s
    timerRef.current = setTimeout(showNotification, 8000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current);
    };
  }, [showNotification]);

  // Masquer si exit popup est ouvert
  if (exitPopupOpen) return null;
  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 left-6 z-40 max-w-xs rounded-2xl border border-slate-100 bg-white p-4 shadow-xl"
      style={{ animation: "slideInLeft 0.4s ease-out" }}
    >
      <button
        onClick={dismissPermanently}
        className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-400 shadow-md transition-colors hover:text-slate-600"
        aria-label="Fermer"
      >
        <X className="h-3.5 w-3.5" />
      </button>
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <p className="text-sm font-medium text-slate-700">{messages[currentIndex]}</p>
      </div>
    </div>
  );
}
