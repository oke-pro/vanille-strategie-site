"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { X, MessageCircle } from "lucide-react";
import { useConversion } from "./conversion-context";
import { sendChatMessage, getChatHistory } from "@/lib/api";
import { trackEvent } from "@/components/analytics/google-analytics";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const WELCOME_MESSAGE =
  "Bonjour ! Je suis l'assistant de Vanille Stratégie, cabinet de Didier Laroussinie à Maurice. Comment puis-je vous aider dans votre projet d'expatriation ou d'investissement ?";

const VISITOR_ID_KEY = "vs_chat_visitor_id";
const CONTACT_GIVEN_KEY = "vs_chat_contact_given";

function generateVisitorId(): string {
  return `v_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function getVisitorId(): string {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem(VISITOR_ID_KEY);
  if (!id) {
    id = generateVisitorId();
    localStorage.setItem(VISITOR_ID_KEY, id);
  }
  return id;
}

function hasGivenContact(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(CONTACT_GIVEN_KEY) === "true";
}

function markContactGiven(): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(CONTACT_GIVEN_KEY, "true");
  }
}

// ---------- Simple Markdown renderer ----------

function renderMarkdown(text: string): React.ReactNode {
  // Split into paragraphs on double newlines
  const paragraphs = text.split(/\n\n+/);

  const nodes: React.ReactNode[] = [];

  paragraphs.forEach((para, pIdx) => {
    const lines = para.split("\n");

    // Detect if entire paragraph is a list
    const isUnorderedList = lines.every((l) => /^[-•]\s/.test(l.trim()));
    const isOrderedList = lines.every((l) => /^\d+\.\s/.test(l.trim()));

    if (isUnorderedList) {
      nodes.push(
        <ul key={`p${pIdx}`} className="list-disc pl-4 space-y-1">
          {lines.map((l, i) => (
            <li key={i}>{renderInline(l.trim().replace(/^[-•]\s+/, ""))}</li>
          ))}
        </ul>
      );
    } else if (isOrderedList) {
      nodes.push(
        <ol key={`p${pIdx}`} className="list-decimal pl-4 space-y-1">
          {lines.map((l, i) => (
            <li key={i}>{renderInline(l.trim().replace(/^\d+\.\s+/, ""))}</li>
          ))}
        </ol>
      );
    } else {
      // Mixed content: some lines may be list items, some not
      const elements: React.ReactNode[] = [];
      let listBuffer: { type: "ul" | "ol"; items: string[] } | null = null;

      const flushList = () => {
        if (!listBuffer) return;
        const Tag = listBuffer.type === "ul" ? "ul" : "ol";
        const cls =
          listBuffer.type === "ul"
            ? "list-disc pl-4 space-y-1"
            : "list-decimal pl-4 space-y-1";
        elements.push(
          <Tag key={`list-${elements.length}`} className={cls}>
            {listBuffer.items.map((item, i) => (
              <li key={i}>{renderInline(item)}</li>
            ))}
          </Tag>
        );
        listBuffer = null;
      };

      lines.forEach((line, lIdx) => {
        const ulMatch = line.trim().match(/^[-•]\s+(.*)/);
        const olMatch = line.trim().match(/^\d+\.\s+(.*)/);

        if (ulMatch) {
          if (listBuffer && listBuffer.type === "ul") {
            listBuffer.items.push(ulMatch[1]);
          } else {
            flushList();
            listBuffer = { type: "ul", items: [ulMatch[1]] };
          }
        } else if (olMatch) {
          if (listBuffer && listBuffer.type === "ol") {
            listBuffer.items.push(olMatch[1]);
          } else {
            flushList();
            listBuffer = { type: "ol", items: [olMatch[1]] };
          }
        } else {
          flushList();
          elements.push(
            <span key={`l${lIdx}`}>
              {lIdx > 0 && <br />}
              {renderInline(line)}
            </span>
          );
        }
      });
      flushList();

      nodes.push(
        <p key={`p${pIdx}`}>
          {elements}
        </p>
      );
    }
  });

  return <div className="space-y-2">{nodes}</div>;
}

function renderInline(text: string): React.ReactNode {
  // Split on **bold** patterns
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const boldMatch = part.match(/^\*\*(.+)\*\*$/);
    if (boldMatch) {
      return (
        <strong key={i} className="font-semibold">
          {boldMatch[1]}
        </strong>
      );
    }
    return part;
  });
}

// ---------- Component ----------

export function ChatWidget() {
  const { chatOpen, setChatOpen } = useConversion();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [historyLoaded, setHistoryLoaded] = useState(false);
  const [showContactBanner, setShowContactBanner] = useState(false);
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [bubbleAnimated, setBubbleAnimated] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Count user messages to trigger contact banner
  const userMessageCount = messages.filter((m) => m.role === "user").length;

  useEffect(() => {
    if (
      userMessageCount >= 3 &&
      !contactSubmitted &&
      !hasGivenContact()
    ) {
      setShowContactBanner(true);
    }
  }, [userMessageCount, contactSubmitted]);

  // Load history on mount
  useEffect(() => {
    if (historyLoaded) return;
    const visitorId = getVisitorId();
    if (!visitorId) return;

    getChatHistory(visitorId)
      .then((data) => {
        if (data.messages && data.messages.length > 0) {
          setMessages(
            data.messages.map((m) => ({
              role: m.role as "user" | "assistant",
              content: m.content,
            }))
          );
        } else {
          setHasNewMessage(true);
        }
        setHistoryLoaded(true);
      })
      .catch(() => {
        setHasNewMessage(true);
        setHistoryLoaded(true);
      });
  }, [historyLoaded]);

  // Check if contact was already given
  useEffect(() => {
    if (hasGivenContact()) {
      setContactSubmitted(true);
    }
  }, []);

  // Auto-scroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when chat opens + animation
  useEffect(() => {
    if (chatOpen) {
      // Trigger slide-up animation
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
      setTimeout(() => inputRef.current?.focus(), 200);
      setHasNewMessage(false);
    } else {
      setIsVisible(false);
    }
  }, [chatOpen]);

  // Bounce animation on first render
  useEffect(() => {
    if (!bubbleAnimated) {
      setBubbleAnimated(true);
    }
  }, [bubbleAnimated]);

  const handleOpen = useCallback(() => {
    setChatOpen(true);
    trackEvent("chat_open", "chatbot");
    if (messages.length === 0) {
      setMessages([{ role: "assistant", content: WELCOME_MESSAGE }]);
    }
  }, [setChatOpen, messages.length]);

  const handleClose = useCallback(() => {
    setChatOpen(false);
  }, [setChatOpen]);

  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;

    const visitorId = getVisitorId();
    const pageUrl =
      typeof window !== "undefined" ? window.location.pathname : undefined;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setLoading(true);

    try {
      const response = await sendChatMessage({
        message: text,
        visitor_id: visitorId,
        page_url: pageUrl,
      });

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response.message },
      ]);
      trackEvent("chat_message", "chatbot");
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Je suis désolé, une erreur est survenue. N'hésitez pas à nous contacter directement par WhatsApp au +230 59 43 74 83.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, loading]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  const handleContactSubmit = useCallback(async () => {
    if (!contactEmail.trim()) return;

    const visitorId = getVisitorId();
    const pageUrl =
      typeof window !== "undefined" ? window.location.pathname : undefined;

    const contactInfo = `[COORDONNÉES VISITEUR] Email: ${contactEmail.trim()}${contactPhone.trim() ? `, Téléphone: ${contactPhone.trim()}` : ""}`;

    try {
      await sendChatMessage({
        message: contactInfo,
        visitor_id: visitorId,
        page_url: pageUrl,
      });
    } catch {
      // Silently fail — contact info is best-effort
    }

    setContactSubmitted(true);
    setShowContactBanner(false);
    markContactGiven();
    trackEvent("chat_contact_collected", "chatbot");
  }, [contactEmail, contactPhone]);

  // Closed state: floating bubble
  if (!chatOpen) {
    return (
      <button
        onClick={handleOpen}
        className={`fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all hover:scale-110 hover:bg-blue-700 lg:bottom-6 ${bubbleAnimated ? "animate-bounce-once" : ""}`}
        aria-label="Ouvrir le chat"
      >
        <MessageCircle className="h-7 w-7" />
        {hasNewMessage && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
            1
          </span>
        )}
      </button>
    );
  }

  // Open state: chat panel
  return (
    <div
      className={`fixed bottom-0 right-0 z-[60] flex h-full w-full flex-col bg-white shadow-2xl transition-all duration-300 ease-out sm:bottom-6 sm:right-6 sm:h-[600px] sm:w-[480px] sm:rounded-2xl sm:border sm:border-slate-200 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between rounded-t-none bg-blue-600 px-4 py-3 text-white sm:rounded-t-2xl">
        <div className="flex items-center gap-3">
          {/* Avatar VS */}
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-xs font-bold text-white">
            VS
          </div>
          <div>
            <h3 className="text-sm font-semibold">Vanille Stratégie</h3>
            <p className="text-xs text-blue-200">
              Expert en expatriation Maurice
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Badge en ligne */}
          <span className="flex items-center gap-1.5 text-xs text-blue-100">
            <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
            En ligne
          </span>
          <button
            onClick={handleClose}
            className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-blue-500"
            aria-label="Fermer le chat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-3">
        <div className="space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                  msg.role === "user"
                    ? "rounded-br-md bg-blue-600 text-sm leading-relaxed text-white"
                    : "rounded-bl-md bg-slate-100 text-sm leading-relaxed text-slate-800"
                }`}
              >
                {msg.role === "assistant"
                  ? renderMarkdown(msg.content)
                  : msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-md bg-slate-100 px-4 py-2.5 text-sm text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <span
                    className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400"
                    style={{ animationDelay: "300ms" }}
                  />
                  <span className="ml-2">En train d&apos;écrire...</span>
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Contact banner */}
      {showContactBanner && !contactSubmitted && (
        <div className="border-t border-blue-100 bg-blue-50 px-4 py-2.5">
          <p className="mb-2 text-xs text-blue-700">
            Pour un suivi personnalisé, laissez-nous vos coordonnées
          </p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              placeholder="Email *"
              className="min-w-0 flex-1 rounded-lg border border-blue-200 bg-white px-2.5 py-1.5 text-xs outline-none focus:border-blue-400"
            />
            <input
              type="tel"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              placeholder="Téléphone"
              className="w-28 rounded-lg border border-blue-200 bg-white px-2.5 py-1.5 text-xs outline-none focus:border-blue-400"
            />
            <button
              onClick={handleContactSubmit}
              disabled={!contactEmail.trim()}
              className="whitespace-nowrap rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-40"
            >
              Envoyer
            </button>
          </div>
        </div>
      )}

      {/* Input area */}
      <div className="border-t border-slate-200 px-4 py-3">
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Posez votre question..."
            className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-300 focus:bg-white"
            disabled={loading}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition-all hover:bg-blue-700 disabled:opacity-40 disabled:hover:bg-blue-600"
            aria-label="Envoyer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
