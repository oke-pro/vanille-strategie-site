"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { portalGet, portalPost } from "@/lib/api-portal";

interface Client {
  id: string;
  user: { first_name: string; last_name: string };
  company_name: string | null;
}

interface ClientList {
  items: Client[];
  total: number;
}

interface Dossier {
  id: string;
  title: string;
  type: string;
  status: string;
}

interface LineItemForm {
  description: string;
  quantity: number;
  unit_price: number;
}

export default function CabinetNewFacturePage() {
  const router = useRouter();
  const [clients, setClients] = useState<Client[]>([]);
  const [dossiers, setDossiers] = useState<Dossier[]>([]);
  const [selectedClientId, setSelectedClientId] = useState("");
  const [selectedDossierId, setSelectedDossierId] = useState("");
  const [lineItems, setLineItems] = useState<LineItemForm[]>([
    { description: "", quantity: 1, unit_price: 0 },
  ]);
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Charger les clients
  useEffect(() => {
    portalGet<ClientList>("/api/v1/clients?page_size=100")
      .then((data) => setClients(data.items))
      .catch(() => {});
  }, []);

  // Charger les dossiers du client sélectionné
  useEffect(() => {
    if (!selectedClientId) {
      setDossiers([]);
      setSelectedDossierId("");
      return;
    }
    portalGet<Dossier[]>(`/api/v1/clients/${selectedClientId}/dossiers`)
      .then(setDossiers)
      .catch(() => setDossiers([]));
  }, [selectedClientId]);

  const updateLineItem = (index: number, field: keyof LineItemForm, value: string | number) => {
    const updated = [...lineItems];
    if (field === "description") {
      updated[index].description = value as string;
    } else {
      updated[index][field] = Number(value) || 0;
    }
    setLineItems(updated);
  };

  const addLine = () => {
    setLineItems([...lineItems, { description: "", quantity: 1, unit_price: 0 }]);
  };

  const removeLine = (index: number) => {
    if (lineItems.length <= 1) return;
    setLineItems(lineItems.filter((_, i) => i !== index));
  };

  const getLineTotal = (item: LineItemForm) => item.quantity * item.unit_price;
  const subtotalHT = lineItems.reduce((sum, item) => sum + getLineTotal(item), 0);
  const vatAmount = subtotalHT * 0.15;
  const totalTTC = subtotalHT + vatAmount;

  const fmt = (n: number) =>
    n.toLocaleString("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClientId || !dueDate || lineItems.some((l) => !l.description)) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    setSubmitting(true);
    setError(null);

    try {
      const payload = {
        client_id: selectedClientId,
        dossier_id: selectedDossierId || null,
        line_items: lineItems.map((l) => ({
          description: l.description,
          quantity: l.quantity,
          unit_price: l.unit_price,
          total: getLineTotal(l),
        })),
        due_date: dueDate,
        notes: notes || null,
      };

      await portalPost("/api/v1/invoices", payload);
      router.push("/cabinet/factures");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erreur de creation";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-4">
        <Link href="/cabinet/factures" className="text-sm text-slate-500 hover:text-slate-700">
          &larr; Retour aux factures
        </Link>
      </div>

      <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">
        Nouvelle facture
      </h1>

      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-4">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Client */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="font-medium text-slate-900 mb-4">Informations</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Client *
              </label>
              <select
                value={selectedClientId}
                onChange={(e) => setSelectedClientId(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              >
                <option value="">Selectionner un client</option>
                {clients.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.user.first_name} {c.user.last_name}
                    {c.company_name ? ` (${c.company_name})` : ""}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Dossier (optionnel)
              </label>
              <select
                value={selectedDossierId}
                onChange={(e) => setSelectedDossierId(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                disabled={!selectedClientId}
              >
                <option value="">Aucun dossier</option>
                {dossiers.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Date d&apos;echeance *
              </label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>
          </div>
        </div>

        {/* Lignes de facture */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="font-medium text-slate-900 mb-4">Lignes de facture</h2>

          <div className="space-y-3">
            {lineItems.map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-2 items-end">
                <div className="col-span-5">
                  {idx === 0 && (
                    <label className="block text-xs font-medium text-slate-500 mb-1">Description</label>
                  )}
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => updateLineItem(idx, "description", e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Description"
                    required
                  />
                </div>
                <div className="col-span-2">
                  {idx === 0 && (
                    <label className="block text-xs font-medium text-slate-500 mb-1">Quantite</label>
                  )}
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateLineItem(idx, "quantity", e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                <div className="col-span-2">
                  {idx === 0 && (
                    <label className="block text-xs font-medium text-slate-500 mb-1">Prix unit.</label>
                  )}
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.unit_price}
                    onChange={(e) => updateLineItem(idx, "unit_price", e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                <div className="col-span-2 text-right">
                  {idx === 0 && (
                    <label className="block text-xs font-medium text-slate-500 mb-1">Total</label>
                  )}
                  <p className="py-2 text-sm font-medium text-slate-900">
                    {fmt(getLineTotal(item))}
                  </p>
                </div>
                <div className="col-span-1 flex justify-center">
                  {lineItems.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeLine(idx)}
                      className="text-red-400 hover:text-red-600 transition p-2"
                      title="Supprimer cette ligne"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addLine}
            className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            + Ajouter une ligne
          </button>

          {/* Totaux */}
          <div className="mt-6 border-t border-slate-200 pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Sous-total HT</span>
              <span className="font-medium text-slate-900">{fmt(subtotalHT)} MUR</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">TVA (15%)</span>
              <span className="font-medium text-slate-900">{fmt(vatAmount)} MUR</span>
            </div>
            <div className="flex justify-between text-base font-semibold border-t border-slate-200 pt-2">
              <span className="text-slate-900">Total TTC</span>
              <span className="text-slate-900">{fmt(totalTTC)} MUR</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Notes (optionnel)
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Notes internes..."
          />
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {submitting ? "Création..." : "Créer la facture"}
          </button>
        </div>
      </form>
    </div>
  );
}
