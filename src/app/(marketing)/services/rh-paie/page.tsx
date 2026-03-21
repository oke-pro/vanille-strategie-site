import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "RH & Paie Maurice — BD Star Management Services",
  description: "Recrutement, contrats de travail, bulletins de paie, charges CSG/PAYE, conformité Workers' Rights Act. Tout externalisé, tout intégré.",
};

export default function RhPaiePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-blue-400">Services — BD Star Management Services</p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">RH & Paie</h1>
            <p className="mt-4 text-lg text-slate-300">
              Votre première embauche à Maurice ? BD Star gère tout : contrat, déclarations, paie, conformité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-xl border p-6">
              <h3 className="text-lg font-bold text-slate-900">Recrutement</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>Recherche de profils locaux bilingues FR/EN</li>
                <li>Pré-sélection et entretiens</li>
                <li>Rédaction des contrats de travail</li>
                <li>Conformité Workers&apos; Rights Act</li>
              </ul>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="text-lg font-bold text-slate-900">Paie externalisée</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>Bulletins de paie conformes</li>
                <li>Calcul charges CSG / PAYE</li>
                <li>Déclarations MRA employeur</li>
                <li>Gestion des congés et absences</li>
              </ul>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="text-lg font-bold text-slate-900">HR Management</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>Gestion administrative du personnel</li>
                <li>Suivi des OP Professional de vos expatriés</li>
                <li>Onboarding et offboarding</li>
                <li>Reporting RH intégré dans OKE</li>
              </ul>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="text-lg font-bold text-slate-900">Expat Admin Management</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>Gestion des permis de travail expatriés</li>
                <li>Logement, école, installation famille</li>
                <li>Coordination avec l&apos;EDB</li>
                <li>Renouvellements et conformité</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Besoin de recruter à Maurice ?</h2>
          <div className="mt-6"><Link href="/contact"><Button size="lg" className="bg-blue-600 px-10 hover:bg-blue-700">Nous contacter</Button></Link></div>
        </div>
      </section>
    </>
  );
}
