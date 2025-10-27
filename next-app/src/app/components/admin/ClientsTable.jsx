"use client";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { useLocale } from "@lib/locale";

export default function ClientsTable({ clients }) {
  const router = useRouter();
  const locale = useLocale();

  const T = {
    el: {
      empty: "Δεν βρέθηκαν πελάτες.",
      lastName: "Επώνυμο",
      firstName: "Όνομα",
      email: "Email",
      phone: "Τηλέφωνο",
      updatedAt: "Τελευταία τροποποίηση",
      dtLocale: "el-GR",
      dash: "—",
    },
    en: {
      empty: "No clients found.",
      lastName: "Last name",
      firstName: "First name",
      email: "Email",
      phone: "Phone",
      updatedAt: "Last modified",
      dtLocale: "en-GB",
      dash: "—",
    },
  }[locale] || {
    empty: "Δεν βρέθηκαν πελάτες.",
    lastName: "Επώνυμο",
    firstName: "Όνομα",
    email: "Email",
    phone: "Τηλέφωνο",
    updatedAt: "Τελευταία τροποποίηση",
    dtLocale: "el-GR",
    dash: "—",
  };

  if (!clients?.length) {
    return <p className="text-gray-500 py-12 text-center">{T.empty}</p>;
  }

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const d = new Date(dateString);
    return new Intl.DateTimeFormat(T.dtLocale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(d);
  };

  // Shared grid classes for header + rows
  const gridCols = "grid grid-cols-[1.1fr_1.1fr_2fr_1fr_1.4fr] gap-4 items-center";

  return (
    <div className="space-y-3">
      {/* Desktop / Tablet (md+) */}
      <div className="hidden md:block bg-white border-b-1 overflow-hidden">
        <table className="w-full table-fixed">
          <thead>
          <tr className="bg-teal-800 text-white text-sm">
            <th className="p-0" colSpan={5}>
              <div className="max-w-6xl mx-auto px-4">
                <div className={`${gridCols} py-3`}>
                  <div className="font-bold text-left">{T.lastName}</div>
                  <div className="font-bold text-left">{T.firstName}</div>
                  <div className="font-bold text-left">{T.email}</div>
                  <div className="font-bold text-left">{T.phone}</div>
                  <div className="font-bold text-left">{T.updatedAt}</div>
                </div>
              </div>
            </th>
          </tr>
          </thead>

          <tbody>
          {clients.map((c) => (
            <tr
              key={c.id}
              onClick={() => router.push(`/admin/client/${c.id}`)}
              className="border-t hover:bg-zinc-100 cursor-pointer text-xs sm:text-sm"
            >
              <td className="p-0" colSpan={5}>
                <div className="max-w-6xl mx-auto px-4">
                  <div className={`${gridCols} py-3`}>
                    <div className="truncate font-bold">{c.lastName}</div>
                    <div className="truncate font-bold">{c.firstName}</div>
                    <div className="truncate" title={c.email}>
                      {c.email}
                    </div>
                    <div className="truncate">{c.phone || T.dash}</div>
                    <div className="whitespace-nowrap font-bold">
                      {formatDate(c.updatedAt)}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>

      {/* Mobile (<md) — cards */}
      <ul className="md:hidden space-y-3 px-4">
        {clients.map((c) => (
          <li
            key={c.id}
            className="bg-white p-4 max-w-md mx-auto w-full"
            role="button"
            onClick={() => router.push(`/admin/client/${c.id}`)}
          >
            <div className="flex items-center justify-between">
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">
                  {c.lastName} {c.firstName}
                </p>
                <p className="text-xs text-gray-600 truncate" title={c.email}>
                  {c.email}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
            </div>
            <div className="mt-2 flex items-center justify-between text-[0.7rem] text-gray-600">
              <span className="truncate">{c.phone || T.dash}</span>
              <span className="whitespace-nowrap">{formatDate(c.updatedAt)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
