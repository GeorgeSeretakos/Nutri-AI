import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
  HeadObjectCommand,
  CopyObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: "us-east-1", // Backblaze B2 S3-compatible ignores but requires a value
  endpoint: process.env.B2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.B2_KEY_ID,
    secretAccessKey: process.env.B2_APP_KEY,
  },
});

const BUCKET = process.env.B2_BUCKET;

/* ------------------------------------------------------------------ */
/* Signed URLs                                                         */
/* ------------------------------------------------------------------ */

// Upload (PUT) — used by client to send file directly to B2
export async function createUploadUrl(filePath, expiresIn = 120) {
  const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: filePath,
  });
  return getSignedUrl(s3, command, { expiresIn });
}

// Download (GET)
export async function createDownloadUrl(filePath, expiresIn = 60) {
  const command = new GetObjectCommand({
    Bucket: BUCKET,
    Key: filePath,
    ResponseContentDisposition: `attachment; filename="${filePath.split("/").pop()}"`,
  });
  return getSignedUrl(s3, command, { expiresIn });
}

// Alias kept for backwards-compat
export async function getSignedUrlWrapper(filePath, expiresIn = 60) {
  return createDownloadUrl(filePath, expiresIn);
}

/* ------------------------------------------------------------------ */
/* Low-level object ops (for server finalize/cleanup)                  */
/* ------------------------------------------------------------------ */

// HEAD — verify existence (throws if not found)
export async function headObject(key) {
  return s3.send(new HeadObjectCommand({ Bucket: BUCKET, Key: key }));
}

// COPY staging -> final
export async function copyObject(srcKey, dstKey) {
  // CopySource must URL-encode the *key* portion
  const copySource = `${BUCKET}/${encodeURIComponent(srcKey)}`;
  try {
    const res = await s3.send(
      new CopyObjectCommand({
        Bucket: BUCKET,
        Key: dstKey,
        CopySource: copySource,
      })
    );
    console.info(
      JSON.stringify({
        level: "info",
        msg: "storage:copy_success",
        srcKey,
        dstKey,
        etag: res.CopyObjectResult?.ETag || null,
      })
    );
    return res;
  } catch (err) {
    console.error("storage:copy_error", { srcKey, dstKey, err });
    throw err;
  }
}

// Simple delete (no head/verify)
export async function deleteObject(key) {
  try {
    await s3.send(new DeleteObjectCommand({ Bucket: BUCKET, Key: key }));
    console.info(
      JSON.stringify({
        level: "info",
        msg: "storage:delete_issued",
        key,
      })
    );
    return true;
  } catch (err) {
    console.error("storage:delete_error", err);
    throw err;
  }
}

/**
 * Idempotent delete with HEAD pre/post checks.
 * Returns true if the object is confirmed gone (or never existed).
 */
export async function deleteFromStorage(filePath) {
  if (!filePath) throw new Error("deleteFromStorage: missing filePath");

  // 1) HEAD (existence check)
  try {
    await s3.send(new HeadObjectCommand({ Bucket: BUCKET, Key: filePath }));
    console.info(
      JSON.stringify({
        level: "info",
        msg: "storage:head_found",
        bucket: BUCKET,
        key: filePath,
      })
    );
  } catch (err) {
    if (err?.$metadata?.httpStatusCode === 404) {
      console.warn(
        JSON.stringify({
          level: "warn",
          msg: "storage:head_not_found",
          bucket: BUCKET,
          key: filePath,
        })
      );
      return true; // already gone
    }
    console.error("storage:head_error", err);
    throw err;
  }

  // 2) DELETE
  try {
    await s3.send(new DeleteObjectCommand({ Bucket: BUCKET, Key: filePath }));
    console.info(
      JSON.stringify({
        level: "info",
        msg: "storage:deleted_attempted",
        bucket: BUCKET,
        key: filePath,
      })
    );
  } catch (err) {
    console.error("storage:delete_error", err);
    throw err;
  }

  // 3) Verify deletion
  try {
    await s3.send(new HeadObjectCommand({ Bucket: BUCKET, Key: filePath }));
    console.error(
      JSON.stringify({
        level: "error",
        msg: "storage:still_exists_after_delete",
        bucket: BUCKET,
        key: filePath,
      })
    );
    return false;
  } catch (err) {
    if (err?.$metadata?.httpStatusCode === 404) {
      console.info(
        JSON.stringify({
          level: "info",
          msg: "storage:confirmed_deleted",
          bucket: BUCKET,
          key: filePath,
        })
      );
      return true;
    }
    console.error("storage:post_head_error", err);
    throw err;
  }
}

/* ------------------------------------------------------------------ */
/* Helpers you may want server-side                                   */
/* ------------------------------------------------------------------ */

// Convenience existence check → boolean
export async function exists(key) {
  try {
    await headObject(key);
    return true;
  } catch (err) {
    if (err?.$metadata?.httpStatusCode === 404) return false;
    throw err;
  }
}

export { s3, BUCKET };
