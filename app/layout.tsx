import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/data";
import StickyCallButton from "@/components/StickyCallButton";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://roullier-peintre.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Peintre en bâtiment à Mauges-sur-Loire | ${business.name}`,
    template: `%s | ${business.name}`,
  },
  description:
    "Peintre en bâtiment à Mauges-sur-Loire (La Pommeraye) : peinture intérieure, extérieure, pose de papier peint et enduit décoratif. Devis gratuit, note de 5/5 sur Google.",
  keywords: [
    "peintre en bâtiment Mauges-sur-Loire",
    "peintre décorateur La Pommeraye",
    "artisan peintre Maine-et-Loire",
    "peinture intérieure Mauges-sur-Loire",
    "pose papier peint Mauges-sur-Loire",
    "peinture façade extérieure Maine-et-Loire",
  ],
  openGraph: {
    title: `Peintre en bâtiment à Mauges-sur-Loire | ${business.name}`,
    description:
      "Peinture intérieure, extérieure, papier peint et enduit décoratif en Maine-et-Loire. Devis gratuit, artisan noté 5/5.",
    url: siteUrl,
    siteName: business.name,
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}/#business`,
    name: business.name,
    url: siteUrl,
    telephone: business.phoneHref.replace("tel:", ""),
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      postalCode: business.address.postalCode,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    areaServed: [
      business.mainCity,
      business.district,
      "Chalonnes-sur-Loire",
      "Loireauxence",
      "Ancenis",
      "Angers",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:30",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating.value,
      reviewCount: business.rating.totalCount,
    },
  };

  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <StickyCallButton />
      </body>
    </html>
  );
}
