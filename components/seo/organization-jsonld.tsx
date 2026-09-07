export function OrganizationJsonLd() {
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.kodaxa.dev/#organization',
    name: 'Kodaxa',
    legalName: 'Kodaxa',
    url: 'https://www.kodaxa.dev',
    logo: 'https://www.kodaxa.dev/images/kodaxa-knot.webp',
    description:
      'Kodaxa is an independent web design and development studio based in Clovis, California.',
    email: 'Justin@Kodaxa.dev',
    founder: {
      '@type': 'Person',
      name: 'Justin',
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
    serviceType: [
      'Web design',
      'Web development',
      'E-commerce',
      'Website maintenance',
    ],
  };

  return (
    <script
      id="kodaxa-organization-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationStructuredData),
      }}
    />
  );
}

