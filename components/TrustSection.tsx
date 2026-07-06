import { business, reviews } from "@/lib/data";
import Stars from "./Stars";

export default function TrustSection() {
  return (
    <section id="avis" className="bg-bleu-900 py-20 text-brume-50">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-rouge-400">
            Avis clients
          </p>
          <h2 className="font-display text-3xl font-extrabold text-balance sm:text-4xl">
            La confiance de nos clients, chantier après chantier
          </h2>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-bleu-100">
            <div className="flex items-center gap-2">
              <Stars />
              <span>
                <strong className="font-semibold text-brume-50">
                  {business.rating.google.value.toFixed(1)}/5
                </strong>{" "}
                sur Google ({business.rating.google.count} avis)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Stars />
              <span>
                <strong className="font-semibold text-brume-50">
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
              className="mb-6 break-inside-avoid rounded-2xl border border-brume-50/10 bg-bleu-700 p-6"
            >
              <Stars />
              <blockquote className="mt-4 text-[15px] leading-relaxed text-bleu-50">
                &laquo; {review.quote} &raquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium text-rouge-300">
                {review.author} — {review.source}
              </figcaption>
              {review.ownerReply && (
                <p className="mt-3 border-l-2 border-rouge-500 pl-3 text-sm italic text-bleu-100">
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
          className="mt-2 inline-block text-sm font-semibold text-rouge-300 underline underline-offset-4 hover:text-rouge-200"
        >
          Voir tous les avis sur notre fiche Google →
        </a>
      </div>
    </section>
  );
}
