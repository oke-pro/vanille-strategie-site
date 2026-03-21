import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder } from "@/data/site";

export const metadata: Metadata = {
  title: "Didier Laroussinie — Expert-Comptable | Fiscaliste International",
  description:
    "40+ ans d'expérience, ex-Deloitte, spécialiste Tax Planning, Transfer Pricing, M&A, Global Mobility. Installé à Maurice depuis 2015.",
};

export default function DidierPage() {
  return (
    <>
      {/* Hero sobre */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">Votre expert à Maurice</p>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">{founder.name}</h1>
              <p className="mt-2 text-xl font-medium text-blue-300">{founder.title}</p>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">{founder.bio}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {founder.specialties.map((s) => (
                  <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">{s}</span>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact"><Button size="lg" className="bg-blue-600 hover:bg-blue-700">Prendre RDV avec Didier</Button></Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-6xl font-bold text-white shadow-2xl">
                DL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Parcours professionnel</h2>
          <div className="mt-10 space-y-8">
            {[
              {
                period: "Grands cabinets",
                title: "Deloitte & cabinets d'expertise comptable",
                desc: "Formation et début de carrière au sein de Deloitte (Big Four). Acquisition d'une expertise pointue en audit, fiscalité internationale et consolidation.",
              },
              {
                period: "Entrepreneuriat",
                title: "Fondateur de cabinets d'expertise comptable",
                desc: "Création et développement de ses propres cabinets. Accompagnement de PME et ETI dans leur structuration fiscale et leur croissance.",
              },
              {
                period: "Direction opérationnelle",
                title: "DAF & DG de groupes",
                desc: "Direction financière et management opérationnel de groupes dans le prêt-à-porter, l'immobilier coté, le courtage et la formation. Équipes de 60 à 200 personnes. Consolidation IFRS pour sociétés cotées.",
              },
              {
                period: "M&A & LBO",
                title: "Opérations de haut niveau",
                desc: "Pilotage d'opérations de LBO, structuration de fusions-acquisitions, due diligence financière et fiscale pour des transactions complexes.",
              },
              {
                period: "Afrique",
                title: "Développement en Afrique francophone",
                desc: "Extension d'activités sur le continent africain. Compréhension fine des enjeux fiscaux et réglementaires multi-juridictions.",
              },
              {
                period: "Depuis 2015",
                title: "Maurice — Vanille Stratégie & BD Star",
                desc: "Installation à l'Île Maurice. Création du groupe Casalis. Accompagnement de centaines d'entrepreneurs et de familles dans leur implantation. Supervision de BD Star Management Services (MIPA).",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                    {idx + 1}
                  </div>
                  {idx < 5 && <div className="mt-2 h-full w-px bg-blue-200" />}
                </div>
                <div className="pb-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-600">{item.period}</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">En chiffres</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "40+", label: "Années d'expérience" },
              { value: "Deloitte", label: "Big Four" },
              { value: "200", label: "Personnes managées" },
              { value: "MIPA", label: "BD Star certifié" },
            ].map((c) => (
              <div key={c.label} className="rounded-xl bg-white p-6 text-center shadow-sm">
                <p className="text-3xl font-bold text-slate-900">{c.value}</p>
                <p className="mt-1 text-sm text-slate-600">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Discutons de votre projet</h2>
          <p className="mt-3 text-slate-400">Étude de faisabilité gratuite, réponse sous 24h.</p>
          <div className="mt-6"><Link href="/contact"><Button size="lg" className="bg-blue-600 px-10 hover:bg-blue-700">Prendre rendez-vous</Button></Link></div>
        </div>
      </section>
    </>
  );
}
