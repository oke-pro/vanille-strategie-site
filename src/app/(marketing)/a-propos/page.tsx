import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { serviceGroups, founder } from "@/data/site";
import { 
  Building2, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Medal,
  Heart,
  Globe,
  ChevronRight,
  Calculator,
  Briefcase,
  Activity
} from "lucide-react";

export const metadata: Metadata = {
  title: "À propos — Le Groupe Casalis (Vanille Stratégie + BD Star)",
  description:
    "Depuis 2012, le seul groupe à Maurice qui intègre conseil en implantation, expertise comptable MIPA, RH/paie et dashboard temps réel.",
};

export default function AProposPage() {
  const values = [
    { title: "Compétence", desc: "Chaque membre de l'équipe dispose de qualifications et d'expériences éprouvées.", icon: Medal },
    { title: "Intégrité", desc: "Valeur essentielle, seule susceptible d'assurer notre développement à long terme.", icon: ShieldCheck },
    { title: "Qualité", desc: "La qualité des services que nous proposons est notre préoccupation quotidienne.", icon: CheckCircle2 },
    { title: "Confiance", desc: "Transparence et sens du détail sont les éléments clés de la confiance de nos clients.", icon: Heart },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[60vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 transition-transform duration-10000 group-hover:scale-110">
          <Image 
            src="/images/caudan.jpg" 
            alt="Grand Baie Maurice" 
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
              L&apos;histoire — Groupe Vanille Stratégie
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-7xl leading-[1.1]">
              Le Groupe <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Casalis</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Deux entités complémentaires, un seul groupe intégré pour piloter votre installation et votre succès à Maurice sans aucune sous-traitance.
            </p>
          </div>
        </div>
      </section>

      {/* Group Entities */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {serviceGroups.map((group, idx) => (
              <Card 
                key={group.entity} 
                className="group relative flex flex-col p-8 md:p-12 border-none bg-slate-50 transition-all duration-300 hover:bg-white hover:shadow-2xl animate-[fadeSlideUp_0.8s_ease-out_both]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`h-1 w-12 rounded-full ${idx === 0 ? 'bg-blue-600' : 'bg-cyan-500'}`} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Entité du Groupe</span>
                  </div>
                  <h2 className="text-3xl font-black text-slate-900">{group.entity}</h2>
                  <p className="mt-2 text-lg font-bold text-blue-600 italic">{group.subtitle}</p>
                </div>
                
                <div className="space-y-6 flex-1">
                  {group.services.map((s) => (
                    <div key={s.slug} className="group/item">
                      <Link href={`/services/${s.slug}`} className="flex items-start gap-4">
                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm border border-slate-100 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                          <ChevronRight className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors">{s.title}</h4>
                          <p className="text-sm text-slate-500 leading-relaxed mt-1">{s.summary}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* OKE Teaser */}
          <div className="mt-12 group relative rounded-[2rem] overflow-hidden bg-slate-900 p-8 md:p-16 text-white shadow-2xl animate-[fadeSlideUp_0.8s_ease-out_0.2s_both]">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl transition-transform group-hover:scale-110" />
            
            <div className="relative flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-500/30">
                  <Zap className="h-3 w-3" />
                  <span>Innovation Tech</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">Dashboard OKE <br /><span className="text-blue-400">Votre business en temps réel</span></h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  Propulsé par BD Star, OKE est l&apos;interface qui réconcilie votre banque, vos ventes et votre comptabilité. Connecté aux banques locales et aux plateformes e-commerce mondiales.
                </p>
                <Link href="/services/comptabilite-fiscalite" className="mt-8 inline-flex items-center gap-2 font-black text-blue-400 uppercase tracking-widest text-sm hover:gap-4 transition-all">
                  Découvrir la solution <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <Image
                  src="/images/oke-logo.png"
                  alt="OKE Dashboard"
                  width={160}
                  height={160}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Nos engagements</h2>
            <p className="mt-4 text-lg text-slate-600">
              L&apos;éthique et la compétence sont au cœur de chaque dossier que nous traitons depuis 2012.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, idx) => (
              <Card 
                key={v.title} 
                className="group p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-slate-100 bg-white animate-[fadeSlideUp_0.8s_ease-out_both]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium italic">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="relative w-64 h-64 shrink-0 animate-[fadeSlideUp_0.8s_ease-out]">
              <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-6 opacity-10" />
              <div className="relative h-full w-full rounded-[3rem] overflow-hidden border-4 border-slate-50 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                <Image 
                  src="/images/didier-portrait.jpg"
                  alt="Didier Laroussinie" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="animate-[fadeSlideUp_0.8s_ease-out_0.2s_both]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-widest mb-4">
                <Medal className="h-3 w-3" />
                <span>Expert-Comptable DEC</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">{founder.name}</h2>
              <p className="text-lg font-bold text-blue-600 mt-1 uppercase tracking-widest text-sm">{founder.title}</p>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed italic">
                &quot;{founder.bio}&quot;
              </p>
              <div className="mt-8">
                <Link href="/didier-laroussinie">
                  <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 font-bold px-8 h-12">
                    Voir son parcours complet
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/10 text-blue-500 mb-8 border border-blue-500/20">
            <Globe className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Prêt à lancer votre <br />
            <span className="text-blue-400">projet mauricien ?</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Bénéficiez de l&apos;expertise d&apos;un groupe structuré, local et certifié.
          </p>
          <div className="mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-blue-500/20 text-white border-none">
                Contacter le groupe
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
