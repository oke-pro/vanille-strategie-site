import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Play, Mic, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Médias & Ressources — Vanille Stratégie",
  description:
    "Vidéos, podcasts et documents pour préparer votre implantation à Maurice. Présentation du cabinet, guide fiscal, podcast expatriation.",
};

const documents = [
  {
    title: "Guide Fiscal Maurice 2026",
    href: "/documents/guide-fiscal-maurice-2026.html",
    description: "7 chapitres, de la création de société à la checklist d\u2019implantation",
  },
  {
    title: "Mauritius Strategic Excellence",
    href: "/documents/mauritius-strategic-excellence.pdf",
    description: "Présentation complète de notre cabinet et de l\u2019écosystème mauricien",
  },
  {
    title: "Finance Act 2025",
    href: "/documents/finance-act-2025-mauritius.pdf",
    description: "Le texte officiel de la loi de finances 2025 de Maurice",
  },
];

export default function MediasPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Médias &amp; Ressources
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Vidéos, podcasts et documents pour préparer votre implantation à Maurice
          </p>
        </div>
      </section>

      {/* Section 1 — Vidéo de présentation */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Play className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              Votre projet à Maurice, simplifié
            </h2>
          </div>

          <video
            controls
            className="w-full rounded-2xl shadow-xl"
            poster="/media/infographie-vanille-strategie.png"
          >
            <source src="/media/presentation-maurice.mp4" type="video/mp4" />
          </video>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Découvrez en quelques minutes comment Vanille Stratégie accompagne les entrepreneurs,
            investisseurs et retraités francophones dans leur implantation à Maurice.
          </p>
        </div>
      </section>

      {/* Section 2 — Podcast */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Mic className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              Sécuriser son expatriation fiscale à Maurice
            </h2>
          </div>

          <Card className="p-8 border-none bg-white shadow-lg">
            <audio controls className="w-full">
              <source
                src="/media/podcast-expatriation-fiscale-maurice.m4a"
                type="audio/mp4"
              />
            </audio>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Didier Laroussinie décrypte les enjeux fiscaux de l&apos;expatriation à Maurice :
              Exit Tax, convention de non-double imposition, substance requirements et erreurs à
              éviter.
            </p>
            <p className="mt-2 text-sm font-medium text-slate-400">Durée : ~30 min</p>
          </Card>
        </div>
      </section>

      {/* Section 3 — Documents téléchargeables */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FileText className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              Documents téléchargeables
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc) => (
              <Card
                key={doc.title}
                className="group flex flex-col p-8 border border-slate-100 bg-slate-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Download className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{doc.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">
                  {doc.description}
                </p>
                <div className="mt-6">
                  <Link href={doc.href} target="_blank">
                    <Button
                      variant="outline"
                      className="border-blue-200 text-blue-600 hover:bg-blue-50 font-bold"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Télécharger
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Infographie */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-slate-900 text-center">
            L&apos;écosystème Vanille Stratégie en un coup d&apos;œil
          </h2>
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/media/infographie-vanille-strategie.png"
              alt="Infographie de l'écosystème Vanille Stratégie"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Prêt à franchir le pas ?
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Échangeons sur votre projet d&apos;implantation à Maurice.
          </p>
          <div className="mt-12">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-12 h-16 text-lg font-bold shadow-2xl shadow-blue-500/20 text-white border-none"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
