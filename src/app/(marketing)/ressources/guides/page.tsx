import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Guides — Ressources pour votre expatriation à Maurice",
  description: "Guides pratiques, simulateurs et FAQ pour préparer votre implantation à l'Île Maurice.",
};

const resources = [
  { title: "Simulateur Visa", desc: "Répondez à 3 questions pour trouver le permis adapté à votre profil.", href: "/ressources/simulateur-visa", icon: "🎯" },
  { title: "Simulateur Fiscal", desc: "Comparez la fiscalité France vs Maurice vs Maroc avec vos chiffres réels.", href: "/ressources/simulateur-fiscal", icon: "📊" },
  { title: "FAQ", desc: "Réponses aux 10 questions les plus fréquentes sur l'expatriation à Maurice.", href: "/ressources/faq", icon: "❓" },
  { title: "Blog", desc: "Articles experts signés par Didier Laroussinie, Expert-Comptable Fiscaliste International.", href: "/ressources/blog", icon: "📝" },
];

export default function GuidesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Ressources & Guides</h1>
          <p className="mt-4 text-lg text-slate-300">Tout ce dont vous avez besoin pour préparer votre projet à Maurice.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {resources.map((r) => (
              <Link key={r.href} href={r.href}>
                <Card className="group h-full p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-3xl">{r.icon}</p>
                  <h2 className="mt-3 text-xl font-bold text-slate-900 group-hover:text-blue-600">{r.title}</h2>
                  <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white">Besoin d&apos;un accompagnement personnalisé ?</h2>
          <div className="mt-6"><Link href="/contact"><Button size="lg" className="bg-blue-600 px-10 hover:bg-blue-700">Nous contacter</Button></Link></div>
        </div>
      </section>
    </>
  );
}
