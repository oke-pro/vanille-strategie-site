import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  TreePalm,
  Home,
  Building2,
  Globe,
  Layout,
  Bed,
  CheckCircle2,
  ShieldCheck,
  Search,
  Key,
  ArrowRight,
  TrendingUp,
  MapPin
} from "lucide-react";

export const metadata: Metadata = {
  title: "Immobilier & Patrimoine Maurice — Investissement, IRS, PDS, Smart City",
  description: "Conseil en investissement immobilier à Maurice. IRS, PDS, Smart City, G+2. Audit rigoureux, accompagnement achat/location.",
};

export default function ImmobilierPage() {
  const schemes = [
    { name: "IRS", full: "Integrated Resort Scheme", icon: TreePalm, desc: "Résidences de luxe dans des domaines intégrés avec golf, spa et services." },
    { name: "RES", full: "Real Estate Scheme", icon: Home, desc: "Projets résidentiels de taille moyenne, souvent proches des centres animés." },
    { name: "PDS", full: "Property Development Scheme", icon: Building2, desc: "Développements immobiliers modernes remplaçant l'IRS et le RES." },
    { name: "Smart City", full: "Smart City Scheme", icon: Globe, desc: "Villes intelligentes mixtes (travail, loisirs, résidentiel). Projets d'envergure." },
    { name: "G+2", full: "Ground + 2 Apartment", icon: Layout, desc: "Appartements en copropriété (R+2 minimum) — l'option la plus accessible." },
    { name: "IHS", full: "Invest Hotel Scheme", icon: Bed, desc: "Acquisition d'une chambre ou suite hôtelière avec revenus locatifs garantis." },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 transition-transform duration-10000 group-hover:scale-110">
          <Image 
            src="/images/villa-luxe.jpg" 
            alt="Villa luxe Maurice" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl animate-[fadeSlideUp_0.8s_ease-out]">
            <p className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-blue-300 backdrop-blur-sm">
              Services — Vanille Immobilier
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Votre patrimoine <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">sous les tropiques</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Investissement locatif, acquisition de résidence principale ou conseil patrimonial. Nous sélectionnons uniquement les projets audités et validés.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                  Voir les opportunités
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Schemes Grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Programmes éligibles au permis de résidence</h2>
              <p className="mt-4 text-lg text-slate-600">
                L&apos;acquisition d&apos;un bien immobilier à Maurice peut vous ouvrir les portes de la résidence permanente pour vous et votre famille.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl max-w-sm">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-sm mb-1 uppercase tracking-tight">
                <TrendingUp className="h-4 w-4" />
                <span>Rappel Loi Finance 2026</span>
              </div>
              <p className="text-xs text-amber-800 leading-snug">
                Investissement min : 375 000 $ <br />
                Droits d&apos;enregistrement : 10%
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {schemes.map((p, idx) => (
              <Card 
                key={p.name} 
                className="group flex flex-col p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-slate-100 bg-white animate-[fadeSlideUp_0.8s_ease-out_both]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{p.name}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{p.full}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1 italic">{p.desc}</p>
                <div className="mt-6 pt-6 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                    Détails du programme <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl animate-[fadeSlideUp_0.8s_ease-out]">
              <Image 
                src="/images/grand-baie.jpg" 
                alt="Immobilier Grand Baie" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/20" />
            </div>

            <div className="animate-[fadeSlideUp_0.8s_ease-out_0.2s_both]">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
                Une approche <br />
                <span className="text-blue-600">audité et sécurisée</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Contrairement aux agences classiques, Vanille Immobilier agit comme votre conseil exclusif. Nous auditons les promoteurs et les garanties financières avant de vous proposer un bien.
              </p>
              
              <div className="mt-10 space-y-6">
                {[
                  { title: "Audit promoteur", desc: "Vérification des antécédents et de la solidité financière.", icon: ShieldCheck },
                  { title: "Validation GFA", desc: "Garantie Financière d'Achèvement systématique.", icon: CheckCircle2 },
                  { title: "Sourcing Off-Market", desc: "Accès à des pépites avant leur mise sur le marché.", icon: Search },
                  { title: "Gestion locative", desc: "Mise en place et suivi via notre pôle BD Star.", icon: Key }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles liés */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-slate-900">Articles liés</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { href: "/ressources/blog/succession-internationale-france-maurice", title: "Succession internationale France-Maurice", desc: "Règles successorales, convention bilatérale et planification patrimoniale." },
              { href: "/ressources/blog/qualite-de-vie-maurice-lifestyle-golf-business", title: "Qualité de vie à Maurice", desc: "Lifestyle, golf, business : pourquoi Maurice séduit les investisseurs." },
            ].map((a) => (
              <Link key={a.href} href={a.href}>
                <div className="group rounded-xl border bg-white p-4 transition-all hover:shadow-md hover:border-blue-300">
                  <h4 className="font-bold text-slate-900 group-hover:text-blue-600">{a.title}</h4>
                  <p className="mt-1 text-sm text-slate-500">{a.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24 relative">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/ocean-turquoise.jpg" alt="Ocean" fill className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            <MapPin className="h-3.5 w-3.5" />
            <span>Grand Baie · Rivière Noire · Tamarin · Pointe d&apos;Esny</span>
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Envie d&apos;investir à Maurice ?</h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Nos conseillers vous proposent une sélection de biens validés, du pied-à-terre au bord de l&apos;eau à la villa d&apos;exception.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-10 h-14 text-lg font-bold shadow-xl shadow-blue-500/25">
                Demander la sélection actuelle
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
