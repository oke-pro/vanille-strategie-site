import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { serviceGroups, founder } from "@/data/site";

export const metadata: Metadata = {
  title: "À propos — Le Groupe Casalis (Vanille Stratégie + BD Star)",
  description:
    "Depuis 2012, le seul groupe à Maurice qui intègre conseil en implantation, expertise comptable MIPA, RH/paie et dashboard temps réel.",
};

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <Image src="/images/grand-baie.jpg" alt="Grand Baie Maurice" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Le Groupe Casalis</h1>
            <p className="mt-4 text-xl text-slate-300">
              Deux entités complémentaires, un seul objectif : votre réussite à Maurice.
            </p>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {serviceGroups.map((group) => (
              <div key={group.entity} className="rounded-2xl border p-8">
                <h2 className="text-2xl font-bold text-slate-900">{group.entity}</h2>
                <p className="mt-1 text-blue-600 font-medium">{group.subtitle}</p>
                <div className="mt-6 space-y-4">
                  {group.services.map((s) => (
                    <div key={s.slug} className="flex items-start gap-3">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <div>
                        <Link href={`/services/${s.slug}`} className="font-semibold text-slate-900 hover:text-blue-600">{s.title}</Link>
                        <p className="text-sm text-slate-600">{s.summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* OKE */}
          <div className="mt-12 rounded-2xl border-2 border-blue-200 bg-blue-50 p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">OKE</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Dashboard OKE — Propulsé par BD Star</h3>
                <p className="text-sm text-blue-600">Votre comptabilité en temps réel</p>
              </div>
            </div>
            <p className="mt-4 text-slate-700">
              Connecté à AfrAsia et MCB, 12 plateformes e-commerce, IA de classification et réconciliation automatique. Le seul outil à Maurice qui transforme votre comptabilité en avantage concurrentiel.
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">Nos valeurs</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Compétence", desc: "Chaque membre de l'équipe dispose de qualifications et d'expériences éprouvées." },
              { title: "Intégrité", desc: "Valeur essentielle, seule susceptible d'assurer notre développement à long terme." },
              { title: "Qualité", desc: "La qualité des services que nous proposons est notre préoccupation quotidienne." },
              { title: "Confiance", desc: "Transparence et sens du détail sont les éléments clés de la confiance de nos clients." },
            ].map((v) => (
              <div key={v.title} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dirigeant */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-3xl font-bold text-white">DL</div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">{founder.name}</h2>
          <p className="text-blue-600">{founder.title}</p>
          <p className="mt-4 mx-auto max-w-2xl text-slate-600">{founder.bio}</p>
          <div className="mt-6"><Link href="/didier-laroussinie"><Button variant="outline">Voir le parcours complet</Button></Link></div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Prêt à nous rencontrer ?</h2>
          <div className="mt-6"><Link href="/contact"><Button size="lg" className="bg-blue-600 px-10 hover:bg-blue-700">Nous contacter</Button></Link></div>
        </div>
      </section>
    </>
  );
}
