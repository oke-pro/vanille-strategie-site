import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { permits, founder } from "@/data/site";
import { 
  Briefcase, 
  Laptop, 
  UserCheck, 
  Award, 
  TreePalm, 
  Plane, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Clock,
  Users,
  Building2,
  GraduationCap,
  Home,
  CreditCard
} from "lucide-react";

export const metadata: Metadata = {
  title: "Permis de résidence Maurice — OP Investor, Self-Employed, Retraité, Premium Visa",
  description: "30-50 dossiers déposés par an. Conditions mises à jour post-réforme EDB août 2025. Délai moyen 3-4 semaines.",
};

const iconMap: Record<string, any> = {
  briefcase: Briefcase,
  laptop: Laptop,
  badge: UserCheck,
  award: Award,
  palmtree: TreePalm,
  plane: Plane,
};

export default function PermisResidencePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[60vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 transition-transform duration-10000 group-hover:scale-110">
          <Image
            src="/images/hero-paradise.jpg"
            alt="Vivre à Maurice"
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
              Services — Vanille Stratégie
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Votre permis de résidence <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">à l&apos;Île Maurice</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              30 à 50 dossiers déposés chaque année auprès de l&apos;EDB. Nous vous guidons vers le permis adapté et constituons votre dossier de A à Z.
            </p>
            <div className="mt-8 flex items-center gap-2 text-amber-400 font-medium">
              <ShieldCheck className="h-5 w-5" />
              <span>Conditions mises à jour — Guidelines EDB du 19 août 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Permits Grid */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Choisissez votre voie de résidence</h2>
            <p className="mt-4 text-lg text-slate-600">
              Chaque profil a sa solution. Nos experts analysent votre situation pour garantir le succès de votre demande.
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {permits.map((p, idx) => {
              const Icon = iconMap[p.icon] || Briefcase;
              return (
                <Card 
                  key={p.type} 
                  className="group relative flex flex-col p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-none bg-white animate-[fadeSlideUp_0.8s_ease-out_both]"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{p.type}</h3>
                  <p className="mt-1 text-sm font-semibold text-blue-600 uppercase tracking-wider">{p.target}</p>
                  
                  <div className="mt-6 flex-1 space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <CreditCard className="h-4 w-4 mt-0.5 text-slate-400" />
                      <div>
                        <span className="block text-slate-500 text-xs uppercase font-bold">Investissement</span>
                        <span className="font-medium text-slate-900">{p.investment}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 mt-0.5 text-slate-400" />
                      <div>
                        <span className="block text-slate-500 text-xs uppercase font-bold">Revenu / Turnover</span>
                        <span className="font-medium text-slate-900">{p.turnover}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-4 w-4 mt-0.5 text-slate-400" />
                      <div>
                        <span className="block text-slate-500 text-xs uppercase font-bold">Validité</span>
                        <span className="font-medium text-slate-900">{p.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  {p.renewal.includes("NOUVEAU") && (
                    <div className="mt-6 rounded-lg bg-amber-50 px-3 py-2 border border-amber-100">
                      <p className="text-xs font-bold text-amber-700 flex items-center gap-1.5 uppercase tracking-tight">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        {p.renewal}
                      </p>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
          
          <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2 text-slate-500 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100">
              <Clock className="h-5 w-5 text-blue-500" />
              <span>Délai moyen : 15-20 jours ouvrés · Dépendants : ~10 jours après le principal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Accompaniment */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeSlideUp_0.8s_ease-out]">
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                Un accompagnement <br />
                <span className="text-blue-400">sur-mesure</span> pour votre expatriation
              </h2>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                Parce qu&apos;un permis n&apos;est qu&apos;une étape de votre projet, nous vous accompagnons sur l&apos;ensemble de votre installation pour une transition sereine.
              </p>
              
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {[
                  { text: "Dossiers dépendants (conjoint, enfants)", icon: Users },
                  { text: "Ouverture de compte bancaire", icon: CreditCard },
                  { text: "Recherche de logement & écoles", icon: Home },
                  { text: "Déménagement & logistique", icon: Plane },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <item.icon className="h-5 w-5 text-blue-400" />
                    <span className="text-sm font-medium text-slate-200">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 animate-[fadeSlideUp_0.8s_ease-out_0.2s_both]">
              {[
                "Étude de faisabilité et recommandation du permis adapté",
                "Constitution complète du dossier (business plan, documents)",
                "Accompagnement lors du dépôt auprès de l'EDB",
                "Suivi jusqu'à l'obtention du permis",
                "Accompagnement physique aux rendez-vous officiels",
                "Vérification de la conformité post-obtention"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl transition-colors hover:bg-white/5 group">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-16 overflow-hidden shadow-2xl shadow-blue-500/20">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            
            <div className="relative text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Quel permis pour vous ?</h2>
              <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
                Bénéficiez d&apos;une étude de faisabilité gratuite par {founder.name}, {founder.title}.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-10 h-14 text-lg font-bold">
                    Démarrer mon projet
                  </Button>
                </Link>
                <Link href="/ressources/simulateur-visa">
                  <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-10 h-14 text-lg font-bold">
                    Simulateur de visa
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
