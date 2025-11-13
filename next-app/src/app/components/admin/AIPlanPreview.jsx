"use client";

import { useState, useMemo, useEffect } from "react";

export default function AIPlanPreview({
                                        plan,
                                        onSaveTemplate,
                                        onSaveAndSend,
                                        onPlanChange,
                                      }) {
  const [activeTab, setActiveTab] = useState("flexible");
  const hasPlan = !!plan;

  return (
    <section className="flex flex-col h-full overflow-hidden">
      {/* Tabs + small meta */}
      <div className="mb-4 border-b border-zinc-200 shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("flexible")}
              className={[
                "px-3 py-2 text-sm font-medium border-b-2 -mb-px transition",
                activeTab === "flexible"
                  ? "border-zinc-900 text-zinc-900"
                  : "border-transparent text-zinc-500 hover:text-zinc-800 hover:border-zinc-300",
              ].join(" ")}
            >
              Ενδεικτικό πλάνο
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("dayByDay")}
              className={[
                "px-3 py-2 text-sm font-medium border-b-2 -mb-px transition",
                activeTab === "dayByDay"
                  ? "border-zinc-900 text-zinc-900"
                  : "border-transparent text-zinc-500 hover:text-zinc-800 hover:border-zinc-300",
              ].join(" ")}
            >
              Πλάνο ανά ημέρα
            </button>
          </div>

          {hasPlan && (
            <div className="hidden sm:flex flex-col items-end text-xs text-zinc-500">
              <span>
                Ημέρες:{" "}
                <span className="font-medium text-zinc-700">
                  {plan.days?.length || 0}
                </span>
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Περιεχόμενο tabs (scrollable area) */}
      <div className="flex-1 overflow-y-auto pr-1">
        {!hasPlan && (
          <p className="text-sm text-zinc-500">
            Δεν υπάρχει ακόμη πλάνο. Ζήτησε από το AI να δημιουργήσει ή να
            προσαρμόσει ένα πλάνο για τον πελάτη.
          </p>
        )}

        {hasPlan && activeTab === "flexible" && (
          <FlexiblePlanView plan={plan} onPlanChange={onPlanChange} />
        )}

        {hasPlan && activeTab === "dayByDay" && <DayPlanView plan={plan} />}
      </div>

      {/* Footer actions (σταθερό κάτω στο panel) */}
      <div className="mt-4 pt-3 border-t border-zinc-200 flex justify-end gap-2 shrink-0">
        <button
          type="button"
          onClick={onSaveTemplate}
          className="
            inline-flex items-center justify-center text-xs font-medium
            rounded-lg border border-zinc-300 bg-white px-3 py-1.5
            hover:bg-zinc-50 hover:border-zinc-400 transition hover:cursor-pointer
          "
        >
          Αποθήκευση ως πρότυπο
        </button>
        <button
          type="button"
          onClick={onSaveAndSend}
          className="
            inline-flex items-center justify-center text-xs font-medium
            rounded-lg bg-zinc-900 text-white px-3 py-1.5
            hover:bg-zinc-800 transition hover:cursor-pointer
          "
        >
          Αποθήκευση & αποστολή στον πελάτη
        </button>
      </div>
    </section>
  );
}

function FlexiblePlanView({ plan, onPlanChange }) {
  const sections = plan?.sections || {};
  const [rowHeights, setRowHeights] = useState({});
  const [resizing, setResizing] = useState(null);
  const [editingCell, setEditingCell] = useState(null);

  const sectionEntries = useMemo(() => {
    return Object.entries(sections);
  }, [sections]);

  if (!sectionEntries.length) {
    return (
      <p className="text-sm text-zinc-500">
        Δεν βρέθηκαν γεύματα στο πλάνο για να παρουσιαστούν.
      </p>
    );
  }

  const handleCellChange = (sectionKey, groupIndex, index, field, value) => {
    if (!onPlanChange) return;

    onPlanChange((prevPlan) => {
      const prevSections = prevPlan.sections || {};
      const sectionValue = prevSections[sectionKey];

      // 1) Simple section: array
      if (Array.isArray(sectionValue)) {
        const nextSection = sectionValue.map((opt, i) =>
          i === index ? { ...opt, [field]: value } : opt
        );

        return {
          ...prevPlan,
          sections: {
            ...prevSections,
            [sectionKey]: nextSection,
          },
        };
      }

      // 2) Simple section: { options: [...] }
      if (Array.isArray(sectionValue?.options)) {
        const nextOptions = sectionValue.options.map((opt, i) =>
          i === index ? { ...opt, [field]: value } : opt
        );

        return {
          ...prevPlan,
          sections: {
            ...prevSections,
            [sectionKey]: {
              ...sectionValue,
              options: nextOptions,
            },
          },
        };
      }

      // 3) Grouped: { groups: [{ label, options: [...] }, ...] }
      if (Array.isArray(sectionValue?.groups) && groupIndex != null) {
        const nextGroups = sectionValue.groups.map((g, gi) => {
          if (gi !== groupIndex) return g;
          const nextOptions = (g.options || []).map((opt, i) =>
            i === index ? { ...opt, [field]: value } : opt
          );
          return { ...g, options: nextOptions };
        });

        return {
          ...prevPlan,
          sections: {
            ...prevSections,
            [sectionKey]: {
              ...sectionValue,
              groups: nextGroups,
            },
          },
        };
      }

      return prevPlan;
    });
  };

  const handleRowMouseDown = (e, rowKey) => {
    e.preventDefault();
    const rowEl = e.currentTarget.parentElement; // row container
    if (!rowEl) return;
    const startHeight = rowEl.getBoundingClientRect().height;
    setResizing({
      key: rowKey,
      startY: e.clientY,
      startHeight,
    });
  };

  useEffect(() => {
    if (!resizing) return;

    const MIN_HEIGHT = 96; // ~4 γραμμές

    const onMouseMove = (e) => {
      const delta = e.clientY - resizing.startY;
      const next = Math.max(MIN_HEIGHT, resizing.startHeight + delta);
      setRowHeights((prev) => ({
        ...prev,
        [resizing.key]: next,
      }));
    };

    const onMouseUp = () => {
      setResizing(null);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [resizing]);

  const startEditing = (sectionKey, groupIndex, index, field) => {
    setEditingCell({ sectionKey, groupIndex, index, field });
  };

  const renderTable = (sectionKey, groupIndex, title, options) => {
    if (!options || !options.length) return null;

    return (
      <div className="bg-white border border-zinc-200 overflow-hidden text-sm">
        {/* HEADER */}
        <div className="sticky top-0 z-10 bg-teal-800 text-white border-b border-teal-900">
          {title && (
            <div className="px-3 py-2 font-semibold">
              {title}
            </div>
          )}

          <div className="flex bg-teal-700 text-xs sm:text-sm border-t border-teal-900">
            <div className="flex-[2] px-3 py-2 font-semibold">
              Επιλογές
            </div>
            <div className="flex-[1] px-3 py-2 font-semibold border-l border-teal-900">
              Συχνότητα
            </div>
            <div className="flex-[1] px-3 py-2 font-semibold border-l border-teal-900">
              Σχόλια
            </div>
          </div>
        </div>

        {/* ROWS */}
        {options.map((opt, idx) => {
          const optionText = opt.option ?? opt.description ?? "";
          const frequencyText = opt.frequency ?? "";
          const commentsText =
            opt.comments ?? opt.recommended_products ?? "";

          const rowKey = `${sectionKey}-${groupIndex ?? "single"}-${idx}`;
          const styleHeight = rowHeights[rowKey]
            ? { height: rowHeights[rowKey] }
            : {};

          const zebraBg = idx % 2 === 0 ? "bg-white" : "bg-zinc-50/80";

          const isOptionEditing =
            editingCell &&
            editingCell.sectionKey === sectionKey &&
            editingCell.groupIndex === groupIndex &&
            editingCell.index === idx &&
            editingCell.field === "option";

          const isFrequencyEditing =
            editingCell &&
            editingCell.sectionKey === sectionKey &&
            editingCell.groupIndex === groupIndex &&
            editingCell.index === idx &&
            editingCell.field === "frequency";

          const isCommentsEditing =
            editingCell &&
            editingCell.sectionKey === sectionKey &&
            editingCell.groupIndex === groupIndex &&
            editingCell.index === idx &&
            editingCell.field === "comments";

          return (
            <div
              key={idx}
              className={`relative flex items-stretch border-t border-zinc-200 last:border-b-0 ${zebraBg}`}
              style={styleHeight}
            >
              {/* OPTION */}
              <div
                className={`flex-[2] px-3 py-2 border-r border-zinc-200 flex items-stretch ${
                  isOptionEditing ? "bg-emerald-50" : ""
                }`}
              >
                <textarea
                  rows={4}
                  className="
                    w-full h-full
                    bg-transparent border-none outline-none
                    text-sm leading-snug
                    resize-none
                    placeholder-zinc-400
                  "
                  value={optionText}
                  placeholder="Πρόσθεσε εδώ την επιλογή γεύματος"
                  onFocus={() =>
                    startEditing(sectionKey, groupIndex, idx, "option")
                  }
                  onChange={(e) =>
                    handleCellChange(
                      sectionKey,
                      groupIndex,
                      idx,
                      "option",
                      e.target.value
                    )
                  }
                />
              </div>

              {/* FREQUENCY */}
              <div
                className={`flex-[1] px-3 py-2 border-r border-zinc-200 flex items-start ${
                  isFrequencyEditing ? "bg-emerald-50" : ""
                }`}
              >
                <input
                  type="text"
                  className="
                    w-full
                    bg-transparent border-none outline-none
                    text-sm
                    placeholder-zinc-400
                  "
                  placeholder="π.χ. έως 1 φορά/εβδ."
                  value={frequencyText}
                  onFocus={() =>
                    startEditing(sectionKey, groupIndex, idx, "frequency")
                  }
                  onChange={(e) =>
                    handleCellChange(
                      sectionKey,
                      groupIndex,
                      idx,
                      "frequency",
                      e.target.value
                    )
                  }
                />
              </div>

              {/* COMMENTS */}
              <div
                className={`flex-[1] px-3 py-2 flex items-stretch ${
                  isCommentsEditing ? "bg-emerald-50" : ""
                }`}
              >
                <textarea
                  rows={4}
                  className="
                    w-full h-full
                    bg-transparent border-none outline-none
                    text-sm leading-snug
                    resize-none
                    placeholder-zinc-400
                  "
                  placeholder="Σχόλια / προϊόντα"
                  value={commentsText}
                  onFocus={() =>
                    startEditing(sectionKey, groupIndex, idx, "comments")
                  }
                  onChange={(e) =>
                    handleCellChange(
                      sectionKey,
                      groupIndex,
                      idx,
                      "comments",
                      e.target.value
                    )
                  }
                />
              </div>

              {/* RESIZE HANDLE */}
              <div
                className="absolute bottom-0 right-0 w-4 h-3 cursor-row-resize flex items-center justify-center text-[9px] text-zinc-400 select-none bg-white/80"
                onMouseDown={(e) => handleRowMouseDown(e, rowKey)}
                title="Σύρε για να αλλάξεις το ύψος της γραμμής"
              >
                ▤
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // space-y-8 = more gap between MAIN categories, mt-6 = margin-top for first
  return (
    <div className="space-y-8 px-3 mt-6">
      {sectionEntries.map(([sectionKey, sectionValue]) => {
        // Grouped section
        if (Array.isArray(sectionValue?.groups)) {
          const groups = sectionValue.groups;

          return (
            // space-y-6 = more gap between SUB-categories (tables) of same main category
            <div key={sectionKey} className="space-y-6">
              <div className="text-sm font-semibold text-zinc-800 tracking-wide">
                {sectionKey}
              </div>

              {groups.map((group, gi) => (
                <div
                  key={`${sectionKey}-${gi}`}
                  className="-mx-3" // table sticks to x-axis
                >
                  {renderTable(sectionKey, gi, group.label, group.options || [])}
                </div>
              ))}
            </div>
          );
        }

        // Simple section
        const options = Array.isArray(sectionValue)
          ? sectionValue
          : Array.isArray(sectionValue?.options)
            ? sectionValue.options
            : [];

        if (!options.length) return null;

        return (
          <div key={sectionKey} className="space-y-6">
            <div className="text-sm font-semibold text-zinc-800 tracking-wide">
              {sectionKey}
            </div>

            <div className="-mx-3">
              {renderTable(sectionKey, null, null, options)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * DayPlanView
 * Τύπος Β: για κάθε ημέρα, 5 γραμμές (ΠΡΩΙ, ΣΝΑΚ 1, ΜΕΣΗΜΕΡΙ, ΣΝΑΚ 2, ΒΡΑΔΥ)
 * με 2 στήλες: Κατηγορία (αριστερά), Τρόφιμο (δεξιά).
 */
function DayPlanView({ plan }) {
  const days = plan.days || [];

  if (!days.length) {
    return (
      <p className="text-sm text-zinc-500">
        Δεν βρέθηκαν ημέρες στο πλάνο για να παρουσιαστούν.
      </p>
    );
  }

  const SLOTS = ["ΠΡΩΙ", "ΣΝΑΚ 1", "ΜΕΣΗΜΕΡΙ", "ΣΝΑΚ 2", "ΒΡΑΔΥ"];

  return (
    <div className="space-y-4">
      {days.map((day) => {
        const mealByLabel = {};
        (day.meals || []).forEach((meal) => {
          if (meal.label) {
            mealByLabel[meal.label] = meal.content;
          }
        });

        return (
          <div key={day.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-zinc-900">
                {day.name}
              </h3>
              {typeof day.calories !== "undefined" && (
                <span className="inline-flex items-center rounded-full bg-zinc-50 px-2 py-0.5 border border-zinc-200 text-[11px] text-zinc-600">
                  kcal:{" "}
                  <span className="ml-1 font-medium text-zinc-800">
                    {day.calories}
                  </span>
                </span>
              )}
            </div>

            <div className="rounded-lg bg-white border border-zinc-200 overflow-hidden text-xs">
              {SLOTS.map((slot, idx) => (
                <div
                  key={slot}
                  className={[
                    "flex border-zinc-200",
                    idx === 0 ? "border-t-0 border-b" : "border-t border-b-0",
                  ].join(" ")}
                >
                  {/* Αριστερή στήλη: κατηγορία */}
                  <div className="w-32 px-3 py-2 font-semibold text-zinc-700 bg-zinc-50 border-r border-zinc-200">
                    {slot}
                  </div>
                  {/* Δεξιά στήλη: τρόφιμο */}
                  <div className="flex-1 px-3 py-2 text-zinc-700">
                    {mealByLabel[slot] || "—"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
