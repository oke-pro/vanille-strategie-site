"use client";

import { useEffect, useState } from "react";
import { use } from "react";
import Link from "next/link";
import { portalGet, portalPatch } from "@/lib/api-portal";

interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string | null;
  role: string;
  is_active: boolean;
  email_verified: boolean;
  created_at: string;
}

interface Client {
  id: string;
  user: User;
  company_name: string | null;
  company_type: string | null;
  profil: string;
  nationality: string | null;
  status: string;
  assigned_to: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

interface Dossier {
  id: string;
  type: string;
  title: string;
  status: string;
  priority: string;
  created_at: string;
}

interface Document {
  id: string;
  original_name: string;
  category: string;
  status: string;
  size_bytes: number;
  created_at: string;
}

const STATUS_COLORS: Record<string, string> = {
  onboarding: "bg-blue-100 text-blue-700",
  active: "bg-emerald-100 text-emerald-700",
  inactive: "bg-slate-100 text-slate-700",
  churned: "bg-red-100 text-red-700",
};

const STATUS_LABELS: Record<string, string> = {
  onboarding: "Onboarding",
  active: "Actif",
  inactive: "Inactif",
  churned: "Perdu",
};

const PROFIL_LABELS: Record<string, string> = {
  entrepreneur: "Entrepreneur",
  "digital-nomad": "Digital Nomad",
  retraite: "Retraité",
  entreprise: "Entreprise",
};

const DOSSIER_STATUS_LABELS: Record<string, string> = {
  draft: "Brouillon",
  in_progress: "En cours",
  waiting_client: "Attente client",
  waiting_admin: "Attente admin",
  completed: "Terminé",
  cancelled: "Annulé",
};

type TabId = "info" | "dossiers" | "documents" | "messages";

export default function CabinetClientDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [client, setClient] = useState<Client | null>(null);
  const [dossiers, setDossiers] = useState<Dossier[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>("info");
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editForm, setEditForm] = useState({
    company_name: "",
    company_type: "",
    profil: "",
    nationality: "",
    status: "",
    notes: "",
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const [clientData, dossiersData] = await Promise.all([
          portalGet<Client>(`/api/v1/clients/${id}`),
          portalGet<Dossier[]>(`/api/v1/clients/${id}/dossiers`),
        ]);
        setClient(clientData);
        setDossiers(dossiersData);
        setEditForm({
          company_name: clientData.company_name || "",
          company_type: clientData.company_type || "",
          profil: clientData.profil,
          nationality: clientData.nationality || "",
          status: clientData.status,
          notes: clientData.notes || "",
        });
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Erreur";
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  const handleSave = async () => {
    if (!client) return;
    setSaving(true);
    try {
      const payload: Record<string, unknown> = {};
      if (editForm.company_name !== (client.company_name || "")) payload.company_name = editForm.company_name || null;
      if (editForm.company_type !== (client.company_type || "")) payload.company_type = editForm.company_type || null;
      if (editForm.profil !== client.profil) payload.profil = editForm.profil;
      if (editForm.nationality !== (client.nationality || "")) payload.nationality = editForm.nationality || null;
      if (editForm.status !== client.status) payload.status = editForm.status;
      if (editForm.notes !== (client.notes || "")) payload.notes = editForm.notes || null;

      if (Object.keys(payload).length > 0) {
        const updated = await portalPatch<Client>(`/api/v1/clients/${id}`, payload);
        setClient(updated);
      }
      setEditing(false);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erreur";
      setError(message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto">
        <div className="text-slate-500">Chargement...</div>
      </div>
    );
  }

  if (error || !client) {
    return (
      <div className="max-w-5xl mx-auto">
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">{error || "Client introuvable"}</div>
      </div>
    );
  }

  const tabs: { id: TabId; label: string }[] = [
    { id: "info", label: "Informations" },
    { id: "dossiers", label: "Dossiers" },
    { id: "documents", label: "Documents" },
    { id: "messages", label: "Messages" },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <div className="mb-4">
        <Link href="/cabinet/clients" className="text-sm text-slate-500 hover:text-slate-700">
          &larr; Liste des clients
        </Link>
      </div>

      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-heading text-xl font-semibold text-slate-900">
              {client.user.first_name} {client.user.last_name}
            </h1>
            <p className="text-sm text-slate-500 mt-1">{client.user.email}</p>
            {client.company_name && (
              <p className="text-sm text-slate-600 mt-0.5">{client.company_name}</p>
            )}
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              STATUS_COLORS[client.status] || "bg-slate-100 text-slate-700"
            }`}
          >
            {STATUS_LABELS[client.status] || client.status}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200 mb-6">
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-sm font-medium border-b-2 transition ${
                activeTab === tab.id
                  ? "border-slate-900 text-slate-900"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      {activeTab === "info" && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium text-slate-900">Informations client</h2>
            {!editing ? (
              <button
                onClick={() => setEditing(true)}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Modifier
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={() => setEditing(false)}
                  className="text-sm text-slate-500 hover:text-slate-700"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium disabled:opacity-50"
                >
                  {saving ? "Sauvegarde..." : "Sauvegarder"}
                </button>
              </div>
            )}
          </div>

          {editing ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Société</label>
                  <input
                    type="text"
                    value={editForm.company_name}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, company_name: e.target.value }))}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Type</label>
                  <select
                    value={editForm.company_type}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, company_type: e.target.value }))}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  >
                    <option value="">—</option>
                    <option value="DC">DC</option>
                    <option value="GBC">GBC</option>
                    <option value="AC">AC</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Profil</label>
                  <select
                    value={editForm.profil}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, profil: e.target.value }))}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  >
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="digital-nomad">Digital Nomad</option>
                    <option value="retraite">Retraité</option>
                    <option value="entreprise">Entreprise</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Nationalité</label>
                  <input
                    type="text"
                    value={editForm.nationality}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, nationality: e.target.value }))}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Statut</label>
                <select
                  value={editForm.status}
                  onChange={(e) => setEditForm((prev) => ({ ...prev, status: e.target.value }))}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                >
                  <option value="onboarding">Onboarding</option>
                  <option value="active">Actif</option>
                  <option value="inactive">Inactif</option>
                  <option value="churned">Perdu</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Notes</label>
                <textarea
                  value={editForm.notes}
                  onChange={(e) => setEditForm((prev) => ({ ...prev, notes: e.target.value }))}
                  rows={4}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                />
              </div>
            </div>
          ) : (
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-xs font-medium text-slate-500">Nom</dt>
                <dd className="text-sm text-slate-900">{client.user.first_name} {client.user.last_name}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">Email</dt>
                <dd className="text-sm text-slate-900">{client.user.email}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">Téléphone</dt>
                <dd className="text-sm text-slate-900">{client.user.phone || "—"}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">Société</dt>
                <dd className="text-sm text-slate-900">{client.company_name || "—"}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">Type de société</dt>
                <dd className="text-sm text-slate-900">{client.company_type || "—"}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">Profil</dt>
                <dd className="text-sm text-slate-900">{PROFIL_LABELS[client.profil] || client.profil}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">Nationalité</dt>
                <dd className="text-sm text-slate-900">{client.nationality || "—"}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-500">Créé le</dt>
                <dd className="text-sm text-slate-900">{new Date(client.created_at).toLocaleDateString("fr-FR")}</dd>
              </div>
              {client.notes && (
                <div className="col-span-2">
                  <dt className="text-xs font-medium text-slate-500">Notes</dt>
                  <dd className="text-sm text-slate-900 whitespace-pre-wrap">{client.notes}</dd>
                </div>
              )}
            </dl>
          )}
        </div>
      )}

      {activeTab === "dossiers" && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-medium text-slate-900">Dossiers</h2>
            <Link
              href={`/cabinet/dossiers?client_id=${client.id}`}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Nouveau dossier
            </Link>
          </div>
          {dossiers.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-sm">
              Aucun dossier pour ce client.
            </div>
          ) : (
            <ul className="divide-y divide-slate-100">
              {dossiers.map((d) => (
                <li key={d.id}>
                  <Link
                    href={`/cabinet/dossiers/${d.id}`}
                    className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition block"
                  >
                    <div>
                      <p className="text-sm font-medium text-slate-900">{d.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{d.type}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {d.priority === "high" && (
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700">
                          Urgent
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">
                        {DOSSIER_STATUS_LABELS[d.status] || d.status}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {activeTab === "documents" && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 text-center">
          <p className="text-slate-500 text-sm">
            Les documents de ce client apparaîtront ici.
          </p>
        </div>
      )}

      {activeTab === "messages" && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 text-center">
          <p className="text-slate-500 text-sm">
            La messagerie sera disponible en Phase 3.
          </p>
        </div>
      )}
    </div>
  );
}
