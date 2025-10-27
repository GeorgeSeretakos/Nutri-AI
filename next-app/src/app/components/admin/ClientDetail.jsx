"use client";
import { useState, useEffect } from "react";
import { format } from "date-fns";

import UploadModal from "./UploadModal";
import EditClientModal from "./EditClientModal";
import ClientInfoCard from "./ClientInfoCard";
import DocumentList from "./DocumentList";

import { deleteClient, updateClient } from "../../../services/clients";
import { getDownloadUrl, deleteDocument } from "../../../services/documents";
import { useRouter } from "next/navigation";
import { useLocale } from "@lib/locale";

export default function ClientDetail({ client, mode = "admin" }) {
  const locale = useLocale();
  const T = {
    el: {
      // statuses
      saving: "Αποθήκευση...",
      saved: "✅ Αποθηκεύτηκε με επιτυχία!",
      saveError: "❌ Σφάλμα στην αποθήκευση",
      chooseFile: "Επιλέξτε τουλάχιστον ένα αρχείο.",
      presign: "Δημιουργία URL μεταφόρτωσης...",
      uploading: "Ανέβασμα αρχείων...",
      finalizing: "Οριστικοποίηση...",
      uploadOk: "✅ Επιτυχής μεταφόρτωση!",
      uploadFail: "❌ Σφάλμα στη μεταφόρτωση",
      notifyOk: "✅ Η ειδοποίηση στάλθηκε επιτυχώς.",
      notifyFailPrefix: "❌ ",
      notifyFail: "Σφάλμα στην αποστολή ειδοποίησης.",
      networkFail: "❌ Σφάλμα δικτύου. Δοκίμασε ξανά.",
      // confirms / alerts
      confirmDeleteClient:
        "Θέλετε σίγουρα να διαγράψετε τον πελάτη?\n\nΠρόκειται να διαγράψετε οριστικά τα προσωπικά στοιχεία καθώς επίσης και όλα τα αρχεία που αφορούν τον πελάτη!",
      clientDeleted: "Ο πελάτης διαγράφηκε επιτυχώς!",
      clientDeleteError: "Σφάλμα κατά τη διαγραφή πελάτη",
      confirmDeleteDoc: "Θέλετε σίγουρα να διαγράψετε αυτό το αρχείο?\n\nΗ διαγραφή είναι οριστική!",
      missingEmail: "Δεν υπάρχει email για τον πελάτη.",
    },
    en: {
      // statuses
      saving: "Saving...",
      saved: "✅ Saved successfully!",
      saveError: "❌ Error while saving",
      chooseFile: "Select at least one file.",
      presign: "Creating upload URL...",
      uploading: "Uploading files...",
      finalizing: "Finalizing...",
      uploadOk: "✅ Upload successful!",
      uploadFail: "❌ Upload failed",
      notifyOk: "✅ Notification sent successfully.",
      notifyFailPrefix: "❌ ",
      notifyFail: "Error sending notification.",
      networkFail: "❌ Network error. Please try again.",
      // confirms / alerts
      confirmDeleteClient:
        "Are you sure you want to delete this client?\n\nThis will permanently delete personal data and all documents related to the client!",
      clientDeleted: "Client deleted successfully!",
      clientDeleteError: "Error deleting client",
      confirmDeleteDoc: "Are you sure you want to delete this file?\n\nDeletion is permanent!",
      missingEmail: "This client has no email address.",
    },
  }[locale] || T?.el;

  const [activeTab, setActiveTab] = useState("diet");
  const [clientData, setClientData] = useState(client);
  const [groupedDocs, setGroupedDocs] = useState({});
  const [dateFilter, setDateFilter] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const [file, setFile] = useState([]); // array for multi-file UX
  const [docType, setDocType] = useState("DIET");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const router = useRouter();
  const [busy, setBusy] = useState(false);

  const [formData, setFormData] = useState({
    firstName: client.firstName || "",
    lastName: client.lastName || "",
    phone: client.phone || "",
  });

  const [notifyLoading, setNotifyLoading] = useState(false);

  useEffect(() => {
    if (isUploadOpen) {
      setFile([]);
      setDocType("DIET");
      setDescription("");
      setDate(new Date().toISOString().split("T")[0]);
      setStatus("");
    }
  }, [isUploadOpen]);

  // --- Group docs by month/year ---
  useEffect(() => {
    const grouped = {};
    const sortedDocs = [...(clientData.documents || [])].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    for (const d of sortedDocs) {
      if (activeTab !== "all" && d.type.toLowerCase() !== activeTab) continue;

      if (dateFilter) {
        const docDate = new Date(d.date);
        if (dateFilter.from && docDate < new Date(dateFilter.from)) continue;
        if (dateFilter.to && docDate > new Date(dateFilter.to)) continue;
      }

      const key = format(new Date(d.date), "yyyy-MM");
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(d);
    }

    setGroupedDocs(grouped);
  }, [clientData.documents, activeTab, dateFilter]);

  const handleDeleteClient = async () => {
    if (
      !confirm(T.confirmDeleteClient)
    ) return;

    try {
      await deleteClient(clientData.id);
      alert(T.clientDeleted);
      window.location.assign("/admin");
    } catch (err) {
      console.error(err);
      alert(T.clientDeleteError);
    }
  };

  const handleEditSave = async () => {
    try {
      setStatus(T.saving);
      const updated = await updateClient(clientData.id, formData);
      setFormData({
        firstName: updated.firstName,
        lastName: updated.lastName,
        phone: updated.phone,
      });
      setClientData((prev) => ({
        ...prev,
        ...updated,
        documents: prev.documents,
      }));
      setStatus(T.saved);
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      setStatus(T.saveError);
    }
  };

  const handleUpload = async ({ files, meta, perFileMeta }) => {
    if (!files || files.length === 0) {
      setStatus(T.chooseFile);
      return;
    }

    try {
      setBusy(true);
      setStatus(T.presign);

      // 1) presign batch
      const pres = await fetch("/api/documents/presign-batch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientId: clientData.id,
          files: files.map((f, i) => ({
            fileName: f.name,
            type: perFileMeta[i]?.type || meta.defaultType,
            description: (perFileMeta[i]?.description ?? meta.defaultDescription) || null,
            date: perFileMeta[i]?.date || meta.defaultDate,
          })),
        }),
      }).then((r) => r.json());

      if (!pres?.ok) throw new Error(pres?.error || "presign failed");

      // 2) direct uploads
      setStatus(T.uploading);
      await Promise.all(
        pres.items.map((it, idx) =>
          fetch(it.uploadUrl, {
            method: "PUT",
            body: files[idx],
          }).then((r) => {
            if (!r.ok) throw new Error(`upload failed: ${files[idx].name}`);
          })
        )
      );

      // 3) finalize
      setStatus(T.finalizing);
      const fin = await fetch("/api/documents/finalize-batch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientId: clientData.id,
          sessionId: pres.sessionId,
          items: pres.items,
          cleanupOnFail: true,
        }),
      }).then((r) => r.json());

      if (!fin?.ok) throw new Error(fin?.error || "finalize failed");

      const newDocs = (fin.docs || []).map((doc) => ({
        ...doc,
        date: new Date(doc.date).toISOString(),
      }));

      setClientData((prev) => ({
        ...prev,
        documents: [...(prev.documents || []), ...newDocs],
      }));

      setStatus(T.uploadOk);
      setIsUploadOpen(false);
    } catch (err) {
      console.error(err);
      setStatus(T.uploadFail);
    } finally {
      setBusy(false);
    }
  };

  const handleDownload = async (docId) => {
    try {
      const { url } = await getDownloadUrl(docId);
      const link = document.createElement("a");
      link.href = url;
      link.download = docId || "downloaded-file";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Download error:", err);
    }
  };

  const handleDeleteDocument = async (id) => {
    if (!confirm(T.confirmDeleteDoc)) return;
    try {
      await deleteDocument(id);
      setClientData((prev) => ({
        ...prev,
        documents: prev.documents.filter((d) => d.id !== id),
      }));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleNotifyUser = async () => {
    if (!clientData?.email) {
      alert(T.missingEmail);
      return;
    }
    try {
      setNotifyLoading(true);

      const res = await fetch("/api/notify/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          to: clientData.email,
          name: `${clientData.firstName || ""} ${clientData.lastName || ""}`.trim(),
        }),
      });

      const ct = res.headers.get("content-type") || "";
      const data = ct.includes("application/json") ? await res.json() : null;

      if (res.ok && data?.ok) {
        setStatus(T.notifyOk);
        alert(T.notifyOk);
      } else {
        const msg = data?.error || T.notifyFail;
        setStatus(T.notifyFailPrefix + msg);
        alert(msg);
      }
    } catch (err) {
      console.error(err);
      setStatus(T.networkFail);
      alert(T.networkFail.replace("❌ ", ""));
    } finally {
      setNotifyLoading(false);
    }
  };

  return (
    <div>
      {/* Client Info Card */}
      <ClientInfoCard
        client={clientData}
        mode={mode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setDateFilter={setDateFilter}
        {...(mode === "admin"
          ? {
            onEdit: () => setIsEditing(true),
            onDelete: handleDeleteClient,
            onUpload: () => setIsUploadOpen(true),
            onNotify: handleNotifyUser,
            notifyLoading,
          }
          : {})}
      />

      <div>
        <DocumentList
          documents={groupedDocs}
          onDownload={handleDownload}
          {...(mode === "admin" ? { onDelete: handleDeleteDocument } : {})}
        />
      </div>

      {/* Admin-only modals: conditionally mount when open */}
      {mode === "admin" && (
        <>
          {isEditing && (
            <EditClientModal
              isOpen
              onClose={() => setIsEditing(false)}
              formData={formData}
              setFormData={setFormData}
              onSave={handleEditSave}
              status={status}
            />
          )}

          {isUploadOpen && (
            <UploadModal
              isOpen
              onClose={() => setIsUploadOpen(false)}
              onSubmit={handleUpload}   // expects { files, meta, perFileMeta }
              file={file}
              setFile={setFile}
              docType={docType}
              setDocType={setDocType}
              description={description}
              setDescription={setDescription}
              status={status}
              date={date}
              setDate={setDate}
              loading={busy}
            />
          )}
        </>
      )}
    </div>
  );
}
