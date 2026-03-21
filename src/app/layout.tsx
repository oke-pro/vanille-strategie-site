import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd } from "@/components/seo/json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vanille Stratégie — Implantation Île Maurice | Expert-Comptable & Fiscaliste International",
    template: "%s | Vanille Stratégie",
  },
  description:
    "Depuis 2012, le seul groupe à Maurice qui intègre conseil en implantation, expertise comptable MIPA, RH/paie et dashboard temps réel. Fondé par un EC diplômé avec 40+ ans d'expérience.",
  metadataBase: new URL("https://vanillestrategie.fr"),
  keywords: [
    "création société Maurice",
    "expatriation île Maurice",
    "expert comptable Maurice",
    "permis résidence Maurice",
    "fiscalité Maurice",
    "implantation entreprise Maurice",
    "Vanille Stratégie",
    "Didier Laroussinie",
    "comptabilité Maurice",
    "occupation permit Mauritius",
    "GBC Maurice",
    "digital nomad Maurice",
    "retraite Maurice",
    "convention fiscale France Maurice",
    "transfer pricing Maurice",
    "créer société ile Maurice",
    "quitter Dubai Maurice",
    "BD Star Management Services",
  ],
  authors: [{ name: "Didier Laroussinie", url: "https://vanillestrategie.fr/didier-laroussinie" }],
  creator: "Vanille Stratégie",
  publisher: "Vanille Stratégie",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://vanillestrategie.fr",
    siteName: "Vanille Stratégie",
    title: "Vanille Stratégie — Votre nouvelle vie à Maurice commence ici",
    description:
      "Création de société, permis de résidence, comptabilité, RH — un seul interlocuteur, zéro sous-traitance. Expert-Comptable Fiscaliste International, 40+ ans d'expérience.",
    images: [
      {
        url: "/images/hero-paradise.jpg",
        width: 1920,
        height: 1280,
        alt: "Île Maurice — Vanille Stratégie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mauriceisland",
    creator: "@mauriceisland",
    title: "Vanille Stratégie — Implantation Île Maurice",
    description:
      "Depuis 2012, le seul groupe à Maurice qui intègre conseil, compta MIPA, RH et dashboard temps réel.",
    images: ["/images/hero-paradise.jpg"],
  },
  alternates: {
    canonical: "https://vanillestrategie.fr",
  },
  verification: {
    // google: "VOTRE_CODE_GOOGLE_SEARCH_CONSOLE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
