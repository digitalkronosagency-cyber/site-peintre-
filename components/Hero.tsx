import { business } from "@/lib/data";
import Stars from "./Stars";
import PaintedPlaceholder from "./PaintedPlaceholder";
import Blob from "./Blob";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brume-50">
      <Blob className="pointer-events-none absolute -top-24 left-1/3 -z-10 h-[26rem] w-[26rem] text-brume-200/70" />
      <div className="mx-auto grid max-w-content gap-12 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:pb-24 lg:pt-14">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-rouge-600">
            Peintre en bâtiment · {business.mainCity}
          </p>
          <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.08] text-encre-900 sm:text-5xl lg:text-[3.4rem]">
            Des pièces qui vous ressemblent, peintes avec soin près de chez vous
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-encre-600">
            Peinture intérieure et extérieure, pose de papier peint, enduit
            décoratif : plus de {business.yearsInBusiness} ans à accompagner
            les habitants de {business.department} dans leurs projets, du
            premier conseil couleur au chantier terminé et nettoyé.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-rouge-600 px-6 py-3.5 text-base font-bold text-brume-50 shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-rouge-700"
            >
              Demander un devis gratuit
            </a>
            <a
              href={business.phoneHref}
              className="text-base font-bold text-bleu-700 underline decoration-bleu-500 decoration-2 underline-offset-4 transition-colors hover:text-bleu-800"
            >
              Ou appeler le {business.phoneDisplay}
            </a>
          </div>

          <div className="mt-9 flex w-fit items-center gap-3 rounded-2xl border border-encre-900/10 bg-brume-100/80 px-4 py-3">
            <Stars />
            <p className="text-sm text-encre-800">
              <span className="font-semibold">
                {business.rating.value.toFixed(1)}/5 sur Google
              </span>{" "}
              — {business.rating.totalCount} avis clients, 100% satisfaits
            </p>
          </div>
        </div>

        <div className="relative isolate">
          <Blob className="pointer-events-none absolute -right-10 -top-10 -z-10 h-40 w-40 text-bleu-600" />
          <PaintedPlaceholder
            variant="bleu"
            label="Photo à venir : chantier peinture intérieure, Mauges-sur-Loire"
            className="aspect-[4/5] w-full rounded-[2rem] shadow-soft sm:aspect-[5/4] lg:aspect-[4/5]"
          />
          <div className="absolute -bottom-6 -left-4 hidden w-52 rounded-2xl border border-encre-900/10 bg-brume-50 p-4 shadow-soft sm:block lg:-left-8">
            <p className="font-display text-2xl font-extrabold text-bleu-700">
              +{business.yearsInBusiness} ans
            </p>
            <p className="text-sm text-encre-600">
              d&apos;expérience en Maine-et-Loire
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
