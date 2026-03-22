"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { portalGet } from "@/lib/api-portal";

interface Invoice {
  id: string;
  number: string;
  client_name: string;
  dossier_title: string | null;
  status: string;
  amount_ht: number;
  vat_rate: number;
  amount_ttc: number;
  currency: string;
  due_date: string;
  paid_at: string | null;
  created_at: string;
}

interface InvoiceList {
  items: Invoice[];
  total: number;
}

const STATUS_COLORS: Record<string, string> = {
  draft: "bg-slate-100 text-slate-700",
  sent: "bg-blue-100 text-blue-700",
  paid: "bg-emerald-100 text-emerald-700",
  overdue: "bg-red-100 text-red-700",
  cancelled: "bg-slate-100 text-slate-500",
};

const STATUS_LABELS: Record<string, string> = {
  draft: "Brouillon",
  sent: "Envoyee",
  paid: "Payee",
  overdue: "En retard",
  cancelled: "Annulee",
};

function getDisplayStatus(invoice: Invoice): string {
  if (invoice.status === "sent" && new Date(invoice.due_date) < new Date()) {
    return "overdue";
  }
  return invoice.status;
}

export default function CabinetFacturesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("");

  useEffect(() => {
    const params = statusFilter ? `?status=${statusFilter}` : "";
    portalGet<InvoiceList>(`/api/v1/invoices${params}`)
      .then((data) => setInvoices(data.items))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [statusFilter]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto">
        <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">Factures</h1>
        <div className="text-slate-500">Chargement...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto">
        <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">Factures</h1>
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading text-2xl font-semibold text-slate-900">Factures</h1>
        <Link
          href="/cabinet/factures/new"
          className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition"
        >
          Nouvelle facture
        </Link>
      </div>

      {/* Filtres */}
      <div className="mb-4 flex gap-2">
        {[
          { value: "", label: "Toutes" },
          { value: "draft", label: "Brouillons" },
          { value: "sent", label: "Envoyees" },
          { value: "paid", label: "Payees" },
          { value: "cancelled", label: "Annulees" },
        ].map((f) => (
          <button
            key={f.value}
            onClick={() => {
              setLoading(true);
              setStatusFilter(f.value);
            }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
              statusFilter === f.value
                ? "bg-slate-900 text-white"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {invoices.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
          <p className="text-slate-500">Aucune facture.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Numero</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Client</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Montant TTC</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Statut</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Echeance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {invoices.map((inv) => {
                const displayStatus = getDisplayStatus(inv);
                return (
                  <tr key={inv.id} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4">
                      <Link
                        href={`/cabinet/factures/${inv.id}`}
                        className="text-sm font-medium text-blue-600 hover:text-blue-800"
                      >
                        {inv.number}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-900">{inv.client_name}</td>
                    <td className="px-6 py-4 text-sm text-slate-900 font-medium">
                      {Number(inv.amount_ttc).toLocaleString("fr-FR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}{" "}
                      {inv.currency}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-medium ${
                          STATUS_COLORS[displayStatus] || "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {STATUS_LABELS[displayStatus] || displayStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {new Date(inv.due_date).toLocaleDateString("fr-FR")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
