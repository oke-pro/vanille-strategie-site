"use client";

import { DragEvent, useEffect, useState } from "react";
import { portalGet, portalPatch } from "@/lib/api-portal";
import LeadCard, { type LeadPipeline } from "@/components/cabinet/lead-card";
import LeadDetailModal from "@/components/cabinet/lead-detail-modal";

interface PipelineView {
  stages: Record<string, LeadPipeline[]>;
}

const STAGES = [
  { key: "nouveau", label: "Nouveau", color: "border-slate-400 bg-slate-50" },
  { key: "qualifie", label: "Qualifie", color: "border-blue-400 bg-blue-50" },
  { key: "rdv", label: "RDV", color: "border-amber-400 bg-amber-50" },
  { key: "proposition", label: "Proposition", color: "border-purple-400 bg-purple-50" },
  { key: "signe", label: "Signe", color: "border-emerald-400 bg-emerald-50" },
  { key: "client", label: "Client", color: "border-green-400 bg-green-50" },
];

export default function PipelinePage() {
  const [pipeline, setPipeline] = useState<PipelineView | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<LeadPipeline | null>(null);
  const [dragOverStage, setDragOverStage] = useState<string | null>(null);

  async function fetchPipeline() {
    try {
      const data = await portalGet<PipelineView>("/api/v1/pipeline");
      setPipeline(data);
    } catch (err) {
      console.error("Erreur chargement pipeline:", err);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchPipeline();
  }, []);

  async function handleDrop(e: DragEvent<HTMLDivElement>, targetStage: string) {
    e.preventDefault();
    setDragOverStage(null);
    const leadId = e.dataTransfer.getData("text/plain");
    if (!leadId || !pipeline) return;

    // Optimistic update
    const newStages = { ...pipeline.stages };
    let movedLead: LeadPipeline | null = null;

    for (const stage of Object.keys(newStages)) {
      const idx = newStages[stage].findIndex((l) => l.id === leadId);
      if (idx !== -1) {
        movedLead = { ...newStages[stage][idx], pipeline_stage: targetStage };
        newStages[stage] = newStages[stage].filter((_, i) => i !== idx);
        break;
      }
    }

    if (movedLead) {
      newStages[targetStage] = [movedLead, ...(newStages[targetStage] || [])];
      setPipeline({ stages: newStages });
    }

    try {
      await portalPatch(`/api/v1/pipeline/leads/${leadId}/stage`, {
        pipeline_stage: targetStage,
      });
    } catch (err) {
      console.error("Erreur deplacement:", err);
      fetchPipeline(); // Revert on error
    }
  }

  function handleDragOver(e: DragEvent<HTMLDivElement>, stage: string) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverStage(stage);
  }

  function handleDragLeave() {
    setDragOverStage(null);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900" />
      </div>
    );
  }

  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading text-2xl font-semibold text-slate-900">Pipeline CRM</h1>
        <button
          onClick={fetchPipeline}
          className="px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
        >
          Rafraichir
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {STAGES.map((stage) => {
          const leads = pipeline?.stages[stage.key] || [];
          const isDragOver = dragOverStage === stage.key;

          return (
            <div
              key={stage.key}
              className={`flex-shrink-0 w-72 rounded-xl border-t-4 ${stage.color} ${
                isDragOver ? "ring-2 ring-blue-400 ring-offset-2" : ""
              }`}
              onDrop={(e) => handleDrop(e, stage.key)}
              onDragOver={(e) => handleDragOver(e, stage.key)}
              onDragLeave={handleDragLeave}
            >
              <div className="px-4 py-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-700">{stage.label}</h3>
                <span className="text-xs font-bold text-slate-500 bg-white rounded-full px-2 py-0.5">
                  {leads.length}
                </span>
              </div>
              <div className="px-3 pb-3 space-y-2 min-h-[200px]">
                {leads.map((lead) => (
                  <LeadCard
                    key={lead.id}
                    lead={lead}
                    onClick={setSelectedLead}
                  />
                ))}
                {leads.length === 0 && (
                  <p className="text-xs text-slate-400 text-center py-8">
                    Aucun lead
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal detail */}
      {selectedLead && (
        <LeadDetailModal
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
          onUpdated={() => {
            setSelectedLead(null);
            fetchPipeline();
          }}
        />
      )}
    </div>
  );
}
