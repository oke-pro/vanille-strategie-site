"use client";

import { useState } from "react";
import { portalPatch, portalPost, portalGet } from "@/lib/api-portal";
import type { LeadPipeline } from "./lead-card";

interface StaffMember {
  id: string;
  first_name: string;
  last_name: string;
}

interface LeadDetailModalProps {
  lead: LeadPipeline;
  onClose: () => void;
  onUpdated: () => void;
}

export default function LeadDetailModal({ lead, onClose, onUpdated }: LeadDetailModalProps) {
  const [notes, setNotes] = useState(lead.notes || "");
  const [savingNotes, setSavingNotes] = useState(false);
  const [staffList, setStaffList] = useState<StaffMember[]>([]);
  const [loadingStaff, setLoadingStaff] = useState(false);
  const [showAssign, setShowAssign] = useState(false);
  const [showConvert, setShowConvert] = useState(false);
  const [convertData, setConvertData] = useState({
    company_name: "",
    company_type: "",
    profil: lead.profil || "entrepreneur",
  });
  const [converting, setConverting] = useState(false);

  const name = [lead.prenom, lead.nom].filter(Boolean).join(" ") || lead.email || "Lead sans nom";

  async function loadStaff() {
    if (staffList.length > 0) {
      setShowAssign(true);
      return;
    }
    setLoadingStaff(true);
    try {
      const data = await portalGet<{ items: StaffMember[] }>("/api/v1/clients/staff");
      setStaffList(data.items || []);
    } catch {
      // Fallback : le endpoint n'existe peut-etre pas encore
      setStaffList([]);
    }
    setLoadingStaff(false);
    setShowAssign(true);
  }

  async function handleAssign(staffId: string) {
    try {
      await portalPatch(`/api/v1/pipeline/leads/${lead.id}/assign`, {
        assigned_to: staffId,
      });
      setShowAssign(false);
      onUpdated();
    } catch (err) {
      console.error("Erreur assignation:", err);
    }
  }

  async function handleConvert() {
    setConverting(true);
    try {
      await portalPost(`/api/v1/pipeline/leads/${lead.id}/convert`, convertData);
      onUpdated();
      onClose();
    } catch (err) {
      console.error("Erreur conversion:", err);
    }
    setConverting(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">{name}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-xl leading-none">
            &times;
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-4 space-y-4">
          {/* Infos */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            {lead.email && (
              <div>
                <span className="text-slate-500">Email</span>
                <p className="text-slate-900 font-medium">{lead.email}</p>
              </div>
            )}
            {lead.téléphone && (
              <div>
                <span className="text-slate-500">Téléphone</span>
                <p className="text-slate-900 font-medium">{lead.téléphone}</p>
              </div>
            )}
            {lead.profil && (
              <div>
                <span className="text-slate-500">Profil</span>
                <p className="text-slate-900 font-medium">{lead.profil}</p>
              </div>
            )}
            {lead.budget && (
              <div>
                <span className="text-slate-500">Budget</span>
                <p className="text-slate-900 font-medium">{lead.budget}</p>
              </div>
            )}
            {lead.timeline && (
              <div>
                <span className="text-slate-500">Timeline</span>
                <p className="text-slate-900 font-medium">{lead.timeline}</p>
              </div>
            )}
            <div>
              <span className="text-slate-500">Score</span>
              <p className="text-slate-900 font-medium">{lead.score}</p>
            </div>
            <div>
              <span className="text-slate-500">Stage</span>
              <p className="text-slate-900 font-medium capitalize">{lead.pipeline_stage}</p>
            </div>
            {lead.assigned_to_name && (
              <div>
                <span className="text-slate-500">Assigne a</span>
                <p className="text-slate-900 font-medium">{lead.assigned_to_name}</p>
              </div>
            )}
          </div>

          {/* Notes */}
          <div>
            <label className="text-sm text-slate-500 mb-1 block">Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ajouter des notes..."
            />
          </div>

          {/* Assign section */}
          {showAssign && (
            <div className="bg-slate-50 rounded-lg p-3 space-y-2">
              <p className="text-sm font-medium text-slate-700">Assigner à un membre du staff</p>
              {staffList.length === 0 ? (
                <p className="text-xs text-slate-500">Aucun staff disponible</p>
              ) : (
                <div className="space-y-1">
                  {staffList.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleAssign(s.id)}
                      className="block w-full text-left px-3 py-2 rounded text-sm hover:bg-blue-50 text-slate-700"
                    >
                      {s.first_name} {s.last_name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Convert section */}
          {showConvert && (
            <div className="bg-emerald-50 rounded-lg p-3 space-y-3">
              <p className="text-sm font-medium text-emerald-800">Convertir en client</p>
              <input
                type="text"
                placeholder="Nom de la société"
                value={convertData.company_name}
                onChange={(e) => setConvertData({ ...convertData, company_name: e.target.value })}
                className="w-full rounded border border-emerald-200 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <select
                value={convertData.company_type}
                onChange={(e) => setConvertData({ ...convertData, company_type: e.target.value })}
                className="w-full rounded border border-emerald-200 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Type de société</option>
                <option value="DC">Domestic Company (DC)</option>
                <option value="GBC">Global Business Company (GBC)</option>
                <option value="AC">Authorised Company (AC)</option>
              </select>
              <select
                value={convertData.profil}
                onChange={(e) => setConvertData({ ...convertData, profil: e.target.value })}
                className="w-full rounded border border-emerald-200 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="entrepreneur">Entrepreneur</option>
                <option value="digital-nomad">Digital Nomad</option>
                <option value="retraite">Retraite</option>
                <option value="entreprise">Entreprise</option>
              </select>
              <button
                onClick={handleConvert}
                disabled={converting}
                className="w-full bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 disabled:opacity-50 transition"
              >
                {converting ? "Conversion..." : "Confirmer la conversion"}
              </button>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="px-6 py-4 border-t border-slate-200 flex gap-2">
          <button
            onClick={loadStaff}
            disabled={loadingStaff}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition"
          >
            {loadingStaff ? "Chargement..." : "Assigner"}
          </button>
          {lead.pipeline_stage !== "client" && (
            <button
              onClick={() => setShowConvert(!showConvert)}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition"
            >
              Convertir en client
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
