import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder } from "@/data/site";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "L'Investissement Immobilier à l'Île Maurice : Guide Complet 2025 | Vanille Stratégie",
  description:
    "Guide complet sur l'investissement immobilier à Maurice : PDS, Smart City, G+2, résidence par investissement, fiscalité, nouvelles règles 2024-2025. Par Didier Laroussinie.",
  keywords: [
    "investissement immobilier ile maurice",
    "PDS Maurice",
    "Smart City Maurice",
    "résidence par investissement Maurice",
    "fiscalité immobilière Maurice",
    "G+2 Maurice",
    "Land Transfer Tax Maurice",
  ],
  openGraph: {
    title:
      "L'Investissement Immobilier à l'Île Maurice : Guide Complet 2025",
    description:
      "Guide complet sur l'investissement immobilier à Maurice : PDS, Smart City, G+2, résidence par investissement, fiscalité, nouvelles règles 2024-2025.",
    type: "article",
    locale: "fr_FR",
    siteName: "Vanille Stratégie",
    images: [{ url: "https://vanillestrategie.fr/images/hero-paradise.jpg" }],
  },
  alternates: {
    canonical:
      "https://vanillestrategie.fr/ressources/blog/investissement-immobilier-ile-maurice-guide-2025",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "L'Investissement Immobilier à l'Île Maurice : Guide Complet 2025 | Vanille Stratégie",
    description:
      "Guide complet sur l'investissement immobilier à Maurice : PDS, Smart City, G+2, résidence par investissement, fiscalité, nouvelles règles 2024-2025. Par Didier Laroussinie.",
    images: ["https://vanillestrategie.fr/images/hero-paradise.jpg"],
  },
};

/* ------------------------------------------------------------------ */
/*  Callout component                                                  */
/* ------------------------------------------------------------------ */

type CalloutVariant = "amber" | "blue" | "red" | "green";

const calloutStyles: Record<
  CalloutVariant,
  { wrapper: string; icon: string; title: string }
> = {
  amber: {
    wrapper: "border-amber-300 bg-amber-50",
    icon: "\u26A0\uFE0F",
    title: "text-amber-800",
  },
  blue: {
    wrapper: "border-blue-300 bg-blue-50",
    icon: "\uD83D\uDCA1",
    title: "text-blue-800",
  },
  red: {
    wrapper: "border-red-300 bg-red-50",
    icon: "\uD83D\uDED1",
    title: "text-red-800",
  },
  green: {
    wrapper: "border-green-300 bg-green-50",
    icon: "\u2705",
    title: "text-green-800",
  },
};

function Callout({
  variant,
  title,
  children,
}: {
  variant: CalloutVariant;
  title: string;
  children: React.ReactNode;
}) {
  const s = calloutStyles[variant];
  return (
    <div className={`my-8 rounded-xl border-l-4 p-5 ${s.wrapper}`}>
      <p className={`mb-2 text-sm font-bold ${s.title}`}>
        {s.icon} {title}
      </p>
      <div className="text-sm leading-relaxed text-slate-700">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section wrapper                                                    */
/* ------------------------------------------------------------------ */

function Section({
  id,
  bg,
  children,
}: {
  id?: string;
  bg: "white" | "slate";
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`py-14 ${bg === "slate" ? "bg-slate-50" : "bg-white"}`}
    >
      <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function InvestissementImmobilierGuidePage() {
  return (
    <>
      <BlogPostingJsonLd
        title="L&apos;Investissement Immobilier à l&apos;Île Maurice : Guide Complet 2025 | Vanille Stratégie"
        description="Guide complet sur l&apos;investissement immobilier à Maurice : PDS, Smart City, G+2, résidence par investissement, fiscalité, nouvelles règles 2024-2025. Par Didier Laroussinie."
        slug="investissement-immobilier-ile-maurice-guide-2025"
        datePublished="2025-12-10"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/ressources/blog" },
          {
            name: "L&apos;Investissement Immobilier à l&apos;Île Maurice : Guide Complet 2025",
            url: "/ressources/blog/investissement-immobilier-ile-maurice-guide-2025",
          },
        ]}
      />

      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/ressources/blog"
            className="text-sm text-blue-400 hover:underline"
          >
            &larr; Tous les articles
          </Link>

          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-full bg-orange-500/20 px-2 py-0.5 text-xs font-medium text-orange-300">
              Immobilier
            </span>
            <span className="text-xs text-slate-500">Décembre 2025</span>
            <span className="text-xs text-slate-500">&middot; 22 min</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            L&apos;Investissement Immobilier à l&apos;Île Maurice : Guide
            Complet 2025
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            PDS, Smart City, G+2, résidence par investissement, fiscalité,
            nouvelles règles 2024-2025 : tout ce qu&apos;il faut savoir avant
            d&apos;investir dans l&apos;immobilier à Maurice.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-bold text-white">
              DL
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{founder.name}</p>
              <p className="text-xs text-slate-400">{founder.title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TABLE DES MATIERES ===== */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
            Sommaire
          </p>
          <ol className="mt-3 list-inside list-decimal space-y-1 text-sm text-blue-700">
            <li>
              <a href="#pourquoi" className="hover:underline">
                Pourquoi l&apos;investissement immobilier à Maurice séduit
                encore en 2025
              </a>
            </li>
            <li>
              <a href="#qui-peut-acheter" className="hover:underline">
                Qui peut acheter un bien immobilier à Maurice et dans quelles
                conditions ?
              </a>
            </li>
            <li>
              <a href="#types-projets" className="hover:underline">
                Les grands types de projets immobiliers : PDS, Smart City,
                IRS/RES, G+2
              </a>
            </li>
            <li>
              <a href="#residence-investissement" className="hover:underline">
                Résidence par investissement : transformer un bien en titre de
                séjour
              </a>
            </li>
            <li>
              <a href="#nouvelles-regles" className="hover:underline">
                Nouvelles règles 2024-2025 : paiement en roupies,
                enregistrement et Land Transfer Tax
              </a>
            </li>
            <li>
              <a href="#fiscalite" className="hover:underline">
                Fiscalité mauricienne : ce que doit savoir un investisseur
              </a>
            </li>
            <li>
              <a href="#choisir-projet" className="hover:underline">
                Acheter, oui… mais comment choisir son projet immobilier ?
              </a>
            </li>
            <li>
              <a href="#vivre-maurice" className="hover:underline">
                Vivre à Maurice : ce qu&apos;il y a derrière la carte postale
              </a>
            </li>
            <li>
              <a href="#immobilier-entreprise" className="hover:underline">
                Lien entre immobilier et création d&apos;entreprise
              </a>
            </li>
            <li>
              <a href="#risques" className="hover:underline">
                Les risques et les erreurs classiques à éviter
              </a>
            </li>
            <li>
              <a href="#accompagnement" className="hover:underline">
                Pourquoi se faire accompagner et comment Vanille Stratégie peut
                vous aider
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* ===== 1. POURQUOI ===== */}
      <Section id="pourquoi" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          1. Pourquoi l&apos;investissement immobilier à Maurice séduit encore
          en 2025
        </h2>
        <p>
          Si Maurice reste aussi attractive, ce n&apos;est pas seulement parce
          que les plages sont belles. C&apos;est parce qu&apos;en toile de fond,
          on trouve un cocktail assez rare : stabilité politique, État de droit,
          bilinguisme anglais/français, infrastructures modernes, secteur
          financier sophistiqué et fiscalité raisonnable.
        </p>
        <p>
          La plupart des investisseurs combinent trois motivations : la recherche
          d&apos;un placement patrimonial dans une monnaie alternative (roupie
          mauricienne), dans une zone géographique différente de l&apos;Europe ;
          la volonté de se créer une porte de sortie ou un plan B : résidence ou
          retraite à Maurice, scolarisation des enfants, télétravail depuis
          l&apos;océan Indien ; l&apos;optimisation globale : profiter d&apos;une
          fiscalité plus douce sur les revenus et les structures sociétaires,
          tout en restant dans un pays encadré par des standards internationaux.
        </p>
      </Section>

      {/* ===== 2. QUI PEUT ACHETER ===== */}
      <Section id="qui-peut-acheter" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          2. Qui peut acheter un bien immobilier à Maurice et dans quelles
          conditions ?
        </h2>
        <p>
          La première distinction à faire est simple : citoyen mauricien d&apos;un
          côté, non-citizen de l&apos;autre. Les Mauriciens peuvent acheter
          pratiquement partout, dans tous les types de biens.
        </p>
        <p>
          Pour un étranger, c&apos;est plus encadré mais très clairement
          organisé. En tant que non-citizen, vous pouvez acheter : un bien dans
          un scheme approuvé par l&apos;EDB (Economic Development Board) :
          Property Development Scheme (PDS), Smart City Scheme, IRS/RES anciens,
          Invest Hotel Scheme (IHS) ; un appartement G+2 (Ground+2), c&apos;est-à-dire
          dans un immeuble d&apos;au moins 2 niveaux au-dessus du
          rez-de-chaussée, avec un prix minimum de 6 millions MUR.
        </p>

        <Callout variant="blue" title="Seuils d'investissement à retenir">
          <p>
            <strong>375 000 USD</strong> : seuil minimum d&apos;investissement
            dans un bien PDS, Smart City, IRS/RES ou IHS pour obtenir un permis
            de résidence pour vous et votre famille.
          </p>
          <p className="mt-2">
            <strong>6 millions MUR</strong> : prix minimum pour l&apos;achat
            d&apos;un appartement G+2 par un non-citizen. Depuis le Budget
            2021/22, un achat G+2 d&apos;au moins 375 000 USD rend également
            éligible au permis de résidence.
          </p>
        </Callout>
      </Section>

      {/* ===== 3. TYPES DE PROJETS ===== */}
      <Section id="types-projets" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          3. Les grands types de projets immobiliers : PDS, Smart City, IRS/RES,
          G+2
        </h2>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          3.1 PDS : le resort résidentiel nouvelle génération
        </h3>
        <p>
          Le Property Development Scheme (PDS) est le successeur des anciens
          IRS/RES. C&apos;est le dispositif emblématique des domaines
          résidentiels haut de gamme ouverts aux étrangers. Un PDS, c&apos;est
          en général un vaste domaine structuré : villas ou appartements,
          piscines, club house, services de conciergerie. Le projet est validé
          par l&apos;EDB.
        </p>
        <p>
          Pour un investisseur, un PDS permet d&apos;acheter une résidence de
          standing, de bénéficier au-delà de 375 000 USD d&apos;investissement
          d&apos;un permis de résidence pour soi et sa famille, et souvent de
          mettre le bien en location saisonnière ou long terme via une gestion
          intégrée.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          3.2 Smart City : vivre, travailler et investir dans une « ville dans
          la ville »
        </h3>
        <p>
          Les Smart Cities sont de grandes zones mixtes qui combinent logements,
          bureaux, commerces, écoles, cliniques, espaces verts, zones de loisirs.
          Investir dans une Smart City, c&apos;est par exemple acheter un
          appartement ou une townhouse à proximité immédiate de votre futur
          bureau ou de l&apos;école de vos enfants. Là encore, un investissement
          d&apos;au moins 375 000 USD dans une unité éligible donne droit à un
          residence permit.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          3.3 IRS/RES, IHS : les anciennes générations encore bien vivantes
        </h3>
        <p>
          Les programmes IRS (Integrated Resort Scheme) et RES (Real Estate
          Scheme) ne sont plus ouverts à de nouveaux projets, mais les biens
          existants continuent à se revendre. Le Invest Hotel Scheme (IHS), quant
          à lui, permet d&apos;acheter une suite ou une chambre d&apos;hôtel avec
          usage limité par an.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          3.4 G+2 : les appartements en copropriété
        </h3>
        <p>
          Le régime Ground+2 (G+2) permet à un étranger d&apos;acheter un
          appartement dans un immeuble de minimum deux étages au-dessus du
          rez-de-chaussée, pour un prix d&apos;au moins 6 millions MUR, avec
          l&apos;autorisation de l&apos;EDB. Depuis le Budget 2021/22, un achat
          G+2 d&apos;au moins 375 000 USD rend éligible à un permis de
          résidence.
        </p>
      </Section>

      {/* ===== 4. RESIDENCE PAR INVESTISSEMENT ===== */}
      <Section id="residence-investissement" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          4. Résidence par investissement : transformer un bien en titre de
          séjour
        </h2>
        <p>
          Le principe en 2025 est simple : vous investissez au moins 375 000 USD
          dans un bien résidentiel éligible (PDS, Smart City, IRS/RES, IHS
          résidentiel, G+2) ; vous remplissez les conditions (fonds venant de
          l&apos;étranger, approbation EDB, conformité KYC/AML) ; un residence
          permit vous est accordé, valable aussi longtemps que vous restez
          propriétaire du bien.
        </p>
        <p>
          Ce permis autorise à vivre à Maurice à plein temps. Il peut être
          complété par un permis d&apos;occupation ou de travail si vous dirigez
          une société locale ou exercez une activité professionnelle.
        </p>
      </Section>

      {/* ===== 5. NOUVELLES REGLES 2024-2025 ===== */}
      <Section id="nouvelles-regles" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          5. Nouvelles règles 2024-2025 : paiement en roupies, enregistrement et
          Land Transfer Tax
        </h2>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          5.1 85 % du prix en roupies mauriciennes
        </h3>
        <p>
          Lorsque vous achetez en tant que non-citizen un bien résidentiel sous
          IRS, RES, IHS, PDS ou Smart City, vous devez désormais : transférer vos
          fonds depuis l&apos;étranger en devise forte (USD, EUR, etc.) ; payer
          85 % du prix de vente en roupies mauriciennes (MUR) au promoteur ;
          régler les 15 % restants soit en devise, soit en MUR.
        </p>
        <p>
          Pour les biens de plus de 750 000 USD, les textes prévoient en outre
          que les premiers 750 000 USD doivent être payés avec vos fonds propres
          en devise transférée de l&apos;étranger, tandis que le surplus peut
          être financé par un emprunt local.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          5.2 Droits d&apos;enregistrement et Land Transfer Tax à 10 %
        </h3>
        <p>
          Les droits d&apos;enregistrement pour les non-citizens qui achètent un
          bien résidentiel sont passés de 5 % à 10 % du prix. La Land Transfer
          Tax (LTT) — payée par le vendeur — est également fixée à 10 % de la
          valeur de transfert. Maurice reste officiellement un pays sans impôt
          sur les plus-values pour les biens détenus comme actifs de capital.
        </p>

        <Callout variant="amber" title="Attention : nouveaux droits d'enregistrement à 10 %">
          <p>
            Depuis les réformes 2024-2025, les droits d&apos;enregistrement pour
            les non-citizens ont <strong>doublé</strong>, passant de 5 % à 10 %.
            La Land Transfer Tax est également à 10 %. Intégrez ces coûts dans
            votre budget d&apos;acquisition dès le départ pour éviter les
            mauvaises surprises.
          </p>
        </Callout>
      </Section>

      {/* ===== 6. FISCALITE ===== */}
      <Section id="fiscalite" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          6. Fiscalité mauricienne : ce que doit savoir un investisseur
        </h2>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          6.1 Impôt sur le revenu des particuliers
        </h3>
        <p>
          Un résident fiscal mauricien est imposé sur ses revenus mondiaux ; un
          non-résident est imposé uniquement sur ses revenus de source
          mauricienne. Les taux d&apos;impôt sur le revenu sont progressifs, avec
          des tranches à 10 %, 12,5 % et 15 % selon les niveaux de revenus, puis
          des contributions spécifiques sur les très hauts revenus (Fair Share
          Contribution).
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          6.2 Résidence fiscale : les seuils de 183 et 270 jours
        </h3>
        <p>
          Présence à Maurice au moins 183 jours dans l&apos;année fiscale (1er
          juillet – 30 juin), ou présence d&apos;au moins 270 jours cumulés sur
          l&apos;année en cours et les deux précédentes, ou domicile mauricien
          avec permanence du foyer.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          6.3 Impôt sur les sociétés et régime « offshore »
        </h3>
        <p>
          Le taux de base est de 15 % d&apos;impôt sur les sociétés. Pour
          certaines activités, un régime de Partial Exemption permet de réduire
          la base imposable de 80 %, ramenant le taux effectif à 3 % sur ces
          flux qualifiés.
        </p>
      </Section>

      {/* ===== 7. CHOISIR SON PROJET ===== */}
      <Section id="choisir-projet" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          7. Acheter, oui… mais comment choisir son projet immobilier ?
        </h2>
        <p>
          La bonne question n&apos;est pas « Où est le meilleur rendement
          absolu ? », mais « Quel projet correspond à ma manière de vivre et
          d&apos;investir ? ». Si votre priorité est de vivre à Maurice
          tranquillement, la priorité numéro un ne sera pas le rendement locatif,
          mais la qualité de vie. Si votre priorité est la rentabilité, vous
          regarderez davantage la tension locative, la facilité à trouver des
          locataires sérieux, les charges de copropriété.
        </p>
      </Section>

      {/* ===== 8. VIVRE A MAURICE ===== */}
      <Section id="vivre-maurice" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          8. Vivre à Maurice : ce qu&apos;il y a derrière la carte postale
        </h2>
        <p>
          C&apos;est aussi apprendre à gérer une double culture (francophone et
          anglophone), s&apos;habituer à l&apos;administration mauricienne, se
          familiariser avec le système de santé (cliniques privées, assurances),
          choisir un système scolaire pour les enfants (écoles françaises
          homologuées, écoles internationales, école mauricienne bilingue).
        </p>
      </Section>

      {/* ===== 9. IMMOBILIER ET ENTREPRISE ===== */}
      <Section id="immobilier-entreprise" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          9. Lien entre immobilier et création d&apos;entreprise
        </h2>
        <p>
          Le pays encourage la création de sociétés. Pour des activités tournées
          vers l&apos;international, la création d&apos;une Global Business
          Company (GBC) se fera via la Financial Services Commission. La
          fiscalité (15 % nominal, 3 % effectif sur certains revenus étrangers
          grâce au Partial Exemption) est un atout, à condition de respecter les
          exigences de substance et de gouvernance.
        </p>
      </Section>

      {/* ===== 10. RISQUES ===== */}
      <Section id="risques" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          10. Les risques et les erreurs classiques à éviter
        </h2>
        <p>
          Première erreur : acheter uniquement sur la base d&apos;images sans
          lire les textes récents. Deuxième erreur : ignorer la fiscalité.
          Troisième erreur : croire qu&apos;une création de société offshore se
          fait sans exigence. Dernière erreur : imaginer que vivre à Maurice
          consistera à recréer une mini-France au soleil.
        </p>
      </Section>

      {/* ===== 11. ACCOMPAGNEMENT ===== */}
      <Section id="accompagnement" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          11. Pourquoi se faire accompagner et comment Vanille Stratégie peut
          vous aider
        </h2>
        <p>
          Réussir un investissement immobilier à l&apos;île Maurice en 2025 ne
          consiste plus seulement à choisir une jolie villa dans un catalogue. Il
          s&apos;agit de naviguer dans un environnement juridique et fiscal
          devenu plus sophistiqué.
        </p>
      </Section>

      {/* ===== LIENS CONNEXES / MAILLAGE INTERNE ===== */}
      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
            Pour aller plus loin
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                href="/ressources/blog/creation-entreprise-ile-maurice-guide-2025"
                className="text-blue-600 hover:underline"
              >
                Création entreprise île Maurice : guide 2025 &rarr;
              </Link>
            </li>
            <li>
              <Link
                href="/creation-de-societe-ile-maurice"
                className="text-blue-600 hover:underline"
              >
                Création de société &rarr;
              </Link>
            </li>
            <li>
              <Link
                href="/comptabilite-ile-maurice"
                className="text-blue-600 hover:underline"
              >
                Comptabilité &rarr;
              </Link>
            </li>
            <li>
              <Link
                href="/permis-sejour-ile-maurice"
                className="text-blue-600 hover:underline"
              >
                Permis de séjour &rarr;
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== SOURCES ===== */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-slate-600">Sources :</p>
          <p className="mt-1 text-xs text-slate-500">
            <a
              href="https://edbmauritius.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              EDB Mauritius
            </a>{" "}
            (Economic Development Board) &middot;{" "}
            <a
              href="https://mra.mu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              MRA
            </a>{" "}
            (Mauritius Revenue Authority) &middot;{" "}
            <span>
              Non-Citizens (Property Restriction) Act &middot; Finance Act
              2024-2025 — National Assembly of Mauritius
            </span>
          </p>
          <p className="mt-3 text-xs text-slate-400">
            Cet article est fourni à titre informatif et ne constitue pas un
            conseil juridique ou fiscal. Chaque situation est unique — contactez
            nos experts pour une analyse personnalisée.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Prêt à investir dans l&apos;immobilier à Maurice ?
          </h2>
          <p className="mt-4 text-slate-400">
            PDS, Smart City, G+2, résidence par investissement : chaque projet
            est unique. Demandez un accompagnement personnalisé par{" "}
            {founder.name}, {founder.title}.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 px-10 hover:bg-blue-700"
              >
                Nous contacter
              </Button>
            </Link>
            <Link href="/ressources/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                Voir nos autres articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
