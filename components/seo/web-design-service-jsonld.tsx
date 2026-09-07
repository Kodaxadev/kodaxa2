export function WebDesignServiceJsonLd() {
  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Design & Development',
    serviceType: ['Web Design', 'Web Development', 'E-commerce'],
    provider: {
      '@id': 'https://www.kodaxa.dev/#organization',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Clovis',
      },
      {
        '@type': 'City',
        name: 'Fresno',
      },
      {
        '@type': 'Place',
        name: 'Central Valley',
      },
    ],
    description:
      'Web design and web development services for small businesses in Clovis and the broader Central Valley.',
    termsOfService:
      'Kodaxa works directly with small businesses in Clovis, Fresno, and nearby California communities.',
  };

  return (
    <script
      id="kodaxa-web-design-service-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceStructuredData),
      }}
    />
  );
}

