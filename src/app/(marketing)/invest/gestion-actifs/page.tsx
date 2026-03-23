import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BarChart3,
  TrendingUp,
  Shield,
  Globe,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  LineChart,
  PieChart,
  Landmark,
  Target,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gestion d'Actifs & Portefeuilles à Maurice | Vanille Invest",
  description:
    "Conseil en investissement, marchés cotés, private equity à Maurice. Partenaires bancaires de premier plan. Approche performance et sécurité par Didier Laroussinie.",
  openGraph: {
    title: "Gestion d'Actifs & Portefeuilles à Maurice | Vanille Invest",
    description:
      "Investissez sur les marchés mauriciens et internationaux. Private equity, marchés cotés, obligations. Accompagnement sur mesure.",
    url: "https://vanillestrategie.fr/invest/gestion-actifs",
    type: "website",
  },
};

const approche = [
  {
    icon: Target,
    stat: "Sur-mesure",
    label: "allocation",
    description: "Chaque portefeuille est construit en fonction de votre profil de risque, horizon et objectifs patrimoniaux.",
  },
  {
    icon: Shield,
    stat: "Sécurité",
    label: "prioritaire",
    description: "Préservation du capital en priorité. Diversification géographique et sectorielle systématique.",
  },
  {
    icon: TrendingUp,
    stat: "Performance",
    label: "ajustée au risque",
    description: "Recherche de rendement optimisé sans prise de risque disproportionnée. Reporting transparent.",
  },
  {
    icon: Globe,
    stat: "International",
    label: "multi-marchés",
    description: "Accès aux marchés mauriciens, africains, asiatiques et internationaux depuis Maurice.",
  },
];

const services = [
  {
    icon: LineChart,
    title: "Marchés cotés",
    description: "Conseil en investissement sur les marchés actions et obligations. Stock Exchange of Mauritius, marchés internationaux. Sélection de titres et d'ETF adaptés à votre profil.",
  },
  {
    icon: Briefcase,
    title: "Private equity",
    description: "Accès à des opportunités de private equity à Maurice et en Afrique. Participations dans des entreprises à fort potentiel de croissance, accompagnées par notre réseau local.",
  },
  {
    icon: PieChart,
    title: "Fonds d'investissement",
    description: "Sélection et suivi de fonds d'investissement domiciliés à Maurice. Maurice est un hub reconnu pour la structuration de fonds à vocation africaine et asiatique.",
  },
  {
    icon: Landmark,
    title: "Produits bancaires structurés",
    description: "En partenariat avec des établissements bancaires mauriciens de premier plan comme AfrAsia Bank, accès à des produits structurés offrant protection du capital et rendement.",
  },
  {
    icon: Lock,
    title: "Gestion sous mandat",
    description: "Délégation de la gestion de votre portefeuille à des professionnels. Reporting régulier, ajustements tactiques et suivi de performance.",
  },
  {
    icon: BarChart3,
    title: "Reporting & suivi",
    description: "Tableaux de bord consolidés, rapports mensuels de performance, analyse des risques et recommandations d'ajustement.",
  },
];

const partenaires = [
  { nom: "Stock Exchange of Mauritius", desc: "La bourse mauricienne, passerelle vers les marchés africains et asiatiques." },
  { nom: "AfrAsia Bank", desc: "Banque privée et d'investissement, leader à Maurice pour les clients internationaux." },
  { nom: "Fonds Global Business", desc: "Maurice accueille plus de 900 fonds d'investissement grâce à son cadre réglementaire attractif." },
];

export default function GestionActifsPage() {
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
            <span className="font-medium text-slate-900">Gestion d&apos;actifs</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/villa-luxe.jpg"
            alt="Gestion d'actifs et portefeuilles à Maurice"
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
              Vanille Invest — Actifs
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Gestion d&apos;actifs{" "}
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                & portefeuilles
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Conseil en investissement, marchés cotés et private equity. Une approche alliant performance et sécurité, pilotée par Didier Laroussinie depuis Maurice.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-8 h-14 text-lg font-bold shadow-lg shadow-amber-500/20">
                  Discuter de mes investissements
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />

      {/* Approche */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Notre approche d&apos;investissement
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Performance ajustée au risque, transparence totale et diversification internationale depuis Maurice.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {approche.map((a) => (
              <Card key={a.label} className="p-8 border-none shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 mb-6">
                  <a.icon className="h-6 w-6" />
                </div>
                <p className="text-2xl font-black text-slate-900">{a.stat}</p>
                <p className="text-sm font-bold text-amber-600 uppercase tracking-widest mt-1">{a.label}</p>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{a.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Nos solutions d&apos;investissement
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="p-8 border-none bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-yellow-600 text-white mb-6">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{s.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maurice hub financier */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
                Maurice, hub financier international
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Maurice s&apos;est imposée comme une place financière de premier plan grâce à son cadre réglementaire robuste, sa stabilité politique et ses conventions de non double imposition avec plus de 45 pays.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Le pays accueille plus de 900 fonds d&apos;investissement, des sociétés de gestion de portefeuilles agréées et des banques internationales. C&apos;est la porte d&apos;entrée privilégiée pour investir en Afrique et en Asie.
              </p>
              <div className="space-y-4">
                {partenaires.map((p) => (
                  <div key={p.nom} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">{p.nom}</p>
                      <p className="text-sm text-slate-600">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/grand-baie.jpg"
                alt="Maurice hub financier international"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Pourquoi confier vos actifs à Vanille Invest ?
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { icon: Shield, title: "Groupe intégré", desc: "Comptabilité, fiscalité, juridique et investissement sous un même toit. Aucune dispersion, une vision cohérente de votre patrimoine." },
              { icon: Globe, title: "Expertise locale et internationale", desc: "Connaissance approfondie du marché mauricien et réseau international. Didier Laroussinie et son équipe sont implantés à Maurice." },
              { icon: Lock, title: "Confidentialité absolue", desc: "Cadre réglementaire mauricien strict en matière de confidentialité. Vos informations patrimoniales sont protégées." },
              { icon: TrendingUp, title: "Alignement d'intérêts", desc: "Nous ne percevons aucune rétrocommission cachée. Notre rémunération est transparente et alignée sur vos résultats." },
            ].map((item) => (
              <div key={item.title} className="flex gap-6 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
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
              { q: "Quel est le montant minimum pour investir ?", a: "Il n'y a pas de montant minimum fixe. Nous adaptons nos recommandations à votre budget, que ce soit pour un portefeuille modeste ou une allocation multi-millions." },
              { q: "Les investissements à Maurice sont-ils réglementés ?", a: "Oui. La Financial Services Commission (FSC) régule l'ensemble des activités financières. Maurice est conforme aux standards internationaux (FATF, OCDE)." },
              { q: "Puis-je investir en bourse à Maurice depuis la France ?", a: "Oui. Via un compte de courtage ouvert à Maurice, vous accédez au Stock Exchange of Mauritius et aux marchés internationaux." },
              { q: "Quelle est la fiscalité sur les dividendes à Maurice ?", a: "Les dividendes perçus à Maurice ne sont pas imposés. C'est l'un des avantages majeurs de la place financière mauricienne." },
              { q: "Comment fonctionne le private equity à Maurice ?", a: "Maurice offre un cadre juridique adapté à la structuration de fonds de private equity. Nous identifions les opportunités et structurons votre participation." },
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
            <BarChart3 className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Optimisez vos{" "}
            <br />
            <span className="text-amber-400">investissements</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Marchés cotés, private equity, fonds d&apos;investissement : Didier Laroussinie construit avec vous un portefeuille adapté à vos ambitions. Groupe intégré, transparence totale.
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
