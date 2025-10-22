"use client";

import { useRef, useState, useMemo, useEffect } from "react";
import { Trash2 } from "lucide-react";
import HeaderTabs from "./HeaderTabs";

const ACCEPT = ["application/pdf", "image/jpeg", "image/png", "image/webp"].join(",");

const CATEGORIES = [
  { id: "DIET", value: "DIET", label: "Διατροφές" },
  { id: "MEASUREMENT", value: "MEASUREMENT", label: "Μετρήσεις" },
  { id: "PHOTO", value: "PHOTO", label: "Λοιπά Αρχεία" },
];

function humanSize(bytes) {
  if (!bytes) return "0 B";
  const k = 1024, s = ["B", "KB", "MB", "GB"];
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
  if (!isOpen) return null;

  const fileInputRef = useRef();
  const [errorMsg, setErrorMsg] = useState("");
  const [perFileMeta, setPerFileMeta] = useState([]);

  const files = useMemo(() => (Array.isArray(file) ? file : file ? [file] : []), [file]);

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

    // Seed meta for NEW files only, using current defaults at add-time
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

    if (!files.length) return setErrorMsg("Πρόσθεσε τουλάχιστον ένα αρχείο για ανέβασμα.");
    if (perFileMeta.some((m) => !m?.type))
      return setErrorMsg("Κάθε αρχείο πρέπει να έχει κατηγορία (Διατροφές, Μετρήσεις ή Λοιπά Αρχεία).");

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
          <h3 className="text-xl font-semibold mb-4">Ανέβασμα Εγγράφων</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Dropzone */}
            <div
              onClick={handleFileClick}
              className="w-full p-5 border-2 border-dashed border-gray-300 rounded cursor-pointer text-center hover:border-teal-800 transition"
              aria-label="Επιλογή ή απόθεση αρχείων"
            >
              <p className="text-gray-700 font-medium">Κάνε κλικ ή σύρε αρχεία εδώ</p>
              <p className="text-xs text-gray-500 mt-1">Επιτρέπονται: PDF, JPG, PNG, WEBP</p>
            </div>
            <input
              type="file"
              multiple
              accept={ACCEPT}
              ref={fileInputRef}
              onChange={onInputChange}
              className="hidden"
            />

            {/* Προεπιλογές */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Προεπιλεγμένη Κατηγορία
                </label>
                <HeaderTabs
                  tabs={CATEGORIES}
                  activeTab={docType}                 /* default control only */
                  setActiveTab={setDocType}
                  size="input"                        /* same height as inputs */
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Προεπιλεγμένη Ημερομηνία
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
                  Προεπιλεγμένη Περιγραφή (προαιρετική)
                </label>
                <input
                  type="text"
                  className="border p-2 rounded w-full"
                  value={description}
                  maxLength={120}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Σημείωση"
                />
              </div>
            </div>

            {files.length > 0 && (
              <div
                className="flex items-center justify-between gap-3 border border-teal-200 bg-teal-50 rounded px-3 py-2">
              <p className="text-sm text-teal-900">
                  Έχεις επιλέξει <span className="font-semibold">{files.length}</span>{" "}
                  {files.length === 1 ? "αρχείο" : "αρχεία"}.
                </p>
                <button
                  type="button"
                  onClick={applyDefaultToAll}
                  className="px-4 py-2 bg-teal-800 text-white rounded font-semibold hover:bg-teal-700"
                >
                  Εφαρμογή προεπιλογών σε ΟΛΑ τα αρχεία
                </button>
              </div>
            )}

            {files.length > 0 && (
              <div className="border rounded">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2">Αρχείο</th>
                    <th className="px-3 py-2">Κατηγορία</th>
                    <th className="px-3 py-2 hidden sm:table-cell">Ημερομηνία</th>
                    <th className="px-3 py-2 hidden md:table-cell">Περιγραφή</th>
                    <th className="px-3 py-2"></th>
                  </tr>
                  </thead>
                  <tbody className="divide-y">
                  {files.map((f, idx) => (
                    <tr key={`${f.name}-${idx}`}>
                      <td className="px-3 py-2 align-top">
                        <div className="font-medium truncate max-w-[260px] md:max-w-[420px]">
                          {f.name}
                        </div>
                        <div className="text-xs text-gray-500">{humanSize(f.size)}</div>
                      </td>

                      {/* Per-file category tabs (compact, per-file state only) */}
                      <td className="px-3 py-2 align-top">
                        <HeaderTabs
                          tabs={CATEGORIES}
                          activeTab={perFileMeta[idx]?.type}                 /* per-file only */
                          setActiveTab={(val) => setMeta(idx, { type: val })}
                          size="compact"                                     /* smaller font/height */
                        />
                      </td>

                      <td className="px-3 py-2 align-top hidden sm:table-cell whitespace-nowrap">
                        <input
                          type="date"
                          className="border rounded px-2 py-1 text-sm w-[14ch] md:w-[16ch]"
                          value={perFileMeta[idx]?.date || ""}
                          onChange={(e) => setMeta(idx, {date: e.target.value})}
                        />
                      </td>

                      <td className="px-3 py-2 align-top hidden md:table-cell">
                        <input
                          type="text"
                          className="border rounded px-2 py-1 text-sm w-full"
                          maxLength={120}
                          placeholder="Σημείωση"
                          value={perFileMeta[idx]?.description ?? ""}
                          onChange={(e) => setMeta(idx, {description: e.target.value})}
                        />
                      </td>

                      <td className="px-3 py-2 align-top text-right">
                        <button
                          type="button"
                          onClick={() => removeAt(idx)}
                          className="inline-flex items-center justify-center w-8 h-8 text-red-600 hover:bg-red-50 rounded transition"
                          title="Διαγραφή"
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
              <p className={`text-sm ${errorMsg ? "text-red-600" : "text-gray-700"}`}>
                {errorMsg || status}
              </p>
            )}

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-2 border rounded hover:bg-gray-100"
                disabled={loading}
              >
                Ακύρωση
              </button>
              <button
                type="submit"
                disabled={loading || files.length === 0}
                className="px-4 py-2 bg-teal-800 text-white rounded font-semibold shadow disabled:opacity-60"
              >
                {loading ? "Ανέβασμα..." : "Ανέβασμα"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
