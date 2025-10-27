// EditClientModal.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { useLocale } from "@lib/locale";

export default function EditClientModal({
                                          isOpen,
                                          onClose,
                                          formData,
                                          setFormData,
                                          onSave,
                                          loading,
                                        }) {
  const locale = useLocale(); // "el" | "en"
  const L = {
    el: {
      title: "Επεξεργασία Πελάτη",
      firstName: "Όνομα",
      firstNameHelp: "Το μικρό όνομα του πελάτη.",
      lastName: "Επώνυμο",
      lastNameHelp: "Το επίθετο του πελάτη.",
      phone: "Τηλέφωνο (προαιρετικό)",
      phonePH: "π.χ. 69xxxxxxxx",
      phoneHelp: "Προσθέστε ένα κινητό ή σταθερό τηλέφωνο επικοινωνίας.",
      cancel: "Ακύρωση",
      save: "Αποθήκευση",
      saving: "Αποθήκευση...",
      dialogLabel: "Παράθυρο διαλόγου επεξεργασίας πελάτη",
    },
    en: {
      title: "Edit Client",
      firstName: "First name",
      firstNameHelp: "The client’s given name.",
      lastName: "Last name",
      lastNameHelp: "The client’s family name.",
      phone: "Phone (optional)",
      phonePH: "e.g. 69xxxxxxxx",
      phoneHelp: "Add a mobile or landline contact number.",
      cancel: "Cancel",
      save: "Save",
      saving: "Saving...",
      dialogLabel: "Edit client dialog",
    },
  }[locale] || {
    title: "Επεξεργασία Πελάτη",
    firstName: "Όνομα",
    firstNameHelp: "Το μικρό όνομα του πελάτη.",
    lastName: "Επώνυμο",
    lastNameHelp: "Το επίθετο του πελάτη.",
    phone: "Τηλέφωνο (προαιρετικό)",
    phonePH: "π.χ. 69xxxxxxxx",
    phoneHelp: "Προσθέστε ένα κινητό ή σταθερό τηλέφωνο επικοινωνίας.",
    cancel: "Ακύρωση",
    save: "Αποθήκευση",
    saving: "Αποθήκευση...",
    dialogLabel: "Παράθυρο διαλόγου επεξεργασίας πελάτη",
  };

  const firstInputRef = useRef(null);
  const onCloseRef = useRef(onClose);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const busy = Boolean(loading || isSubmitting);

  useEffect(() => { onCloseRef.current = onClose; }, [onClose]);

  // focus only when opens (rAF avoids fighting clicks)
  useEffect(() => {
    if (!isOpen) return;
    const id = requestAnimationFrame(() => firstInputRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [isOpen]);

  // ESC close (read latest onClose via ref)
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") onCloseRef.current?.(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      await onSave?.();
    } finally {
      setIsSubmitting(false);
    }
  };

  const stop = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onMouseDown={() => onCloseRef.current?.()}
      aria-label={L.dialogLabel}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        onMouseDown={stop}
        role="dialog"
        aria-modal="true"
        aria-labelledby="edit-client-title"
      >
        <h2 id="edit-client-title" className="text-lg font-semibold mb-4">
          {L.title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4" aria-busy={busy}>
          {/* First name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              {L.firstName}
            </label>
            <input
              id="firstName"
              ref={firstInputRef}
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="mt-1 w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-800"
              aria-describedby="firstNameHelp"
              required
              autoComplete="given-name"
            />
            <p id="firstNameHelp" className="mt-1 text-xs text-gray-500">
              {L.firstNameHelp}
            </p>
          </div>

          {/* Last name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              {L.lastName}
            </label>
            <input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="mt-1 w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-800"
              aria-describedby="lastNameHelp"
              required
              autoComplete="family-name"
            />
            <p id="lastNameHelp" className="mt-1 text-xs text-gray-500">
              {L.lastNameHelp}
            </p>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              {L.phone}
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-1 w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-800"
              aria-describedby="phoneHelp"
              placeholder={L.phonePH}
              autoComplete="tel"
            />
            <p id="phoneHelp" className="mt-1 text-xs text-gray-500">
              {L.phoneHelp}
            </p>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => onCloseRef.current?.()}
              className="px-3 py-2 text-sm border rounded hover:cursor-pointer"
            >
              {L.cancel}
            </button>
            <button
              type="submit"
              disabled={busy}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-teal-800 text-white rounded hover:cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              aria-busy={busy}
            >
              {busy ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {L.saving}
                </>
              ) : (
                L.save
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
