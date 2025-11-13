"use client";

import { useState } from "react";
import AIQuickActionsModal from "../../admin/AIQuickActionsModal";

export default function AIChatPanel({
                                      messages,
                                      input,
                                      isSending,
                                      quickActionGroups,
                                      onInputChange,
                                      onSubmit,
                                      onQuickAction,
                                    }) {
  const [showQuickModal, setShowQuickModal] = useState(false);

  const handleOpenModal = () => setShowQuickModal(true);
  const handleCloseModal = () => setShowQuickModal(false);

  const handleQuickFromModal = (action) => {
    if (onQuickAction) {
      onQuickAction(action);
    }
  };

  return (
    <section className="flex flex-col h-full">
      {/* Header row */}
      <div className="mb-4 flex items-center justify-between gap-6 shrink-0">
        <div>
          <p className="text-xs text-zinc-500 mt-1">
            Ζήτησε αλλαγές σε σχέση με το προηγούμενο πλάνο ή περιέγραψε τον στόχο σου.
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenModal}
          className="
            inline-flex items-center justify-center
            rounded-full border border-zinc-300 bg-white
            px-3 py-1.5 text-xs font-medium text-zinc-800
            hover:bg-zinc-50 hover:border-zinc-400
            transition hover:cursor-pointer
          "
        >
          Ενδεικτικές κατευθύνσεις
        </button>
      </div>

      {/* Chat messages (scrollable area) */}
      <div className="flex-1 mb-4 space-y-3 overflow-y-auto pr-1">
        {messages.map((m) => (
          <div
            key={m.id}
            className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
          >
            <div
              className={[
                "max-w-[80%] rounded-2xl px-3 py-2 text-sm",
                m.role === "user"
                  ? "bg-zinc-900 text-white rounded-br-sm"
                  : "bg-zinc-100 text-zinc-900 rounded-bl-sm",
              ].join(" ")}
            >
              <p className="whitespace-pre-wrap">{m.content}</p>
            </div>
          </div>
        ))}
        {isSending && (
          <div className="flex justify-start">
            <div className="bg-zinc-100 text-zinc-500 rounded-2xl rounded-bl-sm px-3 py-2 text-xs inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse" />
              Το AI σκέφτεται...
            </div>
          </div>
        )}
      </div>

      {/* Input (κάτω μέρος του panel) */}
      <form
        className="mt-auto shrink-0"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="flex items-end gap-2">
          <textarea
            rows={1}
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder="Πες τι αλλαγές θέλεις να κάνουμε στο πλάνο..."
            className="
              flex-1 resize-none rounded-lg border border-zinc-200 bg-zinc-50
              px-3 py-2 text-sm text-zinc-900
              placeholder:text-zinc-400
              focus:outline-none focus:ring-2 focus:ring-zinc-800 focus:border-zinc-800
            "
          />
          <button
            type="submit"
            disabled={isSending || !input.trim()}
            className="
              inline-flex items-center justify-center
              rounded-lg bg-zinc-900 text-white text-sm font-medium
              px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed
              hover:bg-zinc-800 transition hover:cursor-pointer
            "
          >
            Αποστολή
          </button>
        </div>
      </form>

      {/* Modal για τις ενδεικτικές κατευθύνσεις */}
      <AIQuickActionsModal
        open={showQuickModal}
        onClose={handleCloseModal}
        quickActionGroups={quickActionGroups}
        onQuickAction={handleQuickFromModal}
      />
    </section>
  );
}
