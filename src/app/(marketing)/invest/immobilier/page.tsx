import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Building2,
  Home,
  MapPin,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Shield,
  Globe,
  DollarSign,
  Landmark,
  Sun,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Investissement Immobilier à Maurice — 6 Programmes | Vanille Invest",
  description:
    "Découvrez les 6 programmes immobiliers mauriciens accessibles aux étrangers : PDS, IRS, RES, Smart City, IHS et Ground+2. 0% plus-values, 0% droits de succession. Accompagnement sur mesure par Vanille Stratégie.",
  openGraph: {
    title: "Investissement Immobilier à Maurice — 6 Programmes | Vanille Invest",
    description:
      "PDS, IRS, RES, Smart City, IHS, Ground+2 : investissez dans l'immobilier mauricien avec 0% de taxe sur les plus-values. Conseil patrimonial par Didier Laroussinie.",
    url: "https://vanillestrategie.fr/invest/immobilier",
    type: "website",
  },
};

const programmes = [
  {
    icon: Building2,
    title: "PDS — Property Development Scheme",
    seuil: "À partir de 375 000 USD",
    residence: true,
    description:
      "Le programme phare depuis 2015. Villas et appartements premium dans des complexes résidentiels encadrés par l'État. Garantie financière d'achèvement obligatoire.",
    highlights: ["Permis de résidence inclus", "GFA obligatoire", "Ouvert étrangers & Mauriciens"],
    href: "/services/immobilier/pds",
  },
  {
    icon: Landmark,
    title: "IRS — Integrated Resort Scheme",
    seuil: "À partir de 375 000 USD",
    residence: true,
    description:
      "Propriétés ultra haut de gamme dans des complexes intégrés avec golf, marina et conciergerie. Les premiers programmes datent de 2002.",
    highlights: ["Ultra premium", "Golf & marina", "Services de conciergerie"],
    href: "/services/immobilier/irs",
  },
  {
    icon: MapPin,
    title: "RES — Real Estate Scheme",
    seuil: "Pas de minimum EDB (Economic Development Board)",
    residence: false,
    description:
      "Résidences accessibles aux étrangers sans seuil d'investissement imposé par l'EDB. Idéal pour un premier investissement à Maurice.",
    highlights: ["Pas de seuil minimum", "Flexibilité budgétaire", "Zones variées"],
    href: "/services/immobilier/res",
  },
  {
    icon: Sun,
    title: "Smart City Scheme",
    seuil: "À partir de 375 000 USD",
    residence: true,
    description:
      "Investir dans les villes intelligentes de Maurice : espaces de vie, bureaux et résidences modernes dans un écosystème intégré.",
    highlights: ["Permis de résidence inclus", "Bureaux & résidences", "Infrastructures modernes"],
    href: "/services/immobilier/smart-city",
  },
  {
    icon: Briefcase,
    title: "IHS — Invest Hotel Scheme",
    seuil: "Variable selon l'hôtel",
    residence: true,
    description:
      "Acquisition d'une unité hôtelière dans un établissement agréé. Rendement locatif garanti par l'opérateur hôtelier, gestion déléguée.",
    highlights: ["Rendement garanti", "Gestion déléguée", "Accès résidence sous conditions"],
    href: "/services/immobilier/invest-hotel-scheme",
  },
  {
    icon: Home,
    title: "Ground+2",
    seuil: "Pas de minimum EDB",
    residence: false,
    description:
      "Appartements en rez-de-chaussée + 2 étages dans des zones désignées. Accessible aux étrangers avec un budget plus modeste.",
    highlights: ["Budget accessible", "Zones désignées", "Idéal premier investissement"],
    href: "/services/immobilier/ground-plus-2",
  },
];

const fiscalite = [
  { stat: "0%", label: "Plus-values immobilières", desc: "Aucune taxe sur la revente de votre bien à Maurice." },
  { stat: "0%", label: "Droits de succession", desc: "Transmission patrimoniale sans fiscalité successorale." },
  { stat: "15%", label: "Impôt sur les revenus locatifs", desc: "Taux unique d'IS sur les loyers perçus à Maurice." },
  { stat: "5%", label: "Droits d'enregistrement", desc: "Droits réduits pour les étrangers dans certains programmes." },
];

const zones = [
  { nom: "Grand Baie & Nord", atout: "Tourisme, vie nocturne, proximité aéroport secondaire", rendement: "5–7%" },
  { nom: "Tamarin & Ouest", atout: "Surf, nature, communauté expatriée française", rendement: "4–6%" },
  { nom: "Bel Ombre & Sud", atout: "Luxe, tranquillité, grands domaines IRS/PDS", rendement: "4–5%" },
  { nom: "Moka & Smart Cities", atout: "Business hub, écoles internationales, modernité", rendement: "5–7%" },
];

export default function InvestImmobilierPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-amber-600">Accueil</Link>
            <span>/</span>
            <Link href="/invest" className="hover:text-amber-600">Vanille Invest</Link>
            <span>/</span>
            <span className="font-medium text-slate-900">Immobilier</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/villa-luxe.jpg"
            alt="Investissement immobilier à l'Île Maurice"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-amber-300 backdrop-blur-sm">
              Vanille Invest — Immobilier
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Investissement immobilier{" "}
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                à l&apos;Île Maurice
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              6 programmes accessibles aux étrangers, une fiscalité exceptionnelle et un marché en pleine croissance. Didier Laroussinie et son équipe vous accompagnent à chaque étape.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-8 h-14 text-lg font-bold shadow-lg shadow-amber-500/20">
                  Demander un conseil immobilier
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />

      {/* Fiscalité */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Fiscalité immobilière à Maurice
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              L&apos;une des juridictions les plus avantageuses au monde pour l&apos;investissement immobilier.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {fiscalite.map((f) => (
              <Card key={f.label} className="p-8 border-none shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <p className="text-4xl font-black text-amber-600">{f.stat}</p>
                <p className="text-sm font-bold text-slate-900 uppercase tracking-widest mt-2">{f.label}</p>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparatif des 6 programmes */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              6 programmes, un seul objectif
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Chaque programme répond à un profil d&apos;investisseur différent. Notre rôle : identifier celui qui correspond à vos objectifs patrimoniaux.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programmes.map((p) => (
              <Link key={p.title} href={p.href}>
                <Card className="group h-full p-8 border-none bg-white hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-yellow-600 text-white mb-6">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-amber-600">{p.seuil}</p>
                  {p.residence && (
                    <span className="mt-2 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                      Permis de résidence
                    </span>
                  )}
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">{p.description}</p>
                  <ul className="mt-4 space-y-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-1 text-xs font-bold text-amber-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    En savoir plus <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Processus d'achat */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Processus d&apos;achat immobilier
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-amber-300 to-slate-200 hidden lg:block" />
            <div className="space-y-12 lg:space-y-16">
              {[
                { step: 1, title: "Analyse patrimoniale", desc: "Évaluation de votre situation, objectifs d'investissement, horizon temporel et tolérance au risque." },
                { step: 2, title: "Sélection du programme", desc: "Recommandation du programme adapté (PDS, IRS, Smart City...) en fonction de votre profil et budget." },
                { step: 3, title: "Visite et sélection du bien", desc: "Organisation de visites sur site ou virtuelles. Audit du promoteur et vérification des garanties." },
                { step: 4, title: "Structuration juridique & fiscale", desc: "Création de la structure d'acquisition optimale, analyse des conventions fiscales applicables." },
                { step: 5, title: "Signature et financement", desc: "Accompagnement pour la promesse de vente, le financement bancaire et le dépôt en séquestre." },
                { step: 6, title: "Livraison et gestion", desc: "Réception du bien, mise en gestion locative si souhaité, suivi fiscal et patrimonial continu." },
              ].map((item) => (
                <div key={item.step} className="relative lg:pl-24">
                  <div className="absolute left-5 top-1 hidden lg:flex h-7 w-7 items-center justify-center rounded-full bg-amber-600 text-white text-xs font-black ring-4 ring-white">
                    {item.step}
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rendements par zone */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Rendements attendus par zone
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Les rendements locatifs nets varient selon la localisation, le type de bien et le programme choisi. Voici les fourchettes constatées.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {zones.map((z) => (
              <Card key={z.nom} className="p-8 border-none shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700 mb-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{z.nom}</h3>
                <p className="text-2xl font-black text-amber-600 mt-2">{z.rendement}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">rendement net estimé</p>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{z.atout}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {[
              { q: "Un étranger peut-il acheter librement à Maurice ?", a: "Oui, dans le cadre des programmes agréés (PDS, IRS, RES, Smart City, IHS, G+2). Hors programme, l'achat direct est restreint." },
              { q: "Quel budget minimum pour investir ?", a: "Le programme RES et Ground+2 n'imposent pas de seuil EDB. Pour le PDS et Smart City, le minimum est de 375 000 USD pour les étrangers." },
              { q: "Y a-t-il des taxes sur la plus-value à la revente ?", a: "Non. Maurice n'applique aucune taxe sur les plus-values immobilières, que le bien soit détenu en nom propre ou via une société." },
              { q: "Peut-on obtenir un crédit immobilier à Maurice ?", a: "Oui. Plusieurs banques mauriciennes proposent des financements aux non-résidents, généralement jusqu'à 70% du prix d'achat." },
              { q: "Comment fonctionne la gestion locative ?", a: "Nous travaillons avec des partenaires de gestion locative qui s'occupent de la mise en location, l'entretien et la relation locataire." },
            ].map((item, i) => (
              <details key={i} className="group rounded-2xl border border-slate-200 bg-white p-6 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="flex items-center justify-between font-bold text-slate-900">
                  {item.q}
                  <ArrowRight className="h-5 w-5 transition-transform group-open:rotate-90 shrink-0 ml-4" />
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-amber-600/10 text-amber-500 mb-8 border border-amber-500/20">
            <Building2 className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Votre projet immobilier{" "}
            <br />
            <span className="text-amber-400">commence ici</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Didier Laroussinie et l&apos;équipe Vanille Invest analysent votre profil et vous orientent vers le programme le plus adapté. Groupe intégré, accompagnement de A à Z.
          </p>
          <div className="mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-amber-500/20">
                Prendre rendez-vous
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
