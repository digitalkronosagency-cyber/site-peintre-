import Link from "next/link";
import { business } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ardoise-900/10 bg-lin-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-display text-lg font-semibold text-ardoise-900 sm:text-xl">
            Cédric Roullier
          </span>
          <span className="text-xs tracking-wide text-ardoise-600 sm:text-sm">
            Peintre décorateur — {business.mainCity}
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="hidden font-medium text-ardoise-800 hover:text-terracotta-600 sm:block"
          >
            {business.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-terracotta-600 px-5 py-2.5 text-base font-semibold text-lin-50 shadow-soft transition-colors hover:bg-terracotta-700 sm:block"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </header>
  );
}
