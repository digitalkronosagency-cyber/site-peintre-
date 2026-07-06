export default function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 text-or-500" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.5l2.59 5.246 5.79.842-4.19 4.084.99 5.77L10 14.847l-5.18 2.723.99-5.77-4.19-4.084 5.79-.842L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
