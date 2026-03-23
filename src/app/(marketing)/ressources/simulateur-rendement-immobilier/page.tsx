"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { submitSimulateurRendement } from "@/lib/api";
import { trackEvent } from "@/components/analytics/google-analytics";

/* ─── Données de marché vérifiées (2025) ─── */

type Scheme = "PDS" | "IRS" | "RES" | "Smart City" | "Ground+2";
type Zone = "Grand Baie / Péreybère" | "Tamarin / Rivière Noire" | "Flic-en-Flac" | "Moka / Beau Plan" | "Bel Ombre";
type Strategy = "long" | "short" | "mixed";

const SCHEME_YIELDS: Record<Scheme, [number, number]> = {
  PDS: [0.04, 0.055],
  IRS: [0.03, 0.045],
  RES: [0.045, 0.06],
  "Smart City": [0.04, 0.05],
  "Ground+2": [0.05, 0.065],
};

const ZONE_MULTIPLIERS: Record<Zone, number> = {
  "Grand Baie / Péreybère": 1.05,
  "Tamarin / Rivière Noire": 1.0,
  "Flic-en-Flac": 1.05,
  "Moka / Beau Plan": 0.9,
  "Bel Ombre": 0.95,
};

const ENTRY_PRICES: Record<Scheme, string> = {
  PDS: "à partir de $350 000 (permis de résidence dès $375 000)",
  IRS: "à partir de $500 000",
  RES: "à partir de $150 000 (permis de résidence dès $500 000)",
  "Smart City": "à partir de $200 000 (permis de résidence dès $375 000)",
  "Ground+2": "à partir de $100 000",
};

const MANAGEMENT_FEE: Record<Strategy, number> = { long: 0.10, short: 0.20, mixed: 0.15 };
const MAINTENANCE_RATE = 0.015; // 1.5% of property value
const SYNDIC_ANNUAL_USD = 2000;
const MU_TAX_RATE = 0.15;
const EUR_TO_USD = 1.08;

const LONG_TERM_OCCUPANCY = 0.90;
const SHORT_TERM_OCCUPANCY = 0.55;
const SHORT_TERM_GROSS_MULT = 1.4;

/* ─── Helpers ─── */

function computeYield(scheme: Scheme, zone: Zone, strategy: Strategy) {
  const [low, high] = SCHEME_YIELDS[scheme];
  const mid = (low + high) / 2;
  const zoneAdj = mid * ZONE_MULTIPLIERS[zone];

  let grossYield: number;
  let effectiveOccupancy: number;

  if (strategy === "long") {
    grossYield = zoneAdj;
    effectiveOccupancy = LONG_TERM_OCCUPANCY;
  } else if (strategy === "short") {
    grossYield = zoneAdj * SHORT_TERM_GROSS_MULT;
    effectiveOccupancy = SHORT_TERM_OCCUPANCY;
  } else {
    // mixed: average of long and short
    const longGross = zoneAdj;
    const shortGross = zoneAdj * SHORT_TERM_GROSS_MULT;
    grossYield = (longGross + shortGross) / 2;
    effectiveOccupancy = (LONG_TERM_OCCUPANCY + SHORT_TERM_OCCUPANCY) / 2;
  }

  return { grossYield, effectiveOccupancy, yieldRange: [low * ZONE_MULTIPLIERS[zone], high * ZONE_MULTIPLIERS[zone]] as [number, number] };
}

function computeResults(scheme: Scheme, zone: Zone, strategy: Strategy, priceUSD: number) {
  const { grossYield, effectiveOccupancy, yieldRange } = computeYield(scheme, zone, strategy);

  const grossIncomeAnnual = priceUSD * grossYield * effectiveOccupancy;
  const managementFee = grossIncomeAnnual * MANAGEMENT_FEE[strategy];
  const maintenance = priceUSD * MAINTENANCE_RATE;
  const charges = managementFee + SYNDIC_ANNUAL_USD + maintenance;
  const netBeforeTax = grossIncomeAnnual - charges;
  const tax = Math.max(0, netBeforeTax * MU_TAX_RATE);
  const netAfterTax = netBeforeTax - tax;

  const grossPct = (grossIncomeAnnual / priceUSD) * 100;
  const netPct = (netAfterTax / priceUSD) * 100;
  const monthlyCashflow = netAfterTax / 12;

  // France comparison: same gross, but up to 62.2% effective tax
  const frNetBeforeTax = grossIncomeAnnual - charges;
  const frTax = Math.max(0, frNetBeforeTax * 0.622);
  const frNetAfterTax = frNetBeforeTax - frTax;
  const frNetPct = (frNetAfterTax / priceUSD) * 100;

  return { grossPct, netPct, monthlyCashflow, netAfterTax, frNetPct, frNetAfterTax, yieldRange, grossIncomeAnnual, charges, tax };
}

/* ─── Component ─── */

export default function SimulateurRendementImmobilierPage() {
  const [scheme, setScheme] = useState<Scheme>("PDS");
  const [priceRaw, setPriceRaw] = useState("");
  const [currency, setCurrency] = useState<"USD" | "EUR">("USD");
  const [zone, setZone] = useState<Zone>("Grand Baie / Péreybère");
  const [strategy, setStrategy] = useState<Strategy>("long");
  const [computed, setComputed] = useState(false);
  const [success, setSuccess] = useState(false);

  const priceInCurrency = parseFloat(priceRaw) || 0;
  const priceUSD = currency === "EUR" ? priceInCurrency * EUR_TO_USD : priceInCurrency;

  const results = priceUSD > 0 ? computeResults(scheme, zone, strategy, priceUSD) : null;

  function handleCompute(e: React.FormEvent) {
    e.preventDefault();
    if (priceUSD > 0) {
      setComputed(true);
      trackEvent("simulateur_rendement", "calculate", scheme);
    }
  }

  const fmtPct = (n: number) => n.toFixed(2) + " %";
  const fmtCurrency = (n: number) => {
    const value = currency === "EUR" ? n / EUR_TO_USD : n;
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: currency,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const strategies: { key: Strategy; label: string; desc: string }[] = [
    { key: "long", label: "Longue durée", desc: "Bail classique, revenus stables" },
    { key: "short", label: "Courte durée", desc: "Airbnb / location saisonnière" },
    { key: "mixed", label: "Mixte", desc: "Combinaison des deux stratégies" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-900 to-amber-800 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Simulateur de rendement immobilier
          </h1>
          <p className="mt-4 text-lg text-amber-200">
            Estimez le rendement net de votre investissement immobilier à Maurice
          </p>
        </div>
      </section>

      {/* Form + Results */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleCompute} className="space-y-6">
            {/* Scheme */}
            <div>
              <Label htmlFor="scheme">Dispositif immobilier</Label>
              <select
                id="scheme"
                value={scheme}
                onChange={(e) => { setScheme(e.target.value as Scheme); setComputed(false); }}
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                {(Object.keys(SCHEME_YIELDS) as Scheme[]).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <p className="mt-1 text-xs text-slate-500">{ENTRY_PRICES[scheme]}</p>
            </div>

            {/* Price + currency toggle */}
            <div>
              <Label htmlFor="price">Prix d&apos;achat</Label>
              <div className="mt-1 flex gap-2">
                <Input
                  id="price"
                  type="number"
                  placeholder={currency === "USD" ? "500000" : "460000"}
                  value={priceRaw}
                  onChange={(e) => { setPriceRaw(e.target.value); setComputed(false); }}
                  className="flex-1"
                  required
                  min={1}
                />
                <div className="flex overflow-hidden rounded-md border border-slate-300">
                  <button
                    type="button"
                    onClick={() => setCurrency("USD")}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${currency === "USD" ? "bg-amber-600 text-white" : "bg-white text-slate-600 hover:bg-slate-50"}`}
                  >
                    USD
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrency("EUR")}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${currency === "EUR" ? "bg-amber-600 text-white" : "bg-white text-slate-600 hover:bg-slate-50"}`}
                  >
                    EUR
                  </button>
                </div>
              </div>
            </div>

            {/* Zone */}
            <div>
              <Label htmlFor="zone">Zone géographique</Label>
              <select
                id="zone"
                value={zone}
                onChange={(e) => { setZone(e.target.value as Zone); setComputed(false); }}
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                {(Object.keys(ZONE_MULTIPLIERS) as Zone[]).map((z) => (
                  <option key={z} value={z}>{z}</option>
                ))}
              </select>
            </div>

            {/* Strategy */}
            <div>
              <Label>Stratégie locative</Label>
              <div className="mt-2 grid gap-3 sm:grid-cols-3">
                {strategies.map(({ key, label, desc }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => { setStrategy(key); setComputed(false); }}
                    className={`rounded-lg border-2 p-4 text-left transition-colors ${
                      strategy === key
                        ? "border-amber-500 bg-amber-50"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <p className={`text-sm font-bold ${strategy === key ? "text-amber-700" : "text-slate-900"}`}>
                      {label}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full bg-amber-600 hover:bg-amber-700">
              Calculer mon rendement
            </Button>
          </form>

          {/* Results */}
          {computed && results && (
            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Résultats de votre simulation</h2>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {/* Gross yield */}
                <Card className="border-slate-200 p-6">
                  <p className="text-sm font-medium text-slate-500">Rendement brut estimé</p>
                  <p className="mt-3 text-2xl font-bold text-slate-900">{fmtPct(results.grossPct)}</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Fourchette : {fmtPct(results.yieldRange[0] * 100)} – {fmtPct(results.yieldRange[1] * 100)}
                  </p>
                </Card>

                {/* Net yield — highlighted */}
                <Card className="border-2 border-amber-400 bg-amber-50 p-6">
                  <p className="text-sm font-bold text-amber-700">Rendement net estimé</p>
                  <p className="mt-3 text-2xl font-bold text-amber-600">{fmtPct(results.netPct)}</p>
                  <p className="mt-1 text-xs text-amber-500">Après charges et IS 15 %</p>
                </Card>

                {/* Monthly cashflow */}
                <Card className="border-slate-200 p-6">
                  <p className="text-sm font-medium text-slate-500">Cash-flow mensuel net</p>
                  <p className="mt-3 text-2xl font-bold text-slate-900">{fmtCurrency(results.monthlyCashflow)}</p>
                  <p className="mt-1 text-xs text-slate-400">Soit {fmtCurrency(results.netAfterTax)} / an</p>
                </Card>

                {/* Tax card */}
                <Card className="border-slate-200 p-6">
                  <p className="text-sm font-medium text-slate-500">Fiscalité Maurice</p>
                  <p className="mt-3 text-lg font-bold text-slate-900">IS 15 %</p>
                  <p className="mt-1 text-xs text-slate-400">Dividendes 0 % | Plus-values 0 %</p>
                </Card>
              </div>

              {/* France comparison */}
              <Card className="border-2 border-green-400 bg-green-50 p-6 text-center">
                <p className="text-sm font-medium text-green-700">
                  Comparaison France vs Maurice
                </p>
                <p className="mt-2 text-lg text-green-800">
                  En France, ce même investissement rapporterait environ{" "}
                  <span className="font-bold">{fmtPct(results.frNetPct)}</span> net
                  {" "}vs{" "}
                  <span className="font-bold">{fmtPct(results.netPct)}</span> net à Maurice
                </p>
                <p className="mt-2 text-sm text-green-600">
                  Soit un différentiel annuel de{" "}
                  <span className="font-bold">{fmtCurrency(results.netAfterTax - results.frNetAfterTax)}</span> en votre faveur
                </p>
              </Card>

              {/* Disclaimer */}
              <p className="text-xs text-slate-400">
                Simulation indicative basée sur les données de marché 2025. Les rendements passés ne préjugent pas des rendements futurs. Contactez-nous pour une étude personnalisée.
              </p>

              {/* Lead capture */}
              <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-6">
                <p className="text-sm font-bold text-slate-900">Recevoir mon étude personnalisée</p>
                <p className="mt-1 text-xs text-slate-500">
                  Didier Laroussinie et son équipe vous préparent une analyse détaillée adaptée à votre projet.
                </p>
                {success ? (
                  <p className="mt-3 text-sm font-medium text-green-600">
                    Votre demande a été envoyée avec succès. Nous vous recontactons rapidement.
                  </p>
                ) : (
                  <form
                    className="mt-3 flex gap-2"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const email = (e.currentTarget.elements.namedItem("capture-email") as HTMLInputElement)?.value;
                      if (email) {
                        await submitSimulateurRendement({
                          email,
                          scheme,
                          price_usd: priceUSD,
                          currency,
                          zone,
                          strategy,
                          gross_yield: results.grossPct,
                          net_yield: results.netPct,
                          monthly_cashflow: results.monthlyCashflow,
                        });
                        setSuccess(true);
                        trackEvent("form_submit", "simulateur_rendement", scheme, Math.round(results.netPct * 100));
                      }
                    }}
                  >
                    <Input name="capture-email" type="email" placeholder="votre@email.com" className="h-10" required />
                    <Button type="submit" className="h-10 whitespace-nowrap bg-amber-600 hover:bg-amber-700">
                      Recevoir
                    </Button>
                  </form>
                )}
              </div>

              {/* CTAs */}
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                    Discuter de mon projet avec un expert
                  </Button>
                </Link>
                <Link href="/invest">
                  <Button size="lg" variant="outline" className="border-amber-600 text-amber-700 hover:bg-amber-50">
                    Découvrir nos programmes immobiliers
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
