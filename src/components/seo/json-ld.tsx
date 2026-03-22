import { siteConfig, founder } from "@/data/site";

// Organization schema
export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-vanille-strategie.png`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: siteConfig.addresses.grandBaie.line1,
        addressLocality: siteConfig.addresses.grandBaie.city,
        addressCountry: "MU",
      },
      {
        "@type": "PostalAddress",
        streetAddress: siteConfig.addresses.ebene.line1,
        addressLocality: "Ebene",
        postalCode: "72201",
        addressCountry: "MU",
      },
    ],
    founder: {
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.title,
      description: founder.bio,
      worksFor: { "@type": "Organization", name: siteConfig.name },
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.twitter,
      siteConfig.social.linkedinDidier,
    ],
    areaServed: {
      "@type": "Country",
      name: "Mauritius",
    },
    knowsAbout: [
      "Company formation in Mauritius",
      "Occupation Permit Mauritius",
      "Tax planning Mauritius",
      "Transfer pricing",
      "Expatriation Maurice",
      "Accounting IFRS Mauritius",
      "Global Business Company",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Person schema for Didier
export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: founder.name,
    jobTitle: founder.title,
    description: founder.bio,
    url: `${siteConfig.url}/didier-laroussinie`,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    knowsAbout: founder.specialties,
    alumniOf: { "@type": "Organization", name: "Deloitte" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ schema
export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// BlogPosting schema for blog posts
export function BlogPostingJsonLd({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  wordCount,
  articleSection,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  wordCount?: number;
  articleSection?: string;
}) {
  const url = `${siteConfig.url}/ressources/blog/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished,
    dateModified: dateModified || datePublished,
    ...(wordCount ? { wordCount } : {}),
    ...(articleSection ? { articleSection } : {}),
    inLanguage: "fr-FR",
    author: {
      "@type": "Organization",
      name: "Cabinet Vanille Stratégie",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo-vanille-strategie.png`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service schema
export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}${url}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: { "@type": "Country", name: "Mauritius" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// BreadcrumbList schema
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
