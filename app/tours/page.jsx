import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import DragScroll from '../../components/DragScroll'
import TourCard from '../../components/TourCard'
import { categories, toursInCategory } from '../../data/tours'

export const metadata = {
  title: 'Istanbul & Turkey Tours: Bosphorus, Cappadocia, Ephesus',
  description:
    'Private and small-group tours in Istanbul and across Turkey: Bosphorus dinner cruise, Old City, Princes’ Islands, Cappadocia balloons, Pamukkale, Ephesus and more.',
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
            Istanbul &amp; Turkey Tours
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From Bosphorus cruises and the Old City to Cappadocia balloons and ancient Ephesus — unforgettable tours with premium concierge service.
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
                  <TourCard
                    key={tour.slug}
                    tour={tour}
                    className="w-[300px] md:w-[420px] h-[520px] flex-shrink-0 snap-start"
                    sizes="(min-width: 768px) 420px, 300px"
                  />
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
