const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001";

export async function submitLead(
  endpoint: string,
  data: Record<string, unknown>
): Promise<{ success: boolean; message: string; lead_id?: string }> {
  const res = await fetch(`${API_URL}/api/v1/leads/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.detail || "Une erreur est survenue. Veuillez réessayer.");
  }

  return res.json();
}

export const submitContact = (data: Record<string, unknown>) =>
  submitLead("contact", data);

export const submitQuickLead = (data: Record<string, unknown>) =>
  submitLead("quick", data);

export const submitNewsletter = (data: Record<string, unknown>) =>
  submitLead("newsletter", data);

export const submitSimulateurVisa = (data: Record<string, unknown>) =>
  submitLead("simulateur-visa", data);

export const submitSimulateurFiscal = (data: Record<string, unknown>) =>
  submitLead("simulateur-fiscal", data);

// ──────────────── Chatbot ────────────────

export async function sendChatMessage(data: {
  message: string;
  visitor_id: string;
  page_url?: string;
}): Promise<{ message: string; conversation_id: string }> {
  const res = await fetch(`${API_URL}/api/v1/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.detail || "Une erreur est survenue.");
  }

  return res.json();
}

export async function getChatHistory(visitorId: string): Promise<{
  messages: Array<{ role: string; content: string; created_at: string }>;
}> {
  const res = await fetch(
    `${API_URL}/api/v1/chat/history?visitor_id=${encodeURIComponent(visitorId)}`
  );

  if (!res.ok) {
    return { messages: [] };
  }

  return res.json();
}
