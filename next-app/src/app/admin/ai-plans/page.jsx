"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { useSearchParams } from "next/navigation";

import { QUICK_ACTION_GROUPS } from "public/data/aiQuickActions";
import { MOCK_FLEXIBLE_PLAN } from "public/data/mockFlexiblePlan.js";

import AIChatPanel from "@/app/components/admin/AIChatPanel";
import AIPlanPreview from "@/app/components/admin/AIPlanPreview";

export default function AIPlansPage() {
  const searchParams = useSearchParams();
  const clientId = searchParams.get("clientId");

  const [client, setClient] = useState(null);
  const [loadingClient, setLoadingClient] = useState(!!clientId);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Γεια σου! Είμαι ο AI βοηθός σου για τη δημιουργία νέας διατροφής. Πες μου τι αλλαγές θες σε σχέση με το προηγούμενο πλάνο ή επίλεξε μία από τις προτεινόμενες επιλογές.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  // πλάνο στο σχήμα MOCK_FLEXIBLE_PLAN
  const [plan, setPlan] = useState(MOCK_FLEXIBLE_PLAN);

  // Φόρτωση client (αν έρθει clientId)
  useEffect(() => {
    if (!clientId) return;
    const fetchClient = async () => {
      try {
        setLoadingClient(true);
        const res = await fetch(`/api/admin/clients/${clientId}`, {
          credentials: "include",
        });
        if (!res.ok) throw new Error("Failed to load client");
        const data = await res.json();
        setClient(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingClient(false);
      }
    };
    fetchClient();
  }, [clientId]);

  const addMessage = useCallback((role, content) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `${role}-${Date.now()}-${Math.random()}`,
        role,
        content,
      },
    ]);
  }, []);

  const handleSend = async (textFromInput) => {
    const text = (textFromInput ?? input).trim();
    if (!text) return;

    setInput("");
    addMessage("user", text);
    setIsSending(true);

    try {
      // TODO: κάλεσε εδώ το backend σου (π.χ. /api/admin/ai-plan)
      await new Promise((r) => setTimeout(r, 600));

      const fakeReply =
        "Έκανα μια ενδεικτική προσαρμογή στο πλάνο σύμφωνα με την οδηγία σου. Όταν συνδεθούμε με το backend, εδώ θα βλέπεις ακριβώς τις αλλαγές που πρότεινε το AI.";

      addMessage("assistant", fakeReply);

      // Εδώ στο μέλλον θα βάλεις το updated plan από το backend:
      // setPlan(updatedPlanFromAPI);
    } catch (err) {
      console.error(err);
      addMessage(
        "assistant",
        "Κάτι πήγε στραβά με την κλήση του AI. Δοκίμασε ξανά σε λίγο."
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleQuickAction = (action) => {
    handleSend(action.prompt);
  };

  const handleSaveTemplate = () => {
    // TODO: αποθήκευση πλάνου ως πρότυπο
    console.log("Save as template", plan);
  };

  async function handleSaveAndSend() {
    if (!currentPlan || !client) return;

    const res = await fetch("/api/diets/confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientId: client.id,
        clientEmail: client.email,
        clientFirstName: client.firstName,
        clientLastName: client.lastName,
        plan: currentPlan,
        // optional:
        description: "Ενδεικτικό διατροφικό πλάνο",
        date: new Date().toISOString().slice(0, 10),
        // fileName: "Custom name.pdf" // if you ever want to override
      }),
    });

    const data = await res.json();
    if (!res.ok || !data.ok) {
      console.error("Save & Send failed", data);
      // show error toast
      return;
    }

    // show success toast
  }

  const handlePlanChange = useCallback((updatedPlanOrFn) => {
    setPlan((prev) =>
      typeof updatedPlanOrFn === "function"
        ? updatedPlanOrFn(prev)
        : updatedPlanOrFn
    );
  }, []);


  const pageTitle = useMemo(() => {
    if (loadingClient) return "Νέα διατροφή με AI";
    if (client)
      return `Νέα διατροφή με AI για ${client.firstName} ${client.lastName}`;
    if (clientId) return `Νέα διατροφή με AI για πελάτη #${clientId}`;
    return "Νέα διατροφή με AI";
  }, [client, clientId, loadingClient]);

  return (
    <div className="h-full py-4 md:py-6 flex flex-col">
      {/* Μπορείς να εμφανίσεις το pageTitle εδώ αν θέλεις */}

      <div className="flex-1 flex flex-col xl:flex-row overflow-hidden">
        {/* Chat panel (αριστερά) */}
        <div className="flex-1 min-h-0 overflow-hidden px-6 ">
          <AIChatPanel
            messages={messages}
            input={input}
            isSending={isSending}
            quickActionGroups={QUICK_ACTION_GROUPS}
            onInputChange={setInput}
            onSubmit={() => handleSend()}
            onQuickAction={handleQuickAction}
          />
        </div>

        {/* Κάθετος διαχωριστής */}
        <div className="hidden xl:block w-px bg-zinc-200/70 self-stretch" />

        {/* Preview panel (δεξιά) */}
        <div className="flex-1 min-h-0 overflow-hidden">
          <AIPlanPreview
            plan={plan}
            onSaveTemplate={handleSaveTemplate}
            onSaveAndSend={handleSaveAndSend}
            onPlanChange={handlePlanChange}
          />
        </div>
      </div>
    </div>
  );
}
