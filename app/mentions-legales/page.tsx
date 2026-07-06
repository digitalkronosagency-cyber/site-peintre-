import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site de ${business.name}, peintre en bâtiment à ${business.mainCity}.`,
  robots: { index: false, follow: true },
};

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <Link
        href="/"
        className="text-sm font-semibold text-terracotta-600 hover:text-terracotta-700"
      >
        ← Retour à l&apos;accueil
      </Link>

      <h1 className="mt-6 font-display text-3xl font-semibold text-ardoise-900">
        Mentions légales
      </h1>

      <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-ardoise-700">
        <section>
          <h2 className="font-display text-xl font-semibold text-ardoise-900">
            Éditeur du site
          </h2>
          <p className="mt-2">
            {business.name}
            <br />
            Entreprise individuelle — {business.jobTitle}
            <br />
            {business.addressDisplay}
            <br />
            Téléphone : {business.phoneDisplay}
            <br />
            SIRET : [à compléter par l&apos;entreprise]
            <br />
            Directeur de la publication : Cédric Roullier
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ardoise-900">
            Hébergement
          </h2>
          <p className="mt-2">
            Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut,
            CA 91789, États-Unis.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ardoise-900">
            Propriété intellectuelle
          </h2>
          <p className="mt-2">
            L&apos;ensemble des contenus présents sur ce site (textes, photos,
            mise en page) est la propriété de {business.name}, sauf mention
            contraire. Toute reproduction sans autorisation est interdite.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-ardoise-900">
            Données personnelles
          </h2>
          <p className="mt-2">
            Les informations transmises via le formulaire de contact sont
            utilisées uniquement pour répondre à votre demande de devis et ne
            sont pas transmises à des tiers. Conformément au RGPD, vous
            disposez d&apos;un droit d&apos;accès, de rectification et de
            suppression de vos données en nous contactant au{" "}
            {business.phoneDisplay}.
          </p>
        </section>
      </div>
    </main>
  );
}
