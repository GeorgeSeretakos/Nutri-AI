"use client";
import { ChevronDown, ChevronUp, RotateCcw } from "lucide-react";
import { useLocale } from "@lib/locale";

export default function ClientFilters({
                                        search,
                                        setSearch,
                                        sortBy,
                                        setSortBy,
                                        sortDir,
                                        setSortDir,
                                      }) {
  const locale = useLocale();
  const T = {
    el: {
      searchLabel: "Αναζήτηση",
      searchPH: "Όνομα ή email...",
      sortLabel: "Ταξινόμηση κατά",
      lastName: "Επώνυμο",
      updatedAt: "Τελευταία τροποποίηση",
      asc: "Αύξουσα",
      desc: "Φθίνουσα",
      reset: "Επαναφορά",
    },
    en: {
      searchLabel: "Search",
      searchPH: "Name or email...",
      sortLabel: "Sort by",
      lastName: "Last name",
      updatedAt: "Last modified",
      asc: "Ascending",
      desc: "Descending",
      reset: "Reset",
    },
  }[locale] || T.el;

  const toggleDir = () => setSortDir((d) => (d === "asc" ? "desc" : "asc"));

  const handleReset = () => {
    setSearch("");
    setSortBy("lastName");
    setSortDir("asc"); // API default
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-4">
      {/* Search */}
      <div className="flex-1">
        <label className="block text-xs font-medium text-gray-700 mb-1">
          {T.searchLabel}
        </label>
        <input
          type="text"
          placeholder={T.searchPH}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
        />
      </div>

      {/* Sort */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">
          {T.sortLabel}
        </label>
        <div className="flex gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
          >
            <option value="lastName">{T.lastName}</option>
            <option value="updatedAt">{T.updatedAt}</option>
          </select>

          <button
            type="button"
            onClick={toggleDir}
            className="px-3 py-2 border rounded text-sm inline-flex items-center gap-1 hover:bg-gray-50"
          >
            {sortDir === "asc" ? (
              <>
                <ChevronUp className="w-4 h-4" />
                <span>{T.asc}</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                <span>{T.desc}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Reset */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1 invisible">
          Reset
        </label>
        <button
          type="button"
          onClick={handleReset}
          className="px-3 py-2 text-sm border rounded hover:bg-gray-50 inline-flex items-center gap-1"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{T.reset}</span>
        </button>
      </div>
    </div>
  );
}
