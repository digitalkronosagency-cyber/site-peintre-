"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Échec de la connexion.");
      }

      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Échec de la connexion.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-brume-100 px-5">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl border border-encre-900/10 bg-brume-50 p-8 shadow-soft"
      >
        <h1 className="font-display text-2xl font-extrabold text-encre-900">
          Espace admin
        </h1>
        <p className="mt-1 text-sm text-encre-600">
          Connectez-vous pour gérer les photos du site.
        </p>

        <label
          htmlFor="password"
          className="mt-6 block text-sm font-medium text-encre-800"
        >
          Mot de passe
        </label>
        <input
          id="password"
          type="password"
          required
          autoFocus
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-1.5 w-full rounded-xl border border-encre-900/15 bg-brume-50 px-4 py-2.5 text-encre-900 outline-none transition-colors focus:border-bleu-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-bleu-600 px-6 py-3 text-base font-bold text-brume-50 shadow-soft transition-colors hover:bg-bleu-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Connexion…" : "Se connecter"}
        </button>

        {error && (
          <p className="mt-4 text-sm font-medium text-rouge-700">{error}</p>
        )}
      </form>
    </main>
  );
}
