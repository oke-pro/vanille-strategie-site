import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Médias — On parle de Vanille Stratégie",
  description: "Apparitions TV, articles de presse et interviews sur l'expatriation et la création d'entreprise à Maurice.",
};

export default function MediasPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">On parle de nous</h1>
          <p className="mt-4 text-lg text-slate-300">Apparitions TV, articles de presse et interviews.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex items-center gap-2">
                <span className="rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">TV</span>
                <span className="text-xs text-slate-400">France Ô</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-slate-900">Investigations — Société et expatriation à Maurice</h3>
              <p className="mt-2 text-sm text-slate-600">
                Reportage sur l&apos;expatriation à l&apos;Île Maurice. Vanille Stratégie y présente son accompagnement pour les entrepreneurs français souhaitant s&apos;installer.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2">
                <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">Presse</span>
                <span className="text-xs text-slate-400">Août 2016</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-slate-900">Memento Magazine — Économie mauricienne</h3>
              <p className="mt-2 text-sm text-slate-600">
                Article économique présentant Vanille Stratégie et son rôle dans l&apos;aide à l&apos;implantation des francophones à Maurice.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2">
                <span className="rounded bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-700">TV</span>
                <span className="text-xs text-slate-400">M6 — Capital</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-slate-900">Émission spéciale Capital sur l&apos;Île Maurice</h3>
              <p className="mt-2 text-sm text-slate-600">
                Reportage présentant le parcours de français expatriés à Maurice, mentionnant les services d&apos;accompagnement proposés par Vanille Stratégie.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Contact presse</h2>
          <p className="mt-3 text-slate-600">Pour toute demande presse ou interview, contactez-nous.</p>
          <div className="mt-6"><Link href="/contact"><Button variant="outline">Nous contacter</Button></Link></div>
        </div>
      </section>
    </>
  );
}
