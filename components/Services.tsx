import { services } from "@/lib/data";

export default function Services() {
  const [featured, ...rest] = services;

  return (
    <section id="services" className="bg-lin-50 py-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-terracotta-600">
            Nos prestations
          </p>
          <h2 className="font-display text-3xl font-semibold text-ardoise-900 text-balance sm:text-4xl">
            Une prestation pour chaque projet, intérieur comme extérieur
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <article className="flex flex-col justify-between rounded-2xl bg-terracotta-600 p-8 text-lin-50 shadow-soft lg:col-span-2">
            <div>
              <h3 className="font-display text-2xl font-semibold sm:text-[1.7rem]">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-md text-terracotta-50/95">
                {featured.description}
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-lin-50 px-5 py-2.5 text-sm font-semibold text-terracotta-700 transition-colors hover:bg-lin-100"
            >
              Demander un devis
            </a>
          </article>

          {rest.slice(0, 2).map((service) => (
            <article
              key={service.slug}
              className="flex flex-col justify-between rounded-2xl border border-ardoise-900/10 bg-lin-100/60 p-8 shadow-sm"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-ardoise-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-ardoise-700">{service.description}</p>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-terracotta-600 hover:text-terracotta-700"
              >
                Demander un devis <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.slice(2).map((service) => (
            <article
              key={service.slug}
              className="flex flex-col justify-between rounded-2xl border border-ardoise-900/10 bg-lin-100/60 p-7 shadow-sm transition-shadow hover:shadow-soft"
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-ardoise-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-[15px] text-ardoise-700">
                  {service.description}
                </p>
              </div>
              <a
                href="#contact"
                className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-terracotta-600 hover:text-terracotta-700"
              >
                Demander un devis <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
