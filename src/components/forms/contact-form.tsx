"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContact } from "@/lib/api";
import { trackEvent } from "@/components/analytics/google-analytics";
import { ArrowRight, ShieldCheck, Clock, CheckCircle2, Loader2 } from "lucide-react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [profil, setProfil] = useState("");
  const [rgpdAccepted, setRgpdAccepted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);
    try {
      await submitContact({
        prenom: form.get("prenom") as string,
        nom: form.get("nom") as string,
        email: form.get("email") as string,
        téléphone: (form.get("téléphone") as string) || null,
        profil,
        objet: (form.get("objet") as string) || "Demande de contact",
        message: (form.get("message") as string) || null,
      });
      setSuccess(true);
      trackEvent("form_submit", "contact", profil);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-3xl border border-emerald-100 bg-emerald-50/30 p-12 text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-500" />
        <h3 className="mt-4 text-2xl font-bold text-slate-900">Demande envoyée !</h3>
        <p className="mt-3 text-slate-600">
          Didier Laroussinie vous répondra personnellement sous 24h ouvrées.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl shadow-blue-500/5 md:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="prenom" className="text-xs font-bold uppercase tracking-widest text-slate-400">Prénom *</Label>
          <Input name="prenom" id="prenom" placeholder="Ex: Jean" className="h-12 border-slate-200 bg-slate-50/50 transition-all focus:bg-white" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="nom" className="text-xs font-bold uppercase tracking-widest text-slate-400">Nom *</Label>
          <Input name="nom" id="nom" placeholder="Ex: Dupont" className="h-12 border-slate-200 bg-slate-50/50 transition-all focus:bg-white" required />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-400">Email *</Label>
          <Input name="email" id="email" type="email" placeholder="vous@email.com" className="h-12 border-slate-200 bg-slate-50/50 transition-all focus:bg-white" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="téléphone" className="text-xs font-bold uppercase tracking-widest text-slate-400">Téléphone / WhatsApp</Label>
          <Input name="téléphone" id="téléphone" type="tel" placeholder="+33 6 ..." className="h-12 border-slate-200 bg-slate-50/50 transition-all focus:bg-white" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="profil" className="text-xs font-bold uppercase tracking-widest text-slate-400">Votre profil *</Label>
        <select
          name="profil"
          value={profil}
          onChange={(e) => setProfil(e.target.value)}
          required
          className="flex h-12 w-full rounded-md border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm transition-all focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
        >
          <option value="">Sélectionnez votre profil</option>
          <option value="entrepreneur">Entrepreneur — Créer / Délocaliser</option>
          <option value="digital-nomad">Digital Nomad / E-commerçant</option>
          <option value="retraite">Retraité — S&apos;installer à Maurice</option>
          <option value="entreprise">Entreprise — Implanter une filiale</option>
          <option value="investisseur">Investisseur immobilier</option>
          <option value="comptabilité">Comptabilité / Fiscalité</option>
          <option value="autre">Autre demande</option>
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="objet" className="text-xs font-bold uppercase tracking-widest text-slate-400">Objet *</Label>
        <Input name="objet" id="objet" placeholder="Résumez votre projet en une phrase" className="h-12 border-slate-200 bg-slate-50/50 transition-all focus:bg-white" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-400">Détails du projet</Label>
        <Textarea name="message" id="message" placeholder="Décrivez votre situation et vos objectifs..." className="min-h-[120px] border-slate-200 bg-slate-50/50 transition-all focus:bg-white" />
      </div>
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="rgpd-contact"
          checked={rgpdAccepted}
          onChange={(e) => setRgpdAccepted(e.target.checked)}
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="rgpd-contact" className="text-xs leading-relaxed text-slate-500">
          J&apos;accepte que mes données soient traitées par Vanille Stratégie pour répondre à ma demande.
          Voir notre{" "}
          <a href="/mentions-legales" className="text-blue-600 underline hover:text-blue-700">
            politique de confidentialité
          </a>.
        </label>
      </div>
      <Button type="submit" size="lg" className="group h-14 w-full bg-blue-600 text-lg font-bold shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700" disabled={loading || !rgpdAccepted}>
        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <>Envoyer ma demande <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></>}
      </Button>
      {error && <p className="rounded-xl border border-rose-100 bg-rose-50 p-4 text-center text-sm font-bold text-rose-500">{error}</p>}
      <div className="flex items-center justify-center gap-6 border-t border-slate-100 pt-6 text-xs font-bold uppercase tracking-widest text-slate-400">
        <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-blue-500" /> Confidentialité garantie</span>
        <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-blue-500" /> Réponse sous 24h</span>
      </div>
    </form>
  );
}
