import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { companyTypes, founder } from "@/data/site";
import { TrustBadges } from "@/components/sections/trust-badges";
import {
  Building2,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  FileText,
  CreditCard,
  MapPin,
  Scale,
  Users,
  ArrowRight,
  Zap,
  Clock,
  HelpCircle,
  Award,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Création de société à Maurice — Domestic, GBC, Authorised Company",
  description: "Constitution en 3 jours, tarifs tout compris, 3 structures juridiques possibles. Analyse fiscale par un Expert-Comptable diplômé.",
};

export default function CreationSocietePage() {
  const gradients = [
    "from-blue-600 to-indigo-600",
    "from-emerald-600 to-teal-600",
    "from-purple-600 to-violet-600",
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[60vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/nature-paradis.jpg"
            alt="Création société Maurice"
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
              Créez votre société <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">à l&apos;Île Maurice</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Domestic Company, GBC ou Authorised Company — nous recommandons la structure optimale et gérons l&apos;ensemble de la constitution en 72h.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                  Démarrer mon projet
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-white/80 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <Zap className="h-5 w-5 text-amber-400" />
                <span className="text-sm font-medium italic">Constitution en 3 jours ouvrés</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Company Types Grid */}
      <section className="bg-white py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">3 structures juridiques possibles</h2>
              <p className="mt-4 text-lg text-slate-600">
                Chaque structure répond à un besoin spécifique : activité locale, trading international ou détention d&apos;actifs passifs.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-bold border border-slate-200">
              <ShieldCheck className="h-4 w-4 text-blue-500" />
              <span>Mis à jour — Finance Act 2025</span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {companyTypes.map((c, idx) => (
              <div
                key={c.shortName}
                className="group flex flex-col rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${gradients[idx % gradients.length]}`} />
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${gradients[idx % gradients.length]} px-3 py-1.5 text-xs font-black text-white uppercase tracking-widest`}>
                      {c.shortName}
                    </span>
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Taxe effective</p>
                      <p className="text-2xl font-black text-slate-900 leading-none mt-1">{c.taxRate}</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{c.type}</h3>
                  <p className="mt-3 text-sm text-slate-600 font-medium leading-relaxed italic">{c.idealFor}</p>

                  <div className="mt-8 space-y-4 flex-1">
                    {c.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-3">
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-3 transition-all">
                      En savoir plus <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All-Inclusive Services */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
                Prestations <br />
                <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">tout compris</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Plus qu&apos;un simple enregistrement, nous livrons une structure opérationnelle, bancarisée et conforme aux standards internationaux.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-slate-900 hover:bg-black text-white px-8 h-12">
                    Recevoir les tarifs
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
              {[
                { text: "Rédaction des statuts", icon: FileText },
                { text: "Frais de constitution", icon: Building2 },
                { text: "Domiciliation professionnelle", icon: MapPin },
                { text: "Compte bancaire multi-devises", icon: CreditCard },
                { text: "Carte de crédit internationale", icon: CreditCard },
                { text: "Administrateur résident", icon: Users },
                { text: "Analyse fiscale Expert-Comptable", icon: Globe2 },
                { text: "Conseil juridique (contrats types)", icon: Scale },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-blue-100 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 leading-tight">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 p-6 rounded-2xl bg-blue-50/50 border border-blue-100/50 text-center max-w-4xl mx-auto">
            <p className="text-xs text-slate-500 italic leading-relaxed">
              * Les démarches légales liées à la constitution des sociétés internationales sont réalisées par nos partenaires mauriciens dûment agréés par la Financial Services Commission (FSC) of Mauritius. BD Star Management Services est membre du Mauritius Institute of Professional Accountants (MIPA).
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PILLAR CONTENT — Processus de création étape par étape */}
      {/* ================================================================ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Processus de création étape par étape
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              De la première consultation à l&apos;obtention de votre BRN, chaque étape est pilotée par notre équipe.
              Voici le parcours complet pour créer votre société à Maurice, que ce soit une Domestic Company, une GBC ou une Authorised Company.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-300 to-slate-200 hidden lg:block" />

            <div className="space-y-12 lg:space-y-16">
              <div className="relative lg:pl-24">
                <div className="absolute left-5 top-1 hidden lg:flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-black ring-4 ring-white">1</div>
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900">Consultation initiale et choix de la structure</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Tout commence par un entretien approfondi avec Didier Laroussinie, Expert-Comptable diplômé et fiscaliste international. Lors de cette consultation, nous analysons votre activité, votre résidence fiscale, vos marchés cibles et vos objectifs patrimoniaux pour déterminer la structure juridique la plus adaptée.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Nous étudions en détail les implications de chaque option : Domestic Company pour une activité locale ou e-commerce, Global Business Company (GBC) pour du trading international avec accès aux conventions fiscales, ou Authorised Company pour la détention d&apos;actifs passifs ou les structures intra-groupe.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      <Clock className="h-3 w-3" /> 1-2 jours
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
                    <Scale className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900">Collecte des documents et KYC</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Nous vous transmettons une checklist personnalisée des documents requis. La procédure de Know Your Customer (KYC) est une exigence réglementaire stricte à Maurice, imposée par la Financial Services Commission (FSC) et le Companies and Business Registration Department (CBRD).
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-6">
                    <div className="rounded-xl bg-slate-50 p-4">
                      <h4 className="font-bold text-slate-900 text-sm mb-2">Documents d&apos;identité</h4>
                      <ul className="space-y-1.5 text-sm text-slate-600">
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" /> Passeport certifié conforme</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" /> Justificatif de domicile de moins de 3 mois</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" /> CV professionnel détaillé</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" /> Références bancaires (lettres de banque)</li>
                      </ul>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-4">
                      <h4 className="font-bold text-slate-900 text-sm mb-2">Documents société</h4>
                      <ul className="space-y-1.5 text-sm text-slate-600">
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" /> Description détaillée de l&apos;activité</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" /> Business plan (requis pour GBC)</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" /> Organigramme du groupe le cas échéant</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" /> Source des fonds documentée</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative lg:pl-24">
                <div className="absolute left-5 top-1 hidden lg:flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-black ring-4 ring-white">3</div>
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900">Dépôt auprès du CBRD et enregistrement</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Une fois les documents validés par notre équipe compliance, nous procédons au dépôt du dossier de constitution auprès du Companies and Business Registration Department (CBRD). Cette étape inclut la réservation du nom de société, la rédaction et le dépôt des statuts (Constitution), la nomination des administrateurs et du secrétaire de société.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Pour une Domestic Company, l&apos;enregistrement est généralement effectif sous 24 à 48 heures. Pour une GBC, le CBRD intervient après l&apos;approbation de la FSC, ce qui allonge le processus à 3-4 semaines en moyenne.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      <Clock className="h-3 w-3" /> DC : 24-48h
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                      <Clock className="h-3 w-3" /> GBC : 3-4 semaines
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative lg:pl-24">
                <div className="absolute left-5 top-1 hidden lg:flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-black ring-4 ring-white">4</div>
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900">Obtention du BRN et enregistrement MRA</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Le Business Registration Number (BRN) est l&apos;identifiant fiscal unique de votre société à Maurice. Il est attribué automatiquement lors de l&apos;enregistrement au CBRD. Nous procédons ensuite à l&apos;enregistrement auprès de la Mauritius Revenue Authority (MRA) pour la TVA (si le chiffre d&apos;affaires dépasse MUR 6 millions/an) et l&apos;impôt sur les sociétés.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Pour les GBC, cette étape intervient après l&apos;obtention de la licence FSC. Nous préparons également la documentation pour le Tax Residence Certificate (TRC) qui permet l&apos;accès au réseau de 47 conventions fiscales de Maurice.
                  </p>
                </div>
              </div>

              <div className="relative lg:pl-24">
                <div className="absolute left-5 top-1 hidden lg:flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-black ring-4 ring-white">5</div>
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <CreditCard className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900">Ouverture du compte bancaire multi-devises</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    L&apos;ouverture de compte bancaire à Maurice est une étape cruciale que nous pilotons intégralement. Nous travaillons avec les principales banques de la place : AfrAsia Bank, MCB (Mauritius Commercial Bank), SBM (State Bank of Mauritius), et HSBC Mauritius.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Chaque banque a ses propres exigences KYC et ses délais. En moyenne, comptez 2 à 4 semaines pour l&apos;ouverture effective du compte. Nous négocions les conditions (frais, accès multi-devises USD/EUR/GBP/MUR, Internet banking, cartes de crédit internationales) et vous accompagnons physiquement au rendez-vous d&apos;ouverture si vous êtes présent à Maurice.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                    {["AfrAsia Bank", "MCB", "SBM", "HSBC"].map((bank) => (
                      <div key={bank} className="text-center rounded-xl bg-slate-50 p-3">
                        <p className="text-sm font-bold text-slate-700">{bank}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative lg:pl-24">
                <div className="absolute left-5 top-1 hidden lg:flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-black ring-4 ring-white">6</div>
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe2 className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900">Licence FSC (GBC uniquement)</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Si vous optez pour une Global Business Company (GBC), une étape supplémentaire est requise : l&apos;obtention de la licence de la Financial Services Commission (FSC). Cette licence atteste que votre société est autorisée à exercer des activités de Global Business depuis Maurice.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Le dossier FSC exige un business plan détaillé, la démonstration de la substance économique à Maurice (bureaux, employés, direction effective), et la nomination d&apos;un Management Company agréé. Notre partenaire BD Star Management Services, inscrit au MIPA, assure ce rôle et garantit la conformité continue de votre licence.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Depuis le Finance Act 2023, les critères de substance ont été significativement renforcés. Les GBC doivent démontrer une direction et un contrôle effectifs depuis Maurice, avec des réunions du conseil d&apos;administration tenues physiquement sur le territoire, des employés qualifiés sur place et des dépenses opérationnelles réelles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PILLAR CONTENT — Comparatif détaillé des 3 structures */}
      {/* ================================================================ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Comparatif détaillé des 3 structures juridiques
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Domestic Company, Global Business Company et Authorised Company : chaque structure présente des avantages et contraintes spécifiques. Ce tableau comparatif mis à jour Finance Act 2025 vous aide à faire le bon choix.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 font-bold text-slate-900 min-w-[180px]">Critère</th>
                  <th className="p-4 font-bold text-blue-600 min-w-[200px]">
                    <span className="inline-flex items-center gap-2">
                      <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-black text-blue-700">DC</span>
                      Domestic Company
                    </span>
                  </th>
                  <th className="p-4 font-bold text-emerald-600 min-w-[200px]">
                    <span className="inline-flex items-center gap-2">
                      <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-black text-emerald-700">GBC</span>
                      Global Business Company
                    </span>
                  </th>
                  <th className="p-4 font-bold text-purple-600 min-w-[200px]">
                    <span className="inline-flex items-center gap-2">
                      <span className="rounded bg-purple-100 px-2 py-0.5 text-xs font-black text-purple-700">AC</span>
                      Authorised Company
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">Cadre réglementaire</td>
                  <td className="p-4 text-slate-600">Companies Act 2001</td>
                  <td className="p-4 text-slate-600">Companies Act 2001 + Financial Services Act 2007</td>
                  <td className="p-4 text-slate-600">Companies Act 2001 (Part V)</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">Capital minimum</td>
                  <td className="p-4 text-slate-600">Aucun (1 MUR suffit)</td>
                  <td className="p-4 text-slate-600">Aucun minimum légal, mais la FSC attend un capital cohérent avec l&apos;activité</td>
                  <td className="p-4 text-slate-600">Aucun minimum légal</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">Nombre de directeurs</td>
                  <td className="p-4 text-slate-600">Minimum 1 (pas de résidence obligatoire)</td>
                  <td className="p-4 text-slate-600">Minimum 2 dont 1 résident mauricien qualifié</td>
                  <td className="p-4 text-slate-600">Minimum 1 (pas de résidence obligatoire)</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">Secrétaire de société</td>
                  <td className="p-4 text-slate-600">Obligatoire (personne physique ou morale)</td>
                  <td className="p-4 text-slate-600">Obligatoire — Management Company agréée FSC</td>
                  <td className="p-4 text-slate-600">Non obligatoire</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">Audit annuel</td>
                  <td className="p-4 text-slate-600">Obligatoire si CA &gt; MUR 50M ou actifs &gt; MUR 100M</td>
                  <td className="p-4 text-slate-600">Obligatoire chaque année sans exception</td>
                  <td className="p-4 text-slate-600">Non obligatoire</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">Substance économique</td>
                  <td className="p-4 text-slate-600">Standard — bureaux et activité locale</td>
                  <td className="p-4 text-slate-600">Stricte — bureaux, employés qualifiés, direction effective depuis Maurice, réunions physiques du Board</td>
                  <td className="p-4 text-slate-600">Minimale — pas d&apos;exigence renforcée</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">Taux d&apos;IS effectif</td>
                  <td className="p-4">
                    <span className="font-bold text-blue-600">15%</span>
                    <span className="block text-xs text-slate-500 mt-1">Taux nominal, pas de Partial Exemption</span>
                  </td>
                  <td className="p-4">
                    <span className="font-bold text-emerald-600">3%</span>
                    <span className="block text-xs text-slate-500 mt-1">15% - 80% Partial Exemption = 3% effectif</span>
                  </td>
                  <td className="p-4">
                    <span className="font-bold text-purple-600">0%</span>
                    <span className="block text-xs text-slate-500 mt-1">Exonérée si aucun revenu source Maurice</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">Accès conventions fiscales</td>
                  <td className="p-4 text-slate-600">Non</td>
                  <td className="p-4 text-slate-600">Oui — 47 traités dont France, Inde, Afrique du Sud, Chine, UK, Singapour</td>
                  <td className="p-4 text-slate-600">Non</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">Délai de constitution</td>
                  <td className="p-4 text-slate-600">3-5 jours ouvrés</td>
                  <td className="p-4 text-slate-600">3-6 semaines (approbation FSC)</td>
                  <td className="p-4 text-slate-600">3-5 jours ouvrés</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">Activités autorisées</td>
                  <td className="p-4 text-slate-600">Marché local et régional, e-commerce, services</td>
                  <td className="p-4 text-slate-600">Trading international, services, holding, investissement, management</td>
                  <td className="p-4 text-slate-600">Détention d&apos;actifs passifs, IP holding, structures intra-groupe</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-900">Idéal pour</td>
                  <td className="p-4 text-slate-600">Entrepreneurs individuels, freelances, activités locales, e-commerce</td>
                  <td className="p-4 text-slate-600">Groupes internationaux, trading, consulting cross-border, holding</td>
                  <td className="p-4 text-slate-600">Family offices, véhicules d&apos;investissement, IP holding</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-blue-50 border border-blue-100">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-slate-900 text-sm">Point important — Partial Exemption (PE)</p>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  Le régime de Partial Exemption de 80% n&apos;est pas automatique pour les GBC. Il est soumis à des conditions de substance économique strictes : la société doit être effectivement gérée et contrôlée depuis Maurice, employer du personnel qualifié sur place et engager des dépenses opérationnelles proportionnelles à ses revenus. Le Finance Act 2025 a renforcé ces exigences avec l&apos;introduction de la Fair Share Contribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PILLAR CONTENT — Finance Act 2025 : ce qui change */}
      {/* ================================================================ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-bold text-amber-800 mb-6">
                  <AlertTriangle className="h-4 w-4" /> Mis à jour 2025
                </span>
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl leading-tight">
                  Finance Act 2025 : ce qui change pour votre société
                </h2>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                  Le budget 2025-2026 de Maurice a introduit des modifications significatives pour les entreprises internationales. Voici les points clés à connaître avant de vous implanter.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-8">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Fair Share Contribution (FSC)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Introduite en réponse au cadre GloBE de l&apos;OCDE (Pilier 2), la Fair Share Contribution vise à garantir un taux d&apos;imposition effectif minimum pour les entreprises bénéficiant du régime de Partial Exemption. Concrètement, les GBC dont le groupe consolidé dépasse un chiffre d&apos;affaires annuel de EUR 750 millions devront s&apos;acquitter d&apos;une contribution complémentaire pour atteindre un taux effectif de 15%.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Pour les PME et les groupes en dessous de ce seuil, le régime de Partial Exemption à 80% reste pleinement applicable, maintenant un taux effectif de 3%. Cette mesure positionne Maurice en conformité avec les standards internationaux tout en préservant l&apos;attractivité pour les entreprises de taille intermédiaire.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Qualified Domestic Minimum Top-up Tax (QDMTT)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  En complément de la FSC, Maurice a introduit le mécanisme QDMTT aligné sur le Pilier 2 de l&apos;OCDE. Ce mécanisme permet à Maurice de percevoir elle-même la taxation complémentaire, plutôt que de laisser cette taxation aux juridictions des sociétés mères. C&apos;est une approche proactive qui protège les recettes fiscales mauriciennes tout en offrant de la prévisibilité aux investisseurs.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  En pratique, cela signifie que les grands groupes internationaux implantés à Maurice via une GBC devront calculer leur taux effectif d&apos;imposition selon les règles GloBE et, le cas échéant, acquitter la différence auprès de la MRA. Notre cabinet assure ce calcul complexe et les déclarations associées.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Substance Requirements renforcés</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Les critères de substance économique ont été progressivement durcis depuis 2019 et le Finance Act 2025 continue cette tendance. Pour bénéficier de la Partial Exemption et des conventions fiscales, une GBC doit désormais démontrer de manière convaincante que :
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-500 shrink-0" />
                    <span>Les décisions stratégiques et de gestion courante sont prises à Maurice par des personnes compétentes résidant sur le territoire</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-500 shrink-0" />
                    <span>Les réunions du conseil d&apos;administration se tiennent physiquement à Maurice avec une fréquence suffisante (minimum 2 par an recommandé)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-500 shrink-0" />
                    <span>La société emploie du personnel qualifié à temps plein et dispose de locaux professionnels adaptés</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-500 shrink-0" />
                    <span>Les dépenses opérationnelles engagées à Maurice sont proportionnelles au volume d&apos;activité et aux revenus générés</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-blue-500 shrink-0" />
                    <span>Les comptes bancaires sont activement opérés depuis Maurice avec des signataires résidents</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Transfer Pricing : nouvelles obligations</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Le Finance Act 2025 a élargi les obligations en matière de prix de transfert. Toute entreprise réalisant des transactions avec des parties liées dépassant MUR 20 millions par an doit désormais préparer une documentation de prix de transfert conforme aux standards BEPS de l&apos;OCDE (Master File, Local File, CbCR le cas échéant).
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Notre cabinet, sous la supervision de Didier Laroussinie, prépare cette documentation en appliquant les méthodologies reconnues (CUP, TNMM, Profit Split) et veille à la cohérence globale des prix de transfert au sein de votre groupe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PILLAR CONTENT — FAQ création de société */}
      {/* ================================================================ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Questions fréquentes — Création de société à Maurice
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Les réponses de notre Expert-Comptable aux questions les plus posées par nos clients.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Faut-il être résident à Maurice pour créer une société ?",
                a: "Non, il n\u2019est pas nécessaire d\u2019être résident mauricien pour créer une Domestic Company ou une Authorised Company. En revanche, pour une Global Business Company (GBC), au moins un directeur doit être résident fiscal mauricien. Nous fournissons ce directeur résident qualifié dans le cadre de notre prestation tout compris. Si vous souhaitez vous-même résider à Maurice, nous pouvons coupler la création de société avec une demande de permis de résidence (Occupation Permit Investor ou Self-Employed)."
              },
              {
                q: "Quel est le délai réel pour avoir une société opérationnelle ?",
                a: "Pour une Domestic Company, comptez 5 à 10 jours ouvrés entre la signature du mandat et l\u2019ouverture effective du compte bancaire. La constitution elle-même prend 2-3 jours, mais l\u2019ouverture de compte bancaire représente le goulot d\u2019étranglement. Pour une GBC, le délai total est de 4 à 8 semaines, principalement en raison de l\u2019approbation FSC (3-4 semaines) et de l\u2019ouverture de compte (2-3 semaines supplémentaires). Nous travaillons en parallèle sur les différentes étapes pour réduire ces délais au maximum."
              },
              {
                q: "Quels sont les coûts annuels de maintenance d\u2019une société ?",
                a: "Les coûts récurrents incluent : les frais de renouvellement au CBRD (environ MUR 3 500/an pour une DC), les frais de Management Company pour une GBC (variable selon le prestataire, généralement entre USD 3 000 et 8 000/an), les frais de domiciliation (USD 1 200-3 000/an), les honoraires comptables et d\u2019audit (variable selon le volume de transactions), et les frais d\u2019administrateur résident si applicable. Nous fournissons un devis détaillé et transparent lors de notre proposition initiale."
              },
              {
                q: "Ma société mauricienne peut-elle facturer des clients français ?",
                a: "Oui, absolument. Une société mauricienne (DC ou GBC) peut facturer des clients dans le monde entier, y compris en France. Pour une GBC bénéficiant de la convention fiscale France-Maurice, les revenus de services ne sont imposés qu\u2019à Maurice (3% effectif avec Partial Exemption) à condition que la société ne dispose pas d\u2019un établissement stable en France. Il est crucial de bien structurer la relation commerciale et de respecter les règles de substance pour éviter toute requalification par l\u2019administration fiscale française."
              },
              {
                q: "Quelle est la différence entre Authorised Company et GBC ?",
                a: "L\u2019Authorised Company (AC) est une structure simplifiée destinée à détenir des actifs passifs (participations, IP, immobilier hors Maurice) sans activité commerciale active. Elle n\u2019a pas accès aux conventions fiscales et n\u2019est pas soumise à l\u2019impôt mauricien sur ses revenus de source étrangère. La GBC est une structure plus élaborée, régulée par la FSC, qui permet une activité commerciale active à l\u2019international avec accès aux 47 conventions fiscales de Maurice. Le choix dépend de votre modèle d\u2019affaires : détention passive = AC ; activité commerciale = GBC."
              },
              {
                q: "Comment fonctionne la Partial Exemption de 80% ?",
                a: "La Partial Exemption permet à une GBC de bénéficier d\u2019un crédit d\u2019impôt présumé de 80% sur certains revenus de source étrangère. Concrètement, sur un bénéfice imposable de 100, l\u2019IS de 15% s\u2019applique sur 100 (soit 15), mais un crédit de 80% de 15 (soit 12) est accordé, ramenant l\u2019IS effectif à 3. Ce régime s\u2019applique aux dividendes étrangers, aux revenus de services rendus à des non-résidents, aux intérêts de source étrangère et aux revenus de propriété intellectuelle. Les conditions de substance doivent être strictement respectées."
              },
              {
                q: "Maurice est-elle sur une liste noire ou grise de l\u2019UE ?",
                a: "Non. Maurice a été retirée de la liste grise de l\u2019UE en octobre 2021 et n\u2019a jamais figuré sur la liste noire. Maurice est également sortie de la liste grise du GAFI en février 2022, attestant de la conformité de son cadre anti-blanchiment et de financement du terrorisme. Le pays est reconnu comme une juridiction coopérative par l\u2019OCDE et dispose d\u2019un cadre réglementaire solide supervisé par la FSC, la Bank of Mauritius et la FIU (Financial Intelligence Unit)."
              },
              {
                q: "Peut-on créer une société à Maurice à distance ?",
                a: "Oui, la totalité du processus de constitution peut être réalisée à distance. Les documents peuvent être signés électroniquement ou envoyés par courrier certifié. Seule l\u2019ouverture de compte bancaire peut nécessiter un déplacement physique à Maurice, bien que certaines banques (AfrAsia notamment) acceptent l\u2019ouverture à distance sous conditions. Nous recommandons néanmoins un passage à Maurice d\u2019au moins 2-3 jours pour rencontrer notre équipe, visiter les locaux et finaliser l\u2019ouverture de compte."
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
      {/* PILLAR CONTENT — Pourquoi Vanille Stratégie */}
      {/* ================================================================ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl leading-tight">
                Pourquoi choisir <span className="text-blue-600">Vanille Stratégie</span> pour votre implantation ?
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Depuis 2012, Vanille Stratégie est le partenaire de référence des entrepreneurs francophones pour leur implantation à Maurice. Notre approche intégrée — conseil fiscal, constitution juridique et comptabilité — nous distingue des simples agents de formation de sociétés.
              </p>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Notre fondateur Didier Laroussinie est Expert-Comptable diplômé (DEC) et fiscaliste international avec plus de 40 ans d&apos;expérience, dont un parcours en Big Four chez Deloitte. Cette expertise de premier plan se traduit dans chaque dossier que nous traitons.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">14 ans d&apos;expérience à Maurice</h3>
                    <p className="mt-1 text-sm text-slate-600">Présents depuis 2012, nous connaissons chaque rouage administratif, chaque interlocuteur clé au CBRD, à la FSC et dans les banques locales.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Taux d&apos;approbation de 95%+</h3>
                    <p className="mt-1 text-sm text-slate-600">Nos dossiers sont minutieusement préparés en amont, ce qui nous permet d&apos;afficher un taux d&apos;approbation parmi les plus élevés du marché, tant pour les licences FSC que pour les ouvertures de comptes bancaires.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Zéro sous-traitance</h3>
                    <p className="mt-1 text-sm text-slate-600">Contrairement à de nombreux prestataires qui sous-traitent à des tiers, nous gérons l&apos;intégralité du processus en interne, de la consultation initiale à la comptabilité récurrente, via notre cabinet BD Star Management Services.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                    <Globe2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Accompagnement post-création</h3>
                    <p className="mt-1 text-sm text-slate-600">La création n&apos;est que le début. Nous assurons la comptabilité, les déclarations fiscales, la conformité réglementaire et le pilotage financier en temps réel via notre dashboard OKE. Un interlocuteur unique pour toute la vie de votre société.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "300+", label: "Sociétés créées depuis 2012" },
                { value: "95%+", label: "Taux d\u2019approbation FSC" },
                { value: "72h", label: "Constitution DC moyenne" },
                { value: "47", label: "Conventions fiscales accessibles (GBC)" },
                { value: "0%", label: "Impôt sur les dividendes" },
                { value: "24/7", label: "Dashboard OKE temps réel" },
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

      {/* Articles liés */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-slate-900">Articles liés</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { href: "/ressources/blog/substance-requirements-maurice", title: "Substance Requirements", desc: "Critères de substance économique pour les sociétés GBC à Maurice." },
              { href: "/ressources/blog/edb-mauritius-role-programmes", title: "EDB Mauritius", desc: "Rôle et programmes de l'Economic Development Board pour les investisseurs." },
              { href: "/ressources/blog/ouvrir-compte-bancaire-maurice-guide", title: "Ouvrir un compte bancaire", desc: "Guide pratique pour l'ouverture de compte AfrAsia, MCB ou SBM." },
            ].map((a) => (
              <Link key={a.href} href={a.href}>
                <div className="group rounded-xl border bg-white p-4 transition-all hover:shadow-md hover:border-blue-300">
                  <h4 className="font-bold text-slate-900 group-hover:text-blue-600">{a.title}</h4>
                  <p className="mt-1 text-sm text-slate-500">{a.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="relative rounded-3xl bg-slate-900 p-8 md:p-16 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-20 group">
              <Image
                src="/images/bureau-moderne.jpg"
                alt="Business environment"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-slate-900/95" />

            <div className="relative text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Quelle structure pour vous ?</h2>
              <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Obtenez une analyse personnalisée et gratuite par {founder.name}, Expert-Comptable Fiscaliste.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 h-14 text-lg font-bold border-none">
                    Obtenir mon analyse
                  </Button>
                </Link>
                <Link href="/didier-laroussinie">
                  <Button size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm px-10 h-14 text-lg font-bold">
                    Notre expertise
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
