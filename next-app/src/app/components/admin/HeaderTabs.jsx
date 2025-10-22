"use client";

export default function HeaderTabs({
                                     activeTab,
                                     setActiveTab,
                                     tabs = [],
                                     size = "default",   // "input" | "compact"
                                     className = "",
                                   }) {
  const sizeCls =
    size === "input"
      ? "h-10 text-sm px-4"             // ≈ native input height
      : "h-8 text-[11px] px-2";         // compact for table rows

  return (
    <div className={`inline-flex w-full rounded border border-gray-300 overflow-hidden ${className}`}>
      {tabs.map((tab, i) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={[
              "flex-1 transition font-medium whitespace-nowrap",
              sizeCls,
              "flex items-center justify-center",
              isActive ? "bg-teal-800 text-white" : "bg-white text-gray-700 hover:bg-gray-100",
              i !== 0 ? "border-l border-gray-300" : "",
            ].join(" ")}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
