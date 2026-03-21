import { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Conditions Générales de Vente" };

export default function ConditionsPage() {
  return (
    <section className="bg-white py-20">
      <div className="prose prose-slate mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1>Conditions Générales de Vente</h1>
        <h2>1. Objet</h2>
        <p>Les présentes CGV régissent les relations entre Vanille Stratégie et ses clients pour l&apos;ensemble des prestations proposées : conseil en implantation, création de société, obtention de permis de résidence, comptabilité, RH et services associés.</p>
        <h2>2. Prestations</h2>
        <p>Les prestations sont détaillées dans le devis remis au client. Les tarifs sont indiqués en roupies mauriciennes (MUR) ou en euros (EUR) selon les prestations. Sauf mention contraire, les tarifs sont « tout compris ».</p>
        <h2>3. Modalités de paiement</h2>
        <p>Un acompte de 50% est requis à la signature du devis. Le solde est dû à la livraison de la prestation. Les paiements peuvent être effectués par virement bancaire.</p>
        <h2>4. Obligations du client</h2>
        <p>Le client s&apos;engage à fournir l&apos;ensemble des documents et informations nécessaires à la réalisation des prestations dans les délais convenus.</p>
        <h2>5. Responsabilité</h2>
        <p>Vanille Stratégie s&apos;engage à mettre en œuvre tous les moyens nécessaires à la bonne exécution des prestations. Les démarches légales liées à la constitution des sociétés internationales sont réalisées par nos partenaires mauriciens dûment agréés par la Financial Services Commission of Mauritius.</p>
        <h2>6. Confidentialité</h2>
        <p>Vanille Stratégie s&apos;engage à traiter toutes les informations communiquées par le client de manière strictement confidentielle.</p>
        <h2>7. Droit applicable</h2>
        <p>Les présentes CGV sont soumises au droit mauricien. En cas de litige, les tribunaux de Maurice sont seuls compétents.</p>
        <h2>8. Contact</h2>
        <p>Pour toute question relative aux présentes CGV : {siteConfig.email} / {siteConfig.phone}</p>
      </div>
    </section>
  );
}
