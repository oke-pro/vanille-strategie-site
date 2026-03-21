import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-100">
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

              <form className="mt-12 p-8 md:p-10 rounded-3xl bg-white shadow-2xl shadow-blue-500/5 border border-slate-100 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="prenom" className="text-xs font-black uppercase tracking-widest text-slate-400">Prénom *</Label>
                    <Input id="prenom" placeholder="Ex: Jean" className="h-12 bg-slate-50/50 border-slate-200 focus:bg-white transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nom" className="text-xs font-black uppercase tracking-widest text-slate-400">Nom *</Label>
                    <Input id="nom" placeholder="Ex: Dupont" className="h-12 bg-slate-50/50 border-slate-200 focus:bg-white transition-all" required />
                  </div>
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-slate-400">Email Professionnel *</Label>
                    <Input id="email" type="email" placeholder="jean.dupont@entreprise.com" className="h-12 bg-slate-50/50 border-slate-200 focus:bg-white transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telephone" className="text-xs font-black uppercase tracking-widest text-slate-400">Téléphone / WhatsApp</Label>
                    <Input id="telephone" type="tel" placeholder="+33 6 00 00 00 00" className="h-12 bg-slate-50/50 border-slate-200 focus:bg-white transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profil" className="text-xs font-black uppercase tracking-widest text-slate-400">Votre profil *</Label>
                  <Select>
                    <SelectTrigger className="h-12 bg-slate-50/50 border-slate-200 focus:bg-white transition-all">
                      <SelectValue placeholder="Quel est votre projet ?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entrepreneur">Entrepreneur — Créer / Délocaliser</SelectItem>
                      <SelectItem value="digital-nomad">Digital Nomad / E-commerçant</SelectItem>
                      <SelectItem value="retraite">Retraité — S&apos;installer à Maurice</SelectItem>
                      <SelectItem value="entreprise">Entreprise — Implanter une filiale</SelectItem>
                      <SelectItem value="investisseur">Investisseur immobilier</SelectItem>
                      <SelectItem value="comptabilite">Expertise Comptable / Fiscalité</SelectItem>
                      <SelectItem value="autre">Autre demande</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-slate-400">Détails du projet</Label>
                  <Textarea id="message" placeholder="Décrivez brièvement votre situation et vos objectifs..." className="min-h-[150px] bg-slate-50/50 border-slate-200 focus:bg-white transition-all" />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 bg-blue-600 text-lg font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all group">
                  Envoyer ma demande <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="flex items-center justify-center gap-4 pt-4">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                    <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />
                    Confidentialité garantie
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                    <Clock className="h-3.5 w-3.5 text-blue-500" />
                    Réponse sous 24h
                  </div>
                </div>
              </form>
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
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">Téléphone / WhatsApp</p>
                        <p className="text-sm font-bold text-slate-900 mt-1">{siteConfig.phone}</p>
                      </div>
                    </a>
                    <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                      <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">Email</p>
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
                  
                  <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
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
