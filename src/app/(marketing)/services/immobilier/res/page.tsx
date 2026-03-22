import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  Home,
  MapPin,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  Building2,
  Zap,
  Shield,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "RES — Real Estate Scheme Maurice | Investissement Résidentiel",
  description: "Real Estate Scheme (RES) à Maurice. Projets résidentiels de taille moyenne. Investissement 375 000 USD. Programme remplacé par PDS depuis 2015.",
};

export default function RESPage() {
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
            <span className="font-medium text-slate-900">RES</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/villa-luxe.jpg"
            alt="Real Estate Scheme Maurice"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-amber-300 backdrop-blur-sm">
              Immobilier — Historique
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              RES — Real Estate <br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Scheme</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Projets résidentiels de taille moyenne, accessibles. 375 000 USD minimum. Programme remplacé par le PDS depuis 2015, mais toujours compris dans les acquisitions historiques.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                  En savoir plus
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
                Qu'est-ce que le RES ?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Le Real Estate Scheme (RES) était le programme immobilier mauricien pour les investisseurs étrangers cherchant des projets résidentiels de taille intermédiaire, souvent situés à proximité des centres urbains dynamiques.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Contrairement à l'IRS qui proposait des domaines intégrés de luxe, le RES couvrait des développements plus variés : villas, chalets, petits collectifs. Le programme a été remplacé par le Property Development Scheme (PDS) en 2015, mais les propriétés acquises sous RES restent pertinentes.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-sm text-amber-900">
                  <p className="font-bold mb-1">Note importante</p>
                  <p>Le RES n'accepte plus de nouveaux investisseurs depuis 2015. Cette page documente le programme pour les propriétaires existants.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/grand-baie.jpg"
                alt="Projet RES Maurice"
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
            Caractéristiques du programme RES
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Investissement minimum",
                value: "375 000 USD",
                desc: "Propriété résidentielle selon les normes du programme (clôturé depuis 2015).",
              },
              {
                title: "Zones géographiques",
                value: "Variées",
                desc: "Centres dynamiques, zones côtières proches des services et commerces.",
              },
              {
                title: "Permis résidence",
                value: "Inclus",
                desc: "Accès au permis Investor Permit pour vous et votre famille.",
              },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {card.title}
                </p>
                <p className="text-3xl font-black text-amber-600 mb-4">{card.value}</p>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RES vs PDS Comparison */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            RES vs PDS : Pourquoi le changement ?
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Real Estate Scheme (RES)",
                subtitle: "Jusqu'en 2015",
                points: [
                  "Projets résidentiels variés, peu encadrés",
                  "Localisation diverse, parfois éloignée",
                  "Contrôle promoteur limité",
                  "Potentiel de litige élevé",
                  "Programme fermé — plus d'acceptation de dossiers",
                ],
                bg: "bg-amber-50 border-amber-200",
              },
              {
                title: "Property Development Scheme (PDS)",
                subtitle: "Depuis 2015",
                points: [
                  "Cadre réglementaire renforcé",
                  "Audit promoteur obligatoire",
                  "Garanties financières strictes",
                  "Zones géographiques définies",
                  "Ouvert à nouveaux investisseurs",
                ],
                bg: "bg-blue-50 border-blue-200",
              },
            ].map((scheme, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${scheme.bg}`}>
                <h3 className={`text-2xl font-bold ${i === 0 ? "text-amber-900" : "text-blue-900"} mb-1`}>
                  {scheme.title}
                </h3>
                <p className={`text-sm ${i === 0 ? "text-amber-700" : "text-blue-700"} font-medium mb-6`}>
                  {scheme.subtitle}
                </p>
                <ul className="space-y-3">
                  {scheme.points.map((point, j) => (
                    <li key={j} className={`flex items-start gap-3 text-sm ${i === 0 ? "text-amber-900" : "text-blue-900"}`}>
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages pour les propriétaires actuels */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Avantages pour les propriétaires RES actuels
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: TrendingUp,
                title: "Plus-values résidentielles",
                desc: "L'île Maurice voit une demande croissante. Les propriétés RES bien localisées ont gagné de la valeur.",
              },
              {
                icon: DollarSign,
                title: "Revenus locatifs potentiels",
                desc: "Mise en location meublée ou long terme possible pour générer des revenus réguliers.",
              },
              {
                icon: Shield,
                title: "Permis de résidence établi",
                desc: "Votre statut de résident est stable. Renouvellement sans difficulté.",
              },
              {
                icon: Building2,
                title: "Liberté de disposition",
                desc: "Vous pouvez revendre, louer ou transmettre votre bien en toute flexibilité.",
              },
              {
                icon: MapPin,
                title: "Localisation souvent centrale",
                desc: "Beaucoup de RES sont situés proches des services, restaurants et commerces.",
              },
              {
                icon: Zap,
                title: "Accès facilité aux financements",
                desc: "Les banques mauriciennes reconnaissent l'IRS et RES comme des investissements sérieux.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
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

      {/* Gestion administrative RES */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Gestion administrative et fiscale RES
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Déclaration annuelle",
                points: [
                  "Impôt sur les revenus locatifs (s'il y a)",
                  "Déduction des frais : charges, assurance, maintenance",
                  "Provision pour charges : eau, électricité, syndic",
                ],
              },
              {
                title: "Plus-values immobilières",
                points: [
                  "0% d'impôt sur les plus-values (Maurice) ✓",
                  "Compliance France : déclarer si résident fiscal français",
                  "Convention France-Maurice applicable",
                ],
              },
              {
                title: "Succession et transmission",
                points: [
                  "0% de droits de succession (Maurice) ✓",
                  "Clause du testament respectée",
                  "Transmission facile aux héritiers",
                ],
              },
              {
                title: "Financement et refinancement",
                points: [
                  "Restructuration immobilière possible",
                  "Accès au crédit auprès des banques locales",
                  "Audit de valeur pour refinancement",
                ],
              },
            ].map((section, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Questions fréquentes sur le RES
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Puis-je encore acquérir une propriété RES ?",
                a: "Non, le programme est fermé depuis 2015. Seul le PDS et l'IRS sont ouverts aux nouveaux investisseurs.",
              },
              {
                q: "Ma propriété RES est-elle toujours valable ?",
                a: "Oui, entièrement. Votre permis de résidence et vos droits de propriété restent inchangés.",
              },
              {
                q: "Dois-je convertir mon RES en PDS ?",
                a: "Non, aucune conversion obligatoire. Vous maintenez votre statut actuel. Si vous revendez, l'acheteur choisit le nouveau programme.",
              },
              {
                q: "Puis-je revendre ma propriété RES ?",
                a: "Oui, librement. Le marché secondaire est actif pour les RES bien situés.",
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
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Propriétaire RES ? Optimisez votre fiscalité
          </h2>
          <p className="text-lg text-amber-100 mb-8 leading-relaxed">
            Conseil en gestion locative, suivi fiscal, audit de valeur, restructuration. Notre équipe maîtrise la fiscalité immobilière à Maurice.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 px-8 h-14 text-lg font-bold">
              Discuter de votre situation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
