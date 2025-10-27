"use client";
import { Download, Trash2, FileText, Image as ImageIcon, File } from "lucide-react";
import { useLocale } from "@lib/locale";

function pickIcon(name = "", mime = "") {
  const n = name?.toLowerCase() || "";
  if (mime?.startsWith("image/") || /\.(png|jpe?g|gif|webp|heic)$/i.test(n)) return ImageIcon;
  if (/\.(pdf|docx?|txt|md)$/i.test(n)) return FileText;
  return File;
}

export default function DocumentItem({ doc, onDownload, onDelete }) {
  const locale = useLocale(); // "el" | "en"
  const L = {
    el: {
      untitled: "Χωρίς τίτλο",
      download: "Λήψη",
      delete: "Διαγραφή",
      downloadTitle: "Λήψη",
      deleteTitle: "Διαγραφή",
      dateLocale: "el-GR",
      dash: "—",
    },
    en: {
      untitled: "Untitled",
      download: "Download",
      delete: "Delete",
      downloadTitle: "Download",
      deleteTitle: "Delete",
      dateLocale: "en-GB",
      dash: "—",
    },
  }[locale] || {
    untitled: "Χωρίς τίτλο",
    download: "Λήψη",
    delete: "Διαγραφή",
    downloadTitle: "Λήψη",
    deleteTitle: "Διαγραφή",
    dateLocale: "el-GR",
    dash: "—",
  };

  const Icon = pickIcon(doc?.name, doc?.mimeType);

  const dateLabel = doc?.date
    ? new Date(doc.date).toLocaleDateString(L.dateLocale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    : L.dash;

  const canDelete = typeof onDelete === "function";

  return (
    <div className="w-full bg-white transition-colors border-b border-gray-200 last:border-b-0">
      <div className="flex items-center gap-3 px-4 md:px-12 py-2">
        <Icon className="h-4 w-4 text-teal-800 shrink-0" />

        <div className="min-w-0 flex-1">
          <p className="truncate font-medium text-[0.7rem] sm:text-xs md:text-sm text-zinc-900">
            {doc?.name || L.untitled}
          </p>

          {doc?.description && (
            <p className="whitespace-pre-line break-words text-[0.65rem] sm:text-xs md:text-sm text-zinc-500">
              {doc.description}
            </p>
          )}

          <p className="md:hidden mt-1 text-[0.65rem] sm:text-xs text-zinc-500">{dateLabel}</p>
        </div>

        <div className="hidden md:block w-48 text-right text-[0.7rem] sm:text-xs md:text-sm text-zinc-700">
          {dateLabel}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onDownload?.(doc.id)}
            className="inline-flex items-center gap-1.5 px-2 py-1 rounded hover:bg-zinc-100 text-zinc-700 text-[0.7rem] sm:text-xs md:text-sm"
            title={L.downloadTitle}
            aria-label={L.downloadTitle}
          >
            <Download className="w-4 h-4" />
            <span className="hidden md:inline">{L.download}</span>
          </button>

          {canDelete && (
            <button
              onClick={() => onDelete(doc.id)}
              className="inline-flex items-center gap-1.5 px-2 py-1 rounded hover:bg-red-50 text-red-600 text-[0.7rem] sm:text-xs md:text-sm"
              title={L.deleteTitle}
              aria-label={L.deleteTitle}
            >
              <Trash2 className="w-4 h-4" />
              <span className="hidden md:inline">{L.delete}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
