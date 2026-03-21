import { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero";
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

      {/* 2. "Quel profil êtes-vous ?" — Qualification */}
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

      {/* 9. Lead capture — CTA final */}
      <LeadCaptureSection />
    </>
  );
}
