import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Globe,
  CheckCircle2,
  UserPlus,
  BarChart3,
  ShieldCheck,
  Building2,
  ArrowRight,
  MapPin,
  Clock,
  Users,
  FileCheck,
} from "lucide-react";

// Contenu pour chaque sous-service
const serviceData = {
  recrutement: {
    title: "Recrutement à Maurice",
    metaTitle: "Recrutement local et international à Maurice — BD Star Management",
    metaDescription: "Recrutement de talents locaux et expatriés à Maurice, Work Permit et Occupation Permit. Sourcing, entretiens, contrats.",
    shortTitle: "Recrutement",
    icon: UserPlus,
    hero: "Vos talents locaux et internationaux à Maurice",
    intro: "De la recherche de candidats à l'intégration complète en Maurice, nous gérons l'intégralité du processus de recrutement pour vous.",

    sections: [
      {
        title: "Sourcing et présélection de profils locaux",
        content: "Maurice offre un vivier de talents qualifiés et bilingues français-anglais. Notre équipe identifie les profils les plus adaptés à votre activité en diffusant vos annonces sur les plateformes mauriciennes incontournables : MyJob.mu, LinkedIn Maurice, ainsi que via notre réseau direct de candidats pré-qualifiés. Nous effectuons une présélection rigoureuse en français et en anglais, vérifions les références professionnelles et préparons les candidats aux entretiens. Chaque candidat est évalué sur ses compétences techniques, sa compatibilité avec votre culture d'entreprise et son potentiel d'intégration."
      },
      {
        title: "Recrutement d'expatriés et Work Permit",
        content: "Pour attirer des talents internationaux, nous gérons l'intégralité de la procédure administrative. L'Occupation Permit (OP) Professional s'adresse aux cadres gagnant au minimum 60 000 MUR par mois, avec une validité de 3 ans. Le Work Permit classique exige de prouver qu'aucun candidat local qualifié n'est disponible. Les délais de traitement sont de 3 à 5 semaines pour l'OP et 4 à 8 semaines pour le Work Permit. Nous préparons l'ensemble du dossier : contrat signé, justificatif de rémunération, CV du candidat et lettre de motivation, preuves de qualification, et nous effectuons le suivi auprès de l'Economic Development Board (EDB) et du ministère du Travail."
      },
      {
        title: "Secteurs clés et besoins spécifiques",
        content: "Maurice connaît une forte demande dans les secteurs porteurs : services financiers (25 000+ employés), technologie et BPO (développeurs, data scientists, support), hôtellerie-tourisme (directeurs, chefs de partie), industrie manufacturière et construction. Nous avons développé une expertise particulière dans la recherche de profils en finance (comptables, auditeurs, analystes), en IT (développeurs Java/.NET, infrastructure), en logistique et commerce. Chaque secteur a ses propres spécificités salariales et réglementaires, que nous maîtrisons parfaitement."
      },
      {
        title: "Contrats de travail conformes au Workers' Rights Act",
        content: "Chaque embauche est formalisée par un contrat de travail rédigé en conformité stricte avec le Workers' Rights Act 2019. Nous couvrons toutes les clauses obligatoires : période d'essai (maximum 12 mois selon le poste), horaires de travail (45 heures par semaine maximum), congés annuels (minimum 20 jours ouvrables), congés maladie, maternité, et responsabilités du salarié. Les contrats sont établis en anglais (langue juridique officielle) avec traduction française. Nous ajustons les termes selon votre secteur d'activité et le profil du salarié (cadre, technique, commercial)."
      },
      {
        title: "Intégration et onboarding structurés",
        content: "L'arrivée d'un nouveau talent à Maurice doit être soigneusement orchestrée. Nous coordonnons l'onboarding : accueil à l'aéroport, accompagnement administratif (ouverture de compte bancaire, enregistrement auprès de l'administration), visite des locaux, introduction auprès de l'équipe, mise en place de formations métier et culturelles. Pour les expatriés, nous les aidons à s'installer durablement : recherche de logement, inscription scolaire des enfants, intégration dans la communauté expatriée. Un premier mois réussi est la clé d'une intégration durable et d'une productivité optimale."
      }
    ],

    benefits: [
      "Accès à notre réseau de candidats pré-qualifiés à Maurice",
      "Gestion complète des démarches administratives (Work Permit, OP)",
      "Contrats de travail conformes au droit mauricien",
      "Suivi personnalisé de chaque candidat",
      "Conseils en salaire et avantages compétitifs",
      "Support d'intégration et onboarding"
    ],

    faq: [
      {
        q: "Combien de temps prend un recrutement à Maurice ?",
        a: "Comptez 4 à 8 semaines pour un recrutement complet : annonce, présélection (2 semaines), entretiens (2-3 semaines), signature du contrat (1 semaine), puis démarrage du salarié. Pour un expatrié avec Work Permit ou OP, ajoutez 3 à 5 semaines supplémentaires pour la procédure administrative."
      },
      {
        q: "Quel est le coût du recrutement ?",
        a: "Nous facturons une commission de sourcing entre 2 000 et 8 000 EUR selon le profil et la rareté de la compétence (cadres supérieurs, techniciens spécialisés en demande). Cette commission couvre la recherche, la présélection, les entretiens et l'accompagnement administratif jusqu'à l'arrivée du salarié à Maurice."
      },
      {
        q: "Y a-t-il une garantie de remplacement ?",
        a: "Oui. Si un candidat placé quitte l'entreprise dans les 3 mois suivant son embauche (sauf cas de force majeure), nous vous proposons un remplacement gratuit parmi nos candidats pré-sélectionnés. Cela garantit votre investissement dans le recrutement."
      }
    ]
  },

  "paie-externalisee": {
    title: "Paie externalisée à Maurice",
    metaTitle: "Gestion de paie complète à Maurice — CSG, PAYE, MRA — BD Star",
    metaDescription: "Paie externalisée complète à Maurice : calcul PAYE, CSG, bulletins de paie conformes, déclarations MRA mensuelles, bonus.",
    shortTitle: "Paie externalisée",
    icon: FileText,
    hero: "Votre paie mauricienne, gérée par des experts locaux",
    intro: "De la fiche de salaire au paiement des charges sociales, nous gérons 100% de votre paie conformément au droit mauricien et aux exigences de la MRA.",

    sections: [
      {
        title: "Bulletins de paie conformes aux normes mauritiennes",
        content: "Chaque mois, nous produisons des bulletins de paie détaillés et conformes aux exigences de la Mauritius Revenue Authority (MRA). Le bulletin inclut le salaire brut, les retenues obligatoires (CSG salarié, PAYE), les heures supplémentaires le cas échéant, les primes et avantages en nature (logement, véhicule, allocations), les jours de congé pris, et le net à payer. Nous utilisons la plateforme OKE pour générer les fiches, ce qui vous permet de les consulter en temps réel depuis votre dashboard client, avec accès aux historiques et cumuls annuels. Les bulletins sont produits avant le 10 du mois et sont prêts pour le paiement des salaires."
      },
      {
        title: "Calcul PAYE — Pay As You Earn",
        content: "Le PAYE est le mécanisme de retenue à la source de l'impôt sur le revenu. Nous calculons mensuellement le PAYE pour chaque employé selon la législation 2024-2025 : taux de 15 % pour les revenus annuels jusqu'à 700 000 MUR, et 20 % au-delà. Nous appliquons les déductions autorisées : personne à charge (augmente l'allocation familiale), intérêts d'emprunt immobilier, primes d'assurance-vie. Le calcul tient compte du cumul annuel et des corrections nécessaires en fin d'exercice fiscal (30 juin). Tous les montants sont déclarés mensuellement auprès de la MRA via le portail en ligne."
      },
      {
        title: "CSG — Contribution Sociale Généralisée",
        content: "Depuis septembre 2020, la CSG a remplacé l'ancien système NPF/NSF. Les contributions sont assises sur le salaire brut : l'employeur contribue à 3 % pour les salaires jusqu'à 50 000 MUR par mois, et à 6 % au-delà. Le salarié contribue respectivement à 1,5 % et 3 %. Cette contribution finance la retraite, la couverture santé de base et les prestations sociales. Nous calculons précisément ces pourcentages, en nous adaptant si les plafonds évoluent. Les montants sont déclarés et payés mensuellement à la MRA avant le 20 du mois suivant."
      },
      {
        title: "Déclarations mensuelles MRA et conformité",
        content: "Chaque mois, nous soumettons l'Employee Déclaration Form (EDF) à la Mauritius Revenue Authority, qui récapitule les salaires versés, les retenues PAYE, les contributions CSG et HRDC pour chaque employé. La date limite est le 20 du mois suivant. Nous respectons scrupuleusement ce calendrier et assurons la cohérence des montants déclarés. En fin d'année fiscale (30 juin), nous produisons un relevé annuel pour chaque salarié (formulaire EDF annuel). Toute anomalie ou correction est gérée en concertation avec vous pour éviter des redressements ultérieurs."
      },
      {
        title: "Bonus annuel et suppléments",
        content: "Le bonus de fin d'année est obligatoire à Maurice et équivaut à un douzième de la rémunération annuelle (versement en décembre). Nous gérons automatiquement le calcul et l'inclusion dans la masse salariale à déclarer. Nous gérons également les heures supplémentaires (150 % en semaine, 200 % les jours fériés et dimanches), les allocations familiales (par enfant à charge), les avantages en nature (logement, voiture, téléphone) correctement évalués fiscalement, et les primes exceptionnelles. Tous ces éléments sont intégrés dans les bulletins et déclarations."
      },
      {
        title: "Suivi des congés et gestion des absences",
        content: "Notre système digital intégré à OKE permet à vos employés de soumettre leurs demandes de congé en ligne. Vous validez et le solde est mis à jour automatiquement. Nous gérons les différents types de congés prévus par la loi : congé annuel (20 jours minimum), congé maladie (15 jours sur certificat médical), congé maternité (14 semaines dont 6 après l'accouchement), congé de paternité (5 jours), congé pour mariage (2 jours), congé de deuil. Les jours fériés publics à Maurice (15 par an) sont automatiquement pris en compte dans le calcul des salaires."
      }
    ],

    benefits: [
      "Bulletins de paie produits mensuellement avant le 10",
      "Calcul PAYE 100% conforme aux taux 2024-2025",
      "Gestion CSG automatisée et à jour",
      "Déclarations MRA traitées en temps",
      "Synchronisation comptable instantanée avec OKE",
      "Historique et cumuls accessibles en temps réel",
      "Support pour les anomalies et corrections"
    ],

    faq: [
      {
        q: "Quand les salaires doivent-ils être payés à Maurice ?",
        a: "Les salaires doivent être versés au moins mensuellement, avant la fin du mois de travail. La plupart des entreprises paient le dernier jour ouvré du mois ou le premier jour du mois suivant. Nous générons les bulletins en début de mois pour vous permettre d'effectuer les virements rapidement."
      },
      {
        q: "Comment fonctionne le calcul du bonus annuel ?",
        a: "Le bonus annuel à Maurice est obligatoire et équivaut à 1/12e du salaire brut annuel. Il est versé en décembre. Nous calculons automatiquement ce montant et l'incluons dans la fiche de paie de décembre. Si un salarié quitte avant décembre, une fraction proratisée du bonus lui est versée lors de son départ."
      },
      {
        q: "Que se passe-t-il en cas d'erreur de paie ?",
        a: "Nous détectons et corrigeons les erreurs rapidement. Si une correction est nécessaire, nous produisons une fiche de paie rectificative et déclarons l'ajustement auprès de la MRA. Les recharges de salaire se font par virement séparé, clairement documentées. Zéro erreur n'existe pas, mais notre équipe garantit une transparence totale et des corrections rapides."
      }
    ]
  },

  "hr-management": {
    title: "HR Management à Maurice",
    metaTitle: "Gestion RH complète et conformité Workers' Rights Act — BD Star",
    metaDescription: "Gestion RH complète à Maurice : contrats Workers' Rights Act, congés, licenciements, règlement intérieur, OP expatriés, dashboard OKE.",
    shortTitle: "HR Management",
    icon: BarChart3,
    hero: "Votre gestion RH structurée et conforme",
    intro: "Contrats, Workers' Rights Act, gestion des congés, licenciements et reporting RH — tout pour piloter sereinement vos ressources humaines à Maurice.",

    sections: [
      {
        title: "Contrats de travail conformes au Workers' Rights Act 2019",
        content: "Le Workers' Rights Act 2019 est la législation fondamentale du droit du travail mauricien. Chaque contrat que nous rédigeons en est en conformité stricte. Nous couvrons toutes les clauses obligatoires : période d'essai (maximum 12 mois selon le poste et le secteur), horaires de travail (45 heures par semaine maximum, répartition flexible possible sur 5 ou 6 jours), congés annuels (minimum 20 jours ouvrables), congé maladie (15 jours avec certificat médical), congé maternité (14 semaines dont 6 après l'accouchement), congé de paternité (5 jours), et clauses de confidentialité et propriété intellectuelle. Les contrats sont établis en anglais (langue juridique officielle) avec traduction française pour votre compréhension."
      },
      {
        title: "Gestion des Occupation Permit (OP) pour expatriés",
        content: "Si vous gérez des expatriés, nous pilotons l'ensemble de leur dossier administratif. L'Occupation Permit Professional s'adresse aux cadres gagnant au moins 60 000 MUR par mois, avec une validité de 3 ans. Nous préparons la demande initiale (contrat signé, justificatif de rémunération, CV), effectuons le suivi auprès de l'Economic Development Board (EDB), et gérons les renouvellements bien avant l'expiration. Nous coordonnons également les extensions aux personnes à charge (conjoint et enfants), qui sont traitées dans le même dossier. Un suivi calendaire rigoureux garantit qu'aucune expiration n'est manquée."
      },
      {
        title: "Gestion des congés, absences et arrêts maladie",
        content: "Notre système digital intégré à OKE permet une gestion fluide et transparente. Vos employés soumettent leurs demandes en ligne (congé annuel, maladie, family leave), vous validez en un clic, et le solde est mis à jour automatiquement. Nous gérons les différents types de congés : annuel (20 jours minimum avec suivi des cumuls), maladie (15 jours avec certificat médical), maternité (14 semaines), paternité (5 jours), mariage (2 jours), deuil. Les jours fériés publics mauritiens (15 par an : Nouvel An, Abolition de l'esclavage, Fête nationale, Divali, Noël, etc.) sont intégrés automatiquement. Le système génère des alertes si un salarié approche de l'épuisement de ses congés annuels."
      },
      {
        title: "Procédures de licenciement conformes à la loi",
        content: "Le licenciement à Maurice est strictement encadré par le Workers' Rights Act 2019 et peut donner lieu à contentieux. Nous vous accompagnons dans le respect rigoureux de la procédure : justification du licenciement (faute grave, insuffisance professionnelle, motif économique), entretien préalable obligatoire avec le salarié, notification écrite motivée, respect du préavis (30 jours minimum après la période d'essai), calcul des indemnités de licenciement (équivalent à trois mois de rémunération par année de service pour les salariés ayant plus de 12 mois d'ancienneté), et solde de tout compte. Nous rédigeons l'ensemble des documents officiels (lettre de licenciement, calcul des indemnités, attestation de travail) et vous assistons en cas de litige devant le Tribunal du Travail."
      },
      {
        title: "Règlement intérieur et politiques d'entreprise",
        content: "Un règlement intérieur clair et conforme prévient les malentendus et les litiges. Nous rédigeons votre règlement intérieur en conformité avec la législation mauricienne, couvrant : horaires et présence, télétravail et flexibilité, tenue et respect de la confidentialité, politique de congés et absences, procédures disciplinaires, utilisation des outils informatiques, santé et sécurité au travail, et anticorruption. Le règlement est soumis au Ministère du Travail et à l'inspection du travail. Nous vous assistons également pour mettre à jour vos politiques (diversité, respect des droits, égalité femme-homme, prévention du harcèlement)."
      },
      {
        title: "Reporting RH intégré dans votre dashboard OKE",
        content: "Toutes vos données RH sont centralisées et accessibles en temps réel via votre espace client OKE. Vous consultez instantanément : effectif et organigramme en direct, bulletins de paie et historiques, soldes de congés par salarié, déclarations sociales et conformité, masse salariale et évolutions, turnover et absentéisme, et indicateurs clés (coût moyen par salarié, ratio management, jours de travail perdus). Les données sont synchronisées automatiquement avec votre comptabilité, éliminant les doubles saisies et garantissant la cohérence. Vous pouvez télécharger rapports et exports pour vos besoins de pilotage."
      }
    ],

    benefits: [
      "Contrats 100% conformes Workers' Rights Act 2019",
      "Suivi OP expatriés et renouvellements pilotés",
      "Gestion digitalisée des congés en temps réel",
      "Accompagnement légal en licenciement",
      "Règlement intérieur rédigé et approuvé",
      "Dashboard RH avec tous les KPI",
      "Synchronisation comptable automatique OKE",
      "Support légal en cas de litige travail"
    ],

    faq: [
      {
        q: "Quelle est la durée maximum d'une période d'essai à Maurice ?",
        a: "La période d'essai maximum est de 12 mois selon le poste. Pour un CDI ouvrier ou employé, elle est de 3 à 6 mois. Pour un cadre, elle peut aller jusqu'à 12 mois. Pendant cette période, soit l'employeur soit le salarié peuvent résilier sans justification, mais avec un préavis d'une semaine. Passé ce délai, le contrat devient CDI et nécessite un motif légal pour licencier."
      },
      {
        q: "Combien de jours de congé annuel un salarié a-t-il droit ?",
        a: "Le minimum légal est 20 jours ouvrables (4 semaines) par an. Certains contrats de travail offrent plus. Les congés non pris ne se reportent que partiellement d'une année à l'autre (maximum 10 jours en cumul). Les congés non pris à la fin de l'emploi doivent être indemnisés ou pris avant le départ."
      },
      {
        q: "Quel est le délai de préavis avant un licenciement ?",
        a: "Après la période d'essai, un préavis de 30 jours minimum doit être respecté. Pendant ce délai, le salarié continue à être payé et peut chercher un nouvel emploi. L'employeur peut dispenser le salarié de ce préavis moyennant le paiement de l'équivalent. Aucun préavis n'est dû en cas de faute grave."
      }
    ]
  },

  "administration-expatries": {
    title: "Administration expatriés à Maurice",
    metaTitle: "Gestion complète expatriés Maurice — Occupation Permit, relocation, installation — BD Star",
    metaDescription: "Gestion administration expatriés à Maurice : Occupation Permit, Work Permit, relocation, logement, école, banque, famille.",
    shortTitle: "Administration expatriés",
    icon: Globe,
    hero: "Installation réussie et administrative de vos expatriés",
    intro: "De la demande de permis de travail à l'intégration complète de votre expatrié et sa famille à Maurice — nous gérons tous les aspects administratifs et pratiques.",

    sections: [
      {
        title: "Gestion des permis de travail — Occupation Permit et Work Permit",
        content: "L'embauche d'un expatrié à Maurice nécessite l'obtention d'un permis de travail. Deux régimes principaux existent. L'Occupation Permit (OP) Professional s'adresse aux cadres et techniciens gagnant au minimum 60 000 MUR par mois (seuil 2024). La demande est déposée en ligne auprès de l'Economic Development Board (EDB) et le délai moyen de traitement est de 3 à 5 semaines. Le permis est valable 3 ans et renouvelable. Pour les salariés en dessous du seuil de l'OP ou dans des secteurs non couverts, un Work Permit classique est nécessaire, délivré par le ministère du Travail, avec une validité de 2 ans. Nous préparons l'intégralité du dossier, gérons les échanges avec les autorités et effectuons le suivi administratif jusqu'à l'obtention du permis."
      },
      {
        title: "Procédures d'entrée et visa résidence",
        content: "Avant d'arriver à Maurice, votre expatrié doit être en possession d'un visa. Les ressortissants français et de la plupart des pays européens bénéficient d'une exonération de visa pour 90 jours en tant que touristes. Une fois l'OP ou le Work Permit approuvé, le permis de travail sert de fondement pour obtenir un visa résidence long terme à l'aéroport Sir Seewoosagur Ramgoolam (SSR) ou auprès du ministère de l'Intérieur. Nous assurons la cohérence administrative entre le permis de travail et les documents de résidence. Pour les familles, nous gérons les visas des conjoints et enfants, généralement accordés au titre du regroupement familial."
      },
      {
        title: "Recherche et installation en logement",
        content: "L'installation d'une famille expatriée débute par trouver un logement adapté. Nous vous proposons un large choix dans les quartiers résidentiels de qualité : Floréal (close pour expatriés, proximité écoles), Quatre-Bornes (résidentiel calme, commerces), Curepipe (altitude, climat frais), Vacoas (securisé, vie de quartier), ou région centre (Ebène, Montagne-Longue, Hugneux) pour une proximité au travail. Nous négocions les baux (généralement 1 à 2 ans), assistons pour les visites et inspections, et coordonnons les aspect pratiques : eau, électricité, internet. Les loyers varient de 50 000 à 200 000 MUR par mois selon le quartier et la taille. Les propriétaires acceptent généralement des garanties (dépôt de sécurité) et des références professionnelles."
      },
      {
        title: "Inscription scolaire et familles expatriées",
        content: "Si vous arrivez en famille avec enfants, l'inscription scolaire est une priorité. Maurice dispose de plusieurs écoles internationales de qualité. Les principales sont : Curtin University (maternelle à lycée, cursus australien), Middlesex University (maternelle à lycée, cursus UK), The International School of Mauritius (ISM, Montessori international), Mangostan International School, Petite École Française (cursus français, petit effectif). Les inscriptions doivent être effectuées 6 à 12 mois à l'avance. Les frais de scolarité varient de 150 000 à 500 000 MUR par an selon le niveau et l'école. Nous vous conseillons sur le choix en fonction du profil de votre enfant, des langues pratiquées, et du projet familial (retour en France ou stabilité à Maurice). Nous effectuons les démarches administratives et relançons les écoles si nécessaire."
      },
      {
        title: "Ouverture de compte bancaire et couverture assurance",
        content: "Tout nouveau résident a besoin d'un compte bancaire. Nous vous facilitons l'accès aux banques locales : State Bank of Mauritius (SBM), Mauritius Commercial Bank (MCB), ABC Banking Group. L'ouverture requiert un permis de travail ou visa résidence valide, un passeport, une preuve d'adresse à Maurice (bail de location), et un justificatif de revenus (contrat de travail). Les délais d'ouverture varient de 3 à 7 jours. Nous gérons les échanges avec la banque et accélérons le processus. Une couverture d'assurance santé privée est fortement recommandée : les hôpitaux privés (Clinique Darné, Clinique du Nord, Floréal) offrent un excellent service mais facturent élevé. Nous vous proposons des offres comparatives auprès des assureurs locaux (SICOM, CIM Assurance)."
      },
      {
        title: "Accompagnement famille et intégration communautaire",
        content: "Au-delà de l'administratif, nous veillons à l'intégration réussie de votre expatrié et sa famille. Nous proposons une aide pratique : accueil à l'aéroport SSR, transfert à l'hôtel ou au logement, visite de la région, introduction aux quartiers résidentiels et commerces. Nous facilitons la connexion avec la communauté expatriée francophone (clubs, associations, réseaux). Pour les conjoints, nous identifions les opportunités professionnelles locales si souhaité. Pour les enfants, nous les aidons à s'inscrire aux activités parascolaires (sports, loisirs, cours). Maurice offre un cadre de vie familial sécurisé, avec un coût de vie modéré, une stabilité politique et un excellent accès aux loisirs de plein air (plages, randonnées). Un expatrié bien accueilli et intégré sera plus productif et engagé."
      }
    ],

    benefits: [
      "Gestion OP/Work Permit du dossier à l'approbation",
      "Suivi administrative et renouvellements planifiés",
      "Recherche logement et conseil sur quartiers",
      "Aide inscription école enfants",
      "Ouverture compte bancaire facilitée",
      "Mise en place assurance santé privée",
      "Accompagnement intégration communautaire",
      "Support 24/7 pour urgences pratiques"
    ],

    faq: [
      {
        q: "Combien coûte un Occupation Permit à Maurice ?",
        a: "L'Occupation Permit ne génère pas de frais de demande directs auprès de l'EDB. Cependant, il faut compter les frais administratifs indirects (comptable ou consultant pour préparation dossier : 500-1000 EUR), les frais bancaires pour transfert de salaire depuis l'étranger, et éventuellement une aide pour la relocation. Au total, comptez 1500-3000 EUR tout frais inclus pour une procédure clé en main."
      },
      {
        q: "Quel est le coût de la vie pour une famille expatriée à Maurice ?",
        a: "Maurice est très abordable comparé à l'Europe. Une famille de 4 personnes peut vivre confortablement avec 3500-5000 EUR par mois (logement 1200-2000 EUR, vivres 800-1200 EUR, école 300-800 EUR, transports 400-600 EUR, loisirs et assurance 400-500 EUR). Les expatriés apprécient le rapport qualité-prix, le cadre sécurisé et l'accès aux loisirs."
      },
      {
        q: "Comment sont les écoles internationales à Maurice ?",
        a: "Maurice dispose d'écoles internationales de qualité reconnues : Curtin (cursus australien), Middlesex (cursus UK), Mangostan et ISM (Montessori). Les classes sont réduites, les enseignants expatriés ou formés à l'international, et les installations modernes. Les frais varient de 150 000 à 500 000 MUR par an selon le niveau. Les enfants s'y intègrent bien et bénéficient d'un curriculum international."
      }
    ]
  }
};

export async function generateStaticParams() {
  return [
    { slug: "recrutement" },
    { slug: "paie-externalisee" },
    { slug: "hr-management" },
    { slug: "administration-expatries" }
  ];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = serviceData[params.slug as keyof typeof serviceData];

  if (!service) {
    return {
      title: "Service RH & Paie",
      description: "Service RH & Paie à Maurice"
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug as keyof typeof serviceData];

  if (!service) {
    return <div>Service non trouvé</div>;
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/services/rh-paie" className="hover:text-blue-600">
              RH & Paie
            </Link>
            <ArrowRight className="h-4 w-4" />
            <span className="text-slate-900 font-medium">{service.shortTitle}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6 mb-12">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <Icon className="h-8 w-8" />
            </div>
            <div>
              <p className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-blue-300 backdrop-blur-sm mb-4">
                Service RH & Paie
              </p>
              <h1 className="text-4xl font-bold text-white sm:text-5xl leading-[1.2] max-w-3xl">
                {service.hero}
              </h1>
            </div>
          </div>

          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            {service.intro}
          </p>

          <div className="mt-10">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                Demander un audit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contenu détaillé */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {service.sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {section.title}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages clés */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">
            Avantages de ce service
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                <p className="text-slate-600 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">
            Questions fréquentes
          </h2>

          <div className="space-y-8">
            {service.faq.map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  {item.q}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Prêt à optimiser votre {service.shortTitle.toLowerCase()} ?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Nous étudions votre situation et vous proposons une solution sur mesure à Maurice.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-10 h-14 text-lg font-bold">
              Contacter notre équipe RH
            </Button>
          </Link>
          <p className="mt-6 text-sm text-blue-50">
            Réponse sous 24h ouvrées.
          </p>
        </div>
      </section>

      {/* Articles liés */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-slate-900 mb-8">Articles liés</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { href: "/ressources/blog/droit-travail-maurice-workers-rights-act", title: "Droit du travail à Maurice", desc: "Workers' Rights Act 2019 : contrats, congés, licenciement et obligations employeur." },
              { href: "/ressources/blog/ecoles-internationales-maurice-education", title: "Écoles internationales à Maurice", desc: "Panorama des établissements scolaires pour les familles expatriées." }
            ].map((article) => (
              <Link key={article.href} href={article.href}>
                <div className="group rounded-xl border bg-white p-4 transition-all hover:shadow-md hover:border-blue-300">
                  <h4 className="font-bold text-slate-900 group-hover:text-blue-600">{article.title}</h4>
                  <p className="mt-1 text-sm text-slate-500">{article.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
