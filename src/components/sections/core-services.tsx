import Link from "next/link";
import {
  Building2,
  CreditCard,
  FileText,
  Calculator,
  MapPin,
  Stamp,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Immatriculation de société",
    desc: "Domestic Company, GBC ou Authorised Company. Constitution en 3 jours, statuts, enregistrement CBRD.",
    href: "/services/creation-societe",
  },
  {
    icon: Stamp,
    title: "Visas & Permis de résidence",
    desc: "OP Investor, Self-Employed, Professional, Retraité, Premium Visa. 30 à 50 dossiers déposés par an.",
    href: "/services/permis-residence",
  },
  {
    icon: CreditCard,
    title: "Ouverture de compte bancaire",
    desc: "AfrAsia, MCB, SBM — comptes multi-devises, cartes internationales, accompagnement KYC.",
    href: "/ressources/blog/ouvrir-compte-bancaire-maurice-guide",
  },
  {
    icon: Calculator,
    title: "Comptabilité & Fiscalité",
    desc: "Normes françaises et IFRS, déclarations MRA, bilan annuel. BD Star inscrit MIPA.",
    href: "/services/comptabilite-fiscalite",
  },
  {
    icon: MapPin,
    title: "Domiciliation & Bureaux",
    desc: "Siège social, adresse commerciale, bureaux clé en main à Grand Baie et Ebene Cybercity.",
    href: "/services/creation-societe",
  },
  {
    icon: FileText,
    title: "Gestion de société",
    desc: "Secrétariat juridique, assemblées, administrateurs résidents, conformité CBRD et MRA.",
    href: "/services/comptabilite-fiscalite",
  },
];

export function CoreServices() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Nos expertises
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Un accompagnement complet, zéro sous-traitance
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            De l&apos;immatriculation de votre société à la gestion
            quotidienne de votre comptabilité — tout est géré en interne
            par notre groupe.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link key={s.title} href={s.href}>
                <div className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {s.desc}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
                    En savoir plus &rarr;
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
