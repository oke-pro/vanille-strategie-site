import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité de Vanille Stratégie. Découvrez comment nous protégeons vos données personnelles.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="bg-white py-20">
      <div className="prose prose-slate mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1>Politique de confidentialité</h1>

        <h2>Qui sommes-nous ?</h2>
        <p>
          <strong>VANILLE STRATÉGIE</strong><br />
          BRN : C15127407<br />
          Grand Baie Road, Grand Baie, Maurice<br />
          Site web : <a href="https://www.vanillestrategie.com">www.vanillestrategie.com</a>
        </p>
        <p>
          Vanille Stratégie accompagne les entrepreneurs et investisseurs dans leur implantation à l&apos;Île Maurice : création de société, permis de résidence, comptabilité, fiscalité et immobilier.
        </p>

        <h2>Utilisation des données personnelles</h2>
        <p>
          Les données personnelles collectées sur ce site proviennent exclusivement des formulaires de contact et de demande d&apos;étude de faisabilité. Ces données sont utilisées uniquement pour :
        </p>
        <ul>
          <li>Répondre à vos demandes d&apos;information</li>
          <li>Réaliser votre étude de faisabilité gratuite</li>
          <li>Vous recontacter dans le cadre de votre projet</li>
        </ul>
        <p>
          Vos données ne sont ni vendues, ni louées, ni cédées à des tiers à des fins commerciales.
        </p>

        <h2>Cookies</h2>
        <p>
          Ce site utilise exclusivement des <strong>cookies techniques</strong> nécessaires à son bon fonctionnement (navigation, sécurité, préférences d&apos;affichage). Aucun cookie publicitaire n&apos;est déposé.
        </p>

        <h2>Google Analytics</h2>
        <p>
          Ce site peut utiliser Google Analytics, un outil d&apos;analyse d&apos;audience fourni par Google LLC. Cet outil utilise des cookies pour analyser l&apos;utilisation du site de manière anonymisée. Les données collectées (pages visitées, durée de visite, localisation approximative) sont utilisées uniquement pour améliorer notre site et ne permettent pas de vous identifier personnellement.
        </p>
        <p>
          Vous pouvez désactiver le suivi Google Analytics en installant le module complémentaire de navigateur proposé par Google : <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a>.
        </p>

        <h2>Durées de stockage</h2>
        <p>
          Vos données personnelles sont conservées pour la durée strictement nécessaire au traitement de votre demande, et au maximum pendant une durée de <strong>3 ans</strong> à compter de votre dernier contact avec nous, sauf obligation légale contraire.
        </p>
        <p>
          Les données de navigation (cookies, logs) sont conservées pour une durée maximale de <strong>13 mois</strong>.
        </p>

        <h2>Vos droits sur vos données</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi mauricienne sur la protection des données (Data Protection Act 2017), vous disposez des droits suivants :
        </p>
        <ul>
          <li><strong>Droit d&apos;accès :</strong> obtenir la confirmation que vos données sont traitées et en recevoir une copie</li>
          <li><strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes</li>
          <li><strong>Droit de suppression :</strong> demander l&apos;effacement de vos données personnelles</li>
          <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré et lisible</li>
          <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
        </ul>
        <p>
          Pour exercer ces droits, contactez notre Délégué à la Protection des Données (DPO).
        </p>

        <h2>Délégué à la Protection des Données (DPO)</h2>
        <p>
          <strong>Didier LAROUSSINIE</strong><br />
          Email : <a href="mailto:dl@vanillestrategie.com">dl@vanillestrategie.com</a><br />
          Adresse : Grand Baie Road, Grand Baie, Maurice
        </p>

        <h2>Sécurité</h2>
        <p>
          Ce site est protégé par un certificat <strong>SSL/HTTPS</strong> qui garantit le chiffrement des données échangées entre votre navigateur et notre serveur. Nous mettons en oeuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
        </p>

        <h2>Modification de la politique</h2>
        <p>
          Vanille Stratégie se réserve le droit de modifier la présente politique de confidentialité à tout moment. La version en vigueur est celle accessible sur cette page.
        </p>
      </div>
    </section>
  );
}
