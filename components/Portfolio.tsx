import PaintedPlaceholder from "./PaintedPlaceholder";

type GalleryItem = {
  label: string;
  variant: "terracotta" | "sauge" | "ardoise";
  span: string;
};

// NOTE : emplacements en attente des vraies photos de chantier du client
// (voir README « Ajouter les photos réelles »). Les libellés ci-dessous
// deviendront les attributs alt des photos définitives.
const gallery: GalleryItem[] = [
  {
    label:
      "Rénovation cuisine, peinture de placards avant/après — Mauges-sur-Loire",
    variant: "terracotta",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    label: "Escalier repeint, finition soignée — Mauges-sur-Loire",
    variant: "ardoise",
    span: "sm:row-span-2",
  },
  {
    label: "Salon avec poêle, peinture murale intérieure — Maine-et-Loire",
    variant: "sauge",
    span: "sm:col-span-2",
  },
  {
    label: "Pose de papier peint, couloir — Mauges-sur-Loire",
    variant: "terracotta",
    span: "",
  },
  {
    label: "Peinture de boiseries et portes — Maine-et-Loire",
    variant: "sauge",
    span: "",
  },
];

export default function Portfolio() {
  return (
    <section id="realisations" className="bg-lin-100/60 py-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-terracotta-600">
              Réalisations
            </p>
            <h2 className="font-display text-3xl font-semibold text-ardoise-900 text-balance sm:text-4xl">
              Des chantiers menés avec soin, du premier coup de pinceau au
              nettoyage final
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ardoise-600">
            Plus de 95 photos de chantiers sont disponibles sur notre fiche
            Google — un aperçu bientôt complété ici.
          </p>
        </div>

        <div className="grid auto-rows-[160px] grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[180px]">
          {gallery.map((item) => (
            <PaintedPlaceholder
              key={item.label}
              variant={item.variant}
              label={item.label}
              className={`rounded-2xl ${item.span}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
