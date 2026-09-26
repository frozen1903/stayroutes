import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import DragScroll from '../../components/DragScroll'
import { categories, toursInCategory } from '../../data/tours'

export const metadata = {
  title: 'Tours',
  description:
    'Discover unforgettable tours across Turkey: Bosphorus cruises, Istanbul Old City, Cappadocia, Pamukkale, Ephesus and more.',
  alternates: {
    canonical: '/tours',
  },
}

export default function ToursPage() {
  return (
    <>

      <Navbar/>

      <div className="min-h-screen px-6 pt-32 pb-28">

        {/* Hero */}

        <div className="text-center mb-20">

          <p className="text-yellow-400 uppercase tracking-[4px] mb-4 text-sm">
            Premium Experiences
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Explore Turkey
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover unforgettable tours, luxury experiences and premium concierge services across Turkey.
          </p>

        </div>

        {/* Categories */}

        <div className="space-y-20">

          {categories.map((category) => (

            <section key={category.id}>

              {/* Category Header */}

              <div className="mb-8">

                <h2 className="text-3xl md:text-5xl font-black">
                  {category.title}
                </h2>

              </div>

              {/* Scroll Area */}

              <DragScroll className="drag-scroll flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar cursor-grab active:cursor-grabbing select-none">

                {toursInCategory(category.id).map((tour) => (

                  <div
                    key={tour.slug}
                    className="relative w-[300px] md:w-[420px] h-[520px] rounded-[36px] overflow-hidden flex-shrink-0 snap-start group shadow-2xl"
                  >

                    {/* Image */}

                    <Image
                      src={tour.card.image}
                      alt={tour.card.name}
                      fill
                      sizes="(min-width: 768px) 420px, 300px"
                      draggable={false}
                      className="object-cover group-hover:scale-110 transition-all duration-700"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                    {/* Content */}

                    <div className="relative z-10 h-full flex flex-col justify-end p-8">

                      <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                        {tour.card.name}
                      </h3>

                      <p className="text-gray-200 leading-relaxed mb-6">
                        {tour.card.description}
                      </p>

                      <Link
                        href={`/tours/${tour.slug}`}
                        className="bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300 px-6 py-4 rounded-2xl w-fit"
                      >
                        View Experience
                      </Link>

                    </div>

                  </div>

                ))}

              </DragScroll>

            </section>

          ))}

        </div>

      </div>

      <Footer/>

    </>
  )
}
