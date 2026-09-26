import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
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

// 3'ün katı kadar tur varsa masaüstünde 3 sütun, değilse 2 sütun (örn. 4 tur -> 2x2)
function gridColumns(count) {
  return count % 3 === 0 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'
}

export default function ToursPage() {
  return (
    <>

      <Navbar/>

      <div className="min-h-screen max-w-7xl mx-auto px-6 pt-32 pb-28">

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

              {/* Tours Grid */}

              <div className={`grid gap-6 ${gridColumns(toursInCategory(category.id).length)}`}>

                {toursInCategory(category.id).map((tour) => (
                  <TourCard
                    key={tour.slug}
                    tour={tour}
                    className="h-[440px] md:h-[480px]"
                    sizes={toursInCategory(category.id).length % 3 === 0
                      ? '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                      : '(min-width: 768px) 50vw, 100vw'}
                  />
                ))}

              </div>

            </section>

          ))}

        </div>

      </div>

      <Footer/>

    </>
  )
}
