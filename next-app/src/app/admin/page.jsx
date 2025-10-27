"use client";

import AddClientModal from "../components/admin/AddClientModal";
import ClientsTable from "../components/admin/ClientsTable";
import { useEffect, useMemo, useState } from "react";
import ClientFilters from "../components/admin/ClientFilters";
import { Plus } from "lucide-react";
import { useLocale } from "@lib/locale";

export default function AdminPage() {
  const locale = useLocale(); // "el" | "en"
  const L = {
    el: {
      title: "Πελάτες",
      addTitle: "Νέος πελάτης",
      addAria: "Νέος πελάτης",
      total: "Σύνολο",
      loadingA: "Φόρτωση...",
      loadError: "Αποτυχία φόρτωσης πελατών.",
      none: "Δεν βρέθηκαν πελάτες.",
      fetchFail: "Unauthorized or failed fetch",
    },
    en: {
      title: "Clients",
      addTitle: "New client",
      addAria: "New client",
      total: "Total",
      loadingA: "Loading...",
      loadError: "Failed to load clients.",
      none: "No clients found.",
      fetchFail: "Unauthorized or failed fetch",
    },
  }[locale] || L.el;

  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("lastName"); // 'lastName' | 'updatedAt'
  const [sortDir, setSortDir] = useState("asc"); // 'asc' | 'desc'
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/admin/clients", { credentials: "include" });
        if (!res.ok) throw new Error(L.fetchFail);
        const data = await res.json();
        console.log("Clients fetched from admin page: ", data);
        setClients(data || []);
      } catch (err) {
        console.error(err);
        setErrorMsg(L.loadError);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return clients;
    return clients.filter((c) =>
      [c.firstName, c.lastName, c.email].some((v) => v?.toLowerCase().includes(q))
    );
  }, [clients, search]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    const dir = sortDir === "asc" ? 1 : -1;

    if (sortBy === "lastName") {
      arr.sort((a, b) => {
        const A = (a.lastName || "").toString();
        const B = (b.lastName || "").toString();
        // Keep Greek collation for consistent ordering with Greek names; falls back fine for EN
        return (
          A.localeCompare(B, "el", { sensitivity: "base" }) * dir ||
          (a.firstName || "").localeCompare(b.firstName || "", "el", { sensitivity: "base" }) * dir
        );
      });
    } else if (sortBy === "updatedAt") {
      arr.sort((a, b) => {
        const A = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
        const B = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
        return (A - B) * dir;
      });
    }
    return arr;
  }, [filtered, sortBy, sortDir]);

  const handleClientAdded = (newClient) => {
    setClients((prev) => [newClient, ...prev]);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="py-6 px-12">
          <div className="flex flex-col gap-3">
            {/* Row 1: Title + Count (left) | Add (right) */}
            <div className="flex items-center justify-between">
              {/* Left: Title + add */}
              <div className="flex items-end gap-3">
                <h2 className="text-xl font-semibold leading-none">{L.title}</h2>
                {/* Add button */}
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white hover:cursor-pointer"
                  title={L.addTitle}
                  aria-label={L.addAria}
                >
                  <Plus className="h-4 w-4 block" />
                </button>
              </div>

              {/* Total indicator */}
              <span className="inline-flex h-8 items-center rounded-full bg-gray-900 px-3 text-xs sm:text-sm text-white">
                {L.total}: <span className="ml-1 font-semibold">{clients.length}</span>
              </span>
            </div>

            {/* Row 2: Search + Sort */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <div className="flex-1 w-full">
                <ClientFilters
                  search={search}
                  setSearch={setSearch}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  sortDir={sortDir}
                  setSortDir={setSortDir}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main>
        {loading ? (
          <div className="animate-pulse max-w-6xl mx-auto px-4 py-6" aria-label={L.loadingA}>
            <div className="h-10 bg-zinc-100 rounded mb-3" />
            <div className="h-10 bg-zinc-100 rounded mb-3" />
            <div className="h-10 bg-zinc-100 rounded mb-3" />
          </div>
        ) : errorMsg ? (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded px-4 py-3 text-sm max-w-6xl mx-auto my-4">
            {errorMsg}
          </div>
        ) : !sorted.length ? (
          <p className="text-sm text-zinc-600 text-center py-12">{L.none}</p>
        ) : (
          <ClientsTable clients={sorted} />
        )}
      </main>

      {showModal && (
        <AddClientModal
          onClose={() => setShowModal(false)}
          onClientAdded={handleClientAdded}
        />
      )}
    </div>
  );
}
