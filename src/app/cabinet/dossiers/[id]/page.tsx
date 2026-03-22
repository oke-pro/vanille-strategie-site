"use client";

import { useEffect, useRef, useState } from "react";
import { use } from "react";
import Link from "next/link";
import { portalGet, portalPatch, portalPost, portalUpload } from "@/lib/api-portal";
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

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const STATUS_OPTIONS = [
  { value: "draft", label: "Brouillon" },
  { value: "in_progress", label: "En cours" },
  { value: "waiting_client", label: "Attente client" },
  { value: "waiting_admin", label: "Attente admin" },
  { value: "completed", label: "Terminé" },
  { value: "cancelled", label: "Annulé" },
];

const PRIORITY_OPTIONS = [
  { value: "low", label: "Basse" },
  { value: "normal", label: "Normale" },
  { value: "high", label: "Haute" },
  { value: "urgent", label: "Urgente" },
];

const EVENT_COLORS: Record<string, string> = {
  status_change: "bg-blue-500",
  comment: "bg-slate-400",
  document_upload: "bg-purple-500",
  task_completed: "bg-emerald-500",
};

// Taches mockées pour Phase 2 (connectées en Phase 4)
const MOCK_TASKS = [
  { id: "1", title: "Vérifier les documents d'identité", status: "done" },
  { id: "2", title: "Soumettre au registre des sociétés", status: "todo" },
  { id: "3", title: "Obtenir le certificat d'incorporation", status: "todo" },
];

export default function CabinetDossierDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { user } = useAuth();
  const [data, setData] = useState<DossierDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Edit fields
  const [editStatus, setEditStatus] = useState("");
  const [editPriority, setEditPriority] = useState("");
  const [editDueDate, setEditDueDate] = useState("");
  const [editStep, setEditStep] = useState(0);

  const fetchDossier = async () => {
    try {
      const detail = await portalGet<DossierDetail>(`/api/v1/dossiers/${id}`);
      setData(detail);
      setEditStatus(detail.dossier.status);
      setEditPriority(detail.dossier.priority);
      setEditDueDate(detail.dossier.due_date || "");
      setEditStep(detail.dossier.current_step);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erreur";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDossier();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSave = async () => {
    if (!data) return;
    setSaving(true);
    try {
      const payload: Record<string, unknown> = {};
      if (editStatus !== data.dossier.status) payload.status = editStatus;
      if (editPriority !== data.dossier.priority) payload.priority = editPriority;
      if (editDueDate !== (data.dossier.due_date || "")) payload.due_date = editDueDate || null;
      if (editStep !== data.dossier.current_step) payload.current_step = editStep;

      if (Object.keys(payload).length > 0) {
        await portalPatch(`/api/v1/dossiers/${id}`, payload);
        await fetchDossier();
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erreur";
      setError(message);
    } finally {
      setSaving(false);
    }
  };

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
      await fetchDossier();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erreur";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !data) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("client_id", data.dossier.client_id);
      formData.append("dossier_id", data.dossier.id);
      formData.append("category", "autre");
      await portalUpload("/api/v1/documents/upload", formData);
      await fetchDossier();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erreur";
      setError(message);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto">
        <div className="text-slate-500">Chargement...</div>
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="max-w-5xl mx-auto">
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">{error}</div>
      </div>
    );
  }

  if (!data) return null;

  const { dossier, events } = data;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <div className="mb-4">
        <Link href="/cabinet/dossiers" className="text-sm text-slate-500 hover:text-slate-700">
          &larr; Liste des dossiers
        </Link>
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-4">{error}</div>
      )}

      {/* Header + édition statut */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
        <h1 className="font-heading text-xl font-semibold text-slate-900 mb-4">{dossier.title}</h1>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Statut</label>
            <select
              value={editStatus}
              onChange={(e) => setEditStatus(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            >
              {STATUS_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Priorité</label>
            <select
              value={editPriority}
              onChange={(e) => setEditPriority(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            >
              {PRIORITY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Échéance</label>
            <input
              type="date"
              value={editDueDate}
              onChange={(e) => setEditDueDate(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Étape actuelle</label>
            <input
              type="number"
              value={editStep}
              onChange={(e) => setEditStep(Number(e.target.value))}
              min={0}
              max={(dossier.steps?.length || 1) - 1}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 disabled:opacity-50 transition"
          >
            {saving ? "Sauvegarde..." : "Sauvegarder les modifications"}
          </button>
        </div>
      </div>

      {/* Stepper */}
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
                    <div className={`w-8 h-0.5 ${isDone ? "bg-emerald-400" : "bg-slate-200"}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Timeline */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="font-medium text-slate-900 mb-4">Timeline</h2>

          {events.length === 0 ? (
            <p className="text-sm text-slate-500">Aucun événement.</p>
          ) : (
            <div className="space-y-4 max-h-96 overflow-y-auto">
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

          {/* Ajouter événement */}
          <form onSubmit={handleAddComment} className="mt-4 border-t border-slate-100 pt-4">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={2}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Ajouter un commentaire..."
            />
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                disabled={submitting || !comment.trim()}
                className="px-3 py-1.5 bg-slate-900 text-white text-sm rounded-lg hover:bg-slate-800 disabled:opacity-50 transition"
              >
                {submitting ? "Envoi..." : "Ajouter"}
              </button>
            </div>
          </form>
        </div>

        {/* Documents + Upload */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-medium text-slate-900">Documents</h2>
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleUpload}
                  className="hidden"
                  id="dossier-upload"
                />
                <label
                  htmlFor="dossier-upload"
                  className={`inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition cursor-pointer ${
                    uploading ? "opacity-50" : ""
                  }`}
                >
                  {uploading ? "Envoi..." : "Ajouter un fichier"}
                </label>
              </div>
            </div>
            <p className="text-sm text-slate-500">
              Les documents associés à ce dossier apparaîtront ici.
            </p>
          </div>

          {/* Taches mockées */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h2 className="font-medium text-slate-900 mb-4">Tâches</h2>
            <p className="text-xs text-slate-400 mb-3">Phase 4 : les tâches seront connectées à la base de données.</p>
            <ul className="space-y-2">
              {MOCK_TASKS.map((task) => (
                <li key={task.id} className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded border flex items-center justify-center ${
                      task.status === "done"
                        ? "bg-emerald-500 border-emerald-500 text-white"
                        : "border-slate-300"
                    }`}
                  >
                    {task.status === "done" && (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span
                    className={`text-sm ${
                      task.status === "done" ? "text-slate-400 line-through" : "text-slate-900"
                    }`}
                  >
                    {task.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
