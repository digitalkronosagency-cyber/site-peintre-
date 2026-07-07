import { put, del, list } from "@vercel/blob";

/**
 * Stockage des photos de la section Réalisations sur Vercel Blob.
 * Un fichier manifeste (JSON) conserve le texte alternatif de chaque photo,
 * car Vercel Blob n'expose pas de métadonnées personnalisées en lecture.
 */

export type Photo = {
  url: string;
  pathname: string;
  alt: string;
  uploadedAt: string;
};

const MANIFEST_PATHNAME = "realisations/manifest.json";

async function readManifest(): Promise<Photo[]> {
  try {
    const { blobs } = await list({ prefix: MANIFEST_PATHNAME, limit: 1 });
    const manifestBlob = blobs.find((b) => b.pathname === MANIFEST_PATHNAME);
    if (!manifestBlob) return [];
    const response = await fetch(manifestBlob.url, { cache: "no-store" });
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function writeManifest(photos: Photo[]): Promise<void> {
  await put(MANIFEST_PATHNAME, JSON.stringify(photos), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

export async function listPhotos(): Promise<Photo[]> {
  const photos = await readManifest();
  return [...photos].sort((a, b) => (a.uploadedAt < b.uploadedAt ? 1 : -1));
}

export async function addPhoto(file: File, alt: string): Promise<Photo> {
  const extension = file.name.split(".").pop() || "jpg";
  const pathname = `realisations/${Date.now()}-${crypto.randomUUID()}.${extension}`;

  const blob = await put(pathname, file, {
    access: "public",
    contentType: file.type || "image/jpeg",
    addRandomSuffix: false,
  });

  const photo: Photo = {
    url: blob.url,
    pathname: blob.pathname,
    alt,
    uploadedAt: new Date().toISOString(),
  };

  const photos = await readManifest();
  photos.push(photo);
  await writeManifest(photos);

  return photo;
}

export async function deletePhoto(url: string): Promise<void> {
  await del(url);
  const photos = await readManifest();
  await writeManifest(photos.filter((p) => p.url !== url));
}
