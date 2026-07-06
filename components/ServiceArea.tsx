import { business, serviceAreas } from "@/lib/data";

export default function ServiceArea() {
  return (
    <section id="zone-intervention" className="bg-ardoise-900 py-20 text-lin-50">
      <div className="mx-auto grid max-w-content gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-terracotta-300">
            Zone d&apos;intervention
          </p>
          <h2 className="font-display text-3xl font-semibold text-balance sm:text-4xl">
            Artisan peintre basé à {business.mainCity}, à votre service dans
            tout le {business.department}
          </h2>
          <p className="mt-5 max-w-xl text-lin-200">
            Basé à {business.district}, l&apos;entreprise intervient pour vos
            travaux de peinture intérieure, extérieure et de décoration dans
            les communes suivantes et leurs environs :
          </p>

          <ul className="mt-7 flex flex-wrap gap-3">
            {serviceAreas.map((city) => (
              <li
                key={city}
                className="rounded-full border border-lin-50/20 px-4 py-2 text-sm font-medium text-lin-100"
              >
                {city}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-lin-300">
            Votre commune n&apos;apparaît pas dans la liste ? Contactez-nous,
            nous étudions chaque demande selon la localisation du chantier.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-lin-50/10 shadow-soft">
          <iframe
            title={`Localisation ${business.name} — ${business.addressDisplay}`}
            src={business.googleMapsEmbedUrl}
            className="h-[320px] w-full sm:h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
