import { business } from "@/lib/data";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-lin-100/60 py-20">
      <div className="mx-auto grid max-w-content gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-terracotta-600">
            Contact
          </p>
          <h2 className="font-display text-3xl font-semibold text-ardoise-900 text-balance sm:text-4xl">
            Parlons de votre projet de peinture
          </h2>
          <p className="mt-5 text-ardoise-700">
            Devis gratuit et sans engagement. Réponse rapide par téléphone ou
            par email.
          </p>

          <dl className="mt-8 space-y-4 text-[15px]">
            <div>
              <dt className="font-semibold text-ardoise-900">Téléphone</dt>
              <dd>
                <a
                  href={business.phoneHref}
                  className="text-terracotta-600 hover:text-terracotta-700"
                >
                  {business.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ardoise-900">Adresse</dt>
              <dd className="text-ardoise-700">{business.addressDisplay}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ardoise-900">Horaires</dt>
              <dd className="text-ardoise-700">
                {business.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days} : {h.hours}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-ardoise-900/10 bg-lin-50 p-6 shadow-soft sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
