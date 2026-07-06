import { business } from "@/lib/data";
import ContactForm from "./ContactForm";
import Blob from "./Blob";

export default function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-bleu-900 py-20 text-brume-50">
      <Blob className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-96 w-96 text-bleu-700/60" />
      <div className="mx-auto grid max-w-content gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-rouge-400">
            Contact
          </p>
          <h2 className="font-display text-3xl font-extrabold text-balance sm:text-4xl">
            Parlons de votre projet de peinture
          </h2>
          <p className="mt-5 text-bleu-100">
            Devis gratuit et sans engagement. Réponse rapide par téléphone ou
            par email.
          </p>

          <dl className="mt-8 space-y-4 text-[15px]">
            <div>
              <dt className="font-semibold text-brume-50">Téléphone</dt>
              <dd>
                <a
                  href={business.phoneHref}
                  className="text-rouge-300 hover:text-rouge-200"
                >
                  {business.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-brume-50">Adresse</dt>
              <dd className="text-bleu-100">{business.addressDisplay}</dd>
            </div>
            <div>
              <dt className="font-semibold text-brume-50">Horaires</dt>
              <dd className="text-bleu-100">
                {business.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days} : {h.hours}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl bg-brume-50 p-6 shadow-soft sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
