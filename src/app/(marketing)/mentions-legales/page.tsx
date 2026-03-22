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
          <strong>Vanille Stratégie</strong><br />
          {siteConfig.addresses.grandBaie.line1}<br />
          {siteConfig.addresses.grandBaie.city}, {siteConfig.addresses.grandBaie.country}<br />
          Téléphone : {siteConfig.phone}<br />
          Email : {siteConfig.email}
        </p>
        <h2>Hébergement</h2>
        <p>Ce site est hébergé par OVHcloud, 2 rue Kellermann, 59100 Roubaix, France.</p>
        <h2>Propriété intellectuelle</h2>
        <p>L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes) est la propriété exclusive de Vanille Stratégie, sauf mention contraire. Toute reproduction est interdite sans autorisation préalable.</p>
        <h2>Données personnelles</h2>
        <p>Les données collectées via les formulaires de contact sont utilisées uniquement pour répondre à vos demandes. Elles ne sont ni vendues ni cédées à des tiers. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données en contactant {siteConfig.email}.</p>
        <h2>Cookies</h2>
        <p>Ce site utilise des cookies techniques nécessaires à son fonctionnement. Aucun cookie publicitaire n&apos;est utilisé sans votre consentement.</p>
        <h2>Photos</h2>
        <p>Les photographies utilisées sur ce site proviennent d&apos;Unsplash (licence libre) ou sont la propriété de Vanille Stratégie.</p>
      </div>
    </section>
  );
}
