import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { founder, testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Entreprise — Implanter votre filiale à Maurice",
  description:
    "Comme l'École Centrale de Nantes, créez votre filiale mauricienne. Recrutement, OP Professional, comptabilité bistandard FR/IFRS, bureaux clé en main.",
};

const services = [
  { title: "Création de filiale", desc: "Domestic Company ou GBC selon votre stratégie internationale. Constitution en 3 jours." },
  { title: "OP Professional pour vos équipes", desc: "ProPass (30 000 MUR/mois) ou Expert Pass (250 000 MUR/mois). 15-20 jours ouvrés." },
  { title: "Recrutement local", desc: "Main-d'œuvre bilingue FR/EN, 93% d'alphabétisation. Nous gérons le recrutement et les contrats." },
  { title: "Comptabilité bistandard", desc: "Normes françaises ET IFRS — BD Star (MIPA) gère votre comptabilité dans les deux référentiels." },
  { title: "Paie & RH externalisées", desc: "Bulletins de paie, charges CSG/PAYE, conformité Workers' Rights Act — tout est intégré." },
  { title: "Bureaux clé en main", desc: "Vanille Business Centers à Grand Baie ou Ebene Cybercity. Prêt en 48h." },
];

export default function EntreprisePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <Image src="/images/entreprise-filiale.jpg" alt="Implantation entreprise Maurice" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-[fadeSlideUp_0.8s_ease-out]">
            <p className="mb-3 inline-block rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1 text-sm font-medium uppercase tracking-widest text-purple-300">
              Parcours Entreprise
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Implanter{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">votre filiale</span>{" "}
              à Maurice
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Comme l&apos;École Centrale de Nantes, déployez vos activités à Maurice avec une équipe locale, une comptabilité bistandard et des bureaux prêts à l&apos;emploi.
            </p>
            <div className="mt-8">
              <Link href="/contact"><Button size="lg" className="bg-purple-600 hover:bg-purple-700">Demander une étude d&apos;implantation</Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">Un accompagnement complet pour votre filiale</h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="p-6 transition-shadow hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Maurice pour les entreprises */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <Image src="/images/ocean-turquoise.jpg" alt="Maurice" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/85" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Pourquoi Maurice pour votre entreprise ?</h2>
          <p className="mt-3 text-center text-lg text-slate-300">Source : EDB Mauritius</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { stat: "15%", label: "IS flat", detail: "Effectif 3% pour les GBC avec PER 80%" },
              { stat: "37", label: "Traités fiscaux", detail: "Accès aux marchés via non-double imposition" },
              { stat: "FTA Chine", label: "Accord signé", detail: "Accès au marché chinois via Maurice" },
              { stat: "93%", label: "Alphabétisation", detail: "Main-d'œuvre bilingue FR/EN qualifiée" },
              { stat: "3 jours", label: "Création société", detail: "CBRD — processus 100% digital" },
              { stat: "Hub Afrique", label: "500M+ consommateurs", detail: "COMESA, SADC — porte d'entrée du continent" },
            ].map((a) => (
              <div key={a.label} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
                <p className="text-3xl font-bold text-white">{a.stat}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-purple-300">{a.label}</p>
                <p className="mt-1 text-xs text-slate-400">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage Centrale Nantes */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-500 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center text-white sm:px-6 lg:px-8">
          <blockquote className="text-xl font-medium italic leading-relaxed sm:text-2xl">
            &laquo;&nbsp;{testimonials[0].quote}&nbsp;&raquo;
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-purple-200">
            {testimonials[0].name} — {testimonials[0].role}, {testimonials[0].company}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Prêt à implanter votre filiale ?</h2>
          <p className="mt-3 text-lg text-slate-400">Étude d&apos;implantation gratuite par {founder.name}, {founder.title}.</p>
          <div className="mt-8">
            <Link href="/contact"><Button size="lg" className="bg-purple-600 px-10 text-base hover:bg-purple-700">Démarrer l&apos;étude</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
