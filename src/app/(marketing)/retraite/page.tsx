import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { founder, testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Retraite à Maurice — Profitez du N°1 qualité de vie en Afrique",
  description:
    "Permis retraité dès 2 000 $/mois, 0% droits de succession, climat tropical toute l'année. Vanille Stratégie gère votre installation de A à Z.",
};

const benefits = [
  { title: "0% droits de succession", desc: "Ni ISF, ni taxe foncière, ni taxe d'habitation" },
  { title: "2 000 $/mois", desc: "Transfert minimum pour le permis retraité (50 ans+)" },
  { title: "Permis 10 ans", desc: "Renouvelable, avec possibilité de résidence permanente après 5 ans" },
  { title: "N°1 qualité de vie", desc: "Classement Mercer — meilleure qualité de vie en Afrique" },
  { title: "Santé de qualité", desc: "Cliniques privées modernes, praticiens francophones" },
  { title: "Communauté francophone", desc: "Le français est langue officielle, communauté expat active" },
];

export default function RetraitePage() {
  const retraiteTestimonial = testimonials[2]; // Frouin

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <Image src="/images/retraite-maurice.jpg" alt="Retraite à Maurice" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-[fadeSlideUp_0.8s_ease-out]">
            <p className="mb-3 inline-block rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1 text-sm font-medium uppercase tracking-widest text-amber-300">
              Parcours Retraité
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Votre retraite{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">au paradis</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Soleil toute l&apos;année, 0% succession, communauté francophone. Maurice est la destination idéale pour profiter de votre retraite.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">Parler avec un conseiller retraite</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">Pourquoi prendre sa retraite à Maurice ?</h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <Card key={b.title} className="p-6 transition-shadow hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-900">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions du permis retraité */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Le permis retraité</h2>
              <p className="mt-2 text-sm text-amber-600 font-medium">Mis à jour — Finance Act 2025</p>
              <ul className="mt-6 space-y-4">
                {[
                  "Âge minimum : 50 ans",
                  "Transfert initial de 2 000 $ dans les 60 jours",
                  "Puis 24 000 $/an (ou 2 000 $/mois) minimum",
                  "Présence minimum : 180 jours/an (NOUVEAU 2025)",
                  "Durée : 10 ans, renouvelable",
                  "Pas de droit à un salaire, mais actionnariat possible",
                  "Résidence permanente possible après 5 ans",
                  "Dépendants inclus (conjoint, enfants < 24 ans)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image src="/images/villa-luxe.jpg" alt="Villa de luxe Maurice" width={600} height={400} className="rounded-2xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500" />
        <div className="relative mx-auto max-w-4xl px-4 text-center text-white sm:px-6 lg:px-8">
          <blockquote className="text-xl font-medium italic leading-relaxed sm:text-2xl">
            &laquo;&nbsp;{retraiteTestimonial.quote}&nbsp;&raquo;
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-amber-200">
            {retraiteTestimonial.name} — {retraiteTestimonial.role}
          </p>
        </div>
      </section>

      {/* Ce qu'on gère */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">On s&apos;occupe de tout</h2>
          <p className="mt-3 text-lg text-slate-600">Votre seul travail ? Profiter de la vie.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 text-left">
            {[
              "Constitution et dépôt du dossier auprès de l'EDB",
              "Recherche de villa ou appartement",
              "Ouverture de compte bancaire (AfrAsia, MCB)",
              "Inscription des enfants / petits-enfants à l'école",
              "Transfert de vos animaux de compagnie",
              "Organisation de votre déménagement",
              "Conseil patrimonial et successoral",
              "Suivi administratif annuel",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg bg-slate-50 p-4">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Prêt pour le soleil ?</h2>
          <p className="mt-3 text-lg text-slate-400">Étude de faisabilité gratuite par {founder.name}, {founder.title}.</p>
          <div className="mt-8">
            <Link href="/contact"><Button size="lg" className="bg-amber-600 px-10 text-base hover:bg-amber-700">Planifier ma retraite à Maurice</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
