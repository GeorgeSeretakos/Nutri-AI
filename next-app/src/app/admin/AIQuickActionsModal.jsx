"use client";

export default function AIQuickActionsModal({
                                              open,
                                              onClose,
                                              quickActionGroups = [],
                                              onQuickAction,
                                            }) {
  if (!open) return null;

  const handleClickAction = (action) => {
    if (onQuickAction) {
      onQuickAction(action);
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        className="
          bg-white rounded-xl shadow-lg
          w-full max-w-xl max-h-[80vh]
          flex flex-col
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900">
              Ενδεικτικές προσαρμογές πλάνου
            </h3>
            <p className="text-[11px] text-zinc-500 mt-0.5">
              Επίλεξε μία από τις παρακάτω κατευθύνσεις για να δώσεις στο AI πιο σαφές πλαίσιο.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="
              inline-flex items-center justify-center
              w-7 h-7 rounded-full
              border border-zinc-200 bg-white
              text-zinc-500 text-xs
              hover:bg-zinc-50 hover:text-zinc-700 hover:border-zinc-300
              transition hover:cursor-pointer
            "
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-4 py-3 overflow-y-auto text-sm">
          {(!quickActionGroups || quickActionGroups.length === 0) && (
            <p className="text-xs text-zinc-500">
              Δεν έχουν οριστεί ενδεικτικές κατευθύνσεις ακόμα.
            </p>
          )}

          <div className="space-y-3">
            {quickActionGroups.map((group) => (
              <div
                key={group.title}
                className="border-b border-zinc-100 pb-3 last:border-b-0 last:pb-0"
              >
                <p className="text-[11px] uppercase tracking-wide text-zinc-400 mb-1">
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.actions.map((action) => (
                    <button
                      key={action.id}
                      type="button"
                      onClick={() => handleClickAction(action)}
                      className="
                        text-xs rounded-full border border-zinc-300 bg-zinc-50
                        px-3 py-1
                        hover:bg-zinc-100 hover:border-zinc-400
                        transition hover:cursor-pointer
                      "
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-zinc-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="
              text-xs font-medium text-zinc-600
              px-3 py-1.5 rounded-lg
              hover:bg-zinc-50 hover:text-zinc-800
              transition hover:cursor-pointer
            "
          >
            Κλείσιμο
          </button>
        </div>
      </div>
    </div>
  );
}
