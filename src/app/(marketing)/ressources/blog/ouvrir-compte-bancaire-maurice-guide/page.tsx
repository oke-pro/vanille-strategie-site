import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder, officialSources } from "@/data/site";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "Ouvrir un compte bancaire à Maurice — AfrAsia vs MCB vs SBM : le guide complet",
  description:
    "Comparatif détaillé des banques mauriciennes pour expatriés : AfrAsia, MCB, SBM. Frais, multi-devises, apps mobiles, documents KYC, délais réels et pièges à éviter.",
  alternates: {
    canonical: "https://vanillestrategie.fr/ressources/blog/ouvrir-compte-bancaire-maurice-guide",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    title: "Ouvrir un compte bancaire à Maurice — AfrAsia vs MCB vs SBM : le guide complet",
    description:
      "Comparatif détaillé des banques mauriciennes pour expatriés : AfrAsia, MCB, SBM. Frais, multi-devises, apps mobiles, documents KYC, délais réels et pièges à éviter.",
    siteName: "Vanille Stratégie",
    images: [{ url: "https://vanillestrategie.fr/images/hero-paradise.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ouvrir un compte bancaire à Maurice — AfrAsia vs MCB vs SBM : le guide complet",
    description:
      "Comparatif détaillé des banques mauriciennes pour expatriés : AfrAsia, MCB, SBM. Frais, multi-devises, apps mobiles, documents KYC, délais réels et pièges à éviter.",
    images: ["https://vanillestrategie.fr/images/hero-paradise.jpg"],
  },
};

export default function OuvrirCompteBancaireMauricePage() {
  return (
    <>
      <BlogPostingJsonLd
        title="Ouvrir un compte bancaire à Maurice — AfrAsia vs MCB vs SBM : le guide complet"
        description="Comparatif détaillé des banques mauriciennes pour expatriés : AfrAsia, MCB, SBM. Frais, multi-devises, apps mobiles, documents KYC, délais réels et pièges à éviter."
        slug="ouvrir-compte-bancaire-maurice-guide"
        datePublished="2026-03-16"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/ressources/blog" },
          { name: "Ouvrir un compte bancaire à Maurice — AfrAsia vs MCB vs SBM : le guide complet", url: "/ressources/blog/ouvrir-compte-bancaire-maurice-guide" },
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
              Banque &amp; Finance
            </span>
            <span className="text-xs text-slate-500">Mars 2026</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ouvrir un compte bancaire à Maurice — AfrAsia vs MCB vs SBM : le
            guide complet
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Avant de créer votre société, avant même de déposer votre demande
            d&apos;Occupation Permit, il y à une étape que tout expatrié doit
            maîtriser : ouvrir un compte bancaire mauricien. Trois grandes
            banques dominent le paysage. Voici comment choisir — et surtout,
            comment éviter les erreurs qui coûtent des semaines.
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

      {/* Section 1 — Pourquoi c'est la première étape */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Pourquoi le compte bancaire est la PREMIERE étape de votre
            installation
          </h2>
          <p>
            Beaucoup d&apos;expatriés pensent que la première étape est de créer
            leur société ou de déposer leur demande d&apos;Occupation Permit.
            C&apos;est une erreur. Sans compte bancaire mauricien, vous ne
            pouvez rien faire :
          </p>
          <ul>
            <li>
              <strong>Déposer le capital social</strong> de votre société
              (requis par le Corporate and Business Registration Department).
            </li>
            <li>
              <strong>Transférer les 50 000 USD</strong> exigés pour
              l&apos;Occupation Permit Investor ou Self-Employed.
            </li>
            <li>
              <strong>Payer votre loyer, vos charges, vos salariés</strong> — les
              virements internationaux depuis l&apos;étranger vers un tiers
              mauricien sont lents, coûteux et souvent refusés.
            </li>
            <li>
              <strong>Recevoir vos premiers encaissements</strong> — vos clients
              ont besoin de coordonnées bancaires locales (IBAN mauricien) pour
              vous régler.
            </li>
          </ul>
          <p>
            Le compte bancaire conditionné donc l&apos;ensemble du processus.
            C&apos;est le socle sur lequel tout le reste repose.
          </p>

          {/* Callout amber */}
          <div className="not-prose my-8 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-800">
              Point de vigilance
            </p>
            <p className="mt-1 text-sm text-amber-700">
              L&apos;Economic Development Board (EDB) exige la preuve du
              transfert de fonds sur un compte bancaire mauricien pour valider
              votre Occupation Permit. Pas de compte = pas de permis.
              Anticipez : lancez l&apos;ouverture du compte 4 à 6 semaines avant
              votre dépôt de dossier OP.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Comparatif des 3 grandes banques */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Les 3 grandes banques : AfrAsia, MCB et SBM
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Maurice compte une vingtaine de banques commerciales, mais trois
            dominent le marché pour les expatriés et les entrepreneurs
            internationaux. Voici notre comparatif terrain, basé sur plus de
            10 ans d&apos;accompagnement.
          </p>

          {/* AfrAsia */}
          <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              AfrAsia Bank — La banque des expatriés
            </h3>
            <p className="mt-2 text-slate-600">
              Fondée en 2007, AfrAsia s&apos;est positionnée comme{" "}
              <strong>la banque de référence pour les non-résidents et les
              GBC</strong> (Global Business Companies). Son ADN est
              international : elle parle anglais et français, comprend les
              besoins des expatriés et gère couramment les comptes
              multi-juridictions.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Compte courant personnel
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Frais mensuels : environ MUR 200-300/mois. Dépôt minimum
                  d&apos;ouverture : MUR 10 000 ou équivalent en devises.
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Multi-devises
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Global Account jusqu&apos;à 8 devises (MUR, EUR, USD, GBP,
                  ZAR, SGD, AUD, CHF) sur un même compte. Conversion en ligne
                  24/7.
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Banque en ligne
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  AfrAsia Internet Banking : virements SWIFT, conversion de
                  devises, consultation en temps réel. App mobile avec
                  authentification biométrique et notifications push.
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Cartes
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Mastercard World, Titanium et Gold. Paiements internationaux,
                  retraits à l&apos;étranger. Gestion via l&apos;app AfrAsia
                  Cards.
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Accueil expats
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Equipes dédiées non-résidents et GBC. Relationnel direct,
                  interlocuteur unique. Processus d&apos;ouverture
                  partiellement à distance.
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Points forts
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Spécialiste des comptes GBC et corporate internationaux.
                  Spreads de change plus compétitifs sur volumes importants.
                  Private banking accessible.
                </p>
              </div>
            </div>
          </div>

          {/* MCB */}
          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              MCB (Mauritius Commercial Bank) — Le leader historique
            </h3>
            <p className="mt-2 text-slate-600">
              Fondée en 1838, la MCB est la <strong>plus grande banque de
              Maurice</strong> et la plus ancienne. Elle gère la majorité des
              comptes professionnels de l&apos;île et dispose du réseau
              d&apos;agences et de distributeurs le plus étendu. C&apos;est la
              banque la plus &quot;universelle&quot;.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Compte courant personnel
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Frais mensuels : MUR 25 + TVA (compte Standard). Dépôt
                  minimum d&apos;ouverture : MUR 1 000. Packs premium
                  disponibles.
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Multi-devises
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Multi-Currency Current Account : EUR, USD, GBP, ZAR et
                  autres. Seuils de conversion négociables pour les clients
                  Corporate.
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Banque en ligne — MCB Juice
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Juice 5.0 (2025) : paiement NFC (Juice Tap), virements
                  jusqu&apos;à 3 millions MUR/jour, validation par
                  reconnaissance faciale, paiement QR code dans tout Maurice.
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Cartes
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Visa et Mastercard (Debit, Credit, Prepaid). Carte Mastercard
                  Debit tokenisable dans Juice pour le paiement sans contact
                  à l&apos;étranger (30M+ terminaux).
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Accueil expats
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Réseau de 40+ agences à Maurice. Ouverture possible via un
                  intermédiaire agréé FSC pour les non-résidents. Personnel
                  francophone dans la plupart des agences.
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Points forts
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Réseau le plus dense de l&apos;île. App Juice ultra-complète
                  pour le quotidien. Indispensable pour le paiement mobile local
                  (commerçants, restaurants).
                </p>
              </div>
            </div>
          </div>

          {/* SBM */}
          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              SBM (State Bank of Mauritius) — La banque d&apos;Etat
            </h3>
            <p className="mt-2 text-slate-600">
              Fondée en 1973, la SBM est la{" "}
              <strong>deuxième plus grande banque de Maurice</strong>. Détenue
              majoritairement par l&apos;Etat, elle offre des tarifs souvent
              plus compétitifs et un accès à des programmes gouvernementaux.
              Elle s&apos;est récemment modernisée avec le lancement de SBM Tag.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Compte courant personnel
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Frais mensuels : MUR 100-200/mois selon le type de carte.
                  Offre SBM All-In-One regroupant compte, carte et assurance.
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Multi-devises
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Comptes en devises : USD, GBP, EUR, SGD et autres.
                  Ouverture en ligne possible pour certaines devises.
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Banque en ligne — SBM Tag
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Lancée en janvier 2025, SBM Tag remplacé l&apos;ancienne app.
                  Virements SWIFT, paiements QR (MauCas), gestion des cartes,
                  convertisseur de devises intégré. Login biométrique.
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Cartes
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Visa Debit et Credit. Cartes digitales avec paiement sans
                  contact via mobile. Gestion des plafonds et
                  activation/blocage depuis SBM Tag.
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Accueil expats
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Ouverture possible à distance sans visite physique si le
                  dossier documentaire est complet. Délai d&apos;ouverture : 3
                  à 4 semaines ouvrées en moyenne.
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Points forts
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Tarifs souvent les plus bas des 3 grandes banques.
                  Modernisation rapide (SBM Tag). Programmes spécifiques pour
                  les PME et micro-entreprises.
                </p>
              </div>
            </div>
          </div>

          {/* Callout blue — Notre recommandation */}
          <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-800">
              Notre recommandation terrain
            </p>
            <p className="mt-1 text-sm text-blue-700">
              Pour la majorité des expatriés entrepreneurs, nous recommandons
              d&apos;ouvrir <strong>deux comptes</strong> : un compte AfrAsia
              (pour le multi-devises, les opérations internationales et le
              corporate) et un compte MCB (pour le quotidien, les paiements
              locaux via Juice et le réseau d&apos;agences). La SBM est une
              excellente alternative si vous cherchez des frais réduits ou si
              vous avez une activité principalement locale.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Banques internationales */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Les banques internationales présentes à Maurice
          </h2>
          <p>
            Au-delà des trois grandes banques locales, plusieurs établissements
            internationaux opèrent à Maurice. Leur rôle et leur accessibilité
            pour les expatriés varient considérablement.
          </p>

          <h3 className="text-xl font-semibold text-slate-800">
            HSBC Mauritius
          </h3>
          <p>
            HSBC reste présent à Maurice, mais uniquement pour le{" "}
            <strong>corporate banking, le trade finance et la banque
            institutionnelle</strong>. En 2024, HSBC a cédé l&apos;intégralité
            de son activité Wealth &amp; Personal Banking et Business Banking
            (environ 38 000 clients particuliers et 400 PME) à Absa Bank
            Mauritius. Si vous aviez un compte HSBC personnel, vous êtes
            désormais client Absa.
          </p>

          <h3 className="text-xl font-semibold text-slate-800">
            Absa Bank (ex-Barclays)
          </h3>
          <p>
            Anciennement Barclays Bank Mauritius, Absa fait partie du groupe
            Absa (Afrique du Sud). Depuis l&apos;absorption des clients HSBC
            en 2024, Absa propose une offre complète en{" "}
            <strong>banque personnelle, business banking et wealth
            management</strong>. Son réseau international et son expertise
            cross-border en font une option intéressante pour les
            entrepreneurs ayant des connexions en Afrique australe.
          </p>

          <h3 className="text-xl font-semibold text-slate-800">
            Bank One
          </h3>
          <p>
            Co-détenue par le groupe CIEL (Maurice) et I&amp;M Group (Kenya),
            Bank One est une banque locale à dimension régionale. Elle offre
            des services de banque personnelle, corporate et private banking
            avec un positionnement{" "}
            <strong>premium et personnalisé</strong>. Bonne option pour les
            entrepreneurs ayant des activités en Afrique de l&apos;Est.
          </p>

          {/* Callout amber */}
          <div className="not-prose my-8 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-800">
              A savoir
            </p>
            <p className="mt-1 text-sm text-amber-700">
              Les banques internationales à Maurice appliquent généralement des
              seuils d&apos;entrée plus élevés (dépôt minimum, revenus
              minimums). Pour un expatrié qui débute, AfrAsia, MCB ou SBM
              restent les choix les plus accessibles et les plus pratiques au
              quotidien.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — Documents nécessaires */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Les documents nécessaires — Le parcours KYC/AML
          </h2>
          <p>
            Maurice est conforme aux standards internationaux de lutte contre le
            blanchiment (AML) et de connaissance client (KYC). Les banques sont
            strictes — et c&apos;est une bonne chose pour la réputation du
            centre financier. Voici ce que vous devez préparer :
          </p>

          <h3 className="text-xl font-semibold text-slate-800">
            Pour un compte personnel
          </h3>
          <ul>
            <li>
              <strong>Passeport valide</strong> — copie certifiée conforme
              (notaire ou ambassade). Validité résiduelle d&apos;au moins
              6 mois.
            </li>
            <li>
              <strong>Proof of address</strong> — facture de services publics
              (électricité, eau, téléphone) ou relevé bancaire de moins de
              3 mois. Si vous n&apos;avez pas encore d&apos;adresse à Maurice,
              votre justificatif de domicile du pays d&apos;origine est
              accepté initialement.
            </li>
            <li>
              <strong>Lettre de référence bancaire</strong> — émise par votre
              banque actuelle, confirmant que vous êtes client en règle depuis
              au moins 2 ans. Document le plus souvent oublié — demandez-le
              tôt.
            </li>
            <li>
              <strong>Source of funds / Source of wealth</strong> — la banque
              doit comprendre d&apos;où vient votre argent. Documents
              acceptés : avis d&apos;imposition, bulletins de salaire, acte de
              vente immobilière, relevés de comptes montrant l&apos;épargne,
              attestation d&apos;héritage.
            </li>
            <li>
              <strong>CV ou profil professionnel</strong> — certaines banques
              (notamment AfrAsia) demandent un résumé de votre parcours
              professionnel.
            </li>
            <li>
              <strong>Visa ou Occupation Permit</strong> — si déjà obtenu. A
              défaut, une lettre d&apos;intention ou le récépissé de dépôt
              auprès de l&apos;EDB peut suffire.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800">
            Pour un compte société
          </h3>
          <ul>
            <li>
              Tous les documents personnels ci-dessus pour chaque directeur et
              actionnaire détenant plus de 10 % du capital.
            </li>
            <li>
              <strong>Certificate of Incorporation</strong> et statuts de la
              société mauricienne.
            </li>
            <li>
              <strong>Business plan</strong> ou description détaillée de
              l&apos;activité.
            </li>
            <li>
              <strong>Résolution du conseil d&apos;administration</strong>{" "}
              autorisant l&apos;ouverture du compte et désignant les
              signataires.
            </li>
            <li>
              <strong>Register of Directors et Register of Shareholders</strong>{" "}
              certifié.
            </li>
            <li>
              <strong>Licence FSC</strong> (si GBC ou Authorised Company).
            </li>
          </ul>

          {/* Callout red */}
          <div className="not-prose my-8 rounded-lg border border-red-200 bg-red-50 p-5">
            <p className="text-sm font-semibold text-red-800">
              Erreur fatale
            </p>
            <p className="mt-1 text-sm text-red-700">
              Un dossier incomplet ne sera pas &quot;mis en attente&quot; — il
              sera <strong>rejeté</strong>. Vous devrez tout recommencer,
              perdant 2 à 4 semaines supplémentaires. Nous voyons
              régulièrement des dossiers refusés parce que la lettre de
              référence bancaire était expirée (plus de 3 mois) ou parce que
              le &quot;source of funds&quot; n&apos;était pas suffisamment
              documenté. Préparez un dossier béton dès le départ.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 — Compte personnel vs compte société */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Compte personnel vs compte société — deux procédures distinctes
          </h2>
          <p>
            A Maurice, le compte personnel et le compte société sont deux
            produits totalement séparés, avec des procédures, des délais et des
            exigences différentes. Ne confondez pas les deux.
          </p>

          <h3 className="text-xl font-semibold text-slate-800">
            Compte personnel
          </h3>
          <ul>
            <li>
              Peut être ouvert <strong>avant</strong> la création de la société
              et avant l&apos;obtention de l&apos;OP.
            </li>
            <li>
              Sert à recevoir vos fonds personnels, payer votre loyer, vos
              dépenses courantes.
            </li>
            <li>
              Délai moyen : <strong>2 à 3 semaines</strong> si le dossier est
              complet.
            </li>
            <li>
              KYC plus simple : passeport, proof of address, référence
              bancaire, source of funds.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800">
            Compte société (Corporate Account)
          </h3>
          <ul>
            <li>
              Ne peut être ouvert qu&apos;<strong>après</strong>{" "}
              l&apos;immatriculation de la société auprès du CBRD.
            </li>
            <li>
              Nécessite l&apos;ensemble des documents corporate (statuts,
              résolution, registres).
            </li>
            <li>
              Délai moyen : <strong>3 à 4 semaines</strong>, parfois plus pour
              les GBC qui nécessitent une due diligence renforcée.
            </li>
            <li>
              La banque vérifie l&apos;identité de tous les Ultimate Beneficial
              Owners (UBO) — y compris ceux qui détiennent indirectement plus
              de 10 % du capital.
            </li>
          </ul>

          {/* Callout blue */}
          <div className="not-prose my-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-800">
              Stratégie recommandée
            </p>
            <p className="mt-1 text-sm text-blue-700">
              Ouvrez votre compte personnel en premier, dès votre arrivée (ou
              même avant, via un intermédiaire agréé). Lancez ensuite la
              création de société en parallèle. Une fois la société
              immatriculée, ouvrez le compte corporate. Cette approche vous
              permet de ne pas bloquer le processus : vous pouvez déjà
              transférer vos fonds personnels pendant que le compte corporate
              est en cours d&apos;ouverture.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 — Délais réalistes */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Les délais réalistes — oubliez les &quot;3 jours&quot;
          </h2>
          <p>
            Certains prestataires annoncent une ouverture de compte en
            &quot;3 jours ouvrés&quot;. C&apos;est un mensonge commercial.
            Voici les délais réels que nous constatons sur le terrain depuis
            plus de 10 ans :
          </p>

          <div className="not-prose mt-6 space-y-3">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">
                  Compte personnel (résident/OP)
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                  2-3 semaines
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Si le dossier est complet et que la banque ne demande pas de
                compléments. Ajoutez 1-2 semaines en cas de pièce manquante.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">
                  Compte personnel (non-résident)
                </span>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                  3-4 semaines
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Due diligence renforcée pour les non-résidents. Certaines
                banques exigent la nomination d&apos;un registered agent
                (1 000-1 500 USD/an).
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">
                  Compte corporate (Domestic Company)
                </span>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                  3-4 semaines
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Après immatriculation de la société. Inclut la vérification de
                tous les UBO et signataires autorisés.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">
                  Compte corporate (GBC)
                </span>
                <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
                  4-6 semaines
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Due diligence renforcée obligatoire. La banque examine la
                licence FSC, la structure du groupe, les flux prévisionnels
                et la substance économique.
              </p>
            </div>
          </div>

          {/* Callout amber */}
          <div className="not-prose my-8 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-800">
              Facteur accélérateur
            </p>
            <p className="mt-1 text-sm text-amber-700">
              Passer par un cabinet comme Vanille Stratégie / BD Star, qui a
              des relations directes avec les compliance officers des banques,
              réduit les délais de 30 à 50 %. Nos dossiers sont pré-validés
              selon les exigences spécifiques de chaque banque, ce qui élimine
              les allers-retours.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 — Multi-devises */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Le compte multi-devises : MUR, EUR, USD, GBP — pourquoi
            c&apos;est indispensable
          </h2>
          <p>
            A Maurice, un compte en roupies seul ne suffit pas. Si vous êtes
            expatrié, vous avez par définition des flux dans plusieurs
            devises : vous recevez en euros de vos clients français, vous
            payez des fournisseurs en dollars, vous réglez vos charges locales
            en roupies, et vous épargnez peut-être en livres sterling.
          </p>
          <p>
            Un compte multi-devises vous permet de :
          </p>
          <ul>
            <li>
              <strong>Recevoir des virements dans la devise d&apos;origine</strong>{" "}
              sans conversion automatique. Vos euros restent des euros.
            </li>
            <li>
              <strong>Convertir au moment de votre choix</strong>, quand le
              taux est favorable, plutôt que de subir le taux du jour de
              réception.
            </li>
            <li>
              <strong>Éviter les doubles conversions</strong> destructrices
              (EUR vers MUR vers USD = deux spreads bancaires).
            </li>
            <li>
              <strong>Payer vos fournisseurs internationaux</strong>{" "}
              directement dans leur devise, sans frais de change
              supplémentaires.
            </li>
          </ul>

          {/* Callout green */}
          <div className="not-prose my-8 rounded-lg border border-green-200 bg-green-50 p-5">
            <p className="text-sm font-semibold text-green-800">
              Exemple concret
            </p>
            <p className="mt-1 text-sm text-green-700">
              Un client e-commerçant facture 15 000 EUR/mois à des clients
              européens. Sans compte multi-devises, sa banque convertit
              automatiquement en MUR à réception (spread ~2 %). Quand il paie
              ses fournisseurs chinois en USD, rebelote : MUR vers USD (spread
              ~2 %). Perte annuelle : environ 7 200 EUR. Avec un compte
              multi-devises, il garde ses EUR, convertit en USD directement
              (spread ~1 %) et ne convertit en MUR que pour ses dépenses
              locales. Economie annuelle : plus de 5 000 EUR.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8 — Carte de crédit internationale */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Carte de crédit internationale : Visa ou Mastercard ?
          </h2>
          <p>
            A Maurice, les deux réseaux sont bien acceptés, mais avec des
            nuances importantes pour les expatriés :
          </p>

          <h3 className="text-xl font-semibold text-slate-800">
            Mastercard
          </h3>
          <ul>
            <li>
              <strong>MCB</strong> : Mastercard Debit tokenisable dans
              l&apos;app Juice pour le paiement NFC (Juice Tap). Utilisable sur
              30 millions+ de terminaux dans le monde.
            </li>
            <li>
              <strong>AfrAsia</strong> : gamme World, Titanium et Gold
              Mastercard. Gestion via l&apos;app AfrAsia Cards (blocage,
              plafonds, historique).
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800">
            Visa
          </h3>
          <ul>
            <li>
              <strong>MCB</strong> : Visa Debit et Credit disponibles, y
              compris des cartes prépayées pour les dépenses contrôlées.
            </li>
            <li>
              <strong>SBM</strong> : Visa Debit et Credit avec cartes
              digitales intégrées dans SBM Tag pour le paiement sans contact.
            </li>
          </ul>

          {/* Callout blue */}
          <div className="not-prose my-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-800">
              Conseil pratique
            </p>
            <p className="mt-1 text-sm text-blue-700">
              Prenez au minimum une carte de débit pour le quotidien et une
              carte de crédit internationale pour vos déplacements et achats en
              ligne. Les plafonds de retrait DAB à Maurice sont généralement de
              MUR 30 000-50 000 par jour. Pour les voyages d&apos;affaires
              fréquents, la Mastercard World AfrAsia offre les meilleurs
              avantages (assurances voyage, conciergerie, accès lounges).
            </p>
          </div>
        </div>
      </section>

      {/* Section 9 — Banque en ligne et apps */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Banque en ligne et apps mobiles : MCB Juice, AfrAsia IB, SBM Tag
          </h2>
          <p>
            La qualité de la banque en ligne est un critère décisif pour les
            expatriés qui pilotent leur business à distance. Voici notre
            évaluation des trois plateformes :
          </p>

          <h3 className="text-xl font-semibold text-slate-800">
            MCB Juice 5.0
          </h3>
          <p>
            L&apos;app la plus complète de l&apos;île. MCB Juice est devenue
            bien plus qu&apos;une app bancaire — c&apos;est le{" "}
            <strong>portefeuille mobile de référence à Maurice</strong>.
            Paiement en magasin par QR code, virements instantanés jusqu&apos;à
            3 millions MUR/jour, paiement NFC via Juice Tap, factures en un
            clic, rechargement mobile, retrait sans carte aux DAB MCB,
            validation par reconnaissance faciale. Indispensable pour la vie
            quotidienne à Maurice.
          </p>

          <h3 className="text-xl font-semibold text-slate-800">
            AfrAsia Internet Banking
          </h3>
          <p>
            Plus orientée <strong>gestion patrimoniale et corporate</strong>{" "}
            que paiement quotidien. L&apos;interface permet la consultation de
            tous les comptes multi-devises, les virements SWIFT internationaux,
            la conversion de devises en ligne, l&apos;historique détaillé avec
            taux de change appliqués. Authentification par biométrie et
            notifications push. L&apos;app AfrAsia Cards gère séparément les
            cartes Mastercard.
          </p>

          <h3 className="text-xl font-semibold text-slate-800">
            SBM Tag
          </h3>
          <p>
            Lancée en janvier 2025 pour remplacer l&apos;ancienne app mobile
            SBM. Interface modernisée avec virements locaux et SWIFT, paiements
            MauCas (QR code), gestion des cartes (blocage, activation, plafonds),
            convertisseur de devises intégré, fonction &quot;Pay to Mobile&quot;
            et &quot;Request Money&quot;. En rattrapage par rapport à Juice,
            mais progresse rapidement.
          </p>

          {/* Callout amber */}
          <div className="not-prose my-8 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-800">
              En résumé
            </p>
            <p className="mt-1 text-sm text-amber-700">
              <strong>MCB Juice</strong> pour le quotidien à Maurice (paiements,
              transferts locaux, QR code). <strong>AfrAsia IB</strong> pour la
              gestion de vos comptes internationaux et multi-devises.{" "}
              <strong>SBM Tag</strong> comme alternative solide et en
              constante amélioration. C&apos;est pourquoi nous recommandons de
              cumuler MCB + AfrAsia.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10 — Pièges à éviter */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Les pièges à éviter
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            En 10 ans d&apos;accompagnement, nous avons vu ces erreurs des
            dizaines de fois. Chacune coûte du temps, de l&apos;argent et
            parfois compromet tout le projet d&apos;installation.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-5">
              <p className="text-sm font-semibold text-red-800">
                Piège n°1 — Venir sans lettre de référence bancaire
              </p>
              <p className="mt-1 text-sm text-red-700">
                C&apos;est le document le plus souvent oublié. Votre banque
                française met 2 à 3 semaines à la produire. Si vous ne
                l&apos;avez pas, votre dossier sera rejeté. Demandez-la
                3 mois avant votre départ.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-5">
              <p className="text-sm font-semibold text-red-800">
                Piège n°2 — Sous-estimer le &quot;source of funds&quot;
              </p>
              <p className="mt-1 text-sm text-red-700">
                &quot;J&apos;ai de l&apos;argent sur mon compte&quot; ne suffit
                pas. Les banques mauriciennes veulent comprendre l&apos;origine
                de chaque flux significatif : salaires cumulés, vente
                immobilière, dividendes, héritage. Préparez une timeline
                claire avec les justificatifs correspondants.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-5">
              <p className="text-sm font-semibold text-red-800">
                Piège n°3 — Croire qu&apos;on peut ouvrir un compte en 3 jours
              </p>
              <p className="mt-1 text-sm text-red-700">
                Aucune banque mauricienne n&apos;ouvre un compte en 3 jours
                pour un non-résident. Minimum 2 semaines, souvent 3-4 semaines.
                Les prestataires qui promettent 3 jours vous mentent ou
                comptent à partir de la soumission du dossier complet — pas à
                partir de votre premier contact.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-5">
              <p className="text-sm font-semibold text-red-800">
                Piège n°4 — Ouvrir un seul compte en roupies
              </p>
              <p className="mt-1 text-sm text-red-700">
                Si vous facturez à l&apos;international, un compte uniquement
                en MUR vous expose à des conversions forcées avec des spreads
                de 2-4 %. Ouvrez systématiquement un compte multi-devises
                (EUR + USD minimum).
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-5">
              <p className="text-sm font-semibold text-red-800">
                Piège n°5 — Négliger la conformité AML
              </p>
              <p className="mt-1 text-sm text-red-700">
                Maurice est conforme au Common Reporting Standard (CRS) et au
                FATCA. Chaque année, les banques transmettent automatiquement
                vos informations aux autorités fiscales de votre pays
                d&apos;origine. Ne tentez rien d&apos;opaque : les comptes sont
                fermés sans préavis en cas de suspicion.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-5">
              <p className="text-sm font-semibold text-red-800">
                Piège n°6 — Utiliser des documents expirés
              </p>
              <p className="mt-1 text-sm text-red-700">
                Proof of address de plus de 3 mois ? Rejeté. Lettre de
                référence bancaire de plus de 3 mois ? Rejetée. Passeport
                expirant dans moins de 6 mois ? Rejeté. Vérifiez la validité
                de chaque document avant de soumettre votre dossier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11 — Comment VS/BD Star facilite l'ouverture */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Comment Vanille Stratégie / BD Star facilite votre ouverture de
            compte
          </h2>
          <p>
            Depuis 2012, nous avons ouvert des centaines de comptes bancaires
            pour nos clients expatriés. Ce n&apos;est pas juste un
            &quot;service administratif&quot; — c&apos;est un processus que nous
            avons industrialisé grâce à nos relations directes avec les
            équipes compliance des banques.
          </p>

          <h3 className="text-xl font-semibold text-slate-800">
            Ce que nous faisons concrètement
          </h3>
          <ul>
            <li>
              <strong>Audit documentaire complet</strong> : nous vérifions
              chaque pièce de votre dossier avant soumission. Aucun document
              manquant, aucun format incorrect, aucune date expirée.
            </li>
            <li>
              <strong>Choix de la banque adaptée</strong> : selon votre profil
              (entrepreneur, retraité, digital nomad, GBC), nous orientons vers
              la banque la plus appropriée — parfois deux.
            </li>
            <li>
              <strong>Relation directe avec les compliance officers</strong> :
              nos dossiers sont identifiés comme &quot;pré-validés BD Star&quot;.
              Les banques savent que notre cabinet soumet des dossiers complets
              et conformes, ce qui accélère le traitement.
            </li>
            <li>
              <strong>Suivi du dossier en temps réel</strong> : nous relançons
              proactivement la banque à chaque étape. Vous n&apos;avez pas à
              appeler ou à vous déplacer.
            </li>
            <li>
              <strong>Ouverture multi-comptes simultanée</strong> : si vous
              avez besoin d&apos;un compte personnel + un compte corporate +
              un compte multi-devises, nous gérons les trois en parallèle.
            </li>
            <li>
              <strong>Configuration bancaire optimale</strong> : paramétrage des
              comptes multi-devises, activation des cartes internationales,
              mise en place de l&apos;internet banking, formation à
              l&apos;utilisation de Juice ou AfrAsia IB.
            </li>
          </ul>

          {/* Callout green */}
          <div className="not-prose my-8 rounded-lg border border-green-200 bg-green-50 p-5">
            <p className="text-sm font-semibold text-green-800">
              Résultat pour nos clients
            </p>
            <p className="mt-1 text-sm text-green-700">
              En passant par Vanille Stratégie / BD Star, nos clients obtiennent
              leur compte bancaire opérationnel en{" "}
              <strong>2 à 3 semaines en moyenne</strong> (contre 4 à 6 semaines
              en autonomie), avec zéro rejet de dossier. C&apos;est le premier
              service que nous délivrons dans notre accompagnement — et souvent
              celui qui rassure le plus nos clients sur leur choix de
              s&apos;installer à Maurice.
            </p>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            Sources :{" "}
            {officialSources
              .filter((s) =>
                [
                  "Bank of Mauritius",
                  "EDB Mauritius",
                  "CBRD",
                  "FSC Mauritius",
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
              href="https://www.afrasiabank.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              AfrAsia Bank
            </a>
            {" · "}
            <a
              href="https://mcb.mu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              MCB
            </a>
            {" · "}
            <a
              href="https://banking.sbmgroup.mu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              SBM Bank
            </a>
          </p>
          <p className="mt-2 text-xs text-slate-400">
            Cet article est fourni à titre informatif et ne constitue pas un
            conseil juridique ou financier. Les frais, services et conditions
            mentionnés sont indicatifs et susceptibles d&apos;évoluer.
            Contactez nos experts pour un accompagnement personnalisé.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">
            Ouvrez votre compte bancaire mauricien sans stress
          </h2>
          <p className="mt-3 text-slate-400">
            Audit documentaire, choix de la banque, suivi du dossier — {founder.name},{" "}
            {founder.title}, et son équipe s&apos;occupent de tout.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 px-10 hover:bg-blue-700"
              >
                Demander un accompagnement bancaire
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
