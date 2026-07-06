"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Échec de l'envoi");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "L'envoi a échoué. Merci de réessayer ou de nous appeler directement."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-sauge-500/30 bg-sauge-100 p-6 text-sauge-700">
        <p className="font-display text-xl font-semibold">
          Merci pour votre demande !
        </p>
        <p className="mt-2 text-sm">
          Votre message a bien été envoyé. Nous revenons vers vous rapidement
          pour convenir d&apos;un rendez-vous.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ardoise-800">
            Nom complet
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-ardoise-900/15 bg-lin-50 px-4 py-2.5 text-ardoise-900 outline-none transition-colors focus:border-terracotta-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ardoise-800">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded-xl border border-ardoise-900/15 bg-lin-50 px-4 py-2.5 text-ardoise-900 outline-none transition-colors focus:border-terracotta-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ardoise-800">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-xl border border-ardoise-900/15 bg-lin-50 px-4 py-2.5 text-ardoise-900 outline-none transition-colors focus:border-terracotta-500"
        />
      </div>

      <div>
        <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-ardoise-800">
          Type de projet
        </label>
        <select
          id="projectType"
          name="projectType"
          className="w-full rounded-xl border border-ardoise-900/15 bg-lin-50 px-4 py-2.5 text-ardoise-900 outline-none transition-colors focus:border-terracotta-500"
          defaultValue="Peinture intérieure"
        >
          <option>Peinture intérieure</option>
          <option>Peinture extérieure / façade</option>
          <option>Pose ou dépose de papier peint</option>
          <option>Enduit décoratif</option>
          <option>Autre projet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ardoise-800">
          Décrivez votre projet
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full rounded-xl border border-ardoise-900/15 bg-lin-50 px-4 py-2.5 text-ardoise-900 outline-none transition-colors focus:border-terracotta-500"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-terracotta-600 px-6 py-3.5 text-base font-semibold text-lin-50 shadow-soft transition-colors hover:bg-terracotta-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>

      {status === "error" && (
        <p className="text-sm font-medium text-terracotta-700">{errorMessage}</p>
      )}
    </form>
  );
}
