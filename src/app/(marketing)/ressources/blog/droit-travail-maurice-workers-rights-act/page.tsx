import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder, officialSources } from "@/data/site";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "Droit du travail à Maurice — Workers' Rights Act, salaires, charges : ce que tout employeur doit savoir | Vanille Stratégie",
  description:
    "Guide complet du droit du travail à Maurice : Workers' Rights Act 2019, salaire minimum (Rs 17 745), CSG, PAYE, PRGF, congés, licenciement, emploi d'étrangers. Par Didier Laroussinie, Expert-Comptable Fiscaliste.",
  keywords: [
    "droit du travail Maurice",
    "Workers Rights Act 2019",
    "salaire minimum Maurice",
    "CSG Maurice",
    "PAYE Maurice",
    "charges sociales Maurice",
    "congés Maurice",
    "licenciement Maurice",
    "PRGF Maurice",
    "Occupation Permit Professional",
    "paie Maurice",
    "BD Star",
  ],
  openGraph: {
    title:
      "Droit du travail à Maurice — Workers' Rights Act, salaires, charges",
    description:
      "Guide complet du droit du travail mauricien. Salaire minimum, CSG, PAYE, congés, licenciement, emploi d'étrangers. Par Didier Laroussinie.",
    type: "article",
    locale: "fr_FR",
    siteName: "Vanille Stratégie",
    images: [{ url: "https://vanillestrategie.fr/images/hero-paradise.jpg" }],
  },
  alternates: {
    canonical: "https://vanillestrategie.fr/ressources/blog/droit-travail-maurice-workers-rights-act",
  },
  twitter: {
    card: "summary_large_image",
    title: "Droit du travail à Maurice — Workers' Rights Act, salaires, charges : ce que tout employeur doit savoir | Vanille Stratégie",
    description:
      "Guide complet du droit du travail à Maurice : Workers' Rights Act 2019, salaire minimum (Rs 17 745), CSG, PAYE, PRGF, congés, licenciement, emploi d'étrangers. Par Didier Laroussinie, Expert-Comptable Fiscaliste.",
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

export default function DroitTravailMauricePage() {
  return (
    <>
      <BlogPostingJsonLd
        title="Droit du travail à Maurice — Workers&apos; Rights Act, salaires, charges : ce que tout employeur doit savoir | Vanille Stratégie"
        description="Guide complet du droit du travail à Maurice : Workers&apos; Rights Act 2019, salaire minimum (Rs 17 745), CSG, PAYE, PRGF, congés, licenciement, emploi d&apos;étrangers. Par Didier Laroussinie, Expert-Comptable Fiscaliste."
        slug="droit-travail-maurice-workers-rights-act"
        datePublished="2026-03-18"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/ressources/blog" },
          { name: "Droit du travail à Maurice — Workers&apos; Rights Act, salaires, charges : ce que tout employeur doit savoir | Vanille Stratégie", url: "/ressources/blog/droit-travail-maurice-workers-rights-act" },
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
              Droit du travail
            </span>
            <span className="text-xs text-slate-500">Mars 2026</span>
            <span className="text-xs text-slate-500">&middot; 22 min</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Droit du travail à Maurice — Workers&apos; Rights Act, salaires,
            charges : ce que tout employeur doit savoir
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Embaucher à Maurice est simple, mais pas sans règles. Le
            Workers&apos; Rights Act 2019 encadre contrats, salaires, congés,
            licenciements et charges sociales. Ce guide vous donne toutes les
            clés pour être en conformité — et éviter les mauvaises surprises.
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
              <a href="#wra" className="hover:underline">
                Le Workers&apos; Rights Act 2019
              </a>
            </li>
            <li>
              <a href="#contrats" className="hover:underline">
                Types de contrats de travail
              </a>
            </li>
            <li>
              <a href="#salaire-minimum" className="hover:underline">
                Salaire minimum national (NMW)
              </a>
            </li>
            <li>
              <a href="#csg" className="hover:underline">
                Charges sociales : la CSG
              </a>
            </li>
            <li>
              <a href="#paye" className="hover:underline">
                PAYE — retenue à la source
              </a>
            </li>
            <li>
              <a href="#prgf" className="hover:underline">
                Portable Retirement Gratuity Fund (PRGF)
              </a>
            </li>
            <li>
              <a href="#conges" className="hover:underline">
                Congés : annuels, maladie, maternité
              </a>
            </li>
            <li>
              <a href="#heures" className="hover:underline">
                Heures de travail et heures supplémentaires
              </a>
            </li>
            <li>
              <a href="#licenciement" className="hover:underline">
                Licenciement : procédures et indemnités
              </a>
            </li>
            <li>
              <a href="#etrangers" className="hover:underline">
                Emploi de travailleurs étrangers
              </a>
            </li>
            <li>
              <a href="#bd-star" className="hover:underline">
                Le rôle de BD Star : paie externalisée
              </a>
            </li>
            <li>
              <a href="#tableau" className="hover:underline">
                Tableau recapitulatif des couts employeur
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* ===== 1. WORKERS' RIGHTS ACT ===== */}
      <Section id="wra" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          1. Le Workers&apos; Rights Act 2019 : le code du travail mauricien
        </h2>
        <p>
          Le <strong>Workers&apos; Rights Act 2019</strong> (WRA) est entre en
          vigueur le 24 octobre 2019, remplacant l&apos;ancien Employment Rights
          Act 2008 et l&apos;Employment Relations Act 2008. Il constitué
          désormais le texte unique regissant les relations de travail à Maurice.
        </p>
        <p>
          Le WRA couvre l&apos;ensemble du droit du travail : contrats, salaire
          minimum, congés, heures de travail, sécurité au travail, égalité de
          traitement, licenciement, indemnités de départ et representation
          syndicale. C&apos;est la référence obligatoire pour tout employeur
          operant sur le territoire mauricien — qu&apos;il s&apos;agisse
          d&apos;une Domestic Company, d&apos;une GBC ou d&apos;une filiale
          internationale.
        </p>
        <p>
          Le texte est régulièrement amendé par les Finance Acts successifs.
          Le <strong>Finance Act 2025</strong> a introduit plusieurs ajustements
          (compensation salariale, seuils PAYE, taux CSG) qu&apos;il est
          essentiel de suivre.
        </p>

        <Callout variant="blue" title="A retenir">
          <p>
            Le WRA s&apos;applique a <strong>tous les employeurs prives</strong>{" "}
            à Maurice, y compris les sociétés a capitaux étrangers. Le
            non-respect de ses dispositions expose à des sanctions pénales et
            civiles.
          </p>
        </Callout>
      </Section>

      {/* ===== 2. TYPES DE CONTRATS ===== */}
      <Section id="contrats" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          2. Types de contrats de travail
        </h2>
        <p>
          Le WRA reconnait trois formes principales de contrats de travail :
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Contrat a durée indeterminee (CDI)
        </h3>
        <p>
          C&apos;est la forme par défaut. Tout contrat qui ne stipule pas
          expressement une durée déterminée est automatiquement considéré comme
          un CDI. Le contrat doit être écrit et remis au salarié dans les{" "}
          <strong>14 jours</strong> suivant le debut de l&apos;emploi.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Contrat a durée déterminée (CDD)
        </h3>
        <p>
          Le CDD est autorise pour des projets spécifiques, des remplacements ou
          des activités saisonnieres. Sa durée ne peut exceder{" "}
          <strong>24 mois</strong>. Au-dela, ou en cas de renouvellement
          successif, le contrat est automatiquement requalifie en CDI.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Contrat a temps partiel
        </h3>
        <p>
          Un salarié a temps partiel travaille moins que les heures normales
          prévues pour un employé a temps plein dans la même categorie. Ses
          droits (congés, CSG, PRGF) sont calcules au prorata de ses heures de
          travail.
        </p>

        <Callout variant="amber" title="Obligation légale">
          <p>
            Tout contrat de travail doit mentionner : la rémunération, les
            horaires, la description du poste, la durée de la période
            d&apos;essai (maximum 12 mois pour les cadres, 6 mois pour les
            autres categories) et les conditions de preavis.
          </p>
        </Callout>
      </Section>

      {/* ===== 3. SALAIRE MINIMUM ===== */}
      <Section id="salaire-minimum" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          3. Salaire minimum national (National Minimum Wage)
        </h2>
        <p>
          Depuis le <strong>1er janvier 2026</strong>, le salaire minimum
          national à Maurice est fixé à :
        </p>
        <div className="my-6 rounded-xl border border-blue-200 bg-blue-50 p-6 text-center">
          <p className="text-4xl font-bold text-blue-900">
            Rs 17 745 / mois
          </p>
          <p className="mt-2 text-sm text-blue-700">
            National Minimum Wage — applicable à tous les secteurs du prive
          </p>
        </div>
        <p>
          Ce montant représente une hausse de <strong>Rs 635</strong> par
          rapport à 2025 (Rs 17 110), soit une augmentation d&apos;environ 3,7%.
        </p>
        <p>
          En complement, une <strong>compensation salariale</strong> de
          Rs 635/mois est versée a tous les salariés dont le salaire de base ne
          dépassé pas Rs 50 000 par mois. Cette compensation est à la charge de
          l&apos;employeur, mais les entreprises ayant un chiffre d&apos;affaires
          inferieur a Rs 50 millions peuvent bénéficier d&apos;une aide
          gouvernementale partielle via la MRA.
        </p>

        <Callout variant="green" title="Bon à savoir">
          <p>
            Le NMW s&apos;applique uniformement a tous les secteurs du prive,
            sans distinction de branche. Il inclut le salaire de base mais
            exclut les primes, heures supplémentaires et avantages en nature.
          </p>
        </Callout>
      </Section>

      {/* ===== 4. CSG ===== */}
      <Section id="csg" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          4. Charges sociales : la Contribution Sociale Généralisée (CSG)
        </h2>
        <p>
          Depuis le <strong>1er septembre 2020</strong>, la CSG a remplacé le
          National Pensions Fund (NPF) comme régime de protection sociale
          obligatoire à Maurice. Elle est collectee par la{" "}
          <strong>Mauritius Revenue Authority (MRA)</strong> et finance les
          pensions, la sante et l&apos;aide sociale.
        </p>
        <p>
          La CSG est calculee sur le <strong>salaire de base</strong> du
          salarié. Les taux varient selon le niveau de rémunération :
        </p>

        <div className="my-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 rounded-xl border border-slate-200 text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">
                  Tranche de salaire
                </th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700">
                  Part employeur
                </th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700">
                  Part salarié
                </th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Jusqu&apos;a Rs 50 000 / mois
                </td>
                <td className="px-4 py-3 text-center font-semibold text-slate-900">
                  3%
                </td>
                <td className="px-4 py-3 text-center font-semibold text-slate-900">
                  1,5%
                </td>
                <td className="px-4 py-3 text-center font-bold text-blue-700">
                  4,5%
                </td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-3 text-slate-700">
                  Au-dessus de Rs 50 000 / mois
                </td>
                <td className="px-4 py-3 text-center font-semibold text-slate-900">
                  6%
                </td>
                <td className="px-4 py-3 text-center font-semibold text-slate-900">
                  3%
                </td>
                <td className="px-4 py-3 text-center font-bold text-blue-700">
                  9%
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          En plus de la CSG, l&apos;employeur est soumis à des cotisations au{" "}
          <strong>National Savings Fund (NSF)</strong> : 2,5% de la rémunération
          totale à la charge de l&apos;employeur et 1% à la charge du salarié.
          Une taxe additionnelle (<em>levy</em>) de 1,5% sur les salaires de
          base est également due par l&apos;employeur.
        </p>

        <Callout variant="red" title="Point de vigilance">
          <p>
            La CSG n&apos;a <strong>pas de plafond</strong> — contrairement a
            l&apos;ancien NPF. Les hauts salaires génèrent donc des cotisations
            significatives. Les déclarations CSG sont mensuelles et doivent être
            deposees avant le 20 du mois suivant.
          </p>
        </Callout>
      </Section>

      {/* ===== 5. PAYE ===== */}
      <Section id="paye" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          5. PAYE (Pay As You Earn) — retenue à la source
        </h2>
        <p>
          Le système PAYE est le mécanisme de prélèvement de l&apos;impôt sur le
          revenu directement sur le salaire. L&apos;employeur est responsable du
          calcul, de la retenue et du versement à la MRA.
        </p>
        <p>
          Depuis le <strong>Finance Act 2025</strong>, les tranches
          d&apos;imposition pour les personnes physiques sont les suivantes :
        </p>

        <div className="my-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 rounded-xl border border-slate-200 text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">
                  Revenu annuel imposable
                </th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700">
                  Taux
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Premiers Rs 500 000
                </td>
                <td className="px-4 py-3 text-center font-bold text-green-700">
                  0%
                </td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-3 text-slate-700">
                  De Rs 500 001 a Rs 1 000 000
                </td>
                <td className="px-4 py-3 text-center font-bold text-amber-700">
                  10%
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Au-dessus de Rs 1 000 000
                </td>
                <td className="px-4 py-3 text-center font-bold text-red-700">
                  20%
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Concrètement, un salarié gagnant jusqu&apos;a{" "}
          <strong>Rs 41 667/mois</strong> (soit Rs 500 000/an) est totalement
          exonéré d&apos;impôt sur le revenu. Le seuil mensuel pour être
          considéré comme <em>exempt person</em> est de{" "}
          <strong>Rs 38 462</strong>.
        </p>
        <p>
          Une <strong>Fair Share Contribution</strong> de 15% s&apos;applique
          aux revenus nets annuels supérieurs a Rs 12 millions (dividendes
          inclus).
        </p>

        <Callout variant="blue" title="Avantage Maurice">
          <p>
            Avec un seuil d&apos;exonération a Rs 500 000/an et un taux maximal
            de 20%, la fiscalité sur les revenus personnels à Maurice reste
            parmi les plus attractives au monde — surtout pour les cadres et
            dirigeants.
          </p>
        </Callout>
      </Section>

      {/* ===== 6. PRGF ===== */}
      <Section id="prgf" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          6. Portable Retirement Gratuity Fund (PRGF)
        </h2>
        <p>
          Le PRGF est un fonds de pension obligatoire introduit par le
          Workers&apos; Rights Act. Depuis le{" "}
          <strong>1er janvier 2022</strong>, tout employeur du secteur prive doit
          y cotiser pour chacun de ses salariés.
        </p>
        <p>
          Le taux de contribution est de{" "}
          <strong>4,5% de la rémunération mensuelle</strong> du salarié. La
          rémunération prise en compte comprend le salaire de base, les primes de
          productivité et de présence, ainsi que les heures supplémentaires.
        </p>
        <p>
          Le PRGF est <strong>portable</strong> : les droits accumules suivent
          le salarié d&apos;un employeur à l&apos;autre tout au long de sa
          carrière. En cas de départ à la retraite ou de cessation d&apos;emploi,
          le salarié récupère l&apos;intégralité de ses droits.
        </p>
        <p>
          L&apos;employeur peut deduire de sa contribution PRGF toute
          contribution déjà versée à un régime de pension prive ou au Sugar
          Industry Pension Fund (SIPF), à condition que ce montant soit au moins
          egal au taux PRGF de 4,5%.
        </p>

        <Callout variant="amber" title="Echeancier PRGF">
          <p>
            Les déclarations PRGF sont mensuelles. L&apos;employeur doit
            soumettre le <em>PRGF Return</em> à la MRA et verser les
            contributions avant le <strong>20 du mois suivant</strong>. Le
            non-respect entraine des pénalités de retard.
          </p>
        </Callout>
      </Section>

      {/* ===== 7. CONGES ===== */}
      <Section id="conges" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          7. Congés : annuels, maladie, maternité
        </h2>

        <h3 className="text-xl font-semibold text-slate-800">
          Congés annuels
        </h3>
        <p>
          Tout salarié a temps plein a droit a{" "}
          <strong>20 jours ouvrables</strong> de congés annuels payes par an
          (contre 14 jours sous l&apos;ancienne législation). Les congés non
          pris sont cumulables et peuvent être reportes ou indemnises en fin de
          contrat.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Congés maladie
        </h3>
        <p>
          Le WRA accorde <strong>15 jours ouvrables</strong> de conge maladie
          par an, entièrement payes par l&apos;employeur. Les jours non utilisés
          sont cumulables d&apos;une année sur l&apos;autre, sans plafond
          explicite dans la loi.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Conge maternité
        </h3>
        <p>
          Les salariees bénéficient de{" "}
          <strong>14 semaines de conge maternité</strong> (contre 12 sous
          l&apos;ancienne loi), dont au moins 7 semaines doivent être prises
          après l&apos;accouchement. Le conge est rémunéré a 100% du salaire.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Autres congés prévus par la loi
        </h3>
        <ul>
          <li>
            <strong>Conge paternite :</strong> 5 jours ouvrables continus
          </li>
          <li>
            <strong>Conge deuil :</strong> 3 jours en cas de décès d&apos;un
            proche
          </li>
          <li>
            <strong>Jours fériés :</strong> Maurice compte environ 15 jours
            fériés par an ; si le salarié travaille un jour férié, il a droit a
            une majoration de 100%
          </li>
        </ul>

        <Callout variant="green" title="Comparaison avantageuse">
          <p>
            Avec 20 jours de congés annuels + 15 jours maladie + 14 semaines de
            maternité, le régime mauricien est sensiblement plus généreux que
            celui de nombreux pays de la zone (Inde, Dubai, Singapour) et
            comparable au standard europeen.
          </p>
        </Callout>
      </Section>

      {/* ===== 8. HEURES DE TRAVAIL ===== */}
      <Section id="heures" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          8. Heures de travail et heures supplémentaires
        </h2>
        <p>
          La durée légale maximale de travail est de{" "}
          <strong>45 heures par semaine</strong>, généralement reparties sur 5 ou
          6 jours. Au-dela, toute heure effectuée est considérée comme
          supplémentaire.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Majoration des heures supplémentaires
        </h3>
        <div className="my-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 rounded-xl border border-slate-200 text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">
                  Situation
                </th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700">
                  Majoration
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Heures supplémentaires (jour ouvrable)
                </td>
                <td className="px-4 py-3 text-center font-bold text-slate-900">
                  + 50%
                </td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-3 text-slate-700">
                  Travail le dimanche ou jour de repos
                </td>
                <td className="px-4 py-3 text-center font-bold text-slate-900">
                  + 100%
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Travail un jour férié
                </td>
                <td className="px-4 py-3 text-center font-bold text-slate-900">
                  + 100%
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          L&apos;employeur ne peut pas imposer plus de{" "}
          <strong>12 heures de travail</strong> par jour (heures normales +
          supplémentaires). Le salarié a droit à un repos minimum de{" "}
          <strong>11 heures consecutives</strong> entre deux journees de travail.
        </p>

        <Callout variant="amber" title="Attention">
          <p>
            Les heures supplémentaires entrent dans le calcul de la rémunération
            pour le PRGF. Elles sont également soumises à la CSG et au PAYE.
            Sous-estimer leur impact peut fausser significativement le coût total
            d&apos;un salarié.
          </p>
        </Callout>
      </Section>

      {/* ===== 9. LICENCIEMENT ===== */}
      <Section id="licenciement" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          9. Licenciement : procédures, preavis, indemnités
        </h2>
        <p>
          Le WRA encadre strictement la rupture du contrat de travail. Un
          licenciement ne peut intervenir que pour des{" "}
          <strong>motifs valables et justifies</strong> : faute grave,
          insuffisance professionnelle, motif économique ou suppression de poste.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Délai de preavis
        </h3>
        <p>
          Le preavis minimum est de <strong>30 jours</strong> pour un CDI. En
          cas de faute grave (<em>summary dismissal</em>), aucun preavis
          n&apos;est requis, mais l&apos;employeur doit prouver la gravite de la
          faute. Le salarié licencié pour motif non disciplinaire a droit à un
          preavis paye ou à une indemnité compensatrice equivalente.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Indemnites de licenciement
        </h3>
        <p>
          En cas de licenciement pour motif économique (<em>redundancy</em>), le
          salarié a droit à une indemnité de{" "}
          <strong>3 mois de rémunération par année de service</strong>. Cette
          indemnité est distincte des droits PRGF accumules.
        </p>
        <p>
          Si le licenciement est juge <strong>injustifie</strong> par le tribunal
          du travail, l&apos;employeur peut être condamne a verser des dommages
          et intérêts pouvant aller jusqu&apos;a{" "}
          <strong>12 mois de rémunération</strong>.
        </p>

        <Callout variant="red" title="Risque employeur">
          <p>
            Un licenciement mal documente ou sans procedure disciplinaire
            préalable est quasi systématiquement requalifie en licenciement
            abusif. L&apos;accompagnement juridique est fortement recommandé
            avant toute rupture de contrat.
          </p>
        </Callout>
      </Section>

      {/* ===== 10. TRAVAILLEURS ETRANGERS ===== */}
      <Section id="étrangers" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          10. Emploi de travailleurs étrangers
        </h2>
        <p>
          Tout ressortissant étranger souhaitant travailler à Maurice doit
          détenir un permis de travail valide. Depuis la réforme du système des
          permis, le véhicule principal est l&apos;
          <strong>Occupation Permit (OP) — categorie Professional</strong>,
          délivré par l&apos;Economic Development Board (EDB).
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          OP Professional — deux variantes
        </h3>
        <ul>
          <li>
            <strong>ProPass :</strong> pour les salariés, avec un salaire
            minimum de Rs 30 000/mois. Valable 10 ans.
          </li>
          <li>
            <strong>Expert Pass :</strong> pour les cadres dirigeants et
            consultants seniors, avec un salaire minimum de Rs 250 000/mois.
            Valable 10 ans (nouveau 2025).
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800">
          Obligations de l&apos;employeur
        </h3>
        <p>
          L&apos;employeur est responsable de la demande d&apos;OP pour ses
          salariés étrangers. Il doit démontrer que le poste ne peut pas être
          pourvu par un candidat local (sauf dans les secteurs en tension
          identifies par l&apos;EDB). L&apos;employeur doit également s&apos;assurer
          que le salarié étranger bénéficie des mêmes droits que les salariés
          mauriciens en matière de CSG, PRGF, congés et conditions de travail.
        </p>

        <Callout variant="blue" title="A noter">
          <p>
            Le traitement d&apos;une demande d&apos;OP Professional prend en
            général <strong>4 a 8 semaines</strong>. Il est conseille
            d&apos;anticiper les recrutements étrangers en lancant la procedure
            des la signature de la promesse d&apos;embauche.
          </p>
        </Callout>
      </Section>

      {/* ===== 11. BD STAR ===== */}
      <Section id="bd-star" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          11. Le rôle de BD Star : paie externalisée, conformité, bulletins
        </h2>
        <p>
          <strong>BD Star Management Services</strong>, la branche
          opérationnelle du groupe Vanille Stratégie basée a Ebene (Cybercity),
          propose un service complet de gestion de la paie et des ressources
          humaines pour les entreprises implantees à Maurice.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Ce que BD Star prend en charge
        </h3>
        <ul>
          <li>
            <strong>Calcul et émission des bulletins de paie</strong> conformes
            au WRA, incluant CSG, PAYE, PRGF et NSF
          </li>
          <li>
            <strong>Déclarations mensuelles</strong> auprès de la MRA (CSG
            Return, PAYE Return, PRGF Return)
          </li>
          <li>
            <strong>Redaction des contrats de travail</strong> conformes a la
            législation en vigueur
          </li>
          <li>
            <strong>Gestion des congés et absences</strong> avec suivi temps réel
            via la plateforme OKE
          </li>
          <li>
            <strong>Accompagnement dans les procédures de licenciement</strong>{" "}
            (documentation, calcul des indemnités, mediation)
          </li>
          <li>
            <strong>Demandes d&apos;Occupation Permit</strong> pour les salariés
            étrangers auprès de l&apos;EDB
          </li>
          <li>
            <strong>Veille réglementaire continue</strong> : chaque modification
            du WRA ou du Finance Act est immédiatement intégrée dans les
            processus de paie
          </li>
        </ul>

        <Callout variant="green" title="Pourquoi externaliser la paie ?">
          <p>
            La complexité du système mauricien (CSG par tranches, PRGF, NSF,
            compensation salariale, déclarations multiples) rend la paie
            particulièrement technique. Une erreur de calcul peut entrainer des
            pénalités MRA et des litiges prudhommaux. L&apos;externalisation
            auprès d&apos;un cabinet spécialisé est le meilleur moyen de
            sécuriser votre conformité.
          </p>
        </Callout>
      </Section>

      {/* ===== 12. TABLEAU RECAPITULATIF ===== */}
      <Section id="tableau" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          12. Tableau recapitulatif : du salaire brut au coût total employeur
        </h2>
        <p>
          Voici une simulation du coût total pour l&apos;employeur à partir
          d&apos;un salaire brut donne, en incluant toutes les charges
          obligatoires (CSG employeur, NSF employeur, levy, PRGF).
        </p>

        <div className="my-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 rounded-xl border border-slate-200 text-sm">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="px-3 py-3 text-left font-semibold">
                  Élément
                </th>
                <th className="px-3 py-3 text-center font-semibold">
                  Salarie A
                </th>
                <th className="px-3 py-3 text-center font-semibold">
                  Salarie B
                </th>
                <th className="px-3 py-3 text-center font-semibold">
                  Salarie C
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-3 py-3 font-medium text-slate-700">
                  Salaire brut mensuel
                </td>
                <td className="px-3 py-3 text-center text-slate-900">
                  Rs 20 000
                </td>
                <td className="px-3 py-3 text-center text-slate-900">
                  Rs 50 000
                </td>
                <td className="px-3 py-3 text-center text-slate-900">
                  Rs 100 000
                </td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-3 py-3 text-slate-700">
                  CSG employeur (3% / 6%)
                </td>
                <td className="px-3 py-3 text-center text-slate-900">
                  Rs 600
                </td>
                <td className="px-3 py-3 text-center text-slate-900">
                  Rs 1 500
                </td>
                <td className="px-3 py-3 text-center text-slate-900">
                  Rs 6 000
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 text-slate-700">
                  NSF employeur (2,5%)
                </td>
                <td className="px-3 py-3 text-center text-slate-900">
                  Rs 500
                </td>
                <td className="px-3 py-3 text-center text-slate-900">
                  Rs 1 250
                </td>
                <td className="px-3 py-3 text-center text-slate-900">
                  Rs 2 500
                </td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-3 py-3 text-slate-700">
                  Levy employeur (1,5%)
                </td>
                <td className="px-3 py-3 text-center text-slate-900">
                  Rs 300
                </td>
                <td className="px-3 py-3 text-center text-slate-900">
                  Rs 750
                </td>
                <td className="px-3 py-3 text-center text-slate-900">
                  Rs 1 500
                </td>
              </tr>
              <tr>
                <td className="px-3 py-3 text-slate-700">
                  PRGF (4,5%)
                </td>
                <td className="px-3 py-3 text-center text-slate-900">
                  Rs 900
                </td>
                <td className="px-3 py-3 text-center text-slate-900">
                  Rs 2 250
                </td>
                <td className="px-3 py-3 text-center text-slate-900">
                  Rs 4 500
                </td>
              </tr>
              <tr className="bg-blue-50">
                <td className="px-3 py-3 font-bold text-blue-900">
                  Cout total employeur
                </td>
                <td className="px-3 py-3 text-center font-bold text-blue-900">
                  Rs 22 300
                </td>
                <td className="px-3 py-3 text-center font-bold text-blue-900">
                  Rs 55 750
                </td>
                <td className="px-3 py-3 text-center font-bold text-blue-900">
                  Rs 114 500
                </td>
              </tr>
              <tr className="bg-blue-100">
                <td className="px-3 py-3 font-bold text-blue-900">
                  Surcharge employeur
                </td>
                <td className="px-3 py-3 text-center font-bold text-blue-900">
                  +11,5%
                </td>
                <td className="px-3 py-3 text-center font-bold text-blue-900">
                  +11,5%
                </td>
                <td className="px-3 py-3 text-center font-bold text-blue-900">
                  +14,5%
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-slate-500">
          Simulation indicative basée sur les taux en vigueur en mars 2026.
          Hors primes, heures supplémentaires et avantages en nature. Le taux de
          surcharge passe de ~11,5% a ~14,5% au-dela de Rs 50 000 en raison du
          doublement des taux CSG.
        </p>

        <Callout variant="blue" title="Comparaison internationale">
          <p>
            A Maurice, le coût total employeur représente environ{" "}
            <strong>11 à 15%</strong> du salaire brut en charges patronales.
            C&apos;est nettement inferieur à la France (~42%), au Maroc (~26%)
            ou au Portugal (~23%). C&apos;est l&apos;un des atouts majeurs de
            l&apos;ile pour les entreprises a forte intensite de main-d&apos;oeuvre.
          </p>
        </Callout>
      </Section>

      {/* ===== SOURCES ===== */}
      <section className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-slate-900">
            Sources officielles
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {officialSources
              .filter((s) =>
                ["MRA", "EDB Mauritius"].includes(s.name)
              )
              .map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    {s.name}
                  </a>{" "}
                  — {s.description}
                </li>
              ))}
            <li>
              <a
                href="https://www.mra.mu/business/csg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                MRA — CSG
              </a>{" "}
              — Taux et déclarations CSG
            </li>
            <li>
              <a
                href="https://taxsummaries.pwc.com/mauritius/individual/other-taxes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                PwC Tax Summaries — Mauritius
              </a>{" "}
              — Synthese fiscale individus
            </li>
            <li>
              <a
                href="https://www.mra.mu/download/PRGFGuide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                MRA — Guide PRGF
              </a>{" "}
              — Portable Retirement Gratuity Fund
            </li>
          </ul>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Besoin d&apos;un accompagnement paie et RH à Maurice ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            BD Star gère la paie de dizaines d&apos;entreprises à Maurice —
            bulletins, déclarations MRA, conformité Workers&apos; Rights Act.
            Contactez-nous pour un devis personnalisé.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg">
              <Link href="/contact">Demander un devis paie</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/services/rh-paie">
                Decouvrir le service RH &amp; Paie
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
