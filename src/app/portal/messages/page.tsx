"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { portalGet } from "@/lib/api-portal";

interface Conversation {
  client_id: string;
  client_name: string;
  last_message: string;
  unread_count: number;
  updated_at: string;
}

export default function PortalMessagesPage() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    portalGet<Conversation[]>("/api/v1/messages/conversations")
      .then(setConversations)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">Messages</h1>
        <div className="text-slate-500">Chargement...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">Messages</h1>
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="font-heading text-2xl font-semibold text-slate-900 mb-6">Messages</h1>

      {conversations.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
          <p className="text-slate-500">Aucune conversation pour le moment.</p>
          <p className="text-sm text-slate-400 mt-2">
            Vos échanges avec le cabinet Vanille Stratégie apparaîtront ici.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm divide-y divide-slate-100">
          {conversations.map((conv) => (
            <Link
              key={conv.client_id}
              href={`/portal/messages/${conv.client_id}`}
              className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-slate-900">
                    Cabinet Vanille Stratégie
                  </p>
                  {conv.unread_count > 0 && (
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white text-xs font-bold">
                      {conv.unread_count}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-500 truncate mt-0.5">
                  {conv.last_message}
                </p>
              </div>
              <span className="text-xs text-slate-400 flex-shrink-0 ml-4">
                {new Date(conv.updated_at).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "short",
                })}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
