import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { permits, founder } from "@/data/site";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  Briefcase,
  Laptop,
  UserCheck,
  Award,
  TreePalm,
  Plane,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Users,
  Home,
  CreditCard,
  FileText,
  HelpCircle,
  AlertTriangle,
  Globe2,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Permis de résidence Maurice — OP Investor, Self-Employed, Retraité, Premium Visa",
  description: "30-50 dossiers déposés par an. Conditions mises à jour post-réforme EDB août 2025. Délai moyen 3-4 semaines.",
};

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  briefcase: Briefcase,
  laptop: Laptop,
  badge: UserCheck,
  award: Award,
  palmtree: TreePalm,
  plane: Plane,
};

const permitSlugs: Record<string, string> = {
  "OP Investor": "occupation-permit-investor",
  "OP Self-Employed": "occupation-permit-self-employed",
  "OP Professional — ProPass": "professional-pass",
  "OP Professional — Expert Pass": "expert-pass",
  "OP Retired": "permis-retraite",
  "Premium Visa": "premium-visa",
};

export default function PermisResidencePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[60vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-paradise.jpg"
            alt="Vivre à Maurice"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-blue-300 backdrop-blur-sm">
              Services — Vanille Stratégie
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Votre permis de résidence <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">à l&apos;Île Maurice</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              30 à 50 dossiers déposés chaque année auprès de l&apos;EDB. Nous vous guidons vers le permis adapté et constituons votre dossier de A à Z.
            </p>
            <div className="mt-8 flex items-center gap-2 text-amber-400 font-medium">
              <ShieldCheck className="h-5 w-5" />
              <span>Conditions mises à jour — Guidelines EDB du 19 août 2025</span>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Permits Grid */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Choisissez votre voie de résidence</h2>
            <p className="mt-4 text-lg text-slate-600">
              Chaque profil à sa solution. Nos experts analysent votre situation pour garantir le succès de votre demande.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {permits.map((p, idx) => {
              const Icon = iconMap[p.icon] || Briefcase;
              const slug = permitSlugs[p.type];
              return (
                <Link
                  key={p.type}
                  href={slug ? `/services/permis-residence/${slug}` : "#"}
                  className="block"
                >
                  <Card
                    className="group relative flex flex-col p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-none bg-white h-full cursor-pointer"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{p.type}</h3>
                    <p className="mt-1 text-sm font-semibold text-blue-600 uppercase tracking-wider">{p.target}</p>

                    <div className="mt-6 flex-1 space-y-4 text-sm">
                      <div className="flex items-start gap-3">
                        <CreditCard className="h-4 w-4 mt-0.5 text-slate-400" />
                        <div>
                          <span className="block text-slate-500 text-xs uppercase font-bold">Investissement</span>
                          <span className="font-medium text-slate-900">{p.investment}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <ArrowRight className="h-4 w-4 mt-0.5 text-slate-400" />
                        <div>
                          <span className="block text-slate-500 text-xs uppercase font-bold">Revenu / Turnover</span>
                          <span className="font-medium text-slate-900">{p.turnover}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-4 w-4 mt-0.5 text-slate-400" />
                        <div>
                          <span className="block text-slate-500 text-xs uppercase font-bold">Validité</span>
                          <span className="font-medium text-slate-900">{p.duration}</span>
                        </div>
                      </div>
                    </div>

                    {p.renewal.includes("NOUVEAU") && (
                      <div className="mt-6 rounded-lg bg-amber-50 px-3 py-2 border border-amber-100">
                        <p className="text-xs font-bold text-amber-700 flex items-center gap-1.5 uppercase tracking-tight">
                          <ShieldCheck className="h-3.5 w-3.5" />
                          {p.renewal}
                        </p>
                      </div>
                    )}

                    <div className="mt-6 pt-6 border-t border-slate-100">
                      <p className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 flex items-center gap-2">
                        En savoir plus <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </p>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2 text-slate-500 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100">
              <Clock className="h-5 w-5 text-blue-500" />
              <span>Délai moyen : 15-20 jours ouvrés · Dépendants : ~10 jours après le principal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Accompaniment */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                Un accompagnement <br />
                <span className="text-blue-400">sur-mesure</span> pour votre expatriation
              </h2>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                Parce qu&apos;un permis n&apos;est qu&apos;une étape de votre projet, nous vous accompagnons sur l&apos;ensemble de votre installation pour une transition sereine.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {[
                  { text: "Dossiers dépendants (conjoint, enfants)", icon: Users },
                  { text: "Ouverture de compte bancaire", icon: CreditCard },
                  { text: "Recherche de logement & écoles", icon: Home },
                  { text: "Déménagement & logistique", icon: Plane },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <item.icon className="h-5 w-5 text-blue-400" />
                    <span className="text-sm font-medium text-slate-200">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                "Étude de faisabilité et recommandation du permis adapté",
                "Constitution complète du dossier (business plan, documents)",
                "Accompagnement lors du dépôt auprès de l'EDB",
                "Suivi jusqu'à l'obtention du permis",
                "Accompagnement physique aux rendez-vous officiels",
                "Vérification de la conformité post-obtention"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl transition-colors hover:bg-white/5 group">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PILLAR CONTENT — Processus de demande EDB */}
      {/* ================================================================ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Processus de demande auprès de l&apos;EDB
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              L&apos;Economic Development Board (EDB) est l&apos;organisme gouvernemental qui traite toutes les demandes de permis de résidence à Maurice. Voici le parcours détaillé, de la préparation à l&apos;obtention de votre permis.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-300 to-slate-200 hidden lg:block" />

            <div className="space-y-12 lg:space-y-16">
              <div className="relative lg:pl-24">
                <div className="absolute left-5 top-1 hidden lg:flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-black ring-4 ring-white">1</div>
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <UserCheck className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900">Étude de faisabilité et choix du permis</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Lors d&apos;un premier entretien approfondi, nous analysons votre profil (activité professionnelle, revenus, patrimoine, situation familiale) pour déterminer le type de permis le plus adapté et le plus susceptible d&apos;être approuvé. Nous évaluons également les implications fiscales de votre expatriation, notamment l&apos;Exit Tax française si vous êtes résident fiscal français.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Cette étape est cruciale car un mauvais choix de catégorie peut entraîner un refus ou des complications ultérieures. Par exemple, un entrepreneur avec un chiffre d&apos;affaires inférieur aux seuils de l&apos;OP Investor pourrait être mieux servi par un permis Self-Employed, tandis qu&apos;un professionnel hautement qualifié pourrait bénéficier du nouveau Expert Pass.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      <Clock className="h-3 w-3" /> 1-3 jours
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                      Gratuit et sans engagement
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative lg:pl-24">
                <div className="absolute left-5 top-1 hidden lg:flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-black ring-4 ring-white">2</div>
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900">Constitution du dossier</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Nous préparons l&apos;intégralité du dossier de demande. Pour un Occupation Permit (Investor ou Self-Employed), cela inclut un business plan détaillé que nous rédigeons en collaboration avec vous, les justificatifs financiers (relevés bancaires, attestations de fonds), les documents d&apos;identité certifiés, le casier judiciaire, l&apos;assurance santé internationale et le contrat de location ou d&apos;achat immobilier à Maurice.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-6">
                    <div className="rounded-xl bg-slate-50 p-4">
                      <h4 className="font-bold text-slate-900 text-sm mb-2">Documents personnels</h4>
                      <ul className="space-y-1.5 text-sm text-slate-600">
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" /> Passeport validé 18+ mois</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" /> Photos d&apos;identité biométriques</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" /> Casier judiciaire apostillé</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" /> Certificat médical</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" /> Assurance santé internationale</li>
                      </ul>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-4">
                      <h4 className="font-bold text-slate-900 text-sm mb-2">Documents professionnels</h4>
                      <ul className="space-y-1.5 text-sm text-slate-600">
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" /> Business plan détaillé</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" /> Preuve d&apos;investissement (USD 50K+)</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" /> Relevés bancaires 6 derniers mois</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" /> CV et diplômes certifiés</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" /> Références professionnelles</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative lg:pl-24">
                <div className="absolute left-5 top-1 hidden lg:flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-black ring-4 ring-white">3</div>
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe2 className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900">Dépôt en ligne et traitement EDB</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Le dossier est soumis via la plateforme en ligne de l&apos;EDB. Nous gérons l&apos;ensemble du processus de soumission et répondons à toutes les demandes de clarification ou documents complémentaires de l&apos;EDB. Le traitement prend en moyenne 15 à 20 jours ouvrés pour un dossier complet et bien préparé.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    L&apos;EDB peut demander des informations supplémentaires ou un entretien complémentaire. Notre présence à Maurice nous permet d&apos;assurer un suivi rapproché et de répondre dans les meilleurs délais. Nous vous tenons informé à chaque étape de l&apos;avancement de votre dossier.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      <Clock className="h-3 w-3" /> 15-20 jours ouvrés
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative lg:pl-24">
                <div className="absolute left-5 top-1 hidden lg:flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-black ring-4 ring-white">4</div>
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900">Approbation et formalités post-obtention</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Une fois le permis approuvé, vous recevez une lettre d&apos;approbation (Letter of Approval) qui vous permet d&apos;entrer à Maurice et de procéder aux formalités finales : prise d&apos;empreintes biométriques au Passport & Immigration Office, obtention de la carte de résidence physique, et enregistrement fiscal auprès de la MRA.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Nous vous accompagnons physiquement à chacun de ces rendez-vous et nous occupons des dossiers de vos dépendants (conjoint et enfants), qui sont généralement traités sous 10 jours ouvrés après le permis principal.
                  </p>
                </div>
              </div>

              <div className="relative lg:pl-24">
                <div className="absolute left-5 top-1 hidden lg:flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-black ring-4 ring-white">5</div>
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900">Mid-term Review et renouvellement</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Depuis la réforme d&apos;août 2025, les Occupation Permits sont soumis à une mid-term review à mi-parcours de leur validité. L&apos;EDB vérifie que les engagements pris dans le business plan initial sont respectés : chiffre d&apos;affaires réalisé, emplois créés, investissements effectués. Si les objectifs ne sont pas atteints, l&apos;EDB peut demander des justifications ou, dans les cas extrêmes, révoquer le permis.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Notre cabinet assure le suivi de votre conformité tout au long de la durée du permis et prépare le dossier de mid-term review. Au moment du renouvellement, nous constituons un nouveau dossier démontrant la continuité et la croissance de votre activité à Maurice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PILLAR CONTENT — Comparatif détaillé des permis */}
      {/* ================================================================ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Comparatif détaillé des permis de résidence
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Mis à jour selon les guidelines EDB du 19 août 2025. Chaque permis répond à un profil et des objectifs spécifiques.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 font-bold text-slate-900 min-w-[160px]">Critère</th>
                  <th className="p-4 font-bold text-blue-600 min-w-[150px]">OP Investor (Option 1)</th>
                  <th className="p-4 font-bold text-blue-600 min-w-[150px]">OP Investor (Option 2)</th>
                  <th className="p-4 font-bold text-emerald-600 min-w-[150px]">Self-Employed</th>
                  <th className="p-4 font-bold text-purple-600 min-w-[150px]">Expert Pass</th>
                  <th className="p-4 font-bold text-amber-600 min-w-[150px]">Retired Non-Citizen</th>
                  <th className="p-4 font-bold text-cyan-600 min-w-[150px]">Premium Visa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">Profil cible</td>
                  <td className="p-4 text-slate-600">Entrepreneur, investisseur avec société à Maurice</td>
                  <td className="p-4 text-slate-600">Investisseur immobilier ou financier</td>
                  <td className="p-4 text-slate-600">Freelance, consultant, profession libérale</td>
                  <td className="p-4 text-slate-600">Professionnel qualifié, expert sectoriel</td>
                  <td className="p-4 text-slate-600">Retraité avec pension ou revenus passifs</td>
                  <td className="p-4 text-slate-600">Digital nomad, télétravailleur</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">Investissement minimum</td>
                  <td className="p-4 text-slate-600">USD 50 000 sur le compte de la société</td>
                  <td className="p-4 text-slate-600">USD 50 000 en immobilier ou dépôt bancaire</td>
                  <td className="p-4 text-slate-600">Aucun minimum requis</td>
                  <td className="p-4 text-slate-600">Aucun — basé sur les qualifications</td>
                  <td className="p-4 text-slate-600">USD 1 500/mois de pension transférée</td>
                  <td className="p-4 text-slate-600">Aucun — preuve de revenus suffisants</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">Chiffre d&apos;affaires requis</td>
                  <td className="p-4 text-slate-600">MUR 4M/an (env. EUR 80 000)</td>
                  <td className="p-4 text-slate-600">N/A</td>
                  <td className="p-4 text-slate-600">MUR 800 000/an (env. EUR 16 000)</td>
                  <td className="p-4 text-slate-600">N/A — salaire minimum MUR 60 000/mois</td>
                  <td className="p-4 text-slate-600">N/A</td>
                  <td className="p-4 text-slate-600">N/A</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">Durée initiale</td>
                  <td className="p-4 text-slate-600">10 ans</td>
                  <td className="p-4 text-slate-600">10 ans</td>
                  <td className="p-4 text-slate-600">10 ans</td>
                  <td className="p-4 text-slate-600">Durée du contrat (max 3 ans renouvelable)</td>
                  <td className="p-4 text-slate-600">10 ans</td>
                  <td className="p-4 text-slate-600">1 an (renouvelable)</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">Présence minimum</td>
                  <td className="p-4 text-slate-600">180 jours/an (post-réforme 2025)</td>
                  <td className="p-4 text-slate-600">180 jours/an (post-réforme 2025)</td>
                  <td className="p-4 text-slate-600">180 jours/an (post-réforme 2025)</td>
                  <td className="p-4 text-slate-600">Durée du contrat de travail</td>
                  <td className="p-4 text-slate-600">183 jours/an pour résidence fiscale</td>
                  <td className="p-4 text-slate-600">Aucune obligation stricte</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">Accès au Permanent Résidence</td>
                  <td className="p-4 text-slate-600">Après 3 ans sous conditions</td>
                  <td className="p-4 text-slate-600">Après 3 ans sous conditions</td>
                  <td className="p-4 text-slate-600">Après 3 ans sous conditions</td>
                  <td className="p-4 text-slate-600">Non directement</td>
                  <td className="p-4 text-slate-600">Après 3 ans sous conditions</td>
                  <td className="p-4 text-slate-600">Non — permis temporaire uniquement</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">Dépendants inclus</td>
                  <td className="p-4 text-slate-600">Conjoint + enfants de moins de 24 ans</td>
                  <td className="p-4 text-slate-600">Conjoint + enfants de moins de 24 ans</td>
                  <td className="p-4 text-slate-600">Conjoint + enfants de moins de 24 ans</td>
                  <td className="p-4 text-slate-600">Conjoint + enfants de moins de 24 ans</td>
                  <td className="p-4 text-slate-600">Conjoint uniquement</td>
                  <td className="p-4 text-slate-600">Conjoint + enfants</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PILLAR CONTENT — Réforme 2025 : ce qui a changé */}
      {/* ================================================================ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-bold text-amber-800 mb-6">
                  <AlertTriangle className="h-4 w-4" /> Réforme août 2025
                </span>
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl leading-tight">
                  Réforme EDB 2025 : ce qui a changé pour les permis
                </h2>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                  Les guidelines de l&apos;EDB publiées le 19 août 2025 ont introduit des modifications majeures pour les demandeurs de permis de résidence. Voici les changements clés à connaître.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-8">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Nouveaux seuils d&apos;investissement</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Les seuils d&apos;investissement pour l&apos;Occupation Permit Investor ont été révisés. L&apos;investissement minimum reste à USD 50 000, mais l&apos;EDB attend désormais une preuve plus rigoureuse de l&apos;origine des fonds et de leur transfert effectif sur un compte bancaire mauricien. Les investissements immobiliers sont désormais plus strictement encadrés, avec une exigence de maintien de l&apos;investissement pendant toute la durée du permis.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Pour le Self-Employed, le seuil de chiffre d&apos;affaires annuel a été ajusté à MUR 800 000 (environ EUR 16 000), avec une obligation de démonstration plus stricte lors de la mid-term review.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Introduction de l&apos;Expert Pass</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Le nouveau Expert Pass remplacé et élargit l&apos;ancien ProPass (Professional Occupation Permit). Il cible les professionnels hautement qualifiés dans des secteurs stratégiques pour Maurice : fintech, intelligence artificielle, biotechnologie, économie bleue, services financiers et technologies numériques.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  L&apos;Expert Pass offre un salaire minimum de MUR 60 000 par mois et une procédure accélérée de traitement. Il permet également une plus grande flexibilité pour changer d&apos;employeur sans refaire la totalité de la procédure, favorisant ainsi la mobilité professionnelle au sein de l&apos;écosystème mauricien.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Obligation de présence de 180 jours</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  L&apos;une des modifications les plus significatives de la réforme 2025 est l&apos;introduction d&apos;une obligation de présence physique de 180 jours par an à Maurice pour les détenteurs d&apos;Occupation Permit. Auparavant, aucune durée minimale de présence n&apos;était formellement imposée, ce qui permettait à certains titulaires de résider principalement à l&apos;étranger.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Cette exigence vise à s&apos;assurer que les détenteurs de permis contribuent effectivement à l&apos;économie locale. Le non-respect de cette condition peut entraîner la non-reconduction du permis lors de la mid-term review ou du renouvellement. Des exceptions sont prévues pour les voyages d&apos;affaires documentés, les raisons médicales et les situations de force majeure.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Permanent Résidence durci</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  L&apos;accès au Permanent Résidence Permit (PRP) a été significativement durci. Désormais, les candidats doivent démontrer 3 années consécutives de résidence effective à Maurice avec un Occupation Permit, un chiffre d&apos;affaires cumulé conforme aux engagements du business plan, et une contribution fiscale substantielle via les impôts payés à la MRA.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Le PRP reste néanmoins un objectif atteignable pour les expatriés sérieusement implantés. Il offre une stabilité à long terme, le droit de travailler sans restriction, et facilite les démarches bancaires et immobilières. Notre cabinet accompagne nos clients dans la préparation de leur dossier de PRP avec un taux de succès historiquement élevé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PILLAR CONTENT — FAQ permis de résidence */}
      {/* ================================================================ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Questions fréquentes — Permis de résidence à Maurice
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Les réponses de notre équipe aux questions les plus posées par les candidats à l&apos;expatriation.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Puis-je travailler à Maurice avec un Premium Visa ?",
                a: "Le Premium Visa permet de résider à Maurice et de travailler à distance pour un employeur ou des clients situés hors de Maurice. En revanche, il ne permet pas d\u2019exercer une activité commerciale locale ni d\u2019être employé par une entreprise mauricienne. Si vous souhaitez créer une société locale ou être salarié à Maurice, vous devez opter pour un Occupation Permit (Investor ou Self-Employed) ou un Expert Pass."
              },
              {
                q: "Quel est le délai réel pour obtenir un Occupation Permit ?",
                a: "Avec un dossier complet et bien préparé, le délai moyen est de 15 à 20 jours ouvrés à compter du dépôt en ligne auprès de l\u2019EDB. Ce délai peut s\u2019allonger si l\u2019EDB demande des documents complémentaires ou des clarifications. Les dossiers des dépendants (conjoint, enfants) sont traités sous environ 10 jours ouvrés après l\u2019obtention du permis principal. Notre taux de traitement en première soumission (sans demande de compléments) dépasse 85%."
              },
              {
                q: "Comment se passe la mid-term review ?",
                a: "La mid-term review est un contrôle effectué par l\u2019EDB à mi-parcours de la validité de votre Occupation Permit (soit après 5 ans pour un permis de 10 ans). L\u2019EDB vérifie que vous respectez les engagements de votre business plan : chiffre d\u2019affaires atteint, emplois créés, investissements réalisés, et désormais la présence physique de 180 jours/an. Notre cabinet prépare le dossier de mid-term review et vous accompagne pour maximiser les chances de validation."
              },
              {
                q: "Mon conjoint et mes enfants peuvent-ils m\u2019accompagner ?",
                a: "Oui. Tous les types de permis (sauf le Premium Visa qui à ses propres modalités) permettent d\u2019inclure votre conjoint et vos enfants de moins de 24 ans comme dépendants. Ils obtiennent un permis de résidence lié au vôtre. Le conjoint peut également travailler à Maurice sous certaines conditions. Nous préparons les dossiers de tous les membres de la famille et les déposons simultanément ou séquentiellement selon la stratégie optimale."
              },
              {
                q: "Quelles sont les implications fiscales de l\u2019expatriation à Maurice ?",
                a: "En devenant résident fiscal mauricien (183+ jours de présence par an), vous bénéficiez du régime fiscal mauricien : IS à 15% maximum, 0% sur les dividendes, 0% sur les plus-values, et accès à la convention fiscale France-Maurice. Attention cependant à l\u2019Exit Tax française (art. 167 bis du CGI) qui s\u2019applique si vous détenez plus de EUR 800 000 de participations ou plus de 50% d\u2019une société. Notre Expert-Comptable réalise une analyse fiscale complète de votre situation avant votre départ."
              },
              {
                q: "Puis-je obtenir le Permanent Résidence directement ?",
                a: "Non, le Permanent Résidence Permit (PRP) ne s\u2019obtient pas directement. Il faut d\u2019abord détenir un Occupation Permit pendant au moins 3 années consécutives et démontrer une contribution effective à l\u2019économie mauricienne. Une alternative existe via l\u2019investissement immobilier dans un projet IRS/RES/PDS/Smart City d\u2019une valeur supérieure à USD 375 000, qui donne accès direct au PRP. Nous vous conseillons sur la stratégie optimale en fonction de votre situation."
              },
              {
                q: "Que se passe-t-il si mon activité ne décolle pas comme prévu ?",
                a: "Si votre chiffre d\u2019affaires est inférieur aux objectifs du business plan lors de la mid-term review, l\u2019EDB ne révoque pas automatiquement votre permis. L\u2019organisme examine les raisons du décalage et votre bonne foi. Nous préparons un argumentaire solide justifiant les écarts (conditions de marché, période de lancement, réorientation stratégique) et présentons un business plan révisé. Notre expérience montre que les dossiers bien préparés et honnêtes sont généralement acceptés."
              },
              {
                q: "L\u2019assurance santé est-elle obligatoire ?",
                a: "Oui, une assurance santé internationale couvrant Maurice est obligatoire pour l\u2019obtention de tout permis de résidence. Elle doit couvrir l\u2019hospitalisation, les soins courants et le rapatriement. Nous travaillons avec plusieurs courtiers spécialisés qui proposent des contrats adaptés aux expatriés à Maurice, avec des tarifs compétitifs par rapport àux assurances européennes. Le coût moyen se situe entre EUR 150 et 400 par mois selon l\u2019âge et le niveau de couverture."
              }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="flex items-start gap-3 text-lg font-bold text-slate-900">
                  <HelpCircle className="h-6 w-6 text-blue-500 shrink-0 mt-0.5" />
                  {item.q}
                </h3>
                <p className="mt-4 ml-9 text-slate-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PILLAR CONTENT — Notre expertise EDB */}
      {/* ================================================================ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl leading-tight">
                Notre expertise <span className="text-blue-600">EDB</span> depuis 2012
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Depuis plus de 14 ans, Vanille Stratégie accompagne les francophones dans leur projet d&apos;expatriation à Maurice. Notre connaissance approfondie des procédures EDB, nos relations avec les interlocuteurs clés et notre rigueur dans la préparation des dossiers font la différence.
              </p>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Chaque dossier est supervisé par Didier Laroussinie, Expert-Comptable diplômé, qui apporte son expertise fiscale pour optimiser non seulement votre permis de résidence, mais aussi la structuration globale de votre patrimoine et de vos activités professionnelles.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">30-50 dossiers déposés chaque année</h3>
                    <p className="mt-1 text-sm text-slate-600">Un volume d&apos;activité qui nous donne une connaissance intime des attentes de l&apos;EDB et des évolutions réglementaires.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Taux d&apos;approbation exceptionnel</h3>
                    <p className="mt-1 text-sm text-slate-600">La qualité de nos dossiers, business plans inclus, nous permet d&apos;afficher un taux d&apos;approbation en première soumission parmi les meilleurs du marché.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Accompagnement 360°</h3>
                    <p className="mt-1 text-sm text-slate-600">Du permis au compte bancaire, du logement à la scolarité des enfants, en passant par la création de société et la comptabilité : un seul interlocuteur pour tout votre projet.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "30-50", label: "Dossiers EDB déposés par an" },
                { value: "14+", label: "Années d\u2019expérience à Maurice" },
                { value: "85%+", label: "Approbation en première soumission" },
                { value: "10j", label: "Dossiers dépendants après le principal" },
                { value: "180", label: "Jours de présence requis (2025)" },
                { value: "0\u20AC", label: "Étude de faisabilité offerte" },
              ].map((stat, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center hover:bg-white hover:shadow-md transition-all">
                  <p className="text-3xl font-black text-blue-600">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-16 overflow-hidden shadow-2xl shadow-blue-500/20">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

            <div className="relative text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Quel permis pour vous ?</h2>
              <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
                Bénéficiez d&apos;une étude de faisabilité gratuite par {founder.name}, {founder.title}.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-10 h-14 text-lg font-bold">
                    Démarrer mon projet
                  </Button>
                </Link>
                <Link href="/ressources/simulateur-visa">
                  <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-10 h-14 text-lg font-bold">
                    Simulateur de visa
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
