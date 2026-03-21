import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { permits, founder } from "@/data/site";

export const metadata: Metadata = {
  title: "Permis de résidence Maurice — OP Investor, Self-Employed, Retraité, Premium Visa",
  description: "30-50 dossiers déposés par an. Conditions mises à jour post-réforme EDB août 2025. Délai moyen 3-4 semaines.",
};

export default function PermisResidencePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-blue-400">Services — Vanille Stratégie</p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Permis de résidence à Maurice</h1>
            <p className="mt-4 text-lg text-slate-300">
              30 à 50 dossiers déposés chaque année auprès de l&apos;EDB. Nous vous guidons vers le permis adapté et constituons votre dossier.
            </p>
            <p className="mt-2 text-sm text-amber-400">Conditions mises à jour — Guidelines EDB du 19 août 2025</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {permits.map((p) => (
              <Card key={p.type} className="flex flex-col p-6 transition-shadow hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-900">{p.type}</h3>
                <p className="mt-1 text-sm font-medium text-blue-600">{p.target}</p>
                <div className="mt-4 flex-1 space-y-3 text-sm">
                  <div><span className="text-slate-500">Investissement : </span><span className="font-medium text-slate-900">{p.investment}</span></div>
                  <div><span className="text-slate-500">Turnover/Revenu : </span><span className="font-medium text-slate-900">{p.turnover}</span></div>
                  <div><span className="text-slate-500">Durée : </span><span className="font-medium text-slate-900">{p.duration}</span></div>
                </div>
                {p.renewal.includes("NOUVEAU") && (
                  <span className="mt-3 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">{p.renewal}</span>
                )}
              </Card>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            Délai moyen : 15-20 jours ouvrés (principe d&apos;approbation) · Dépendants : ~10 jours après le principal
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Notre accompagnement</h2>
          <ul className="mt-8 space-y-4">
            {[
              "Étude de faisabilité et recommandation du permis adapté",
              "Constitution complète du dossier (business plan, documents)",
              "Accompagnement lors du dépôt auprès de l'EDB",
              "Suivi jusqu'à l'obtention du permis",
              "Dossiers dépendants (conjoint, enfants < 24 ans)",
              "Recherche de logement, école, déménagement",
              "Ouverture de compte bancaire",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Quel permis pour vous ?</h2>
          <p className="mt-3 text-slate-400">Étude gratuite par {founder.name}, {founder.title}.</p>
          <div className="mt-6"><Link href="/contact"><Button size="lg" className="bg-blue-600 px-10 hover:bg-blue-700">Trouver mon permis</Button></Link></div>
        </div>
      </section>
    </>
  );
}
