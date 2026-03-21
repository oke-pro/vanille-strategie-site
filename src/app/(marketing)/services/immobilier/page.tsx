import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Immobilier & Patrimoine Maurice — Investissement, IRS, PDS, Smart City",
  description: "Conseil en investissement immobilier à Maurice. IRS, PDS, Smart City, G+2. Audit rigoureux, accompagnement achat/location.",
};

export default function ImmobilierPage() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden">
        <Image src="/images/villa-luxe.jpg" alt="Villa luxe Maurice" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />
        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-blue-400">Services — Vanille Immobilier</p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Immobilier & Patrimoine</h1>
            <p className="mt-4 text-lg text-slate-300">
              Investissement locatif, acquisition via IRS/PDS/Smart City, conseil patrimonial — audité et validé par nos experts.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Programmes éligibles au permis de résidence</h2>
          <p className="mt-2 text-sm text-amber-600 font-medium">Investissement minimum : 375 000 $ — Droits d&apos;enregistrement : 10% (depuis juillet 2026)</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "IRS", full: "Integrated Resort Scheme", desc: "Résidences de luxe dans des domaines intégrés" },
              { name: "RES", full: "Real Estate Scheme", desc: "Projets résidentiels de taille moyenne" },
              { name: "PDS", full: "Property Development Scheme", desc: "Développements immobiliers modernes" },
              { name: "Smart City", full: "Smart City Scheme", desc: "Villes intelligentes (attention : avantages fiscaux réduits depuis 2025)" },
              { name: "G+2", full: "Ground + 2 Apartment", desc: "Appartements en étages — option plus accessible" },
              { name: "IHS", full: "Invest Hotel Scheme", desc: "Parts de suites hôtelières avec revenus locatifs" },
            ].map((p) => (
              <div key={p.name} className="rounded-xl border p-6 transition-shadow hover:shadow-lg">
                <span className="rounded bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">{p.name}</span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{p.full}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Envie d&apos;investir à Maurice ?</h2>
          <p className="mt-3 text-slate-400">Nos conseillers vous proposent des biens sélectionnés et validés.</p>
          <div className="mt-6"><Link href="/contact"><Button size="lg" className="bg-blue-600 px-10 hover:bg-blue-700">Voir les opportunités</Button></Link></div>
        </div>
      </section>
    </>
  );
}
