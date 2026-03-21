import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder, officialSources } from "@/data/site";

export const metadata: Metadata = {
  title:
    "Ecosysteme tech et digital a Maurice — Incubateurs, programmes et opportunites pour les startups",
  description:
    "Maurice se positionne comme hub tech de l'ocean Indien. Incubateurs (Turbine, La Plage Factory), Innovator Permit, avantages fiscaux, fintech, VASP — guide complet par Didier Laroussinie.",
};

export default function EcosystemeTechStartupsMauricePage() {
  return (
    <>
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
            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-300">
              Tech & Startups
            </span>
            <span className="text-xs text-slate-500">Mars 2026</span>
            <span className="text-xs text-slate-500">· 22 min</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            L&apos;ecosysteme tech et digital a Maurice — Incubateurs,
            programmes et opportunites pour les startups
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            L&apos;Ile Maurice ne se resume plus aux plages et aux hotels de
            luxe. L&apos;ile s&apos;impose desormais comme le hub technologique
            de l&apos;ocean Indien, avec un ecosysteme startup en pleine
            effervescence, des incubateurs de classe mondiale, des avantages
            fiscaux uniques et une vision gouvernementale ambitieuse. Bienvenue
            dans le terrain de jeu des innovateurs.
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
      {/* Section 1 — Maurice, hub tech de l'ocean Indien */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            1. Maurice se positionne comme hub tech de l&apos;ocean Indien
          </h2>
          <p>
            En une decennie, Maurice a opere une transformation remarquable. Le
            secteur tech contribue desormais a pres de{" "}
            <strong>9,3 % du PIB</strong>, contre 5,6 % en 2020. L&apos;ile se
            classe au 61e rang mondial dans l&apos;ecosysteme startup selon
            StartupBlink — une position qui en fait l&apos;etoile montante de
            l&apos;Afrique de l&apos;Est.
          </p>
          <p>
            Le gouvernement ne se contente pas d&apos;observer cette dynamique :
            il la pilote. Le budget 2025-2026 consacre une enveloppe de{" "}
            <strong>25 millions MUR</strong> pour equiper tous les ministeres
            d&apos;outils digitaux avances. Le Ministry of Information
            Technology, Communication and Innovation (MITCI) a publie un
            nouveau blueprint ICT visant a transformer Maurice en une{" "}
            <strong>&ldquo;Intelligent Island&rdquo;</strong>.
          </p>
          <p>
            En parallele, le plan Digital Mauritius 2030 prevoit des grants
            allant jusqu&apos;a <strong>Rs 5 millions</strong> pour des projets
            de R&D, tandis qu&apos;un programme dedie aux startups innovantes a
            ete cree sous l&apos;egide du MITCI. L&apos;objectif est clair :
            faire de Maurice un pole d&apos;innovation capable de rivaliser avec
            Singapour pour l&apos;Afrique et l&apos;ocean Indien.
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 not-prose">
            <p className="text-sm font-semibold text-blue-800">
              Le chiffre cle
            </p>
            <p className="mt-1 text-sm text-blue-700">
              Le budget 2025-2026 prevoit egalement Rs 70 millions pour un Data
              Centre gouvernemental Tier IV dedie a la reprise apres sinistre,
              ainsi que l&apos;alignement des lois sur la protection des donnees
              et la cybersecurite avec les normes internationales. Maurice joue
              dans la cour des grands.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 2 — Incubateurs et accelerateurs */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            2. Incubateurs et accelerateurs : le coeur battant de
            l&apos;ecosysteme
          </h2>
          <p>
            L&apos;un des atouts majeurs de Maurice est la densite de son
            reseau d&apos;incubation. Plusieurs structures offrent un
            accompagnement complet aux startups, du concept au scale-up.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Turbine — L&apos;accelerateur de reference
          </h3>
          <p>
            Base a Maurice,{" "}
            <a
              href="https://turbine.mu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Turbine
            </a>{" "}
            est un incubateur et accelerateur qui fournit du coworking, du
            mentorat et un acces au financement. En tant que membre de{" "}
            <strong>Catalytic Africa</strong>, les startups incubees chez
            Turbine peuvent acceder a des grants de{" "}
            <strong>20 000 a 60 000 USD</strong> une fois qu&apos;elles
            securisent un investissement d&apos;un business angel enregistre
            aupres de l&apos;ABAN (African Business Angel Network).
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            La Plage Factory — Incubation a la francaise
          </h3>
          <p>
            Fondee en 2017 et accreditee par le{" "}
            <strong>
              Mauritius Research and Innovation Council (MRIC)
            </strong>
            ,{" "}
            <a
              href="http://laplage.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              La Plage Factory
            </a>{" "}
            propose un programme d&apos;incubation de 7 mois (Growth &
            Innovation Programme) pour les entreprises en phase early-stage.
            Le programme accueille 12 entrepreneurs par cohorte et offre :
            mentorat dedie, acces gratuit au coworking, evenements communautaires
            et utilisation de la plateforme Vianeo pour le business modelling.
            C&apos;est l&apos;adresse ideale pour les entreprises tech ciblant
            l&apos;Afrique et l&apos;Europe depuis Maurice.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Ebene Accelerator
          </h3>
          <p>
            Cree par le Ministry of Finance et le groupe Orange Mauritius en
            2013, cet accelerateur propose un{" "}
            <strong>hebergement gratuit de 4 mois</strong>, suivi de 4 mois a
            50 % de remise. L&apos;accompagnement inclut du business planning
            et du mentorat intensif — parfait pour les startups en phase de
            lancement.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Autres acteurs cles
          </h3>
          <ul>
            <li>
              <strong>Mauritius Startup Incubator</strong> : mentorat et espace
              de bureau pour les early-stage startups
            </li>
            <li>
              <strong>Ventures AA</strong> : espace de bureau, mentorat et
              soutien financier
            </li>
            <li>
              <strong>Verde Ventures</strong> : pre-incubation, incubation et
              acceleration — specialise dans la greentech
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            L&apos;Innovator Permit de l&apos;EDB — La cle d&apos;entree pour
            les fondateurs etrangers
          </h3>
          <p>
            L&apos;Economic Development Board (EDB) a cree un permis
            specifiquement concu pour les entrepreneurs innovants : l&apos;
            <strong>Innovator Permit</strong>. Ses caracteristiques sont
            exceptionnelles :
          </p>
          <ul>
            <li>
              <strong>Aucun capital minimum requis</strong> — contrairement aux
              autres permits (Occupation Permit Investor : USD 50 000)
            </li>
            <li>
              La R&D doit representer au moins <strong>20 %</strong> des
              depenses operationnelles durant la phase de recherche
            </li>
            <li>
              <strong>Deux voies d&apos;acces</strong> : soumettre un projet
              innovant directement a l&apos;EDB, ou s&apos;inscrire aupres
              d&apos;un incubateur accredite par le MRIC
            </li>
            <li>
              Secteurs eligibles : ICT, fintech, biotechnologie,
              nanotechnologie, pharmaceutique
            </li>
          </ul>

          <div className="rounded-lg border border-green-200 bg-green-50 p-4 not-prose">
            <p className="text-sm font-semibold text-green-800">
              Bonne pratique
            </p>
            <p className="mt-1 text-sm text-green-700">
              Passez par un incubateur accredite MRIC (comme La Plage Factory
              ou Turbine) pour obtenir votre Innovator Permit : la procedure est
              plus rapide et vous beneficiez d&apos;un accompagnement des le
              depart. L&apos;EDB effectue des revues de conformite a 5 ans et 10
              ans — assurez-vous que votre projet genere de la valeur reelle.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 3 — Programmes de soutien gouvernementaux */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            3. Programmes de soutien gouvernementaux : un arsenal complet
          </h2>
          <p>
            Maurice ne se contente pas de creer un environnement favorable — le
            gouvernement met la main a la poche. Voici les principaux
            dispositifs de financement et d&apos;accompagnement disponibles pour
            les startups.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            SME Mauritius — Grants et schemes
          </h3>
          <p>
            <a
              href="https://www.smemu.com/schemes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              SME Mauritius
            </a>{" "}
            propose une gamme de grants couvrant jusqu&apos;a{" "}
            <strong>80 % des couts eligibles</strong> (le beneficiaire
            contribuant un minimum de 20 %). Les schemes couvrent notamment :
          </p>
          <ul>
            <li>
              L&apos;investissement technologique et les capacites de production
              automatisee
            </li>
            <li>
              Les initiatives vertes (mecanismes dedies, normes
              internationales)
            </li>
            <li>
              La certification et la mise aux normes
            </li>
          </ul>
          <p>
            <strong>Condition :</strong> un minimum de 51 % de l&apos;
            actionnariat doit etre detenu par un national mauricien. Pour les
            fondateurs etrangers, un montage avec un partenaire local est donc
            envisageable.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            National SME Incubator Scheme (NSIS)
          </h3>
          <p>
            Initie par le gouvernement et gere par le MRIC, le NSIS finance des
            incubateurs prives accredites sur un modele de{" "}
            <strong>matching grant 50/50</strong>. Les montants :
          </p>
          <ul>
            <li>
              <strong>Pre-incubation</strong> : jusqu&apos;a Rs 50 000 sur 9
              mois
            </li>
            <li>
              <strong>Incubation</strong> : jusqu&apos;a Rs 400 000 sur 18 mois
            </li>
            <li>
              <strong>Acceleration</strong> : montants variables selon le projet
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Development Bank of Mauritius (DBM)
          </h3>
          <p>
            La{" "}
            <a
              href="https://www.dbm.mu/loan-category/sme-loans/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              DBM
            </a>{" "}
            propose des prets dedies aux PME et startups a des conditions
            preferentielles. C&apos;est souvent la premiere source de
            financement bancaire pour les jeunes entreprises mauriciennes qui
            n&apos;ont pas encore acces aux banques commerciales traditionnelles.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            MRIC — Grants d&apos;innovation
          </h3>
          <p>
            Le Mauritius Research and Innovation Council propose deux schemes
            majeurs :
          </p>
          <ul>
            <li>
              <strong>Innovation Boost Grant (IBG)</strong> : jusqu&apos;a{" "}
              <strong>MUR 1 million</strong> pour un projet de 12 mois maximum
            </li>
            <li>
              <strong>
                Collaborative Research and Innovation Grant Scheme (CRIGS)
              </strong>{" "}
              : jusqu&apos;a <strong>MUR 5 millions</strong> en matching grant
              pour un projet de 24 mois, en partenariat entre une entreprise et
              une institution academique locale
            </li>
          </ul>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 not-prose">
            <p className="text-sm font-semibold text-blue-800">
              Astuce
            </p>
            <p className="mt-1 text-sm text-blue-700">
              Le CRIGS est particulierement interessant pour les startups tech :
              en partenariat avec l&apos;Universite de Maurice ou le Mauritius
              Institute of Education, vous accedez a un financement de Rs 5
              millions ET a des talents de recherche. Les appels a propositions
              sont lances regulierement — surveillez le site du MRIC.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 4 — Cybercity Ebene */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            4. Cybercity Ebene : le quartier tech de Maurice
          </h2>
          <p>
            Depuis son inauguration en 2001, Ebene Cybercity s&apos;est
            transformee en un veritable quartier d&apos;affaires de classe
            mondiale. Les chiffres parlent d&apos;eux-memes :
          </p>
          <ul>
            <li>
              <strong>Plus de 60 batiments</strong> representant 500 000 m2
              d&apos;espaces de bureaux
            </li>
            <li>
              <strong>40 000 travailleurs</strong> au quotidien
            </li>
            <li>
              Des commerces, restaurants, un hotel d&apos;affaires et des
              institutions gouvernementales
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Les batiments emblematiques
          </h3>
          <p>
            <strong>The Core</strong> est le coeur nevralgique de la Cybercity.
            C&apos;est d&apos;ailleurs la que BD Star Management Services, la
            branche comptable du groupe Vanille Strategie, a installe ses
            bureaux au 12e etage (suites 1210/1211). A proximite, le{" "}
            <strong>Business Gateway</strong> et le{" "}
            <strong>Heritage City</strong> completent l&apos;offre immobiliere
            de premier plan.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Infrastructure de pointe
          </h3>
          <p>
            La Cybercity dispose d&apos;une connectivite fibre optique haut
            debit, de <strong>data centers</strong> (dont le Cybercity Data
            Centre) et d&apos;un acces aux cables sous-marins internationaux
            (SAFE, LION, MARS). Le budget 2025-2026 renforce cette
            infrastructure avec un investissement de Rs 70 millions dans un Data
            Centre gouvernemental Tier IV.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Entreprises tech installees
          </h3>
          <p>
            De nombreuses entreprises tech ont fait d&apos;Ebene leur base
            operationnelle : <strong>Bocasay</strong> (developpement web et
            logiciel sur mesure), <strong>Artover</strong> (agence digitale
            depuis 2009), <strong>Future Buzz</strong> (marketing digital), ainsi
            que des societes de BPO, des firmes fintech et des cabinets de
            conseil en IT. L&apos;ecosysteme Ebene est un melange d&apos;
            entreprises locales et internationales qui cree une dynamique
            unique.
          </p>

          <div className="rounded-lg border border-green-200 bg-green-50 p-4 not-prose">
            <p className="text-sm font-semibold text-green-800">
              Bonne pratique
            </p>
            <p className="mt-1 text-sm text-green-700">
              Si vous lancez votre startup a Maurice, installez-vous a Ebene
              ou dans un coworking a proximite. L&apos;effet reseau y est
              puissant : vous croisez des investisseurs, des developpeurs, des
              comptables (coucou BD Star !) et des partenaires potentiels au
              quotidien. La proximite physique reste un accelerateur de business
              inegale.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 5 — Secteurs porteurs */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            5. Secteurs porteurs pour les startups tech
          </h2>
          <p>
            Tous les secteurs ne se valent pas en termes d&apos;opportunites.
            Voici ceux ou Maurice offre un avantage competitif reel.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Fintech — Le secteur roi
          </h3>
          <p>
            Maurice dispose d&apos;un cadre reglementaire mature pour la
            fintech. La <strong>Financial Services Commission (FSC)</strong>{" "}
            delivre des licences adaptees a differents modeles : paiements,
            crowdfunding, forex, gestion d&apos;actifs. Le pays beneficie
            egalement d&apos;une <strong>sandbox reglementaire</strong> qui
            permet aux startups fintech de tester leurs produits dans un
            environnement controle avant d&apos;obtenir une licence complete.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Blockchain et VASP — Un cadre juridique clair
          </h3>
          <p>
            Depuis le{" "}
            <strong>
              Virtual Asset and Initial Token Offering Services Act (VAITOS)
              de 2021
            </strong>
            , Maurice offre un cadre reglementaire FATF-aligned pour les actifs
            virtuels, supervise par la FSC. Cinq classes de licences VASP
            couvrent :
          </p>
          <ul>
            <li>Le courtage (brokerage)</li>
            <li>Les portefeuilles (wallet services)</li>
            <li>La garde d&apos;actifs (custody)</li>
            <li>Le conseil (advisory)</li>
            <li>Les plateformes d&apos;echange (marketplace/exchange)</li>
          </ul>
          <p>
            Depuis mars 2025, des obligations AML/CFT renforcees sont en
            vigueur, incluant le monitoring des transactions en temps reel, le
            reporting des transferts transfrontaliers au-dela de certains
            seuils, et des audits annuels de cybersecurite. Les stablecoins
            emis depuis Maurice doivent maintenir une reserve fiat 1:1 dans des
            comptes bancaires separes, avec des audits trimestriels
            independants.
          </p>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 not-prose">
            <p className="text-sm font-semibold text-amber-800">
              Point d&apos;attention
            </p>
            <p className="mt-1 text-sm text-amber-700">
              La procedure de licensing VASP aupres de la FSC prend en moyenne 6
              a 9 mois. Les applicants doivent etre une societe mauricienne,
              dirigee et geree depuis Maurice, avec un bureau physique. Les
              criteres fit-and-proper sont stricts : integrite, competence et
              solvabilite des controleurs, beneficiaires effectifs et officers
              sont examines par la FSC.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            EdTech — Un marche en pleine expansion
          </h3>
          <p>
            Avec des universites locales de qualite (University of Mauritius,
            Universite des Mascareignes) et des partenariats avec des
            institutions internationales (Middlesex University, Curtin
            University), Maurice offre un terrain fertile pour les startups
            EdTech. Le budget 2025-2026 prevoit des plateformes d&apos;
            apprentissage adaptatives — un marche que les startups locales
            peuvent capter.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            HealthTech
          </h3>
          <p>
            Le systeme de sante mauricien se digitalise. Le gouvernement
            prevoit le deploiement de systemes ameliores dans le secteur de la
            sante, de la telesante a la gestion des dossiers patients. Pour les
            startups specialisees en health management, en telemedicine ou en
            dispositifs medicaux connectes, le marche est ouvert.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            GreenTech / CleanTech
          </h3>
          <p>
            Maurice s&apos;est fixe des objectifs ambitieux en matiere
            d&apos;energies renouvelables. Les startups travaillant sur le
            solaire, la gestion des dechets, le recyclage, la mobilite
            electrique ou l&apos;economie circulaire trouveront un marche
            receptif et des grants dedies via SME Mauritius (schemes
            &ldquo;green initiatives&rdquo;).
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Cybersecurite
          </h3>
          <p>
            Avec l&apos;alignement des lois sur la cybersecurite avec les normes
            internationales et l&apos;obligation pour tous les VASP de passer
            des audits annuels de cybersecurite, la demande en solutions de
            securite explose. Les startups specialisees en cybersecurite
            beneficient d&apos;un marche captif local et d&apos;un potentiel
            d&apos;export vers toute la region Afrique-ocean Indien.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 6 — Avantages fiscaux */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            6. Avantages fiscaux pour les tech companies
          </h2>
          <p>
            C&apos;est ici que Maurice se distingue vraiment. Le regime fiscal
            mauricien est un veritable aimant pour les entreprises tech.
          </p>

          <div className="space-y-4 not-prose mt-6">
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">
                Impot sur les societes : 15 % flat
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Le taux d&apos;IS a Maurice est un flat rate de 15 % — l&apos;un
                des plus bas au monde. Pour les Global Business Companies (GBC),
                le taux effectif peut descendre a environ 3 % grace au systeme
                de Foreign Tax Credit et au Partial Exemption Regime (80 %
                d&apos;exemption sur certains revenus qualifying).
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">
                0 % TVA sur les services exportes
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Les services fournis a des clients hors de Maurice sont{" "}
                <strong>zero-rated</strong> en matiere de TVA. Pour une startup
                SaaS, une agence de developpement ou un cabinet de conseil tech
                qui exporte ses services, cela signifie zero TVA facturee aux
                clients internationaux. Un avantage competitif majeur.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">
                Credit d&apos;impot R&D
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Les depenses en capital liees a la R&D beneficient d&apos;
                allowances fiscales. Le Finance Act 2025 a elargi les depenses
                en capital eligibles pour les entreprises ayant un chiffre
                d&apos;affaires ne depassant pas Rs 100 millions — ce qui couvre
                la grande majorite des startups.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">
                0 % sur les dividendes et les plus-values
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Maurice n&apos;impose ni les dividendes, ni les plus-values en
                capital. Pour les fondateurs de startups qui anticipent une
                revente ou une levee de fonds, c&apos;est un avantage
                considerable par rapport a la France (30 % flat tax) ou a la
                plupart des pays europeens.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 not-prose mt-6">
            <p className="text-sm font-semibold text-amber-800">
              Attention — Smart City tax exemptions reduites
            </p>
            <p className="mt-1 text-sm text-amber-700">
              Le Finance Act 2025 a significativement reduit les incentives
              Smart City. Les exemptions d&apos;impot sur 8 ans et les
              exemptions de droits d&apos;enregistrement ont ete grandfatherees
              uniquement pour les projets ayant recu une letter of comfort avant
              le 5 juin 2025. Desormais, les incentives fiscaux Smart City sont
              restreints aux projets lies aux routes et transports publics. Si
              vous comptiez sur les exemptions Smart City pour votre projet tech,
              recalculez votre business plan.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 7 — Success stories */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            7. Success stories mauriciennes
          </h2>
          <p>
            La preuve que l&apos;ecosysteme fonctionne, ce sont les entreprises
            qui y grandissent. Voici quelques success stories qui montrent le
            potentiel de Maurice comme base tech.
          </p>

          <div className="space-y-4 not-prose mt-6">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-sm font-semibold text-emerald-800">
                Grubmates — La foodtech qui decolle
              </p>
              <p className="mt-1 text-sm text-emerald-700">
                Plateforme de livraison de repas a la demande, Grubmates affiche
                une croissance de 16 % mois apres mois. 60 % de leurs ventes
                passent par des paiements digitaux — preuve de la maturite du
                marche fintech local.
              </p>
            </div>

            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-sm font-semibold text-emerald-800">
                Talenteum — Le recrutement panafricain
              </p>
              <p className="mt-1 text-sm text-emerald-700">
                Talenteum connecte les entreprises du monde entier aux meilleurs
                talents africains. Basee a Maurice, la startup a su tirer parti
                de la position de l&apos;ile comme pont entre l&apos;Afrique,
                l&apos;Europe et l&apos;Asie pour scaler rapidement.
              </p>
            </div>

            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-sm font-semibold text-emerald-800">
                KreekAfrica — Le freelancing africain
              </p>
              <p className="mt-1 text-sm text-emerald-700">
                Hub de freelancing africain, KreekAfrica met en relation les
                travailleurs digitaux avec des entreprises sur tout le continent
                et au-dela. Un modele marketplace qui exploite parfaitement le
                positionnement geostrategique de Maurice.
              </p>
            </div>

            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-sm font-semibold text-emerald-800">
                CoffeeChat — Le networking reinvente
              </p>
              <p className="mt-1 text-sm text-emerald-700">
                Plateforme de networking a distance, CoffeeChat permet aux
                professionnels de se connecter globalement. Un produit ne a
                Maurice mais a vocation mondiale — exactement le type de
                startup que l&apos;ecosysteme local est concu pour propulser.
              </p>
            </div>

            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-sm font-semibold text-emerald-800">
                Bongeni — La logistique locale
              </p>
              <p className="mt-1 text-sm text-emerald-700">
                Bongeni revolutionne la logistique locale avec des services de
                livraison rapides et fiables. La startup prouve qu&apos;il y a
                aussi de la place pour des solutions qui adressent le marche
                domestique mauricien.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 not-prose mt-6">
            <p className="text-sm font-semibold text-blue-800">
              Le point de vue de Didier
            </p>
            <p className="mt-1 text-sm text-blue-700">
              &ldquo;Ce qui me frappe chez ces startups, c&apos;est leur
              capacite a penser global des le premier jour. Maurice est un petit
              marche (1,3 million d&apos;habitants), mais c&apos;est precisement
              cette contrainte qui force les fondateurs a viser l&apos;Afrique,
              l&apos;Europe ou l&apos;Asie des le lancement. Et fiscalement,
              avec 0 % de TVA sur les services exportes et 15 % d&apos;IS flat,
              ils partent avec un avantage structure par rapport a leurs
              concurrents bases en France ou au UK.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 8 — L'avantage Vanille Strategie */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            8. L&apos;avantage Vanille Strategie pour les startups tech
          </h2>
          <p>
            Lancer une startup a Maurice, c&apos;est excitant. Mais sans un
            accompagnement solide des les premiers jours, les erreurs
            administratives, fiscales et comptables peuvent couter tres cher.
            C&apos;est la que le groupe Vanille Strategie entre en jeu.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Innovator Permit : on gere tout
          </h3>
          <p>
            Notre equipe accompagne les fondateurs dans l&apos;obtention de
            l&apos;Innovator Permit aupres de l&apos;EDB : preparation du
            dossier, redaction du business plan, soumission du projet innovant,
            mise en relation avec les incubateurs accredites MRIC. On connait
            les process, les interlocuteurs et les delais.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            App OKE : votre comptabilite connectee
          </h3>
          <p>
            Notre application OKE est directement connectee aux plateformes
            bancaires et aux outils de gestion. Envoi de factures, scan de
            justificatifs, suivi de tresorerie en temps reel — tout est
            centralise. Vous gerez votre startup, nous gerons vos chiffres.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Comptabilite des le jour 1 avec BD Star
          </h3>
          <p>
            Basee au 12e etage de The Core a Ebene Cybercity, BD Star
            Management Services est la branche comptable du groupe. On ne vous
            attend pas a la fin de l&apos;annee fiscale : la comptabilite
            demarre le jour de la creation de votre societe. Declarations
            fiscales, TVA, paie, conformite MRA — tout est pris en charge, en
            temps reel, des le premier jour.
          </p>

          <div className="rounded-lg border border-green-200 bg-green-50 p-4 not-prose">
            <p className="text-sm font-semibold text-green-800">
              Notre engagement startups
            </p>
            <p className="mt-1 text-sm text-green-700">
              Les startups ont des besoins specifiques : cash-flow tendu,
              croissance rapide, pivots frequents. Nous proposons des packages
              comptables adaptes aux startups en phase early-stage, avec une
              montee en puissance progressive a mesure que l&apos;activite
              croit. Pas de surfacturation, pas de surprise — un expert-
              comptable qui comprend les startups parce qu&apos;il en
              accompagne depuis des annees.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 9 — Coworking et espaces de travail */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            9. Coworking et espaces de travail : ou poser son laptop
          </h2>
          <p>
            Une startup, ca demarre souvent dans un coworking. Maurice offre
            desormais un large choix d&apos;espaces de travail partages, du
            plus premium au plus accessible.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Vanille Business Centers
          </h3>
          <p>
            Le groupe Vanille Strategie dispose de ses propres espaces de
            travail a <strong>Grand Baie</strong> (Sottise Road) et a{" "}
            <strong>Ebene</strong> (The Core, Cybercity). Au-dela du simple
            bureau, vous accedez a tout l&apos;ecosysteme Vanille Strategie :
            comptabilite, fiscalite, creation de societe, permis de residence —
            tout sous le meme toit.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Workshop17 — Le premium sud-africain
          </h3>
          <p>
            <a
              href="https://www.workshop17.mu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Workshop17
            </a>{" "}
            est le leader du coworking premium a Maurice avec 4 espaces : Vivea
            Business Park (Moka), The Precinct (Grand Baie), et Savannah (Gros
            Bois). Les tarifs commencent a Rs 500/jour et vont de Rs 3 000 a Rs
            18 000 par mois pour un abonnement. Les espaces sont ouverts 24/7
            avec des amenities de premier plan : salles de reunion, event
            spaces, parking, restaurants a proximite.
          </p>
          <p>
            Le site de <strong>Grand Baie (The Precinct)</strong> est
            strategiquement situe a l&apos;entree de Grand Baie, le long de
            l&apos;autoroute M2, dans un batiment de 10 057 m2 — ideal pour les
            startups qui veulent combiner qualite de vie (plages a 5 minutes)
            et environnement professionnel.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8">
            Autres espaces
          </h3>
          <ul>
            <li>
              <strong>La Plage Factory</strong> (Port Louis) : coworking +
              incubation, ideal pour les startups en programme
            </li>
            <li>
              <strong>Turbine</strong> : espace de coworking integre a
              l&apos;incubateur
            </li>
            <li>
              <strong>StartMe Up</strong> : espace communautaire avec du seed
              funding jusqu&apos;a Rs 1 million pour les projets prometteurs
            </li>
          </ul>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 not-prose">
            <p className="text-sm font-semibold text-blue-800">
              Conseil pratique
            </p>
            <p className="mt-1 text-sm text-blue-700">
              Ne sous-estimez pas l&apos;importance du choix de votre espace de
              travail. Un coworking dans un incubateur (La Plage, Turbine) vous
              donne acces a du mentorat et a un reseau. Un bureau dans un
              business center (Vanille, Workshop17) vous donne une adresse
              professionnelle et de la flexibilite. Et si vous avez besoin
              d&apos;une domiciliation rapide pour votre societe, les Vanille
              Business Centers offrent ce service des la creation.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 10 — Les defis a connaitre */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16">
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            10. Les defis a connaitre avant de se lancer
          </h2>
          <p>
            Aucun ecosysteme n&apos;est parfait. Voici les realites a prendre en
            compte pour ne pas debarquer avec des attentes irrealistes.
          </p>
          <ul>
            <li>
              <strong>Le financement reste un defi :</strong> 68 % des startups
              mauriciennes peinent a lever des fonds. Le capital-risque local est
              encore en phase de maturation. Prevoyez du bootstrapping ou visez
              des investisseurs internationaux.
            </li>
            <li>
              <strong>Talent shortage :</strong> seuls 22 % des etudiants sont
              en filiere STEM, creant un deficit annuel d&apos;environ 5 000
              professionnels IT. Les startups qui recrutent doivent etre
              competitives en termes de salaires et de conditions de travail.
            </li>
            <li>
              <strong>Marche local limite :</strong> avec 1,3 million
              d&apos;habitants, le marche domestique ne suffit pas. Votre
              startup doit penser export des le jour 1.
            </li>
            <li>
              <strong>Bureaucratie :</strong> malgre les progres, certains
              processus administratifs restent lents. Un bon accompagnement
              (expert-comptable, legal advisor) fait gagner des mois.
            </li>
          </ul>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 not-prose">
            <p className="text-sm font-semibold text-amber-800">
              Le programme a surveiller
            </p>
            <p className="mt-1 text-sm text-amber-700">
              Le Digital Youth Engagement Programme, en partenariat avec
              Microsoft, vise a equiper 25 000 jeunes Mauriciens de competences
              digitales et d&apos;un etat d&apos;esprit entrepreneurial. C&apos;
              est le type d&apos;initiative qui va progressivement combler le
              deficit de talents tech sur l&apos;ile.
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
              Economic Development Board (EDB) Mauritius — Budget 2025-2026 —{" "}
              <a
                href="https://edbmauritius.org/newsroom/budget-2025-2026-artificial-intelligence"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                edbmauritius.org
              </a>
            </li>
            <li>
              EDB — R&D and Innovation —{" "}
              <a
                href="https://edbmauritius.org/newsroom/budget-2025-2026-research-development-and-innovation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                edbmauritius.org
              </a>
            </li>
            <li>
              Mauritius Research and Innovation Council (MRIC) — Schemes —{" "}
              <a
                href="https://www.mric.mu/innovation-and-commercialisation-schemes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                mric.mu
              </a>
            </li>
            <li>
              MRIC — National SME Incubator Scheme —{" "}
              <a
                href="https://www.mric.mu/national-sme-inubator-scheme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                mric.mu
              </a>
            </li>
            <li>
              SME Mauritius — Schemes disponibles —{" "}
              <a
                href="https://www.smemu.com/schemes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                smemu.com
              </a>
            </li>
            <li>
              Financial Services Commission (FSC) — VAITOS Act —{" "}
              <a
                href="https://salvusfunds.com/licensing/crypto-and-virtual-asset-service-providers/financial-services-commission-fsc-mauritius-vaitos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                salvusfunds.com
              </a>
            </li>
            <li>
              Finance Act 2025 — PwC Mauritius Analysis —{" "}
              <a
                href="https://www.pwc.com/mu/en/events/budget/financeact.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                pwc.com
              </a>
            </li>
            <li>
              Development Bank of Mauritius — SME Loans —{" "}
              <a
                href="https://www.dbm.mu/loan-category/sme-loans/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                dbm.mu
              </a>
            </li>
            <li>
              Turbine Incubator —{" "}
              <a
                href="https://turbine.mu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                turbine.mu
              </a>
            </li>
            <li>
              La Plage Factory —{" "}
              <a
                href="http://laplage.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                laplage.io
              </a>
            </li>
            <li>
              Workshop17 Mauritius —{" "}
              <a
                href="https://www.workshop17.mu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                workshop17.mu
              </a>
            </li>
            <li>
              Landscope Mauritius — Ebene Cybercity —{" "}
              <a
                href="https://landscopemauritius.com/our-properties-business-parks/ebene-cybercity/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                landscopemauritius.com
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
            Cet article est fourni a titre informatif et ne constitue pas un
            conseil fiscal ou juridique personnalise. Les dispositifs de
            financement, les conditions d&apos;eligibilite et les avantages
            fiscaux peuvent evoluer. Contactez nos experts pour une analyse
            personnalisee de votre projet.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA Final */}
      {/* ============================================================ */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">
            Pret a lancer votre startup a Maurice ?
          </h2>
          <p className="mt-3 text-slate-400">
            Etude de faisabilite gratuite par {founder.name},{" "}
            {founder.title}. Innovator Permit, creation de societe,
            comptabilite, fiscalite — on vous accompagne du premier jour
            jusqu&apos;au scale-up.
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
