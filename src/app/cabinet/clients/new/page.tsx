"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { portalPost } from "@/lib/api-portal";

export default function CabinetNewClientPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    user_email: "",
    first_name: "",
    last_name: "",
    phone: "",
    company_name: "",
    company_type: "",
    profil: "entrepreneur",
    nationality: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const payload = {
        ...form,
        phone: form.phone || null,
        company_name: form.company_name || null,
        company_type: form.company_type || null,
        nationality: form.nationality || null,
      };
      const result = await portalPost<{ id: string }>("/api/v1/clients", payload);
      router.push(`/cabinet/clients/${result.id}`);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erreur lors de la création";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <Link href="/cabinet/clients" className="text-sm text-slate-500 hover:text-slate-700">
          &larr; Retour à la liste
        </Link>
      </div>

      <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">Nouveau client</h1>

      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-4">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Prénom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="user_email"
            value={form.user_email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Téléphone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Société</label>
            <input
              type="text"
              name="company_name"
              value={form.company_name}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Type de société</label>
            <select
              name="company_type"
              value={form.company_type}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="">— Sélectionner —</option>
              <option value="DC">Domestic Company (DC)</option>
              <option value="GBC">Global Business Company (GBC)</option>
              <option value="AC">Authorised Company (AC)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Profil <span className="text-red-500">*</span>
            </label>
            <select
              name="profil"
              value={form.profil}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="entrepreneur">Entrepreneur</option>
              <option value="digital-nomad">Digital Nomad</option>
              <option value="retraite">Retraité</option>
              <option value="entreprise">Entreprise</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nationalité</label>
            <input
              type="text"
              name="nationality"
              value={form.nationality}
              onChange={handleChange}
              placeholder="ex: Française"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
          <Link
            href="/cabinet/clients"
            className="px-4 py-2 text-sm font-medium text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 transition"
          >
            Annuler
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 disabled:opacity-50 transition"
          >
            {submitting ? "Création..." : "Créer le client"}
          </button>
        </div>
      </form>
    </div>
  );
}
