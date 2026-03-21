import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { companyTypes, permits, founder } from "@/data/site";
import {
  ShieldCheck,
  Globe2,
  CheckCircle2,
  Zap,
  FileText,
  CreditCard,
  MapPin,
  Users,
  Activity,
  ArrowRight,
  TrendingUp,
  Briefcase,
  Laptop,
  Clock
} from "lucide-react";

export const metadata: Metadata = {
  title: "Entrepreneur — Créer ou délocaliser votre société à Maurice",
  description:
    "Domestic Company, GBC ou Authorised Company ? Vanille Stratégie vous guide vers la structure optimale et gère tout : statuts, permis, banque, comptabilité.",
};

export default function EntrepreneurPage() {
  const investorPermits = permits.filter(
    (p) => p.type.includes("Investor") || p.type.includes("Self-Employed")
  );

  const gradients = [
    "from-blue-600 to-indigo-600",
    "from-emerald-600 to-teal-600",
    "from-purple-600 to-violet-600",
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="group relative min-h-[70vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 transition-transform duration-10000 group-hover:scale-110">
          <Image
            src="/images/entrepreneur-maurice.jpg"
            alt="Entrepreneur à Maurice"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-500" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl animate-[fadeSlideUp_0.8s_ease-out]">
            <p className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-blue-300 backdrop-blur-sm">
              Parcours Entrepreneur — Vanille Stratégie
            </p>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-7xl leading-[1.1]">
              Propulsez votre business <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">à l&apos;Île Maurice</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              De la structure juridique au premier bilan — un Expert-Comptable Fiscaliste International avec 40 ans d&apos;expérience pilote votre implantation de A à Z.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 h-14 text-lg font-bold shadow-lg shadow-blue-500/20">
                  Étude de faisabilité gratuite
                </Button>
              </Link>
              <Link href="#structures">
                <Button size="lg" variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 h-14 text-lg font-bold">
                  Voir les structures
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />

      {/* Company Structures */}
      <section id="structures" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Quelle structure pour vous ?</h2>
            <p className="mt-4 text-lg text-slate-600">
              Le choix de votre véhicule juridique est la fondation de votre projet. Nous analysons votre profil pour déterminer l&apos;option optimale.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {companyTypes.map((c, idx) => (
              <Card
                key={c.shortName}
                className="group relative flex flex-col overflow-hidden border-none shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-[fadeSlideUp_0.8s_ease-out_both]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-br ${gradients[idx % gradients.length]} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  <div className="relative flex items-center justify-between mb-4">
                    <span className="rounded-xl bg-white/20 px-3 py-1 text-xs font-black uppercase tracking-widest backdrop-blur-md border border-white/20">
                      {c.shortName}
                    </span>
                    <TrendingUp className="h-5 w-5 opacity-60" />
                  </div>
                  <h3 className="relative text-2xl font-bold mb-1">{c.type}</h3>
                  <div className="relative mt-4">
                    <p className="text-4xl font-black leading-none">{c.taxRate}</p>
                    <p className="text-xs font-bold text-white/70 uppercase tracking-tighter mt-1">Impôt sur les sociétés</p>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-8 bg-white">
                  <p className="text-sm font-bold text-slate-900 leading-relaxed italic mb-6">
                    &quot;{c.idealFor}&quot;
                  </p>
                  <ul className="flex-1 space-y-4">
                    {c.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 group/item">
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 group-hover/item:bg-blue-50 group-hover/item:text-blue-600 transition-colors">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-sm font-medium text-slate-600">{h}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t border-slate-50 flex flex-wrap gap-y-2 gap-x-4">
                    <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-slate-400">
                      <Globe2 className="h-3 w-3" />
                      <span>Résident : {c.taxResident ? "OUI" : "NON"}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-slate-400">
                      <ShieldCheck className="h-3 w-3" />
                      <span>Traités : {c.treatyAccess ? "37 PAYS" : "NON"}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <p className="text-xs text-slate-500 font-medium">
              Mis à jour mars 2026 — Finance Act 2025 · Sources officielles :{" "}
              <a href="https://edbmauritius.org" target="_blank" className="text-blue-600 hover:underline font-bold">EDB</a>,{" "}
              <a href="https://www.fscmauritius.org" target="_blank" className="text-blue-600 hover:underline font-bold ml-2">FSC Mauritius</a>,{" "}
              <a href="https://www.mra.mu" target="_blank" className="text-blue-600 hover:underline font-bold ml-2">MRA</a>
            </p>
          </div>
        </div>
      </section>

      {/* Permits Grid */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Quel permis pour vous ?</h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                L&apos;Occupation Permit (OP) est votre sésame pour vivre et travailler à Maurice. Nous identifions la catégorie la plus agile pour votre projet.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-amber-600 text-sm font-bold border border-amber-100 shadow-sm animate-pulse">
              <ShieldCheck className="h-4 w-4" />
              <span>Guidelines EDB du 19 août 2025</span>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {investorPermits.map((p, idx) => (
              <Card 
                key={p.type} 
                className="p-8 transition-all duration-300 hover:shadow-xl border-none bg-white animate-[fadeSlideUp_0.8s_ease-out_both]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-6">
                  {p.type.includes("Investor") ? <TrendingUp className="h-6 w-6" /> : <Laptop className="h-6 w-6" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{p.type}</h3>
                <p className="mt-1 text-sm font-bold text-blue-600 uppercase tracking-widest">{p.target}</p>
                
                <div className="mt-8 space-y-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Investissement</span>
                    <span className="text-sm font-bold text-slate-900">{p.investment}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Validité</span>
                    <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-blue-500" />
                      {p.duration}
                    </span>
                  </div>
                </div>

                {p.renewal.includes("NOUVEAU") && (
                  <div className="mt-6 p-3 rounded-xl bg-amber-50 border border-amber-100/50">
                    <p className="text-xs font-black text-amber-700 uppercase leading-tight tracking-tight">
                      {p.renewal}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="animate-[fadeSlideUp_0.8s_ease-out]">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
                L&apos;accompagnement <br />
                <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">zéro sous-traitance</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Contrairement aux agents classiques, nous sommes votre Expert-Comptable ET votre conseil en implantation. Un seul interlocuteur pour tout votre business.
              </p>
              
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  { text: "Constitution & Statuts", icon: FileText },
                  { text: "Domiciliation Pro", icon: MapPin },
                  { text: "Comptes Bancaires", icon: CreditCard },
                  { text: "Administrateurs Résidents", icon: Users },
                  { text: "Audit Fiscal Expert", icon: ShieldCheck },
                  { text: "Obtention Permis (EDB)", icon: Globe2 },
                  { text: "Compta Normes IFRS", icon: Activity },
                  { text: "Dashboard OKE inclus", icon: Zap },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 transition-colors hover:bg-white hover:shadow-md group">
                    <item.icon className="h-4 w-4 text-blue-500 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold text-slate-700 leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center gap-2 font-black text-blue-600 uppercase tracking-widest text-sm hover:gap-4 transition-all">
                  Demander un devis détaillé <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden rounded-3xl shadow-2xl animate-[fadeSlideUp_0.8s_ease-out_0.2s_both]">
              <Image
                src="/images/grand-baie.jpg"
                alt="Grand Baie, Maurice"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                <p className="text-white font-medium text-lg italic leading-relaxed">
                  &quot;Un accompagnement de tous les jours, un gain de temps qui nous a permis d&apos;être opérationnels très rapidement.&quot;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xs">LG</div>
                  <div>
                    <p className="text-white text-sm font-bold">Laetitia Girard</p>
                    <p className="text-white/70 text-xs">DG, Mahoe.jobs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles liés */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Approfondir votre projet</h2>
          <p className="mt-2 text-slate-600">Nos guides experts pour les entrepreneurs à Maurice.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: "/ressources/blog/transfer-pricing-maurice-2025", title: "Transfer Pricing à Maurice", desc: "Nouvelles obligations du Finance Act 2025 pour les groupes internationaux.", badge: "Fiscalité" },
              { href: "/ressources/blog/substance-requirements-maurice", title: "Substance Requirements", desc: "Ce que l'EDB et la FSC attendent vraiment de votre GBC.", badge: "Conformité" },
              { href: "/ressources/blog/ouvrir-compte-bancaire-maurice-guide", title: "Ouvrir un compte bancaire", desc: "AfrAsia vs MCB vs SBM — le guide complet pour les entrepreneurs.", badge: "Pratique" },
              { href: "/ressources/blog/paiements-en-ligne-maurice-stripe-alternatives", title: "Paiements en ligne", desc: "Stripe, MIPS, PayPal — toutes les options pour collecter vos paiements.", badge: "Digital" },
              { href: "/ressources/blog/droit-travail-maurice-workers-rights-act", title: "Droit du travail", desc: "Workers' Rights Act, salaires, charges — embaucher en toute conformité.", badge: "RH" },
              { href: "/ressources/blog/edb-mauritius-role-programmes", title: "L'EDB, votre partenaire", desc: "Programmes d'accompagnement, grants et Freeport.", badge: "Institutions" },
            ].map((article) => (
              <Link key={article.href} href={article.href}>
                <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-300/50 overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 px-3 py-1 text-xs font-bold text-blue-700 shadow-sm">
                    <FileText className="h-3 w-3" />
                    {article.badge}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-blue-600 leading-tight">{article.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{article.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-bold text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Lire l&apos;article <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/10 text-blue-500 mb-8 border border-blue-500/20">
            <Briefcase className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
            Prêt à lancer votre activité <br />
            <span className="text-blue-400">en toute sérénité ?</span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            Bénéficiez d&apos;une étude de faisabilité gratuite par {founder.name}, {founder.title}.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 hover:scale-105 px-12 h-16 text-lg font-bold shadow-2xl shadow-blue-500/20 transition-all duration-300">
                Lancer mon projet
              </Button>
            </Link>
            <Link href="/services/creation-societe">
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:scale-105 backdrop-blur-sm px-12 h-16 text-lg font-bold transition-all duration-300">
                Détails des services
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
            Réponse sous 24h ouvrées · Confidentialité Totale
          </p>
        </div>
      </section>
    </main>
  );
}
