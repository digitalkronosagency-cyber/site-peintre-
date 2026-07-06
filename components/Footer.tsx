import Link from "next/link";
import { business } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brume-100 py-12 text-encre-700">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-extrabold text-encre-900">
              {business.name}
            </p>
            <p className="mt-2 text-sm">{business.jobTitle}</p>
            <p className="mt-4 text-sm">{business.addressDisplay}</p>
            <a
              href={business.phoneHref}
              className="mt-1 block text-sm hover:text-bleu-600"
            >
              {business.phoneDisplay}
            </a>
          </div>

          <div>
            <p className="font-bold text-encre-900">Horaires</p>
            <ul className="mt-3 space-y-1 text-sm">
              {business.hours.map((h) => (
                <li key={h.days}>
                  {h.days} : {h.hours}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-bold text-encre-900">Liens utiles</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-bleu-600"
                >
                  Notre fiche Google
                </a>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-bleu-600">
                  Mentions légales
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-bleu-600">
                  Demander un devis
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-encre-900/10 pt-6">
          <p className="text-xs text-encre-600">
            © {new Date().getFullYear()} {business.name} — Peintre en bâtiment
            à {business.mainCity}, {business.department}.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={business.phoneHref}
              aria-label="Appeler l'entreprise"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-bleu-600 text-brume-50 transition-colors hover:bg-bleu-700"
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path d="M3.654 1.328a.678.678 0 0 1 1.015-.063l2.008 2.008a.678.678 0 0 1 .063 1.015L5.42 5.607a.678.678 0 0 0-.043.87 12.5 12.5 0 0 0 6.146 6.146.678.678 0 0 0 .87-.043l1.32-1.32a.678.678 0 0 1 1.015.063l2.008 2.008a.678.678 0 0 1-.063 1.015l-1.708 1.708c-.482.482-1.21.657-1.847.348A17.5 17.5 0 0 1 1.6 5.895c-.31-.637-.135-1.365.348-1.847z" />
              </svg>
            </a>
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Voir la fiche Google de l'entreprise"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-bleu-600 text-brume-50 transition-colors hover:bg-bleu-700"
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path
                  fillRule="evenodd"
                  d="M10 18s6-5.686 6-10a6 6 0 1 0-12 0c0 4.314 6 10 6 10Zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
