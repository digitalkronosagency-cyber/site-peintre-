import Link from "next/link";
import { business } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ardoise-900 py-12 text-lin-200">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-lin-50">
              {business.name}
            </p>
            <p className="mt-2 text-sm">{business.jobTitle}</p>
            <p className="mt-4 text-sm">{business.addressDisplay}</p>
            <a
              href={business.phoneHref}
              className="mt-1 block text-sm hover:text-terracotta-300"
            >
              {business.phoneDisplay}
            </a>
          </div>

          <div>
            <p className="font-semibold text-lin-50">Horaires</p>
            <ul className="mt-3 space-y-1 text-sm">
              {business.hours.map((h) => (
                <li key={h.days}>
                  {h.days} : {h.hours}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lin-50">Liens utiles</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terracotta-300"
                >
                  Notre fiche Google
                </a>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-terracotta-300">
                  Mentions légales
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-terracotta-300">
                  Demander un devis
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-lin-50/10 pt-6 text-xs text-lin-300">
          © {new Date().getFullYear()} {business.name} — Peintre en bâtiment à{" "}
          {business.mainCity}, {business.department}.
        </p>
      </div>
    </footer>
  );
}
