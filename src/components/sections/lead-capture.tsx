"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/data/site";
import { submitQuickLead } from "@/lib/api";
import { trackEvent } from "@/components/analytics/google-analytics";
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";

const budgetOptions = [
  { value: "< 50k€", label: "Moins de 50 000 €" },
  { value: "50k-100k€", label: "50 000 € — 100 000 €" },
  { value: "100k-250k€", label: "100 000 € — 250 000 €" },
  { value: "250k€+", label: "Plus de 250 000 €" },
];

const timelineOptions = [
  { value: "< 3 mois", label: "Dans les 3 prochains mois" },
  { value: "3-6 mois", label: "Dans 3 à 6 mois" },
  { value: "6-12 mois", label: "Dans 6 à 12 mois" },
  { value: "> 12 mois", label: "Je me renseigne pour plus tard" },
];

export function LeadCaptureSection() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [profil, setProfil] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [rgpdAccepted, setRgpdAccepted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);
    try {
      await submitQuickLead({
        prenom: form.get("prenom") as string,
        email: form.get("email") as string,
        telephone: (form.get("telephone") as string) || null,
        profil,
        budget,
        timeline,
      });
      setSuccess(true);
      trackEvent("form_submit", "lead_capture", `${profil}|${budget}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  }

  // Dynamic CTA based on budget
  const ctaText = budget === "250k€+"
    ? "Réserver un appel VIP avec Didier Laroussinie"
    : budget === "100k-250k€"
      ? "Obtenir ma consultation premium"
      : "Obtenir mon analyse gratuite";

  if (success) {
    const isVip = budget === "250k€+" || budget === "100k-250k€";
    return (
      <section className="bg-white py-24 sm:py-32" id="contact-rapide">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-emerald-100 bg-emerald-50/30 p-12 backdrop-blur-xl animate-[scaleIn_0.5s_ease-out]">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-200">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              {isVip ? "Demande prioritaire transmise !" : "Demande transmise !"}
            </h2>
            <p className="mt-6 text-lg text-slate-600 font-light leading-relaxed">
              {isVip
                ? "Didier Laroussinie vous contactera personnellement dans les prochaines heures pour organiser votre consultation."
                : "Didier Laroussinie a bien reçu votre message. Vous recevrez une analyse préliminaire par email sous 24h ouvrées."
              }
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button variant="outline" className="rounded-full px-8" onClick={() => { setSuccess(false); setStep(1); }}>
                Envoyer un autre message
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-amber-50/20 py-24 sm:py-32" id="contact-rapide">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[3rem] border border-white bg-white/70 p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] backdrop-blur-2xl sm:p-16">
          {/* Decorative Glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-blue-600">
              Étude de faisabilité gratuite
            </div>
            <h2 className="text-4xl font-bold tracking-tighter text-slate-950 sm:text-5xl">
              Prêt à franchir le pas ?
            </h2>
            <p className="mt-6 text-lg text-slate-600 font-light leading-relaxed">
              {step === 1
                ? "Décrivez-nous votre projet en 30 secondes."
                : "Quelques précisions pour mieux vous accompagner."
              }
            </p>
          </div>

          {/* Progress bar */}
          <div className="relative z-10 mt-8 flex justify-center gap-2">
            {[1, 2].map((s) => (
              <div
                key={s}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  s <= step ? "w-16 bg-blue-600" : "w-8 bg-slate-200"
                }`}
              />
            ))}
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 mt-10">
            {/* Step 1: Contact + Profil */}
            {step === 1 && (
              <div className="grid gap-6 sm:grid-cols-2 animate-[fadeSlideUp_0.3s_ease-out]">
                <div className="space-y-2">
                  <Label htmlFor="prenom" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Prénom</Label>
                  <Input
                    name="prenom"
                    id="prenom"
                    placeholder="Ex: Jean"
                    className="h-14 rounded-2xl border-slate-200 bg-white/50 px-6 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email professionnel</Label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="vous@exemple.com"
                    className="h-14 rounded-2xl border-slate-200 bg-white/50 px-6 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telephone" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Téléphone / WhatsApp</Label>
                  <Input
                    name="telephone"
                    id="telephone"
                    type="tel"
                    placeholder="+33 6 ..."
                    className="h-14 rounded-2xl border-slate-200 bg-white/50 px-6 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="profil" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Votre profil</Label>
                  <select
                    name="profil"
                    value={profil}
                    onChange={(e) => setProfil(e.target.value)}
                    required
                    className="flex h-14 w-full rounded-2xl border border-slate-200 bg-white/50 px-6 py-2 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                  >
                    <option value="">Sélectionnez votre profil</option>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="digital-nomad">Digital Nomad / E-commerçant</option>
                    <option value="retraite">Retraité</option>
                    <option value="entreprise">Entreprise / Filiale</option>
                    <option value="investisseur">Investisseur immobilier</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div className="sm:col-span-2 mt-4">
                  <Button
                    type="button"
                    size="lg"
                    className="h-16 w-full rounded-full bg-blue-600 text-lg font-bold shadow-2xl shadow-blue-200 hover:bg-blue-500 hover:shadow-blue-300 transition-all hover:-translate-y-1 group"
                    onClick={() => setStep(2)}
                    disabled={!profil}
                  >
                    Continuer
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Qualification */}
            {step === 2 && (
              <div className="space-y-8 animate-[fadeSlideUp_0.3s_ease-out]">
                <div className="space-y-3">
                  <Label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Budget estimé du projet</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {budgetOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setBudget(opt.value)}
                        className={`rounded-2xl border-2 p-4 text-left text-sm font-semibold transition-all ${
                          budget === opt.value
                            ? "border-blue-500 bg-blue-50 text-blue-700 shadow-md"
                            : "border-slate-200 bg-white/50 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Quand souhaitez-vous démarrer ?</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {timelineOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setTimeline(opt.value)}
                        className={`rounded-2xl border-2 p-4 text-left text-sm font-semibold transition-all ${
                          timeline === opt.value
                            ? "border-blue-500 bg-blue-50 text-blue-700 shadow-md"
                            : "border-slate-200 bg-white/50 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-6">
                  <input
                    type="checkbox"
                    id="rgpd-lead"
                    checked={rgpdAccepted}
                    onChange={(e) => setRgpdAccepted(e.target.checked)}
                    required
                    className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="rgpd-lead" className="text-xs leading-relaxed text-slate-500">
                    J&apos;accepte que mes données soient traitées par Vanille Stratégie pour répondre à ma demande.
                    Voir notre{" "}
                    <a href="/mentions-legales" className="text-blue-600 underline hover:text-blue-700">
                      politique de confidentialité
                    </a>.
                  </label>
                </div>

                <div className="flex gap-4 mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="h-16 rounded-full px-8"
                    onClick={() => setStep(1)}
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Retour
                  </Button>
                  <Button
                    type="submit"
                    size="lg"
                    className="h-16 flex-1 rounded-full bg-blue-600 text-lg font-bold shadow-2xl shadow-blue-200 hover:bg-blue-500 hover:shadow-blue-300 transition-all hover:-translate-y-1 group"
                    disabled={loading || !budget || !timeline || !rgpdAccepted}
                  >
                    {loading ? (
                      <Loader2 className="h-6 w-6 animate-spin" />
                    ) : (
                      <>
                        {ctaText}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}

            {error && (
              <p className="mt-6 text-center text-sm font-bold text-rose-500 bg-rose-50 p-4 rounded-xl border border-rose-100">{error}</p>
            )}
          </form>

          <div className="relative z-10 mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-slate-100 pt-8">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              Données 100% sécurisées
            </div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
              <Zap className="h-4 w-4 text-yellow-500" />
              Réponse sous 24h
            </div>
            <div className="text-xs font-black uppercase tracking-widest text-slate-400">
              Appel direct : <a href={`tel:${siteConfig.phone}`} className="text-blue-600 hover:underline">{siteConfig.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
