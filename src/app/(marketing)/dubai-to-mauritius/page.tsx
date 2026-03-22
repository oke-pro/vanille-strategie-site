import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { founder } from "@/data/site";

export const metadata: Metadata = {
  title: "Dubai to Mauritius — La même fiscalité, sans les missiles",
  description:
    "Vous quittez Dubaï ? Maurice offre 15% IS, 0% dividendes, 0% plus-values, zéro risque géopolitique. Accompagnement par un Expert-Comptable ex-Deloitte.",
};

const comparison = [
  { label: "Impôt sur les sociétés", dubai: "9%", maurice: "15% (3% effectif GBC)", maroc: "17,5%", winner: "maurice" },
  { label: "Dividendes", dubai: "0%", maurice: "0%", maroc: "Retenue à la source", winner: "both" },
  { label: "Plus-values", dubai: "0%", maurice: "0%", maroc: "Imposables", winner: "both" },
  { label: "Droits de succession", dubai: "Variable", maurice: "0%", maroc: "Existent", winner: "maurice" },
  { label: "Risque géopolitique", dubai: "Élevé (guerre Iran)", maurice: "Quasi nul", maroc: "Faible (région MENA)", winner: "maurice" },
  { label: "Fuseau horaire", dubai: "GMT+4", maurice: "GMT+4", maroc: "GMT+1", winner: "both" },
  { label: "Langue", dubai: "Anglais/arabe", maurice: "Français + anglais", maroc: "Français/arabe", winner: "maurice" },
  { label: "Propriété étrangère", dubai: "Via free zone", maurice: "100% autorisée", maroc: "Restrictions", winner: "maurice" },
];

export default function DubaiToMauritiusPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <Image src="/images/hero-paradise.jpg" alt="Maurice paradis tropical" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 inline-block rounded-full border border-red-400/30 bg-red-500/10 px-4 py-1 text-sm font-medium uppercase tracking-widest text-red-300">
              Opportunité 2026
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Vous quittez Dubaï ?
            </h1>
            <p className="mt-4 text-2xl font-medium text-blue-300">
              Maurice vous offre la même fiscalité. Sans les missiles.
            </p>
            <p className="mt-4 text-lg text-slate-300">
              9 800 millionnaires s&apos;étaient installés à Dubaï en 2025. Aujourd&apos;hui, l&apos;exode a commencé. Maurice est votre plan B — et peut-être votre meilleur choix depuis le début.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Appel stratégique en 24h</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparatif */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">Dubaï vs Maurice vs Maroc</h2>
          <p className="mt-3 text-center text-lg text-slate-600">Le comparatif qui change tout.</p>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 text-left font-medium text-slate-500">Critère</th>
                  <th className="py-3 text-center font-medium text-slate-400">Dubaï / EAU</th>
                  <th className="py-3 text-center font-bold text-blue-600">Maurice</th>
                  <th className="py-3 text-center font-medium text-slate-400">Maroc</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-b border-slate-100">
                    <td className="py-3 font-medium text-slate-700">{row.label}</td>
                    <td className="py-3 text-center text-slate-600">{row.dubai}</td>
                    <td className="py-3 text-center font-semibold text-blue-600">{row.maurice}</td>
                    <td className="py-3 text-center text-slate-600">{row.maroc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pourquoi Maurice > Maroc */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Pourquoi Maurice plutôt que le Maroc ?</h2>
          <div className="mt-10 space-y-6">
            {[
              { q: "\"Le Maroc est moins cher\"", a: "Oui, mais vous payez 17,5% d'IS + retenue sur dividendes. À Maurice, 15% flat et 0% sur tout le reste. Sur 500K€ de bénéfices, vous économisez des dizaines de milliers d'euros par an." },
              { q: "\"Le Maroc est plus proche\"", a: "Maurice est à GMT+4, le même fuseau que Dubaï. Vos habitudes ne changent pas. Et le vol direct Air France existe." },
              { q: "\"Le Maroc est dans la région MENA\"", a: "Exactement. Vous fuyez l'instabilité du Moyen-Orient pour aller... en Afrique du Nord ? Maurice est à 8 000 km du premier conflit." },
              { q: "\"Le Maroc à un plus grand marché\"", a: "Maurice est un hub vers l'Afrique (COMESA, 500M+ de consommateurs) ET l'Asie. Le Maroc regarde l'Europe, Maurice regarde le monde." },
            ].map((item) => (
              <div key={item.q} className="rounded-xl border bg-white p-6">
                <p className="font-bold text-slate-900">{item.q}</p>
                <p className="mt-2 text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Le timing est maintenant</h2>
          <p className="mt-3 text-lg text-slate-400">
            Appel stratégique gratuit avec {founder.name}, {founder.title}. Nous avons accompagné des entrepreneurs de Dubaï à Maurice — nous connaissons le chemin.
          </p>
          <div className="mt-8">
            <Link href="/contact"><Button size="lg" className="bg-blue-600 px-10 text-base hover:bg-blue-700">Réserver mon appel</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
