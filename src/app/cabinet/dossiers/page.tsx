"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { portalGet } from "@/lib/api-portal";

interface Dossier {
  id: string;
  client_id: string;
  type: string;
  title: string;
  status: string;
  priority: string;
  due_date: string | null;
  assigned_to: string | null;
  created_at: string;
}

const STATUS_COLORS: Record<string, string> = {
  draft: "bg-slate-100 text-slate-700",
  in_progress: "bg-blue-100 text-blue-700",
  waiting_client: "bg-amber-100 text-amber-700",
  waiting_admin: "bg-purple-100 text-purple-700",
  completed: "bg-emerald-100 text-emerald-700",
  cancelled: "bg-red-100 text-red-700",
};

const STATUS_LABELS: Record<string, string> = {
  draft: "Brouillon",
  in_progress: "En cours",
  waiting_client: "Attente client",
  waiting_admin: "Attente admin",
  completed: "Terminé",
  cancelled: "Annulé",
};

const PRIORITY_COLORS: Record<string, string> = {
  low: "bg-slate-100 text-slate-600",
  normal: "bg-blue-50 text-blue-600",
  high: "bg-red-100 text-red-700",
  urgent: "bg-red-200 text-red-800",
};

const TYPE_LABELS: Record<string, string> = {
  création_société: "Création société",
  permis_residence: "Permis résidence",
  fiscal: "Fiscal",
  bancaire: "Bancaire",
};

export default function CabinetDossiersPage() {
  const [dossiers, setDossiers] = useState<Dossier[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const fetchDossiers = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (typeFilter) params.set("type", typeFilter);
      if (statusFilter) params.set("status", statusFilter);

      const data = await portalGet<Dossier[]>(`/api/v1/dossiers?${params.toString()}`);
      setDossiers(data);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erreur";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDossiers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeFilter, statusFilter]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading text-2xl font-semibold text-slate-900">Dossiers</h1>
      </div>

      {/* Filtres */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 mb-6">
        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Type</label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="">Tous</option>
              <option value="création_société">Création société</option>
              <option value="permis_residence">Permis résidence</option>
              <option value="fiscal">Fiscal</option>
              <option value="bancaire">Bancaire</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Statut</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="">Tous</option>
              <option value="draft">Brouillon</option>
              <option value="in_progress">En cours</option>
              <option value="waiting_client">Attente client</option>
              <option value="waiting_admin">Attente admin</option>
              <option value="completed">Terminé</option>
              <option value="cancelled">Annulé</option>
            </select>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-4">{error}</div>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-slate-500">Chargement...</div>
        ) : dossiers.length === 0 ? (
          <div className="p-8 text-center text-slate-500">Aucun dossier trouvé.</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                  Titre
                </th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                  Type
                </th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                  Statut
                </th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                  Priorité
                </th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                  Échéance
                </th>
                <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                  Créé le
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {dossiers.map((d) => (
                <tr key={d.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4">
                    <Link
                      href={`/cabinet/dossiers/${d.id}`}
                      className="text-sm font-medium text-slate-900 hover:text-blue-600"
                    >
                      {d.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {TYPE_LABELS[d.type] || d.type}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        STATUS_COLORS[d.status] || "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {STATUS_LABELS[d.status] || d.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium capitalize ${
                        PRIORITY_COLORS[d.priority] || "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {d.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {d.due_date ? new Date(d.due_date).toLocaleDateString("fr-FR") : "—"}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {new Date(d.created_at).toLocaleDateString("fr-FR")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
