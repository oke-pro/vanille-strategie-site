import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { mauritiusAdvantages, officialSources } from "@/data/site";

export const metadata: Metadata = {
  title: "L'Île Maurice — Star and Key of the Indian Ocean",
  description:
    "Fiscalité 15% flat, 0% dividendes, N°1 qualité de vie en Afrique, stabilité politique depuis 1968. Tout sur Maurice pour les entrepreneurs et expatriés.",
};

const sections = [
  {
    title: "Une fiscalité très favorable",
    points: [
      "Aucun revenu ne peut être taxé à plus de 15%",
      "Aucun revenu ne peut être taxé plus d'une fois",
      "Pas de droits de succession, ni d'ISF",
      "Crédit d'impôt de 80% pour les bénéfices internationaux (GBC)",
      "Pas d'imposition sur les dividendes ni les plus-values",
      "Libre rapatriement des bénéfices et capitaux",
      "Charges sociales plafonnées (~60€/mois par employé)",
    ],
  },
  {
    title: "Stabilité politique et économique",
    points: [
      "Indépendance depuis 1968 — stabilité politique impressionnante",
      "Modèle parlementaire britannique, séparation des pouvoirs",
      "Classé \"Full Democracy\" (EDB)",
      "8ème mondial en liberté économique (Wall Street Journal)",
      "Presse libre — \"quatrième pouvoir\" vigilant",
    ],
  },
  {
    title: "Position géographique stratégique",
    points: [
      "Hub Afrique-Inde-Asie dans l'océan Indien",
      "Fuseau GMT+4 : 2-3h de Paris, même fuseau que Dubaï",
      "Accès préférentiel à 68% de la population mondiale via accords commerciaux",
      "FTA Chine-Maurice signé en 2019",
      "Membre COMESA, SADC — porte d'entrée du continent africain",
    ],
  },
  {
    title: "Main-d'œuvre qualifiée",
    points: [
      "Population bilingue français-anglais",
      "93% de taux d'alphabétisation",
      "Universités locales + diplômes internationaux",
      "Professionnels qualifiés aux compétences multiples",
    ],
  },
];

export default function MauricePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <Image src="/images/nature-paradis.jpg" alt="Nature luxuriante Maurice" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl items-end px-4 pb-16 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">L&apos;Île Maurice</h1>
            <p className="mt-2 text-xl text-blue-200">&laquo;&nbsp;Star and Key of the Indian Ocean&nbsp;&raquo;</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {mauritiusAdvantages.slice(0, 4).map((a) => (
              <div key={a.label} className="rounded-xl bg-blue-50 p-6 text-center">
                <p className="text-3xl font-bold text-blue-600">{a.stat}</p>
                <p className="mt-1 text-sm font-medium text-slate-700">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections détaillées */}
      {sections.map((s, idx) => (
        <section key={s.title} className={idx % 2 === 0 ? "bg-slate-50 py-16" : "bg-white py-16"}>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{s.title}</h2>
            <ul className="mt-6 space-y-3">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  <span className="text-slate-700">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* Sources officielles */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-widest text-slate-500">Sources officielles</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {officialSources.slice(0, 6).map((s) => (
              <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:bg-white/10">
                {s.name}
              </a>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/contact"><Button size="lg" className="bg-blue-600 px-10 hover:bg-blue-700">Étude de faisabilité gratuite</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
