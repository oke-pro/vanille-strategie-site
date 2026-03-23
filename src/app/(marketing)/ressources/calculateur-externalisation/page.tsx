"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { submitCalculateurExternalisation } from "@/lib/api";
import { trackEvent } from "@/components/analytics/google-analytics";

/* ──────────────── DATA ──────────────── */

interface FunctionRow {
  id: string;
  label: string;
  description: string;
  salaireBrutFrance: number; // brut mensuel France
  coutAllInMaurice: number;  // coût all-in mensuel Maurice
}

const CHARGES_PATRONALES_FRANCE = 1.42;

const FUNCTIONS: FunctionRow[] = [
  {
    id: "comptable",
    label: "Comptable",
    description: "Tenue comptable, déclarations fiscales, clôtures",
    salaireBrutFrance: 2800,
    coutAllInMaurice: 1400,
  },
  {
    id: "it-helpdesk",
    label: "Technicien IT / Helpdesk",
    description: "Support technique, maintenance, ticketing",
    salaireBrutFrance: 2300,
    coutAllInMaurice: 1200,
  },
  {
    id: "rh-paie",
    label: "Gestionnaire RH / Paie",
    description: "Gestion des bulletins de paie, administration du personnel",
    salaireBrutFrance: 2600,
    coutAllInMaurice: 1300,
  },
  {
    id: "assistant-admin",
    label: "Assistant administratif",
    description: "Secrétariat, gestion documentaire, accueil",
    salaireBrutFrance: 2000,
    coutAllInMaurice: 900,
  },
  {
    id: "back-office",
    label: "Opérateur saisie / Back-office",
    description: "Saisie de données, traitement de dossiers, archivage",
    salaireBrutFrance: 1900,
    coutAllInMaurice: 800,
  },
  {
    id: "relation-client",
    label: "Chargé de relation client",
    description: "Service client, suivi des demandes, fidélisation",
    salaireBrutFrance: 2100,
    coutAllInMaurice: 1000,
  },
];

/* ──────────────── COMPONENT ──────────────── */

interface FunctionState {
  selected: boolean;
  fte: number;
  salaire: number; // editable gross salary France
}

export default function CalculateurExternalisationPage() {
  const [rows, setRows] = useState<Record<string, FunctionState>>(
    Object.fromEntries(
      FUNCTIONS.map((f) => [
        f.id,
        { selected: false, fte: 1, salaire: f.salaireBrutFrance },
      ])
    )
  );
  const [computed, setComputed] = useState(false);
  const [success, setSuccess] = useState(false);

  /* helpers */
  const updateRow = (id: string, patch: Partial<FunctionState>) => {
    setRows((prev) => ({ ...prev, [id]: { ...prev[id], ...patch } }));
    setComputed(false);
  };

  const fmt = (n: number) =>
    new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(n);

  const pct = (n: number) =>
    new Intl.NumberFormat("fr-FR", {
      maximumFractionDigits: 1,
    }).format(n);

  const hasSelection = FUNCTIONS.some((f) => rows[f.id].selected);

  /* compute totals */
  let totalFrance = 0;
  let totalMaurice = 0;

  FUNCTIONS.forEach((f) => {
    const row = rows[f.id];
    if (row.selected) {
      totalFrance += row.fte * row.salaire * CHARGES_PATRONALES_FRANCE;
      totalMaurice += row.fte * f.coutAllInMaurice;
    }
  });

  const monthlySavings = totalFrance - totalMaurice;
  const annualSavings = monthlySavings * 12;
  const savingsPercent = totalFrance > 0 ? (monthlySavings / totalFrance) * 100 : 0;

  function handleCompute(e: React.FormEvent) {
    e.preventDefault();
    if (hasSelection) {
      setComputed(true);
      trackEvent("calculator_compute", "calculateur_externalisation", undefined, Math.round(annualSavings));
    }
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-b from-purple-950 to-purple-900 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-purple-300">
            Vanille Managed Services
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Calculateur d&apos;économies — Externalisation
          </h1>
          <p className="mt-4 text-lg text-purple-200">
            Estimez les économies réalisables en externalisant vos fonctions
            support à l&apos;île Maurice, au sein de notre groupe intégré.
          </p>
        </div>
      </section>

      {/* ── Calculator ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleCompute}>
            {/* Header row (desktop) */}
            <div className="hidden md:grid md:grid-cols-12 md:gap-4 md:border-b md:border-slate-200 md:pb-3 md:mb-2">
              <div className="col-span-1" />
              <div className="col-span-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                Fonction
              </div>
              <div className="col-span-2 text-xs font-bold uppercase tracking-widest text-slate-400 text-center">
                ETP
              </div>
              <div className="col-span-3 text-xs font-bold uppercase tracking-widest text-slate-400 text-center">
                Salaire brut / mois
              </div>
              <div className="col-span-2 text-xs font-bold uppercase tracking-widest text-slate-400 text-right">
                Coût employeur
              </div>
            </div>

            {/* Function rows */}
            <div className="space-y-3">
              {FUNCTIONS.map((f) => {
                const row = rows[f.id];
                const employerCost = row.salaire * CHARGES_PATRONALES_FRANCE;
                return (
                  <div
                    key={f.id}
                    className={`rounded-xl border p-4 transition-all ${
                      row.selected
                        ? "border-purple-300 bg-purple-50/50 shadow-sm"
                        : "border-slate-200 bg-slate-50/50 opacity-50"
                    }`}
                  >
                    <div className="grid items-center gap-4 md:grid-cols-12">
                      {/* Toggle */}
                      <div className="md:col-span-1 flex items-center">
                        <button
                          type="button"
                          role="switch"
                          aria-checked={row.selected}
                          onClick={() =>
                            updateRow(f.id, { selected: !row.selected })
                          }
                          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ${
                            row.selected ? "bg-purple-600" : "bg-slate-300"
                          }`}
                        >
                          <span
                            className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform ${
                              row.selected ? "translate-x-5" : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Label */}
                      <div className="md:col-span-4">
                        <p className="text-sm font-bold text-slate-900">
                          {f.label}
                        </p>
                        <p className="text-xs text-slate-500">
                          {f.description}
                        </p>
                      </div>

                      {/* FTE */}
                      <div className="md:col-span-2 flex items-center justify-center gap-2">
                        <label className="text-xs text-slate-500 md:hidden">
                          ETP :
                        </label>
                        <Input
                          type="number"
                          min={1}
                          max={20}
                          value={row.fte}
                          onChange={(e) =>
                            updateRow(f.id, {
                              fte: Math.max(
                                1,
                                Math.min(20, parseInt(e.target.value) || 1)
                              ),
                            })
                          }
                          disabled={!row.selected}
                          className="h-9 w-20 text-center"
                        />
                      </div>

                      {/* Salary */}
                      <div className="md:col-span-3 flex items-center justify-center gap-2">
                        <label className="text-xs text-slate-500 md:hidden">
                          Brut :
                        </label>
                        <div className="relative">
                          <Input
                            type="number"
                            min={0}
                            step={100}
                            value={row.salaire}
                            onChange={(e) =>
                              updateRow(f.id, {
                                salaire: parseFloat(e.target.value) || 0,
                              })
                            }
                            disabled={!row.selected}
                            className="h-9 w-32 pr-8 text-right"
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                            €
                          </span>
                        </div>
                      </div>

                      {/* Employer cost */}
                      <div className="md:col-span-2 text-right">
                        <p className="text-sm font-semibold text-slate-700">
                          {fmt(employerCost)}
                          <span className="text-xs font-normal text-slate-400">
                            /mois
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Calculate button */}
            <div className="mt-8 text-center">
              <Button
                type="submit"
                size="lg"
                disabled={!hasSelection}
                className="bg-purple-600 hover:bg-purple-700 disabled:opacity-40 px-10"
              >
                Calculer mes économies
              </Button>
              {!hasSelection && (
                <p className="mt-2 text-xs text-slate-400">
                  Sélectionnez au moins une fonction pour lancer le calcul.
                </p>
              )}
            </div>
          </form>

          {/* ── Results ── */}
          {computed && totalFrance > 0 && (
            <div className="mt-16 space-y-8">
              <h2 className="text-2xl font-bold text-slate-900 text-center">
                Vos économies estimées
              </h2>

              {/* Result cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="border-slate-200 p-6">
                  <p className="text-sm font-medium text-slate-500">
                    Coût actuel (France)
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    {fmt(totalFrance)}
                  </p>
                  <p className="text-xs text-slate-400">par mois</p>
                </Card>

                <Card className="border-2 border-purple-400 bg-purple-50 p-6">
                  <p className="text-sm font-bold text-purple-600">
                    Coût avec Vanille Managed Services
                  </p>
                  <p className="mt-2 text-2xl font-bold text-purple-600">
                    {fmt(totalMaurice)}
                  </p>
                  <p className="text-xs text-purple-500">par mois</p>
                </Card>

                <Card className="border-2 border-green-400 bg-green-50 p-6">
                  <p className="text-sm font-medium text-green-700">
                    Économie mensuelle
                  </p>
                  <p className="mt-2 text-2xl font-bold text-green-600">
                    {fmt(monthlySavings)}
                  </p>
                  <p className="text-xs text-green-500">par mois</p>
                </Card>
              </div>

              {/* Annual savings — large card */}
              <Card className="border-2 border-green-400 bg-green-50 p-8 text-center">
                <p className="text-sm font-medium text-green-700">
                  Économie annuelle estimée
                </p>
                <p className="mt-3 text-5xl font-bold text-green-600">
                  {fmt(annualSavings)}
                </p>
                <span className="mt-3 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-bold text-green-700">
                  −{pct(savingsPercent)} % de réduction
                </span>
              </Card>

              {/* Detail per function */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-left text-xs font-bold uppercase tracking-widest text-slate-400">
                      <th className="pb-2">Fonction</th>
                      <th className="pb-2 text-center">ETP</th>
                      <th className="pb-2 text-right">France</th>
                      <th className="pb-2 text-right">Maurice</th>
                      <th className="pb-2 text-right">Économie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FUNCTIONS.filter((f) => rows[f.id].selected).map((f) => {
                      const row = rows[f.id];
                      const fc =
                        row.fte * row.salaire * CHARGES_PATRONALES_FRANCE;
                      const mc = row.fte * f.coutAllInMaurice;
                      return (
                        <tr
                          key={f.id}
                          className="border-b border-slate-100"
                        >
                          <td className="py-2 font-medium text-slate-700">
                            {f.label}
                          </td>
                          <td className="py-2 text-center text-slate-600">
                            {row.fte}
                          </td>
                          <td className="py-2 text-right text-slate-600">
                            {fmt(fc)}
                          </td>
                          <td className="py-2 text-right text-purple-600 font-medium">
                            {fmt(mc)}
                          </td>
                          <td className="py-2 text-right font-bold text-green-600">
                            {fmt(fc - mc)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Quality guarantees */}
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: "🗣️",
                    text: "Personnel francophone qualifié",
                  },
                  {
                    icon: "🕐",
                    text: "GMT+4 — 2h de décalage avec Paris",
                  },
                  {
                    icon: "✅",
                    text: "Qualité certifiée MIPA (Mauritius Institute of Professional Accountants)",
                  },
                  {
                    icon: "📊",
                    text: "Pilotage via dashboard OKE en temps réel",
                  },
                ].map((g) => (
                  <div
                    key={g.text}
                    className="flex items-start gap-2 rounded-lg border border-purple-100 bg-purple-50/50 p-4"
                  >
                    <span className="text-lg" aria-hidden="true">
                      {g.icon}
                    </span>
                    <p className="text-xs font-medium text-slate-700">
                      {g.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-slate-400">
                Simulation indicative basée sur les coûts moyens constatés en
                2025. Les économies réelles dépendent du volume, de la
                complexité et du niveau d&apos;expérience requis. Contactez-nous
                pour un devis personnalisé.
              </p>

              {/* ── Lead capture ── */}
              <div className="rounded-xl border border-purple-100 bg-purple-50/50 p-6">
                <p className="text-sm font-bold text-slate-900">
                  Recevez votre devis personnalisé par email
                </p>
                {success ? (
                  <p className="mt-3 text-sm font-medium text-green-600">
                    Votre demande a été envoyée avec succès. Notre équipe vous
                    contactera rapidement.
                  </p>
                ) : (
                  <form
                    className="mt-3 flex gap-2"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const email = (
                        e.currentTarget.elements.namedItem(
                          "capture-email"
                        ) as HTMLInputElement
                      )?.value;
                      if (email) {
                        const selectedFunctions = FUNCTIONS.filter(
                          (f) => rows[f.id].selected
                        ).map((f) => ({
                          fonction: f.label,
                          fte: rows[f.id].fte,
                          salaire_brut_france: rows[f.id].salaire,
                          cout_maurice: f.coutAllInMaurice,
                        }));
                        await submitCalculateurExternalisation({
                          email,
                          fonctions: selectedFunctions,
                          total_france_mensuel: Math.round(totalFrance),
                          total_maurice_mensuel: Math.round(totalMaurice),
                          economie_annuelle: Math.round(annualSavings),
                          pourcentage_economie: Math.round(savingsPercent),
                        });
                        setSuccess(true);
                        trackEvent(
                          "form_submit",
                          "calculateur_externalisation",
                          undefined,
                          Math.round(annualSavings)
                        );
                      }
                    }}
                  >
                    <Input
                      name="capture-email"
                      type="email"
                      placeholder="votre@email.com"
                      className="h-10"
                      required
                    />
                    <Button
                      type="submit"
                      className="h-10 whitespace-nowrap bg-purple-600 hover:bg-purple-700"
                    >
                      Recevoir mon devis personnalisé
                    </Button>
                  </form>
                )}
              </div>

              {/* ── CTA ── */}
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    Demander une étude personnalisée
                  </Button>
                </Link>
                <Link href="/managed-services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-300 text-purple-700 hover:bg-purple-50"
                  >
                    Découvrir Vanille Managed Services
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
