import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  Layout,
  MapPin,
  DollarSign,
  CheckCircle2,
  Building2,
  Users,
  TrendingUp,
  Shield,
  ArrowRight,
  AlertCircle,
  Home,
} from "lucide-react";

export const metadata: Metadata = {
  title: "G+2 — Ground + 2 Apartment Maurice | Copropriété Accessible",
  description: "Appartements en copropriété (R+2 minimum) à Maurice. Option accessible pour étrangers. Investissement 6M MUR (~130k EUR). Pas de permis résidence automatique.",
};

export default function GroundPlus2Page() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600">Accueil</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <span>/</span>
            <Link href="/services/immobilier" className="hover:text-blue-600">Immobilier</Link>
            <span>/</span>
            <span className="font-medium text-slate-900">G+2</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/villa-luxe.jpg"
            alt="Ground Plus 2 Apartment Maurice"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-cyan-300 backdrop-blur-sm">
              Immobilier — Option Accessible
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              G+2 — Ground + 2 <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">Apartment</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Appartements en copropriété, R+2 minimum. L'option la plus accessible pour acquérir un bien immobilier à Maurice. Investissement : 6 millions MUR (~130 000 EUR).
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                  Voir les programmes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Overview Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
                Qu'est-ce que le G+2 ?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Le G+2 (Ground + 2) est une classification immobilière mauricienne. Elle désigne des immeubles d'habitation avec au minimum un rez-de-chaussée et deux étages supplémentaires. Ces propriétés peuvent être des petits collectifs (4 à 8 appartements) ou des villas subdivisées.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Contrairement aux schémas d'investissement (IRS, PDS, Smart City), le G+2 n'est pas un programme officiel avec permis résidence garanti. C'est simplement une catégorie de propriété. Cependant, c'est l'option la plus abordable pour acquérir un bien immobilier à Maurice en tant qu'étranger.
              </p>
              <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 flex gap-3">
                <AlertCircle className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
                <div className="text-sm text-cyan-900">
                  <p className="font-bold mb-1">Important</p>
                  <p>G+2 ne donne pas automatiquement accès au permis de résidence. Vous devez demander un permis séparé (OP Retired, OP Investor, etc.).</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/grand-baie.jpg"
                alt="Appartement G+2 Maurice"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Details Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Caractéristiques du G+2
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Investissement minimum",
                value: "6 M MUR",
                desc: "Environ 130 000 EUR. L'option la plus abordable pour étrangers.",
              },
              {
                title: "Type de propriété",
                value: "Copropriété",
                desc: "Propriété fractionnée. Vous possédez l'appartement, non le terrain.",
              },
              {
                title: "Permis de résidence",
                value: "Non inclus",
                desc: "Vous devez demander un permis indépendant (OP Retired, Investor, etc.).",
              },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {card.title}
                </p>
                <p className="text-3xl font-black text-cyan-600 mb-4">{card.value}</p>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* G+2 vs Schémas d'investissement */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            G+2 vs Schémas d'investissement (IRS/PDS/Smart City)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 border border-slate-200">
                  <th className="text-left p-4 font-bold text-slate-900 border border-slate-200">Critère</th>
                  <th className="text-left p-4 font-bold text-slate-900 border border-slate-200">G+2</th>
                  <th className="text-left p-4 font-bold text-slate-900 border border-slate-200">IRS / PDS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { criterion: "Investissement min.", g2: "6 M MUR (130k EUR)", scheme: "375 000 USD" },
                  { criterion: "Permis résidence", g2: "Non automatique", scheme: "Inclus (Investor)" },
                  { criterion: "Type de propriété", g2: "Copropriété / Petit collectif", scheme: "Domaine intégré / Projet neuf" },
                  { criterion: "Garanties (GFA)", g2: "À vérifier", scheme: "Exigées par l'État" },
                  { criterion: "Audit promoteur", g2: "Recommandé", scheme: "Obligatoire" },
                  { criterion: "Revente et liquidité", g2: "Plus difficile", scheme: "Meilleure liquidité" },
                  { criterion: "Potentiel d'appréciation", g2: "Modéré", scheme: "Plus élevé" },
                  { criterion: "Revenus locatifs", g2: "Possibles (T2, T3)", scheme: "Possibles et garantis" },
                ].map((row, i) => (
                  <tr key={i} className="border border-slate-200 hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-900 border border-slate-200">{row.criterion}</td>
                    <td className="p-4 text-slate-600 border border-slate-200">{row.g2}</td>
                    <td className="p-4 text-slate-600 border border-slate-200">{row.scheme}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Avantages G+2 */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Avantages du G+2
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: DollarSign,
                title: "Accessibilité financière",
                desc: "6 millions MUR c'est 50% moins cher que les schémas d'investissement. Entry point idéal pour commencer.",
              },
              {
                icon: TrendingUp,
                title: "Potentiel immobilier",
                desc: "Marché secondaire actif. Les prix au m² augmentent chaque année à Maurice.",
              },
              {
                icon: Home,
                title: "Résidence personnelle",
                desc: "Vous pouvez habiter votre T2 ou T3 vous-même, pas obligation de louer.",
              },
              {
                icon: CheckCircle2,
                title: "Revenus locatifs",
                desc: "Location meublée ou long terme possible. Rendements : 3-5% net annuel typiquement.",
              },
              {
                icon: Users,
                title: "Flexibilité de disposition",
                desc: "Propriété personnelle. Vous pouvez revendre, louer ou transmettre librement.",
              },
              {
                icon: Shield,
                title: "Fiscalité avantageuse",
                desc: "0% plus-values à Maurice. Droits succession : 0%. Plus-values internationales selon votre pays.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Points d'attention */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Points d'attention pour le G+2
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Permis de résidence séparé",
                desc: "G+2 n'ouvre pas automatiquement le droit de résidence. Vous devez faire une demande à l'EDB (OP Retired à partir de 50 ans, OP Investor, etc.).",
              },
              {
                title: "Risque promoteur élevé",
                desc: "Contrairement aux schémas, aucun audit promoteur obligatoire. À vous de vérifier la solidité financière du constructeur.",
              },
              {
                title: "Pas de GFA systématique",
                desc: "Les garanties financières d'achèvement ne sont pas exigées légalement pour G+2. Risque de surcoûts ou retards.",
              },
              {
                title: "Liquidité de revente réduite",
                desc: "Marché plus étroit que les programmes officiels. Revente peut être plus lente et avec prix moins élevé.",
              },
              {
                title: "Charges de copropriété",
                desc: "Entretien bâtiment, eau, électricité, assurance — à partager entre copropriétaires. Peut être onéreux.",
              },
              {
                title: "Localisation variable",
                desc: "Pas d'encadrement sur les zones. Peut être près d'une route bruyante ou zone non développée.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold text-sm">
                  !
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus d'acquisition G+2 */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Processus d'acquisition G+2
          </h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-cyan-300 to-slate-200 hidden lg:block" />

            <div className="space-y-12 lg:space-y-16">
              {[
                {
                  step: 1,
                  title: "Recherche et audit",
                  desc: "Trouver un bien G+2 conforme. Audit du promoteur/vendeur et vérification de la solidité.",
                },
                {
                  step: 2,
                  title: "Visite et négociation",
                  desc: "Visite physique ou virtuelle. Négociation du prix. Vérification des documents de propriété.",
                },
                {
                  step: 3,
                  title: "Engagement de vente",
                  desc: "Signature de la promesse de vente. Versement de l'acompte (généralement 10-20%).",
                },
                {
                  step: 4,
                  title: "Due diligence complète",
                  desc: "Vérification des charges de copropriété, antécédents de propriété, titres fonciers.",
                },
                {
                  step: 5,
                  title: "Financement et acte",
                  desc: "Mise en place du crédit si nécessaire. Passage chez le notaire. Signature de l'acte définitif.",
                },
                {
                  step: 6,
                  title: "Enregistrement et transmission",
                  desc: "Enregistrement auprès des autorités. Prise de possession du bien.",
                },
                {
                  step: 7,
                  title: "Demande permis résidence",
                  desc: "Faire la demande d'un permis (OP Retired, OP Investor, etc.) auprès de l'EDB.",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative lg:pl-24">
                  <div className="absolute left-5 top-1 hidden lg:flex h-7 w-7 items-center justify-center rounded-full bg-cyan-600 text-white text-xs font-black ring-4 ring-white">
                    {item.step}
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-12">
            Questions fréquentes G+2
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Puis-je obtenir un permis de résidence avec un G+2 ?",
                a: "Oui, mais pas automatique. Vous devez demander séparement (OP Retired si 50+, OP Investor si projet économique, etc.).",
              },
              {
                q: "G+2 est-il moins sûr que les schémas ?",
                a: "Oui, il y a plus de risques promoteur. Pas d'audit obligatoire ni GFA systématique. À vérifier vous-même.",
              },
              {
                q: "Quel est le potentiel de plus-value G+2 ?",
                a: "Modéré, 2-4% annuels typiquement. Moins que IRS/PDS qui offrent 4-7%. Dépend de la localisation.",
              },
              {
                q: "Puis-je louer un appartement G+2 ?",
                a: "Oui, location meublée ou long terme. Rendements : 3-5% net annuel.",
              },
              {
                q: "Quels sont les frais additionnels (charges) ?",
                a: "Charges de copropriété : eau, électricité, entretien, syndic, assurance. Généralement 500-1500 MUR/mois.",
              },
            ].map((item, i) => (
              <details key={i} className="group rounded-2xl border border-slate-200 bg-white p-6 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="flex items-center justify-between font-bold text-slate-900">
                  {item.q}
                  <ArrowRight className="h-5 w-5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-700 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            G+2 : L'accès abordable à l'immobilier mauricien
          </h2>
          <p className="text-lg text-cyan-100 mb-8 leading-relaxed">
            Budget limité ? Le G+2 est votre point d'entrée. Nous vous conseillons sur l'audit du promoteur, la négociation et l'optimisation fiscale. Puis vous pouvez monter vers un schéma plus ambitieux.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50 px-8 h-14 text-lg font-bold">
              Explorer mes options G+2
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
