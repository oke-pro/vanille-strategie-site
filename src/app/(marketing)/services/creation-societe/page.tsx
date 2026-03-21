import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { companyTypes, founder } from "@/data/site";

export const metadata: Metadata = {
  title: "Création de société à Maurice — Domestic, GBC, Authorised Company",
  description: "Constitution en 3 jours, tarifs tout compris, 3 structures juridiques possibles. Analyse fiscale par un Expert-Comptable diplômé.",
};

export default function CreationSocietePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-blue-400">Services — Vanille Stratégie</p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Création de société à Maurice</h1>
            <p className="mt-4 text-lg text-slate-300">
              Domestic Company, GBC ou Authorised Company — nous analysons votre situation, recommandons la structure optimale et gérons l&apos;ensemble de la constitution.
            </p>
            <div className="mt-8"><Link href="/contact"><Button size="lg" className="bg-blue-600 hover:bg-blue-700">Demander un devis</Button></Link></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">3 structures possibles</h2>
          <p className="mt-2 text-sm text-slate-500">Mis à jour — Finance Act 2025</p>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {companyTypes.map((c) => (
              <div key={c.shortName} className="rounded-2xl border-2 p-6 transition-all hover:border-blue-400 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">{c.type}</h3>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-600">{c.shortName}</span>
                </div>
                <p className="mt-2 text-2xl font-bold text-blue-600">{c.taxRate}</p>
                <p className="mt-1 text-sm text-slate-600">{c.idealFor}</p>
                <ul className="mt-4 space-y-2">
                  {c.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Prestations tout compris</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Rédaction des statuts", "Frais de constitution", "Domiciliation provisoire ou définitive",
              "Ouverture de compte bancaire multi-devises", "Carte de crédit internationale",
              "Administrateur résident mauricien", "Analyse convention non-double imposition",
              "Conseil juridique (contrats types)", "Assistance installation (locaux, réseau)",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg bg-white p-4">
                <svg className="h-5 w-5 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-500">* Les démarches légales liées à la constitution des sociétés internationales sont réalisées par nos partenaires mauriciens dûment agréés par la Financial Services Commission of Mauritius.</p>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Quelle structure pour vous ?</h2>
          <p className="mt-3 text-slate-400">Analyse gratuite par {founder.name}, {founder.title}.</p>
          <div className="mt-6"><Link href="/contact"><Button size="lg" className="bg-blue-600 px-10 hover:bg-blue-700">Obtenir mon analyse</Button></Link></div>
        </div>
      </section>
    </>
  );
}
