import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/data/site";
import {
  Building2,
  Users,
  Globe2,
  FileText,
  ArrowRight,
  UserCheck,
  Calculator,
  Laptop
} from "lucide-react";

export const metadata: Metadata = {
  title: "Entreprise — Implanter votre filiale à Maurice",
  description:
    "Comme l'École Centrale de Nantes, créez votre filiale mauricienne. Recrutement, OP Professional, comptabilité bistandard FR/IFRS, bureaux clé en main.",
};

const services = [
  { title: "Création de filiale", icon: Building2, desc: "Domestic Company ou GBC selon votre stratégie. Constitution agile en 72h." },
  { title: "OP Professional / ProPass", icon: UserCheck, desc: "Gestion des permis pour vos cadres et salariés. Délai moyen 15-20 jours." },
  { title: "Recrutement local", icon: Users, desc: "Main-d'œuvre bilingue qualifiée (93% alphabétisation). Sourcing et contrats." },
  { title: "Comptabilité bistandard", icon: Calculator, desc: "Normes françaises ET IFRS — BD Star (MIPA) gère vos deux référentiels." },
  { title: "Paie & RH externalisées", icon: FileText, desc: "Bulletins de paie, CSG/PAYE et conformité Workers' Rights Act intégrés." },
  { title: "Bureaux clé en main", icon: Laptop, desc: "Vanille Business Centers à Grand Baie ou Ebene. Espaces prêts en 48h." },
];

export default function EntreprisePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image 
            src="/images/port-louis.jpg" 
            alt="Implantation entreprise Maurice" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl delay-500" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-purple-300 backdrop-blur-sm">
              Parcours Entreprise — Vanille Stratégie
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-7xl leading-[1.1]">
              Votre filiale <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">Hub Océan Indien</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Comme l&apos;École Centrale de Nantes, déployez vos activités à Maurice avec une équipe locale, une comptabilité bistandard et des bureaux prêts à l&apos;emploi.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8 h-14 text-lg font-bold shadow-lg shadow-purple-500/20 text-white">
                  Étude d&apos;implantation gratuite
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Un accompagnement complet</h2>
            <p className="mt-4 text-lg text-slate-600">
              De la structure juridique à la gestion quotidienne de vos salariés, nous sommes votre partenaire local unique.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => (
              <Card 
                key={s.title} 
                className="group p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-slate-100 bg-white"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed italic font-medium">{s.desc}</p>
                <div className="mt-6 pt-6 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-purple-600">
                    Détails du service <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image src="/images/ocean-turquoise.jpg" alt="Maurice" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/95" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Pourquoi Maurice pour votre filiale ?</h2>
            <p className="mt-4 text-lg text-slate-400">Source : Economic Development Board (EDB) Mauritius</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { stat: "15%", label: "IS Flat", detail: "Effectif 3% pour les GBC (80% exemption)" },
              { stat: "37", label: "Traités Fiscaux", detail: "Convention de non-double imposition dont FR-MU" },
              { stat: "FTA Chine", label: "Accord Signé", detail: "Seul pays d'Afrique avec un accord de libre-échange Chine" },
              { stat: "93%", label: "Alphabétisation", detail: "Main-d'œuvre bilingue FR/EN hautement qualifiée" },
              { stat: "3 Jours", label: "Création Société", detail: "Processus 100% digital via le CBRD" },
              { stat: "Hub Afrique", label: "Porte d'Entrée", detail: "Accès privilégié aux marchés COMESA et SADC" },
            ].map((a, idx) => (
              <div 
                key={a.label} 
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <p className="text-4xl font-black text-white mb-2">{a.stat}</p>
                <p className="text-xs font-black uppercase tracking-widest text-purple-400 mb-3">{a.label}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[30rem] h-[30rem] bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <blockquote className="text-2xl md:text-3xl font-medium italic text-white leading-relaxed">
                  &laquo;&nbsp;{testimonials[0].quote}&nbsp;&raquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center text-white font-black text-xl border border-white/30 backdrop-blur-sm">
                    FM
                  </div>
                  <div>
                    <p className="text-white font-black text-lg">{testimonials[0].name}</p>
                    <p className="text-purple-200 font-bold">{testimonials[0].role}, {testimonials[0].company}</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 relative aspect-video rounded-3xl overflow-hidden shadow-xl">
                 <Image 
                  src="/images/grand-baie.jpg" 
                  alt="Centrale Nantes Maurice" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-purple-600/10 text-purple-500 mb-8 border border-purple-500/20">
            <Globe2 className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Votre ambition n&apos;a <br />
            <span className="text-purple-400">plus de frontières</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Obtenez une étude d&apos;implantation complète et gratuite par Didier Laroussinie.
          </p>
          <div className="mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-purple-500/20 text-white border-none transition-all duration-300">
                Lancer mon étude d&apos;implantation
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.4em] text-slate-500">
            Audit · Recrutement · Comptabilité IFRS · Pilotage
          </p>
        </div>
      </section>
    </main>
  );
}
