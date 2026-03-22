"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { X, Users, TrendingUp } from "lucide-react";
import { useConversion } from "./conversion-context";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://vanille-strategie-api.oke.pro";

interface SocialProofData {
  leads_this_month: number;
  dossiers_total: number;
  last_activity_hours_ago: number | null;
  companies_accompanied: number;
}

function buildMessages(data: SocialProofData): string[] {
  const messages: string[] = [];

  messages.push(
    `Plus d'une centaine d'entreprises accompagnées à Maurice avec un suivi personnalisé`
  );

  if (data.leads_this_month > 0) {
    messages.push(
      `${data.leads_this_month} demande${data.leads_this_month > 1 ? "s" : ""} d'accompagnement ce mois-ci`
    );
  }

  if (data.last_activity_hours_ago && data.last_activity_hours_ago <= 48) {
    messages.push(
      `Dernière demande d'étude : il y a ${data.last_activity_hours_ago}h`
    );
  }

  return messages;
}

export function SocialProofNotification() {
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const showCount = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dismissTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { exitPopupOpen } = useConversion();

  // Charger les données réelles
  useEffect(() => {
    fetch(`${API_URL}/api/v1/social-proof`)
      .then((res) => res.json())
      .then((data: SocialProofData) => {
        setMessages(buildMessages(data));
      })
      .catch(() => {
        // Fallback factuel si API indisponible
        setMessages([
          "Plus d'une centaine d'entreprises accompagnées à Maurice",
        ]);
      });
  }, []);

  const dismiss = useCallback(() => {
    setVisible(false);
    if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current);
  }, []);

  const dismissPermanently = useCallback(() => {
    dismiss();
    showCount.current = 999;
    if (timerRef.current) clearTimeout(timerRef.current);
    if (typeof window !== "undefined") {
      localStorage.setItem("vs_social_proof_dismissed", "1");
    }
  }, [dismiss]);

  const showNotification = useCallback(() => {
    if (showCount.current >= 2 || messages.length === 0) return;
    if (typeof window !== "undefined" && localStorage.getItem("vs_social_proof_dismissed") === "1") return;

    setCurrentIndex(showCount.current % messages.length);
    setVisible(true);
    showCount.current += 1;

    dismissTimerRef.current = setTimeout(() => {
      setVisible(false);
      if (showCount.current < 2) {
        timerRef.current = setTimeout(showNotification, 45000);
      }
    }, 6000);
  }, [messages]);

  useEffect(() => {
    if (messages.length === 0) return;
    if (typeof window !== "undefined" && localStorage.getItem("vs_social_proof_dismissed") === "1") return;

    timerRef.current = setTimeout(showNotification, 12000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current);
    };
  }, [showNotification, messages]);

  if (exitPopupOpen) return null;
  if (!visible) return null;

  const Icon = currentIndex === 0 ? Users : TrendingUp;

  return (
    <div
      className="fixed bottom-6 left-6 z-40 max-w-sm rounded-2xl border border-slate-100 bg-white p-4 shadow-xl"
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
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-600">
          <Icon className="h-4 w-4" />
        </div>
        <p className="text-sm font-medium text-slate-700">{messages[currentIndex]}</p>
      </div>
    </div>
  );
}
