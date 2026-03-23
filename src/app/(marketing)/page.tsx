import { Metadata } from "next";
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
import { VideoInfographic } from "@/components/sections/video-infographic";
import Link from "next/link";
import { Mic, Headphones, Clock, ArrowRight, Scale, FileText, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title:
    "Vanille Stratégie — Expert-Comptable & Fiscaliste International | Implantation Île Maurice",
  description:
    "Depuis 2012, le seul groupe à Maurice qui intègre conseil en implantation, expertise comptable MIPA, RH/paie et dashboard temps réel. Fondé par un EC diplômé avec 40+ ans d'expérience.",
  openGraph: {
    title: "Vanille Stratégie — Votre nouvelle vie à Maurice commence ici",
    description:
      "Création de société, permis de résidence, comptabilité, RH — un seul interlocuteur, un groupe intégré. Expert-Comptable Fiscaliste International.",
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
                1 groupe intégré
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

      {/* Podcast — Mise en avant */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 items-center">
            {/* Left — Texte + Player */}
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-6">
                <Mic className="h-3.5 w-3.5" />
                Podcast
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Sécuriser son expatriation fiscale à Maurice
              </h2>
              <p className="mt-4 text-lg text-slate-300 leading-relaxed">
                Un décryptage complet des enjeux clés : Exit Tax, convention de non-double imposition, substance requirements et erreurs à éviter.
              </p>

              {/* Player */}
              <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm">
                <audio controls className="w-full" preload="metadata">
                  <source src="/media/podcast-expatriation-fiscale-maurice.m4a" type="audio/mp4" />
                </audio>
                <div className="mt-4 flex items-center gap-6 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    ~30 min
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Headphones className="h-3.5 w-3.5" />
                    Écoute gratuite
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/medias">
                  <Button variant="outline" className="rounded-full border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
                    Tous nos médias
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right — Visual */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-amber-500/10 blur-2xl" />
                <div className="relative flex h-56 w-56 items-center justify-center rounded-full border-2 border-amber-500/30 bg-slate-800">
                  <Mic className="h-20 w-20 text-amber-400" />
                </div>
                <div className="absolute -bottom-2 -right-2 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-slate-900 shadow-lg">
                  NOUVEAU
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actualité : Crise Dubaï — Breaking news content */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-red-400 mb-4">
              <AlertTriangle className="h-3.5 w-3.5" />
              Actualité — Mars 2026
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Crise Dubaï : comprendre et agir
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              L&apos;exode de Dubaï redessine la carte de l&apos;expatriation fiscale. Nos analyses pour prendre les bonnes décisions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {/* Article 1 */}
            <Link href="/blog/guerre-iran-exode-dubai-fin-mirage-fiscal" className="group">
              <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/80 p-6 transition-all hover:-translate-y-1 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5">
                <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-red-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-red-400">
                  Actualité
                </div>
                <h3 className="mt-4 text-lg font-bold leading-tight text-white group-hover:text-red-300">
                  Guerre Iran : l&apos;exode de Dubaï et la fin du mirage fiscal
                </h3>
                <p className="mt-3 line-clamp-2 text-sm text-slate-400">
                  115 000 Britanniques partis en 3 semaines, immobilier en chute de 25&nbsp;%, Bloomberg évoque un exode façon Hong Kong.
                </p>
                <p className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-red-400">
                  Lire l&apos;analyse
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Link>

            {/* Article 2 */}
            <Link href="/blog/maurice-alternative-autoroutes-expatriation" className="group">
              <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/80 p-6 transition-all hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5">
                <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-400">
                  Guide
                </div>
                <h3 className="mt-4 text-lg font-bold leading-tight text-white group-hover:text-amber-300">
                  Maurice : l&apos;alternative hors des autoroutes de l&apos;expatriation
                </h3>
                <p className="mt-3 line-clamp-2 text-sm text-slate-400">
                  Bali, Lisbonne, Dubaï, Bangkok — les destinations évidentes sont saturées. Maurice reste hors radar.
                </p>
                <p className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-amber-400">
                  Lire l&apos;analyse
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Link>

            {/* Article 3 */}
            <Link href="/blog/dubai-maurice-guide-transition-entrepreneurs" className="group">
              <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/80 p-6 transition-all hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5">
                <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  Guide pratique
                </div>
                <h3 className="mt-4 text-lg font-bold leading-tight text-white group-hover:text-emerald-300">
                  De Dubaï à Maurice : guide de transition complet
                </h3>
                <p className="mt-3 line-clamp-2 text-sm text-slate-400">
                  Transférer votre structure, vos actifs et votre résidence fiscale. Timeline, comparatif et accompagnement.
                </p>
                <p className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-emerald-400">
                  Lire le guide
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Blog — Authority content preview */}
      <BlogPreview />

      {/* Analyses juridiques commentées */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Ressources exclusives
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Textes de loi commentés par Didier Laroussinie
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Des analyses article par article des deux piliers fiscaux de Maurice, avec nos recommandations pratiques pour les entrepreneurs.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <Link href="/ressources/analyse-income-tax-act" className="group">
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Scale className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-blue-600">
                  Income Tax Act 1995
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Analyse commentée : résidence fiscale (section 73), taux 15%, dividendes, Partial Exemption Régime, CSG, Fair Share Contribution. Chaque article décrypté avec ses implications pour les investisseurs étrangers.
                </p>
                <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Lire l&apos;analyse complète
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Link>

            <Link href="/ressources/analyse-vat-act" className="group">
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <FileText className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-amber-600">
                  VAT Act 1998
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Analyse commentée : taux 15%, seuil d&apos;assujettissement abaissé à 3M MUR, exemption des services exportés, obligations déclaratives, remboursements. Les pièges à éviter pour chaque entrepreneur.
                </p>
                <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-amber-600">
                  Lire l&apos;analyse complète
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Authority banner — Didier + badges */}
      <AuthorityBanner />

      {/* Vidéo — Infographie cliquable qui lance la présentation */}
      <VideoInfographic />

      {/* 9. Lead capture — CTA final */}
      <LeadCaptureSection />
    </>
  );
}
