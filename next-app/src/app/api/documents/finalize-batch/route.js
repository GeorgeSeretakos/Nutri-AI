import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prismaClient";
import { verifyAdmin } from "../../_lib/auth";
import { getRequestMeta } from "../../../../utils/apiUtils";
import { headObject, copyObject, deleteObject } from "../../../../utils/storageServer";

function toLocalMidnightFromYMD(ymd) {
  const [y, m, d] = ymd.split("-").map(Number);
  return new Date(y, m - 1, d, 0, 0, 0, 0);
}
function ymdLocal(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
function normalizeDocumentDate(inputYMD) {
  const now = new Date();
  if (!inputYMD) return now;
  return inputYMD === ymdLocal(now) ? now : toLocalMidnightFromYMD(inputYMD);
}

export async function POST(req) {
  const { ip, ua } = getRequestMeta(req);
  const admin = await verifyAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const { clientId, sessionId, items, cleanupOnFail = true } = body || {};
  // items: [{ fileName, type, description, date, stagingPath, finalPath }]

  if (!clientId || !sessionId || !Array.isArray(items) || items.length === 0) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  const ownerId = Number(clientId);

  // Validate paths belong to client & session (basic guard)
  for (const it of items) {
    if (!it.stagingPath?.startsWith(`staging/${ownerId}/${sessionId}/`)) {
      return NextResponse.json({ error: "Invalid stagingPath" }, { status: 400 });
    }
    if (!it.finalPath?.startsWith(`${ownerId}/`)) {
      return NextResponse.json({ error: "Invalid finalPath" }, { status: 400 });
    }
  }

  // 1) Verify all staged objects exist
  const missing = [];
  for (const it of items) {
    try {
      await headObject(it.stagingPath);
    } catch (e) {
      missing.push(it.stagingPath);
    }
  }
  if (missing.length > 0) {
    // Compensate: delete any staged ones we *did* find if requested
    if (cleanupOnFail) {
      await Promise.allSettled(items.map(it => deleteObject(it.stagingPath)));
    }
    return NextResponse.json({ error: "Some files missing in staging", missing }, { status: 409 });
  }

  // 2) Copy staged -> final
  const copied = [];
  try {
    for (const it of items) {
      await copyObject(it.stagingPath, it.finalPath);
      copied.push(it.finalPath);
    }
  } catch (e) {
    // rollback any copied files if copy failed mid-way
    await Promise.allSettled(copied.map(key => deleteObject(key)));
    return NextResponse.json({ error: "Copy failed; rolled back" }, { status: 502 });
  }

  // 3) DB transaction: create all docs, bump user.updatedAt
  try {
    const now = new Date();
    const tx = [];

    for (const it of items) {
      tx.push(prisma.document.create({
        data: {
          name: it.fileName,
          type: it.type,
          description: it.description || null,
          date: normalizeDocumentDate(it.date),
          ownerId,
          filePath: it.finalPath,
        }
      }));
    }
    tx.push(prisma.user.update({ where: { id: ownerId }, data: { updatedAt: now } }));

    const results = await prisma.$transaction(tx);

    // 4) Cleanup staging (best effort)
    await Promise.allSettled(items.map(it => deleteObject(it.stagingPath)));

    const createdDocs = results.slice(0, items.length); // last entry is user update
    return NextResponse.json(
      { ok: true, docs: createdDocs },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch (e) {
    // rollback: delete finals to keep all-or-nothing
    await Promise.allSettled(items.map(it => deleteObject(it.finalPath)));
    // also cleanup staging
    await Promise.allSettled(items.map(it => deleteObject(it.stagingPath)));
    return NextResponse.json({ error: "DB transaction failed; rolled back" }, { status: 500 });
  }
}
