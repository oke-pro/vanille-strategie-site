"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { portalGet } from "@/lib/api-portal";

// -- Types --

interface DashboardStats {
  leads_this_month: number;
  leads_total: number;
  conversion_rate: number;
  revenue_monthly: number;
  tasks_urgent: number;
  messages_unread: number;
}

interface LeadPipeline {
  id: string;
  prenom: string | null;
  nom: string | null;
  email: string | null;
  pipeline_stage: string;
  score: number;
  created_at: string;
}

interface PipelineView {
  stages: Record<string, LeadPipeline[]>;
}

interface TaskItem {
  id: string;
  title: string;
  dossier_title: string | null;
  client_name: string | null;
  priority: string;
  due_date: string | null;
  status: string;
}

interface TaskList {
  items: TaskItem[];
  total: number;
}

interface UnreadCount {
  count: number;
}

interface Invoice {
  id: string;
  number: string;
  client_name: string;
  status: string;
  amount_ttc: number;
  currency: string;
  due_date: string;
  created_at: string;
}

interface InvoiceList {
  items: Invoice[];
  total: number;
}

// -- Constantes --

const STAGE_LABELS: Record<string, string> = {
  nouveau: "Nouveau",
  qualifie: "Qualifié",
  rdv: "RDV",
  proposition: "Proposition",
  signe: "Signé",
  client: "Client",
};

const STAGE_COLORS: Record<string, string> = {
  nouveau: "bg-slate-400",
  qualifie: "bg-blue-500",
  rdv: "bg-amber-500",
  proposition: "bg-purple-500",
  signe: "bg-emerald-500",
  client: "bg-green-600",
};

const STATUS_COLORS: Record<string, string> = {
  draft: "bg-slate-100 text-slate-700",
  sent: "bg-blue-100 text-blue-700",
  paid: "bg-emerald-100 text-emerald-700",
  cancelled: "bg-slate-100 text-slate-500",
};

const STATUS_LABELS: Record<string, string> = {
  draft: "Brouillon",
  sent: "Envoyee",
  paid: "Payee",
  cancelled: "Annulee",
};

export default function CabinetDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [pipeline, setPipeline] = useState<PipelineView | null>(null);
  const [urgentTasks, setUrgentTasks] = useState<TaskItem[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [recentInvoices, setRecentInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAll() {
      const results = await Promise.allSettled([
        portalGet<DashboardStats>("/api/v1/pipeline/dashboard"),
        portalGet<PipelineView>("/api/v1/pipeline"),
        portalGet<TaskList>("/api/v1/tasks?status=todo&priority=urgent"),
        portalGet<UnreadCount>("/api/v1/messages/unread-count"),
        portalGet<InvoiceList>("/api/v1/invoices?status=paid"),
      ]);

      if (results[0].status === "fulfilled") setStats(results[0].value);
      if (results[1].status === "fulfilled") setPipeline(results[1].value);
      if (results[2].status === "fulfilled") setUrgentTasks(results[2].value.items);
      if (results[3].status === "fulfilled") setUnreadCount(results[3].value.count);
      if (results[4].status === "fulfilled") setRecentInvoices(results[4].value.items.slice(0, 5));

      setLoading(false);
    }

    loadAll();
  }, []);

  // Compute stat cards
  const STAT_CARDS = [
    {
      label: "Leads ce mois",
      value: stats?.leads_this_month ?? 0,
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      label: "Taux de conversion",
      value: stats ? `${stats.conversion_rate} %` : "-- %",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      label: "CA mensuel",
      value: stats
        ? `${Number(stats.revenue_monthly).toLocaleString("fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: 0 })} MUR`
        : "-- MUR",
      color: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      label: "Taches urgentes",
      value: stats?.tasks_urgent ?? 0,
      color: "bg-red-50 text-red-700 border-red-200",
    },
  ];

  // Compute pipeline bars
  const pipelineStages = pipeline
    ? Object.entries(pipeline.stages).map(([key, leads]) => ({
        key,
        label: STAGE_LABELS[key] || key,
        count: leads.length,
        color: STAGE_COLORS[key] || "bg-slate-400",
      }))
    : [];
  const maxStageCount = Math.max(...pipelineStages.map((s) => s.count), 1);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">
        Tableau de bord CRM
      </h1>

      {/* 4 Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {STAT_CARDS.map((stat) => (
          <div key={stat.label} className={`rounded-xl border p-5 ${stat.color}`}>
            <p className="text-sm font-medium opacity-80">{stat.label}</p>
            <p className="text-3xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Pipeline mini-summary */}
      {pipelineStages.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm mb-6">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-medium text-slate-900">Pipeline</h2>
            <Link href="/cabinet/pipeline" className="text-sm text-blue-600 hover:text-blue-800">
              Voir le Kanban
            </Link>
          </div>
          <div className="px-6 py-4 space-y-3">
            {pipelineStages.map((stage) => (
              <div key={stage.key} className="flex items-center gap-3">
                <span className="text-xs text-slate-500 w-24 text-right">{stage.label}</span>
                <div className="flex-1 bg-slate-100 rounded-full h-5 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${stage.color} transition-all duration-500`}
                    style={{ width: `${(stage.count / maxStageCount) * 100}%`, minWidth: stage.count > 0 ? "1.5rem" : "0" }}
                  />
                </div>
                <span className="text-sm font-bold text-slate-700 w-8">{stage.count}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2 columns: Urgent tasks | Unread messages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Taches urgentes */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-medium text-slate-900">Taches urgentes</h2>
            <Link href="/cabinet/taches" className="text-sm text-blue-600 hover:text-blue-800">
              Voir tout
            </Link>
          </div>
          <ul className="divide-y divide-slate-100">
            {urgentTasks.length === 0 ? (
              <li className="px-6 py-8 text-center text-sm text-slate-400">
                Aucune tache urgente
              </li>
            ) : (
              urgentTasks.slice(0, 5).map((task) => (
                <li key={task.id} className="px-6 py-4 flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 bg-red-500" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">{task.title}</p>
                    {task.dossier_title && (
                      <p className="text-xs text-slate-500 mt-0.5">{task.dossier_title}</p>
                    )}
                    {task.due_date && (
                      <p className="text-xs text-slate-400 mt-0.5">
                        Echeance : {new Date(task.due_date).toLocaleDateString("fr-FR")}
                      </p>
                    )}
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Messages récents */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-medium text-slate-900">Messages</h2>
            <Link href="/cabinet/messages" className="text-sm text-blue-600 hover:text-blue-800">
              Voir tout
            </Link>
          </div>
          <div className="px-6 py-8 text-center">
            {unreadCount > 0 ? (
              <div>
                <p className="text-3xl font-bold text-purple-700">{unreadCount}</p>
                <p className="text-sm text-slate-500 mt-1">message{unreadCount > 1 ? "s" : ""} non lu{unreadCount > 1 ? "s" : ""}</p>
                <Link
                  href="/cabinet/messages"
                  className="inline-block mt-3 px-4 py-2 rounded-lg text-sm font-medium bg-purple-50 text-purple-700 hover:bg-purple-100 transition"
                >
                  Lire les messages
                </Link>
              </div>
            ) : (
              <p className="text-sm text-slate-400">Aucun message non lu</p>
            )}
          </div>
        </div>
      </div>

      {/* Dernieres factures payees */}
      {recentInvoices.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-medium text-slate-900">Dernieres factures payees</h2>
            <Link href="/cabinet/factures" className="text-sm text-blue-600 hover:text-blue-800">
              Voir tout
            </Link>
          </div>
          <ul className="divide-y divide-slate-100">
            {recentInvoices.map((inv) => (
              <li key={inv.id}>
                <Link
                  href={`/cabinet/factures/${inv.id}`}
                  className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition"
                >
                  <div>
                    <p className="text-sm font-medium text-slate-900">{inv.number}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{inv.client_name}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-slate-900">
                      {Number(inv.amount_ttc).toLocaleString("fr-FR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}{" "}
                      {inv.currency}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        STATUS_COLORS[inv.status] || "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {STATUS_LABELS[inv.status] || inv.status}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
