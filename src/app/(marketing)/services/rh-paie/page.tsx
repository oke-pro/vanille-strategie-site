import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  FileText,
  Globe,
  CheckCircle2,
  UserPlus,
  BarChart3,
  ShieldCheck,
  Building2,
  HeartHandshake
} from "lucide-react";

export const metadata: Metadata = {
  title: "RH & Paie Maurice — BD Star Management Services",
  description: "Recrutement, contrats de travail, bulletins de paie, charges CSG/PAYE, conformité Workers' Rights Act. Tout externalisé, tout intégré.",
};

export default function RhPaiePage() {
  const features = [
    {
      title: "Recrutement",
      icon: UserPlus,
      items: [
        "Recherche de profils locaux bilingues FR/EN",
        "Pré-sélection et entretiens de qualification",
        "Rédaction des contrats de travail (Local/Expat)",
        "Conformité Workers' Rights Act 2019"
      ]
    },
    {
      title: "Paie externalisée",
      icon: FileText,
      items: [
        "Bulletins de paie conformes aux normes MU",
        "Calcul des charges sociales (CSG / PAYE)",
        "Déclarations MRA employeur mensuelles",
        "Gestion digitalisée des congés et absences"
      ]
    },
    {
      title: "HR Management",
      icon: BarChart3,
      items: [
        "Gestion administrative complète du personnel",
        "Suivi des OP Professional de vos expatriés",
        "Onboarding et offboarding structurés",
        "Reporting RH intégré dans votre dashboard OKE"
      ]
    },
    {
      title: "Expat Admin Management",
      icon: Globe,
      items: [
        "Gestion des permis de travail et résidence",
        "Logement, école, installation de la famille",
        "Coordination directe avec l'EDB et la MRA",
        "Veille réglementaire et renouvellements"
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[60vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 transition-transform duration-10000 group-hover:scale-110">
          <Image
            src="/images/coworking.jpg"
            alt="RH et Paie à Maurice"
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
              Votre capital humain <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">géré localement</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              De votre première embauche à la gestion quotidienne de 50 salariés. Nous gérons contrats, paie, conformité et bien-être de vos équipes.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                  Étudier mon besoin RH
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {features.map((f, idx) => (
              <Card 
                key={f.title} 
                className="group flex flex-col p-8 transition-all duration-300 hover:shadow-xl border border-slate-100 bg-white animate-[fadeSlideUp_0.8s_ease-out_both]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{f.title}</h3>
                </div>
                <ul className="space-y-4 flex-1">
                  {f.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-500" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Conformité & Sécurité</h2>
            <p className="mt-4 text-lg text-slate-600">
              Le droit du travail mauricien (Workers&apos; Rights Act) est protecteur et spécifique. Nous garantissons votre sérénité juridique.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { title: "Zéro risque", desc: "Contrats visés par nos experts en droit social local.", icon: ShieldCheck },
              { title: "Intégration OKE", desc: "Données RH synchronisées avec votre comptabilité.", icon: BarChart3 },
              { title: "Support Dédié", desc: "Une équipe RH joignable à Maurice aux heures de bureau.", icon: HeartHandshake }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles liés */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-slate-900">Articles liés</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { href: "/ressources/blog/droit-travail-maurice-workers-rights-act", title: "Droit du travail à Maurice", desc: "Workers' Rights Act 2019 : contrats, congés, licenciement et obligations employeur." },
              { href: "/ressources/blog/ecoles-internationales-maurice-education", title: "Écoles internationales à Maurice", desc: "Panorama des établissements scolaires pour les familles expatriées." },
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
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 text-blue-400 mb-8">
            <Building2 className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Besoin de recruter à Maurice ?</h2>
          <p className="mt-4 text-xl text-slate-400">
            Nous identifions les talents et gérons leur intégration pour vous.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-10 h-14 text-lg font-bold">
                Contacter notre pôle RH
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Réponse sous 24h ouvrées.
          </p>
        </div>
      </section>
    </main>
  );
}
