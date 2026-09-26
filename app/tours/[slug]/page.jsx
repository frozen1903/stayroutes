import { notFound } from 'next/navigation'
import TourDetail from '../../../components/TourDetail'
import JsonLd from '../../../components/JsonLd'
import { tours, getTour, relatedTours } from '../../../data/tours'
import { breadcrumbSchema, faqSchema, tourSchema } from '../../../lib/schema'

// Listede olmayan slug'lar 404 döner
export const dynamicParams = false

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const tour = getTour(slug)

  if (!tour) return {}

  return {
    title: tour.seoTitle || tour.title,
    description: tour.intro,
    alternates: {
      canonical: `/tours/${tour.slug}`,
    },
    openGraph: {
      title: tour.seoTitle || tour.title,
      description: tour.intro,
      url: `/tours/${tour.slug}`,
      images: [{ url: tour.heroImage, alt: tour.title }],
    },
  }
}

export default async function TourPage({ params }) {
  const { slug } = await params
  const tour = getTour(slug)

  if (!tour) notFound()

  return (
    <>
      <JsonLd data={tourSchema(tour)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '' },
          { name: 'Tours', path: '/tours' },
          { name: tour.card.name, path: `/tours/${tour.slug}` },
        ])}
      />
      {tour.faq && <JsonLd data={faqSchema(tour.faq)} />}

      <TourDetail tour={tour} related={relatedTours(tour.slug)} />
    </>
  )
}
