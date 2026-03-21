import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { companyTypes, permits, founder, testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Entrepreneur — Créer ou délocaliser votre société à Maurice",
  description:
    "Domestic Company, GBC ou Authorised Company ? Vanille Stratégie vous guide vers la structure optimale et gère tout : statuts, permis, banque, comptabilité.",
};

export default function EntrepreneurPage() {
  const investorPermits = permits.filter(
    (p) => p.type.includes("Investor") || p.type.includes("Self-Employed")
  );

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <Image
          src="/images/entrepreneur-maurice.jpg"
          alt="Entrepreneur à Maurice"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-[fadeSlideUp_0.8s_ease-out]">
            <p className="mb-3 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-sm font-medium uppercase tracking-widest text-blue-300">
              Parcours Entrepreneur
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Créer ou délocaliser{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                votre société
              </span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              De la structure juridique au premier bilan — un Expert-Comptable
              Fiscaliste International avec 40 ans d&apos;expérience pilote votre
              implantation.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Étude de faisabilité gratuite
                </Button>
              </Link>
              <Link href="#structures">
                <Button size="lg" variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                  Voir les structures
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quelle structure ? */}
      <section id="structures" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Quelle structure pour vous ?
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Maurice propose 3 types de sociétés. Le choix dépend de votre
              activité, votre résidence fiscale et vos objectifs.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {companyTypes.map((c) => (
              <Card
                key={c.shortName}
                className="group relative flex flex-col overflow-hidden border-2 transition-all hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">{c.type}</h3>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-bold">
                      {c.shortName}
                    </span>
                  </div>
                  <p className="mt-2 text-3xl font-bold">{c.taxRate}</p>
                  <p className="text-sm text-blue-200">Taux d&apos;imposition effectif</p>
                </div>
                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-medium text-slate-600">{c.idealFor}</p>
                  <ul className="mt-4 flex-1 space-y-2">
                    {c.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
                        <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex gap-3 border-t pt-4 text-xs text-slate-500">
                    <span>Résident fiscal : {c.taxResident ? "Oui" : "Non"}</span>
                    <span>·</span>
                    <span>Traités : {c.treatyAccess ? "37 pays" : "Non"}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Mis à jour mars 2026 — Finance Act 2025 · Sources :{" "}
            <a href="https://www.fscmauritius.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FSC Mauritius</a>,{" "}
            <a href="https://www.mra.mu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MRA</a>
          </p>
        </div>
      </section>

      {/* Permis disponibles */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Quel permis pour vous ?
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Conditions mises à jour post-réforme EDB du 19 août 2025.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {investorPermits.map((p) => (
              <Card key={p.type} className="p-6 transition-shadow hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-900">{p.type}</h3>
                <p className="mt-1 text-sm text-blue-600">{p.target}</p>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Investissement</span>
                    <span className="font-medium text-slate-900">{p.investment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Durée</span>
                    <span className="font-medium text-slate-900">{p.duration}</span>
                  </div>
                </div>
                {p.renewal.includes("NOUVEAU") && (
                  <span className="mt-3 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                    {p.renewal}
                  </span>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Ce qui est inclus
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                Nos prestations sont transparentes et à tarif tout compris.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Constitution de votre société + rédaction des statuts",
                  "Domiciliation provisoire ou définitive",
                  "Ouverture de compte bancaire multi-devises (AfrAsia, MCB)",
                  "Mise à disposition d'administrateurs résidents",
                  "Analyse de la convention de non-double imposition FR-MU",
                  "Obtention de votre Occupation Permit (3-4 semaines)",
                  "Comptabilité en normes françaises ET IFRS (BD Star / MIPA)",
                  "Dashboard OKE : suivi temps réel de votre business",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/grand-baie.jpg"
                alt="Grand Baie, Maurice"
                width={600}
                height={400}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500" />
        <div className="relative mx-auto max-w-4xl px-4 text-center text-white sm:px-6 lg:px-8">
          <blockquote className="text-xl font-medium italic leading-relaxed sm:text-2xl">
            &laquo;&nbsp;{testimonials[1].quote}&nbsp;&raquo;
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-blue-200">
            {testimonials[1].name} — {testimonials[1].role}, {testimonials[1].company}
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Prêt à créer votre société à Maurice ?
          </h2>
          <p className="mt-3 text-lg text-slate-400">
            Bénéficiez d&apos;une étude de faisabilité gratuite par {founder.name},{" "}
            {founder.title}.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 px-10 text-base hover:bg-blue-700">
                Discutons de votre projet
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
