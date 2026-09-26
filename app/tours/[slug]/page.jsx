import { notFound } from 'next/navigation'
import TourDetail from '../../../components/TourDetail'
import { tours, getTour } from '../../../data/tours'

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

  return <TourDetail tour={tour} />
}
