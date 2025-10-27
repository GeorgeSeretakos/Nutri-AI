"use client";

import DocumentItem from "./DocumentItem";
import { format } from "date-fns";
import { el as elGR, enGB } from "date-fns/locale";
import { useLocale } from "@lib/locale";

export default function DocumentList({ documents, onDownload, onDelete }) {
  const locale = useLocale(); // "el" | "en"
  const L = {
    el: {
      empty: "Δεν έχουν προστεθεί ακόμη έγγραφα σε αυτή την κατηγορία.",
      dfLocale: elGR,
      monthPattern: "MMMM yyyy",
    },
    en: {
      empty: "No documents have been added in this category yet.",
      dfLocale: enGB,
      monthPattern: "MMMM yyyy",
    },
  }[locale] || {
    empty: "Δεν έχουν προστεθεί ακόμη έγγραφα σε αυτή την κατηγορία.",
    dfLocale: elGR,
    monthPattern: "MMMM yyyy",
  };

  const keys = Object.keys(documents || {});
  if (keys.length === 0) {
    return <p className="text-gray-500 text-center py-12">{L.empty}</p>;
  }

  return (
    <div>
      {keys
        .sort((a, b) => new Date(b + "-01") - new Date(a + "-01")) // "2025-08" → Date
        .map((ym) => (
          <div key={ym} className="shadow">
            <h3 className="text-lg bg-teal-800 py-2 px-4 text-white font-bold">
              {format(new Date(ym + "-01"), L.monthPattern, { locale: L.dfLocale })}
            </h3>

            <div>
              {(documents[ym] || []).map((doc) => (
                <DocumentItem
                  key={doc.id}
                  doc={doc}
                  onDownload={onDownload}
                  {...(onDelete ? { onDelete } : {})}
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
