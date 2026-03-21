import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder } from "@/data/site";

export const metadata: Metadata = {
  title: "Achat / Vente d'entreprise à Maurice — M&A, Due Diligence, LBO",
  description: "Audit financier, rédaction de contrats de cession, pactes d'actionnaires. Supervisé par un spécialiste M&A avec 40+ ans d'expérience.",
};

export default function AchatVentePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-blue-400">Services — Vanille Stratégie</p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Achat / Vente d&apos;entreprise</h1>
            <p className="mt-4 text-lg text-slate-300">
              {founder.name} a piloté des opérations de LBO et de M&amp;A pendant 40 ans. Cette expertise est à votre service pour acheter ou vendre une affaire à Maurice.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-xl border p-6">
              <h3 className="text-lg font-bold text-slate-900">Vous achetez</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>Recherche d&apos;entreprises à acquérir</li>
                <li>Due diligence financière et fiscale</li>
                <li>Évaluation et négociation</li>
                <li>Rédaction du contrat de cession</li>
                <li>Pacte d&apos;actionnaires</li>
                <li>Accompagnement post-acquisition</li>
              </ul>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="text-lg font-bold text-slate-900">Vous vendez</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>Valorisation de votre entreprise</li>
                <li>Préparation du dossier de cession</li>
                <li>Recherche d&apos;acquéreurs qualifiés</li>
                <li>Négociation et closing</li>
                <li>Optimisation fiscale de la cession</li>
                <li>0% de taxe sur les plus-values à Maurice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Un projet d&apos;acquisition ou de cession ?</h2>
          <p className="mt-3 text-slate-400">Consultation confidentielle avec {founder.name}.</p>
          <div className="mt-6"><Link href="/contact"><Button size="lg" className="bg-blue-600 px-10 hover:bg-blue-700">Discuter en toute confidentialité</Button></Link></div>
        </div>
      </section>
    </>
  );
}
