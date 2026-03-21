import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder, officialSources } from "@/data/site";

export const metadata: Metadata = {
  title:
    "Paiements en ligne a Maurice — Stripe, Airwallex et alternatives pour les entreprises digitales",
  description:
    "Guide complet des solutions de paiement en ligne pour les entreprises basees a l ile Maurice : Stripe, PayPal, Airwallex, Wise Business, Payoneer, passerelles locales MCB et SBM. Considerations reglementaires et comptables.",
};

export default function PaiementsEnLigneMauricePage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/ressources/blog"
            className="text-sm text-blue-400 hover:underline"
          >
            &larr; Tous les articles
          </Link>

          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-300">
              Digital
            </span>
            <span className="rounded-full bg-teal-500/20 px-2 py-0.5 text-xs font-medium text-teal-300">
              Paiements
            </span>
            <span className="text-xs text-slate-500">Mars 2026</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Paiements en ligne a Maurice — Stripe, Airwallex et alternatives
            pour les entreprises digitales
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            E-commerce, SaaS, freelance : collecter des paiements
            internationaux depuis l&apos;ile Maurice n&apos;est pas aussi simple
            qu&apos;en France ou aux Etats-Unis. Voici le guide complet des
            solutions disponibles, avec leurs avantages, limites et impacts
            comptables.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-bold text-white">
              DL
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                {founder.name}
              </p>
              <p className="text-xs text-slate-400">{founder.title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1. Introduction ────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Le defi des paiements pour les entreprises digitales a Maurice
          </h2>
          <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
            <p>
              Maurice attire chaque annee davantage d&apos;entrepreneurs
              digitaux : e-commercants, editeurs SaaS, freelances,
              infopreneurs. La fiscalite est imbattable (15&nbsp;% IS, 0&nbsp;%
              dividendes, 0&nbsp;% plus-values), le cadre de vie exceptionnel
              et le Premium Visa facilite l&apos;installation.
            </p>
            <p>
              Mais une realite s&apos;impose rapidement : Maurice n&apos;est
              pas un pays &laquo;&nbsp;mainstream&nbsp;&raquo; pour les
              prestataires de services de paiement (PSP). Certaines plateformes
              ne supportent tout simplement pas le code pays MU. D&apos;autres
              imposent des restrictions sur les devises ou les retraits.
            </p>
            <p>
              Le choix de votre infrastructure de paiement a des consequences
              directes sur votre tresorerie, votre comptabilite et votre
              conformite reglementaire. Ce guide fait le point sur toutes les
              options disponibles en 2026.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Stripe a Maurice ────────────────────────────── */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Stripe a Maurice : la situation reelle
          </h2>
          <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
            <p>
              <strong>Stripe ne supporte pas Maurice.</strong> En mars 2026,
              l&apos;ile Maurice ne figure pas dans la liste des 46+ pays ou
              Stripe permet de creer un compte et de recevoir des paiements. Les
              cinq pays africains supportes via Paystack (Nigeria, Ghana, Kenya,
              Afrique du Sud, Cote d&apos;Ivoire) n&apos;incluent pas Maurice.
            </p>
            <p>
              Concretement, cela signifie qu&apos;une societe mauricienne
              (Domestic Company ou GBC) ne peut pas ouvrir un compte Stripe
              directement avec son enregistrement CBRD.
            </p>
          </div>

          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-800">
              Attention — Workarounds Stripe
            </p>
            <div className="mt-2 space-y-2 text-sm text-amber-700">
              <p>
                Certains entrepreneurs utilisent{" "}
                <strong>Stripe Atlas</strong> pour incorporer une LLC au
                Delaware (USA) et ouvrir un compte Stripe americain. C&apos;est
                legal, mais cela implique :
              </p>
              <ul className="ml-4 list-disc space-y-1">
                <li>
                  Des obligations declaratives aux Etats-Unis (EIN, FBAR
                  potentiel)
                </li>
                <li>
                  Un compte bancaire US (Mercury, Relay) a gerer en parallele
                </li>
                <li>
                  Un risque de conflit de substance fiscale si votre activite
                  reelle est a Maurice
                </li>
                <li>
                  Des frais annuels supplementaires (agent enregistre, franchise
                  tax Delaware)
                </li>
              </ul>
              <p>
                <strong>Notre conseil :</strong> si vous optez pour cette
                structure, faites-la valider par un fiscaliste international
                pour eviter les pieges de double imposition et de substance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PayPal a Maurice ────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            PayPal a Maurice : possible mais limite
          </h2>
          <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
            <p>
              PayPal est disponible a Maurice et permet de{" "}
              <strong>recevoir des paiements</strong>. Cependant, les
              limitations sont significatives :
            </p>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Pas de support MUR :</strong> toutes les transactions
                sont en USD. La conversion vers la roupie mauricienne
                s&apos;effectue au taux PayPal (generalement 3-4&nbsp;%
                au-dessus du taux mid-market)
              </li>
              <li>
                <strong>Retrait via MCB Juice uniquement :</strong> les fonds
                sont retires vers votre compte MCB via l&apos;app Juice, avec
                des frais de conversion supplementaires
              </li>
              <li>
                <strong>Verification d&apos;identite complexe :</strong>{" "}
                l&apos;option &laquo;&nbsp;lier une banque&nbsp;&raquo; pour
                verifier le compte n&apos;est pas toujours disponible a Maurice,
                ce qui peut entrainer des blocages de fonds
              </li>
              <li>
                <strong>Plafond par transaction :</strong> 10&nbsp;000&nbsp;$
                par transaction pour les comptes verifies
              </li>
              <li>
                <strong>Fonctionnalites reduites :</strong> PayPal Credit et
                certaines options Business ne sont pas accessibles depuis
                Maurice
              </li>
            </ul>
          </div>

          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-5">
            <p className="text-sm font-semibold text-red-800">
              Point de vigilance — Frais cumules PayPal
            </p>
            <p className="mt-2 text-sm text-red-700">
              Entre les frais de reception (2,9&nbsp;% + 0,30&nbsp;$ par
              transaction), les frais de conversion USD → MUR (3-4&nbsp;%) et
              les frais de retrait MCB Juice, le cout reel d&apos;une
              transaction PayPal peut atteindre{" "}
              <strong>7 a 8&nbsp;% du montant</strong>. Pour des volumes
              importants, cela erode serieusement vos marges.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Airwallex ───────────────────────────────────── */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Airwallex : le multi-devises pour l&apos;international
          </h2>
          <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
            <p>
              Airwallex est une plateforme financiere globale qui offre des
              comptes multi-devises, des cartes corporate et des solutions de
              paiement transfrontalier. La plateforme supporte les entreprises
              enregistrees dans 50+ pays.
            </p>
            <p>
              Pour une entreprise basee a Maurice, Airwallex presente plusieurs
              avantages :
            </p>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Comptes multi-devises :</strong> detenez des soldes en
                USD, EUR, GBP, AUD, SGD et d&apos;autres devises sans frais de
                tenue de compte
              </li>
              <li>
                <strong>Taux de change competitifs :</strong> conversion au taux
                mid-market avec une marge reduite (0,5 a 1&nbsp;%), bien
                inferieure a PayPal
              </li>
              <li>
                <strong>Cartes corporate virtuelles :</strong> pour gerer les
                depenses en ligne (publicite, SaaS, fournisseurs)
              </li>
              <li>
                <strong>Integration e-commerce :</strong> plugins pour Shopify,
                WooCommerce et API pour les solutions sur mesure
              </li>
              <li>
                <strong>Paiements en masse :</strong> ideal pour les entreprises
                qui paient des fournisseurs ou des freelances dans plusieurs pays
              </li>
            </ul>
          </div>

          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-800">
              Astuce — Ouverture de compte Airwallex
            </p>
            <p className="mt-2 text-sm text-blue-700">
              L&apos;eligibilite depend de la juridiction d&apos;enregistrement
              de votre societe. Si votre Domestic Company mauricienne n&apos;est
              pas directement eligible, une GBC avec de la substance
              internationale ou une entite dans un pays supporte (Singapour,
              Hong Kong, Australie) peut servir de point d&apos;entree. Contactez
              notre equipe pour evaluer la meilleure structure.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. Autres alternatives internationales ─────────── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Autres alternatives pour les entreprises a Maurice
          </h2>

          {/* Wise Business */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-slate-900">
              Wise Business (ex-TransferWise)
            </h3>
            <div className="mt-3 space-y-3 text-slate-700 leading-relaxed">
              <p>
                Wise permet de detenir des soldes dans 40+ devises et de
                recevoir des paiements via des coordonnees bancaires locales
                (IBAN europeen, numero de compte US, details bancaires GBP,
                AUD, etc.). Le taux de change applique est le taux mid-market
                reel, avec des frais transparents.
              </p>
              <p>
                <strong>Limitation importante :</strong> la Wise Card
                (debit) n&apos;est pas encore disponible pour les residents de
                Maurice. En revanche, les transferts et la reception de
                paiements fonctionnent. C&apos;est une excellente solution
                complementaire pour recevoir en EUR ou GBP a moindre cout.
              </p>
            </div>
          </div>

          {/* Payoneer */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-slate-900">
              Payoneer
            </h3>
            <div className="mt-3 space-y-3 text-slate-700 leading-relaxed">
              <p>
                Payoneer est la solution de reference pour les freelances et
                vendeurs sur les grandes marketplaces : Amazon, Fiverr, Upwork,
                Freelancer.com. La plateforme fournit des comptes de reception
                en USD, EUR, GBP, JPY et AUD.
              </p>
              <p>
                Payoneer supporte Maurice et offre des retraits vers les comptes
                bancaires locaux (MCB, SBM, AfrAsia). Les frais de retrait sont
                de 2&nbsp;% sur la conversion, ce qui reste plus avantageux que
                PayPal pour les volumes reguliers.
              </p>
            </div>
          </div>

          {/* Paddle / 2Checkout */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-slate-900">
              Paddle et 2Checkout — pour les editeurs SaaS
            </h3>
            <div className="mt-3 space-y-3 text-slate-700 leading-relaxed">
              <p>
                Ces plateformes fonctionnent comme{" "}
                <strong>Merchant of Record</strong> : elles vendent votre
                produit en votre nom, gerent la TVA/GST dans chaque pays et
                vous reversent le net. C&apos;est ideal pour les SaaS qui
                vendent a des clients dans l&apos;UE (ou la TVA est un casse-tete).
              </p>
              <p>
                L&apos;avantage majeur : vous n&apos;avez pas besoin de
                vous enregistrer a la TVA dans chaque pays europeen. Le MoR
                s&apos;en charge. Les reversements peuvent etre effectues
                vers votre compte bancaire mauricien.
              </p>
            </div>
          </div>

          {/* Adyen */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-slate-900">
              Adyen — pour les volumes importants
            </h3>
            <div className="mt-3 space-y-3 text-slate-700 leading-relaxed">
              <p>
                Adyen est une plateforme de paiement de niveau enterprise,
                utilisee par Uber, Spotify et eBay. Elle supporte 250+ methodes
                de paiement dans le monde et offre des frais tres competitifs
                pour les volumes superieurs a 100&nbsp;000&nbsp;$/mois.
              </p>
              <p>
                Si votre entreprise basee a Maurice traite des volumes
                importants, Adyen peut accepter de travailler avec vous
                directement. Pour les plus petites structures, les solutions
                comme Wise ou Payoneer sont plus adaptees.
              </p>
            </div>
          </div>

          {/* Solutions locales */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-slate-900">
              Solutions locales : MCB Juice et MyT Money
            </h3>
            <div className="mt-3 space-y-3 text-slate-700 leading-relaxed">
              <p>
                Pour les paiements domestiques en roupies mauriciennes,{" "}
                <strong>MCB Juice</strong> (en partenariat avec Peach Payments)
                et <strong>MyT Money</strong> (Mauritius Telecom) sont les
                solutions de paiement mobile dominantes. Elles sont utiles si
                vous avez une clientele locale, mais ne conviennent pas pour
                l&apos;encaissement international.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Passerelles locales ─────────────────────────── */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Passerelles de paiement bancaires mauriciennes
          </h2>
          <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
            <p>
              Les banques mauriciennes proposent leurs propres passerelles de
              paiement e-commerce. C&apos;est la solution a privilegier si vous
              vendez aussi a une clientele locale ou si vous avez besoin
              d&apos;encaisser en MUR.
            </p>
          </div>

          <div className="mt-6 space-y-6">
            {/* MCB */}
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-900">
                MCB — Online Payment Gateway
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                La MCB utilise la plateforme MasterCard Payment Gateway Services
                (MPGS) et son propre Internet Gateway Service (MiGS). Elle
                accepte Visa, MasterCard et les cartes prepayees. Disponible en
                B2C et B2B, la passerelle supporte les transactions en MUR, USD,
                EUR et GBP. C&apos;est la solution la plus repandue a Maurice
                pour l&apos;e-commerce local.
              </p>
            </div>

            {/* SBM */}
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-900">
                SBM — E-Commerce Acquiring Services
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                SBM Bank propose un service d&apos;acquisition e-commerce
                multi-devises (MUR, USD, GBP, EUR, JPY). La plateforme offre un
                traitement securise des transactions par carte et des outils de
                gestion des paiements pour les commercants en ligne. Alternative
                solide a la MCB, notamment pour les entreprises en relation
                bancaire avec SBM.
              </p>
            </div>

            {/* Ceridian note */}
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-900">
                Autres acteurs locaux
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                D&apos;autres prestataires operent a Maurice, notamment dans la
                gestion des paiements salariaux (payroll). Pour le e-commerce
                pur, MCB et SBM restent les references bancaires locales.
                AfrAsia Bank propose egalement des solutions pour les GBC avec
                des comptes multi-devises.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-800">
              Astuce — Combiner local et international
            </p>
            <p className="mt-2 text-sm text-blue-700">
              La strategie la plus efficace consiste souvent a combiner une
              passerelle locale (MCB ou SBM pour les paiements en MUR) avec une
              solution internationale (Wise, Payoneer ou Airwallex pour les
              encaissements en devises). Cela minimise les frais de conversion
              et simplifie la reconciliation bancaire.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. Reglementation ──────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Considerations reglementaires
          </h2>
          <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
            <p>
              La gestion des paiements en ligne depuis Maurice implique le
              respect de plusieurs cadres reglementaires. Voici les points
              essentiels :
            </p>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              Licence Bank of Mauritius (BoM)
            </h3>
            <p>
              Toute entite qui fournit des services de paiement a Maurice doit
              etre agreee par la Bank of Mauritius en vertu du National Payment
              Systems Act. Cela concerne les PSP, pas les commercants qui
              utilisent un PSP. Si vous etes un simple commercant qui accepte
              les paiements via MCB ou PayPal, vous n&apos;avez pas besoin de
              licence.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              Conformite AML/KYC
            </h3>
            <p>
              Les obligations anti-blanchiment (AML) et de connaissance client
              (KYC) s&apos;appliquent a toutes les entites mauriciennes. Vos
              PSP internationaux (Stripe via entite US, PayPal, Wise)
              appliquent leur propre KYC, mais vous devez egalement maintenir
              vos propres registres conformement au Financial Intelligence and
              Anti-Money Laundering Act (FIAMLA).
            </p>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              Declarations MRA sur les revenus en devises
            </h3>
            <p>
              Tous les revenus, quelle que soit la devise d&apos;encaissement,
              doivent etre declares a la Mauritius Revenue Authority (MRA). Les
              revenus en devises etrangeres sont convertis en MUR au taux de
              change de la Bank of Mauritius a la date de la transaction.
              L&apos;IS de 15&nbsp;% s&apos;applique sur le benefice net, apres
              deduction des charges.
            </p>
          </div>

          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-5">
            <p className="text-sm font-semibold text-red-800">
              Point de vigilance — Rapatriement des fonds
            </p>
            <p className="mt-2 text-sm text-red-700">
              Si vous collectez des paiements via une entite etrangere (LLC US
              pour Stripe, par exemple), le rapatriement des fonds vers Maurice
              doit etre documente et justifie. Les transferts entre entites
              liees sont soumis aux regles de Transfer Pricing renforcees par le
              Finance Act 2025. Conservez les contrats, factures et preuves de
              prestations.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. Impact comptable ────────────────────────────── */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Impact comptable : gerer le multi-devises
          </h2>
          <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
            <p>
              La multiplication des PSP et des devises cree un defi comptable
              majeur. Chaque plateforme a ses propres releves, ses propres
              formats et ses propres delais de reglement. Voici comment
              structurer votre comptabilite.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              Quel taux de change utiliser ?
            </h3>
            <p>
              La regle est claire : c&apos;est le{" "}
              <strong>
                taux de reference de la Bank of Mauritius (BoM)
              </strong>{" "}
              a la date de la transaction qui fait foi. Ce taux est publie
              quotidiennement sur le site de la BoM. Pour les ecritures de fin
              de mois, les soldes en devises sont reevalues au taux BoM de
              cloture, et les ecarts de change sont comptabilises en produits ou
              charges financieres.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              Reconciliation multi-plateformes
            </h3>
            <p>
              Un e-commercant typique a Maurice peut avoir simultanement : un
              compte PayPal (USD), un compte Wise (EUR + GBP), un compte
              Payoneer (USD), un compte MCB (MUR) et peut-etre un compte
              bancaire US pour Stripe. Reconcilier manuellement ces flux est un
              cauchemar operationnel.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              OKE : la reconciliation automatique
            </h3>
            <p>
              Notre application{" "}
              <strong>OKE</strong> se connecte directement a vos comptes
              Stripe, PayPal, vos plateformes e-commerce (Shopify, Amazon,
              WooCommerce) et vos banques mauriciennes (MCB, AfrAsia). Chaque
              transaction est automatiquement rapprochee, categorisee et
              convertie au bon taux de change.
            </p>
            <p>
              Le resultat : une comptabilite temps reel, des ecritures
              multi-devises generees automatiquement avec une precision
              superieure a 85&nbsp;%, et un temps de reconciliation divise par
              dix. Plus besoin d&apos;exporter des CSV et de faire des
              copier-coller entre les plateformes.
            </p>
          </div>

          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-800">
              Astuce — Connecteurs bancaires
            </p>
            <p className="mt-2 text-sm text-blue-700">
              OKE integre des connecteurs directs avec les banques
              mauriciennes (MCB, AfrAsia). Vos releves bancaires sont importes
              automatiquement et les transactions sont classees de maniere
              intelligente. Le rapprochement bancaire qui prenait des heures se
              fait desormais en quelques minutes.
            </p>
          </div>
        </div>
      </section>

      {/* ── 9. Recommandations de Didier ───────────────────── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Les recommandations de {founder.name}
          </h2>

          <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-6">
            <p className="text-sm font-semibold text-green-800">
              Strategie recommandee selon votre profil
            </p>
            <div className="mt-4 space-y-4 text-sm text-green-800">
              <div>
                <p className="font-semibold">
                  Freelance / Consultant international :
                </p>
                <p className="mt-1 text-green-700">
                  Wise Business + Payoneer. Recevez en EUR/GBP via votre IBAN
                  Wise, et en USD via Payoneer si vous travaillez avec des
                  marketplaces. Retirez vers votre compte MCB ou AfrAsia.
                </p>
              </div>
              <div>
                <p className="font-semibold">E-commerce international :</p>
                <p className="mt-1 text-green-700">
                  Si Stripe est indispensable, structurez une entite US (LLC +
                  Stripe Atlas) en complement de votre Domestic Company
                  mauricienne — mais faites valider le montage par notre
                  equipe. Sinon, MCB e-commerce gateway + Wise Business pour
                  les encaissements en devises.
                </p>
              </div>
              <div>
                <p className="font-semibold">Editeur SaaS :</p>
                <p className="mt-1 text-green-700">
                  Paddle ou 2Checkout en Merchant of Record. Ils gerent la TVA
                  europeenne pour vous et reversent le net. Combinez avec Wise
                  pour la reception des fonds.
                </p>
              </div>
              <div>
                <p className="font-semibold">Business local + international :</p>
                <p className="mt-1 text-green-700">
                  MCB e-commerce gateway pour les paiements MUR + Airwallex ou
                  Wise pour les encaissements internationaux. C&apos;est le duo
                  le plus polyvalent.
                </p>
              </div>
            </div>
          </div>

          {/* Tableau recapitulatif */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-slate-900">
              Tableau recapitulatif des solutions de paiement
            </h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-3 py-3 font-semibold text-slate-900">
                      Solution
                    </th>
                    <th className="px-3 py-3 font-semibold text-slate-900">
                      Dispo MU
                    </th>
                    <th className="px-3 py-3 font-semibold text-slate-900">
                      Devises
                    </th>
                    <th className="px-3 py-3 font-semibold text-slate-900">
                      Frais indicatifs
                    </th>
                    <th className="px-3 py-3 font-semibold text-slate-900">
                      OKE
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-3 py-3 font-medium text-slate-900">
                      Stripe
                    </td>
                    <td className="px-3 py-3 text-red-600">Non</td>
                    <td className="px-3 py-3 text-slate-600">135+</td>
                    <td className="px-3 py-3 text-slate-600">
                      2,9&nbsp;% + 0,30&nbsp;$
                    </td>
                    <td className="px-3 py-3 text-green-600">Connecte</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-3 py-3 font-medium text-slate-900">
                      PayPal
                    </td>
                    <td className="px-3 py-3 text-amber-600">Partiel</td>
                    <td className="px-3 py-3 text-slate-600">USD uniquement</td>
                    <td className="px-3 py-3 text-slate-600">
                      2,9&nbsp;% + conv. 3-4&nbsp;%
                    </td>
                    <td className="px-3 py-3 text-green-600">Connecte</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 font-medium text-slate-900">
                      Airwallex
                    </td>
                    <td className="px-3 py-3 text-amber-600">Selon structure</td>
                    <td className="px-3 py-3 text-slate-600">60+</td>
                    <td className="px-3 py-3 text-slate-600">
                      0,5-1&nbsp;% conversion
                    </td>
                    <td className="px-3 py-3 text-slate-500">A venir</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-3 py-3 font-medium text-slate-900">
                      Wise Business
                    </td>
                    <td className="px-3 py-3 text-green-600">Oui</td>
                    <td className="px-3 py-3 text-slate-600">40+</td>
                    <td className="px-3 py-3 text-slate-600">
                      0,4-1,5&nbsp;% conversion
                    </td>
                    <td className="px-3 py-3 text-slate-500">A venir</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 font-medium text-slate-900">
                      Payoneer
                    </td>
                    <td className="px-3 py-3 text-green-600">Oui</td>
                    <td className="px-3 py-3 text-slate-600">
                      USD, EUR, GBP, JPY, AUD
                    </td>
                    <td className="px-3 py-3 text-slate-600">
                      2&nbsp;% retrait
                    </td>
                    <td className="px-3 py-3 text-slate-500">A venir</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-3 py-3 font-medium text-slate-900">
                      Paddle / 2Checkout
                    </td>
                    <td className="px-3 py-3 text-green-600">Oui (MoR)</td>
                    <td className="px-3 py-3 text-slate-600">Multi</td>
                    <td className="px-3 py-3 text-slate-600">
                      5-10&nbsp;% (TVA incluse)
                    </td>
                    <td className="px-3 py-3 text-slate-500">Manuel</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 font-medium text-slate-900">
                      MCB Gateway
                    </td>
                    <td className="px-3 py-3 text-green-600">Oui</td>
                    <td className="px-3 py-3 text-slate-600">
                      MUR, USD, EUR, GBP
                    </td>
                    <td className="px-3 py-3 text-slate-600">
                      Sur devis
                    </td>
                    <td className="px-3 py-3 text-green-600">Connecte</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-3 py-3 font-medium text-slate-900">
                      SBM E-Commerce
                    </td>
                    <td className="px-3 py-3 text-green-600">Oui</td>
                    <td className="px-3 py-3 text-slate-600">
                      MUR, USD, EUR, GBP, JPY
                    </td>
                    <td className="px-3 py-3 text-slate-600">
                      Sur devis
                    </td>
                    <td className="px-3 py-3 text-slate-500">Manuel</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 font-medium text-slate-900">
                      Adyen
                    </td>
                    <td className="px-3 py-3 text-amber-600">Gros volumes</td>
                    <td className="px-3 py-3 text-slate-600">150+</td>
                    <td className="px-3 py-3 text-slate-600">
                      0,6&nbsp;% + 0,10&nbsp;EUR
                    </td>
                    <td className="px-3 py-3 text-slate-500">A venir</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              * Les frais sont indicatifs et peuvent varier selon le volume, le
              type de transaction et la devise. Contactez chaque prestataire
              pour un devis personnalise.
            </p>
          </div>

          <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-5">
            <p className="text-sm font-semibold text-green-800">
              Bonne pratique — Un seul cabinet, toutes vos plateformes
            </p>
            <p className="mt-2 text-sm text-green-700">
              Quel que soit le nombre de PSP que vous utilisez, votre
              comptabilite doit rester unifiee. C&apos;est exactement ce que
              nous faisons : BD Star reconcilie l&apos;ensemble de vos flux
              (Stripe US, PayPal, Wise, MCB) dans un seul plan comptable
              mauricien, avec les ecritures de change correspondantes.
              L&apos;app OKE centralise tout en temps reel.
            </p>
          </div>
        </div>
      </section>

      {/* ── Sources ────────────────────────────────────────── */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-slate-700">Sources</h3>
          <div className="mt-3 space-y-1">
            {[
              {
                name: "Bank of Mauritius",
                url: "https://www.bom.mu",
                detail: "Taux de reference, reglementation PSP",
              },
              {
                name: "Financial Services Commission",
                url: "https://www.fscmauritius.org",
                detail: "Licences GBC, cadre reglementaire",
              },
              {
                name: "Mauritius Revenue Authority",
                url: "https://www.mra.mu",
                detail: "Declarations fiscales, IS",
              },
              {
                name: "Stripe — Global Availability",
                url: "https://stripe.com/global",
                detail: "Liste des pays supportes",
              },
              {
                name: "MCB E-Commerce Solutions",
                url: "https://mcb.mu/corporate/payment-cash/collect/e-commerce",
                detail: "Passerelle de paiement",
              },
              {
                name: "SBM E-Commerce Acquiring",
                url: "https://banking.sbmgroup.mu/merchant-corner/ecommerce",
                detail: "Services e-commerce",
              },
            ].map((source) => (
              <p key={source.url} className="text-xs text-slate-500">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {source.name}
                </a>
                {" "}— {source.detail}
              </p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {officialSources
              .filter((s) =>
                ["Bank of Mauritius", "FSC Mauritius", "MRA"].includes(s.name)
              )
              .map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 hover:border-blue-300 hover:text-blue-600"
                >
                  {s.name} &rarr;
                </a>
              ))}
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Cet article est fourni a titre informatif et ne constitue pas un
            conseil juridique ou fiscal. Les informations sur la disponibilite
            des PSP sont verifiees en mars 2026 et peuvent evoluer. Contactez
            nos experts pour une analyse personnalisee de votre situation.
          </p>
        </div>
      </section>

      {/* ── CTA Final ──────────────────────────────────────── */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">
            Besoin d&apos;aide pour structurer vos paiements ?
          </h2>
          <p className="mt-3 text-slate-400">
            {founder.name} analyse votre activite et recommande
            l&apos;infrastructure de paiement optimale — en conformite avec la
            reglementation mauricienne.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Etude de faisabilite gratuite. Reponse sous 48h.
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
