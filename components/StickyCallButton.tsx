import { business } from "@/lib/data";

/**
 * Barre d'appel fixe, visible uniquement sur mobile, pour supprimer la friction
 * de la prise de contact pendant que l'utilisateur consulte le site.
 */
export default function StickyCallButton() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ardoise-900/10 bg-lin-50/95 p-3 backdrop-blur md:hidden">
      <a
        href={business.phoneHref}
        className="flex items-center justify-center gap-2 rounded-full bg-terracotta-600 px-5 py-3 text-base font-semibold text-lin-50 shadow-soft transition-colors active:bg-terracotta-700"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M3.654 1.328a.678.678 0 0 1 1.015-.063l2.008 2.008a.678.678 0 0 1 .063 1.015L5.42 5.607a.678.678 0 0 0-.043.87 12.5 12.5 0 0 0 6.146 6.146.678.678 0 0 0 .87-.043l1.32-1.32a.678.678 0 0 1 1.015.063l2.008 2.008a.678.678 0 0 1-.063 1.015l-1.708 1.708c-.482.482-1.21.657-1.847.348A17.5 17.5 0 0 1 1.6 5.895c-.31-.637-.135-1.365.348-1.847z" />
        </svg>
        Appeler {business.phoneDisplay}
      </a>
    </div>
  );
}
