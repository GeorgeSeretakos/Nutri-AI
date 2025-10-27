"use client";

import { useRef, useState, useMemo, useEffect } from "react";
import { Trash2 } from "lucide-react";
import HeaderTabs from "./HeaderTabs";
import { useLocale } from "@lib/locale";

const ACCEPT = "*/*";

const BASE_CATEGORIES = [
  { id: "DIET", value: "DIET" },
  { id: "MEASUREMENT", value: "MEASUREMENT" },
  { id: "PHOTO", value: "PHOTO" },
];

function humanSize(bytes) {
  if (!bytes) return "0 B";
  const k = 1024,
    s = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(1)} ${s[i]}`;
}

export default function UploadModal({
                                      isOpen,
                                      onClose,
                                      onSubmit,
                                      file,
                                      setFile,
                                      docType,
                                      setDocType,
                                      description,
                                      setDescription,
                                      status,
                                      loading,
                                      date,
                                      setDate,
                                    }) {
  const locale = useLocale(); // "el" | "en"

  // ---- Translations ----
  const L = {
    el: {
      title: "Ανέβασμα Εγγράφων",
      dropzoneTitle: "Κάνε κλικ ή σύρε αρχεία εδώ",
      dropzoneSub: "Επιτρέπονται όλα τα είδη αρχείων",
      defaultCategory: "Προεπιλεγμένη Κατηγορία",
      defaultDate: "Προεπιλεγμένη Ημερομηνία",
      defaultDesc: "Προεπιλεγμένη Περιγραφή (προαιρετική)",
      notePH: "Σημείωση",
      selected: "Έχεις επιλέξει",
      file: "αρχείο",
      files: "αρχεία",
      applyDefaults: "Εφαρμογή προεπιλογών σε ΟΛΑ τα αρχεία",
      category: "Κατηγορία",
      date: "Ημερομηνία",
      note: "Σημείωση",
      delete: "Διαγραφή",
      cancel: "Ακύρωση",
      upload: "Ανέβασμα",
      uploading: "Ανέβασμα...",
      errNoFiles: "Πρόσθεσε τουλάχιστον ένα αρχείο για ανέβασμα.",
      errNoCategory:
        "Κάθε αρχείο πρέπει να έχει κατηγορία (Διατροφές, Μετρήσεις ή Λοιπά Αρχεία).",
      categories: {
        DIET: "Διατροφές",
        MEASUREMENT: "Μετρήσεις",
        PHOTO: "Λοιπά Αρχεία",
      },
    },
    en: {
      title: "Upload Documents",
      dropzoneTitle: "Click or drag files here",
      dropzoneSub: "All file types are allowed",
      defaultCategory: "Default Category",
      defaultDate: "Default Date",
      defaultDesc: "Default Description (optional)",
      notePH: "Note",
      selected: "You selected",
      file: "file",
      files: "files",
      applyDefaults: "Apply defaults to ALL files",
      category: "Category",
      date: "Date",
      note: "Note",
      delete: "Delete",
      cancel: "Cancel",
      upload: "Upload",
      uploading: "Uploading...",
      errNoFiles: "Please add at least one file to upload.",
      errNoCategory:
        "Each file must have a category (Diets, Measurements, or Other Files).",
      categories: {
        DIET: "Diets",
        MEASUREMENT: "Measurements",
        PHOTO: "Other Files",
      },
    },
  }[locale] || L.el;

  // ---- Localized category tabs ----
  const CATEGORIES = useMemo(
    () => BASE_CATEGORIES.map((c) => ({ ...c, label: L.categories[c.id] })),
    [L]
  );

  if (!isOpen) return null;

  const fileInputRef = useRef();
  const [errorMsg, setErrorMsg] = useState("");
  const [perFileMeta, setPerFileMeta] = useState([]);

  const files = useMemo(
    () => (Array.isArray(file) ? file : file ? [file] : []),
    [file]
  );

  useEffect(() => {
    if (isOpen) {
      setErrorMsg("");
      setPerFileMeta([]);
      if (!date) setDate?.(new Date().toISOString().split("T")[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleFileClick = () => fileInputRef.current?.click();

  function onInputChange(e) {
    const incoming = Array.from(e.target.files || []);
    if (!incoming.length) return;

    const newMetas = incoming.map(() => ({
      type: docType,
      date,
      description: description || "",
    }));

    setFile([...(files || []), ...incoming]);
    setPerFileMeta([...(perFileMeta || []), ...newMetas]);
    e.target.value = "";
  }

  function removeAt(idx) {
    const nf = files.filter((_, i) => i !== idx);
    const nm = perFileMeta.filter((_, i) => i !== idx);
    setFile(nf);
    setPerFileMeta(nm);
  }

  function setMeta(idx, patch) {
    setPerFileMeta((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], ...patch };
      return next;
    });
  }

  function applyDefaultToAll() {
    setPerFileMeta(
      files.map(() => ({
        type: docType,
        date,
        description: description || "",
      }))
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");

    if (!files.length) return setErrorMsg(L.errNoFiles);
    if (perFileMeta.some((m) => !m?.type)) return setErrorMsg(L.errNoCategory);

    await onSubmit?.({
      files,
      meta: {
        defaultType: docType,
        defaultDate: date,
        defaultDescription: description || "",
      },
      perFileMeta,
    });
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
      <div className="min-h-full flex items-start justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg my-10 w-[min(96vw,1100px)]">
          <h3 className="text-xl font-semibold mb-4">{L.title}</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Dropzone */}
            <div
              onClick={handleFileClick}
              className="w-full p-5 border-2 border-dashed border-gray-300 rounded cursor-pointer text-center hover:border-teal-800 transition"
              aria-label={L.dropzoneTitle}
            >
              <p className="text-gray-700 font-medium">{L.dropzoneTitle}</p>
              <p className="text-xs text-gray-500 mt-1">{L.dropzoneSub}</p>
            </div>
            <input
              type="file"
              multiple
              accept={ACCEPT}
              ref={fileInputRef}
              onChange={onInputChange}
              className="hidden"
            />

            {/* Default values */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {L.defaultCategory}
                </label>
                <HeaderTabs
                  tabs={CATEGORIES}
                  activeTab={docType}
                  setActiveTab={setDocType}
                  size="input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {L.defaultDate}
                </label>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {L.defaultDesc}
                </label>
                <input
                  type="text"
                  className="border p-2 rounded w-full"
                  value={description}
                  maxLength={120}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={L.notePH}
                />
              </div>
            </div>

            {/* Apply defaults to all */}
            {files.length > 0 && (
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 border border-teal-200 bg-teal-50 rounded px-3 py-2">
                <p className="text-sm text-teal-900">
                  {L.selected}{" "}
                  <span className="font-semibold">{files.length}</span>{" "}
                  {files.length === 1 ? L.file : L.files}.
                </p>
                <button
                  type="button"
                  onClick={applyDefaultToAll}
                  className="w-full sm:w-auto px-4 py-2 bg-teal-800 text-white rounded font-semibold hover:bg-teal-700"
                >
                  {L.applyDefaults}
                </button>
              </div>
            )}

            {/* Mobile cards */}
            {files.length > 0 && (
              <div className="md:hidden space-y-3">
                {files.map((f, idx) => (
                  <div key={`${f.name}-${idx}`} className="border rounded p-3 relative">
                    <button
                      type="button"
                      onClick={() => removeAt(idx)}
                      className="absolute top-2 right-2 inline-flex items-center justify-center w-8 h-8 text-red-600 hover:bg-red-50 rounded transition"
                      title={L.delete}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>

                    <div className="mb-2 pr-10">
                      <div className="font-medium break-words">{f.name}</div>
                      <div className="text-xs text-gray-500">
                        {humanSize(f.size)}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {L.category}
                        </label>
                        <HeaderTabs
                          tabs={CATEGORIES}
                          activeTab={perFileMeta[idx]?.type}
                          setActiveTab={(val) => setMeta(idx, { type: val })}
                          size="input"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {L.date}
                        </label>
                        <input
                          type="date"
                          className="border rounded px-3 py-2 text-sm w-full"
                          value={perFileMeta[idx]?.date || ""}
                          onChange={(e) => setMeta(idx, { date: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {L.note}
                        </label>
                        <input
                          type="text"
                          className="border rounded px-3 py-2 text-sm w-full"
                          maxLength={120}
                          placeholder={L.notePH}
                          value={perFileMeta[idx]?.description ?? ""}
                          onChange={(e) =>
                            setMeta(idx, { description: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Desktop table */}
            {files.length > 0 && (
              <div className="hidden md:block border rounded">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2">{L.file}</th>
                    <th className="px-3 py-2">{L.category}</th>
                    <th className="px-3 py-2">{L.date}</th>
                    <th className="px-3 py-2">{L.note}</th>
                    <th className="px-3 py-2"></th>
                  </tr>
                  </thead>
                  <tbody className="divide-y">
                  {files.map((f, idx) => (
                    <tr key={`${f.name}-${idx}`}>
                      <td className="px-3 py-2 align-top">
                        <div className="font-medium truncate max-w-[420px]">
                          {f.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {humanSize(f.size)}
                        </div>
                      </td>

                      <td className="px-3 py-2 align-top">
                        <HeaderTabs
                          tabs={CATEGORIES}
                          activeTab={perFileMeta[idx]?.type}
                          setActiveTab={(val) => setMeta(idx, { type: val })}
                          size="compact"
                        />
                      </td>

                      <td className="px-3 py-2 align-top whitespace-nowrap">
                        <input
                          type="date"
                          className="border rounded px-2 py-1 text-sm w-[14ch] md:w-[16ch]"
                          value={perFileMeta[idx]?.date || ""}
                          onChange={(e) =>
                            setMeta(idx, { date: e.target.value })
                          }
                        />
                      </td>

                      <td className="px-3 py-2 align-top">
                        <input
                          type="text"
                          className="border rounded px-2 py-1 text-sm w-full"
                          maxLength={120}
                          placeholder={L.notePH}
                          value={perFileMeta[idx]?.description ?? ""}
                          onChange={(e) =>
                            setMeta(idx, { description: e.target.value })
                          }
                        />
                      </td>

                      <td className="px-3 py-2 align-top text-right">
                        <button
                          type="button"
                          onClick={() => removeAt(idx)}
                          className="inline-flex items-center justify-center w-8 h-8 text-red-600 hover:bg-red-50 rounded transition"
                          title={L.delete}
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            )}

            {(errorMsg || status) && (
              <p
                className={`text-sm ${
                  errorMsg ? "text-red-600" : "text-gray-700"
                }`}
              >
                {errorMsg || status}
              </p>
            )}

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded hover:bg-gray-100 w-full sm:w-auto"
                disabled={loading}
              >
                {L.cancel}
              </button>
              <button
                type="submit"
                disabled={loading || files.length === 0}
                className="px-4 py-2 bg-teal-800 text-white rounded font-semibold shadow disabled:opacity-60 w-full sm:w-auto"
              >
                {loading ? L.uploading : L.upload}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
