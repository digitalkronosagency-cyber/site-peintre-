import { services } from "@/lib/data";
import PaintedPlaceholder from "./PaintedPlaceholder";

const variants = ["bleu", "rouge", "encre"] as const;

export default function Services() {
  return (
    <section id="services" className="bg-brume-50 py-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-rouge-600">
            Nos prestations
          </p>
          <h2 className="font-display text-3xl font-extrabold text-encre-900 text-balance sm:text-4xl">
            Une prestation pour chaque projet, intérieur comme extérieur
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className="group relative overflow-hidden rounded-2xl shadow-soft transition-transform hover:-translate-y-1"
            >
              <PaintedPlaceholder
                variant={variants[index % variants.length]}
                className="aspect-[4/3] w-full"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-encre-900/90 via-encre-900/20 to-transparent p-5">
                <h3 className="font-display text-lg font-extrabold text-brume-50">
                  {service.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-brume-100/90">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-3 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-brume-50 underline decoration-rouge-500 decoration-2 underline-offset-4 transition-colors group-hover:text-rouge-300"
                >
                  Demander un devis <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
