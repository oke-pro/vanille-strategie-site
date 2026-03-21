import { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero";
import { ProfilCards } from "@/components/sections/profil-cards";
import { CoreServices } from "@/components/sections/core-services";
import { MauriceStats } from "@/components/sections/maurice-stats";
import { FunnelTimeline } from "@/components/sections/funnel-timeline";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { OkeTeaser } from "@/components/sections/oke-teaser";
import { LeadCaptureSection } from "@/components/sections/lead-capture";
import { AuthorityBanner } from "@/components/sections/authority-banner";
import { BlogPreview } from "@/components/sections/blog-preview";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

export const metadata: Metadata = {
  title:
    "Vanille Stratégie — Votre nouvelle vie à Maurice commence ici",
  description:
    "Création de société, permis de résidence, comptabilité, RH — un seul interlocuteur, zéro sous-traitance. Expert-Comptable Fiscaliste International, 40+ ans d'expérience.",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* 1. Hero — Emotional entry + authority */}
        <HeroSection />

        {/* 2. Services core — Le business */}
        <CoreServices />

        {/* 3. "Quel profil êtes-vous ?" — Qualification */}
        <ProfilCards />

        {/* 4. Pourquoi Maurice — Stats from EDB + VS */}
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
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
