import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function LuxuryYachtTour() {
  return (
    <>

      <Navbar/>

      <div className="min-h-screen">

        {/* Hero */}

        <section className="relative h-screen overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Yacht Tour"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20">

            <a
              href="/tours"
              className="text-gray-300 hover:text-yellow-400 transition-all mb-8 w-fit"
            >
              ← Back to Tours
            </a>

            <p className="uppercase tracking-[5px] text-yellow-400 mb-6 text-sm">
              Luxury Experience
            </p>

            <h1 className="text-5xl md:text-8xl font-black max-w-5xl leading-tight mb-8">
              Luxury Yacht Tour
            </h1>

            <p className="max-w-2xl text-lg md:text-2xl text-gray-200 leading-relaxed mb-10">
              Discover Istanbul from a private luxury yacht with breathtaking Bosphorus views, premium service and unforgettable moments.
            </p>

            <a
              href="https://wa.me/905555555555"
              className="bg-white text-black hover:bg-yellow-400 transition-all duration-300 px-8 py-5 rounded-2xl w-fit font-bold"
            >
              Reserve via WhatsApp
            </a>

          </div>

        </section>

        {/* About */}

        <section className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid md:grid-cols-2 gap-16">

            {/* Left */}

            <div>

              <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
                About Experience
              </p>

              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Explore Bosphorus In Luxury
              </h2>

              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                Enjoy a premium private yacht experience between Europe and Asia while discovering Istanbul’s iconic skyline.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Perfect for couples, honeymoon trips, birthday celebrations and unforgettable sunset moments on the Bosphorus.
              </p>

            </div>

            {/* Right */}

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

                <h3 className="text-yellow-400 text-sm uppercase tracking-[3px] mb-4">
                  Duration
                </h3>

                <p className="text-2xl font-bold">
                  2-4 Hours
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

                <h3 className="text-yellow-400 text-sm uppercase tracking-[3px] mb-4">
                  Capacity
                </h3>

                <p className="text-2xl font-bold">
                  Private Group
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

                <h3 className="text-yellow-400 text-sm uppercase tracking-[3px] mb-4">
                  Transfer
                </h3>

                <p className="text-2xl font-bold">
                  Optional VIP
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

                <h3 className="text-yellow-400 text-sm uppercase tracking-[3px] mb-4">
                  Experience
                </h3>

                <p className="text-2xl font-bold">
                  Premium
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Packages */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
            Packages
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-14">
            Choose Your Experience
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Package 1 */}

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-md">

              <h3 className="text-3xl font-black mb-6">
                Standard
              </h3>

              <div className="space-y-4 text-gray-300 mb-8">

                <p>✓ Bosphorus Route</p>
                <p>✓ Welcome Drinks</p>
                <p>✓ Luxury Yacht</p>
                <p>✓ Professional Crew</p>

              </div>

              <a
                href="https://wa.me/905555555555"
                className="bg-white/10 hover:bg-white/20 transition-all px-6 py-4 rounded-2xl inline-block"
              >
                Select Package
              </a>

            </div>

            {/* Package 2 */}

            <div className="bg-yellow-500 text-black rounded-[32px] p-8 scale-105 shadow-2xl">

              <p className="uppercase tracking-[3px] text-sm mb-4">
                Most Popular
              </p>

              <h3 className="text-3xl font-black mb-6">
                Couple Package ❤️
              </h3>

              <div className="space-y-4 mb-8">

                <p>✓ Romantic Decoration</p>
                <p>✓ Sunset Cruise</p>
                <p>✓ Welcome Drinks</p>
                <p>✓ Couple Photo Spots</p>
                <p>✓ Premium Seating</p>

              </div>

              <a
                href="https://wa.me/905555555555"
                className="bg-black text-white hover:bg-neutral-900 transition-all px-6 py-4 rounded-2xl inline-block"
              >
                Select Package
              </a>

            </div>

            {/* Package 3 */}

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-md">

              <h3 className="text-3xl font-black mb-6">
                VIP Celebration 👑
              </h3>

              <div className="space-y-4 text-gray-300 mb-8">

                <p>✓ Private Yacht</p>
                <p>✓ VIP Decoration</p>
                <p>✓ Dinner Included</p>
                <p>✓ Premium Service</p>
                <p>✓ Birthday / Proposal Setup</p>

              </div>

              <a
                href="https://wa.me/905555555555"
                className="bg-white/10 hover:bg-white/20 transition-all px-6 py-4 rounded-2xl inline-block"
              >
                Select Package
              </a>

            </div>

          </div>

        </section>

        {/* Gallery */}

        <section className="px-6 pb-28">

          <div className="max-w-7xl mx-auto">

            <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
              Gallery
            </p>

            <h2 className="text-4xl md:text-6xl font-black mb-12">
              Yacht Moments
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <img
                src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Yacht"
                className="rounded-[32px] h-[500px] object-cover w-full hover:scale-[1.02] transition-all duration-500"
              />

              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
                alt="Bosphorus Sunset"
                className="rounded-[32px] h-[500px] object-cover w-full hover:scale-[1.02] transition-all duration-500"
              />

              <img
                src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=2070&auto=format&fit=crop"
                alt="Yacht Experience"
                className="rounded-[32px] h-[500px] object-cover w-full hover:scale-[1.02] transition-all duration-500"
              />

            </div>

          </div>

        </section>

      </div>

      <Footer/>

    </>
  )
}
