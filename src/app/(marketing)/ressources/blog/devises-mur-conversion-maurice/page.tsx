import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder, officialSources } from "@/data/site";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "Le piège des devises : convertir des MUR en devises étrangères à Maurice",
  description:
    "La roupie mauricienne n'est pas librement convertible. Délais, taux défavorables, plafonds : découvrez les pièges et les stratégies pour protéger vos bénéfices.",
  alternates: {
    canonical: "https://vanillestrategie.fr/ressources/blog/devises-mur-conversion-maurice",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    title: "Le piège des devises : convertir des MUR en devises étrangères à Maurice",
    description:
      "La roupie mauricienne n'est pas librement convertible. Délais, taux défavorables, plafonds : découvrez les pièges et les stratégies pour protéger vos bénéfices.",
    siteName: "Vanille Stratégie",
    images: [{ url: "https://vanillestrategie.fr/images/hero-paradise.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Le piège des devises : convertir des MUR en devises étrangères à Maurice",
    description:
      "La roupie mauricienne n'est pas librement convertible. Délais, taux défavorables, plafonds : découvrez les pièges et les stratégies pour protéger vos bénéfices.",
    images: ["https://vanillestrategie.fr/images/hero-paradise.jpg"],
  },
};

export default function DevisesConversionMauricePage() {
  return (
    <>
      <BlogPostingJsonLd
        title="Le piège des devises : convertir des MUR en devises étrangères à Maurice"
        description="La roupie mauricienne n&apos;est pas librement convertible. Délais, taux défavorables, plafonds : découvrez les pièges et les stratégies pour protéger vos bénéfices."
        slug="devises-mur-conversion-maurice"
        datePublished="2026-03-10"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/ressources/blog" },
          { name: "Le piège des devises : convertir des MUR en devises étrangères à Maurice", url: "/ressources/blog/devises-mur-conversion-maurice" },
        ]}
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/ressources/blog"
            className="text-sm text-blue-400 hover:underline"
          >
            &larr; Tous les articles
          </Link>
          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-300">
              Finance
            </span>
            <span className="text-xs text-slate-500">Mars 2026</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Le piège des devises : convertir des MUR en devises étrangères à
            Maurice
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Maurice attire les entrepreneurs avec sa fiscalité imbattable. Mais
            une fois les bénéfices réalisés en roupies mauriciennes, les
            rapatrier en euros ou en dollars relève parfois du parcours du
            combattant. Voici ce que personne ne vous dit avant de vous
            installer.
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

      {/* Section 1 — Le contexte */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            La roupie mauricienne : une devise qui ne sort pas facilement
          </h2>
          <p>
            Contrairement à l&apos;euro, au dollar américain ou à la livre
            sterling, la roupie mauricienne (MUR) n&apos;est{" "}
            <strong>pas une devise librement convertible</strong> sur les
            marchés internationaux. Elle n&apos;est pas cotée sur le Forex, et
            sa liquidité en dehors de Maurice est quasi inexistante.
          </p>
          <p>
            Concrètement, cela signifie que vous ne pouvez pas simplement virer
            des roupies sur un compte à l&apos;étranger et les convertir au
            cours du marché. Toute conversion passe obligatoirement par le
            système bancaire mauricien, sous le contrôle de la{" "}
            <strong>Bank of Mauritius (BoM)</strong>.
          </p>
          <p>
            En 2025, le cours officiel oscillait autour de 45-47 MUR pour 1 USD
            et 48-51 MUR pour 1 EUR. Mais le taux que vous obtiendrez
            effectivement dépend de votre banque, du montant, du jour, et
            parfois... de votre pouvoir de négociation.
          </p>
        </div>
      </section>

      {/* Section 2 — Restrictions BoM */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Les restrictions de la Bank of Mauritius
          </h2>
          <p>
            La BoM encadre les opérations de change via plusieurs mécanismes.
            Maurice a officiellement libéralisé son marché des changes en 1994,
            mais dans la pratique, des{" "}
            <strong>contrôles indirects subsistent</strong> :
          </p>
          <ul>
            <li>
              <strong>Interventions sur le marché</strong> : la BoM intervient
              régulièrement pour stabiliser le cours de la roupie, ce qui
              restreint la disponibilité de devises étrangères sur le marché
              interbancaire.
            </li>
            <li>
              <strong>Obligations de justification</strong> : pour les
              conversions importantes (au-delà de 500 000 MUR), les banques
              exigent des justificatifs détaillés — factures, contrats, avis
              d&apos;imposition, preuve de la source des fonds.
            </li>
            <li>
              <strong>Délais de traitement</strong> : alors qu&apos;un virement
              SEPA en euros se fait en quelques heures, une conversion MUR vers
              EUR ou USD peut prendre de 2 à 5 jours ouvrés, voire plus en
              période de tension sur la roupie.
            </li>
            <li>
              <strong>Surveillance renforcée</strong> : les mouvements
              inhabituels ou récurrents déclenchent des vérifications de
              conformité (KYC/AML) qui peuvent bloquer la transaction pendant
              des semaines.
            </li>
          </ul>

          {/* Callout warning */}
          <div className="not-prose my-8 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-800">
              Point de vigilance
            </p>
            <p className="mt-1 text-sm text-amber-700">
              Depuis 2023, la BoM a intensifié sa surveillance des flux sortants
              en devises. Les banques commerciales ont reçu des directives
              officieuses pour limiter les conversions massives de MUR vers des
              devises fortes. Ce n&apos;est écrit dans aucune circulaire
              publique, mais c&apos;est une réalité que vivent quotidiennement
              les entrepreneurs installés sur l&apos;île.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Difficultés entrepreneurs */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Les difficultés concrètes pour les entrepreneurs
          </h2>
          <p>
            Au quotidien, les entrepreneurs étrangers installés à Maurice font
            face à trois problèmes récurrents liés aux devises :
          </p>

          <h3 className="text-xl font-semibold text-slate-800">
            1. Des taux de change défavorables
          </h3>
          <p>
            Les banques mauriciennes appliquent des{" "}
            <strong>spreads importants</strong> sur les conversions. L&apos;écart
            entre le taux d&apos;achat et le taux de vente peut atteindre 2 à
            4 %, contre 0,5 à 1 % dans les grandes banques européennes. Sur un
            rapatriement de 10 millions de MUR (environ 200 000 EUR), cela
            représente une perte sèche de 4 000 à 8 000 EUR.
          </p>

          <h3 className="text-xl font-semibold text-slate-800">
            2. Des délais imprévisibles
          </h3>
          <p>
            Les conversions ne sont pas instantanées. En période de forte
            demande de devises (fin d&apos;exercice fiscal, saison touristique),
            les délais s&apos;allongent. Certains clients nous ont rapporté des
            attentes de 10 à 15 jours ouvrés pour des montants supérieurs à
            1 million de MUR, leur banque invoquant un{" "}
            <strong>&quot;manque de disponibilité en devises&quot;</strong>.
          </p>

          <h3 className="text-xl font-semibold text-slate-800">
            3. Des plafonds de fait
          </h3>
          <p>
            Si aucun plafond réglementaire officiel n&apos;existe pour les
            entreprises (les particuliers non-résidents n&apos;ont pas de
            restriction), les banques imposent en pratique des limites
            quotidiennes ou hebdomadaires de conversion. Au-delà de certains
            seuils, il faut fractionner les opérations ou passer par le desk
            treasury de la banque — avec des frais supplémentaires.
          </p>

          {/* Callout danger */}
          <div className="not-prose my-8 rounded-lg border border-red-200 bg-red-50 p-5">
            <p className="text-sm font-semibold text-red-800">
              Risque majeur
            </p>
            <p className="mt-1 text-sm text-red-700">
              Un entrepreneur qui facture exclusivement en MUR et doit rapatrier
              ses bénéfices en euros s&apos;expose à un double risque :
              dépréciation de la roupie + spread bancaire. Sur un an, la perte
              cumulée peut atteindre 8 à 12 % de la valeur initiale des
              bénéfices.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — Rapatriement des bénéfices */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Le rapatriement des bénéfices : une liberté théorique
          </h2>
          <p>
            Sur le papier, Maurice garantit la{" "}
            <strong>
              libre circulation des capitaux pour les investisseurs étrangers
            </strong>
            . L&apos;Investment Promotion Act et les guidelines de l&apos;EDB
            sont clairs : un détenteur d&apos;Occupation Permit peut rapatrier
            100 % de ses bénéfices, dividendes et produits de cession sans
            autorisation préalable.
          </p>
          <p>
            Dans la pratique, le parcours est plus sinueux. Le rapatriement
            implique nécessairement une conversion MUR vers la devise cible, et
            c&apos;est là que les difficultés décrites précédemment entrent en
            jeu. Ajoutez-y :
          </p>
          <ul>
            <li>
              Les <strong>frais de virement international</strong> (SWIFT) : 25
              à 75 USD par transaction selon la banque.
            </li>
            <li>
              Les <strong>frais d&apos;intermédiaires</strong> : la banque
              correspondante (souvent à Singapour, Londres ou Paris) prélève sa
              commission.
            </li>
            <li>
              Les <strong>délais cumulés</strong> : conversion (2-5 jours) +
              virement SWIFT (1-3 jours) = jusqu&apos;à une semaine entre la
              décision et la réception des fonds.
            </li>
          </ul>
          <p>
            Pour les GBC (Global Business Companies), la situation est plus
            simple : ces structures opèrent souvent directement en devises
            étrangères et maintiennent des comptes en USD ou EUR. Le problème de
            conversion ne se pose alors que pour les dépenses locales.
          </p>
        </div>
      </section>

      {/* Section 5 — Stratégies */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Stratégies pour minimiser l&apos;exposition au risque de change
          </h2>
          <p>
            Fort de plus de 10 ans d&apos;accompagnement d&apos;entrepreneurs à
            Maurice, nous avons identifié les stratégies les plus efficaces pour
            gérer le risque de change :
          </p>

          <h3 className="text-xl font-semibold text-slate-800">
            Ouvrir des comptes multi-devises
          </h3>
          <p>
            Les deux principales banques pour les entrepreneurs étrangers —{" "}
            <strong>AfrAsia Bank</strong> et la{" "}
            <strong>Mauritius Commercial Bank (MCB)</strong> — proposent des
            comptes multi-devises permettant de détenir simultanément des MUR,
            USD, EUR et GBP. Cette approche offre plusieurs avantages :
          </p>
          <ul>
            <li>
              Encaisser directement en devises étrangères sans passer par la
              roupie.
            </li>
            <li>
              Choisir le moment optimal pour convertir, au lieu de subir le taux
              du jour.
            </li>
            <li>
              Éviter les conversions successives (EUR &rarr; MUR &rarr; USD) qui
              multiplient les spreads.
            </li>
          </ul>

          {/* Callout tip */}
          <div className="not-prose my-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-800">
              Conseil pratique
            </p>
            <p className="mt-1 text-sm text-blue-700">
              Chez AfrAsia, le compte Global Account permet de détenir jusqu&apos;à
              8 devises sur un même compte. La MCB propose le Multi-Currency
              Current Account avec des seuils de conversion négociables pour les
              clients Corporate. Nous recommandons d&apos;ouvrir les deux pour
              maximiser la flexibilité.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-800">
            Facturer en devises étrangères
          </h3>
          <p>
            Si vos clients sont hors de Maurice — ce qui est le cas de la
            majorité des entrepreneurs expatriés — facturez en USD ou en EUR.
            C&apos;est parfaitement légal. Les revenus arrivent directement sur
            votre compte en devises, sans conversion. Vous ne convertissez en
            MUR que ce dont vous avez besoin pour les dépenses locales
            (salaires, loyer, charges).
          </p>
          <p>
            Cette stratégie est particulièrement efficace pour les{" "}
            <strong>sociétés de services, les e-commerçants</strong> et les{" "}
            <strong>freelances</strong> qui opèrent à l&apos;international.
          </p>

          <h3 className="text-xl font-semibold text-slate-800">
            Intégrer des clauses contractuelles de change
          </h3>
          <p>
            Pour les contrats en MUR (fournisseurs locaux, prestataires), nous
            recommandons d&apos;intégrer une{" "}
            <strong>clause d&apos;indexation sur le taux de change</strong>.
            Cette clause ajuste automatiquement le prix si le cours MUR/EUR ou
            MUR/USD varie au-delà d&apos;un seuil défini (typiquement 3 à 5 %).
            Cela protège les deux parties contre les fluctuations brusques.
          </p>

          <h3 className="text-xl font-semibold text-slate-800">
            Négocier des taux préférentiels
          </h3>
          <p>
            Les banques mauriciennes accordent des taux de change préférentiels
            aux entreprises qui génèrent un volume significatif de conversions.
            Un engagement de volume mensuel (par exemple, 2 millions de MUR
            minimum) permet de réduire le spread de 30 à 50 %. Votre
            expert-comptable peut négocier ces conditions en votre nom.
          </p>

          {/* Callout tip */}
          <div className="not-prose my-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-800">
              Astuce souvent ignorée
            </p>
            <p className="mt-1 text-sm text-blue-700">
              Si vous avez à la fois des encaissements et des décaissements en
              devises, demandez à votre banque un{" "}
              <strong>netting arrangement</strong>. Au lieu de convertir deux
              fois (devises &rarr; MUR puis MUR &rarr; devises), la banque
              compense les flux. Vous ne payez le spread que sur le solde net.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 — Rôle de l'expert-comptable */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Le rôle de l&apos;expert-comptable dans la gestion des devises
          </h2>
          <p>
            La gestion des devises ne se résume pas à convertir de l&apos;argent.
            C&apos;est un enjeu comptable, fiscal et stratégique qui nécessite
            un accompagnement professionnel :
          </p>
          <ul>
            <li>
              <strong>Comptabilisation des écarts de change</strong> : les
              normes IFRS (IAS 21) imposent de comptabiliser les gains et pertes
              de change latents et réalisés. Un traitement incorrect peut
              fausser vos états financiers et déclencher un redressement de la
              MRA.
            </li>
            <li>
              <strong>Optimisation fiscale</strong> : les pertes de change sont
              déductibles fiscalement à Maurice. Encore faut-il les documenter
              correctement et les rattacher au bon exercice.
            </li>
            <li>
              <strong>Choix de la devise fonctionnelle</strong> : selon
              l&apos;IAS 21, la devise fonctionnelle d&apos;une société est
              celle de l&apos;environnement économique principal dans lequel
              elle opère. Pour une GBC qui facture en USD, la devise
              fonctionnelle peut être le dollar — pas la roupie. Ce choix a des
              conséquences majeures sur la présentation des comptes.
            </li>
            <li>
              <strong>Planification de trésorerie</strong> : anticiper les
              besoins de conversion permet de regrouper les opérations et de
              négocier de meilleurs taux.
            </li>
            <li>
              <strong>Conformité réglementaire</strong> : les obligations de
              reporting de la BoM et de la Financial Intelligence Unit (FIU)
              doivent être respectées pour éviter tout blocage.
            </li>
          </ul>

          {/* Callout warning */}
          <div className="not-prose my-8 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-800">
              Erreur fréquente
            </p>
            <p className="mt-1 text-sm text-amber-700">
              De nombreux entrepreneurs comptabilisent leurs opérations en
              devises au taux du jour de la facture, puis oublient de
              réévaluer les soldes à la clôture. Résultat : des écarts de
              change non comptabilisés qui faussent le bilan et le compte de
              résultat. Ce point est systématiquement vérifié lors des audits.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 — Dashboard OKE */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Le dashboard OKE : votre tour de contrôle multi-devises
          </h2>
          <p>
            C&apos;est précisément pour répondre à ces enjeux que nous avons
            développé <strong>OKE</strong>, notre plateforme de pilotage
            financier connectée aux banques mauriciennes. OKE apporte aux
            entrepreneurs une visibilité en temps réel sur leur exposition aux
            devises :
          </p>
          <ul>
            <li>
              <strong>Soldes multi-devises en temps réel</strong> : visualisez
              instantanément vos positions en MUR, EUR, USD et GBP sur vos
              comptes AfrAsia et MCB.
            </li>
            <li>
              <strong>Historique des taux de conversion</strong> : suivez
              l&apos;évolution du cours MUR/EUR et MUR/USD pour identifier le
              meilleur moment pour convertir.
            </li>
            <li>
              <strong>Alertes de seuil</strong> : configurez des notifications
              lorsque le taux de change atteint un niveau favorable.
            </li>
            <li>
              <strong>Réconciliation automatique</strong> : les mouvements
              bancaires en devises sont automatiquement rapprochés de vos
              factures, avec un taux de précision supérieur à 85 %.
            </li>
            <li>
              <strong>Reporting multi-devises</strong> : générateur de rapports
              avec conversion automatique dans la devise fonctionnelle de votre
              choix, conforme aux normes IAS 21.
            </li>
          </ul>
          <p>
            Avec les connecteurs bancaires AfrAsia et MCB intégrés à OKE, vous
            n&apos;avez plus besoin de jongler entre les interfaces bancaires.
            Tout est centralisé dans un seul tableau de bord.
          </p>
        </div>
      </section>

      {/* Section 8 — Recommandations pratiques */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Recommandations pratiques
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Voici notre checklist pour tout entrepreneur qui génère ou rapatrie
            des devises depuis Maurice.
          </p>

          <div className="mt-8 space-y-4">
            {/* Recommendation 1 */}
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-semibold text-blue-800">
                Ouvrez un compte multi-devises dès la création de votre société
              </p>
              <p className="mt-1 text-sm text-blue-700">
                N&apos;attendez pas de réaliser votre premier rapatriement pour
                découvrir les contraintes. Ouvrez un compte AfrAsia ou MCB avec
                au minimum les devises EUR et USD dès le démarrage. Le
                processus prend 2 à 3 semaines — anticipez.
              </p>
            </div>

            {/* Recommendation 2 */}
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-semibold text-blue-800">
                Facturez en devises fortes autant que possible
              </p>
              <p className="mt-1 text-sm text-blue-700">
                Si vos clients sont internationaux, facturez en EUR ou USD. Vous
                évitez le double risque de conversion et vous conservez la
                valeur de vos revenus dans une devise stable et liquide.
              </p>
            </div>

            {/* Recommendation 3 */}
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-semibold text-amber-800">
                Ne convertissez jamais en urgence
              </p>
              <p className="mt-1 text-sm text-amber-700">
                Les conversions précipitées se font toujours au pire taux.
                Planifiez vos besoins de trésorerie en MUR sur un horizon de
                3 mois et convertissez par lots, idéalement les mardis et
                mercredis (les spreads sont historiquement plus serrés en milieu
                de semaine).
              </p>
            </div>

            {/* Recommendation 4 */}
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-semibold text-blue-800">
                Documentez chaque opération de change
              </p>
              <p className="mt-1 text-sm text-blue-700">
                Conservez les bordereaux de change, les taux appliqués et les
                frais prélevés pour chaque conversion. Ces documents sont
                indispensables pour la comptabilisation des écarts de change
                et en cas de contrôle fiscal.
              </p>
            </div>

            {/* Recommendation 5 */}
            <div className="rounded-lg border border-red-200 bg-red-50 p-5">
              <p className="text-sm font-semibold text-red-800">
                Évitez les bureaux de change pour les montants professionnels
              </p>
              <p className="mt-1 text-sm text-red-700">
                Les bureaux de change appliquent des spreads de 5 à 8 % et ne
                fournissent pas la documentation nécessaire pour une
                comptabilisation conforme. Passez toujours par votre banque
                commerciale, même si les délais sont plus longs.
              </p>
            </div>

            {/* Recommendation 6 */}
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-semibold text-amber-800">
                Faites auditer votre exposition au change annuellement
              </p>
              <p className="mt-1 text-sm text-amber-700">
                Demandez à votre expert-comptable une analyse annuelle de votre
                exposition nette au risque de change. Cela inclut : le montant
                des actifs et passifs libellés en devises étrangères, les gains
                et pertes de change réalisés et latents, et l&apos;impact sur
                votre résultat net.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            Sources :{" "}
            {officialSources
              .filter((s) =>
                [
                  "Bank of Mauritius",
                  "EDB Mauritius",
                  "MRA",
                  "FSC Mauritius",
                  "MIPA",
                ].includes(s.name)
              )
              .map((s, i) => (
                <span key={s.url}>
                  {i > 0 && " · "}
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {s.name}
                  </a>
                </span>
              ))}
            {" · "}
            <a
              href="https://www.ifrs.org/issued-standards/list-of-standards/ias-21-the-effects-of-changes-in-foreign-exchange-rates/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              IFRS — IAS 21
            </a>
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Cet article est fourni à titre informatif et ne constitué pas un
            conseil juridique ou financier. Les taux et conditions mentionnés
            sont indicatifs et peuvent varier. Contactez nos experts pour une
            analyse personnalisée de votre situation.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">
            Protégez vos bénéfices du piège des devises
          </h2>
          <p className="mt-3 text-slate-400">
            Étude gratuite de votre exposition au risque de change par{" "}
            {founder.name}, {founder.title}.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 px-10 hover:bg-blue-700"
              >
                Demander une analyse gratuite
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
