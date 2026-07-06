const variants = {
  terracotta:
    "bg-[radial-gradient(circle_at_25%_20%,#E29A6A_0%,#C1602F_45%,#853D1B_100%)]",
  sauge:
    "bg-[radial-gradient(circle_at_75%_25%,#AEBBA0_0%,#5F7052_50%,#3A4732_100%)]",
  ardoise:
    "bg-[radial-gradient(circle_at_30%_70%,#544838_0%,#2B241E_55%,#1E1A16_100%)]",
};

/**
 * Emplacement en attente d'une vraie photo de chantier fournie par le client.
 * Utilise une texture peinte plutôt qu'un dégradé générique ou une icône,
 * pour rester cohérent avec l'identité "artisan peintre" en attendant les
 * photos réelles (voir README, section "Ajouter les photos réelles").
 */
export default function PaintedPlaceholder({
  variant = "terracotta",
  label,
  className = "",
}: {
  variant?: keyof typeof variants;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-end overflow-hidden ${variants[variant]} ${className}`}
    >
      <div className="absolute inset-0 bg-enduit mix-blend-overlay opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-ardoise-900/50 via-transparent to-transparent" />
      <p className="relative z-10 p-4 text-sm font-medium text-lin-50/90">
        {label}
      </p>
    </div>
  );
}
