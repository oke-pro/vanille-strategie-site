"use client";

import { useEffect, useState } from "react";
import { use } from "react";
import Link from "next/link";
import { portalGet, portalPost } from "@/lib/api-portal";
import { useAuth } from "@/lib/auth-context";

interface TimelineEvent {
  id: string;
  actor: string;
  type: string;
  title: string;
  description: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
}

interface DossierDetail {
  dossier: {
    id: string;
    client_id: string;
    type: string;
    title: string;
    status: string;
    current_step: number;
    steps: Array<{ label: string; done?: boolean }> | null;
    priority: string;
    due_date: string | null;
    assigned_to: string | null;
    created_at: string;
    updated_at: string;
  };
  events: TimelineEvent[];
}

interface Document {
  id: string;
  filename: string;
  original_name: string;
  mime_type: string;
  size_bytes: number;
  category: string;
  status: string;
  uploaded_by_name: string;
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
  waiting_client: "En attente client",
  waiting_admin: "En attente admin",
  completed: "Terminé",
  cancelled: "Annulé",
};

const EVENT_COLORS: Record<string, string> = {
  status_change: "bg-blue-500",
  comment: "bg-slate-400",
  document_upload: "bg-purple-500",
  task_completed: "bg-emerald-500",
};

export default function PortalDossierDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { user } = useAuth();
  const [data, setData] = useState<DossierDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchDossier = () => {
    portalGet<DossierDetail>(`/api/v1/dossiers/${id}`)
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchDossier();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setSubmitting(true);
    try {
      await portalPost(`/api/v1/dossiers/${id}/events`, {
        type: "comment",
        title: "Commentaire",
        description: comment.trim(),
      });
      setComment("");
      fetchDossier();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erreur";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-slate-500">Chargement...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">{error || "Dossier introuvable"}</div>
      </div>
    );
  }

  const { dossier, events } = data;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <div className="mb-4">
        <Link href="/portal/dossiers" className="text-sm text-slate-500 hover:text-slate-700">
          &larr; Mes dossiers
        </Link>
      </div>

      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="font-heading text-xl font-semibold text-slate-900">{dossier.title}</h1>
            <p className="text-sm text-slate-500 mt-1">{dossier.type}</p>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              STATUS_COLORS[dossier.status] || "bg-slate-100 text-slate-700"
            }`}
          >
            {STATUS_LABELS[dossier.status] || dossier.status}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-slate-500">Priorité</p>
            <p className="font-medium text-slate-900 capitalize">{dossier.priority}</p>
          </div>
          <div>
            <p className="text-slate-500">Étape</p>
            <p className="font-medium text-slate-900">
              {dossier.current_step + 1} / {dossier.steps?.length || 1}
            </p>
          </div>
          <div>
            <p className="text-slate-500">Échéance</p>
            <p className="font-medium text-slate-900">
              {dossier.due_date
                ? new Date(dossier.due_date).toLocaleDateString("fr-FR")
                : "Non définie"}
            </p>
          </div>
          <div>
            <p className="text-slate-500">Créé le</p>
            <p className="font-medium text-slate-900">
              {new Date(dossier.created_at).toLocaleDateString("fr-FR")}
            </p>
          </div>
        </div>
      </div>

      {/* Stepper — étapes */}
      {dossier.steps && dossier.steps.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
          <h2 className="font-medium text-slate-900 mb-4">Étapes</h2>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {dossier.steps.map((step, idx) => {
              const isDone = idx < dossier.current_step;
              const isCurrent = idx === dossier.current_step;
              return (
                <div key={idx} className="flex items-center gap-2 flex-shrink-0">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      isDone
                        ? "bg-emerald-500 text-white"
                        : isCurrent
                          ? "bg-blue-500 text-white"
                          : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {isDone ? "✓" : idx + 1}
                  </div>
                  <span
                    className={`text-xs ${
                      isCurrent ? "font-semibold text-slate-900" : "text-slate-500"
                    }`}
                  >
                    {step.label}
                  </span>
                  {idx < dossier.steps!.length - 1 && (
                    <div
                      className={`w-8 h-0.5 ${isDone ? "bg-emerald-400" : "bg-slate-200"}`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Timeline */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
        <h2 className="font-medium text-slate-900 mb-4">Historique</h2>

        {events.length === 0 ? (
          <p className="text-sm text-slate-500">Aucun événement pour le moment.</p>
        ) : (
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-2.5 h-2.5 rounded-full mt-1.5 ${
                      EVENT_COLORS[event.type] || "bg-slate-400"
                    }`}
                  />
                  <div className="w-px flex-1 bg-slate-200" />
                </div>
                <div className="pb-4 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-900">{event.title}</p>
                    <span className="text-xs text-slate-400">
                      {new Date(event.created_at).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  {event.description && (
                    <p className="text-sm text-slate-600 mt-1">{event.description}</p>
                  )}
                  <p className="text-xs text-slate-400 mt-1">par {event.actor}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Formulaire commentaire */}
        <form onSubmit={handleAddComment} className="mt-4 border-t border-slate-100 pt-4">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Ajouter un commentaire
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Votre message..."
          />
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              disabled={submitting || !comment.trim()}
              className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {submitting ? "Envoi..." : "Envoyer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
