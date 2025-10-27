"use client";

import DateFilter from "./DateFilter";
import HeaderTabs from "./HeaderTabs";
import { Edit, Upload, Trash2, Mail, Loader2 } from "lucide-react";
import { useLocale } from "@lib/locale";

export default function ClientInfoCard({
                                         client,
                                         mode = "admin",
                                         onEdit,
                                         onUpload,
                                         onDelete,
                                         onNotify,
                                         notifyLoading,
                                         activeTab,
                                         setActiveTab,
                                         setDateFilter,
                                       }) {
  const locale = useLocale();
  const L = {
    el: {
      edit: "Επεξεργασία",
      notify: "Ειδοποίηση χρήστη",
      noEmail: "Δεν υπάρχει email για τον πελάτη",
      totalDocs: "Συνολικά έγγραφα",
      upload: "Ανέβασμα",
      lastUpdated: "Τελευταία τροποποίηση",
      deleteClient: "Διαγραφή πελάτη",
      emailPrefix: "email",
      telPrefix: "Τηλ",
      tabs: {
        diet: "Διατροφές",
        measurement: "Μετρήσεις",
        photo: "Λοιπά Αρχεία",
      },
      dtLocale: "el-GR",
    },
    en: {
      edit: "Edit",
      notify: "Notify user",
      noEmail: "No email for this client",
      totalDocs: "Total documents",
      upload: "Upload",
      lastUpdated: "Last updated",
      deleteClient: "Delete client",
      emailPrefix: "email",
      telPrefix: "Tel",
      tabs: {
        diet: "Meal Plans",
        measurement: "Measurements",
        photo: "Other Files",
      },
      dtLocale: "en-GB",
    },
  }[locale] || L?.el;

  const totalDocs = client.documents?.length || 0;

  const formatDate = (date) =>
    date
      ? new Intl.DateTimeFormat(L.dtLocale, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date(date))
      : "-";

  return (
    <div className="border-b-4 border-gray-100 py-6 px-12 flex flex-col md:flex-row gap-6 md:justify-between">
      {/* Left: Client info */}
      <div className="flex items-start gap-4 md:flex-1">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold text-lg shrink-0">
          {client.firstName?.[0]}
          {client.lastName?.[0]}
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold truncate">
              {client.firstName} {client.lastName}
            </h2>
            {mode === "admin" && (
              <button
                type="button"
                onClick={onEdit}
                className="p-1 rounded hover:bg-gray-100 text-gray-600"
                title={L.edit}
                aria-label={L.edit}
              >
                <Edit className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Email row with inline notify action */}
          {client.email && (
            <div className="text-gray-600 flex items-center gap-2 min-w-0">
              <span className="break-all">
                {L.emailPrefix}:{" "}
                <a
                  href={`mailto:${client.email}`}
                  className="underline-offset-2 hover:underline"
                >
                  {client.email}
                </a>
              </span>
              {mode === "admin" && (
                <button
                  type="button"
                  onClick={onNotify}
                  disabled={!client.email || notifyLoading}
                  className="p-1 rounded hover:bg-gray-100 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                  title={client.email ? L.notify : L.noEmail}
                  aria-label={L.notify}
                >
                  {notifyLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Mail className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>
          )}

          {client.phone && (
            <p className="text-gray-600">
              {L.telPrefix}: {client.phone}
            </p>
          )}

          <div className="mt-3 space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <p>
                {L.totalDocs}:{" "}
                <span className="font-semibold">{totalDocs}</span>
              </p>
              {mode === "admin" && (
                <button
                  type="button"
                  onClick={onUpload}
                  className="p-1 rounded hover:bg-gray-100 text-gray-600"
                  title={L.upload}
                  aria-label={L.upload}
                >
                  <Upload className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <p>
                {L.lastUpdated}:{" "}
                <span className="font-semibold">
                  {formatDate(client.updatedAt)}
                </span>
              </p>
              {mode === "admin" && (
                <button
                  type="button"
                  onClick={onDelete}
                  className="p-1 rounded hover:bg-gray-100 text-gray-600"
                  title={L.deleteClient}
                  aria-label={L.deleteClient}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right: Filters */}
      <div className="md:self-center w-full md:w-[28rem] lg:w-[32rem] flex flex-col gap-3">
        <div className="w-full">
          <DateFilter setDateFilter={setDateFilter} />
        </div>
        <div className="w-full">
          <HeaderTabs
            tabs={[
              { id: "diet", label: L.tabs.diet },
              { id: "measurement", label: L.tabs.measurement },
              { id: "photo", label: L.tabs.photo },
            ]}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            size="input"
          />
        </div>
      </div>
    </div>
  );
}
