import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  FileText,
  Globe,
  CheckCircle2,
  UserPlus,
  BarChart3,
  ShieldCheck,
  Building2,
  HeartHandshake
} from "lucide-react";

export const metadata: Metadata = {
  title: "RH & Paie Maurice — BD Star Management Services",
  description: "Recrutement, contrats de travail, bulletins de paie, charges CSG/PAYE, conformité Workers' Rights Act. Tout externalisé, tout intégré.",
};

export default function RhPaiePage() {
  const features = [
    {
      title: "Recrutement",
      icon: UserPlus,
      items: [
        "Recherche de profils locaux bilingues FR/EN",
        "Pré-sélection et entretiens de qualification",
        "Rédaction des contrats de travail (Local/Expat)",
        "Conformité Workers' Rights Act 2019"
      ]
    },
    {
      title: "Paie externalisée",
      icon: FileText,
      items: [
        "Bulletins de paie conformes aux normes MU",
        "Calcul des charges sociales (CSG / PAYE)",
        "Déclarations MRA employeur mensuelles",
        "Gestion digitalisée des congés et absences"
      ]
    },
    {
      title: "HR Management",
      icon: BarChart3,
      items: [
        "Gestion administrative complète du personnel",
        "Suivi des OP Professional de vos expatriés",
        "Onboarding et offboarding structurés",
        "Reporting RH intégré dans votre dashboard OKE"
      ]
    },
    {
      title: "Expat Admin Management",
      icon: Globe,
      items: [
        "Gestion des permis de travail et résidence",
        "Logement, école, installation de la famille",
        "Coordination directe avec l'EDB et la MRA",
        "Veille réglementaire et renouvellements"
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[60vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/coworking.jpg"
            alt="RH et Paie à Maurice"
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
              Services — BD Star Management Services
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Votre capital humain <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">géré localement</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              De votre première embauche à la gestion quotidienne de 50 salariés. Nous gérons contrats, paie, conformité et bien-être de vos équipes.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                  Étudier mon besoin RH
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Features Grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {features.map((f, idx) => (
              <Card 
                key={f.title} 
                className="group flex flex-col p-8 transition-all duration-300 hover:shadow-xl border border-slate-100 bg-white"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{f.title}</h3>
                </div>
                <ul className="space-y-4 flex-1">
                  {f.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-500" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Conformité & Sécurité</h2>
            <p className="mt-4 text-lg text-slate-600">
              Le droit du travail mauricien (Workers&apos; Rights Act) est protecteur et spécifique. Nous garantissons votre sérénité juridique.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { title: "Zéro risque", desc: "Contrats visés par nos experts en droit social local.", icon: ShieldCheck },
              { title: "Intégration OKE", desc: "Données RH synchronisées avec votre comptabilité.", icon: BarChart3 },
              { title: "Support Dédié", desc: "Une équipe RH joignable à Maurice aux heures de bureau.", icon: HeartHandshake }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles liés */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-slate-900">Articles liés</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { href: "/ressources/blog/droit-travail-maurice-workers-rights-act", title: "Droit du travail à Maurice", desc: "Workers' Rights Act 2019 : contrats, congés, licenciement et obligations employeur." },
              { href: "/ressources/blog/ecoles-internationales-maurice-education", title: "Écoles internationales à Maurice", desc: "Panorama des établissements scolaires pour les familles expatriées." },
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

      {/* Services RH détaillés */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Services RH détaillés</h2>
            <p className="mt-4 text-lg text-slate-600">
              Un accompagnement RH complet, du premier recrutement à la gestion quotidienne de vos équipes à Maurice.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Recrutement local et international</h3>
                <p className="text-slate-600 leading-relaxed">
                  Notre équipe identifié les profils les plus adaptés à votre activité, qu&apos;il s&apos;agisse de talents locaux bilingues français-anglais ou de cadres expatriés. Nous gérons l&apos;intégralité du processus : rédaction et diffusion des annonces sur les plateformes mauriciennes (MyJob.mu, LinkedIn Maurice), présélection des candidatures, entretiens de qualification, vérification des références et négociation salariale. Pour les profils étrangers, nous coordonnons les démarches de Work Permit et d&apos;Occupation Permit auprès de l&apos;Economic Development Board (EDB).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Contrats de travail conformes au Workers&apos; Rights Act 2019</h3>
                <p className="text-slate-600 leading-relaxed">
                  Chaque contrat est rédigé en conformité avec le Workers&apos; Rights Act 2019, la législation fondamentale du droit du travail mauricien. Nous couvrons l&apos;ensemble des clauses obligatoires : période d&apos;essai (maximum 12 mois selon le poste), horaires de travail (45 heures par semaine maximum), congés annuels (minimum 20 jours ouvrables), congé maladie (15 jours avec certificat médical), congé maternité (14 semaines dont 6 semaines après l&apos;accouchement) et clauses de confidentialité. Les contrats sont établis en anglais (langue juridique officielle) avec une traduction française pour votre confort de lecture.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Bulletins de paie et déclarations</h3>
                <p className="text-slate-600 leading-relaxed">
                  Nous produisons chaque mois des bulletins de paie détaillés et conformes aux exigences de la Mauritius Revenue Authority (MRA). Le bulletin inclut le salaire brut, les déductions obligatoires (CSG employé, PAYE), les heures supplémentaires le cas échéant, les primes et avantages en nature (logement, véhicule, allocations), et le net à payer. Les fiches sont générées via notre plateforme OKE, ce qui vous permet de les consulter en temps réel depuis votre dashboard client, y compris les historiques et les cumuls annuels.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Gestion des congés et absences</h3>
                <p className="text-slate-600 leading-relaxed">
                  Notre système digital permet à vos employés de soumettre leurs demandes de congé directement en ligne. Vous validez en un clic et le solde de congés est mis à jour automatiquement. Nous gérons les différents types de congés prévus par la loi : congé annuel (20 jours), congé maladie (15 jours sur certificat), congé maternité (14 semaines), congé de paternité (5 jours), congé pour mariage (2 jours), congé de deuil. Les jours fériés publics à Maurice (15 par an) sont automatiquement pris en compte dans le calcul.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Procédures de licenciement</h3>
                <p className="text-slate-600 leading-relaxed">
                  Le licenciement à Maurice est encadré strictement par le Workers&apos; Rights Act 2019. Notre équipe vous accompagne dans le respect des procédures : entretien préalable, notification écrite motivée, respect du préavis (30 jours minimum après la période d&apos;essai), calcul des indemnités de licenciement (équivalent à trois mois de rémunération par année de service pour les salariés ayant plus de 12 mois d&apos;ancienneté) et solde de tout compte. Nous rédigeons l&apos;ensemble des documents et vous assistons en cas de litige devant le Tribunal du Travail.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Suivi via le dashboard OKE</h3>
                <p className="text-slate-600 leading-relaxed">
                  Toutes les données RH de votre entreprise sont centralisées dans votre espace client OKE. Vous accédez en temps réel aux bulletins de paie, aux déclarations sociales, aux soldes de congés, aux contrats et avenants, ainsi qu&apos;aux indicateurs RH clés (masse salariale, turnover, absentéisme). Les données sont synchronisées automatiquement avec votre comptabilité, évitant les doubles saisies et les erreurs. Ce pilotage digital vous offre une visibilité complète sur vos ressources humaines, où que vous soyez dans le monde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Obligations employeur à Maurice */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Obligations employeur à Maurice</h2>
            <p className="mt-4 text-lg text-slate-600">
              Comprendre le cadre légal et fiscal est indispensable pour employer à Maurice en toute conformité.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">CSG — Contribution Sociale Généralisée</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Depuis septembre 2020, la CSG remplacé l&apos;ancien système NPF (National Pensions Fund) et NSF (National Savings Fund). L&apos;employeur contribue à hauteur de 3 % du salaire brut pour les salariés gagnant jusqu&apos;à 50 000 MUR par mois, et 6 % au-delà. Le salarié contribue respectivement à 1,5 % et 3 %. Cette contribution est déclarée et payée mensuellement à la MRA. La CSG finance la retraite, la couverture santé de base et les prestations sociales.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">PAYE — Pay As You Earn</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Le système PAYE est le mécanisme de retenue à la source de l&apos;impôt sur le revenu. L&apos;employeur est responsable du calcul et du prélèvement mensuel sur le salaire de chaque employé. Le taux d&apos;imposition est de 15 % pour les revenus annuels jusqu&apos;à 700 000 MUR et de 20 % au-delà (Budget 2024-2025). Des déductions sont possibles : personne à charge, intérêts d&apos;emprunt immobilier, primes d&apos;assurance-vie. La déclaration se fait via le portail en ligne de la MRA chaque mois.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Salaire minimum national</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Le salaire minimum national à Maurice est fixé à 15 000 MUR par mois (environ 310 EUR) depuis janvier 2024. Ce montant s&apos;applique à tous les secteurs d&apos;activité. En complément, certains secteurs bénéficient de Remuneration Orders (décrets sectoriels) qui fixent des salaires planchers supérieurs au minimum national. L&apos;employeur doit également verser une allocation de fin d&apos;année (bonus) équivalente à un douzième de la rémunération annuelle, payable en décembre.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Heures supplémentaires</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                La semaine de travail standard à Maurice est de 45 heures (9 heures par jour sur 5 jours ou répartition sur 6 jours). Les heures au-delà sont considérées comme supplémentaires et doivent être rémunérées à 150 % du taux horaire normal en semaine, et 200 % les jours fériés et dimanches. Le Workers&apos; Rights Act limite les heures supplémentaires à un total raisonnable et prévoit des repos compensatoires. Le non-respect de ces dispositions expose l&apos;employeur à des sanctions pénales.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Cotisations sociales complémentaires</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Au-delà de la CSG, l&apos;employeur doit souscrire une assurance Workfare Programme (anciennement Portable Retirement Gratuity Fund) et contribuer au Human Resource Development Council (HRDC) à hauteur de 1,5 % de la masse salariale pour les entreprises de plus de 10 salariés. Le HRDC finance la formation professionnelle et permet de récupérer jusqu&apos;à 70 % des frais de formation via un système de remboursement. L&apos;employeur doit aussi assurer la couverture en cas d&apos;accident du travail.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Déclarations mensuelles MRA</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Chaque mois, l&apos;employeur doit soumettre l&apos;Employee Déclaration Form (EDF) à la Mauritius Revenue Authority (MRA). Ce formulaire récapitule les salaires versés, les retenues PAYE et les contributions CSG pour chaque employé. La date limite est le 20 du mois suivant. En fin d&apos;année fiscale (30 juin), l&apos;employeur produit un relevé annuel pour chaque salarié (formulaire EDF annuel). Notre équipe se charge de l&apos;ensemble de ces déclarations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recrutement à Maurice */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Recruter à Maurice : marché du travail et spécificités</h2>
            <p className="mt-4 text-lg text-slate-600">
              Maurice offre un vivier de talents qualifiés et bilingues, dans un environnement fiscal et social attractif pour les entreprises.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Le marché du travail mauricien</h3>
                <p className="text-slate-600 leading-relaxed">
                  Maurice dispose d&apos;une population active d&apos;environ 580 000 personnes, avec un taux de chômage autour de 6 %. Le pays se distingue par un haut niveau de bilinguisme français-anglais, voire de trilinguisme avec le kreol morisien. Les secteurs porteurs sont les services financiers (20 000+ emplois), les TIC et le BPO (plus de 25 000 employés), le tourisme et l&apos;hôtellerie, l&apos;industrie manufacturière et la construction. L&apos;Université de Maurice et les institutions privées (Curtin, Middlesex) forment chaque année des diplômés en comptabilité, finance, informatique et management.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Salaires moyens par secteur</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Les niveaux de rémunération à Maurice restent très compétitifs comparés à l&apos;Europe. Voici les fourchettes indicatives mensuelles pour des profils qualifiés :
                </p>
                <ul className="space-y-3">
                  {[
                    "Comptable confirmé : 35 000 – 60 000 MUR (720 – 1 240 EUR)",
                    "Développeur informatique : 40 000 – 80 000 MUR (825 – 1 650 EUR)",
                    "Responsable administratif : 30 000 – 50 000 MUR (620 – 1 030 EUR)",
                    "Directeur financier (CFO) : 80 000 – 200 000 MUR (1 650 – 4 120 EUR)",
                    "Assistant de direction bilingue : 25 000 – 40 000 MUR (515 – 825 EUR)",
                    "Responsable commercial : 35 000 – 70 000 MUR (720 – 1 440 EUR)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-500" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Work Permit et Occupation Permit pour les employés étrangers</h3>
                <p className="text-slate-600 leading-relaxed">
                  Si vous souhaitez embaucher un salarié étranger à Maurice, deux principaux dispositifs existent. L&apos;Occupation Permit (OP) catégorie &quot;Professional&quot; s&apos;adresse aux cadres et techniciens gagnant au moins 60 000 MUR par mois (seuil 2024). La demande est déposée en ligne auprès de l&apos;EDB et le délai moyen de traitement est de 3 à 5 semaines. Le permis est valable 3 ans et renouvelable. Pour les salariés en dessous du seuil de l&apos;OP, un Work Permit classique est nécessaire, délivré par le ministère du Travail, avec une validité de 2 ans.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  L&apos;employeur doit démontrer qu&apos;aucun candidat local qualifié n&apos;est disponible pour le poste (sauf dans certains secteurs en tension). Notre équipe gère l&apos;intégralité des démarches : préparation du dossier, suivi auprès des autorités, renouvellements et extension aux personnes à charge (conjoint et enfants). Nous coordonnons également les aspects pratiques de l&apos;installation : recherche de logement, inscription scolaire des enfants, ouverture de compte bancaire et couverture santé privée.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Avantages de l&apos;emploi à Maurice</h3>
                <p className="text-slate-600 leading-relaxed">
                  Employer à Maurice présente de nombreux atouts : un coût salarial compétitif (3 à 5 fois inférieur à la France pour des compétences équivalentes), un fuseau horaire GMT+4 permettant un chevauchement de 4 à 5 heures avec l&apos;Europe, une main-d&apos;œuvre bilingue habituée aux standards internationaux, une stabilité politique et économique remarquable (Maurice est classée 1ère en Afrique pour la facilité de faire des affaires), et un cadre fiscal attractif (flat tax de 15 % pour les entreprises et les individus). L&apos;île est reliée à l&apos;Europe par des vols directs depuis Paris (11h), facilitant les déplacements professionnels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ RH & Paie */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">FAQ — RH &amp; Paie à Maurice</h2>
            <p className="mt-4 text-lg text-slate-600">
              Les questions les plus fréquentes de nos clients sur l&apos;emploi et la paie à Maurice.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Quel est le coût total d'un salarié à Maurice ?",
                a: "Le coût employeur total représente environ 110 à 115 % du salaire brut. En plus du salaire, l'employeur paie la CSG (3 à 6 %), la contribution HRDC (1,5 % pour les entreprises de plus de 10 salariés) et le bonus de fin d'année (1/12e du salaire annuel). Il n'y a pas de charges sociales lourdes comme en France, ce qui rend l'emploi à Maurice très compétitif."
              },
              {
                q: "Peut-on licencier un salarié facilement à Maurice ?",
                a: "Le licenciement est encadré par le Workers' Rights Act 2019. Il doit être justifié (faute grave, insuffisance professionnelle, motif économique) et suivre une procédure stricte incluant un entretien préalable et une notification écrite. L'indemnité de licenciement est de trois mois de salaire par année de service pour les salariés ayant plus de 12 mois d'ancienneté. Un licenciement abusif peut être contesté devant le Tribunal du Travail."
              },
              {
                q: "Comment fonctionne la couverture santé à Maurice ?",
                a: "Maurice dispose d'un système de santé public gratuit, mais la plupart des entreprises offrent une assurance santé privée en complément. Les plans de santé privés couvrent consultations, hospitalisation, dentaire et optique pour un coût de 3 000 à 15 000 MUR par mois et par employé selon la couverture. Ce n'est pas une obligation légale, mais c'est un avantage très apprécié pour attirer et retenir les talents."
              },
              {
                q: "Combien de jours fériés y a-t-il à Maurice ?",
                a: "Maurice compte 15 jours fériés publics par an, reflétant la diversité culturelle du pays : Nouvel An (2 jours), Fête du Printemps (chinois), Abolition de l'esclavage, Thaipoosam Cavadee, Maha Shivaratri, Fête nationale (12 mars), Ougadi, Fête du Travail (1er mai), Eid-ul-Fitr, Ganesh Chaturthi, Divali, Assomption, Noël. Si un jour férié tombe un dimanche, le lundi suivant est chômé."
              },
              {
                q: "Peut-on embaucher un salarié étranger sans restriction ?",
                a: "Non, il faut obtenir un Occupation Permit (OP) ou un Work Permit. L'OP Professional exige un salaire minimum de 60 000 MUR par mois. Le Work Permit classique nécessite de prouver qu'aucun candidat local n'est disponible. Les délais de traitement sont de 3 à 5 semaines pour l'OP et 4 à 8 semaines pour le Work Permit. Nous gérons toute la procédure pour vous."
              },
              {
                q: "Les données RH sont-elles accessibles en temps réel ?",
                a: "Oui, grâce à notre intégration avec le dashboard OKE. Vous accédez à tous les bulletins de paie, déclarations sociales, soldes de congés et indicateurs RH en temps réel, depuis n'importe quel appareil connecté. Les données sont synchronisées avec votre comptabilité, ce qui élimine les doubles saisies et garantit la cohérence de vos informations financières."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 text-blue-400 mb-8">
            <Building2 className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Besoin de recruter à Maurice ?</h2>
          <p className="mt-4 text-xl text-slate-400">
            Nous identifions les talents et gérons leur intégration pour vous.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-10 h-14 text-lg font-bold">
                Contacter notre pôle RH
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Réponse sous 24h ouvrées.
          </p>
        </div>
      </section>
    </main>
  );
}
