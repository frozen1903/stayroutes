import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function PrincesIslandsTour() {
  return (
    <>

      <Navbar/>

      <div className="min-h-screen">

        {/* Hero */}

        <section className="relative h-screen overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
            alt="Princes Islands Tour"
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
              Island Experience
            </p>

            <h1 className="text-5xl md:text-8xl font-black max-w-5xl leading-tight mb-8">
              Princes Islands Tour
            </h1>

            <p className="max-w-3xl text-lg md:text-2xl text-gray-200 leading-relaxed mb-10">
              Escape the busy city and discover peaceful islands, seaside streets and unforgettable views near Istanbul.
            </p>

            <a
              href="https://wa.me/905555555555"
              className="bg-white text-black hover:bg-yellow-400 transition-all duration-300 px-8 py-5 rounded-2xl w-fit font-bold"
            >
              Reserve Experience
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
                Discover Istanbul’s Peaceful Islands
              </h2>

              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                Enjoy a relaxing island journey with beautiful sea views, historical mansions, local cafes and unforgettable coastal atmosphere.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                Explore Büyükada and nearby islands with guided routes, electric vehicles, local restaurants and hidden scenic locations.
              </p>

              <div className="space-y-4 text-gray-300">

                <p>✓ Ferry Tickets Included</p>
                <p>✓ Professional Guide</p>
                <p>✓ Scenic Island Route</p>
                <p>✓ Free Time For Exploration</p>
                <p>✓ Local Recommendations</p>

              </div>

            </div>

            {/* Right */}

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

                <h3 className="text-yellow-400 text-sm uppercase tracking-[3px] mb-4">
                  Duration
                </h3>

                <p className="text-2xl font-bold">
                  Full Day
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

                <h3 className="text-yellow-400 text-sm uppercase tracking-[3px] mb-4">
                  Guide
                </h3>

                <p className="text-2xl font-bold">
                  Included
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

                <h3 className="text-yellow-400 text-sm uppercase tracking-[3px] mb-4">
                  Transport
                </h3>

                <p className="text-2xl font-bold">
                  Ferry Included
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

                <h3 className="text-yellow-400 text-sm uppercase tracking-[3px] mb-4">
                  Experience
                </h3>

                <p className="text-2xl font-bold">
                  Relaxing
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Highlights */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
            Tour Highlights
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-14">
            Island Experiences
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <div className="text-5xl mb-6">
                🚢
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Ferry Journey
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Enjoy panoramic Bosphorus and Marmara Sea views during the trip.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <div className="text-5xl mb-6">
                🌊
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Seaside Atmosphere
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Relax near the coast with peaceful island vibes and fresh sea air.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <div className="text-5xl mb-6">
                🚲
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Island Exploration
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Discover hidden streets, local cafes and historical island houses.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <div className="text-5xl mb-6">
                📸
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Photo Spots
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Capture unforgettable island moments and scenic coastal landscapes.
              </p>

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

            {/* Standard */}

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-md">

              <h3 className="text-3xl font-black mb-6">
                Standard
              </h3>

              <div className="space-y-4 text-gray-300 mb-8">

                <p>✓ Ferry Tickets</p>
                <p>✓ Guided Tour</p>
                <p>✓ Island Route</p>
                <p>✓ Free Exploration Time</p>

              </div>

              <a
                href="https://wa.me/905555555555"
                className="bg-white/10 hover:bg-white/20 transition-all px-6 py-4 rounded-2xl inline-block"
              >
                Select Package
              </a>

            </div>

            {/* Couple */}

            <div className="bg-yellow-500 text-black rounded-[32px] p-8 scale-105 shadow-2xl">

              <p className="uppercase tracking-[3px] text-sm mb-4">
                Most Popular
              </p>

              <h3 className="text-3xl font-black mb-6">
                Couple Escape ❤️
              </h3>

              <div className="space-y-4 mb-8">

                <p>✓ Romantic Island Route</p>
                <p>✓ Premium Photo Stops</p>
                <p>✓ Seaside Restaurant</p>
                <p>✓ Sunset Experience</p>
                <p>✓ Private Moments</p>

              </div>

              <a
                href="https://wa.me/905555555555"
                className="bg-black text-white hover:bg-neutral-900 transition-all px-6 py-4 rounded-2xl inline-block"
              >
                Select Package
              </a>

            </div>

            {/* VIP */}

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-md">

              <h3 className="text-3xl font-black mb-6">
                VIP Island 👑
              </h3>

              <div className="space-y-4 text-gray-300 mb-8">

                <p>✓ VIP Transfer</p>
                <p>✓ Private Guide</p>
                <p>✓ Premium Route</p>
                <p>✓ Luxury Experience</p>
                <p>✓ Priority Services</p>

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
              Island Moments
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
                alt="Princes Islands"
                className="rounded-[32px] h-[500px] object-cover w-full hover:scale-[1.02] transition-all duration-500"
              />

              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
                alt="Island Sea"
                className="rounded-[32px] h-[500px] object-cover w-full hover:scale-[1.02] transition-all duration-500"
              />

              <img
                src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=2070&auto=format&fit=crop"
                alt="Island Experience"
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
