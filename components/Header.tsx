import Link from "next/link";
import { business } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-encre-900/10 bg-brume-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-display text-lg font-extrabold uppercase tracking-tight text-bleu-700 sm:text-xl">
            Cédric Roullier
          </span>
          <span className="text-xs tracking-wide text-encre-600 sm:text-sm">
            Peintre décorateur — {business.mainCity}
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-bleu-600 px-5 py-2.5 text-sm font-bold text-brume-50 shadow-soft transition-colors hover:bg-bleu-700 sm:block"
          >
            Demander un devis
          </a>
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-rouge-600 px-5 py-2.5 text-sm font-bold text-brume-50 shadow-soft transition-colors hover:bg-rouge-700 sm:flex"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path d="M3.654 1.328a.678.678 0 0 1 1.015-.063l2.008 2.008a.678.678 0 0 1 .063 1.015L5.42 5.607a.678.678 0 0 0-.043.87 12.5 12.5 0 0 0 6.146 6.146.678.678 0 0 0 .87-.043l1.32-1.32a.678.678 0 0 1 1.015.063l2.008 2.008a.678.678 0 0 1-.063 1.015l-1.708 1.708c-.482.482-1.21.657-1.847.348A17.5 17.5 0 0 1 1.6 5.895c-.31-.637-.135-1.365.348-1.847z" />
            </svg>
            {business.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
