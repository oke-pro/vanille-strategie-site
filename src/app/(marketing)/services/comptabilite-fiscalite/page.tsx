import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { founder } from "@/data/site";
import { 
  Calculator, 
  PieChart, 
  Activity, 
  Lightbulb, 
  ShieldCheck, 
  UserCheck, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  FileSpreadsheet,
  Globe,
  Database,
  Cpu
} from "lucide-react";

export const metadata: Metadata = {
  title: "Comptabilité & Fiscalité Maurice — BD Star Management Services (MIPA)",
  description: "Comptabilité bistandard FR/IFRS, déclarations MRA, Transfer Pricing, autopilote fiscal. Dashboard OKE temps réel avec connecteurs AfrAsia/MCB.",
};

export default function ComptaFiscalitePage() {
  const services = [
    { 
      title: "Comptabilité courante", 
      icon: Calculator,
      color: "blue",
      items: ["Saisie comptable FR + IFRS", "Lettrage et rapprochement", "Déclarations TVA (VAT)", "États financiers annuels"] 
    },
    { 
      title: "Fiscalité", 
      icon: PieChart,
      color: "indigo",
      items: ["Déclarations MRA (self-assessment)", "Analyse convention FR-MU", "Transfer Pricing (Finance Act 2025)", "Optimisation fiscale légale"] 
    },
    { 
      title: "Dashboard OKE", 
      icon: Cpu,
      color: "cyan",
      items: ["Connecteurs AfrAsia & MCB", "12 plateformes e-commerce", "Classification automatique (85%+)", "Réconciliation bancaire intelligente"] 
    },
    { 
      title: "Conseil fiscal", 
      icon: Lightbulb,
      color: "amber",
      items: ["Exit Tax française", "Structuration holding", "Prix de transfert", "Mobilité internationale"] 
    },
    { 
      title: "Audit & conformité", 
      icon: ShieldCheck,
      color: "emerald",
      items: ["Audit annuel", "Due diligence financière", "Conformité CBRD/MRA", "Piste d'audit inaltérable"] 
    },
    { 
      title: "Supervision", 
      icon: UserCheck,
      color: "slate",
      items: [`Par ${founder.name}`, "Expert-Comptable DEC", "Ex-Deloitte", "40+ ans d'expertise"] 
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[60vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 transition-transform duration-10000 group-hover:scale-110">
          <Image
            src="/images/bureau-moderne.jpg"
            alt="Comptabilité et Fiscalité à Maurice"
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
              Services — BD Star Management Services
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Expertise Comptable <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">& Fiscalité Internationale</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Cabinet inscrit au MIPA, supervisé par Didier Laroussinie (DEC). Comptabilité bistandard FR/IFRS et pilotage en temps réel avec OKE.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                  Demander un devis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Une offre complète de gestion</h2>
            <p className="mt-4 text-lg text-slate-600">
              De la tenue courante à la fiscalité complexe des prix de transfert, nous assurons la sécurité et la conformité de votre groupe.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => (
              <Card 
                key={s.title} 
                className="group flex flex-col p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-none bg-white animate-[fadeSlideUp_0.8s_ease-out_both]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 transition-all group-hover:bg-blue-600 group-hover:text-white">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
                <ul className="space-y-3 flex-1">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Le standard Big Four <br /><span className="text-blue-400">à taille humaine</span></h2>
                <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                  Notre cabinet BD Star Management Services Ltd est inscrit au Mauritius Institute of Professional Accountants (MIPA). Nous appliquons la rigueur des grands cabinets internationaux avec la réactivité d&apos;un partenaire local dédié.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Supervision par un Expert-Comptable Diplômé (DEC)",
                    "Logiciels de pointe et connectivité bancaire directe",
                    "Veille fiscale permanente post-Finance Act 2025",
                    "Secret professionnel et sécurité des données"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-400" />
                      <span className="text-slate-200 font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src="/images/digital-nomad-maurice.jpg" 
                  alt="Pilotage d'entreprise" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">OKE</div>
                    <p className="text-white font-bold">Pilotage temps réel inclus</p>
                  </div>
                </div>
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
              { href: "/ressources/blog/transfer-pricing-maurice-2025", title: "Transfer Pricing à Maurice", desc: "Règles de prix de transfert post-Finance Act 2025 : obligations, seuils et documentation." },
              { href: "/ressources/blog/substance-requirements-maurice", title: "Substance Requirements", desc: "Critères de substance économique pour les sociétés GBC à Maurice." },
              { href: "/ressources/blog/devises-mur-conversion-maurice", title: "Gestion des devises à Maurice", desc: "Taux de change, comptes multi-devises et stratégies de conversion MUR." },
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
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Parlons de votre gestion</h2>
          <p className="mt-4 text-xl text-slate-600">
            Obtenez un devis personnalisé adapté à votre volume d&apos;activité et vos besoins spécifiques.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-10 h-14 text-lg font-bold">
                Obtenir mon devis
              </Button>
            </Link>
            <Link href="/ressources/simulateur-fiscal">
              <Button size="lg" variant="outline" className="px-10 h-14 text-lg font-bold">
                Simulateur fiscal
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            Première consultation offerte par notre Expert-Comptable.
          </p>
        </div>
      </section>
    </main>
  );
}
