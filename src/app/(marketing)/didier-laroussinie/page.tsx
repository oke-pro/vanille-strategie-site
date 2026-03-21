import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder } from "@/data/site";
import { 
  Award, 
  Briefcase, 
  Building2, 
  Globe2, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  Users, 
  ArrowRight,
  TrendingUp,
  MapPin,
  ChevronRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Didier Laroussinie — Expert-Comptable | Fiscaliste International",
  description:
    "40+ ans d'expérience, ex-Deloitte, spécialiste Tax Planning, Transfer Pricing, M&A, Global Mobility. Installé à Maurice depuis 2015.",
};

export default function DidierPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 transition-transform duration-10000 group-hover:scale-110">
          <Image 
            src="/images/bureau-moderne.jpg" 
            alt="Didier Laroussinie - Vanille Stratégie" 
            fill 
            priority 
            className="object-cover grayscale" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-500" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 animate-[fadeSlideUp_0.8s_ease-out]">
              <p className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-blue-300 backdrop-blur-sm">
                Direction & Expertise — Vanille Stratégie
              </p>
              <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-7xl leading-tight">
                {founder.name}
              </h1>
              <p className="mt-2 text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {founder.title}
              </p>
              <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl font-medium italic">
                &quot;{founder.bio}&quot;
              </p>
              
              <div className="mt-8 flex flex-wrap gap-2">
                {founder.specialties.map((s) => (
                  <div key={s} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold text-slate-200 backdrop-blur-sm">
                    <CheckCircle2 className="h-3 w-3 text-blue-400" />
                    {s}
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-10 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                    Prendre RDV avec Didier
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-center animate-[fadeSlideUp_0.8s_ease-out_0.2s_both]">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
                <Image
                  src="/images/didier-portrait.jpg"
                  alt={founder.name}
                  width={256}
                  height={256}
                  className="h-64 w-64 rounded-[3rem] object-cover shadow-2xl rotate-3 border-4 border-white/10"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl">
                  <Award className="h-10 w-10 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">40 ans d&apos;excellence financière</h2>
            <p className="mt-4 text-lg text-slate-600">Un parcours forgé dans l&apos;exigence des Big Four et la direction opérationnelle de groupes internationaux.</p>
          </div>

          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            {[
              {
                period: "Formation Elite",
                title: "Deloitte & Big Four",
                icon: ShieldCheck,
                desc: "Début de carrière chez Deloitte. Maîtrise de l'audit légal, de la fiscalité complexe et des standards IFRS pour les sociétés cotées.",
              },
              {
                period: "Esprit Entrepreneur",
                title: "Fondation de Cabinets",
                icon: Building2,
                desc: "Création et cession de plusieurs cabinets d'expertise comptable en France. Conseil stratégique pour PME et ETI en croissance.",
              },
              {
                period: "Leadership",
                title: "DAF & Direction de Groupes",
                icon: Users,
                desc: "Direction financière et opérationnelle de groupes (jusqu'à 200 pers.) dans l'immobilier coté, le retail et les services financiers.",
              },
              {
                period: "Haut de Bilan",
                title: "M&A & Opérations LBO",
                icon: TrendingUp,
                desc: "Expertise pointue en restructuration, fusions-acquisitions et montages LBO. Audit de substance et due diligence stratégique.",
              },
              {
                period: "Vision Afrique",
                title: "Expansion Océan Indien",
                icon: Globe2,
                desc: "Développement d'activités en Afrique francophone. Expertise des conventions fiscales internationales et de la mobilité globale.",
              },
              {
                period: "Depuis 2015",
                title: "Maurice — Groupe Vanille",
                icon: Award,
                desc: "Référence de l'implantation à Maurice. Accompagnement de centaines d'investisseurs. Supervision de BD Star (MIPA).",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-[fadeSlideUp_0.8s_ease-out_both]" style={{ animationDelay: `${idx * 0.1}s` }}>
                {/* Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300">
                  <item.icon className="h-5 w-5" />
                </div>
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-3xl border border-slate-100 bg-slate-50 shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-black uppercase tracking-widest text-blue-600">{item.period}</p>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "40+", label: "Ans d'expertise", sub: "Fiscalité & Audit", icon: Calendar },
              { value: "Deloitte", label: "Parcours Big Four", sub: "Standard Excellence", icon: Briefcase },
              { value: "200+", label: "Salariés managés", sub: "Expérience Direction", icon: Users },
              { value: "MIPA", label: "BD Star Ltd", sub: "Expertise Certifiée", icon: ShieldCheck },
            ].map((c, idx) => (
              <div 
                key={c.label} 
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm text-center transition-all hover:bg-white/10 group animate-[fadeSlideUp_0.8s_ease-out_both]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <c.icon className="h-8 w-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-4xl font-black text-white mb-2">{c.value}</p>
                <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-1">{c.label}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="relative rounded-[2.5rem] bg-slate-900 p-8 md:p-16 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-20">
              <Image src="/images/hero-paradise.jpg" alt="Maurice" fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-slate-900/95" />
            
            <div className="relative text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Sécurisez votre projet</h2>
              <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Profitez d&apos;un premier échange technique gratuit avec Didier Laroussinie pour valider la faisabilité de votre expatriation.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 hover:scale-105 text-white px-10 h-16 text-lg font-bold border-none shadow-2xl transition-all duration-300">
                    Réserver une consultation
                  </Button>
                </Link>
              </div>
              <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-slate-500">
                Confidentialité Totale · Réponse sous 24h
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
