"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { portalGet } from "@/lib/api-portal";

interface Dossier {
  id: string;
  type: string;
  title: string;
  status: string;
  priority: string;
  current_step: number;
  due_date: string | null;
  created_at: string;
}

const TYPE_ICONS: Record<string, string> = {
  creation_societe: "building",
  permis_residence: "id-card",
  fiscal: "calculator",
  bancaire: "bank",
};

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
  waiting_client: "En attente client",
  waiting_admin: "En attente admin",
  completed: "Terminé",
  cancelled: "Annulé",
};

const TYPE_LABELS: Record<string, string> = {
  creation_societe: "Création de société",
  permis_residence: "Permis de résidence",
  fiscal: "Dossier fiscal",
  bancaire: "Ouverture bancaire",
};

export default function PortalDossiersPage() {
  const [dossiers, setDossiers] = useState<Dossier[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    portalGet<Dossier[]>("/api/v1/dossiers")
      .then(setDossiers)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto">
        <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">Mes dossiers</h1>
        <div className="text-slate-500">Chargement...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto">
        <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">Mes dossiers</h1>
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">Mes dossiers</h1>

      {dossiers.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
          <p className="text-slate-500">Aucun dossier pour le moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dossiers.map((dossier) => (
            <Link
              key={dossier.id}
              href={`/portal/dossiers/${dossier.id}`}
              className="block bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">
                    {dossier.type === "creation_societe" && "🏢"}
                    {dossier.type === "permis_residence" && "🪪"}
                    {dossier.type === "fiscal" && "📊"}
                    {dossier.type === "bancaire" && "🏦"}
                    {!TYPE_ICONS[dossier.type] && "📁"}
                  </span>
                  <span className="text-xs text-slate-500">
                    {TYPE_LABELS[dossier.type] || dossier.type}
                  </span>
                </div>
                <span
                  className={`px-2 py-0.5 rounded text-xs font-medium ${
                    STATUS_COLORS[dossier.status] || "bg-slate-100 text-slate-700"
                  }`}
                >
                  {STATUS_LABELS[dossier.status] || dossier.status}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-2">{dossier.title}</h3>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>
                  Créé le{" "}
                  {new Date(dossier.created_at).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                {dossier.priority === "high" && (
                  <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 font-medium">
                    Priorité haute
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
