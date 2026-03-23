import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { founder } from "@/data/site";
import {
  Building2,
  ShieldCheck,
  Globe2,
  CheckCircle2,
  FileText,
  ArrowRight,
  Scale,
  Briefcase,
  TrendingUp,
  Calculator,
  Users,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vanille Consulting — Conseil, Fiscalité & Création de Sociétés à Maurice",
  description:
    "Structurez votre implantation à l'Île Maurice avec un Expert-Comptable Fiscaliste International. Création de sociétés, fiscalité internationale, restructuration — groupe intégré depuis 2012.",
  openGraph: {
    title: "Vanille Consulting — Conseil, Fiscalité & Création de Sociétés à Maurice",
    description:
      "Structurez votre implantation à l'Île Maurice avec un Expert-Comptable Fiscaliste International. Création de sociétés, fiscalité internationale, restructuration.",
    url: "https://vanillestrategie.fr/consulting",
    type: "website",
  },
};

const valueProps = [
  {
    icon: Building2,
    stat: "300+",
    label: "sociétés créées",
    description: "Domestic, GBC (Global Business Company) et Authorised Companies accompagnées depuis 2012.",
  },
  {
    icon: Award,
    stat: "DEC",
    label: "Expert-Comptable",
    description: "Diplômé d'Expertise Comptable, parcours Big Four (Deloitte).",
  },
  {
    icon: Globe2,
    stat: "47",
    label: "conventions fiscales",
    description: "Maurice bénéficie de 47 traités de non double imposition.",
  },
  {
    icon: Users,
    stat: "Groupe",
    label: "intégré",
    description: "Conseil, comptabilité, permis et immobilier — un seul interlocuteur.",
  },
];

const services = [
  {
    href: "/consulting/creation-societe",
    icon: Building2,
    title: "Création de société",
    description: "Domestic Company, GBC ou Authorised Company — choix de la structure optimale, statuts, immatriculation.",
  },
  {
    href: "/consulting/comptabilite",
    icon: Calculator,
    title: "Comptabilité & Conformité",
    description: "Tenue comptable IFRS (normes comptables internationales), déclarations fiscales, audit annuel — en temps réel via le dashboard OKE.",
  },
  {
    href: "/consulting/conseil-fiscal",
    icon: Globe2,
    title: "Conseil fiscal & Structuration",
    description: "Optimisation des conventions fiscales, transfer pricing, structuration de flux internationaux.",
  },
  {
    href: "/consulting/juridique",
    icon: Scale,
    title: "Services juridiques",
    description: "Secrétariat juridique, AG, modifications statutaires, compliance CBRD (Corporate and Business Registration Department) / MRA (Mauritius Revenue Authority) / FSC (Financial Services Commission).",
  },
  {
    href: "/consulting/achat-vente",
    icon: TrendingUp,
    title: "Achat & Vente d'entreprise",
    description: "Due diligence, valorisation, structuration LBO, accompagnement cession et acquisition.",
  },
];

const relatedArticles = [
  {
    href: "/ressources/blog/transfer-pricing-maurice-2025",
    title: "Transfer Pricing à Maurice",
    desc: "Nouvelles obligations du Finance Act 2025 pour les groupes internationaux.",
    badge: "Fiscalité",
  },
  {
    href: "/ressources/blog/substance-requirements-maurice",
    title: "Substance Requirements",
    desc: "Ce que l'EDB (Economic Development Board) et la FSC attendent vraiment de votre GBC.",
    badge: "Conformité",
  },
  {
    href: "/ressources/blog/ouvrir-compte-bancaire-maurice-guide",
    title: "Ouvrir un compte bancaire",
    desc: "AfrAsia vs MCB vs SBM — le guide complet pour les entrepreneurs.",
    badge: "Pratique",
  },
];

export default function ConsultingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/maurice-business.jpg"
            alt="Business à Maurice — Vanille Consulting"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-blue-300 backdrop-blur-sm">
              Vanille Consulting
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-7xl leading-[1.1]">
              Structurez votre avenir{" "}
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                à Maurice
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Conseil en implantation, fiscalité internationale, création de sociétés et restructuration — piloté par un Expert-Comptable Fiscaliste avec plus de 40 ans d&apos;expérience.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20"
                >
                  Étude de faisabilité gratuite
                </Button>
              </Link>
              <Link href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 h-14 text-lg font-bold"
                >
                  Nos expertises
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />

      {/* Value Props */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((vp) => (
              <Card
                key={vp.label}
                className="p-8 border-none shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-6">
                  <vp.icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-black text-slate-900">{vp.stat}</p>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mt-1">
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
      <section id="services" className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Nos expertises conseil
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              De la création de votre structure juridique à la gestion de vos obligations fiscales — un groupe intégré pour chaque étape.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.href} href={s.href}>
                <Card className="group h-full p-8 border-none bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white mb-6">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                  <div className="mt-6 flex items-center gap-1 text-xs font-bold text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    En savoir plus <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Section — Didier Laroussinie */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative aspect-square md:aspect-auto md:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/didier-portrait.jpg"
                alt="Didier Laroussinie — Expert-Comptable Fiscaliste"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>
            <div>
              <p className="inline-block rounded-full border border-blue-400/30 bg-blue-50 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-blue-600">
                Votre interlocuteur
              </p>
              <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
                {founder.name}
              </h2>
              <p className="mt-2 text-lg font-bold text-blue-600">
                {founder.title}
              </p>
              <p className="mt-6 text-slate-600 leading-relaxed">
                {founder.bio}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {founder.credentials.slice(0, 4).map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-slate-900">{c.label}</p>
                      <p className="text-xs text-slate-500">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-black text-blue-600 uppercase tracking-widest text-sm hover:gap-4 transition-all"
                >
                  Prendre rendez-vous <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Approfondir votre projet
          </h2>
          <p className="mt-2 text-slate-600">
            Nos guides experts pour structurer votre implantation.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((article) => (
              <Link key={article.href} href={article.href}>
                <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-300/50 overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 px-3 py-1 text-xs font-bold text-blue-700 shadow-sm">
                    <FileText className="h-3 w-3" />
                    {article.badge}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-blue-600 leading-tight">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {article.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-bold text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Lire l&apos;article{" "}
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/10 text-blue-500 mb-8 border border-blue-500/20">
            <Briefcase className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Étude de faisabilité{" "}
            <br />
            <span className="text-blue-400">gratuite et confidentielle</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            {founder.name}, {founder.title}, analyse votre projet et vous propose la structure optimale pour votre implantation à Maurice.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-blue-500/20 transition-all duration-300"
              >
                Demander mon étude gratuite
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
