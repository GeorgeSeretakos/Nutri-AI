import { NextResponse } from "next/server";
import { verifyAdmin } from "../../_lib/auth";
import { getRequestMeta } from "../../../../utils/apiUtils";
import { createUploadUrl } from "../../../../utils/storageServer";
import crypto from "crypto";

export async function POST(req) {
  const { ip, ua } = getRequestMeta(req);
  const admin = await verifyAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const { clientId, files } = body || {};
  // files: [{ fileName, type, description, date }] – you can reuse same meta for all if you want

  if (!clientId || !Array.isArray(files) || files.length === 0) {
    return NextResponse.json({ error: "Missing clientId or files" }, { status: 400 });
  }

  const ownerId = Number(clientId);
  const sessionId = crypto.randomUUID();
  const now = Date.now();

  const items = await Promise.all(files.map(async (f) => {
    const cleanName = String(f.fileName || "").replace(/\s+/g, "_");
    const stagingPath = `staging/${ownerId}/${sessionId}/${now}-${cleanName}`;
    const finalPath   = `${ownerId}/${now}-${cleanName}`;
    const uploadUrl   = await createUploadUrl(stagingPath);
    return {
      fileName: f.fileName,
      type: f.type,
      description: f.description || null,
      date: f.date || null,
      stagingPath,
      finalPath,
      uploadUrl
    };
  }));

  return NextResponse.json(
    { ok: true, sessionId, clientId: ownerId, items },
    { status: 200, headers: { "Cache-Control": "no-store" } }
  );
}
