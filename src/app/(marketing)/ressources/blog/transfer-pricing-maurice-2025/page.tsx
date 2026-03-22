import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder, officialSources } from "@/data/site";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Transfer Pricing à Maurice — Nouvelles obligations du Finance Act 2025",
  description:
    "Le Finance Act 2025 introduit un cadre documentaire formel de Transfer Pricing à Maurice. Obligations, méthodes OCDE, pénalités, impact GBC — guide complet par Didier Laroussinie.",
  alternates: {
    canonical: "https://vanillestrategie.fr/ressources/blog/transfer-pricing-maurice-2025",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    title: "Transfer Pricing à Maurice — Nouvelles obligations du Finance Act 2025",
    description:
      "Le Finance Act 2025 introduit un cadre documentaire formel de Transfer Pricing à Maurice. Obligations, méthodes OCDE, pénalités, impact GBC — guide complet par Didier Laroussinie.",
    siteName: "Vanille Stratégie",
    images: [{ url: "https://vanillestrategie.fr/images/hero-paradise.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transfer Pricing à Maurice — Nouvelles obligations du Finance Act 2025",
    description:
      "Le Finance Act 2025 introduit un cadre documentaire formel de Transfer Pricing à Maurice. Obligations, méthodes OCDE, pénalités, impact GBC — guide complet par Didier Laroussinie.",
    images: ["https://vanillestrategie.fr/images/hero-paradise.jpg"],
  },
};

export default function TransferPricingPage() {
  return (
    <>
      <BlogPostingJsonLd
        title="Transfer Pricing à Maurice — Nouvelles obligations du Finance Act 2025"
        description="Le Finance Act 2025 introduit un cadre documentaire formel de Transfer Pricing à Maurice. Obligations, méthodes OCDE, pénalités, impact GBC — guide complet par Didier Laroussinie."
        slug="transfer-pricing-maurice-2025"
        datePublished="2026-03-09"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/ressources/blog" },
          { name: "Transfer Pricing à Maurice — Nouvelles obligations du Finance Act 2025", url: "/ressources/blog/transfer-pricing-maurice-2025" },
        ]}
      />
      {/* ============================================================ */}
      {/* Hero Section */}
      {/* ============================================================ */}
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
              Fiscalité
            </span>
            <span className="text-xs text-slate-500">Mars 2026</span>
            <span className="text-xs text-slate-500">· 18 min</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Transfer Pricing à Maurice — Nouvelles obligations du Finance Act
            2025
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Pour la première fois, Maurice se dote d&apos;un cadre documentaire
            formel en matière de prix de transfert. Ce que ca change pour les
            GBC, les groupes internationaux et les entrepreneurs.
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

      {/* ============================================================ */}
      {/* Section 1 — Contexte */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            1. Contexte : pourquoi Maurice legifere maintenant sur le Transfer
            Pricing
          </h2>
          <p>
            Jusqu&apos;au Finance Act 2025 (Act No. 18 of 2025, publie le 9
            aout 2025), Maurice ne disposait d&apos;aucun cadre législatif
            formel en matière de prix de transfert. La Mauritius Revenue
            Authority (MRA) pouvait contester des transactions entre parties
            liees, mais sans texte spécifique imposant une documentation
            structuree.
          </p>
          <p>
            Cette lacune posait un double problème. D&apos;une part, elle
            exposait Maurice aux critiques du Forum mondial de l&apos;OCDE et du
            Cadre inclusif BEPS, qui exigent des juridictions qu&apos;elles
            adoptent des règles de prix de transfert conformes au Principe de
            pleine concurrence (arm&apos;s length principle). D&apos;autre part,
            elle creait une insécurité juridique pour les entreprises
            elles-mêmes : sans règles claires, impossible de savoir si une
            politique de prix était conforme ou non.
          </p>
          <p>
            Le Finance Act 2025 corrige cela en introduisant, dans l&apos;Income
            Tax Act, des dispositions spécifiques sur le Transfer Pricing. Ce
            n&apos;est pas un durcissement fiscal — c&apos;est une mise en
            conformité avec les standards internationaux.
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 not-prose">
            <p className="text-sm font-semibold text-blue-800">
              A retenir
            </p>
            <p className="mt-1 text-sm text-blue-700">
              Le Transfer Pricing n&apos;est pas un nouvel impôt. C&apos;est un
              ensemble de règles qui encadrent la fixation des prix dans les
              transactions entre sociétés liees, pour s&apos;assurer
              qu&apos;elles reflètent les conditions du marche. Maurice rejoint
              ainsi la majorité des juridictions qui appliquent déjà ces règles
              (France, Royaume-Uni, Singapour, Inde, Afrique du Sud...).
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 2 — Qui est concerné */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            2. Qui est concerné : la notion de &ldquo;connected persons&rdquo;
          </h2>
          <p>
            Les nouvelles règles s&apos;appliquent à toute société résidente
            fiscale à Maurice qui réalise des transactions avec des{" "}
            <strong>connected persons</strong> (parties liees). La définition
            est large et couvre :
          </p>
          <ul>
            <li>
              Les sociétés du même groupe (société mère, filiales, sociétés
              soeurs)
            </li>
            <li>
              Les entites dans lesquelles une personne detient directement ou
              indirectement 25% ou plus des parts ou droits de vote
            </li>
            <li>
              Les transactions avec des directeurs, actionnaires de contrôle ou
              leurs proches
            </li>
            <li>
              Toute relation ou la MRA peut démontrer qu&apos;une partie exerce
              une influence significative sur l&apos;autre
            </li>
          </ul>
          <p>
            En pratique, cela concerné principalement les{" "}
            <strong>Global Business Companies (GBC)</strong> qui facturent ou
            reçoivent des prestations de sociétés du groupe, les holdings
            mauriciennes avec des filiales à l&apos;étranger, et les
            entrepreneurs qui opèrent plusieurs entites dans differentes
            juridictions.
          </p>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 not-prose">
            <p className="text-sm font-semibold text-amber-800">
              Point d&apos;attention
            </p>
            <p className="mt-1 text-sm text-amber-700">
              Si vous êtes un entrepreneur avec une seule Domestic Company a
              Maurice, sans transactions avec des entites liées a
              l&apos;étranger, vous n&apos;etes probablement pas concerné par
              ces nouvelles obligations. Mais si vous avez une structure en
              France ET à Maurice, même simple, vous devez vous poser la
              question. En cas de doute, faites-nous analyser votre situation.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 3 — Nouvelles obligations documentaires */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            3. Nouvelles obligations : la documentation a maintenir
          </h2>
          <p>
            Le Finance Act 2025 impose aux sociétés concernées de maintenir des{" "}
            <strong>prescribed records</strong> (documents prescrits) relatifs a
            leurs transactions avec des parties liees. Concrètement, vous devez
            être en mesure de produire :
          </p>
          <ul>
            <li>
              <strong>Un Master File</strong> (fichier principal) : description
              du groupe, de son organisation, de sa stratégie commerciale, de
              ses activités intangibles (propriété intellectuelle, marques,
              brevets) et de ses arrangements financiers intergroupe.
            </li>
            <li>
              <strong>Un Local File</strong> (fichier local) : détail des
              transactions contrôlées de l&apos;entite mauricienne — nature,
              montants, parties impliquees, analyse fonctionnelle (fonctions
              exercees, risques assumes, actifs utilisés) et justification de la
              méthode de prix retenue.
            </li>
            <li>
              <strong>Les contrats</strong> encadrant les transactions
              intragroupe (contrats de management fees, de prestations de
              services, de licences, de prêts...).
            </li>
            <li>
              <strong>Les études de comparabilite</strong> (benchmarking) ou
              toute analyse demontrant que le prix est conforme au principe de
              pleine concurrence.
            </li>
          </ul>
          <p>
            Ces documents doivent être prepares en temps utile — c&apos;est-à-dire
            au moment de la transaction ou au plus tard lors de la preparation de
            la déclaration fiscale annuelle — et conserves pendant au moins{" "}
            <strong>7 ans</strong>.
          </p>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 not-prose">
            <p className="text-sm font-semibold text-red-800">
              Danger
            </p>
            <p className="mt-1 text-sm text-red-700">
              L&apos;erreur la plus courante est de considerer que la
              documentation peut être preparee &ldquo;après coup&rdquo;, en cas
              de contrôle. C&apos;est faux. La MRA attend une documentation
              contemporaine, preparee au moment des transactions. Une
              documentation reconstituee a posteriori a beaucoup moins de valeur
              probante et peut être ecartee par le fisc.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 4 — Methodes de prix de transfert */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            4. Methodes de prix de transfert acceptees
          </h2>
          <p>
            Maurice adopte les cinq méthodes reconnues par les{" "}
            <strong>Principes de l&apos;OCDE applicables en matière de prix de transfert</strong>. Le choix de
            la méthode dépend de la nature de la transaction et de la
            disponibilité des donnees comparables.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Methodes traditionnelles
          </h3>

          <p>
            <strong>
              1. Methode du prix comparable sur le marche libre (CUP —
              Comparable Uncontrolled Price)
            </strong>
          </p>
          <p>
            On compare le prix de la transaction contrôlée au prix pratique dans
            une transaction comparable entre parties indépendantes. C&apos;est la
            méthode la plus directe, mais elle exige des comparables très
            proches, ce qui est rarement le cas.
          </p>

          <p>
            <strong>
              2. Methode du prix de revente (Resale Price Method)
            </strong>
          </p>
          <p>
            On part du prix de revente à un tiers indépendant et on déduit une
            marge brute appropriee. Adaptee aux distributeurs qui revendiquent
            des produits achetes à une société liée sans y apporter de
            transformation significative.
          </p>

          <p>
            <strong>
              3. Methode du coût majore (Cost Plus Method)
            </strong>
          </p>
          <p>
            On part des couts engages par le fournisseur lie et on y ajoute une
            marge appropriee. Privilegiee pour les prestations de services
            intragroupe (management fees, services administratifs, R&D) et la
            fabrication en sous-traitance.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Methodes transactionnelles de bénéfices
          </h3>

          <p>
            <strong>
              4. Methode transactionnelle de la marge nette (TNMM — Transactional Net Margin Method)
            </strong>
          </p>
          <p>
            On examine le bénéfice net qu&apos;une entreprise réalise sur une
            transaction contrôlée par rapport à un indicateur de profit
            (chiffre d&apos;affaires, couts, actifs). C&apos;est la méthode la
            plus utilisee en pratique car elle est moins sensible aux
            differences de produits et plus tolerante aux donnees disponibles.
          </p>

          <p>
            <strong>
              5. Methode du partage des bénéfices (Profit Split Method)
            </strong>
          </p>
          <p>
            Les bénéfices combines des parties liées sont repartis en fonction de
            leur contribution respective (fonctions, actifs, risques). Reservee
            aux transactions hautement integrees ou aucune partie ne peut être
            testee de manière isolee — typiquement, quand les deux parties
            apportent des actifs incorporels uniques.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 not-prose">
            <p className="text-sm font-semibold text-blue-800">
              Conseil de Didier Laroussinie
            </p>
            <p className="mt-1 text-sm text-blue-700">
              Pour les GBC mauriciennes qui fournissent des services de
              management, la méthode Cost Plus est généralement la plus
              adaptée. Pour les activités de distribution, la TNMM sera souvent
              privilegiee. Le choix de la méthode doit être documente et
              justifie — ne le laissez pas au hasard. Un mauvais choix de
              méthode peut invalider toute votre politique de prix.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 5 — Penalites */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            5. Penalites en cas de non-conformité
          </h2>
          <p>
            Le législateur mauricien a prévu un régime de sanctions pour les
            sociétés qui ne respectent pas les nouvelles obligations de Transfer
            Pricing :
          </p>
          <ul>
            <li>
              <strong>Penalty tax de 5%</strong> sur l&apos;ajustement de
              Transfer Pricing effectué par la MRA. Autrement dit, si la MRA
              requalifie une transaction et augmente votre base imposable de 10
              millions MUR, vous payez 500 000 MUR de pénalité en sus de
              l&apos;impôt supplémentaire.
            </li>
            <li>
              <strong>Interets de retard de 0,25% par mois</strong> (soit 3% par
              an) sur l&apos;impôt supplémentaire du, calcules a compter de la
              date a laquelle l&apos;impôt aurait du être paye.
            </li>
            <li>
              <strong>Sanctions supplémentaires</strong> en cas de fraude
              deliberee, de fausse déclaration ou de refus de cooperer avec la
              MRA.
            </li>
          </ul>
          <p>
            Ces pénalités s&apos;ajoutent à l&apos;impôt supplémentaire
            lui-même. En pratique, un redressement de Transfer Pricing peut donc
            couter significativement plus que le simple ecart d&apos;impôt.
          </p>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 not-prose">
            <p className="text-sm font-semibold text-red-800">
              Danger
            </p>
            <p className="mt-1 text-sm text-red-700">
              Les pénalités sont calculees sur le montant de
              l&apos;ajustement, pas sur le montant initial de la transaction.
              Plus l&apos;ecart entre votre prix et le prix de pleine
              concurrence est important, plus la sanction est lourde.
              L&apos;absence totale de documentation est un facteur aggravant
              que la MRA prendra en compte.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 6 — Impact sur les GBC */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            6. Impact sur les GBC et les groupes internationaux
          </h2>
          <p>
            Les Global Business Companies (GBC) sont en première ligne de ces
            nouvelles obligations. Par nature, les GBC sont des entites de droit
            mauricien qui opèrent principalement à l&apos;international et
            realisent la majorité de leurs transactions avec des parties liees
            situées dans d&apos;autres juridictions.
          </p>
          <p>
            Trois types de transactions sont particulièrement vises :
          </p>
          <ul>
            <li>
              <strong>Les management fees et les service fees</strong> :
              facturation de services de gestion, de direction ou
              d&apos;administration entre la GBC et ses filiales ou sa société
              mere. La MRA verifiera que la rémunération correspond a des
              services reellement rendus et que le prix est conforme au marche.
            </li>
            <li>
              <strong>Les prêts intragroupe et les garanties</strong> : les taux
              d&apos;intérêt sur les prêts entre sociétés liées doivent
              refleter les conditions de marché (taux de référence + spread de
              crédit adapté). Les garanties gratuites entre sociétés du groupe
              pourront être requalifiées.
            </li>
            <li>
              <strong>
                Les redevances et les licences de propriété intellectuelle
              </strong>{" "}
              : utilisation de marques, brevets, logiciels, savoir-faire —
              chaque flux doit être justifie par une création de valeur réelle et
              rémunéré à un prix de pleine concurrence.
            </li>
          </ul>
          <p>
            Pour les groupes internationaux utilisant Maurice comme hub regional
            (Afrique, Asie), cette réforme renforcé la credibilite de la
            juridiction. Les partenaires commerciaux et les administrations
            fiscales étrangères prendront Maurice plus au serieux si le pays
            applique les standards OCDE.
          </p>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 not-prose">
            <p className="text-sm font-semibold text-amber-800">
              Point d&apos;attention
            </p>
            <p className="mt-1 text-sm text-amber-700">
              Les substance requirements renforces par le Finance Act 2025
              sont directement lies au Transfer Pricing. Une GBC qui facture des
              management fees significatifs doit prouver qu&apos;elle dispose du
              personnel qualifie, des bureaux et des moyens pour rendre
              effectivement ces services depuis Maurice. La substance et le
              Transfer Pricing sont les deux faces d&apos;une même medaille.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 7 — Recommandations pratiques */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            7. Recommandations pratiques
          </h2>
          <p>
            Voici les actions concretes que je recommandé à nos clients pour se
            mettre en conformité avec les nouvelles obligations de Transfer
            Pricing :
          </p>

          <div className="space-y-4 not-prose mt-6">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-800">
                1. Cartographier vos flux intragroupe
              </p>
              <p className="mt-1 text-sm text-blue-700">
                Identifiez toutes les transactions entre vos entites liées :
                ventes de biens, prestations de services, prêts, garanties,
                redevances, refacturations de frais. Chaque flux doit être
                documente avec un contrat ecrit, une analyse fonctionnelle et une
                justification du prix.
              </p>
            </div>

            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-800">
                2. Choisir et documenter la méthode de prix
              </p>
              <p className="mt-1 text-sm text-blue-700">
                Pour chaque type de transaction, selectionnez la méthode la plus
                appropriee (CUP, Cost Plus, TNMM...) et rédigez une analyse
                expliquant pourquoi cette méthode est la plus fiable dans votre
                cas. Conservez les donnees de comparabilite (benchmarks) que vous
                avez utilisees.
              </p>
            </div>

            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-800">
                3. Préparer la documentation en temps réel
              </p>
              <p className="mt-1 text-sm text-blue-700">
                Ne remettez pas la documentation a plus tard. Integrez la
                preparation du Master File et du Local File dans votre processus
                de cloture annuelle. Notre équipe chez BD Star peut vous
                accompagner dans la mise en place d&apos;un dossier de Transfer
                Pricing conforme, mis à jour chaque année.
              </p>
            </div>

            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-800">
                4. Revoir vos contrats intragroupe
              </p>
              <p className="mt-1 text-sm text-blue-700">
                Beaucoup de sociétés opèrent avec des contrats obsolètes, mal
                rediges ou inexistants. Chaque transaction intragroupe doit être
                couverte par un contrat écrit qui reflète la réalité économique.
                Un contrat de management fees signe en 2018 et jamais mis à jour
                est un signal d&apos;alerte pour la MRA.
              </p>
            </div>

            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-800">
                5. Anticiper les contrôles
              </p>
              <p className="mt-1 text-sm text-blue-700">
                La MRA va monter en compétences sur le Transfer Pricing. Les
                premiers contrôles seront probablement cibles sur les GBC avec
                des flux importants vers des juridictions a faible imposition.
                Etre prêt avant le premier contrôle est infiniment moins coûteux
                que de reagir après.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 not-prose mt-6">
            <p className="text-sm font-semibold text-amber-800">
              Le mot de Didier Laroussinie
            </p>
            <p className="mt-1 text-sm text-amber-700">
              &ldquo;En 40 ans de carrière en fiscalité internationale, j&apos;ai
              vu beaucoup de juridictions introduire des règles de Transfer
              Pricing. Le schema est toujours le même : les textes sont adoptes,
              puis la pratique administrative suit avec 12 a 24 mois de decalage.
              Les sociétés qui se mettent en conformité maintenant bénéficient
              d&apos;un avantage considérable : elles définissent leurs
              politiques de prix sereinement, sans la pression d&apos;un
              contrôle. Celles qui attendent paieront plus cher — en temps, en
              honoraires et en pénalités.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 8 — Lien avec QDMTT et BEPS */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            8. Lien avec le QDMTT (Pilier 2 OCDE) et le BEPS
          </h2>
          <p>
            Les nouvelles règles de Transfer Pricing ne sont pas un événement
            isole. Elles s&apos;inscrivent dans une réforme plus large de
            l&apos;architecture fiscale mauricienne, alignee sur les travaux de
            l&apos;OCDE et du G20.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Le BEPS : le cadre global
          </h3>
          <p>
            Le projet BEPS (Base Erosion and Profit Shifting) de l&apos;OCDE
            vise à lutter contre les stratégies d&apos;optimisation fiscale qui
            exploitént les failles entre les systèmes fiscaux de differents pays
            pour transférer artificiellement les bénéfices vers des juridictions
            a faible imposition. Maurice, en tant que membre du Cadre inclusif
            BEPS, s&apos;est engagee a mettre en oeuvre les Actions BEPS —
            dont l&apos;Action 13 sur la documentation de Transfer Pricing.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Le QDMTT : le Pilier 2 en action
          </h3>
          <p>
            Le Finance Act 2025 a également introduit le{" "}
            <strong>
              Qualified Domestic Minimum Top-up Tax (QDMTT)
            </strong>
            , qui est la transposition du Pilier 2 de l&apos;OCDE à Maurice.
            Cette taxe complémentaire s&apos;applique aux groupes
            multinationaux dont le chiffre d&apos;affaires consolidé dépassé 750
            millions d&apos;euros, et garantit un taux d&apos;imposition
            effectif minimum de 15%.
          </p>
          <p>
            Le lien entre Transfer Pricing et QDMTT est direct : si une GBC
            transféré artificiellement ses bénéfices vers une entite du groupe
            moins imposee, le QDMTT viendra de toute facon appliquer le
            complement d&apos;impôt. Le Transfer Pricing et le QDMTT forment
            ainsi un double filet de sécurité contre l&apos;érosion de la base
            fiscale.
          </p>
          <p>
            Pour les groupes concernés par le QDMTT, une politique de Transfer
            Pricing bien documentee est encore plus critique : les calculs de
            taux effectif sous le Pilier 2 reposent sur les résultats
            comptables des entites locales, qui sont eux-mêmes influences par
            les prix de transfert.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 not-prose">
            <p className="text-sm font-semibold text-blue-800">
              Vision d&apos;ensemble
            </p>
            <p className="mt-1 text-sm text-blue-700">
              Maurice joue un jeu stratégique intelligent : en adoptant
              simultanement le Transfer Pricing formel, le QDMTT et la Fair
              Share Contribution, le pays se positionne comme une juridiction
              transparente et conforme aux standards internationaux — tout en
              conservant son attractivité fiscale (15% IS flat, 0% dividendes,
              0% plus-values). Ce n&apos;est pas la fin de l&apos;avantage
              mauricien, c&apos;est sa consolidation sur des basés durables.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Sources */}
      {/* ============================================================ */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-slate-700">
            Sources officielles
          </h3>
          <ul className="mt-3 space-y-1 text-xs text-slate-500">
            <li>
              Finance Act 2025 (Act No. 18 of 2025) — National Assembly of
              Mauritius —{" "}
              <a
                href="/documents/finance-act-2025-mauritius.pdf"
                className="text-blue-600 hover:underline"
              >
                Telecharger le PDF
              </a>
            </li>
            <li>
              OECD Transfer Pricing Guidelines for Multinational Enterprises and
              Tax Administrations (2022) —{" "}
              <a
                href="https://www.oecd.org/tax/transfer-pricing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                oecd.org
              </a>
            </li>
            <li>
              OECD/G20 Inclusive Framework on BEPS — Pillar Two Model Rules —{" "}
              <a
                href="https://www.oecd.org/tax/beps/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                oecd.org
              </a>
            </li>
            {officialSources.slice(0, 4).map((s) => (
              <li key={s.url}>
                {s.name} ({s.description}) —{" "}
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {s.url}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-400">
            Cet article est fourni à titre informatif et ne constitué pas un
            conseil fiscal personnalisé. Les règles de Transfer Pricing
            s&apos;appliquent differemment selon la taille de l&apos;entreprise,
            la nature des transactions et les juridictions impliquees. Contactez
            nos experts pour une analyse personnalisée de votre situation.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA Final */}
      {/* ============================================================ */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">
            Besoin d&apos;un accompagnement en Transfer Pricing ?
          </h2>
          <p className="mt-3 text-slate-400">
            Étude de faisabilite gratuite par {founder.name},{" "}
            {founder.title}. Documentation TP, politique de prix, audit de
            conformité — nous vous accompagnons de A a Z.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 px-10 hover:bg-blue-700"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
