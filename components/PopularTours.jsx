import Link from 'next/link'
import TourCard from './TourCard'
import { featuredTours } from '../data/tours'

export default function PopularTours() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">

      <div className="text-center mb-14">

        <p className="text-yellow-400 uppercase tracking-[4px] mb-4 text-sm">
          Popular Tours
        </p>

        <h2 className="text-4xl md:text-6xl font-black mb-6">
          Best Of Istanbul &amp; Turkey
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Our guests’ favourite experiences, from the Bosphorus to Cappadocia.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {featuredTours().map((tour) => (
          <TourCard key={tour.slug} tour={tour} />
        ))}

      </div>

      <div className="text-center mt-12">

        <Link
          href="/tours"
          className="inline-block bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 text-black px-10 py-5 rounded-2xl font-bold"
        >
          View All Tours
        </Link>

      </div>

    </section>
  )
}
