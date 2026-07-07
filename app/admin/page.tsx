"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { Photo } from "@/lib/blob-photos";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [alt, setAlt] = useState("");
  const [file, setFile] = useState<File | null>(null);

  async function loadPhotos() {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/photos", { cache: "no-store" });
      const data = await response.json();
      setPhotos(data.photos ?? []);
    } catch {
      setError("Impossible de charger les photos.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPhotos();
  }, []);

  async function handleUpload(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!file) {
      setError("Choisissez une photo.");
      return;
    }

    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("alt", alt);

      const response = await fetch("/api/admin/photos", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Échec de l'envoi.");
      }

      setAlt("");
      setFile(null);
      (event.target as HTMLFormElement).reset();
      await loadPhotos();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Échec de l'envoi.");
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(url: string) {
    if (!confirm("Supprimer cette photo ?")) return;

    try {
      const response = await fetch("/api/admin/photos", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      if (!response.ok) throw new Error("Échec de la suppression.");
      await loadPhotos();
    } catch {
      setError("Échec de la suppression.");
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-brume-100 px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-extrabold text-encre-900">
              Photos des réalisations
            </h1>
            <p className="mt-1 text-sm text-encre-600">
              Ajoutez ou supprimez les photos affichées dans la section
              Réalisations du site.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-full border border-encre-900/15 px-4 py-2 text-sm font-semibold text-encre-700 transition-colors hover:bg-brume-200"
          >
            Se déconnecter
          </button>
        </div>

        <form
          onSubmit={handleUpload}
          className="mt-8 rounded-2xl border border-encre-900/10 bg-brume-50 p-6 shadow-soft"
        >
          <h2 className="font-display text-lg font-bold text-encre-900">
            Ajouter une photo
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-[auto_1fr]">
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={(event) => setFile(event.target.files?.[0] ?? null)}
              className="text-sm text-encre-700 file:mr-4 file:rounded-full file:border-0 file:bg-bleu-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brume-50 hover:file:bg-bleu-700"
            />
            <input
              type="text"
              required
              placeholder="Description de la photo (ex. Peinture intérieure d'un salon, Mauges-sur-Loire)"
              value={alt}
              onChange={(event) => setAlt(event.target.value)}
              className="w-full rounded-xl border border-encre-900/15 bg-brume-50 px-4 py-2.5 text-sm text-encre-900 outline-none transition-colors focus:border-bleu-500"
            />
          </div>
          <button
            type="submit"
            disabled={uploading}
            className="mt-4 rounded-full bg-rouge-600 px-6 py-2.5 text-sm font-bold text-brume-50 shadow-soft transition-colors hover:bg-rouge-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {uploading ? "Envoi en cours…" : "Ajouter la photo"}
          </button>
          {error && (
            <p className="mt-3 text-sm font-medium text-rouge-700">{error}</p>
          )}
        </form>

        <div className="mt-8">
          {loading ? (
            <p className="text-sm text-encre-600">Chargement…</p>
          ) : photos.length === 0 ? (
            <p className="text-sm text-encre-600">
              Aucune photo pour le moment. La section Réalisations affiche des
              emplacements provisoires en attendant.
            </p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {photos.map((photo) => (
                <div
                  key={photo.url}
                  className="overflow-hidden rounded-2xl border border-encre-900/10 bg-brume-50 shadow-soft"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={photo.url}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-encre-700">{photo.alt}</p>
                    <button
                      onClick={() => handleDelete(photo.url)}
                      className="mt-3 text-sm font-semibold text-rouge-600 hover:text-rouge-700"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
