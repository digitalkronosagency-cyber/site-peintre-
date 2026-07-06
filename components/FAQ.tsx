import { faq } from "@/lib/data";

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="bg-brume-50 py-20">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-rouge-600">
            Questions fréquentes
          </p>
          <h2 className="font-display text-3xl font-extrabold text-encre-900 text-balance sm:text-4xl">
            Vos questions avant de vous lancer
          </h2>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-encre-900/10 border-y border-encre-900/10">
          {faq.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-encre-900 marker:content-none">
                {item.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-2xl font-normal text-bleu-600 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-encre-700">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
