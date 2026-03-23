import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Plane,
  ShieldCheck,
  Globe2,
  Clock,
  ArrowRight,
  FileText,
  Users,
  Laptop,
  Palmtree,
  Briefcase,
  Heart,
  MapPin,
  CheckCircle2,
  Sun,
  Home,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vanille Mobility — Expatriation, Permis de Résidence & Installation à Maurice",
  description:
    "Votre nouvelle vie à Maurice commence ici. 14 ans d'expérience, 5 types de permis, accompagnement 360° pour entrepreneurs, retraités, familles et digital nomads.",
  openGraph: {
    title: "Vanille Mobility — Expatriation, Permis & Installation à Maurice",
    description:
      "Votre nouvelle vie à Maurice commence ici. 14 ans d'expérience, 5 types de permis, accompagnement 360° pour votre expatriation.",
    url: "https://vanillestrategie.fr/mobility",
    type: "website",
  },
};

const valueProps = [
  {
    icon: Clock,
    stat: "14 ans",
    label: "à Maurice",
    description: "Implantés depuis 2012, nous connaissons le terrain et les institutions.",
  },
  {
    icon: Users,
    stat: "30+",
    label: "dossiers/an",
    description: "Plus de 30 dossiers d'expatriation accompagnés chaque année.",
  },
  {
    icon: FileText,
    stat: "5",
    label: "types de permis",
    description: "Occupation Permit, Premium Visa, Retirement Permit, Residence Permit, Dependent Permit.",
  },
  {
    icon: Globe2,
    stat: "360°",
    label: "accompagnement",
    description: "Du permis à l'installation — banque, logement, scolarité, fiscalité.",
  },
];

const services = [
  {
    href: "/mobility/permis-residence",
    icon: FileText,
    title: "Permis de résidence",
    description: "Guide complet des 6 types de permis : Occupation Permit, Premium Visa, Retirement Permit, Permanent Residence. Comparatif détaillé.",
  },
  {
    href: "/mobility/installation",
    icon: Home,
    title: "Accompagnement installation",
    description: "Logement, banque, assurance, scolarité, voiture, vie quotidienne — on s'occupe de tout, étape par étape.",
  },
  {
    href: "/mobility/fiscalite-expatriation",
    icon: Scale,
    title: "Fiscalité de l'expatriation",
    description: "Résidence fiscale, exit tax, convention Franco-Mauricienne, structuration patrimoniale pré-départ.",
  },
  {
    href: "/mobility/cadre-de-vie",
    icon: Sun,
    title: "Cadre de vie à Maurice",
    description: "Climat, sécurité, éducation, santé, communauté francophone, coût de la vie — tout ce qui fait la différence.",
  },
  {
    href: "/entrepreneur",
    icon: Briefcase,
    title: "Parcours Entrepreneur",
    description: "Créez votre société et obtenez votre Occupation Permit — structure, permis, banque et comptabilité.",
  },
  {
    href: "/digital-nomad",
    icon: Laptop,
    title: "Parcours Digital Nomad",
    description: "Premium Visa pour télétravailler depuis Maurice. Aucune imposition locale sur vos revenus étrangers.",
  },
  {
    href: "/retraite",
    icon: Palmtree,
    title: "Parcours Retraité",
    description: "Retirement Permit, transfert de pension, couverture santé — profitez de la douceur de vivre mauricienne.",
  },
  {
    href: "/entreprise",
    icon: Users,
    title: "Parcours Entreprise",
    description: "Implantez votre filiale ou succursale à Maurice, recrutez localement et développez votre activité.",
  },
  {
    href: "/dubai-to-mauritius",
    icon: Plane,
    title: "Dubaï → Maurice",
    description: "Transition en douceur depuis les EAU : comparatif fiscal, structuration et accompagnement complet.",
  },
];

const profiles = [
  {
    icon: Palmtree,
    title: "Retraités & pré-retraités",
    persona: "Anne & Jean-Luc, 58 et 61 ans",
    situation: "Jeunes retraités installés à Paris, ils envisagent de passer leur retraite à Maurice.",
    need: "Un accompagnement complet et sans stress : permis de résidence, fiscalité des pensions, logement, couverture santé.",
    solution: "Retirement Permit dès 1 500 USD/mois + structuration patrimoniale Franco-Mauricienne.",
    color: "from-teal-600 to-cyan-600",
    href: "/retraite",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurs",
    persona: "Thomas, 38 ans",
    situation: "Entrepreneur digital en quête de soleil et d'un cadre fiscal plus favorable.",
    need: "Une solution clé en main : création de société, Occupation Permit, compte bancaire, comptabilité récurrente.",
    solution: "Domestic Company ou GBC + OP Investor en 3 à 6 semaines.",
    color: "from-blue-600 to-indigo-600",
    href: "/entrepreneur",
  },
  {
    icon: Heart,
    title: "Familles",
    persona: "Sophie & Marc, 42 et 45 ans, 2 enfants",
    situation: "Cadres en France, ils veulent offrir un cadre de vie international à leurs enfants.",
    need: "Écoles internationales, sécurité, qualité de vie. Un accompagnement qui prend en compte toute la famille.",
    solution: "Permis de résidence familial + inscription scolaire + structuration fiscale du foyer.",
    color: "from-rose-600 to-pink-600",
    href: "/entreprise",
  },
  {
    icon: Laptop,
    title: "Digital Nomads",
    persona: "Lucas, 29 ans",
    situation: "Développeur freelance, il travaille depuis Bali et cherche un cadre fiscal stable.",
    need: "Un Premium Visa rapide, du bon wifi, un fuseau horaire compatible Europe, et une fiscalité transparente.",
    solution: "Premium Visa en 48h + passage en OP Self-Employed quand il est prêt à se poser.",
    color: "from-violet-600 to-purple-600",
    href: "/digital-nomad",
  },
];

export default function MobilityPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-paradise.jpg"
            alt="S'expatrier à Maurice — Vanille Mobility"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-teal-300 backdrop-blur-sm">
              Vanille Mobility
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-7xl leading-[1.1]">
              Votre nouvelle vie{" "}
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                commence ici
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Expatriation, permis de résidence et installation à Maurice — un accompagnement complet pour entrepreneurs, retraités, familles et digital nomads.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 px-8 h-14 text-lg font-bold shadow-lg shadow-teal-500/20"
                >
                  Diagnostic gratuit de votre projet
                </Button>
              </Link>
              <Link href="#parcours">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 h-14 text-lg font-bold"
                >
                  Voir les parcours
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-200/50 to-transparent" />

      {/* Value Props */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((vp) => (
              <Card
                key={vp.label}
                className="p-8 border-none shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 mb-6">
                  <vp.icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-black text-slate-900">{vp.stat}</p>
                <p className="text-sm font-bold text-teal-600 uppercase tracking-widest mt-1">
                  {vp.label}
                </p>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  {vp.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="parcours" className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Votre parcours d&apos;expatriation
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Chaque profil a ses spécificités — nous adaptons notre accompagnement à votre situation et vos objectifs.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.href} href={s.href}>
                <Card className="group h-full p-8 border-none bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 text-white mb-6">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                  <div className="mt-6 flex items-center gap-1 text-xs font-bold text-teal-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Découvrir <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Profil Cards */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Pour qui est Maurice ?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              L&apos;Île Maurice accueille des profils variés — découvrez celui qui vous correspond.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {profiles.map((profile) => (
              <Link key={profile.title} href={profile.href}>
                <Card className="group overflow-hidden border-none shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full">
                  <div className={`bg-gradient-to-br ${profile.color} p-6 text-white`}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm mb-4">
                      <profile.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{profile.title}</h3>
                    <p className="mt-1 text-sm text-white/70 italic">{profile.persona}</p>
                  </div>
                  <div className="p-6 bg-white space-y-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Situation</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{profile.situation}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Besoin</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{profile.need}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-1">Notre réponse</p>
                      <p className="text-sm font-medium text-slate-900 leading-relaxed">{profile.solution}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-teal-600 uppercase tracking-widest pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      Explorer cette solution <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Image + Lifestyle */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
                Un cadre de vie{" "}
                <br />
                <span className="text-teal-600 underline decoration-teal-100 underline-offset-8">
                  exceptionnel
                </span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Maurice offre un équilibre rare entre qualité de vie, sécurité et dynamisme économique. Climat tropical toute l&apos;année, écoles internationales, hôpitaux modernes et une communauté expatriée francophone en pleine croissance.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  { text: "25°C de moyenne annuelle", icon: Sun },
                  { text: "Anglais & Français officiels", icon: Globe2 },
                  { text: "6h de vol depuis Paris", icon: Plane },
                  { text: "Top 1 Afrique (Mo Ibrahim)", icon: ShieldCheck },
                  { text: "Fibre optique nationale", icon: Laptop },
                  { text: "GMT+4 — Overlap Europe", icon: Clock },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 transition-colors hover:shadow-md"
                  >
                    <item.icon className="h-4 w-4 text-teal-500" />
                    <span className="text-sm font-bold text-slate-700 leading-tight">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-black text-teal-600 uppercase tracking-widest text-sm hover:gap-4 transition-all"
                >
                  Planifier votre expatriation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/lifestyle-maurice.jpg"
                alt="Lifestyle à Maurice"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-teal-600/10 text-teal-500 mb-8 border border-teal-500/20">
            <MapPin className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Diagnostic gratuit{" "}
            <br />
            <span className="text-teal-400">de votre projet d&apos;expatriation</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Partagez-nous votre situation — nous évaluons la faisabilité de votre projet et vous orientons vers le parcours adapté.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-teal-500/20 transition-all duration-300"
              >
                Diagnostic gratuit de votre projet
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
            Réponse sous 24h ouvrées · Confidentialité Totale
          </p>
        </div>
      </section>
    </main>
  );
}
