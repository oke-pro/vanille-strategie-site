import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { founder } from "@/data/site";

export const metadata: Metadata = {
  title: "Digital Nomad — Piloter votre business depuis Maurice",
  description:
    "Premium Visa gratuit en 48h, fiscalité 15% flat, 0% dividendes, connecteurs Shopify/Amazon intégrés. Maurice, la base idéale pour les entrepreneurs digitaux.",
};

const advantages = [
  { icon: "💰", title: "15% IS flat", desc: "0% dividendes, 0% plus-values — la fiscalité de Dubaï sans les risques" },
  { icon: "🌐", title: "GMT+4", desc: "Journée qui couvre l'Europe (matin) et l'Asie (après-midi)" },
  { icon: "📡", title: "Fibre optique", desc: "Internet haut débit, coworking modernes à Grand Baie et Ebene" },
  { icon: "✈️", title: "Vol direct", desc: "Air France / Air Mauritius depuis Paris, connexions internationales" },
  { icon: "🏝️", title: "Qualité de vie", desc: "N°1 en Afrique (Mercer), plages, sécurité, écoles internationales" },
  { icon: "🔄", title: "0% TVA export", desc: "Services vers l'UE non soumis à la TVA mauricienne" },
];

const steps = [
  { step: "1", title: "Premium Visa", desc: "Gratuit, 48h de traitement. Revenu min. 1 500 $/mois. Travaillez à distance pendant 1 an." },
  { step: "2", title: "Testez Maurice", desc: "Installez-vous, découvrez le lifestyle, ouvrez un compte AfrAsia ou MCB." },
  { step: "3", title: "Passez à l'OP", desc: "Si ça vous plaît, transition vers un OP Self-Employed (50 000 $) ou Investor pour rester." },
  { step: "4", title: "Pilotez avec OKE", desc: "Vos ventes Shopify/Amazon → comptabilité automatique → dashboard temps réel. Zéro Excel." },
];

export default function DigitalNomadPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <Image src="/images/digital-nomad-maurice.jpg" alt="Digital Nomad à Maurice" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-[fadeSlideUp_0.8s_ease-out]">
            <p className="mb-3 inline-block rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1 text-sm font-medium uppercase tracking-widest text-teal-300">
              Parcours Digital Nomad
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Piloter votre business{" "}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">depuis le paradis</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              E-commerçant, freelance, infopreneur — Maurice offre la fiscalité de Dubaï, la qualité de vie des tropiques, et un dashboard pour tout gérer en temps réel.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">Simuler mon installation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">Pourquoi Maurice pour les digital entrepreneurs ?</h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a) => (
              <Card key={a.title} className="p-6 transition-shadow hover:shadow-lg">
                <p className="text-3xl">{a.icon}</p>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{a.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parcours en 4 étapes */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <Image src="/images/cocotiers-plage.jpg" alt="Cocotiers" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/92" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">Votre parcours en 4 étapes</h2>
          <p className="mt-3 text-center text-lg text-slate-600">Du Premium Visa au dashboard OKE — on gère tout.</p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="rounded-2xl border bg-white/80 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-lg font-bold text-white">{s.step}</div>
                <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OKE pour e-commerce */}
      <section className="bg-slate-900 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-teal-400">Votre arme secrète</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Vos ventes → comptabilité automatique</h2>
            <p className="mt-4 text-lg text-slate-400">12 plateformes e-commerce connectées. Chaque vente génère automatiquement une écriture comptable. Réconciliation bancaire par IA.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Shopify", "Amazon", "WooCommerce", "PrestaShop", "eBay", "Cdiscount", "Rakuten", "ManoMano", "Back Market", "Zalando", "Magento", "Mirakl"].map((p) => (
              <div key={p} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-medium text-slate-300 backdrop-blur-sm">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <Image src="/images/plage-paradis.jpg" alt="Plage paradisiaque" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-800/80" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Prêt à piloter depuis le paradis ?</h2>
          <p className="mt-3 text-lg text-teal-100">Étude de faisabilité gratuite par {founder.name}, {founder.title}.</p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-white px-10 text-base font-semibold text-teal-900 hover:bg-teal-50">Discutons de votre projet</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
