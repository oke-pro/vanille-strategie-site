import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder, officialSources } from "@/data/site";

export const metadata: Metadata = {
  title:
    "Droit du travail a Maurice — Workers' Rights Act, salaires, charges : ce que tout employeur doit savoir | Vanille Strategie",
  description:
    "Guide complet du droit du travail a Maurice : Workers' Rights Act 2019, salaire minimum (Rs 17 745), CSG, PAYE, PRGF, conges, licenciement, emploi d'etrangers. Par Didier Laroussinie, Expert-Comptable Fiscaliste.",
  keywords: [
    "droit du travail Maurice",
    "Workers Rights Act 2019",
    "salaire minimum Maurice",
    "CSG Maurice",
    "PAYE Maurice",
    "charges sociales Maurice",
    "conges Maurice",
    "licenciement Maurice",
    "PRGF Maurice",
    "Occupation Permit Professional",
    "paie Maurice",
    "BD Star",
  ],
  openGraph: {
    title:
      "Droit du travail a Maurice — Workers' Rights Act, salaires, charges",
    description:
      "Guide complet du droit du travail mauricien. Salaire minimum, CSG, PAYE, conges, licenciement, emploi d'etrangers. Par Didier Laroussinie.",
    type: "article",
    locale: "fr_FR",
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
            Droit du travail a Maurice — Workers&apos; Rights Act, salaires,
            charges : ce que tout employeur doit savoir
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Embaucher a Maurice est simple, mais pas sans regles. Le
            Workers&apos; Rights Act 2019 encadre contrats, salaires, conges,
            licenciements et charges sociales. Ce guide vous donne toutes les
            cles pour etre en conformite — et eviter les mauvaises surprises.
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
                PAYE — retenue a la source
              </a>
            </li>
            <li>
              <a href="#prgf" className="hover:underline">
                Portable Retirement Gratuity Fund (PRGF)
              </a>
            </li>
            <li>
              <a href="#conges" className="hover:underline">
                Conges : annuels, maladie, maternite
              </a>
            </li>
            <li>
              <a href="#heures" className="hover:underline">
                Heures de travail et heures supplementaires
              </a>
            </li>
            <li>
              <a href="#licenciement" className="hover:underline">
                Licenciement : procedures et indemnites
              </a>
            </li>
            <li>
              <a href="#etrangers" className="hover:underline">
                Emploi de travailleurs etrangers
              </a>
            </li>
            <li>
              <a href="#bd-star" className="hover:underline">
                Le role de BD Star : paie externalisee
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
          Act 2008 et l&apos;Employment Relations Act 2008. Il constitue
          desormais le texte unique regissant les relations de travail a Maurice.
        </p>
        <p>
          Le WRA couvre l&apos;ensemble du droit du travail : contrats, salaire
          minimum, conges, heures de travail, securite au travail, egalite de
          traitement, licenciement, indemnites de depart et representation
          syndicale. C&apos;est la reference obligatoire pour tout employeur
          operant sur le territoire mauricien — qu&apos;il s&apos;agisse
          d&apos;une Domestic Company, d&apos;une GBC ou d&apos;une filiale
          internationale.
        </p>
        <p>
          Le texte est regulierement amende par les Finance Acts successifs.
          Le <strong>Finance Act 2025</strong> a introduit plusieurs ajustements
          (compensation salariale, seuils PAYE, taux CSG) qu&apos;il est
          essentiel de suivre.
        </p>

        <Callout variant="blue" title="A retenir">
          <p>
            Le WRA s&apos;applique a <strong>tous les employeurs prives</strong>{" "}
            a Maurice, y compris les societes a capitaux etrangers. Le
            non-respect de ses dispositions expose a des sanctions penales et
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
          Contrat a duree indeterminee (CDI)
        </h3>
        <p>
          C&apos;est la forme par defaut. Tout contrat qui ne stipule pas
          expressement une duree determinee est automatiquement considere comme
          un CDI. Le contrat doit etre ecrit et remis au salarie dans les{" "}
          <strong>14 jours</strong> suivant le debut de l&apos;emploi.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Contrat a duree determinee (CDD)
        </h3>
        <p>
          Le CDD est autorise pour des projets specifiques, des remplacements ou
          des activites saisonnieres. Sa duree ne peut exceder{" "}
          <strong>24 mois</strong>. Au-dela, ou en cas de renouvellement
          successif, le contrat est automatiquement requalifie en CDI.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Contrat a temps partiel
        </h3>
        <p>
          Un salarie a temps partiel travaille moins que les heures normales
          prevues pour un employe a temps plein dans la meme categorie. Ses
          droits (conges, CSG, PRGF) sont calcules au prorata de ses heures de
          travail.
        </p>

        <Callout variant="amber" title="Obligation legale">
          <p>
            Tout contrat de travail doit mentionner : la remuneration, les
            horaires, la description du poste, la duree de la periode
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
          national a Maurice est fixe a :
        </p>
        <div className="my-6 rounded-xl border border-blue-200 bg-blue-50 p-6 text-center">
          <p className="text-4xl font-bold text-blue-900">
            Rs 17 745 / mois
          </p>
          <p className="mt-2 text-sm text-blue-700">
            National Minimum Wage — applicable a tous les secteurs du prive
          </p>
        </div>
        <p>
          Ce montant represente une hausse de <strong>Rs 635</strong> par
          rapport a 2025 (Rs 17 110), soit une augmentation d&apos;environ 3,7%.
        </p>
        <p>
          En complement, une <strong>compensation salariale</strong> de
          Rs 635/mois est versee a tous les salaries dont le salaire de base ne
          depasse pas Rs 50 000 par mois. Cette compensation est a la charge de
          l&apos;employeur, mais les entreprises ayant un chiffre d&apos;affaires
          inferieur a Rs 50 millions peuvent beneficier d&apos;une aide
          gouvernementale partielle via la MRA.
        </p>

        <Callout variant="green" title="Bon a savoir">
          <p>
            Le NMW s&apos;applique uniformement a tous les secteurs du prive,
            sans distinction de branche. Il inclut le salaire de base mais
            exclut les primes, heures supplementaires et avantages en nature.
          </p>
        </Callout>
      </Section>

      {/* ===== 4. CSG ===== */}
      <Section id="csg" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          4. Charges sociales : la Contribution Sociale Generalisee (CSG)
        </h2>
        <p>
          Depuis le <strong>1er septembre 2020</strong>, la CSG a remplace le
          National Pensions Fund (NPF) comme regime de protection sociale
          obligatoire a Maurice. Elle est collectee par la{" "}
          <strong>Mauritius Revenue Authority (MRA)</strong> et finance les
          pensions, la sante et l&apos;aide sociale.
        </p>
        <p>
          La CSG est calculee sur le <strong>salaire de base</strong> du
          salarie. Les taux varient selon le niveau de remuneration :
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
                  Part salarie
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
          En plus de la CSG, l&apos;employeur est soumis a des cotisations au{" "}
          <strong>National Savings Fund (NSF)</strong> : 2,5% de la remuneration
          totale a la charge de l&apos;employeur et 1% a la charge du salarie.
          Une taxe additionnelle (<em>levy</em>) de 1,5% sur les salaires de
          base est egalement due par l&apos;employeur.
        </p>

        <Callout variant="red" title="Point de vigilance">
          <p>
            La CSG n&apos;a <strong>pas de plafond</strong> — contrairement a
            l&apos;ancien NPF. Les hauts salaires generent donc des cotisations
            significatives. Les declarations CSG sont mensuelles et doivent etre
            deposees avant le 20 du mois suivant.
          </p>
        </Callout>
      </Section>

      {/* ===== 5. PAYE ===== */}
      <Section id="paye" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          5. PAYE (Pay As You Earn) — retenue a la source
        </h2>
        <p>
          Le systeme PAYE est le mecanisme de prelevement de l&apos;impot sur le
          revenu directement sur le salaire. L&apos;employeur est responsable du
          calcul, de la retenue et du versement a la MRA.
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
          Concretement, un salarie gagnant jusqu&apos;a{" "}
          <strong>Rs 41 667/mois</strong> (soit Rs 500 000/an) est totalement
          exonere d&apos;impot sur le revenu. Le seuil mensuel pour etre
          considere comme <em>exempt person</em> est de{" "}
          <strong>Rs 38 462</strong>.
        </p>
        <p>
          Une <strong>Fair Share Contribution</strong> de 15% s&apos;applique
          aux revenus nets annuels superieurs a Rs 12 millions (dividendes
          inclus).
        </p>

        <Callout variant="blue" title="Avantage Maurice">
          <p>
            Avec un seuil d&apos;exoneration a Rs 500 000/an et un taux maximal
            de 20%, la fiscalite sur les revenus personnels a Maurice reste
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
          y cotiser pour chacun de ses salaries.
        </p>
        <p>
          Le taux de contribution est de{" "}
          <strong>4,5% de la remuneration mensuelle</strong> du salarie. La
          remuneration prise en compte comprend le salaire de base, les primes de
          productivite et de presence, ainsi que les heures supplementaires.
        </p>
        <p>
          Le PRGF est <strong>portable</strong> : les droits accumules suivent
          le salarie d&apos;un employeur a l&apos;autre tout au long de sa
          carriere. En cas de depart a la retraite ou de cessation d&apos;emploi,
          le salarie recupere l&apos;integralite de ses droits.
        </p>
        <p>
          L&apos;employeur peut deduire de sa contribution PRGF toute
          contribution deja versee a un regime de pension prive ou au Sugar
          Industry Pension Fund (SIPF), a condition que ce montant soit au moins
          egal au taux PRGF de 4,5%.
        </p>

        <Callout variant="amber" title="Echeancier PRGF">
          <p>
            Les declarations PRGF sont mensuelles. L&apos;employeur doit
            soumettre le <em>PRGF Return</em> a la MRA et verser les
            contributions avant le <strong>20 du mois suivant</strong>. Le
            non-respect entraine des penalites de retard.
          </p>
        </Callout>
      </Section>

      {/* ===== 7. CONGES ===== */}
      <Section id="conges" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          7. Conges : annuels, maladie, maternite
        </h2>

        <h3 className="text-xl font-semibold text-slate-800">
          Conges annuels
        </h3>
        <p>
          Tout salarie a temps plein a droit a{" "}
          <strong>20 jours ouvrables</strong> de conges annuels payes par an
          (contre 14 jours sous l&apos;ancienne legislation). Les conges non
          pris sont cumulables et peuvent etre reportes ou indemnises en fin de
          contrat.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Conges maladie
        </h3>
        <p>
          Le WRA accorde <strong>15 jours ouvrables</strong> de conge maladie
          par an, entierement payes par l&apos;employeur. Les jours non utilises
          sont cumulables d&apos;une annee sur l&apos;autre, sans plafond
          explicite dans la loi.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Conge maternite
        </h3>
        <p>
          Les salariees beneficient de{" "}
          <strong>14 semaines de conge maternite</strong> (contre 12 sous
          l&apos;ancienne loi), dont au moins 7 semaines doivent etre prises
          apres l&apos;accouchement. Le conge est remunere a 100% du salaire.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Autres conges prevus par la loi
        </h3>
        <ul>
          <li>
            <strong>Conge paternite :</strong> 5 jours ouvrables continus
          </li>
          <li>
            <strong>Conge deuil :</strong> 3 jours en cas de deces d&apos;un
            proche
          </li>
          <li>
            <strong>Jours feries :</strong> Maurice compte environ 15 jours
            feries par an ; si le salarie travaille un jour ferie, il a droit a
            une majoration de 100%
          </li>
        </ul>

        <Callout variant="green" title="Comparaison avantageuse">
          <p>
            Avec 20 jours de conges annuels + 15 jours maladie + 14 semaines de
            maternite, le regime mauricien est sensiblement plus genereux que
            celui de nombreux pays de la zone (Inde, Dubai, Singapour) et
            comparable au standard europeen.
          </p>
        </Callout>
      </Section>

      {/* ===== 8. HEURES DE TRAVAIL ===== */}
      <Section id="heures" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          8. Heures de travail et heures supplementaires
        </h2>
        <p>
          La duree legale maximale de travail est de{" "}
          <strong>45 heures par semaine</strong>, generalement reparties sur 5 ou
          6 jours. Au-dela, toute heure effectuee est consideree comme
          supplementaire.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Majoration des heures supplementaires
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
                  Heures supplementaires (jour ouvrable)
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
                  Travail un jour ferie
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
          supplementaires). Le salarie a droit a un repos minimum de{" "}
          <strong>11 heures consecutives</strong> entre deux journees de travail.
        </p>

        <Callout variant="amber" title="Attention">
          <p>
            Les heures supplementaires entrent dans le calcul de la remuneration
            pour le PRGF. Elles sont egalement soumises a la CSG et au PAYE.
            Sous-estimer leur impact peut fausser significativement le cout total
            d&apos;un salarie.
          </p>
        </Callout>
      </Section>

      {/* ===== 9. LICENCIEMENT ===== */}
      <Section id="licenciement" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          9. Licenciement : procedures, preavis, indemnites
        </h2>
        <p>
          Le WRA encadre strictement la rupture du contrat de travail. Un
          licenciement ne peut intervenir que pour des{" "}
          <strong>motifs valables et justifies</strong> : faute grave,
          insuffisance professionnelle, motif economique ou suppression de poste.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Delai de preavis
        </h3>
        <p>
          Le preavis minimum est de <strong>30 jours</strong> pour un CDI. En
          cas de faute grave (<em>summary dismissal</em>), aucun preavis
          n&apos;est requis, mais l&apos;employeur doit prouver la gravite de la
          faute. Le salarie licencie pour motif non disciplinaire a droit a un
          preavis paye ou a une indemnite compensatrice equivalente.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Indemnites de licenciement
        </h3>
        <p>
          En cas de licenciement pour motif economique (<em>redundancy</em>), le
          salarie a droit a une indemnite de{" "}
          <strong>3 mois de remuneration par annee de service</strong>. Cette
          indemnite est distincte des droits PRGF accumules.
        </p>
        <p>
          Si le licenciement est juge <strong>injustifie</strong> par le tribunal
          du travail, l&apos;employeur peut etre condamne a verser des dommages
          et interets pouvant aller jusqu&apos;a{" "}
          <strong>12 mois de remuneration</strong>.
        </p>

        <Callout variant="red" title="Risque employeur">
          <p>
            Un licenciement mal documente ou sans procedure disciplinaire
            prealable est quasi systematiquement requalifie en licenciement
            abusif. L&apos;accompagnement juridique est fortement recommande
            avant toute rupture de contrat.
          </p>
        </Callout>
      </Section>

      {/* ===== 10. TRAVAILLEURS ETRANGERS ===== */}
      <Section id="etrangers" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          10. Emploi de travailleurs etrangers
        </h2>
        <p>
          Tout ressortissant etranger souhaitant travailler a Maurice doit
          detenir un permis de travail valide. Depuis la reforme du systeme des
          permis, le vehicule principal est l&apos;
          <strong>Occupation Permit (OP) — categorie Professional</strong>,
          delivre par l&apos;Economic Development Board (EDB).
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          OP Professional — deux variantes
        </h3>
        <ul>
          <li>
            <strong>ProPass :</strong> pour les salaries, avec un salaire
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
          salaries etrangers. Il doit demontrer que le poste ne peut pas etre
          pourvu par un candidat local (sauf dans les secteurs en tension
          identifies par l&apos;EDB). L&apos;employeur doit egalement s&apos;assurer
          que le salarie etranger beneficie des memes droits que les salaries
          mauriciens en matiere de CSG, PRGF, conges et conditions de travail.
        </p>

        <Callout variant="blue" title="A noter">
          <p>
            Le traitement d&apos;une demande d&apos;OP Professional prend en
            general <strong>4 a 8 semaines</strong>. Il est conseille
            d&apos;anticiper les recrutements etrangers en lancant la procedure
            des la signature de la promesse d&apos;embauche.
          </p>
        </Callout>
      </Section>

      {/* ===== 11. BD STAR ===== */}
      <Section id="bd-star" bg="white">
        <h2 className="text-2xl font-bold text-slate-900">
          11. Le role de BD Star : paie externalisee, conformite, bulletins
        </h2>
        <p>
          <strong>BD Star Management Services</strong>, la branche
          operationnelle du groupe Vanille Strategie basee a Ebene (Cybercity),
          propose un service complet de gestion de la paie et des ressources
          humaines pour les entreprises implantees a Maurice.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">
          Ce que BD Star prend en charge
        </h3>
        <ul>
          <li>
            <strong>Calcul et emission des bulletins de paie</strong> conformes
            au WRA, incluant CSG, PAYE, PRGF et NSF
          </li>
          <li>
            <strong>Declarations mensuelles</strong> aupres de la MRA (CSG
            Return, PAYE Return, PRGF Return)
          </li>
          <li>
            <strong>Redaction des contrats de travail</strong> conformes a la
            legislation en vigueur
          </li>
          <li>
            <strong>Gestion des conges et absences</strong> avec suivi temps reel
            via la plateforme OKE
          </li>
          <li>
            <strong>Accompagnement dans les procedures de licenciement</strong>{" "}
            (documentation, calcul des indemnites, mediation)
          </li>
          <li>
            <strong>Demandes d&apos;Occupation Permit</strong> pour les salaries
            etrangers aupres de l&apos;EDB
          </li>
          <li>
            <strong>Veille reglementaire continue</strong> : chaque modification
            du WRA ou du Finance Act est immediatement integree dans les
            processus de paie
          </li>
        </ul>

        <Callout variant="green" title="Pourquoi externaliser la paie ?">
          <p>
            La complexite du systeme mauricien (CSG par tranches, PRGF, NSF,
            compensation salariale, declarations multiples) rend la paie
            particulierement technique. Une erreur de calcul peut entrainer des
            penalites MRA et des litiges prudhommaux. L&apos;externalisation
            aupres d&apos;un cabinet specialise est le meilleur moyen de
            securiser votre conformite.
          </p>
        </Callout>
      </Section>

      {/* ===== 12. TABLEAU RECAPITULATIF ===== */}
      <Section id="tableau" bg="slate">
        <h2 className="text-2xl font-bold text-slate-900">
          12. Tableau recapitulatif : du salaire brut au cout total employeur
        </h2>
        <p>
          Voici une simulation du cout total pour l&apos;employeur a partir
          d&apos;un salaire brut donne, en incluant toutes les charges
          obligatoires (CSG employeur, NSF employeur, levy, PRGF).
        </p>

        <div className="my-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 rounded-xl border border-slate-200 text-sm">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="px-3 py-3 text-left font-semibold">
                  Element
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
          Simulation indicative basee sur les taux en vigueur en mars 2026.
          Hors primes, heures supplementaires et avantages en nature. Le taux de
          surcharge passe de ~11,5% a ~14,5% au-dela de Rs 50 000 en raison du
          doublement des taux CSG.
        </p>

        <Callout variant="blue" title="Comparaison internationale">
          <p>
            A Maurice, le cout total employeur represente environ{" "}
            <strong>11 a 15%</strong> du salaire brut en charges patronales.
            C&apos;est nettement inferieur a la France (~42%), au Maroc (~26%)
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
              — Taux et declarations CSG
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
            Besoin d&apos;un accompagnement paie et RH a Maurice ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            BD Star gere la paie de dizaines d&apos;entreprises a Maurice —
            bulletins, declarations MRA, conformite Workers&apos; Rights Act.
            Contactez-nous pour un devis personnalise.
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
