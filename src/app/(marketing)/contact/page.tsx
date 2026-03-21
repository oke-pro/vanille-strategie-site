import { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig, founder } from "@/data/site";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Globe,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Étude de faisabilité gratuite",
  description: "Contactez Vanille Stratégie pour une étude de faisabilité gratuite sur votre projet d'implantation à Maurice. Réponse sous 24h.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/ocean-turquoise.jpg" 
          alt="Maurice" 
          fill 
          className="object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-white" />
      </div>

      <section className="relative z-10 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Formulaire */}
            <div className="lg:col-span-3 animate-[fadeSlideUp_0.8s_ease-out]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-6 border border-blue-100">
                <MessageSquare className="h-3 w-3" />
                <span>Contact Direct</span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
                Parlons de votre <br />
                <span className="text-blue-600">futur à Maurice</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 max-w-2xl">
                Bénéficiez d&apos;une étude de faisabilité gratuite et confidentielle. Nous analysons votre projet et vous répondons sous 24h ouvrées.
              </p>

              <ContactForm />
            </div>

            {/* Sidebar contact */}
            <div className="lg:col-span-2 animate-[fadeSlideUp_0.8s_ease-out_0.2s_both]">
              <div className="sticky top-24 space-y-6">
                {/* Didier card */}
                <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-110" />
                  
                  <div className="flex items-center gap-4 relative">
                    <div className="relative h-16 w-16 shrink-0 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-black text-xl shadow-lg">
                      DL
                    </div>
                    <div>
                      <p className="font-black text-slate-900 leading-none">{founder.name}</p>
                      <p className="text-xs font-bold text-blue-600 mt-1 uppercase tracking-widest">{founder.title}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-slate-600 leading-relaxed font-medium">
                    &quot;Votre projet mérite une analyse technique rigoureuse. Je supervise personnellement chaque étude de faisabilité pour garantir votre sécurité fiscale.&quot;
                  </p>
                </div>

                {/* Coordonnées */}
                <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Canaux directs</h3>
                  <div className="space-y-6">
                    <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 group">
                      <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400 leading-none">Téléphone / WhatsApp</p>
                        <p className="text-sm font-bold text-slate-900 mt-1">{siteConfig.phone}</p>
                      </div>
                    </a>
                    <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                      <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400 leading-none">Email</p>
                        <p className="text-sm font-bold text-slate-900 mt-1">{siteConfig.email}</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Bureaux */}
                <div className="rounded-3xl border border-slate-100 bg-slate-900 p-8 shadow-xl text-white">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Nos bureaux à Maurice</h3>
                  <div className="space-y-8">
                    <div className="relative pl-6 border-l-2 border-blue-600">
                      <p className="text-xs font-black uppercase tracking-widest text-blue-400">Grand Baie</p>
                      <p className="text-sm font-bold mt-1">Vanille Stratégie</p>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {siteConfig.addresses.grandBaie.line1}<br />
                        {siteConfig.addresses.grandBaie.city}, Maurice
                      </p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-slate-700">
                      <p className="text-xs font-black uppercase tracking-widest text-slate-500">Ebene Cybercity</p>
                      <p className="text-sm font-bold mt-1">BD Star Management</p>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {siteConfig.addresses.ebene.line1}<br />
                        {siteConfig.addresses.ebene.line2}<br />
                        {siteConfig.addresses.ebene.city}, Maurice
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
                    <Globe className="h-3 w-3" />
                    <span>GMT +4 · Fuseau Océan Indien</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
