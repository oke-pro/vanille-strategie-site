import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { founder, testimonials } from "@/data/site";
import {
  Palmtree,
  Heart,
  ShieldCheck,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Home,
  GraduationCap,
  Plane,
  Coins,
  Medal,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Retraite à Maurice — Profitez du N°1 qualité de vie en Afrique",
  description:
    "Permis retraité dès 2 000 $/mois, 0% droits de succession, climat tropical toute l'année. Vanille Stratégie gère votre installation de A à Z.",
};

const benefits = [
  { icon: ShieldCheck, title: "0% droits de succession", desc: "Ni ISF, ni taxe foncière, ni taxe d'habitation — protégez votre patrimoine." },
  { icon: Coins, title: "2 000 $/mois", desc: "Transfert minimum pour le permis retraité (accessible dès 50 ans)." },
  { icon: Clock, title: "Permis 10 ans", desc: "Résidence longue durée, avec accès à la résidence permanente après 5 ans." },
  { icon: Medal, title: "N°1 qualité de vie", desc: "Classement Mercer — l'Île Maurice offre la meilleure qualité de vie d'Afrique." },
  { icon: Heart, title: "Santé de pointe", desc: "Cliniques privées aux standards internationaux et praticiens francophones." },
  { icon: Users, title: "Vivre en français", desc: "Le français est parlé partout, communauté expatriée active et accueillante." },
];

export default function RetraitePage() {
  const retraiteTestimonial = testimonials[2]; // Frouin

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image 
            src="/images/lifestyle-maurice.jpg" 
            alt="Retraite à Maurice" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        {/* Decorative éléments */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl delay-500" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-amber-300 backdrop-blur-sm">
              Parcours Retraité — Vanille Stratégie
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-7xl leading-[1.1]">
              Votre nouvelle vie <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">au soleil</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Soleil toute l&apos;année, fiscalité douce, sécurité totale et communauté francophone. Maurice est la destination d&apos;exception pour votre retraite.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-8 h-14 text-lg font-bold shadow-lg shadow-amber-500/20 text-white">
                  Parler avec un conseiller
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Pourquoi choisir Maurice ?</h2>
            <p className="mt-4 text-lg text-slate-600">
              Bien plus qu&apos;une destination de vacances, un cadre de vie serein et fiscalement avantageux.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, idx) => (
              <Card 
                key={b.title} 
                className="group p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-slate-100 bg-white"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{b.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed italic font-medium">{b.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Permit Details */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-black uppercase tracking-widest mb-6 border border-amber-200">
                <TrendingUp className="h-3 w-3" />
                <span>Mis à jour — Finance Act 2025</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
                Le Permis Retraité <br />
                <span className="text-amber-600 underline decoration-amber-200 underline-offset-8">en toute clarté</span>
              </h2>
              
              <ul className="mt-10 space-y-4">
                {[
                  "Âge minimum : 50 ans",
                  "Transfert initial de 2 000 $ dans les 60 jours",
                  "Puis 24 000 $/an (soit 2 000 $/mois) minimum",
                  "Présence minimum : 180 jours/an (NOUVEAU 2025)",
                  "Durée du permis : 10 ans, renouvelable",
                  "Résidence permanente accessible après 5 ans",
                  "Dossiers dépendants inclus (conjoint, enfants < 24 ans)",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 p-3 rounded-xl transition-colors hover:bg-white group">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0" />
                    <span className="text-slate-700 font-bold text-sm leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/villa-luxe.jpg" alt="Villa Maurice" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                <p className="text-white font-medium text-lg italic leading-relaxed">
                  &laquo;&nbsp;{retraiteTestimonial.quote}&nbsp;&raquo;
                </p>
                <div className="mt-4 flex items-center gap-3 text-white">
                  <div className="h-10 w-10 rounded-full bg-amber-600 flex items-center justify-center font-black text-xs uppercase">HF</div>
                  <div>
                    <p className="text-sm font-bold">{retraiteTestimonial.name}</p>
                    <p className="text-xs text-white/70">Permis Retraité</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">Un accompagnement clé en main</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto mb-16">
            Nous gérons l&apos;intégralité des démarches administratives et logistiques pour que vous n&apos;ayez qu&apos;à profiter.
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {[
              { text: "Dossier EDB & Permis", icon: ShieldCheck },
              { text: "Recherche Immobilière", icon: Home },
              { text: "Ouverture Bancaire", icon: Coins },
              { text: "Inscriptions Écoles", icon: GraduationCap },
              { text: "Transfert d'Animaux", icon: Heart },
              { text: "Logistique Déménagement", icon: Plane },
              { text: "Conseil Patrimonial", icon: TrendingUp },
              { text: "Suivi Administratif", icon: Clock },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-md group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors shadow-sm">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold text-slate-700 leading-tight">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles liés */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Préparer votre retraite à Maurice</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: "/ressources/blog/succession-internationale-france-maurice", title: "Succession FR-MU", desc: "0% de droits à Maurice, mais attention aux pièges avec la France.", badge: "Patrimoine" },
              { href: "/ressources/blog/qualite-de-vie-maurice-lifestyle-golf-business", title: "Qualité de vie", desc: "Golfs, plages, gastronomie — le lifestyle qui vous attend.", badge: "Lifestyle" },
              { href: "/ressources/blog/infrastructures-maurice-telecom-sante-education", title: "Santé & Infrastructures", desc: "Cliniques privées, CHU La Réunion à 45 min, assurance santé.", badge: "Santé" },
              { href: "/ressources/blog/maurice-reunion-liaisons-expats-francais", title: "Maurice ↔ La Réunion", desc: "La France à 45 minutes pour vos démarches et votre famille.", badge: "Mobilité" },
              { href: "/ressources/blog/ouvrir-compte-bancaire-maurice-guide", title: "Ouvrir un compte bancaire", desc: "AfrAsia vs MCB vs SBM — multi-devises, apps mobiles.", badge: "Banque" },
              { href: "/ressources/blog/reseaux-entrepreneurs-clubs-affaires-maurice", title: "Vie sociale & Réseaux", desc: "Clubs francophones, associations, communauté expatriée.", badge: "Social" },
            ].map((article) => (
              <Link key={article.href} href={article.href}>
                <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-300/50 overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-100 to-amber-50 px-3 py-1 text-xs font-bold text-amber-700 shadow-sm">
                    <FileText className="h-3 w-3" />
                    {article.badge}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-amber-600 leading-tight">{article.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{article.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-bold text-amber-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Lire l&apos;article <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-amber-600/10 text-amber-500 mb-8 border border-amber-500/20">
            <Palmtree className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Prêt pour votre nouvelle vie <br />
            <span className="text-amber-400">sous les tropiques ?</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Bénéficiez d&apos;une étude de faisabilité gratuite par {founder.name}, {founder.title}.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-amber-500/20 text-white border-none transition-all duration-300">
                Planifier mon départ
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-slate-500">
            Conseil Patrimonial · Fiscalité Internationale · Installation
          </p>
        </div>
      </section>
    </main>
  );
}
