import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder } from "@/data/site";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "Création entreprise île Maurice : le guide complet 2025 | Vanille Stratégie",
  description:
    "Guide complet sur la création d'entreprise à Maurice : Domestic Company, GBC, Authorised Company, fiscalité, domiciliation, résidence fiscale. Par Didier Laroussinie.",
  keywords: [
    "création entreprise île Maurice",
    "société offshore Maurice",
    "GBC Maurice",
    "Global Business Company",
    "fiscalité île Maurice",
    "domiciliation Maurice",
    "résidence fiscale Maurice",
  ],
  openGraph: {
    title:
      "Création entreprise île Maurice : le guide complet 2025",
    description:
      "Guide complet sur la création d'entreprise à Maurice : Domestic Company, GBC, Authorised Company, fiscalité, domiciliation, résidence fiscale.",
    type: "article",
    locale: "fr_FR",
    siteName: "Vanille Stratégie",
    images: [{ url: "https://vanillestrategie.fr/images/hero-paradise.jpg" }],
  },
  alternates: {
    canonical: "https://vanillestrategie.fr/ressources/blog/creation-entreprise-ile-maurice-guide-2025",
  },
  twitter: {
    card: "summary_large_image",
    title: "Création entreprise île Maurice : le guide complet 2025 | Vanille Stratégie",
    description:
      "Guide complet sur la création d'entreprise à Maurice : Domestic Company, GBC, Authorised Company, fiscalité, domiciliation, résidence fiscale. Par Didier Laroussinie.",
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

export default function CreationEntrepriseMauriceGuidePage() {
  return (
    <>
      <BlogPostingJsonLd
        title="Création entreprise île Maurice : le guide complet 2025 | Vanille Stratégie"
        description="Guide complet sur la création d'entreprise à Maurice : Domestic Company, GBC, Authorised Company, fiscalité, domiciliation, résidence fiscale. Par Didier Laroussinie."
        slug="creation-entreprise-ile-maurice-guide-2025"
        datePublished="2025-11-26"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/ressources/blog" },
          { name: "Création entreprise île Maurice : le guide complet 2025", url: "/ressources/blog/creation-entreprise-ile-maurice-guide-2025" },
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
              Création de société
            </span>
            <span className="text-xs text-slate-500">Novembre 2025</span>
            <span className="text-xs text-slate-500">&middot; 20 min</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Création entreprise île Maurice : le guide complet 2025
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            L&apos;Île Maurice fait fantasmer beaucoup d&apos;entrepreneurs
            francophones : fiscalité douce, climat agréable, fuseau horaire
            compatible avec l&apos;Europe, cadre de vie haut de gamme. Mais
            derrière l&apos;image carte postale, il y a un vrai cadre juridique
            et fiscal, de plus en plus exigeant et parfaitement aligné sur les
            standards internationaux (OCDE, BEPS, listes blanches).
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
              <a href="#pourquoi-maurice" className="hover:underline">
                Pourquoi l&apos;Île Maurice attire autant d&apos;entrepreneurs en 2025 ?
              </a>
            </li>
            <li>
              <a href="#types-societes" className="hover:underline">
                Les grands types de sociétés à l&apos;Île Maurice
              </a>
            </li>
            <li>
              <a href="#choisir-structure" className="hover:underline">
                Comment choisir la bonne structure pour votre projet ?
              </a>
            </li>
            <li>
              <a href="#processus-creation" className="hover:underline">
                Le processus de création d&apos;entreprise à l&apos;Île Maurice
              </a>
            </li>
            <li>
              <a href="#domiciliation" className="hover:underline">
                Domiciliation et obligations locales
              </a>
            </li>
            <li>
              <a href="#avantage-fiscal" className="hover:underline">
                Avantage fiscal île Maurice : ce que cela veut dire en vrai
              </a>
            </li>
            <li>
              <a href="#residence-fiscale" className="hover:underline">
                Devenir résident fiscal île Maurice : conditions et stratégies
              </a>
            </li>
            <li>
              <a href="#erreurs" className="hover:underline">
                Erreurs fréquentes et bonnes pratiques en 2025
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* ===== 1. POURQUOI MAURICE ===== */}
      <Section id="pourquoi-maurice" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          1. Pourquoi l&apos;Île Maurice attire autant d&apos;entrepreneurs en 2025 ?
        </h2>
        <p>
          Maurice n&apos;est pas un &laquo;&nbsp;paradis fiscal sauvage&nbsp;&raquo;,
          mais un centre financier international reconnu, politiquement stable,
          avec un cadre légal clair.
        </p>
        <p>
          Sur le plan fiscal : sociétés résidentes imposées à 15&nbsp;% sur
          leurs bénéfices, taux réduit à 3&nbsp;% pour l&apos;exportation de
          biens, régime de partial exemption pour les GBC ramenant le taux
          effectif à 3&nbsp;%.
        </p>
        <p>
          Côté particuliers : taux modérés, pas de taxe sur la fortune, pas de
          taxation des plus-values dans la plupart des cas, aucun prélèvement à
          la source sur les dividendes versés à un non-résident, réseau
          d&apos;environ 45 conventions de non-double imposition.
        </p>

        <Callout variant="blue" title="Synthèse des taux fiscaux à Maurice">
          <ul className="ml-4 list-disc space-y-1">
            <li>Impôt sur les sociétés : <strong>15&nbsp;%</strong> (taux standard)</li>
            <li>Exportation de biens : <strong>3&nbsp;%</strong></li>
            <li>GBC avec Partial Exemption : <strong>~3&nbsp;%</strong> (taux effectif)</li>
            <li>Plus-values mobilières : <strong>0&nbsp;%</strong></li>
            <li>Retenue à la source sur dividendes (non-résidents) : <strong>0&nbsp;%</strong></li>
            <li>Taxe sur la fortune : <strong>inexistante</strong></li>
            <li>Conventions de non-double imposition : <strong>~45</strong></li>
          </ul>
        </Callout>
      </Section>

      {/* ===== 2. TYPES DE SOCIETES ===== */}
      <Section id="types-societes" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          2. Les grands types de sociétés à l&apos;Île Maurice
        </h2>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          2.1 La société locale (Domestic Company)
        </h3>
        <p>
          Destinée à exercer une activité principalement sur le marché
          mauricien. Résidente fiscale à Maurice, imposée à 15&nbsp;%. Peut être
          soumise à la TVA (15&nbsp;%).
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          2.2 La Global Business Company (GBC)
        </h3>
        <p>
          Structure typique pour une activité internationale. Obtient une Global
          Business Licence auprès de la FSC. Soumise au taux standard de
          15&nbsp;% mais peut bénéficier d&apos;un Partial Exemption Regime
          (exonération de 80&nbsp;% sur certains revenus de source étrangère,
          taux effectif 3&nbsp;%).
        </p>
        <p>
          Doit démontrer une{" "}
          <Link
            href="/ressources/blog/substance-requirements-maurice"
            className="text-blue-600 hover:underline"
          >
            substance réelle à Maurice
          </Link>{" "}
          : administrateurs résidents, tenue de conseils sur place, dépenses
          locales significatives.
        </p>

        <Callout variant="amber" title="Substance : une obligation, pas une option">
          <p>
            La GBC doit démontrer une substance économique réelle à Maurice :
            administrateurs résidents, board meetings sur place, compte bancaire
            principal à Maurice, comptabilité tenue localement. Sans substance
            crédible, pas d&apos;accès au Partial Exemption Regime.
          </p>
        </Callout>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          2.3 L&apos;Authorised Company (AC)
        </h3>
        <p>
          Incorporée à Maurice mais considérée comme non-résidente fiscale. Sa
          gestion doit être située en dehors de Maurice, ne bénéficie pas des
          conventions. Structure à manier avec précaution.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          2.4 Autres structures
        </h3>
        <p>
          Protected Cell Companies (PCC), Variable Capital Companies (VCC),
          trusts et fondations.
        </p>
      </Section>

      {/* ===== 3. CHOISIR LA BONNE STRUCTURE ===== */}
      <Section id="choisir-structure" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          3. Comment choisir la bonne structure pour votre projet ?
        </h2>
        <p>
          <strong>Où sont vos clients ?</strong> Si principalement à Maurice,
          la Domestic Company est le choix naturel. Si principalement en
          Europe, Afrique ou Asie, la GBC est la structure adaptée.
        </p>
        <p>
          <strong>
            Avez-vous besoin des conventions de non-double imposition ?
          </strong>{" "}
          Si oui, optez pour une GBC avec une substance crédible.
        </p>
        <p>
          <strong>Souhaitez-vous devenir résident fiscal à Maurice ?</strong>{" "}
          C&apos;est une question fondamentale qui conditionne la structuration
          globale de votre projet — nous y revenons en{" "}
          <a href="#residence-fiscale" className="text-blue-600 hover:underline">
            section 7
          </a>
          .
        </p>

        <div className="my-6 overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-700">
                  Critère
                </th>
                <th className="px-4 py-3 font-semibold text-slate-700">
                  Domestic Company
                </th>
                <th className="px-4 py-3 font-semibold text-slate-700">
                  GBC
                </th>
                <th className="px-4 py-3 font-semibold text-slate-700">
                  Authorised Company
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3 font-medium">Marché cible</td>
                <td className="px-4 py-3">Maurice</td>
                <td className="px-4 py-3">International</td>
                <td className="px-4 py-3">Hors Maurice</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Taux d&apos;IS</td>
                <td className="px-4 py-3">15&nbsp;%</td>
                <td className="px-4 py-3">~3&nbsp;% (avec PER)</td>
                <td className="px-4 py-3">Non-résidente</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Conventions fiscales</td>
                <td className="px-4 py-3">Oui</td>
                <td className="px-4 py-3">Oui</td>
                <td className="px-4 py-3">Non</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Substance requise</td>
                <td className="px-4 py-3">Standard</td>
                <td className="px-4 py-3">Renforcée</td>
                <td className="px-4 py-3">Hors Maurice</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ===== 4. PROCESSUS DE CREATION ===== */}
      <Section id="processus-creation" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          4. Le processus de création d&apos;entreprise à l&apos;Île Maurice
        </h2>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          4.1 Clarifier votre projet
        </h3>
        <p>
          Première étape indispensable : définir ce que vous allez vendre, à
          qui, depuis où, et par quel canal. C&apos;est ce diagnostic initial
          qui détermine la forme juridique, le régime fiscal applicable et les
          licences nécessaires.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          4.2 Choisir la forme juridique
        </h3>
        <p>
          La plupart des entrepreneurs créent une &laquo;&nbsp;Company limited
          by shares&nbsp;&raquo;, l&apos;équivalent mauricien de la SARL ou SAS
          française. C&apos;est la structure la plus courante et la plus
          flexible.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          4.3 Réserver le nom de la société
        </h3>
        <p>
          Vérification auprès du Registrar of Companies (RoC). Le nom doit être
          unique et conforme aux règles de dénomination en vigueur.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          4.4 Rédiger la &laquo;&nbsp;constitution&nbsp;&raquo; (statuts)
        </h3>
        <p>
          Les statuts définissent la répartition des droits de vote, les règles
          d&apos;entrée et de sortie d&apos;associés, et l&apos;ensemble de la
          gouvernance de la société. Un point souvent négligé mais critique.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          4.5 Préparer le dossier de création
        </h3>
        <p>
          Le dossier comprend : formulaires de constitution, consentements des
          administrateurs et actionnaires, pièces d&apos;identité, déclaration
          des bénéficiaires effectifs (UBO), business plan. Pour une GBC, le
          dossier est soumis à la FSC avec des exigences documentaires
          renforcées.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          4.6 Délai de création
        </h3>
        <p>
          Société domestique : quelques jours ouvrables. GBC : une à deux
          semaines, selon la complexité du dossier et la réactivité de la FSC.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          4.7 Ouverture de compte bancaire
        </h3>
        <p>
          C&apos;est souvent le vrai facteur temps. Les procédures KYC (Know
          Your Customer) sont poussées : origine des fonds, activité détaillée,
          références bancaires antérieures. Comptez 2 à 6 semaines selon la
          banque et la complexité du profil.
        </p>
      </Section>

      {/* ===== 5. DOMICILIATION ===== */}
      <Section id="domiciliation" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          5. Domiciliation et obligations locales
        </h2>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          5.1 Le siège social
        </h3>
        <p>
          Toute société doit avoir un registered office à Maurice. C&apos;est
          l&apos;adresse officielle de la société, celle qui figure au Registrar
          of Companies et sur tous les documents légaux.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          5.2 Les administrateurs et la substance
        </h3>
        <p>
          Pour une GBC, les autorités attendent des administrateurs résidents et
          des décisions clés prises à Maurice. Ce n&apos;est pas un simple
          formalisme : la FSC vérifie que les directeurs participent activement
          à la gouvernance de la société.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          5.3 Comptabilité, audit, conformité
        </h3>
        <p>
          Toute société doit tenir une{" "}
          <Link
            href="/comptabilite-ile-maurice"
            className="text-blue-600 hover:underline"
          >
            comptabilité conforme aux normes locales
          </Link>
          , déposer des déclarations fiscales annuelles auprès de la MRA
          (Mauritius Revenue Authority), et pour les GBC, produire des états
          financiers audités par un cabinet agréé à Maurice.
        </p>
      </Section>

      {/* ===== 6. AVANTAGE FISCAL ===== */}
      <Section id="avantage-fiscal" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          6. Avantage fiscal île Maurice : ce que cela veut dire en vrai
        </h2>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          6.1 Côté sociétés
        </h3>
        <p>
          Taux de 15&nbsp;% sur le bénéfice net, 3&nbsp;% pour
          l&apos;exportation de biens, partial exemption à 3&nbsp;% pour les
          GBC. Pas de taxe sur la fortune, pas d&apos;impôt sur les plus-values
          mobilières, pas de retenue à la source sur les dividendes versés à
          des non-résidents.
        </p>

        <Callout variant="blue" title="Récapitulatif fiscal sociétés">
          <ul className="ml-4 list-disc space-y-1">
            <li>IS standard : <strong>15&nbsp;%</strong></li>
            <li>IS export de biens : <strong>3&nbsp;%</strong></li>
            <li>IS GBC avec Partial Exemption : <strong>~3&nbsp;%</strong></li>
            <li>Plus-values mobilières : <strong>0&nbsp;%</strong></li>
            <li>Retenue à la source dividendes (non-résidents) : <strong>0&nbsp;%</strong></li>
            <li>Taxe sur la fortune : <strong>inexistante</strong></li>
          </ul>
        </Callout>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          6.2 Côté particuliers
        </h3>
        <p>
          Un résident fiscal est imposé sur son revenu mondial. Cependant,
          Maurice applique un système de &laquo;&nbsp;remittance&nbsp;&raquo; :
          les revenus étrangers ne sont imposables que lorsqu&apos;ils sont
          rapatriés à Maurice.
        </p>
        <p>
          Un non-résident n&apos;est imposé que sur ses revenus de source
          mauricienne.
        </p>
      </Section>

      {/* ===== 7. RESIDENCE FISCALE ===== */}
      <Section id="residence-fiscale" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          7. Devenir résident fiscal île Maurice : conditions et stratégies
        </h2>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          7.1 Les critères de résidence fiscale
        </h3>
        <p>
          Vous êtes considéré comme résident fiscal à Maurice si vous
          remplissez l&apos;un des critères suivants :
        </p>
        <ul>
          <li>183 jours de présence pendant l&apos;année fiscale (1er juillet au 30 juin)</li>
          <li>270 jours au total sur l&apos;année en cours et les deux précédentes</li>
          <li>Domicile établi à Maurice</li>
        </ul>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          7.2 Résidence fiscale et permis de séjour
        </h3>
        <p>
          Plusieurs voies d&apos;accès existent pour obtenir un permis de
          résidence :
        </p>
        <ul>
          <li>Permis investisseur (300&nbsp;000 – 375&nbsp;000 USD)</li>
          <li>
            Permis par acquisition immobilière (minimum 375&nbsp;000 USD) — voir
            notre{" "}
            <Link
              href="/ressources/blog/investissement-immobilier-ile-maurice-guide-2025"
              className="text-blue-600 hover:underline"
            >
              guide investissement immobilier 2025
            </Link>
          </li>
          <li>
            Permis professionnels ou &laquo;&nbsp;self-employed&nbsp;&raquo;
          </li>
        </ul>

        <h3 className="mt-8 text-xl font-bold text-slate-800">
          7.3 Changer de résidence fiscale proprement
        </h3>
        <p>
          Changer de résidence fiscale ne se résume pas à acheter un billet
          d&apos;avion. Il faut s&apos;interroger sur l&apos;exit tax
          éventuelle dans votre pays d&apos;origine, organiser les flux de
          revenus en cohérence avec votre nouvelle résidence, et demander un Tax
          Residence Certificate mauricien auprès de la MRA.
        </p>
      </Section>

      {/* ===== 8. ERREURS ET BONNES PRATIQUES ===== */}
      <Section id="erreurs" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          8. Erreurs fréquentes et bonnes pratiques en 2025
        </h2>
        <p>
          <strong>Première erreur : sous-estimer la substance.</strong> Créer
          une GBC sans présence réelle à Maurice, avec des directeurs nominees
          passifs, c&apos;est prendre le risque de perdre le Partial Exemption
          Regime et de subir un redressement fiscal.
        </p>
        <p>
          <strong>
            Deuxième erreur : ne pas synchroniser société et vie personnelle.
          </strong>{" "}
          Créer une société à Maurice tout en restant résident fiscal en France
          sans avoir anticipé les conséquences fiscales, c&apos;est
          s&apos;exposer à des difficultés majeures.
        </p>
        <p>
          <strong>
            Troisième erreur : multiplier les structures sans logique.
          </strong>{" "}
          Avoir une holding à Maurice, une société opérationnelle ailleurs et
          une troisième structure pour la facturation sans cohérence
          d&apos;ensemble, c&apos;est le meilleur moyen d&apos;attirer
          l&apos;attention des administrations fiscales.
        </p>

        <Callout variant="amber" title="Ce qui fonctionne en 2025">
          <p>
            Les projets qui fonctionnent assument une présence réelle à Maurice,
            choisissent une structure alignée sur la réalité de l&apos;activité,
            et gèrent proprement la comptabilité. C&apos;est la combinaison
            d&apos;un cadre fiscal attractif et d&apos;une rigueur
            opérationnelle qui fait la différence.
          </p>
        </Callout>
      </Section>

      {/* ===== ARTICLES LIES ===== */}
      <section className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
            Articles liés
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href="/ressources/blog/investissement-immobilier-ile-maurice-guide-2025"
                className="text-blue-600 hover:underline"
              >
                Investissement immobilier : Guide 2025
              </Link>
            </li>
            <li>
              <Link
                href="/creation-de-societe-ile-maurice"
                className="text-blue-600 hover:underline"
              >
                Création de société à l&apos;Île Maurice
              </Link>
            </li>
            <li>
              <Link
                href="/comptabilite-ile-maurice"
                className="text-blue-600 hover:underline"
              >
                Comptabilité à l&apos;Île Maurice
              </Link>
            </li>
            <li>
              <Link
                href="/ressources/blog/substance-requirements-maurice"
                className="text-blue-600 hover:underline"
              >
                Substance requirements à Maurice
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== SOURCES ===== */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
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
            Vous envisagez de créer votre entreprise à l&apos;Île Maurice ?
          </h2>
          <p className="mt-4 text-slate-400">
            Structuration juridique, fiscalité, domiciliation, résidence fiscale
            — {founder.name}, {founder.title}, vous accompagne à chaque étape.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 px-10 hover:bg-blue-700"
              >
                Prendre rendez-vous
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
