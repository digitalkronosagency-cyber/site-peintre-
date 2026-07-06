import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="processus" className="bg-brume-50 py-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-rouge-600">
            Déroulement
          </p>
          <h2 className="font-display text-3xl font-extrabold text-encre-900 text-balance sm:text-4xl">
            Comment se déroule votre projet, étape par étape
          </h2>
        </div>

        <ol className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.step} className="relative pl-2">
              <span className="font-display text-5xl font-extrabold text-bleu-300">
                {step.step}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-encre-900">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-encre-700">
                {step.description}
              </p>
              {index < processSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-4 top-6 hidden h-px w-8 bg-encre-900/15 sm:block lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
