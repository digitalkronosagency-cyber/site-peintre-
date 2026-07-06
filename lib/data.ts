/**
 * Source unique des informations de l'entreprise.
 * Toute donnée affichée sur le site (NAP, avis, horaires...) doit venir d'ici
 * pour garantir la cohérence avec la fiche Google Business Profile.
 */

export const business = {
  name: "Ent Roullier Cédric Peintre Décorateur",
  legalName: "Cédric Roullier",
  jobTitle: "Peintre en bâtiment et décorateur",
  phoneDisplay: "06 99 13 93 07",
  phoneHref: "tel:+33699139307",
  email: "contact@roullier-peintre.fr",
  address: {
    street: "80 bis Rue d'Anjou",
    postalCode: "49620",
    city: "Mauges-sur-Loire",
    region: "Maine-et-Loire",
    country: "FR",
  },
  addressDisplay: "80 bis Rue d'Anjou, 49620 Mauges-sur-Loire",
  mainCity: "Mauges-sur-Loire",
  district: "La Pommeraye",
  department: "Maine-et-Loire (49)",
  yearsInBusiness: 5,
  hours: [
    { days: "Lundi – Vendredi", hours: "08h00 – 18h30" },
    { days: "Samedi – Dimanche", hours: "Fermé" },
  ],
  rating: {
    value: 5.0,
    google: { value: 5.0, count: 4 },
    pagesJaunes: { value: 5.0, count: 1 },
    totalCount: 5,
  },
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Ent+Roullier+C%C3%A9dric+Peintre+D%C3%A9corateur+80+bis+Rue+d%27Anjou+49620+Mauges-sur-Loire",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=80+bis+Rue+d%27Anjou+49620+Mauges-sur-Loire&output=embed",
};

export type Review = {
  quote: string;
  author: string;
  source: "Google" | "Pages Jaunes";
  ownerReply?: string;
};

export const reviews: Review[] = [
  {
    quote:
      "Artisan à l'écoute des souhaits de ses clients. Travail de qualité. Je recommande.",
    author: "Avis client",
    source: "Pages Jaunes",
  },
  {
    quote:
      "Après de nombreuses heures de travail le résultat est là. Merci à cet artisan pour son excellent travail, ses très bons conseils (très bon regard pour la décoration) et son professionnalisme. Je suis super satisfait du résultat, et il y avait fort à faire. De plus le mobilier restant pendant les travaux a très bien été protégé et le chantier une fois terminé fut laissé très propre. Je recommande vivement cet artisan.",
    author: "Michael Dubourg",
    source: "Google",
  },
  {
    quote:
      "Artisan très à l'écoute de ses clients. Travail de qualité. Je recommande !!",
    author: "Tatiana Couet",
    source: "Google",
    ownerReply: "Merci de votre confiance et de votre accueil. A bientôt.",
  },
  {
    quote:
      "Pleinement satisfait de la qualité du travail de très bons conseils. Travail soigné. Excellente prestation. Je recommande à 100%.",
    author: "Armelle Gallard",
    source: "Google",
  },
  {
    quote: "Merci Mr Roullier pour le travail effectué. Je recommande cette entreprise. Merci encore.",
    author: "Stéphane Pavion",
    source: "Google",
  },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "peinture-interieure",
    title: "Peinture intérieure",
    description:
      "Murs, plafonds, boiseries : finitions mates, satinées ou brillantes soignées, pour des pièces à vivre qui vous ressemblent.",
  },
  {
    slug: "peinture-exterieure",
    title: "Peinture extérieure et façade",
    description:
      "Ravalement et peinture de façade adaptés aux menuiseries du Maine-et-Loire, pour protéger et embellir durablement votre bien.",
  },
  {
    slug: "papier-peint",
    title: "Pose et dépose de papier peint",
    description:
      "Dépose propre des anciens revêtements et pose soignée de vos nouveaux papiers peints, raccords compris.",
  },
  {
    slug: "enduit-decoratif",
    title: "Enduit décoratif",
    description:
      "Effets matière et enduits décoratifs pour donner du caractère à un mur ou une pièce entière.",
  },
  {
    slug: "peinture-bois-metaux",
    title: "Peinture sur bois et métaux",
    description:
      "Portes, placards, meubles, escaliers, éléments métalliques : préparation, sous-couche et finition durable.",
  },
  {
    slug: "vernissage-teinture",
    title: "Vernissage et teinture du bois",
    description:
      "Mise en valeur des boiseries et parquets par teinture ou vernissage adapté à l'usage de la pièce.",
  },
  {
    slug: "peinture-pulverisation",
    title: "Peinture par pulvérisation",
    description:
      "Application au pistolet pour un rendu uniforme sur grandes surfaces, plaques de plâtre et menuiseries.",
  },
  {
    slug: "peinture-placards-portes",
    title: "Peinture de placards et portes",
    description:
      "Rénovation de placards, portes et éléments de rangement sans les remplacer, pour un intérieur qui reprend vie.",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Prise de contact",
    description:
      "Vous décrivez votre projet par téléphone ou via le formulaire. Réponse rapide, sans engagement.",
  },
  {
    step: "02",
    title: "Visite et devis gratuit",
    description:
      "Un rendez-vous sur place pour évaluer le chantier, échanger sur vos envies, puis un devis détaillé et gratuit.",
  },
  {
    step: "03",
    title: "Intervention soignée",
    description:
      "Protection du mobilier, préparation des supports, puis application avec le souci du détail qui fait la différence.",
  },
  {
    step: "04",
    title: "Réception et suivi",
    description:
      "Chantier laissé propre, réception des travaux ensemble et disponibilité en cas de question après intervention.",
  },
];

export const serviceAreas = [
  "Mauges-sur-Loire",
  "La Pommeraye",
  "Chalonnes-sur-Loire",
  "Loireauxence",
  "Ancenis",
  "Angers",
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Combien coûte une prestation de peinture intérieure ou extérieure ?",
    answer:
      "Chaque chantier est différent selon la surface, l'état des supports et les finitions choisies. C'est pourquoi le devis est toujours établi après une visite sur place, gratuitement et sans engagement. Vous recevez un chiffrage détaillé avant toute intervention.",
  },
  {
    question: "Quel est le délai pour obtenir un devis puis démarrer les travaux ?",
    answer:
      "La prise de contact aboutit généralement à un rendez-vous sous quelques jours. Le devis est transmis rapidement après la visite, et la date d'intervention est convenue ensemble selon la disponibilité et l'urgence de votre projet.",
  },
  {
    question: "Intervenez-vous en urgence ou pour de petits travaux ?",
    answer:
      "Oui, aussi bien pour un chantier complet que pour une pièce isolée ou une reprise ponctuelle (placard, porte, escalier). Contactez-nous par téléphone pour évaluer ensemble la faisabilité selon le planning.",
  },
  {
    question: "Le mobilier et les sols sont-ils protégés pendant le chantier ?",
    answer:
      "Systématiquement. La protection du mobilier restant sur place et des sols fait partie intégrante de la prestation, tout comme le nettoyage du chantier une fois les travaux terminés — c'est un point régulièrement souligné par nos clients.",
  },
  {
    question: "Quelle zone géographique couvrez-vous ?",
    answer:
      "Nous intervenons à Mauges-sur-Loire et dans tout le Maine-et-Loire, notamment autour de La Pommeraye, Chalonnes-sur-Loire, Loireauxence, Ancenis et Angers. Contactez-nous pour vérifier la couverture de votre secteur.",
  },
  {
    question: "Proposez-vous des conseils en décoration et choix de couleurs ?",
    answer:
      "Oui, le conseil en décoration et le choix des teintes et finitions font partie de l'accompagnement proposé lors de la visite de chantier, pour un résultat qui correspond vraiment à vos attentes.",
  },
];
