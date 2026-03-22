"use client";

import { useEffect, useState } from "react";
import { use } from "react";
import Link from "next/link";
import { portalGet, portalPatch } from "@/lib/api-portal";

interface LineItem {
  description: string;
  quantity: number;
  unit_price: number;
  total: number;
}

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
  line_items: LineItem[] | null;
  created_at: string;
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

export default function CabinetFactureDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);

  const fetchInvoice = () => {
    portalGet<Invoice>(`/api/v1/invoices/${id}`)
      .then(setInvoice)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchInvoice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleStatusUpdate = async (newStatus: string) => {
    setUpdating(true);
    setError(null);
    try {
      const updated = await portalPatch<Invoice>(`/api/v1/invoices/${id}`, {
        status: newStatus,
      });
      setInvoice(updated);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erreur de mise à jour";
      setError(message);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="text-slate-500">Chargement...</div>
      </div>
    );
  }

  if (error && !invoice) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">{error}</div>
      </div>
    );
  }

  if (!invoice) return null;

  const displayStatus = getDisplayStatus(invoice);
  const fmt = (n: number) =>
    Number(n).toLocaleString("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-4">
        <Link href="/cabinet/factures" className="text-sm text-slate-500 hover:text-slate-700">
          &larr; Retour aux factures
        </Link>
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm mb-4">{error}</div>
      )}

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="font-heading text-xl font-semibold text-slate-900">
              Facture {invoice.number}
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Client : {invoice.client_name}
            </p>
            <p className="text-sm text-slate-500 mt-0.5">
              Emise le {new Date(invoice.created_at).toLocaleDateString("fr-FR")}
            </p>
            {invoice.dossier_title && (
              <p className="text-sm text-slate-500 mt-0.5">
                Dossier : {invoice.dossier_title}
              </p>
            )}
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              STATUS_COLORS[displayStatus] || "bg-slate-100 text-slate-700"
            }`}
          >
            {STATUS_LABELS[displayStatus] || displayStatus}
          </span>
        </div>

        {/* Lignes */}
        {invoice.line_items && invoice.line_items.length > 0 && (
          <div className="mb-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 text-xs font-medium text-slate-500 uppercase">Description</th>
                  <th className="text-right py-2 text-xs font-medium text-slate-500 uppercase">Qte</th>
                  <th className="text-right py-2 text-xs font-medium text-slate-500 uppercase">Prix unit.</th>
                  <th className="text-right py-2 text-xs font-medium text-slate-500 uppercase">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {invoice.line_items.map((item, idx) => (
                  <tr key={idx}>
                    <td className="py-3 text-sm text-slate-900">{item.description}</td>
                    <td className="py-3 text-sm text-slate-700 text-right">{item.quantity}</td>
                    <td className="py-3 text-sm text-slate-700 text-right">{fmt(item.unit_price)}</td>
                    <td className="py-3 text-sm text-slate-900 font-medium text-right">{fmt(item.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Totaux */}
        <div className="border-t border-slate-200 pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Sous-total HT</span>
            <span className="font-medium text-slate-900">
              {fmt(invoice.amount_ht)} {invoice.currency}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">TVA ({Number(invoice.vat_rate)}%)</span>
            <span className="font-medium text-slate-900">
              {fmt(invoice.amount_ttc - invoice.amount_ht)} {invoice.currency}
            </span>
          </div>
          <div className="flex justify-between text-base font-semibold border-t border-slate-200 pt-2">
            <span className="text-slate-900">Total TTC</span>
            <span className="text-slate-900">
              {fmt(invoice.amount_ttc)} {invoice.currency}
            </span>
          </div>
        </div>

        {/* Echeance */}
        <div className="mt-6 pt-4 border-t border-slate-100 text-sm text-slate-500">
          <p>Date d&apos;echeance : {new Date(invoice.due_date).toLocaleDateString("fr-FR")}</p>
          {invoice.paid_at && (
            <p className="text-emerald-600 font-medium mt-1">
              Payee le {new Date(invoice.paid_at).toLocaleDateString("fr-FR")}
            </p>
          )}
        </div>

        {/* Boutons d'action staff */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex gap-3 flex-wrap">
          {invoice.status === "draft" && (
            <button
              onClick={() => handleStatusUpdate("sent")}
              disabled={updating}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
            >
              {updating ? "..." : "Marquer envoyee"}
            </button>
          )}
          {(invoice.status === "sent" || displayStatus === "overdue") && (
            <button
              onClick={() => handleStatusUpdate("paid")}
              disabled={updating}
              className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 disabled:opacity-50 transition"
            >
              {updating ? "..." : "Marquer payee"}
            </button>
          )}
          {invoice.status !== "cancelled" && invoice.status !== "paid" && (
            <button
              onClick={() => handleStatusUpdate("cancelled")}
              disabled={updating}
              className="px-4 py-2 bg-white border border-red-300 text-red-600 text-sm font-medium rounded-lg hover:bg-red-50 disabled:opacity-50 transition"
            >
              {updating ? "..." : "Annuler"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
