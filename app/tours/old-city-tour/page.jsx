import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function OldCityTour() {
  return (
    <>

      <Navbar/>

      <div className="min-h-screen">

        {/* Hero */}

        <section className="relative h-screen overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2070&auto=format&fit=crop"
            alt="Old City Tour"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20">

          

            <p className="uppercase tracking-[5px] text-yellow-400 mb-6 text-sm">
              Historical Experience
            </p>

            <h1 className="text-5xl md:text-8xl font-black max-w-5xl leading-tight mb-8">
              Old City Tour
            </h1>

            <p className="max-w-3xl text-lg md:text-2xl text-gray-200 leading-relaxed mb-10">
              Explore the heart of Istanbul with professional guides, historical landmarks and unforgettable cultural experiences.
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
                Discover The Historical Heart Of Istanbul
              </h2>

              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                Visit the most iconic landmarks of Istanbul including Hagia Sophia, Blue Mosque, Basilica Cistern and Grand Bazaar with experienced local guides.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                Learn the fascinating history of Byzantine and Ottoman empires while exploring ancient streets, hidden corners and cultural treasures of the city.
              </p>

              <div className="space-y-4 text-gray-300">

                <p>✓ Professional Licensed Guide</p>
                <p>✓ Historical Information</p>
                <p>✓ Small Group Experience</p>
                <p>✓ Priority Entry Assistance</p>
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
                  Language
                </h3>

                <p className="text-2xl font-bold">
                  Multi Language
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

                <h3 className="text-yellow-400 text-sm uppercase tracking-[3px] mb-4">
                  Experience
                </h3>

                <p className="text-2xl font-bold">
                  Cultural
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Tour Highlights */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
            Tour Highlights
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-14">
            Included Locations
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <div className="text-5xl mb-6">
                🕌
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Hagia Sophia
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Discover one of the world’s most iconic historical monuments.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <div className="text-5xl mb-6">
                🌉
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Basilica Cistern
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Explore the mysterious underground water palace of Istanbul.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <div className="text-5xl mb-6">
                🛍️
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Grand Bazaar
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Experience one of the oldest and largest markets in the world.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <div className="text-5xl mb-6">
                🕌
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Blue Mosque
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Visit the legendary mosque famous for its blue Iznik tiles.
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
            Choose Your Tour
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Standard */}

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-md">

              <h3 className="text-3xl font-black mb-6">
                Standard
              </h3>

              <div className="space-y-4 text-gray-300 mb-8">

                <p>✓ Professional Guide</p>
                <p>✓ Historical Tour</p>
                <p>✓ Small Group</p>
                <p>✓ Local Experience</p>

              </div>

              <a
                href="https://wa.me/905555555555"
                className="bg-white/10 hover:bg-white/20 transition-all px-6 py-4 rounded-2xl inline-block"
              >
                Select Package
              </a>

            </div>

            {/* VIP */}

            <div className="bg-yellow-500 text-black rounded-[32px] p-8 scale-105 shadow-2xl">

              <p className="uppercase tracking-[3px] text-sm mb-4">
                Most Popular
              </p>

              <h3 className="text-3xl font-black mb-6">
                VIP Historical 👑
              </h3>

              <div className="space-y-4 mb-8">

                <p>✓ VIP Transfer</p>
                <p>✓ Licensed Private Guide</p>
                <p>✓ Priority Entry</p>
                <p>✓ Premium Route</p>
                <p>✓ Private Experience</p>

              </div>

              <a
                href="https://wa.me/905555555555"
                className="bg-black text-white hover:bg-neutral-900 transition-all px-6 py-4 rounded-2xl inline-block"
              >
                Select Package
              </a>

            </div>

            {/* Couple */}

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-md">

              <h3 className="text-3xl font-black mb-6">
                Couple Package ❤️
              </h3>

              <div className="space-y-4 text-gray-300 mb-8">

                <p>✓ Private Guide</p>
                <p>✓ Couple Photos</p>
                <p>✓ Romantic Stops</p>
                <p>✓ Premium Experience</p>

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
              Historical Moments
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <img
                src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2070&auto=format&fit=crop"
                alt="Old City"
                className="rounded-[32px] h-[500px] object-cover w-full hover:scale-[1.02] transition-all duration-500"
              />

              <img
                src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2070&auto=format&fit=crop"
                alt="Hagia Sophia"
                className="rounded-[32px] h-[500px] object-cover w-full hover:scale-[1.02] transition-all duration-500"
              />

              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
                alt="Istanbul Tour"
                className="rounded-[32px] h-[500px] object-cover w-full hover:scale-[1.02] transition-all duration-500"
              />

            </div>

          </div>

        </section>
        {/* Experience Timeline */}

<section className="max-w-7xl mx-auto px-6 pb-24">

  <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
    Experience Timeline
  </p>

  <h2 className="text-4xl md:text-6xl font-black mb-14">
    Your Historical Journey
  </h2>

  <div className="space-y-6">

    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
      <p className="text-yellow-400 mb-2">09:00 AM</p>
      <h3 className="text-3xl font-bold mb-3">Hagia Sophia</h3>
      <p className="text-gray-400">
        Begin your journey with one of the world's most iconic monuments.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
      <p className="text-yellow-400 mb-2">10:30 AM</p>
      <h3 className="text-3xl font-bold mb-3">Blue Mosque</h3>
      <p className="text-gray-400">
        Explore Ottoman architecture and famous Iznik tiles.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
      <p className="text-yellow-400 mb-2">12:00 PM</p>
      <h3 className="text-3xl font-bold mb-3">Basilica Cistern</h3>
      <p className="text-gray-400">
        Descend into Istanbul's mysterious underground palace.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
      <p className="text-yellow-400 mb-2">02:00 PM</p>
      <h3 className="text-3xl font-bold mb-3">Grand Bazaar</h3>
      <p className="text-gray-400">
        Discover one of the oldest and largest covered markets in the world.
      </p>
    </div>

  </div>

</section>
{/* Detailed Experiences */}

<section className="max-w-7xl mx-auto px-6 pb-24">

  <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
    Historical Highlights
  </p>

  <h2 className="text-4xl md:text-6xl font-black mb-20">
    Discover Every Landmark
  </h2>

  <div className="space-y-32">

    <div className="grid md:grid-cols-2 gap-14 items-center">

      <img
        src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2070&auto=format&fit=crop"
        alt="Hagia Sophia"
        className="rounded-[40px] h-[600px] object-cover w-full"
      />

      <div>

        <p className="uppercase tracking-[4px] text-yellow-400 mb-4 text-sm">
          Byzantine Wonder
        </p>

        <h3 className="text-4xl md:text-6xl font-black mb-8">
          Hagia Sophia 🕌
        </h3>

        <p className="text-gray-300 text-lg leading-relaxed">
          Discover over 1,500 years of history in one of the most important architectural masterpieces ever built.
        </p>

      </div>

    </div>

    <div className="grid md:grid-cols-2 gap-14 items-center">

      <div>

        <p className="uppercase tracking-[4px] text-yellow-400 mb-4 text-sm">
          Ottoman Legacy
        </p>

        <h3 className="text-4xl md:text-6xl font-black mb-8">
          Blue Mosque
        </h3>

        <p className="text-gray-300 text-lg leading-relaxed">
          Admire magnificent domes, six minarets and beautiful Iznik tile decorations.
        </p>

      </div>

      <img
        src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2070&auto=format&fit=crop"
        alt="Blue Mosque"
        className="rounded-[40px] h-[600px] object-cover w-full"
      />

    </div>

    <div className="grid md:grid-cols-2 gap-14 items-center">

      <img
        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
        alt="Grand Bazaar"
        className="rounded-[40px] h-[600px] object-cover w-full"
      />

      <div>

        <p className="uppercase tracking-[4px] text-yellow-400 mb-4 text-sm">
          Shopping Heritage
        </p>

        <h3 className="text-4xl md:text-6xl font-black mb-8">
          Grand Bazaar 🛍️
        </h3>

        <p className="text-gray-300 text-lg leading-relaxed">
          Wander through thousands of traditional shops and experience Istanbul's vibrant trading culture.
        </p>

      </div>

    </div>

  </div>

</section>
{/* FAQ */}

<section className="max-w-5xl mx-auto px-6 pb-24">

  <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
    FAQ
  </p>

  <h2 className="text-4xl md:text-6xl font-black mb-14">
    Frequently Asked Questions
  </h2>

  <div className="space-y-6">

    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
      <h3 className="text-2xl font-bold mb-4">How long is the tour?</h3>
      <p className="text-gray-400">
        Most tours take between 6 and 8 hours depending on the selected package.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
      <h3 className="text-2xl font-bold mb-4">Do you offer private tours?</h3>
      <p className="text-gray-400">
        Yes, private guide and VIP options are available.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
      <h3 className="text-2xl font-bold mb-4">Can children join?</h3>
      <p className="text-gray-400">
        Absolutely. This experience is family friendly.
      </p>
    </div>

  </div>

</section>
{/* Final CTA */}

<section className="max-w-6xl mx-auto px-6 pb-32">

  <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-black rounded-[40px] p-12 md:p-20 text-center">

    <p className="uppercase tracking-[4px] mb-5 text-sm font-bold">
      Explore Istanbul
    </p>

    <h2 className="text-4xl md:text-7xl font-black mb-8">
      Ready To Discover Old Istanbul?
    </h2>

    <p className="max-w-3xl mx-auto text-lg mb-10">
      Let our local experts create the perfect historical experience for you.
    </p>

    <a
      href="https://wa.me/905555555555"
      className="bg-black text-white px-10 py-5 rounded-2xl inline-block font-bold hover:scale-105 transition-all"
    >
      Talk To A Local Expert
    </a>

  </div>

</section>


      </div>

      <Footer/>

    </>
  )
}
