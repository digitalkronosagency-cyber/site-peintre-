import { business, reviews } from "@/lib/data";
import Stars from "./Stars";

export default function TrustSection() {
  return (
    <section id="avis" className="bg-ardoise-900 py-20 text-lin-50">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-terracotta-300">
            Avis clients
          </p>
          <h2 className="font-display text-3xl font-semibold text-balance sm:text-4xl">
            La confiance de nos clients, chantier après chantier
          </h2>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-lin-200">
            <div className="flex items-center gap-2">
              <Stars />
              <span>
                <strong className="font-semibold text-lin-50">
                  {business.rating.google.value.toFixed(1)}/5
                </strong>{" "}
                sur Google ({business.rating.google.count} avis)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Stars />
              <span>
                <strong className="font-semibold text-lin-50">
                  {business.rating.pagesJaunes.value.toFixed(1)}/5
                </strong>{" "}
                sur Pages Jaunes ({business.rating.pagesJaunes.count} avis)
              </span>
            </div>
          </div>
        </div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {reviews.map((review, index) => (
            <figure
              key={review.author + index}
              className="mb-6 break-inside-avoid rounded-2xl border border-lin-50/10 bg-ardoise-800 p-6"
            >
              <Stars />
              <blockquote className="mt-4 text-[15px] leading-relaxed text-lin-100">
                &laquo; {review.quote} &raquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium text-terracotta-300">
                {review.author} — {review.source}
              </figcaption>
              {review.ownerReply && (
                <p className="mt-3 border-l-2 border-terracotta-500 pl-3 text-sm italic text-lin-200">
                  Réponse de Cédric Roullier : « {review.ownerReply} »
                </p>
              )}
            </figure>
          ))}
        </div>

        <a
          href={business.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm font-semibold text-terracotta-300 underline underline-offset-4 hover:text-terracotta-200"
        >
          Voir tous les avis sur notre fiche Google →
        </a>
      </div>
    </section>
  );
}
