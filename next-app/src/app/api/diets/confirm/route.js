import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prismaClient";
import { verifyAdmin } from "../../_lib/auth";
import { getRequestMeta } from "../../../../utils/apiUtils";

// Helper: get origin (for internal fetches to our own API)
function getOrigin(req) {
  try {
    const url = new URL(req.url);
    return url.origin.replace(/\/+$/, "");
  } catch {
    const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    return base.replace(/\/+$/, "");
  }
}

// Helper: build default file name
function buildDefaultFileName(firstName, lastName) {
  const fn = (firstName || "").trim() || "Πελάτης";
  const ln = (lastName || "").trim();
  const base = ln ? `Διατροφή ${fn} ${ln}` : `Διατροφή ${fn}`;
  return `${base}.pdf`.replace(/\s+/g, "_");
}

export async function POST(req) {
  const { ip, ua } = getRequestMeta(req);

  const admin = await verifyAdmin();
  if (!admin) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401, headers: { "Cache-Control": "no-store" } }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  const {
    clientId,
    clientEmail,
    clientFirstName,
    clientLastName,
    plan,          // full diet JSON currently on the preview
    description,   // optional document description
    date,          // optional YYYY-MM-DD string
    fileName,      // optional override
  } = body || {};

  if (!clientId || !plan || !clientEmail) {
    return NextResponse.json(
      { error: "Missing clientId, plan or clientEmail" },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  const ownerId = Number(clientId);
  const origin = getOrigin(req);

  // We'll reuse the same cookies for the internal calls (so verifyAdmin still works)
  const cookieHeader = req.headers.get("cookie") || "";
  const commonHeaders = {
    "Content-Type": "application/json",
    ...(cookieHeader ? { cookie: cookieHeader } : {}),
  };

  let pdfBuffer = null;
  let documentRecord = null;
  let dietRecord = null;

  try {
    // 1) Call existing /api/diets/pdf to generate the PDF
    const pdfRes = await fetch(`${origin}/api/diets/pdf`, {
      method: "POST",
      headers: commonHeaders,
      body: JSON.stringify({
        plan,
        clientFirstName,
        clientLastName,
      }),
    });

    if (!pdfRes.ok) {
      const errText = await pdfRes.text().catch(() => "");
      console.error("diets.confirm.pdf_failed", {
        status: pdfRes.status,
        errText,
        ip,
        ua,
      });
      return NextResponse.json(
        { error: "Failed to generate diet PDF" },
        { status: 502, headers: { "Cache-Control": "no-store" } }
      );
    }

    const pdfArrayBuffer = await pdfRes.arrayBuffer();
    pdfBuffer = Buffer.from(pdfArrayBuffer);

    // 2) Get presigned URL from existing /api/documents/presign
    const finalFileName =
      fileName && fileName.trim()
        ? (fileName.trim().toLowerCase().endsWith(".pdf")
          ? fileName.trim()
          : `${fileName.trim()}.pdf`)
        : buildDefaultFileName(clientFirstName, clientLastName);

    const presignRes = await fetch(`${origin}/api/documents/presign`, {
      method: "POST",
      headers: commonHeaders,
      body: JSON.stringify({
        clientId: ownerId,
        fileName: finalFileName,
      }),
    });

    if (!presignRes.ok) {
      const errText = await presignRes.text().catch(() => "");
      console.error("diets.confirm.presign_failed", {
        status: presignRes.status,
        errText,
        ip,
        ua,
      });
      return NextResponse.json(
        { error: "Failed to get upload URL" },
        { status: 502, headers: { "Cache-Control": "no-store" } }
      );
    }

    const { uploadUrl, filePath } = await presignRes.json();
    if (!uploadUrl || !filePath) {
      return NextResponse.json(
        { error: "Invalid response from presign endpoint" },
        { status: 502, headers: { "Cache-Control": "no-store" } }
      );
    }

    // 3) Upload the PDF to the presigned URL
    const uploadRes = await fetch(uploadUrl, {
      method: "PUT",
      headers: { "Content-Type": "application/pdf" },
      body: pdfBuffer,
    });

    if (!uploadRes.ok) {
      const errText = await uploadRes.text().catch(() => "");
      console.error("diets.confirm.upload_failed", {
        status: uploadRes.status,
        errText,
        ip,
        ua,
      });
      return NextResponse.json(
        { error: "Failed to upload PDF to storage" },
        { status: 502, headers: { "Cache-Control": "no-store" } }
      );
    }

    // 4) Finalize the document (existing API)
    const finalizeRes = await fetch(
      `${origin}/api/documents/upload/finalize`,
      {
        method: "POST",
        headers: commonHeaders,
        body: JSON.stringify({
          clientId: ownerId,
          fileName: finalFileName,
          type: "DIET",
          description: description || `Διατροφικό πλάνο`,
          date: date || new Date().toISOString().slice(0, 10),
          filePath,
        }),
      }
    );

    if (!finalizeRes.ok) {
      const errText = await finalizeRes.text().catch(() => "");
      console.error("diets.confirm.finalize_failed", {
        status: finalizeRes.status,
        errText,
        ip,
        ua,
      });
      return NextResponse.json(
        { error: "Failed to finalize document" },
        { status: 502, headers: { "Cache-Control": "no-store" } }
      );
    }

    const finalizeData = await finalizeRes.json();
    documentRecord = finalizeData?.doc || null;

    if (!documentRecord?.id) {
      console.error("diets.confirm.finalize_no_doc", {
        finalizeData,
        ip,
        ua,
      });
      return NextResponse.json(
        { error: "Document creation failed" },
        { status: 500, headers: { "Cache-Control": "no-store" } }
      );
    }

    // 5) Create Diet record (JSON) in DB
    try {
      dietRecord = await prisma.diet.create({
        data: {
          clientId: ownerId,
          plan,
          title: plan?.goal || null,
        },
      });
    } catch (e) {
      console.error("diets.confirm.diet_create_failed", {
        ownerId,
        docId: documentRecord.id,
        message: e?.message || String(e),
        ip,
        ua,
      });

      // Rollback: delete Document row (file remains in storage; user cannot see it)
      try {
        await prisma.document.delete({ where: { id: documentRecord.id } });
      } catch (rollbackErr) {
        console.warn("diets.confirm.diet_rollback_doc_failed", {
          ownerId,
          docId: documentRecord.id,
          message: rollbackErr?.message || String(rollbackErr),
        });
      }

      return NextResponse.json(
        { error: "Failed to save diet in database; rolled back document" },
        { status: 500, headers: { "Cache-Control": "no-store" } }
      );
    }

    // 6) Notify client via existing /api/notify
    const notifyRes = await fetch(`${origin}/api/notify`, {
      method: "POST",
      headers: commonHeaders,
      body: JSON.stringify({
        to: clientEmail,
        name: `${clientFirstName || ""} ${clientLastName || ""}`.trim(),
        subject: "Νέο διατροφικό πλάνο στον λογαριασμό σας",
        message:
          "Το εξατομικευμένο διατροφικό σας πλάνο έχει ανέβει στον λογαριασμό σας σε μορφή PDF.",
      }),
    });

    if (!notifyRes.ok) {
      const notifyData = await notifyRes.json().catch(() => ({}));
      console.error("diets.confirm.notify_failed", {
        status: notifyRes.status,
        notifyData,
        ip,
        ua,
      });

      // Rollback both Diet and Document so user sees no partial state
      try {
        await prisma.$transaction([
          prisma.diet.delete({ where: { id: dietRecord.id } }),
          prisma.document.delete({ where: { id: documentRecord.id } }),
        ]);
      } catch (rollbackErr) {
        console.warn("diets.confirm.notify_rollback_failed", {
          ownerId,
          dietId: dietRecord.id,
          docId: documentRecord.id,
          message: rollbackErr?.message || String(rollbackErr),
        });
      }

      return NextResponse.json(
        {
          error: "Failed to send email; rolled back diet and document",
          emailError: notifyData?.error || null,
        },
        { status: 502, headers: { "Cache-Control": "no-store" } }
      );
    }

    // ✅ Everything succeeded
    return NextResponse.json(
      {
        ok: true,
        diet: dietRecord,
        document: documentRecord,
        emailSent: true,
      },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch (e) {
    console.error("diets.confirm.exception", {
      message: e?.message || String(e),
      ip,
      ua,
    });
    // If something exploded before we create Diet, there is nothing visible to rollback
    return NextResponse.json(
      { error: "Internal error" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
