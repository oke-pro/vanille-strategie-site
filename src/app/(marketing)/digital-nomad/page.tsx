import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { founder } from "@/data/site";
import { 
  Laptop, 
  Globe, 
  Wifi, 
  Plane, 
  Palmtree, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Cpu,
  ShoppingCart,
  CreditCard,
  BarChart3
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Nomad — Piloter votre business depuis Maurice",
  description:
    "Premium Visa gratuit en 48h, fiscalité 15% flat, 0% dividendes, connecteurs Shopify/Amazon intégrés. Maurice, la base idéale pour les entrepreneurs digitaux.",
};

const advantages = [
  { icon: TrendingUp, title: "15% IS flat", desc: "0% dividendes, 0% plus-values — la fiscalité de Dubaï sans les risques opérationnels." },
  { icon: Globe, title: "GMT+4", desc: "Fuseau horaire idéal couvrant l'Europe (matin) et l'Asie (après-midi)." },
  { icon: Wifi, title: "Fibre optique", desc: "Internet haut débit stable, infrastructures de coworking modernes à Grand Baie." },
  { icon: Plane, title: "Vol direct", desc: "Air France / Air Mauritius depuis Paris, connexions directes vers Dubaï et l'Asie." },
  { icon: Palmtree, title: "Qualité de vie", desc: "N°1 en Afrique (Mercer), plages paradisiaques, sécurité totale et vie nocturne." },
  { icon: Zap, title: "0% TVA export", desc: "Vos prestations de services vers l'international ne sont pas soumises à la TVA." },
];

const steps = [
  { step: "1", title: "Premium Visa", icon: Plane, desc: "Gratuit, 48h de traitement. Revenu min. 1 500 $/mois. Testez Maurice pendant 1 an." },
  { step: "2", title: "Installation agile", icon: Palmtree, desc: "Trouvez votre villa, ouvrez un compte bancaire AfrAsia ou MCB et connectez la fibre." },
  { step: "3", title: "Switch to OP", icon: ShieldCheck, desc: "Transition vers un Occupation Permit Self-Employed pour une résidence de 10 ans." },
  { step: "4", title: "Scale with OKE", icon: BarChart3, desc: "Automatisez votre compta Shopify/Amazon et pilotez votre business en temps réel." },
];

export default function DigitalNomadPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 transition-transform duration-10000 group-hover:scale-110">
          <Image 
            src="/images/digital-nomad-maurice.jpg" 
            alt="Digital Nomad à Maurice" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-900/80 to-teal-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl animate-[fadeSlideUp_0.8s_ease-out]">
            <p className="inline-block rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-teal-300 backdrop-blur-sm">
              Parcours Digital Nomad — Vanille Stratégie
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-7xl leading-[1.1]">
              Pilotez votre business <br />
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">depuis le paradis</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              E-commerçant, freelance, infopreneur — profitez de la fiscalité de Dubaï avec la qualité de vie des tropiques et une intégration comptable totale.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-8 h-14 text-lg font-bold shadow-lg shadow-teal-500/20">
                  Simuler mon installation
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-white/80 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <Zap className="h-5 w-5 text-amber-400" />
                <span className="text-sm font-medium italic">Premium Visa gratuit en 48h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Pourquoi choisir Maurice ?</h2>
            <p className="mt-4 text-lg text-slate-600">
              Plus qu&apos;une plage, une base fiscale et opérationnelle solide pour votre business digital.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a, idx) => (
              <Card 
                key={a.title} 
                className="group p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-slate-100 bg-white animate-[fadeSlideUp_0.8s_ease-out_both]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <a.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{a.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed italic">{a.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image src="/images/cocotiers-plage.jpg" alt="Cocotiers" fill className="object-cover" />
          <div className="absolute inset-0 bg-white/95" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Votre transition en 4 étapes</h2>
            <p className="mt-4 text-lg text-slate-600">
              Du Premium Visa gratuit au dashboard OKE — nous gérons l&apos;intégralité de votre mutation.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, idx) => (
              <div 
                key={s.step} 
                className="group relative rounded-3xl border border-slate-200 bg-white/80 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-[fadeSlideUp_0.8s_ease-out_both]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="absolute top-4 right-4 text-4xl font-black text-slate-100 group-hover:text-teal-50 transition-colors">
                  0{s.step}
                </div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-lg shadow-teal-600/20">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium italic">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OKE Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeSlideUp_0.8s_ease-out]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-400 mb-4">La Tech au service de la Compta</p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                Vos ventes e-commerce <br />
                <span className="text-teal-400 underline decoration-teal-500/30 underline-offset-8">100% automatisées</span>
              </h2>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                Connectez vos boutiques Shopify, Amazon ou Stripe. Notre dashboard OKE transforme vos flux en écritures comptables certifiées. Zéro saisie, zéro erreur.
              </p>
              
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Shopify", "Amazon", "Stripe", "WooCommerce", "eBay", "Cdiscount"].map((p, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <CheckCircle2 className="h-4 w-4 text-teal-400" />
                    <span className="text-xs font-bold text-slate-300">{p}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link href="/services/comptabilite-fiscalite" className="inline-flex items-center gap-2 text-sm font-black text-teal-400 uppercase tracking-widest hover:gap-4 transition-all">
                  Découvrir le dashboard OKE <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-[fadeSlideUp_0.8s_ease-out_0.2s_both]">
               <Image 
                src="/images/bureau-moderne.jpg" 
                alt="Pilotage d'entreprise" 
                fill 
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900/60 to-slate-900/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-8 bg-white rounded-2xl shadow-2xl max-w-xs text-center transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Cpu className="h-10 w-10 text-teal-600 mx-auto mb-4" />
                  <p className="text-slate-900 font-black text-xl mb-1">OKE Dashboard</p>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Connectivité Totale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles liés */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Guides pour digital entrepreneurs</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: "/ressources/blog/paiements-en-ligne-maurice-stripe-alternatives", title: "Paiements en ligne à Maurice", desc: "Stripe, MIPS, PayPal, Airwallex — toutes les options pour votre business digital.", badge: "Paiements" },
              { href: "/ressources/blog/devises-mur-conversion-maurice", title: "Le piège des devises", desc: "Convertir des MUR en devises étrangères — stratégies et risques.", badge: "Finance" },
              { href: "/ressources/blog/ecosysteme-tech-startups-maurice", title: "Écosystème tech Maurice", desc: "Incubateurs, programmes, coworking — le guide des startups.", badge: "Tech" },
              { href: "/ressources/blog/qualite-de-vie-maurice-lifestyle-golf-business", title: "Qualité de vie à Maurice", desc: "Golfs, plages, restaurants — le lifestyle qui vous attend.", badge: "Lifestyle" },
              { href: "/ressources/blog/maurice-reunion-liaisons-expats-francais", title: "Maurice ↔ La Réunion", desc: "La France à 45 minutes — 27 vols par semaine.", badge: "Mobilité" },
              { href: "/ressources/blog/crypto-vasp-licence-maurice", title: "Crypto & VASP", desc: "Licence FSC, taux effectif 3%, regulatory sandbox.", badge: "Fintech" },
            ].map((article) => (
              <Link key={article.href} href={article.href}>
                <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-teal-300">
                  <span className="inline-block rounded-full bg-teal-100 px-2 py-0.5 text-xs font-medium text-teal-700">{article.badge}</span>
                  <h3 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-teal-600">{article.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{article.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image src="/images/plage-paradis.jpg" alt="Plage paradisiaque" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 to-teal-800/80" />
        </div>
        
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-5xl leading-tight">
            Prêt à piloter votre business <br />
            <span className="text-teal-400">depuis le paradis ?</span>
          </h2>
          <p className="mt-8 text-xl text-teal-100/80 max-w-2xl mx-auto leading-relaxed">
            Obtenez une étude de faisabilité gratuite et un plan d&apos;implantation personnalisé par Didier Laroussinie.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link href="/contact">
              <Button size="lg" className="bg-white hover:bg-teal-50 text-teal-900 px-12 h-16 text-lg font-bold shadow-2xl">
                Lancer mon étude gratuite
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm font-black uppercase tracking-[0.2em] text-teal-400/60">
            Premium Visa · OP Self-Employed · E-Commerce Expert
          </p>
        </div>
      </section>
    </main>
  );
}
