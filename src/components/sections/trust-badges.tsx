import { ShieldCheck, Award, Globe, CheckCircle2 } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    label: "MIPA",
    description: "BD Star inscrit au Mauritius Institute of Professional Accountants",
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    icon: Award,
    label: "FSC Agréé",
    description: "Partenaire titulaire de licence Financial Services Commission",
    color: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    icon: Globe,
    label: "EDB Partenaire",
    description: "Relation directe avec l'Economic Development Board depuis 2012",
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    icon: CheckCircle2,
    label: "Ex-Deloitte",
    description: "Didier Laroussinie — 40+ ans d'expertise en fiscalité internationale",
    color: "text-slate-600 bg-slate-50 border-slate-100",
  },
];

export function TrustBadges() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">
          Agréments & garanties
        </p>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className={`flex items-start gap-3 rounded-2xl border p-5 ${badge.color} transition-all hover:shadow-md`}
            >
              <badge.icon className="h-6 w-6 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold">{badge.label}</p>
                <p className="mt-1 text-xs opacity-70">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
