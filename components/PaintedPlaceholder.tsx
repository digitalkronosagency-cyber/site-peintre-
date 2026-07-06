const variants = {
  bleu: "bg-[radial-gradient(circle_at_25%_20%,#7FA8E0_0%,#1D5DB8_45%,#103A73_100%)]",
  rouge: "bg-[radial-gradient(circle_at_75%_25%,#F8CFC9_0%,#DC3B2E_50%,#8F2119_100%)]",
  encre: "bg-[radial-gradient(circle_at_30%_70%,#454E5A_0%,#1E242D_55%,#14181F_100%)]",
};

/**
 * Emplacement en attente d'une vraie photo de chantier fournie par le client.
 * Utilise un aplat coloré plutôt qu'une icône générique, en attendant les
 * photos réelles (voir README, section "Ajouter les photos réelles").
 */
export default function PaintedPlaceholder({
  variant = "bleu",
  label = "",
  className = "",
}: {
  variant?: keyof typeof variants;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-end overflow-hidden ${variants[variant]} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-encre-900/60 via-transparent to-transparent" />
      {label && (
        <p className="relative z-10 p-4 text-sm font-medium text-brume-50/90">
          {label}
        </p>
      )}
    </div>
  );
}
