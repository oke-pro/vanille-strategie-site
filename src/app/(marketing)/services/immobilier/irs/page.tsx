import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  TreePalm,
  MapPin,
  DollarSign,
  CheckCircle2,
  Users,
  Home,
  Zap,
  Shield,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IRS — Integrated Resort Scheme Maurice | Investissement & Résidence",
  description: "Investissement immobilier en Integrated Resort Scheme (IRS) à Maurice. Domaines de luxe, golf, spa. Dès 375 000 USD. Permis de résidence inclus.",
};

export default function IRSPage() {
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
            <span className="font-medium text-slate-900">IRS</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/villa-luxe.jpg"
            alt="Integrated Resort Scheme Maurice"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-blue-300 backdrop-blur-sm">
              Immobilier — Investissement Résident
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              IRS — Integrated <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Resort Scheme</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Résidences de luxe dans des domaines intégrés avec infrastructure golf, spa, et services haut de gamme. Investissement minimum 375 000 USD avec permis de résidence.
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
                Qu'est-ce que l'IRS ?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                L'Integrated Resort Scheme (IRS) est le programme phare de l'Île Maurice pour les investissements immobiliers de prestige. Il propose des résidences haut de gamme intégrées dans des domaines offrant une qualité de vie exceptionnelle.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Ces domaines incluent systématiquement des équipements collectifs : terrain de golf, spa, restaurants, services de conciergerie et sécurité 24/7. L'IRS combine l'investissement immobilier et le mode de vie privilégié sur l'île.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  { icon: Home, text: "Résidences luxe" },
                  { icon: TreePalm, text: "Domaines intégrés" },
                  { icon: DollarSign, text: "375 000 USD min" },
                  { icon: Users, text: "Permis résidence" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                    <item.icon className="h-4 w-4" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/grand-baie.jpg"
                alt="Domaine IRS Maurice"
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
            Conditions d'accès au programme IRS
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Investissement minimum",
                value: "375 000 USD",
                desc: "Acquérir un bien résidentiel conforme aux standards du programme.",
              },
              {
                title: "Durée minimum de détention",
                value: "3 à 5 ans",
                desc: "Selon les conditions du promoteur. Révente autorisée après.",
              },
              {
                title: "Permis de résidence inclus",
                value: "10 ans renouvelable",
                desc: "Vous et votre famille accédez au permis Investor Permit.",
              },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {card.title}
                </p>
                <p className="text-3xl font-black text-blue-600 mb-4">{card.value}</p>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Avantages majeurs de l'IRS
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Shield,
                title: "Qualité d'investissement garantie",
                desc: "Les domaines IRS sont scrutés par les autorités mauriciennes. Réputation établie, liquidité de revente assurée.",
              },
              {
                icon: TreePalm,
                title: "Mode de vie haut de gamme",
                desc: "Accès exclusif aux équipements du domaine : golf, spa, restaurants, concierge. Environnement sécurisé et privilégié.",
              },
              {
                icon: Users,
                title: "Permis de résidence accordé",
                desc: "Investir en IRS ouvre directement la porte au permis Investor Permit pour vous et votre famille.",
              },
              {
                icon: MapPin,
                title: "Localisation stratégique",
                desc: "Les IRS sont situés dans les zones les plus recherchées : Grand Baie, Trou-aux-Biches, Bel Ombre.",
              },
              {
                icon: Zap,
                title: "Potentiel de plus-value",
                desc: "Demande soutenue des non-résidents. L'île Maurice attire chaque année 1,5 million de touristes.",
              },
              {
                icon: DollarSign,
                title: "Revenus locatifs possibles",
                desc: "Vous pouvez louer votre bien meublé via les prestataires agréés du domaine.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
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

      {/* Processus Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Processus d'acquisition IRS
          </h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-300 to-slate-200 hidden lg:block" />

            <div className="space-y-12 lg:space-y-16">
              {[
                {
                  step: 1,
                  title: "Étude de faisabilité",
                  desc: "Analyse de votre profil, évaluation fiscale et juridique, recommandation de domaines adaptés.",
                },
                {
                  step: 2,
                  title: "Sélection du bien",
                  desc: "Audit du promoteur et du domaine, visite physique ou virtuelle, vérification des garanties.",
                },
                {
                  step: 3,
                  title: "Structuration juridique",
                  desc: "Montage de la société d'acquisition optimisée fiscalement, signature des accords.",
                },
                {
                  step: 4,
                  title: "Financement et notaire",
                  desc: "Mise en place du crédit si nécessaire, acte d'achat, enregistrement des droits.",
                },
                {
                  step: 5,
                  title: "Dossier permis résidence",
                  desc: "Constitution du dossier Investor Permit via l'EDB, approbation et délivrance.",
                },
                {
                  step: 6,
                  title: "Installation et suivi",
                  desc: "Accès au domaine, mise en location si souhaitée, gestion comptable avec BD Star.",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative lg:pl-24">
                  <div className="absolute left-5 top-1 hidden lg:flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-black ring-4 ring-white">
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

      {/* Exemples Domaines IRS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Domaines IRS réputés à Maurice
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Anahita",
                location: "Bel Ombre (sud)",
                features: ["Golf 18 trous", "Spa luxe", "Marina privée"],
              },
              {
                name: "Tamarina",
                location: "Tamarin (ouest)",
                features: ["Golf 18 trous", "Resort 5*", "Clubs privés"],
              },
              {
                name: "Heritage Bel Ombre",
                location: "Bel Ombre (sud)",
                features: ["Golf 9 trous", "Spa", "Restaurants"],
              },
            ].map((domain, i) => (
              <div key={i} className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {domain.name}
                </h3>
                <p className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {domain.location}
                </p>
                <ul className="space-y-2">
                  {domain.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-600 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-blue-600" />
                      {feature}
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
            Questions fréquentes sur l'IRS
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Puis-je louer ma propriété IRS ?",
                a: "Oui, la plupart des domaines autorisent la location meublée via les gestionnaires agréés. Rendements typiques : 4-6% net annuel.",
              },
              {
                q: "Le permis de résidence est-il automatique ?",
                a: "L'IRS facilite grandement l'accès au permis Investor Permit, mais le dossier doit toujours être approuvé par l'EDB.",
              },
              {
                q: "Quelle est la fiscalité pour l'achat ?",
                a: "Droits d'enregistrement : 10% du prix d'achat. Nous structurons l'acquisition pour optimiser la fiscalité globale.",
              },
              {
                q: "Puis-je revendre avant 5 ans ?",
                a: "Oui, mais vérifiez les conditions spécifiques du domaine. Certains exigent une période minimum avant revente.",
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Prêt à explorer les opportunités IRS ?
          </h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Didier Laroussinie et son équipe étudient votre dossier et recommandent les meilleures options adaptées à vos objectifs patrimoniaux et fiscaux.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 h-14 text-lg font-bold">
              Demander une analyse gratuite
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
