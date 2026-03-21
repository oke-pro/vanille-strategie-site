"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { submitSimulateurFiscal } from "@/lib/api";

export default function SimulateurFiscalPage() {
  const [ca, setCa] = useState("");
  const [benefice, setBenefice] = useState("");
  const [dividendes, setDividendes] = useState("");
  const [computed, setComputed] = useState(false);

  const b = parseFloat(benefice) || 0;
  const d = parseFloat(dividendes) || 0;

  // France
  const isFR = b <= 42500 ? b * 0.15 : 42500 * 0.15 + (b - 42500) * 0.25;
  const divFR = d * 0.30; // PFU 30%
  const totalFR = isFR + divFR;

  // Maurice
  const isMU = b * 0.15;
  const divMU = 0;
  const totalMU = isMU + divMU;

  // Maroc
  const isMA = b * 0.175;
  const divMA = d * 0.15;
  const totalMA = isMA + divMA;

  const economie = totalFR - totalMU;

  function handleCompute(e: React.FormEvent) {
    e.preventDefault();
    setComputed(true);
  }

  const fmt = (n: number) => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

  return (
    <>
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Simulateur fiscal</h1>
          <p className="mt-4 text-lg text-slate-300">Combien économiseriez-vous en vous implantant à Maurice ?</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleCompute} className="space-y-6">
            <div>
              <Label htmlFor="ca">Chiffre d&apos;affaires annuel (€)</Label>
              <Input id="ca" type="number" placeholder="500000" value={ca} onChange={(e) => setCa(e.target.value)} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="benefice">Bénéfice annuel avant impôt (€)</Label>
              <Input id="benefice" type="number" placeholder="200000" value={benefice} onChange={(e) => setBenefice(e.target.value)} className="mt-1" required />
            </div>
            <div>
              <Label htmlFor="dividendes">Dividendes que vous souhaitez vous verser (€)</Label>
              <Input id="dividendes" type="number" placeholder="100000" value={dividendes} onChange={(e) => setDividendes(e.target.value)} className="mt-1" />
            </div>
            <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
              Calculer mes économies
            </Button>
          </form>

          {computed && b > 0 && (
            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Résultat comparatif</h2>

              <div className="grid gap-4 sm:grid-cols-3">
                <Card className="border-slate-200 p-6">
                  <p className="text-sm font-medium text-slate-500">France</p>
                  <p className="mt-1 text-xs text-slate-400">IS 15-25% + PFU 30%</p>
                  <p className="mt-3 text-2xl font-bold text-slate-900">{fmt(totalFR)}</p>
                  <div className="mt-2 text-xs text-slate-500">
                    <p>IS : {fmt(isFR)}</p>
                    <p>Dividendes : {fmt(divFR)}</p>
                  </div>
                </Card>

                <Card className="border-2 border-blue-400 bg-blue-50 p-6">
                  <p className="text-sm font-bold text-blue-600">Maurice</p>
                  <p className="mt-1 text-xs text-blue-500">IS 15% + 0% dividendes</p>
                  <p className="mt-3 text-2xl font-bold text-blue-600">{fmt(totalMU)}</p>
                  <div className="mt-2 text-xs text-blue-500">
                    <p>IS : {fmt(isMU)}</p>
                    <p>Dividendes : {fmt(divMU)}</p>
                  </div>
                </Card>

                <Card className="border-slate-200 p-6">
                  <p className="text-sm font-medium text-slate-500">Maroc</p>
                  <p className="mt-1 text-xs text-slate-400">IS 17,5% + retenue 15%</p>
                  <p className="mt-3 text-2xl font-bold text-slate-900">{fmt(totalMA)}</p>
                  <div className="mt-2 text-xs text-slate-500">
                    <p>IS : {fmt(isMA)}</p>
                    <p>Dividendes : {fmt(divMA)}</p>
                  </div>
                </Card>
              </div>

              {economie > 0 && (
                <Card className="border-2 border-green-400 bg-green-50 p-6 text-center">
                  <p className="text-sm font-medium text-green-700">Économie annuelle en s&apos;implantant à Maurice vs France</p>
                  <p className="mt-2 text-4xl font-bold text-green-600">{fmt(economie)}</p>
                  <p className="mt-1 text-sm text-green-600">soit {fmt(economie * 5)} sur 5 ans</p>
                </Card>
              )}

              {/* Capture email pour recevoir l'analyse détaillée */}
              <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-6">
                <p className="text-sm font-bold text-slate-900">Recevez votre simulation détaillée par email</p>
                <form className="mt-3 flex gap-2" onSubmit={async (e) => {
                  e.preventDefault();
                  const email = (e.currentTarget.elements.namedItem("capture-email") as HTMLInputElement)?.value;
                  if (email) {
                    await submitSimulateurFiscal({ email, ca: parseFloat(ca), benefice: b, dividendes: d, economie_vs_france: economie });
                    setSuccess(true);
                  }
                }}>
                  <Input name="capture-email" type="email" placeholder="votre@email.com" className="h-10" required />
                  <Button type="submit" className="h-10 bg-blue-600 hover:bg-blue-700 whitespace-nowrap">Recevoir</Button>
                </form>
              </div>

              <p className="text-xs text-slate-400">
                Simulation indicative simplifiée. Contactez-nous pour une analyse personnalisée.
              </p>

              <div className="text-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Obtenir mon analyse fiscale personnalisée</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
