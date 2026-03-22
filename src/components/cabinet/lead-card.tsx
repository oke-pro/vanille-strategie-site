"use client";

import { DragEvent } from "react";

export interface LeadPipeline {
  id: string;
  prenom: string | null;
  nom: string | null;
  email: string | null;
  telephone: string | null;
  profil: string | null;
  budget: string | null;
  timeline: string | null;
  pipeline_stage: string;
  assigned_to_name: string | null;
  score: number;
  notes: string | null;
  last_contacted_at: string | null;
  created_at: string;
}

interface LeadCardProps {
  lead: LeadPipeline;
  onClick: (lead: LeadPipeline) => void;
}

const PROFIL_COLORS: Record<string, string> = {
  entrepreneur: "bg-blue-100 text-blue-700",
  "digital-nomad": "bg-violet-100 text-violet-700",
  retraite: "bg-amber-100 text-amber-700",
  entreprise: "bg-emerald-100 text-emerald-700",
  contact: "bg-slate-100 text-slate-600",
  quick: "bg-slate-100 text-slate-600",
  newsletter: "bg-pink-100 text-pink-700",
  "simulateur-visa": "bg-cyan-100 text-cyan-700",
  "simulateur-fiscal": "bg-orange-100 text-orange-700",
};

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "Aujourd'hui";
  if (diffDays === 1) return "Hier";
  if (diffDays < 7) return `Il y a ${diffDays}j`;
  if (diffDays < 30) return `Il y a ${Math.floor(diffDays / 7)} sem.`;
  return `Il y a ${Math.floor(diffDays / 30)} mois`;
}

export default function LeadCard({ lead, onClick }: LeadCardProps) {
  const name = [lead.prenom, lead.nom].filter(Boolean).join(" ") || lead.email || "Lead sans nom";
  const profil = lead.profil || "contact";
  const profilColor = PROFIL_COLORS[profil] || "bg-slate-100 text-slate-600";

  function handleDragStart(e: DragEvent<HTMLDivElement>) {
    e.dataTransfer.setData("text/plain", lead.id);
    e.dataTransfer.effectAllowed = "move";
  }

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onClick={() => onClick(lead)}
      className="bg-white rounded-lg border border-slate-200 p-3 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <p className="text-sm font-medium text-slate-900 truncate">{name}</p>
        {lead.score > 0 && (
          <span className="flex-shrink-0 text-xs font-bold text-amber-600">
            {lead.score}
          </span>
        )}
      </div>
      <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium ${profilColor}`}>
        {profil}
      </span>
      {lead.budget && (
        <p className="text-xs text-slate-500 mt-1.5">{lead.budget}</p>
      )}
      <p className="text-[11px] text-slate-400 mt-1.5">{timeAgo(lead.created_at)}</p>
    </div>
  );
}
