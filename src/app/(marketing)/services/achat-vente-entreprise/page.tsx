import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { founder } from "@/data/site";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  Handshake,
  Target,
  Key,
  CheckCircle2,
  ShieldCheck,
  Search,
  TrendingUp,
  FileText,
  Scale,
  PieChart,
  ArrowRight,
  Briefcase
} from "lucide-react";

export const metadata: Metadata = {
  title: "Achat / Vente d'entreprise à Maurice — M&A, Due Diligence, LBO",
  description: "Audit financier, rédaction de contrats de cession, pactes d'actionnaires. Supervisé par un spécialiste M&A avec 40+ ans d'expérience.",
};

export default function AchatVentePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[60vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 transition-transform duration-10000 group-hover:scale-110">
          <Image 
            src="/images/entreprise-filiale.jpg" 
            alt="M&A Maurice" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl animate-[fadeSlideUp_0.8s_ease-out]">
            <p className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-blue-300 backdrop-blur-sm">
              Services — Vanille Stratégie
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Fusions-Acquisitions <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">& Transmission</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              {founder.name} a piloté des opérations de LBO et de M&amp;A pendant plus de 40 ans. Profitez d&apos;un accompagnement de haut niveau pour vos projets à Maurice.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                  Consultation confidentielle
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Buy/Sell Sections */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card className="group p-8 md:p-12 border-none bg-slate-50 transition-all hover:bg-blue-50/50 hover:shadow-2xl animate-[fadeSlideUp_0.8s_ease-out_both]">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Vous achetez</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { title: "Sourcing stratégique", desc: "Identification de cibles qualitatives (off-market).", icon: Search },
                  { title: "Due diligence 360°", desc: "Audit financier, fiscal et juridique complet.", icon: ShieldCheck },
                  { title: "Évaluation & Négociation", desc: "Détermination de la juste valeur et pilotage des offres.", icon: TrendingUp },
                  { title: "Closing juridique", desc: "Rédaction des SPA (Sales Purchase Agreement).", icon: FileText },
                  { title: "Pacte d&apos;actionnaires", desc: "Sécurisation de la gouvernance et des sorties.", icon: Scale },
                  { title: "Accompagnement post-M&A", desc: "Intégration et pilotage via le dashboard OKE.", icon: Briefcase }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="group p-8 md:p-12 border-none bg-slate-900 text-white transition-all hover:shadow-2xl animate-[fadeSlideUp_0.8s_ease-out_0.2s_both]">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-lg">
                  <Key className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-bold text-white">Vous vendez</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { title: "Valorisation experte", desc: "Analyse multi-critères (DCF, Comparables).", icon: PieChart },
                  { title: "Dossier de présentation", desc: "Rédaction de l'Information Memorandum (IM).", icon: FileText },
                  { title: "Qualification acquéreurs", desc: "Filtrage et vérification de la solvabilité.", icon: Search },
                  { title: "Optimisation de sortie", desc: "Structuration fiscale de la cession.", icon: TrendingUp },
                  { title: "Avantage fiscal Maurice", desc: "0% d'impôt sur les plus-values de cession.", icon: ShieldCheck },
                  { title: "Négociation & Closing", desc: "Accompagnement jusqu'au transfert des fonds.", icon: Handshake }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">L&apos;expertise d&apos;un ancien <span className="text-blue-600">Big Four</span></h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Les opérations de haut de bilan à Maurice nécessitent une double culture : la maîtrise des standards internationaux (IFRS) et la connaissance fine du tissu économique local.
              </p>
              <div className="mt-8 p-6 rounded-2xl bg-blue-50 border border-blue-100 italic text-blue-800 font-medium">
                &quot;Une due diligence réussie à Maurice est la clé de voûte de votre investissement. Nous ne nous contentons pas de lire les chiffres, nous analysons la substance.&quot;
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-col items-center text-center">
              <div className="h-24 w-24 rounded-full bg-slate-200 mb-4 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                <Image src="/images/entrepreneur-maurice.jpg" alt="Didier Laroussinie" fill className="object-cover" />
              </div>
              <h4 className="font-bold text-slate-900">{founder.name}</h4>
              <p className="text-sm text-slate-500">{founder.title}</p>
              <Link href="/didier-laroussinie" className="mt-4 text-blue-600 font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                Voir son parcours <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Confidentialité garantie</h2>
          <p className="mt-4 text-xl text-slate-400">
            Toutes nos interventions en M&amp;A font l&apos;objet d&apos;un accord de confidentialité (NDA) strict dès le premier échange.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-10 h-14 text-lg font-bold">
                Discuter de mon projet
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
