import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  TreePalm,
  Home,
  Building2,
  Globe,
  Layout,
  Bed,
  CheckCircle2,
  ShieldCheck,
  Search,
  Key,
  ArrowRight,
  TrendingUp,
  MapPin
} from "lucide-react";

export const metadata: Metadata = {
  title: "Immobilier & Patrimoine Maurice — Investissement, IRS, PDS, Smart City",
  description: "Conseil en investissement immobilier à Maurice. IRS, PDS, Smart City, G+2. Audit rigoureux, accompagnement achat/location.",
};

export default function ImmobilierPage() {
  const schemes = [
    { slug: "irs", name: "IRS", full: "Integrated Resort Scheme", icon: TreePalm, desc: "Résidences de luxe dans des domaines intégrés avec golf, spa et services." },
    { slug: "res", name: "RES", full: "Real Estate Scheme", icon: Home, desc: "Projets résidentiels de taille moyenne, souvent proches des centres animés." },
    { slug: "pds", name: "PDS", full: "Property Development Scheme", icon: Building2, desc: "Développements immobiliers modernes remplaçant l'IRS et le RES." },
    { slug: "smart-city", name: "Smart City", full: "Smart City Scheme", icon: Globe, desc: "Villes intelligentes mixtes (travail, loisirs, résidentiel). Projets d'envergure." },
    { slug: "ground-plus-2", name: "G+2", full: "Ground + 2 Apartment", icon: Layout, desc: "Appartements en copropriété (R+2 minimum) — l'option la plus accessible." },
    { slug: "invest-hotel-scheme", name: "IHS", full: "Invest Hotel Scheme", icon: Bed, desc: "Acquisition d'une chambre ou suite hôtelière avec revenus locatifs garantis." },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image 
            src="/images/villa-luxe.jpg" 
            alt="Villa luxe Maurice" 
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
              Services — Vanille Immobilier
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Votre patrimoine <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">sous les tropiques</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Investissement locatif, acquisition de résidence principale ou conseil patrimonial. Nous sélectionnons uniquement les projets audités et validés.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                  Voir les opportunités
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Schemes Grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Programmes éligibles au permis de résidence</h2>
              <p className="mt-4 text-lg text-slate-600">
                L&apos;acquisition d&apos;un bien immobilier à Maurice peut vous ouvrir les portes de la résidence permanente pour vous et votre famille.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl max-w-sm">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-sm mb-1 uppercase tracking-tight">
                <TrendingUp className="h-4 w-4" />
                <span>Rappel Loi Finance 2026</span>
              </div>
              <p className="text-xs text-amber-800 leading-snug">
                Investissement min : 375 000 $ <br />
                Droits d&apos;enregistrement : 10%
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {schemes.map((p, idx) => (
              <Card 
                key={p.name} 
                className="group flex flex-col p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-slate-100 bg-white"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{p.name}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{p.full}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1 italic">{p.desc}</p>
                <div className="mt-6 pt-6 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link href={`/services/immobilier/${p.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                    Détails du programme <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/grand-baie.jpg" 
                alt="Immobilier Grand Baie" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/20" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
                Une approche <br />
                <span className="text-blue-600">audité et sécurisée</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Contrairement aux agences classiques, Vanille Immobilier agit comme votre conseil exclusif. Nous auditons les promoteurs et les garanties financières avant de vous proposer un bien.
              </p>
              
              <div className="mt-10 space-y-6">
                {[
                  { title: "Audit promoteur", desc: "Vérification des antécédents et de la solidité financière.", icon: ShieldCheck },
                  { title: "Validation GFA", desc: "Garantie Financière d'Achèvement systématique.", icon: CheckCircle2 },
                  { title: "Sourcing Off-Market", desc: "Accès à des pépites avant leur mise sur le marché.", icon: Search },
                  { title: "Gestion locative", desc: "Mise en place et suivi via notre pôle BD Star.", icon: Key }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles liés */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-slate-900">Articles liés</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { href: "/ressources/blog/succession-internationale-france-maurice", title: "Succession internationale France-Maurice", desc: "Règles successorales, convention bilatérale et planification patrimoniale." },
              { href: "/ressources/blog/qualite-de-vie-maurice-lifestyle-golf-business", title: "Qualité de vie à Maurice", desc: "Lifestyle, golf, business : pourquoi Maurice séduit les investisseurs." },
            ].map((a) => (
              <Link key={a.href} href={a.href}>
                <div className="group rounded-xl border bg-white p-4 transition-all hover:shadow-md hover:border-blue-300">
                  <h4 className="font-bold text-slate-900 group-hover:text-blue-600">{a.title}</h4>
                  <p className="mt-1 text-sm text-slate-500">{a.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Investir dans l'immobilier à Maurice */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Investir dans l&apos;immobilier à Maurice</h2>
            <p className="mt-4 text-lg text-slate-600">
              Maurice offre un cadre juridique sécurisé et une fiscalité exceptionnelle pour les investisseurs immobiliers étrangers.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Le Property Development Scheme (PDS)</h3>
                <p className="text-slate-600 leading-relaxed">
                  Le PDS est le principal dispositif permettant aux étrangers d&apos;acquérir un bien immobilier à Maurice. Il remplacé depuis 2015 les anciens schémas IRS (Integrated Resort Scheme) et RES (Real Estate Scheme). Un projet PDS doit comprendre au minimum 6 unités résidentielles et être développé sur un terrain d&apos;au moins 0,4220 hectare (1 arpent). Le promoteur doit obtenir l&apos;approbation de l&apos;Economic Development Board (EDB) et respecter des critères stricts de qualité architecturale, d&apos;aménagement paysager et de services aux résidents (sécurité, conciergerie, entretien). L&apos;investissement minimum est de 375 000 USD (seuil relevé en 2024), et l&apos;acheteur ainsi que ses personnes à charge obtiennent automatiquement un permis de résidence à Maurice, valable tant qu&apos;il reste propriétaire du bien.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Le Smart City Scheme</h3>
                <p className="text-slate-600 leading-relaxed">
                  Les Smart Cities sont des projets urbains d&apos;envergure combinant espaces résidentiels, bureaux, commerces, espaces verts et équipements communautaires. Conçues pour attirer les investisseurs internationaux et les entreprises innovantes, les Smart Cities offrent un cadre de vie moderne inspiré des meilleurs standards internationaux. Les étrangers peuvent y acquérir des appartements ou des villas à partir de 375 000 USD, avec le même avantage de permis de résidence que le PDS. Les projets phares incluent Moka Smart City (développé par le groupe ENL), Cap Tamarin et Beau Plan. Les résidents d&apos;une Smart City bénéficient souvent d&apos;infrastructures premium : fibre optique, espaces de coworking, écoles internationales et centres sportifs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Conditions d&apos;achat pour les étrangers</h3>
                <p className="text-slate-600 leading-relaxed">
                  Un étranger (non-citoyen mauricien) ne peut acquérir un bien immobilier à Maurice que dans le cadre d&apos;un schéma approuvé par l&apos;EDB : PDS, Smart City, G+2 (appartement en copropriété de 2 étages minimum au-dessus du rez-de-chaussée) ou IHS (Invest Hotel Scheme). Le seuil d&apos;investissement minimum est de 375 000 USD pour les PDS et Smart Cities, tandis que les G+2 n&apos;ont pas de seuil minimum mais ne donnent pas accès au permis de résidence en dessous de ce montant. L&apos;acquisition est soumise à des droits d&apos;enregistrement de 5 % pour les biens résidentiels, portés à 10 % depuis la Finance Act 2024 pour les transactions supérieures à certains seuils. Un notaire mauricien doit obligatoirement intervenir pour la rédaction de l&apos;acte de vente.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Investissement locatif et rendement</h3>
                <p className="text-slate-600 leading-relaxed">
                  L&apos;investissement locatif à Maurice offre des rendements bruts attractifs, généralement compris entre 4 % et 7 % selon la localisation et le type de bien. Les locations saisonnières (Airbnb, Booking) dans les zones touristiques comme Grand Baie ou Flic-en-Flac peuvent générer des rendements supérieurs, jusqu&apos;à 8 à 10 % en haute saison (octobre à avril). L&apos;avantage majeur est l&apos;absence totale de taxe sur les plus-values immobilières à Maurice : vous revendez votre bien sans aucun impôt sur la plus-value réalisée. Les revenus locatifs sont imposés au taux standard de 15 %, avec possibilité de déduire les charges d&apos;entretien, de gestion et d&apos;amortissement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Permis de résidence via l&apos;immobilier</h3>
                <p className="text-slate-600 leading-relaxed">
                  L&apos;acquisition d&apos;un bien immobilier d&apos;une valeur minimale de 375 000 USD dans un schéma PDS, Smart City ou IHS donne automatiquement droit à un permis de résidence pour l&apos;acheteur, son conjoint et ses enfants à charge de moins de 24 ans. Ce permis est valable tant que le bien reste la propriété de l&apos;investisseur. Il permet de vivre, travailler et scolariser ses enfants à Maurice. Après 10 ans de résidence continue, il est possible de demander la résidence permanente (Permanent Résidence Permit). Les titulaires d&apos;un permis de résidence bénéficient de la fiscalité avantageuse de Maurice : flat tax de 15 %, absence de taxe sur les plus-values, absence de droits de succession et convention de non double imposition avec la France.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Financement bancaire à Maurice</h3>
                <p className="text-slate-600 leading-relaxed">
                  Les banques mauriciennes (MCB, SBM, AfrAsia, ABC Banking) proposent des financements immobiliers aux non-résidents, généralement à hauteur de 50 à 70 % de la valeur du bien. Les taux d&apos;intérêt varient entre 5 % et 7 % pour les prêts en USD ou EUR, et entre 6 % et 9 % pour les prêts en MUR. La durée maximale est de 20 à 25 ans. Les dossiers sont évalués sur la base des revenus mondiaux de l&apos;emprunteur. Il est également possible de financer l&apos;acquisition depuis la France via un prêt hypothécaire sur un bien existant ou via un crédit Lombard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones prisées */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Zones prisées pour investir à Maurice</h2>
            <p className="mt-4 text-lg text-slate-600">
              Chaque région de Maurice à ses atouts. Voici les zones les plus recherchées par les investisseurs internationaux.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Grand Baie</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Capitale touristique du nord, Grand Baie est la zone la plus prisée pour l&apos;investissement locatif. Ambiance cosmopolite, restaurants, boutiques de luxe et proximité des plus belles plages (Trou aux Biches, Mont Choisy, Péreybère). Les prix des appartements PDS démarrent autour de 400 000 USD, tandis que les villas IRS/PDS haut de gamme peuvent dépasser 2 millions USD. Rendement locatif estimé : 5 à 7 %.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Tamarin &amp; Rivière Noire</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                La côte ouest attire une communauté d&apos;expatriés séduite par le climat sec, les couchers de soleil spectaculaires et la proximité du Morne Brabant (patrimoine UNESCO). Tamarin offre un cadre de vie authentique avec surf, dauphins et montagne. Les projets PDS y sont nombreux, avec des prix démarrant à 380 000 USD pour un appartement et 600 000 USD pour une villa. Le développement du Black River Business Park renforcé l&apos;attrait de la zone.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Flic-en-Flac</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Station balnéaire populaire de la côte ouest, Flic-en-Flac est prisée pour ses longues plages de sable blanc et son lagon turquoise. La zone attire une forte demande locative, tant touristique que résidentielle. Les appartements en G+2 sont accessibles à partir de 150 000 USD, ce qui en fait une porte d&apos;entrée abordable pour l&apos;investissement immobilier à Maurice. La proximité de Quatre Bornes et de la Cybercité d&apos;Ébène offre un accès rapide aux zones d&apos;emploi.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Moka &amp; Bagatelle</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Située dans les hauteurs du plateau central, Moka est devenue le pôle business et résidentiel le plus dynamique de l&apos;île grâce au projet Moka Smart City. Le complexe Bagatelle (plus grand centre commercial de l&apos;océan Indien), les espaces de coworking, les écoles internationales et les parcs naturels en font un lieu de vie complet. Les prix des appartements Smart City démarrent à 200 000 USD, et les maisons entre 400 000 et 1 million USD.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Bel Ombre</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Au sud de l&apos;île, Bel Ombre incarne le luxe discret et la nature préservée. Le domaine Heritage (golf 18 trous, spa, réserve naturelle de Frédérica) abrite des villas d&apos;exception dans un écrin de verdure face à l&apos;océan. Les prix des villas PDS démarrent à 800 000 USD et peuvent atteindre 5 millions USD pour les propriétés les plus exclusives. Idéal pour les investisseurs cherchant calme, prestige et rendement locatif premium via les marques hôtelières affiliées.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Pointe d&apos;Esny &amp; Blue Bay</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Le sud-est de Maurice, avec le parc marin de Blue Bay et les plages immaculées de Pointe d&apos;Esny, offre un cadre naturel exceptionnel. Cette zone, moins développée que le nord et l&apos;ouest, représente une opportunité pour les investisseurs visionnaires. Les prix sont encore relativement accessibles et la demande locative est en croissance constante. Des projets PDS de qualité y voient le jour, portés par la beauté des lieux et la proximité de l&apos;aéroport international.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fiscalité immobilière */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Fiscalité immobilière à Maurice</h2>
            <p className="mt-4 text-lg text-slate-600">
              Un cadre fiscal parmi les plus avantageux au monde pour les investisseurs immobiliers.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Taxe foncière", desc: "Aucune taxe foncière annuelle à Maurice. Vous ne payez pas d'impôt sur la détention de votre bien, contrairement à la France (taxe foncière) ou aux États-Unis (property tax)." },
              { title: "Taxe d'habitation", desc: "Aucune taxe d'habitation à Maurice. Que le bien soit votre résidence principale ou secondaire, aucune contribution locale n'est due pour le simple fait d'y habiter." },
              { title: "Plus-values : 0 %", desc: "Il n'existe aucun impôt sur les plus-values immobilières à Maurice. La totalité du gain réalisé lors de la revente vous revient, quel que soit le délai de détention du bien." },
              { title: "Droits de succession : 0 %", desc: "Maurice n'applique aucun droit de succession. La transmission de votre patrimoine immobilier à vos héritiers se fait sans aucune ponction fiscale, un avantage considérable pour la planification patrimoniale." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus d'achat */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Processus d&apos;achat immobilier à Maurice</h2>
            <p className="mt-4 text-lg text-slate-600">
              De la première visite à la remise des clés, voici les étapes clés d&apos;une acquisition immobilière réussie.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Sélection et visite", desc: "Nous identifions les biens correspondant à vos critères (budget, zone, type de schéma) et organisons les visites. Chaque bien est préalablement audité par notre équipe : vérification du promoteur, de la GFA (Garantie Financière d'Achèvement), du titre de propriété et des autorisations EDB." },
              { step: "2", title: "Réservation et offre d'achat", desc: "Une fois le bien choisi, vous signez une lettre de réservation accompagnée d'un dépôt de garantie (généralement 10 % du prix). Ce dépôt est versé sur un compte séquestre chez le notaire. L'offre précise les conditions suspensives éventuelles (obtention de financement, approbation EDB)." },
              { step: "3", title: "Due diligence et vérifications", desc: "Notre équipe réalise un audit complet : vérification du titre de propriété au Bureau des Hypothèques, conformité du projet aux normes EDB, analyse des comptes du promoteur, vérification des permis de construire et des certifications environnementales. Cette étape dure généralement 4 à 8 semaines." },
              { step: "4", title: "Acte de vente notarié", desc: "L'acte de vente est rédigé par un notaire mauricien (obligatoire). Les droits d'enregistrement sont de 5 % du prix de vente pour les biens résidentiels. Les frais de notaire représentent environ 1 à 2 % supplémentaires. L'acte est signé en présence des deux parties et enregistré au Registrar Général's Department." },
              { step: "5", title: "Demande de permis de résidence", desc: "Pour les acquisitions de 375 000 USD et plus dans un schéma PDS ou Smart City, la demande de permis de résidence est déposée simultanément auprès de l'EDB. Le délai de traitement est de 4 à 6 semaines. Le permis couvre l'acquéreur, son conjoint et ses enfants à charge." },
              { step: "6", title: "Remise des clés et gestion", desc: "Pour les biens en VEFA (Vente en l'État Futur d'Achèvement), la livraison intervient à la date prévue au contrat. Nous organisons la réception du bien, le procès-verbal de livraison et, si vous le souhaitez, la mise en gestion locative via notre pôle BD Star Management Services." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex gap-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ immobilier */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">FAQ — Immobilier à Maurice</h2>
            <p className="mt-4 text-lg text-slate-600">
              Les questions les plus fréquentes de nos clients sur l&apos;investissement immobilier à Maurice.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Un étranger peut-il acheter librement un bien à Maurice ?",
                a: "Non, un étranger ne peut acheter qu'au sein d'un schéma approuvé par l'EDB : PDS, Smart City, G+2 ou IHS. L'achat d'un terrain nu ou d'une maison individuelle hors schéma est interdit. Cette réglementation protège le marché immobilier local tout en offrant un cadre sécurisé aux investisseurs internationaux."
              },
              {
                q: "Quel est le seuil minimum d'investissement pour obtenir un permis de résidence ?",
                a: "Depuis la Finance Act 2024, le seuil minimum est de 375 000 USD (contre 500 000 USD auparavant pour l'IRS). Ce seuil s'applique aux PDS, Smart City et IHS. Les appartements en G+2 n'offrent un permis de résidence que si le montant atteint ce seuil. Le permis est valable tant que vous restez propriétaire du bien."
              },
              {
                q: "Y a-t-il des frais annuels de copropriété ?",
                a: "Oui, la plupart des projets PDS et Smart City comportent des charges de copropriété mensuelles couvrant la sécurité, l'entretien des espaces communs, la piscine, le jardin et la conciergerie. Ces charges varient de 200 à 800 USD par mois selon le standing du projet. Dans les IRS haut de gamme, elles peuvent atteindre 1 500 USD par mois."
              },
              {
                q: "Peut-on revendre son bien librement ?",
                a: "Oui, la revente est libre et sans contrainte de durée de détention. Il n'y a aucune taxe sur la plus-value réalisée. Le nouvel acquéreur étranger doit respecter les mêmes conditions d'achat (schéma approuvé, seuil minimum). Les droits d'enregistrement à la revente sont à la charge de l'acheteur."
              },
              {
                q: "Comment fonctionne la gestion locative à distance ?",
                a: "Notre pôle BD Star Management Services assure la gestion complète de votre bien : recherche de locataires, état des lieux, encaissement des loyers, maintenance et reporting mensuel. Nous gérons aussi bien la location longue durée que la location saisonnière (Airbnb, Booking). Les frais de gestion représentent généralement 10 à 15 % des revenus locatifs."
              },
              {
                q: "La convention fiscale France-Maurice protège-t-elle les investisseurs français ?",
                a: "Oui, la convention de non double imposition entre la France et Maurice (signée en 1980, révisée en 2011) évite la double taxation. Les revenus immobiliers de source mauricienne sont imposés à Maurice (15 %) et bénéficient d'un crédit d'impôt en France. Les plus-values immobilières ne sont pas taxées à Maurice. Un conseil en fiscalité internationale est recommandé pour optimiser votre situation."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24 relative">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/ocean-turquoise.jpg" alt="Ocean" fill className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            <MapPin className="h-3.5 w-3.5" />
            <span>Grand Baie · Rivière Noire · Tamarin · Pointe d&apos;Esny</span>
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Envie d&apos;investir à Maurice ?</h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Nos conseillers vous proposent une sélection de biens validés, du pied-à-terre au bord de l&apos;eau à la villa d&apos;exception.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-10 h-14 text-lg font-bold shadow-xl shadow-blue-500/25">
                Demander la sélection actuelle
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
