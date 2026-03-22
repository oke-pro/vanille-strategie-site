import { Metadata } from "next";
import Image from "next/image";
import { HeroSection } from "@/components/sections/hero";
import { CoreServices } from "@/components/sections/core-services";
import { ProfilCards } from "@/components/sections/profil-cards";
import { MauriceStats } from "@/components/sections/maurice-stats";
import { FunnelTimeline } from "@/components/sections/funnel-timeline";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { OkeTeaser } from "@/components/sections/oke-teaser";
import { LeadCaptureSection } from "@/components/sections/lead-capture";
import { AuthorityBanner } from "@/components/sections/authority-banner";
import { BlogPreview } from "@/components/sections/blog-preview";

export const metadata: Metadata = {
  title:
    "Vanille Stratégie — Expert-Comptable & Fiscaliste International | Implantation Île Maurice",
  description:
    "Depuis 2012, le seul groupe à Maurice qui intègre conseil en implantation, expertise comptable MIPA, RH/paie et dashboard temps réel. Fondé par un EC diplômé avec 40+ ans d'expérience.",
  openGraph: {
    title: "Vanille Stratégie — Votre nouvelle vie à Maurice commence ici",
    description:
      "Création de société, permis de résidence, comptabilité, RH — un seul interlocuteur, zéro sous-traitance. Expert-Comptable Fiscaliste International.",
    url: "https://vanillestrategie.fr",
    siteName: "Vanille Stratégie",
    locale: "fr_FR",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — Emotional entry + authority */}
      <HeroSection />

      {/* 2. Services core — Le business */}
      <CoreServices />

      {/* Pourquoi Vanille Stratégie — 3 piliers clés */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Le pont sécurisé entre votre patrimoine et l&apos;Île Maurice
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            De votre expatriation à la gestion quotidienne de vos actifs,
            bénéficiez de l&apos;expertise d&apos;un cabinet multi-disciplinaire
            unique fondé par Didier Laroussinie.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <p className="text-4xl font-extrabold text-amber-400">14 ans</p>
              <p className="mt-3 text-sm text-slate-300">
                D&apos;expérience locale à Maurice (depuis 2012) alliée à 40+
                ans d&apos;expertise comptable internationale.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <p className="text-4xl font-extrabold text-amber-400">
                0 sous-traitance
              </p>
              <p className="mt-3 text-sm text-slate-300">
                Un interlocuteur unique pour une maîtrise totale du risque et du
                secret des affaires.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <p className="text-4xl font-extrabold text-amber-400">
                100% temps réel
              </p>
              <p className="mt-3 text-sm text-slate-300">
                La seule firme offrant un pilotage financier via une plateforme
                technologique exclusive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "Quel profil êtes-vous ?" — Qualification */}
      <ProfilCards />

      {/* 3. Pourquoi Maurice — Stats from EDB + VS */}
      <MauriceStats />

      {/* 4. Notre approche — Funnel subtil en 4 étapes */}
      <FunnelTimeline />

      {/* 5. Témoignages — Social proof */}
      <TestimonialsSection />

      {/* 6. OKE — Le différenciant tech */}
      <OkeTeaser />

      {/* 7. Blog — Authority content preview */}
      <BlogPreview />

      {/* 8. Authority banner — Didier + badges */}
      <AuthorityBanner />

      {/* Infographie — Vue d'ensemble de l'écosystème */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            L&apos;écosystème Vanille Stratégie en un coup d&apos;œil
          </h2>
          <Image
            src="/media/infographie-vanille-strategie.png"
            alt="Infographie Vanille Stratégie — Écosystème complet d'accompagnement à Maurice"
            width={1200}
            height={600}
            className="mt-8 rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Vidéo teaser — Présentation rapide */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Votre projet à Maurice, simplifié
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Découvrez notre accompagnement en quelques minutes.
          </p>
          <video
            controls
            className="mt-8 w-full rounded-2xl shadow-xl"
            poster="/media/infographie-vanille-strategie.png"
          >
            <source src="/media/presentation-maurice.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* 9. Lead capture — CTA final */}
      <LeadCaptureSection />
    </>
  );
}
