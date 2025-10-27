"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { useLocale } from "@lib/locale";

export default function AddClientModal({ onClose, onClientAdded }) {
  const locale = useLocale();
  const T = {
    el: {
      title: "Νέος Πελάτης",
      firstName: "Όνομα",
      firstNameHelp: "Το μικρό όνομα του πελάτη.",
      lastName: "Επώνυμο",
      lastNameHelp: "Το επίθετο του πελάτη.",
      email: "Email",
      emailHelp: "Το email επικοινωνίας του πελάτη.",
      confirmEmail: "Επιβεβαίωση email",
      confirmEmailHelp: "Πληκτρολογήστε ξανά το email για επιβεβαίωση.",
      phone: "Τηλέφωνο (προαιρετικό)",
      phonePH: "π.χ. 69xxxxxxxx",
      phoneHelp: "Προσθέστε κινητό ή σταθερό τηλέφωνο.",
      cancel: "Ακύρωση",
      add: "Προσθήκη",
      mismatch: "Τα email δεν ταιριάζουν.",
      failCreate: "Αποτυχία δημιουργίας πελάτη. Προσπαθήστε ξανά.",
    },
    en: {
      title: "New Client",
      firstName: "First name",
      firstNameHelp: "The client’s given name.",
      lastName: "Last name",
      lastNameHelp: "The client’s family name.",
      email: "Email",
      emailHelp: "The client’s contact email.",
      confirmEmail: "Confirm email",
      confirmEmailHelp: "Type the email again to confirm.",
      phone: "Phone (optional)",
      phonePH: "e.g. 69xxxxxxxx",
      phoneHelp: "Add a mobile or landline number.",
      cancel: "Cancel",
      add: "Add",
      mismatch: "Emails do not match.",
      failCreate: "Failed to create client. Please try again.",
    },
  }[locale] || T?.el;

  const [form, setForm] = useState({
    email: "",
    confirmEmail: "",
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); // inline errors only (no generic status)

  const firstInputRef = useRef(null);

  useEffect(() => {
    firstInputRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const emailsMismatch =
    form.email.trim() !== "" &&
    form.confirmEmail.trim() !== "" &&
    form.email.trim() !== form.confirmEmail.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (emailsMismatch) {
      setErrorMsg(T.mismatch);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/admin/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email: form.email.trim(),
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          phone: form.phone.trim(),
        }),
      });

      if (!res.ok) throw new Error("Failed to add client");

      const data = await res.json();
      onClientAdded?.(data);
      onClose?.();
    } catch (err) {
      console.error(err);
      setErrorMsg(T.failCreate);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-client-title"
      >
        <h2 id="add-client-title" className="text-lg font-semibold mb-4">
          {T.title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              {T.firstName}
            </label>
            <input
              id="firstName"
              ref={firstInputRef}
              type="text"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="mt-1 w-full border rounded px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
              required
              autoComplete="given-name"
            />
            <p className="mt-1 text-xs text-gray-500">{T.firstNameHelp}</p>
          </div>

          {/* Last name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              {T.lastName}
            </label>
            <input
              id="lastName"
              type="text"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="mt-1 w-full border rounded px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
              required
              autoComplete="family-name"
            />
            <p className="mt-1 text-xs text-gray-500">{T.lastNameHelp}</p>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              {T.email}
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full border rounded px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
              required
              autoComplete="email"
            />
            <p className="mt-1 text-xs text-gray-500">{T.emailHelp}</p>
          </div>

          {/* Confirm Email */}
          <div>
            <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700">
              {T.confirmEmail}
            </label>
            <input
              id="confirmEmail"
              type="email"
              value={form.confirmEmail}
              onChange={(e) => setForm({ ...form, confirmEmail: e.target.value })}
              className={`mt-1 w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
                emailsMismatch ? "border-red-300 focus:ring-red-500" : "focus:ring-teal-600 focus:border-teal-600"
              }`}
              required
              aria-invalid={emailsMismatch ? "true" : "false"}
              aria-describedby="confirm-email-help"
              autoComplete="email"
            />
            <p
              id="confirm-email-help"
              className={`mt-1 text-xs ${emailsMismatch ? "text-red-600" : "text-gray-500"}`}
            >
              {emailsMismatch ? T.mismatch : T.confirmEmailHelp}
            </p>
          </div>

          {/* Phone (optional) */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              {T.phone}
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="mt-1 w-full border rounded px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
              placeholder={T.phonePH}
              autoComplete="tel"
            />
            <p className="mt-1 text-xs text-gray-500">{T.phoneHelp}</p>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 text-sm border rounded hover:bg-gray-50"
            >
              {T.cancel}
            </button>
            <button
              type="submit"
              disabled={loading || emailsMismatch}
              aria-busy={loading}
              className="px-4 py-2 text-sm bg-teal-700 text-white rounded hover:bg-teal-800 disabled:opacity-60 inline-flex items-center gap-2"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
              {T.add}
            </button>
          </div>
        </form>

        {/* Inline error only (no generic status) */}
        {errorMsg && (
          <p className="mt-3 text-sm text-red-600" role="alert" aria-live="polite">
            {errorMsg}
          </p>
        )}
      </div>
    </div>
  );
}
