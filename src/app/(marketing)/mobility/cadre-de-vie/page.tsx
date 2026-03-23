import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Sun,
  ShieldCheck,
  Heart,
  GraduationCap,
  Globe2,
  Plane,
  Clock,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  MapPin,
  Wifi,
  Users,
  Palmtree,
  TrendingUp,
  Home,
  Utensils,
  DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Cadre de Vie à Maurice — Climat, Sécurité, Éducation, Communauté Francophone",
  description:
    "Découvrez le cadre de vie exceptionnel de l'Île Maurice : climat tropical, sécurité, écoles internationales, santé, communauté francophone, coût de la vie. Guide inspirationnel.",
  openGraph: {
    title:
      "Vivre à Maurice — Le cadre de vie qui change tout",
    description:
      "Climat, sécurité, éducation, santé, communauté francophone : tout ce qui fait de Maurice une destination de vie exceptionnelle pour les expatriés.",
    url: "https://vanillestrategie.fr/mobility/cadre-de-vie",
    type: "website",
  },
};

const chiffres = [
  { stat: "25 °C", label: "Moyenne annuelle", icon: Sun, source: "300+ jours d'ensoleillement" },
  { stat: "#1", label: "Afrique — Gouvernance", icon: ShieldCheck, source: "Mo Ibrahim Index" },
  { stat: "#1", label: "Afrique — Bonheur", icon: Heart, source: "ONU World Happiness 2025" },
  { stat: "23e", label: "Pays le plus sûr", icon: ShieldCheck, source: "Global Peace Index 2025" },
  { stat: "11 h", label: "Vol direct depuis Paris", icon: Plane, source: "Air Mauritius / Air France" },
  { stat: "GMT+4", label: "2 h de décalage avec Paris", icon: Clock, source: "Overlap Europe idéal" },
  { stat: "1,3 M", label: "Habitants multiculturels", icon: Users, source: "FR, EN, créole, hindi" },
  { stat: "3", label: "Câbles sous-marins fibre", icon: Wifi, source: "Connectivité internationale" },
];

const comparatif = [
  {
    categorie: "Logement (3 chambres, bon quartier)",
    france: "1 800 - 3 500 EUR/mois",
    maurice: "800 - 2 000 EUR/mois",
    avantage: "Maurice",
  },
  {
    categorie: "Scolarité internationale",
    france: "5 000 - 15 000 EUR/an",
    maurice: "3 000 - 10 000 EUR/an",
    avantage: "Maurice",
  },
  {
    categorie: "Assurance santé (famille)",
    france: "Sécu + mutuelle ~300 EUR/mois",
    maurice: "200 - 600 EUR/mois",
    avantage: "Variable",
  },
  {
    categorie: "Courses alimentaires",
    france: "600 - 1 000 EUR/mois",
    maurice: "400 - 800 EUR/mois",
    avantage: "Maurice",
  },
  {
    categorie: "Restaurant (repas pour 2)",
    france: "50 - 100 EUR",
    maurice: "20 - 60 EUR",
    avantage: "Maurice",
  },
  {
    categorie: "Internet fibre + mobile",
    france: "50 - 70 EUR/mois",
    maurice: "30 - 60 EUR/mois",
    avantage: "Maurice",
  },
  {
    categorie: "Impôt sur le revenu",
    france: "0 - 45 % (progressif)",
    maurice: "15 % (flat)",
    avantage: "Maurice",
  },
  {
    categorie: "Impôt sur les plus-values",
    france: "30 % (flat tax PFU)",
    maurice: "0 %",
    avantage: "Maurice",
  },
];

const lifestyleCards = [
  {
    icon: Sun,
    title: "Climat tropical tempéré",
    description:
      "Deux saisons douces : été austral (novembre-avril, 27-33°C) et hiver (mai-octobre, 18-25°C). Ensoleillement exceptionnel toute l'année, pluies tropicales brèves et rafraîchissantes.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité et stabilité",
    description:
      "N°1 Afrique en gouvernance (Mo Ibrahim Index), 23e pays le plus sûr au monde (Global Peace Index 2025). Démocratie stable depuis l'indépendance (1968), état de droit, liberté de la presse. Le pays le plus heureux d'Afrique (ONU, 2025).",
    color: "from-teal-600 to-cyan-600",
  },
  {
    icon: Heart,
    title: "Santé",
    description:
      "Cliniques privées de haut niveau : Wellkin Hospital, C-Care, Fortis Clinique Darné. Médecins formés en France, au Royaume-Uni et en Inde. Couverture internationale recommandée.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: GraduationCap,
    title: "Éducation",
    description:
      "Écoles internationales francophones (Lycée La Bourdonnais, programme français) et anglophones (Northfields, IB). Du primaire au baccalauréat, dans un environnement multiculturel.",
    color: "from-blue-600 to-indigo-600",
  },
  {
    icon: Users,
    title: "Communauté francophone",
    description:
      "Plus de 30 000 Français vivent à Maurice. Une communauté active et accueillante : clubs d'affaires, associations, événements, groupes WhatsApp. L'intégration est naturelle et rapide.",
    color: "from-violet-600 to-purple-600",
  },
  {
    icon: Palmtree,
    title: "Loisirs et nature",
    description:
      "Golf (9 parcours internationaux), kitesurf, plongée, randonnée, pêche au gros. Parcs nationaux, cascades, lagons turquoise. Un terrain de jeu grandeur nature à votre porte.",
    color: "from-emerald-600 to-green-600",
  },
];

const temoignages = [
  {
    prenom: "Sophie & Marc",
    profil: "Famille, 2 enfants — Installés depuis 2022",
    texte:
      "Nous cherchions un cadre de vie plus sain pour nos enfants. À Maurice, ils vont à l'école en anglais et en français, font du surf le week-end et grandissent dans un environnement multiculturel. C'est exactement ce qu'on voulait.",
  },
  {
    prenom: "Thomas",
    profil: "Entrepreneur digital — Installé depuis 2021",
    texte:
      "Le fuseau horaire GMT+4 est parfait pour travailler avec l'Europe le matin et l'Asie l'après-midi. La fibre est fiable, les cafés de coworking se multiplient, et le week-end je suis à la plage. Difficile de faire mieux.",
  },
  {
    prenom: "Anne & Jean-Luc",
    profil: "Retraités — Installés depuis 2023",
    texte:
      "Après 35 ans à Paris, on avait besoin de douceur. Le climat, le rythme de vie, la gentillesse des Mauriciens — tout est réuni. Et avec le Retirement Permit, les démarches ont été très simples grâce à Vanille Stratégie.",
  },
];

const faq = [
  {
    q: "Maurice est-elle sûre pour une famille avec enfants ?",
    a: "Oui. Maurice est le pays le mieux gouverné d'Afrique (Mo Ibrahim Index), le 23e pays le plus sûr au monde (Global Peace Index 2025) et le pays le plus heureux du continent (ONU, 2025). La criminalité est faible, les écoles internationales sont sécurisées, et la communauté expatriée est très soudée.",
  },
  {
    q: "La qualité des soins médicaux est-elle suffisante ?",
    a: "Les cliniques privées (Wellkin, C-Care, Fortis) offrent un niveau de soins excellent pour la médecine générale, la chirurgie courante et les urgences. Pour les pathologies très spécifiques, Singapour ou l'Inde (à 4-5h de vol) sont les destinations de référence. Une assurance santé internationale avec option rapatriement est recommandée.",
  },
  {
    q: "Le coût de la vie est-il vraiment inférieur à la France ?",
    a: "En moyenne, oui. Le logement, la restauration, les loisirs et la fiscalité sont significativement moins chers. Les produits importés (fromages, vins français) et la scolarité internationale peuvent en revanche être comparables. Le gain global est généralement de 20 à 40 % selon le mode de vie.",
  },
  {
    q: "Internet est-il fiable pour le télétravail ?",
    a: "Oui. Maurice dispose de 3 câbles sous-marins fibre optique assurant une connectivité internationale redondante, avec des débits de 100 Mbps et plus. Les principales zones résidentielles et commerciales sont couvertes. Les coupures sont rares. De nombreux espaces de coworking disposent de connexions redondantes.",
  },
  {
    q: "Comment fonctionne le système scolaire ?",
    a: "Maurice offre le choix entre le système public (gratuit, en anglais), les écoles privées locales et les écoles internationales. Le Lycée La Bourdonnais (AEFE) suit le programme français du primaire au bac. Northfields propose le baccalauréat international (IB). L'inscription se fait généralement 6 à 12 mois à l'avance.",
  },
];

export default function CadreDeViePage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-teal-600">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/mobility" className="hover:text-teal-600">
              Vanille Mobility
            </Link>
            <span>/</span>
            <span className="font-medium text-slate-900">Cadre de vie</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/lifestyle-maurice.jpg"
            alt="Cadre de vie exceptionnel à l'Île Maurice"
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
              Vanille Mobility — Lifestyle
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Le cadre de vie{" "}
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                qui change tout
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Climat tropical, sécurité, écoles internationales, communauté francophone — découvrez pourquoi Maurice séduit des milliers de familles, entrepreneurs et retraités chaque année.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 px-8 h-14 text-lg font-bold shadow-lg shadow-teal-500/20"
                >
                  Planifier votre expatriation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-200/50 to-transparent" />

      {/* Chiffres clés */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Maurice en chiffres
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Les indicateurs qui font de Maurice l&apos;une des destinations d&apos;expatriation les plus prisées au monde.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {chiffres.map((c) => (
              <Card
                key={c.label}
                className="p-8 border-none shadow-sm text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 mx-auto mb-4">
                  <c.icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-black text-slate-900">{c.stat}</p>
                <p className="text-sm font-bold text-teal-600 uppercase tracking-widest mt-1">
                  {c.label}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">{c.source}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Cards */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Un cadre de vie exceptionnel
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Climat, sécurité, santé, éducation, communauté — Maurice coche toutes les cases pour une expatriation réussie.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {lifestyleCards.map((card) => (
              <Card
                key={card.title}
                className="overflow-hidden border-none shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`bg-gradient-to-br ${card.color} p-6 text-white`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm mb-4">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{card.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 24h à Maurice */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              24 heures à Maurice
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Une journée type pour un entrepreneur expatrié. Pas une parenthèse — votre quotidien.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-0">
            {[
              { heure: "06:30", titre: "Réveil face à l'océan", description: "Café sur la terrasse, pieds dans l'herbe, le lagon turquoise à perte de vue. 25 °C, ciel dégagé — comme presque tous les matins de l'année." },
              { heure: "07:30", titre: "Sport en plein air", description: "Jogging sur la plage de Mont Choisy, paddle au lever du soleil, ou session de yoga. La nature est votre salle de sport." },
              { heure: "09:00", titre: "Début de journée de travail", description: "Votre bureau ou un espace de coworking à Ébène, Moka ou Grand Baie. La fibre optique est fiable, le fuseau GMT+4 offre un overlap parfait avec l'Europe." },
              { heure: "12:30", titre: "Déjeuner les pieds dans le sable", description: "Un fish vindaye dans une paillote de pêcheur, un poké bowl dans un restaurant de plage, ou un plateau de fruits tropicaux. Le choix est quotidien." },
              { heure: "14:00", titre: "Réunions et visioconférences", description: "Vos clients et partenaires européens sont encore en ligne jusqu'en fin d'après-midi. L'Asie commence à se réveiller. Votre position géographique est un avantage stratégique." },
              { heure: "17:00", titre: "Fin de journée, début du spectacle", description: "Coucher de soleil sur la côte ouest — Tamarin, Flic en Flac, Le Morne. Un spectacle naturel qui ne lasse jamais, à 15 minutes de votre bureau." },
              { heure: "19:00", titre: "Dîner entre amis", description: "Cuisine mauricienne, indienne, chinoise, française — Maurice est un carrefour gastronomique. La communauté expatriée est active, chaleureuse et connectée." },
              { heure: "21:00", titre: "Sérénité", description: "Bruit des vagues, ciel étoilé sans pollution lumineuse. Demain recommence, identique et pourtant différent. C'est cela, vivre à Maurice." },
            ].map((moment, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white text-xs font-bold shadow-lg shadow-teal-500/20">
                    {moment.heure}
                  </div>
                  {i < 7 && <div className="w-px flex-1 bg-gradient-to-b from-teal-300 to-teal-100 my-2" />}
                </div>
                <div className="pb-10">
                  <h3 className="text-lg font-bold text-slate-900">{moment.titre}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{moment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classements internationaux */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">Sources internationales vérifiées · 2025</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Les classements qui positionnent Maurice
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Des données factuelles, issues d&apos;institutions reconnues mondialement.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { stat: "#1 Afrique", label: "Liberté économique", source: "Heritage Foundation 2025 — 15e mondial" },
              { stat: "#1 Afrique", label: "Bonheur", source: "ONU World Happiness Report 2025 — 78e mondial" },
              { stat: "#1 Afrique", label: "Gouvernance", source: "Mo Ibrahim Index — depuis 2007" },
              { stat: "23e mondial", label: "Pays le plus sûr", source: "Global Peace Index 2025" },
              { stat: "88e mondial", label: "Qualité de vie Mercer", source: "1er Afrique — devant l'Afrique du Sud" },
              { stat: "13e mondial", label: "Facilité des affaires", source: "Doing Business (Banque Mondiale) — 1er Afrique" },
            ].map((r) => (
              <div key={r.label} className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm hover:bg-white/10 transition-all">
                <p className="text-3xl font-black text-teal-400 lg:text-4xl">{r.stat}</p>
                <p className="mt-2 text-sm font-bold text-white uppercase tracking-wider">{r.label}</p>
                <p className="mt-2 text-xs text-slate-400">{r.source}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/maurice" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors">
              Tous les classements et données sur Maurice
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Comparatif France vs Maurice */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              France vs Maurice : le comparatif
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Un aperçu réaliste du coût de la vie et de la fiscalité entre les deux pays.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
                  <th className="px-6 py-4 text-left font-bold">Catégorie</th>
                  <th className="px-6 py-4 text-left font-bold">France</th>
                  <th className="px-6 py-4 text-left font-bold">Maurice</th>
                  <th className="px-6 py-4 text-left font-bold">Avantage</th>
                </tr>
              </thead>
              <tbody>
                {comparatif.map((row, i) => (
                  <tr
                    key={row.categorie}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-slate-50"
                    } hover:bg-teal-50/50 transition-colors`}
                  >
                    <td className="px-6 py-4 font-bold text-slate-900">
                      {row.categorie}
                    </td>
                    <td className="px-6 py-4 text-slate-600">{row.france}</td>
                    <td className="px-6 py-4 text-slate-600">{row.maurice}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                          row.avantage === "Maurice"
                            ? "bg-teal-50 text-teal-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {row.avantage}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs text-slate-400 text-center">
            Estimations indicatives basées sur un couple avec 2 enfants, dans un bon quartier. Les montants peuvent varier selon le mode de vie.
          </p>
        </div>
      </section>

      {/* Témoignages */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Ils ont choisi Maurice
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Témoignages de familles, entrepreneurs et retraités accompagnés par Vanille Stratégie.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {temoignages.map((t, i) => (
              <Card
                key={i}
                className="p-8 border-none shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
                    {t.prenom[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{t.prenom}</p>
                    <p className="text-xs text-slate-500">{t.profil}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  &laquo; {t.texte} &raquo;
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quartiers recommandés */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Où s&apos;installer à Maurice ?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Les quartiers et régions les plus prisés par les expatriés francophones.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quartier: "Grand Baie & Pereybère",
                type: "Nord",
                description:
                  "Le quartier préféré des expatriés. Plages, restaurants, commerces, vie nocturne. Proche du Lycée La Bourdonnais.",
                ideal: "Familles, entrepreneurs, digital nomads",
              },
              {
                quartier: "Tamarin & Black River",
                type: "Ouest",
                description:
                  "Ambiance surf et nature. Couchers de soleil spectaculaires, dauphins, communauté expat grandissante. Proche de l'école Northfields.",
                ideal: "Familles actives, amoureux de la nature",
              },
              {
                quartier: "Flic en Flac",
                type: "Ouest",
                description:
                  "Grande plage de sable blanc, vie locale animée, bon rapport qualité-prix. Accès facile à Quatre Bornes et Ebène.",
                ideal: "Retraités, couples, budget modéré",
              },
              {
                quartier: "Moka & Ébène",
                type: "Centre",
                description:
                  "Pôle d'affaires et technologique. Smart City, bureaux modernes, climat plus frais. Proche de l'université et des écoles.",
                ideal: "Entrepreneurs, cadres, startups",
              },
              {
                quartier: "Rivière Noire & Le Morne",
                type: "Sud-Ouest",
                description:
                  "Résidences PDS et IRS haut de gamme. Kitesurf de renommée mondiale, golf, calme absolu.",
                ideal: "Investisseurs, retraités aisés",
              },
              {
                quartier: "Trou aux Biches & Mont Choisy",
                type: "Nord-Ouest",
                description:
                  "Plages parmi les plus belles de l'île, ambiance familiale, infrastructures en développement rapide.",
                ideal: "Familles, retraités",
              },
            ].map((q, i) => (
              <Card
                key={i}
                className="p-6 border-none shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4 text-teal-500" />
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">
                    {q.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {q.quartier}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {q.description}
                </p>
                <p className="mt-3 text-xs font-bold text-slate-400">
                  Idéal pour : {q.ideal}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Questions fréquentes
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Les questions que se posent les futurs expatriés sur le cadre de vie à Maurice.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faq.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-teal-200 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-teal-500 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900">{item.q}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-teal-600/10 text-teal-500 mb-8 border border-teal-500/20">
            <Sun className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Prêt pour{" "}
            <br />
            <span className="text-teal-400">votre nouvelle vie ?</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Didier Laroussinie et son équipe vous accompagnent dans chaque étape de votre expatriation. Diagnostic gratuit et confidentiel.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-teal-500/20"
              >
                Diagnostic gratuit de votre projet
              </Button>
            </Link>
            <Link href="/mobility">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-12 h-16 text-lg font-bold"
              >
                Tous les parcours Mobility
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
