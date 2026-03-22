import { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegalesPage() {
  return (
    <section className="bg-white py-20">
      <div className="prose prose-slate mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1>Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          <strong>VANILLE STRATÉGIE</strong><br />
          BRN : C15127407<br />
          Grand Baie Road, Grand Baie, Île Maurice<br />
          Téléphone : {siteConfig.phone}<br />
          Email : {siteConfig.email}
        </p>

        <h2>Responsable de publication</h2>
        <p>
          Didier LAROUSSINIE<br />
          Contact : dl@vanillestrategie.com
        </p>

        <h2>Hébergement</h2>
        <p>
          OVHcloud<br />
          2 rue Kellermann, 59100 Roubaix, France<br />
          <a href="https://www.ovhcloud.com" target="_blank" rel="noopener noreferrer">www.ovhcloud.com</a>
        </p>

        <h2>Confidentialité des données</h2>
        <p>
          Les données collectées via les formulaires de contact sont utilisées uniquement pour répondre à vos demandes. Elles ne sont ni vendues ni cédées à des tiers.
        </p>

        <h2>Protection des données personnelles</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi mauricienne sur la protection des données (Data Protection Act 2017), vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et de portabilité de vos données personnelles.
        </p>
        <p>
          Pour exercer ces droits, contactez-nous à l&apos;adresse : dl@vanillestrategie.com
        </p>

        <h2>Vie privée et cookies</h2>
        <p>
          Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire n&apos;est déposé sans votre consentement préalable.
        </p>
        <p>
          Un outil d&apos;analyse d&apos;audience (Google Analytics) peut être utilisé afin d&apos;améliorer l&apos;expérience utilisateur. Les données collectées sont anonymisées et ne permettent pas de vous identifier personnellement.
        </p>
        <p>
          Pour en savoir plus, consultez notre <a href="/politique-de-confidentialite">politique de confidentialité</a>.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, vidéos) est la propriété exclusive de Vanille Stratégie, sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans autorisation écrite préalable de Vanille Stratégie.
        </p>

        <h2>Photos</h2>
        <p>Les photographies utilisées sur ce site proviennent d&apos;Unsplash (licence libre) ou sont la propriété de Vanille Stratégie.</p>
      </div>
    </section>
  );
}
