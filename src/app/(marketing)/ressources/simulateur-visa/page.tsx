"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { submitSimulateurVisa } from "@/lib/api";

type Result = { visa: string; desc: string; invest: string; duration: string; color: string } | null;

export default function SimulateurVisaPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<Result>(null);

  const questions = [
    { q: "Quel est votre objectif principal ?", options: ["Créer/développer une entreprise", "Travailler à distance (freelance/e-commerce)", "Prendre ma retraite au soleil", "Être salarié d'une entreprise à Maurice", "Investir dans l'immobilier"] },
    { q: "Quel est votre âge ?", options: ["Moins de 50 ans", "50 ans ou plus"] },
    { q: "Quel budget pouvez-vous investir initialement ?", options: ["Moins de 50 000 $", "50 000 $ - 100 000 $", "100 000 $ - 375 000 $", "Plus de 375 000 $"] },
  ];

  function computeResult(a: string[]) {
    if (a[0] === "Prendre ma retraite au soleil" && a[1] === "50 ans ou plus") {
      return { visa: "OP Retired (Retraité)", desc: "Permis retraité de 10 ans. Transférez 2 000 $/mois et profitez de Maurice.", invest: "2 000 $/mois", duration: "10 ans", color: "amber" };
    }
    if (a[0] === "Travailler à distance (freelance/e-commerce)" && a[2]?.includes("Moins")) {
      return { visa: "Premium Visa", desc: "Gratuit, traité en 48h. Travaillez à distance pendant 1 an, renouvelable.", invest: "Aucun (revenu min. 1 500 $/mois)", duration: "1 an renouvelable", color: "teal" };
    }
    if (a[0] === "Travailler à distance (freelance/e-commerce)") {
      return { visa: "OP Self-Employed", desc: "Permis de 10 ans pour les indépendants. Investissement de 50 000 $ sur votre compte société.", invest: "50 000 $", duration: "10 ans", color: "teal" };
    }
    if (a[0] === "Être salarié d'une entreprise à Maurice") {
      return { visa: "OP Professional (ProPass)", desc: "Permis salarié. Votre employeur doit verser un salaire min. de 30 000 MUR/mois.", invest: "N/A", duration: "10 ans", color: "blue" };
    }
    if (a[0] === "Investir dans l'immobilier" && a[2]?.includes("375")) {
      return { visa: "Permis via investissement immobilier", desc: "Résidence via un programme IRS, PDS, Smart City ou G+2. Min. 375 000 $.", invest: "375 000 $+", duration: "10 ans", color: "purple" };
    }
    if (a[2]?.includes("100 000")) {
      return { visa: "OP Investor (Option 2)", desc: "Permis investisseur avec un investissement de 100 000 $ et des objectifs de CA allégés.", invest: "100 000 $", duration: "10 ans", color: "blue" };
    }
    return { visa: "OP Investor (Option 1)", desc: "Le permis investisseur le plus courant. 50 000 $ d'investissement dans votre société mauricienne.", invest: "50 000 $", duration: "10 ans", color: "blue" };
  }

  function handleAnswer(answer: string) {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (step + 1 >= questions.length || (answer === "Être salarié d'une entreprise à Maurice") || (answer === "Prendre ma retraite au soleil" && newAnswers.length >= 2)) {
      setResult(computeResult(newAnswers));
    } else {
      setStep(step + 1);
    }
  }

  function reset() { setStep(0); setAnswers([]); setResult(null); }

  return (
    <>
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Quel visa pour vous ?</h1>
          <p className="mt-4 text-lg text-slate-300">Répondez à 3 questions pour découvrir le permis adapté à votre profil.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {!result ? (
            <div>
              <div className="mb-6 flex gap-1">
                {questions.map((_, i) => (
                  <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-blue-600" : "bg-slate-200"}`} />
                ))}
              </div>
              <p className="text-sm text-slate-500">Question {step + 1} sur {questions.length}</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">{questions[step].q}</h2>
              <div className="mt-8 space-y-3">
                {questions[step].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    className="w-full rounded-xl border-2 border-slate-200 p-4 text-left text-sm font-medium text-slate-700 transition-all hover:border-blue-400 hover:bg-blue-50"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <Card className="border-2 border-blue-200 p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-blue-600">Notre recommandation</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">{result.visa}</h2>
              <p className="mt-3 text-slate-600">{result.desc}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Investissement</p>
                  <p className="mt-1 font-bold text-slate-900">{result.invest}</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Durée</p>
                  <p className="mt-1 font-bold text-slate-900">{result.duration}</p>
                </div>
              </div>
              {/* Capture email pour recevoir l'analyse détaillée */}
              <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50/50 p-6">
                <p className="text-sm font-bold text-slate-900">Recevez votre analyse détaillée par email</p>
                <form className="mt-3 flex gap-2" onSubmit={async (e) => {
                  e.preventDefault();
                  const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value;
                  if (email && result) {
                    await submitSimulateurVisa({ email, answers, result_visa: result.visa, result_invest: result.invest, result_duration: result.duration });
                    alert("Analyse envoyée !");
                  }
                }}>
                  <Input name="email" type="email" placeholder="votre@email.com" className="h-10" required />
                  <Button type="submit" className="h-10 bg-blue-600 hover:bg-blue-700 whitespace-nowrap">Recevoir</Button>
                </form>
              </div>
              <div className="mt-6 flex gap-4">
                <Link href="/contact" className="flex-1">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Étude personnalisée gratuite</Button>
                </Link>
                <Button variant="outline" onClick={reset}>Recommencer</Button>
              </div>
              <p className="mt-4 text-xs text-slate-400">Ce résultat est indicatif. Contactez-nous pour une analyse personnalisée.</p>
            </Card>
          )}
        </div>
      </section>
    </>
  );
}
