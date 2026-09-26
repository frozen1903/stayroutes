import { site } from './site'

// schema.org yapılandırılmış veri üreticileri (Google zengin sonuçları için).
// Not: Gerçek telefon numarası eklenince organization'a `telephone`, fiyatlar gelince turlara `offers` eklenmeli.

const organizationId = `${site.url}/#organization`

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': organizationId,
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/logo.png`,
    description: site.description,
    areaServed: [
      { '@type': 'City', name: 'Istanbul' },
      { '@type': 'Country', name: 'Turkey' },
    ],
    knowsLanguage: 'en',
    ...(site.social.instagram ? { sameAs: [site.social.instagram] } : {}),
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  }
}

export function faqSchema(faq) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

export function tourSchema(tour) {
  const images = [tour.heroImage, ...(tour.gallery || []).map((image) => image.src)]

  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.seoTitle || tour.title,
    description: tour.intro,
    url: `${site.url}/tours/${tour.slug}`,
    image: [...new Set(images)],
    provider: { '@id': organizationId, '@type': 'TravelAgency', name: site.name, url: site.url },
    ...(tour.timeline
      ? {
          itinerary: {
            '@type': 'ItemList',
            itemListElement: tour.timeline.map((step, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: step.title,
              ...(step.description ? { description: step.description } : {}),
            })),
          },
        }
      : {}),
  }
}

export function transferServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Airport transfer',
    name: 'VIP Istanbul Airport Transfer',
    description:
      'Private VIP transfers between Istanbul Airport (IST), Sabiha Gökçen Airport (SAW) and hotels in Istanbul with Mercedes Vito and Sprinter vehicles.',
    url: `${site.url}/transfer`,
    provider: { '@id': organizationId, '@type': 'TravelAgency', name: site.name, url: site.url },
    areaServed: { '@type': 'City', name: 'Istanbul' },
  }
}
