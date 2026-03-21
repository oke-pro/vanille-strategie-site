import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Avis clients — Témoignages d'entrepreneurs installés à Maurice",
  description: "Découvrez les témoignages de nos clients : École Centrale de Nantes, Mahoe.jobs, et bien d'autres entrepreneurs et retraités installés à Maurice.",
};

export default function AvisClientsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Nos clients, nos ambassadeurs</h1>
          <p className="mt-4 text-lg text-slate-300">Depuis 2012, des centaines de projets réussis à Maurice.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {testimonials.map((t) => (
              <Card key={t.name} className="p-8">
                <blockquote className="text-lg leading-relaxed text-slate-700 italic">
                  &laquo;&nbsp;{t.quote}&nbsp;&raquo;
                </blockquote>
                {t.result && (
                  <div className="mt-4 rounded-lg border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 px-5 py-3">
                    <p className="text-sm font-semibold text-emerald-800">
                      <span className="mr-2 inline-block text-emerald-600">&#10003;</span>
                      {t.result}
                    </p>
                  </div>
                )}
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-bold text-white">
                    {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}{t.company && ` — ${t.company}`}</p>
                    {t.url && <a href={t.url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">{t.url}</a>}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Rejoignez-les</h2>
          <div className="mt-6"><Link href="/contact"><Button size="lg" className="bg-blue-600 px-10 hover:bg-blue-700">Démarrer mon projet</Button></Link></div>
        </div>
      </section>
    </>
  );
}
