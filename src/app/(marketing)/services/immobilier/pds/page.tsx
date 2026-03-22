import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  Building2,
  MapPin,
  DollarSign,
  CheckCircle2,
  Users,
  Globe,
  Zap,
  Shield,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "PDS — Property Development Scheme Maurice | Investissement Immobilier",
  description: "Property Development Scheme (PDS) à Maurice. Remplace IRS et RES depuis 2015. Investissement 375 000 USD. Ouvert étrangers et Mauriciens. Permis résidence inclus.",
};

export default function PDSPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600">Accueil</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <span>/</span>
            <Link href="/services/immobilier" className="hover:text-blue-600">Immobilier</Link>
            <span>/</span>
            <span className="font-medium text-slate-900">PDS</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/villa-luxe.jpg"
            alt="Property Development Scheme Maurice"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-green-400/30 bg-green-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-green-300 backdrop-blur-sm">
              Immobilier — Programme Principal
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              PDS — Property <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Development Scheme</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Le programme immobilier moderne de Maurice depuis 2015. Ouvert aux étrangers et Mauriciens. Investissement minimum 375 000 USD. Permis de résidence inclus.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                  Demander un conseil
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Overview Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
                Qu'est-ce que le PDS ?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Le Property Development Scheme (PDS) est le programme immobilier phare de Maurice depuis 2015. Il remplace l'ancien système IRS/RES en proposant un cadre réglementaire renforcé, plus transparent et plus sécurisé pour les investisseurs.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Le PDS est ouvert à la fois aux résidents étrangers et aux citoyens mauriciens. Il couvre tous les types de développements résidentiels : villas, appartements, penthouse. L'État mauricien encadre chaque promoteur et exige des garanties financières strictes.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  { icon: Building2, text: "Développements modernes" },
                  { icon: Globe, text: "Ouvert : étrangers & Mauriciens" },
                  { icon: DollarSign, text: "375 000 USD min" },
                  { icon: Users, text: "Permis résidence inclus" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                    <item.icon className="h-4 w-4" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/grand-baie.jpg"
                alt="Développement PDS Maurice"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Details Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Conditions d'accès au PDS
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Investissement minimum",
                value: "375 000 USD",
                desc: "Pour les étrangers. Les Mauriciens peuvent investir à partir de 275 000 USD.",
              },
              {
                title: "Qui peut investir ?",
                value: "Étrangers & Mauriciens",
                desc: "Programme inclusif. Aucune restriction de nationalité ou de résidence actuelle.",
              },
              {
                title: "Permis de résidence",
                value: "10 ans renouvelable",
                desc: "Vous accédez au permis Investor Permit pour vous et votre famille.",
              },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {card.title}
                </p>
                <p className="text-3xl font-black text-green-600 mb-4">{card.value}</p>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties et Encadrement */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Sécurités et encadrement du PDS
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto text-center">
            Le PDS a été conçu pour éviter les déboires des programmes antérieurs. L'État mauricien impose des garde-fous stricts aux promoteurs.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Shield,
                title: "Audit du promoteur",
                desc: "Chaque promoteur PDS est scruté par les autorités mauriciennes. Vérification des antécédents, solvabilité, références.",
              },
              {
                icon: CheckCircle2,
                title: "Garantie Financière d'Achèvement",
                desc: "Le promoteur doit fournir une GFA : assurance que la construction sera livrée conforme et à temps.",
              },
              {
                icon: Building2,
                title: "Dépôt en séquestre",
                desc: "Vos fonds sont bloqués auprès d'un tiers neutre jusqu'à certaines étapes de la construction.",
              },
              {
                icon: TrendingUp,
                title: "Transparence tarifaire",
                desc: "Les prix et conditions sont publiés auprès de l'EDB. Pas de marges cachées ou renégociations abusives.",
              },
              {
                icon: MapPin,
                title: "Zones géographiques approuvées",
                desc: "Seules les zones décidées par l'État mauricien sont éligibles. Pas de n'importe où.",
              },
              {
                icon: Zap,
                title: "Conformité architecturale",
                desc: "Les plans doivent respecter les normes mauriciennes. Inspection régulière durant la construction.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages du PDS */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Avantages clés du PDS
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Globe,
                title: "Inclusive — Mauriciens + Étrangers",
                desc: "Contrairement à l'IRS, le PDS s'adresse à tous. Pas de distinction de traitement.",
              },
              {
                icon: DollarSign,
                title: "Investissement abordable",
                desc: "À partir de 375 000 USD (étrangers). Plus accessible que les anciens schémas de luxe.",
              },
              {
                icon: Users,
                title: "Permis de résidence garanti",
                desc: "Investir en PDS ouvre directement l'accès au permis Investor Permit.",
              },
              {
                icon: CheckCircle2,
                title: "Variété de produits",
                desc: "Villas, appartements, penthouse. Tous les styles d'habitat imagés.",
              },
              {
                icon: Shield,
                title: "Cadre réglementaire robuste",
                desc: "Moins de risques liés aux promoteurs. État mauricien veille à la qualité.",
              },
              {
                icon: TrendingUp,
                title: "Demande soutenue",
                desc: "1,5 M de touristes annuels + 10 000 nouveaux résidents par an. Marché vivant.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus d'acquisition */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Processus d'acquisition PDS
          </h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-green-300 to-slate-200 hidden lg:block" />

            <div className="space-y-12 lg:space-y-16">
              {[
                {
                  step: 1,
                  title: "Consultation & analyse",
                  desc: "Évaluation de votre profil, objectifs patrimoniaux, structuration fiscale optimale.",
                },
                {
                  step: 2,
                  title: "Sélection du projet PDS",
                  desc: "Audit du promoteur, vérification de la GFA, visite du projet ou du terrain.",
                },
                {
                  step: 3,
                  title: "Structuration juridique",
                  desc: "Création de la société d'acquisition, analyse immobilière et fiscale approfondie.",
                },
                {
                  step: 4,
                  title: "Promesse de vente",
                  desc: "Signature du contrat préliminaire. Versement du dépôt en séquestre.",
                },
                {
                  step: 5,
                  title: "Financement & suivi",
                  desc: "Mise en place du crédit si nécessaire. Déblocage progressif des fonds selon la construction.",
                },
                {
                  step: 6,
                  title: "Acte d'acquisition & résidence",
                  desc: "Signature de l'acte définitif. Constitution du dossier Investor Permit.",
                },
                {
                  step: 7,
                  title: "Installation & gestion",
                  desc: "Prise de possession. Gestion locative ou occupation personnelle. Suivi fiscal continu.",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative lg:pl-24">
                  <div className="absolute left-5 top-1 hidden lg:flex h-7 w-7 items-center justify-center rounded-full bg-green-600 text-white text-xs font-black ring-4 ring-white">
                    {item.step}
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Questions fréquentes sur le PDS
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Quel est le délai de livraison typique ?",
                a: "Entre 3 et 5 ans selon la taille du projet. Les petits projets sont parfois livrés en 2-3 ans.",
              },
              {
                q: "Puis-je louer ma propriété PDS ?",
                a: "Oui, la location meublée ou long terme est autorisée. Vérifiez les conditions spécifiques du promoteur.",
              },
              {
                q: "Le permis de résidence est-il garanti ?",
                a: "L'investissement PDS facilite grandement l'accès, mais le dossier doit toujours être approuvé par l'EDB.",
              },
              {
                q: "Quelle est la fiscalité ? Droits d'enregistrement ?",
                a: "Droits : 10% du prix d'achat. Plus-values : 0% à Maurice. Revenus locatifs : 15% d'IS.",
              },
              {
                q: "Puis-je revendre avant la fin de la construction ?",
                a: "Oui, la revente en phase de construction est possible, mais vérifiez les termes du contrat.",
              },
            ].map((item, i) => (
              <details key={i} className="group rounded-2xl border border-slate-200 bg-white p-6 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="flex items-center justify-between font-bold text-slate-900">
                  {item.q}
                  <ArrowRight className="h-5 w-5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Prêt à investir en PDS ?
          </h2>
          <p className="text-lg text-green-100 mb-8 leading-relaxed">
            Notre équipe analyse les meilleurs projets PDS du moment. Structuration, audit, fiscalité, permis résidence — nous pilotons votre dossier de A à Z.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 px-8 h-14 text-lg font-bold">
              Commencer mon projet
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
