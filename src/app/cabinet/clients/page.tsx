"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { portalGet } from "@/lib/api-portal";

interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string | null;
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
  created_at: string;
}

interface ClientListResponse {
  items: Client[];
  total: number;
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

export default function CabinetClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [profilFilter, setProfilFilter] = useState("");
  const [page, setPage] = useState(1);

  const fetchClients = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("page", String(page));
      params.set("page_size", "20");
      if (search) params.set("search", search);
      if (statusFilter) params.set("status", statusFilter);
      if (profilFilter) params.set("profil", profilFilter);

      const data = await portalGet<ClientListResponse>(`/api/v1/clients?${params.toString()}`);
      setClients(data.items);
      setTotal(data.total);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erreur";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, statusFilter, profilFilter]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchClients();
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading text-2xl font-semibold text-slate-900">Clients</h1>
        <Link
          href="/cabinet/clients/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Nouveau client
        </Link>
      </div>

      {/* Filtres */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 mb-6">
        <form onSubmit={handleSearch} className="flex flex-wrap items-end gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs font-medium text-slate-500 mb-1">Recherche</label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Nom, email, société..."
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Statut</label>
            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="">Tous</option>
              <option value="onboarding">Onboarding</option>
              <option value="active">Actif</option>
              <option value="inactive">Inactif</option>
              <option value="churned">Perdu</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Profil</label>
            <select
              value={profilFilter}
              onChange={(e) => { setProfilFilter(e.target.value); setPage(1); }}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="">Tous</option>
              <option value="entrepreneur">Entrepreneur</option>
              <option value="digital-nomad">Digital Nomad</option>
              <option value="retraite">Retraité</option>
              <option value="entreprise">Entreprise</option>
            </select>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Rechercher
          </button>
        </form>
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-4">{error}</div>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-slate-500">Chargement...</div>
        ) : clients.length === 0 ? (
          <div className="p-8 text-center text-slate-500">Aucun client trouvé.</div>
        ) : (
          <>
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Nom
                  </th>
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Email
                  </th>
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Société
                  </th>
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Profil
                  </th>
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Statut
                  </th>
                  <th className="text-left text-xs font-medium text-slate-500 uppercase tracking-wider px-6 py-3">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {clients.map((client) => (
                  <tr key={client.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <Link
                        href={`/cabinet/clients/${client.id}`}
                        className="text-sm font-medium text-slate-900 hover:text-blue-600"
                      >
                        {client.user.first_name} {client.user.last_name}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{client.user.email}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {client.company_name || "—"}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {PROFIL_LABELS[client.profil] || client.profil}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-medium ${
                          STATUS_COLORS[client.status] || "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {STATUS_LABELS[client.status] || client.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {new Date(client.created_at).toLocaleDateString("fr-FR")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="px-6 py-3 border-t border-slate-100 flex items-center justify-between">
              <p className="text-sm text-slate-500">
                {total} client{total > 1 ? "s" : ""} au total
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-3 py-1 text-sm border border-slate-300 rounded-lg disabled:opacity-50 hover:bg-slate-50"
                >
                  Précédent
                </button>
                <button
                  onClick={() => setPage((p) => p + 1)}
                  disabled={page * 20 >= total}
                  className="px-3 py-1 text-sm border border-slate-300 rounded-lg disabled:opacity-50 hover:bg-slate-50"
                >
                  Suivant
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
