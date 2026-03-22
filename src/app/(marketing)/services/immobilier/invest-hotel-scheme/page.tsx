import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  Bed,
  MapPin,
  DollarSign,
  CheckCircle2,
  Building2,
  TrendingUp,
  Shield,
  ArrowRight,
  Users,
  PieChart,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IHS — Invest Hotel Scheme Maurice | Investissement Hôtelier Passif",
  description: "Invest Hotel Scheme (IHS) à Maurice. Acquisition chambre ou suite hôtelière. Revenus locatifs garantis. Investissement 375 000 USD. Permis résidence inclus.",
};

export default function IHSPage() {
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
            <span className="font-medium text-slate-900">IHS</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/villa-luxe.jpg"
            alt="Invest Hotel Scheme Maurice"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-rose-400/30 bg-rose-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-rose-300 backdrop-blur-sm">
              Immobilier — Investissement Hôtelier
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              IHS — Invest <br />
              <span className="bg-gradient-to-r from-rose-400 to-pink-300 bg-clip-text text-transparent">Hotel Scheme</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Acquisition d'une chambre ou suite hôtelière avec revenus locatifs garantis. Investissement minimum 375 000 USD. Permis de résidence inclus. Gestion opérationnelle par l'hôtel.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                  Étudier mon dossier
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
                Qu'est-ce que l'IHS ?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                L'Invest Hotel Scheme (IHS) est un programme d'investissement immobilier unique : vous achetez une chambre ou une suite hôtelière dans un établissement agréé, et l'hôtel vous paie des revenus locatifs garantis chaque année. C'est un investissement passif, sans gestion opérationnelle de votre part.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                L'hôtel gère tout : nettoyage, accueil, réservations, entretien. Vous recevez des dividendes semestriels ou annuels. C'est l'option idéale pour les investisseurs cherchant revenus passifs et permis de résidence sans tracas.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  { icon: Bed, text: "Chambre hôtelière" },
                  { icon: TrendingUp, text: "Revenus garantis" },
                  { icon: DollarSign, text: "375 000 USD min" },
                  { icon: Users, text: "Permis résidence" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-sm font-medium text-rose-700">
                    <item.icon className="h-4 w-4" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/grand-baie.jpg"
                alt="Investissement Hôtel Maurice"
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
            Conditions d'accès au programme IHS
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Investissement minimum",
                value: "375 000 USD",
                desc: "Pour l'acquisition d'une chambre ou suite dans un hôtel agréé.",
              },
              {
                title: "Rendement garanti",
                value: "4-6% annuel",
                desc: "Selon le contrat. Revenus versés semestriellement ou annuellement.",
              },
              {
                title: "Permis de résidence",
                value: "10 ans renouvelable",
                desc: "L'investissement IHS ouvre directement accès au permis Investor Permit.",
              },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {card.title}
                </p>
                <p className="text-3xl font-black text-rose-600 mb-4">{card.value}</p>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnement IHS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Comment fonctionne l'IHS ?
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto text-center">
            Un schéma simple et transparent : vous investissez, l'hôtel gère, vous recevez les revenus.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                step: "1. Achat de la chambre",
                desc: "Vous achetez l'ownership (propriété) d'une suite ou chambre hôtelière auprès du promoteur.",
              },
              {
                step: "2. Contrat de gestion",
                desc: "L'hôtel signe un contrat avec vous garantissant des revenus locatifs annuels fixes (généralement 4-6%).",
              },
              {
                step: "3. Gestion opérationnelle",
                desc: "L'hôtel gère 100% de l'opération : réservations, accueil, entretien, nettoyage, services.",
              },
              {
                step: "4. Versement des revenus",
                desc: "Vous recevez vos revenus garantis semestriellement ou annuellement, indépendamment du taux d'occupation.",
              },
              {
                step: "5. Possibilité de revente",
                desc: "Vous pouvez revendre votre chambre à un autre investisseur. L'hôtel continue la gestion avec le nouveau propriétaire.",
              },
              {
                step: "6. Permis de résidence",
                desc: "L'investissement IHS vous ouvre droit au permis Investor Permit pour vous et votre famille.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.step}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages IHS */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Avantages majeurs de l'IHS
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: PieChart,
                title: "Revenus passifs garantis",
                desc: "Vous ne faites rien, l'hôtel gère tout. Dividendes versés régulièrement indépendamment du taux d'occupation.",
              },
              {
                icon: Shield,
                title: "Revenus contractuellement garantis",
                desc: "Un contrat légal garantit votre rendement minimal. Si l'hôtel ne paie pas, vous avez recours légaux.",
              },
              {
                icon: Users,
                title: "Permis de résidence inclus",
                desc: "Investir en IHS ouvre directement l'accès au permis Investor Permit pour vous et votre famille.",
              },
              {
                icon: TrendingUp,
                title: "Potentiel de plus-value",
                desc: "Demande croissante pour le tourisme à Maurice. Revente possible à bon prix après quelques années.",
              },
              {
                icon: Zap,
                title: "Zéro tracas de gestion",
                desc: "Pas de gestion locative, pas de recherche de locataires, pas d'entretien. L'hôtel s'occupe de tout.",
              },
              {
                icon: Building2,
                title: "Actif tangible de classe A",
                desc: "Vous possédez une part d'hôtel 5 étoiles. Actif physique, pas spéculatif.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors">
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

      {/* Considérations financières */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Considérations financières et fiscales
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Revenus locatifs",
                points: [
                  "Rendement : 4-6% annuel garanti",
                  "Versements : semestriels ou annuels",
                  "Parfois « extra dividendes » si hôtel surperforme",
                ],
              },
              {
                title: "Fiscalité à Maurice",
                points: [
                  "Revenus : 15% d'IS (impôt sur sociétés)",
                  "Plus-values : 0% (exonération Maurice ✓)",
                  "Droits achat : 10% du prix d'investissement",
                ],
              },
              {
                title: "Coûts additionnels",
                points: [
                  "Frais de gestion hôtel : ~5% des revenus",
                  "Assurance propriété : incluse généralement",
                  "Taxes foncières : minimes à Maurice",
                ],
              },
              {
                title: "Durée minimale et sortie",
                points: [
                  "Engagement : généralement 5-10 ans minimum",
                  "Revente possible après engagement",
                  "Liquidité : marché secondaire des chambres hôtels",
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
                      <CheckCircle2 className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus d'acquisition */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Processus d'investissement IHS
          </h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-500 via-rose-300 to-slate-200 hidden lg:block" />

            <div className="space-y-12 lg:space-y-16">
              {[
                {
                  step: 1,
                  title: "Consultation et profiling",
                  desc: "Analyser votre profil, objectifs de revenus, horizon d'investissement et fiscalité.",
                },
                {
                  step: 2,
                  title: "Sélection de l'hôtel",
                  desc: "Audit de l'établissement hôtelier. Vérification de la solidité financière, réputation, taux d'occupation.",
                },
                {
                  step: 3,
                  title: "Étude du contrat",
                  desc: "Examen approfondi du contrat de gestion : rendement garanti, clauses, conditions de revente, etc.",
                },
                {
                  step: 4,
                  title: "Structuration juridique",
                  desc: "Montage de la société d'acquisition, optimisation fiscale selon votre résidence.",
                },
                {
                  step: 5,
                  title: "Achat et financement",
                  desc: "Signature de l'acte d'achat. Mise en place du crédit si nécessaire. Versement complet.",
                },
                {
                  step: 6,
                  title: "Permis de résidence",
                  desc: "Dossier Investor Permit. Approbation et délivrance du permis 10 ans.",
                },
                {
                  step: 7,
                  title: "Suivi et encaissement",
                  desc: "Accueil des revenus semestriels/annuels. Suivi comptable via BD Star. Gestion patrimoniale.",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative lg:pl-24">
                  <div className="absolute left-5 top-1 hidden lg:flex h-7 w-7 items-center justify-center rounded-full bg-rose-600 text-white text-xs font-black ring-4 ring-white">
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
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Questions fréquentes sur l'IHS
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Les revenus sont-ils vraiment garantis ?",
                a: "Oui, contrats légaux les garantissent. Si l'hôtel ne paie pas, vous avez recours. Mais choisir un hôtel solide est crucial.",
              },
              {
                q: "Puis-je revendre ma chambre IHS ?",
                a: "Oui, généralement après l'engagement initial (5-10 ans). L'hôtel continue avec le nouveau propriétaire.",
              },
              {
                q: "Quel est le taux d'occupation typique des hôtels Maurice ?",
                a: "Maurice voit 1,5 M touristes annuels. Taux d'occupation : 60-75% en moyenne. Hôtels premium : 70-85%.",
              },
              {
                q: "Dois-je habiter votre chambre en tant que résident ?",
                a: "Non, c'est un investissement passif. L'hôtel la gère via le circuit touristique. Vous pouvez y séjourner pendant vos vacances.",
              },
              {
                q: "Y a-t-il des frais de gestion additionnels ?",
                a: "Oui, l'hôtel prélève ~5% des revenus. Cela couvre gestion, nettoyage, maintenance, services.",
              },
              {
                q: "Quelle est la fiscalité pour un résident français ?",
                a: "Revenus imposés à Maurice (15% IS). France : revenus doivent être déclarés selon convention FR-MU.",
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
      <section className="bg-gradient-to-r from-rose-600 to-rose-700 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Revenus passifs garantis + Permis de résidence
          </h2>
          <p className="text-lg text-rose-100 mb-8 leading-relaxed">
            L'IHS est unique : investissement simple, gestion zéro, revenus garantis et légaux, permis résidence inclus. Parfait pour les retraités et investisseurs prudents.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 px-8 h-14 text-lg font-bold">
              Étudier les opportunités hôtelières
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
