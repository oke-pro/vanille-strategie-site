"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { portalGet } from "@/lib/api-portal";
import { useAuth } from "@/lib/auth-context";

interface Dossier {
  id: string;
  type: string;
  title: string;
  status: string;
  priority: string;
  current_step: number;
  created_at: string;
}

interface TimelineEvent {
  id: string;
  actor: string;
  type: string;
  title: string;
  description: string | null;
  created_at: string;
}

interface DossierDetail {
  dossier: Dossier;
  events: TimelineEvent[];
}

interface UnreadCount {
  count: number;
}

interface Invoice {
  id: string;
  number: string;
  status: string;
  amount_ttc: number;
  currency: string;
  due_date: string;
}

interface InvoiceList {
  items: Invoice[];
  total: number;
}

export default function PortalDashboard() {
  const { user } = useAuth();
  const [dossiers, setDossiers] = useState<Dossier[]>([]);
  const [recentEvents, setRecentEvents] = useState<(TimelineEvent & { dossierTitle: string })[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [pendingInvoicesAmount, setPendingInvoicesAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Charger les dossiers
        const dossiersList = await portalGet<Dossier[]>("/api/v1/dossiers");
        setDossiers(dossiersList);

        // Charger messages non lus
        portalGet<UnreadCount>("/api/v1/messages/unread-count")
          .then((data) => setUnreadCount(data.count))
          .catch(() => {});

        // Charger factures en attente
        portalGet<InvoiceList>("/api/v1/invoices?status=sent")
          .then((data) => {
            const total = data.items.reduce((sum, inv) => sum + Number(inv.amount_ttc), 0);
            setPendingInvoicesAmount(total);
          })
          .catch(() => {});

        // Charger les événements récents depuis chaque dossier
        const allEvents: (TimelineEvent & { dossierTitle: string })[] = [];
        for (const d of dossiersList.slice(0, 5)) {
          try {
            const detail = await portalGet<DossierDetail>(`/api/v1/dossiers/${d.id}`);
            for (const event of detail.events.slice(0, 3)) {
              allEvents.push({ ...event, dossierTitle: d.title });
            }
          } catch {
            // Ignorer les erreurs individuelles
          }
        }
        // Trier par date décroissante et prendre les 10 plus récents
        allEvents.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        setRecentEvents(allEvents.slice(0, 10));
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Erreur de chargement";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const activeDossiers = dossiers.filter((d) => d.status === "in_progress" || d.status === "waiting_client" || d.status === "waiting_admin");
  const completedDossiers = dossiers.filter((d) => d.status === "completed");

  const fmtAmount = (n: number) =>
    n.toLocaleString("fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  const stats = [
    {
      label: "Dossiers en cours",
      value: activeDossiers.length,
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      label: "Dossiers termines",
      value: completedDossiers.length,
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      label: "Messages non lus",
      value: unreadCount,
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      label: "Factures en attente",
      value: pendingInvoicesAmount > 0 ? `${fmtAmount(pendingInvoicesAmount)} MUR` : "0",
      color: "bg-amber-50 text-amber-700 border-amber-200",
    },
  ];

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto">
        <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">Tableau de bord</h1>
        <div className="text-slate-500">Chargement...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto">
        <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">Tableau de bord</h1>
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">
        Tableau de bord
      </h1>

      {/* Cartes de statistiques */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className={`rounded-xl border p-5 ${stat.color}`}>
            <p className="text-sm font-medium opacity-80">{stat.label}</p>
            <p className="text-3xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Dossiers en cours */}
      {activeDossiers.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm mb-6">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-medium text-slate-900">Dossiers en cours</h2>
            <Link href="/portal/dossiers" className="text-sm text-blue-600 hover:text-blue-800">
              Voir tout
            </Link>
          </div>
          <ul className="divide-y divide-slate-100">
            {activeDossiers.slice(0, 5).map((d) => (
              <li key={d.id}>
                <Link href={`/portal/dossiers/${d.id}`} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition">
                  <div>
                    <p className="text-sm font-medium text-slate-900">{d.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{d.type}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700">
                    {d.status === "in_progress" ? "En cours" : d.status === "waiting_client" ? "Action requise" : "En traitement"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Derniers événements */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="px-6 py-4 border-b border-slate-100">
          <h2 className="font-medium text-slate-900">Activité récente</h2>
        </div>
        {recentEvents.length === 0 ? (
          <div className="px-6 py-8 text-center text-slate-500 text-sm">
            Aucune activité récente.
          </div>
        ) : (
          <ul className="divide-y divide-slate-100">
            {recentEvents.map((event) => (
              <li key={event.id} className="px-6 py-4 flex items-start gap-4">
                <div
                  className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                    event.type === "task_completed"
                      ? "bg-emerald-500"
                      : event.type === "comment"
                        ? "bg-slate-400"
                        : "bg-blue-500"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900">{event.title}</p>
                  <p className="text-sm text-slate-500 mt-0.5">{event.dossierTitle}</p>
                </div>
                <span className="text-xs text-slate-400 flex-shrink-0">
                  {new Date(event.created_at).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "short",
                  })}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
