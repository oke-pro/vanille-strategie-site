import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { companyTypes, founder } from "@/data/site";
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
  ChevronRight,
  Zap
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
        <div className="absolute inset-0 transition-transform duration-10000 group-hover:scale-110">
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
          <div className="max-w-3xl animate-[fadeSlideUp_0.8s_ease-out]">
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
                className="group flex flex-col rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden animate-[fadeSlideUp_0.8s_ease-out_both]"
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
                        <div className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors`}>
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
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-[fadeSlideUp_0.8s_ease-out]">
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

            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 animate-[fadeSlideUp_0.8s_ease-out_0.2s_both]">
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

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="relative rounded-3xl bg-slate-900 p-8 md:p-16 overflow-hidden shadow-2xl">
            {/* Background image overlay */}
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
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-10 h-14 text-lg font-bold border-none">
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
