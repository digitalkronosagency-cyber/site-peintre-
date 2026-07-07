import Image from "next/image";
import { listPhotos } from "@/lib/blob-photos";
import PaintedPlaceholder from "./PaintedPlaceholder";

type GalleryItem = {
  label: string;
  variant: "bleu" | "rouge" | "encre";
  span: string;
};

// NOTE : emplacements affichés tant qu'aucune photo n'a été ajoutée depuis
// l'espace admin (/admin). Les libellés ci-dessous deviennent les attributs
// alt suggérés lors de l'ajout des photos définitives.
const placeholderGallery: GalleryItem[] = [
  {
    label:
      "Rénovation cuisine, peinture de placards avant/après — Mauges-sur-Loire",
    variant: "bleu",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    label: "Escalier repeint, finition soignée — Mauges-sur-Loire",
    variant: "encre",
    span: "sm:row-span-2",
  },
  {
    label: "Salon avec poêle, peinture murale intérieure — Maine-et-Loire",
    variant: "rouge",
    span: "sm:col-span-2",
  },
  {
    label: "Pose de papier peint, couloir — Mauges-sur-Loire",
    variant: "bleu",
    span: "",
  },
  {
    label: "Peinture de boiseries et portes — Maine-et-Loire",
    variant: "rouge",
    span: "",
  },
];

export default async function Portfolio() {
  const photos = await listPhotos();

  return (
    <section id="realisations" className="bg-brume-100/60 py-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-rouge-600">
              Réalisations
            </p>
            <h2 className="font-display text-3xl font-extrabold text-encre-900 text-balance sm:text-4xl">
              Des chantiers menés avec soin, du premier coup de pinceau au
              nettoyage final
            </h2>
          </div>
          {photos.length === 0 && (
            <p className="max-w-sm text-sm text-encre-600">
              Plus de 95 photos de chantiers sont disponibles sur notre fiche
              Google — un aperçu bientôt complété ici.
            </p>
          )}
        </div>

        {photos.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-3">
            {photos.map((photo) => (
              <div
                key={photo.url}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft"
              >
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid auto-rows-[160px] grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[180px]">
            {placeholderGallery.map((item) => (
              <PaintedPlaceholder
                key={item.label}
                variant={item.variant}
                label={item.label}
                className={`rounded-2xl ${item.span}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
