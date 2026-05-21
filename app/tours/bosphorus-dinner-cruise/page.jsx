import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function BosphorusDinnerCruise() {
  return (
    <>

      {/* Navbar */}

      <Navbar/>

      <div className="min-h-screen">

        {/* Hero */}

        <section className="relative h-screen overflow-hidden">

          {/* Background */}

          <img
            src="https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=2070&auto=format&fit=crop"
            alt="Bosphorus Dinner Cruise"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-black/60"></div>

          {/* Hero Content */}

          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20">

            <a
              href="/tours"
              className="text-gray-300 hover:text-yellow-400 transition-all mb-8 w-fit"
            >
              ← Back to Tours
            </a>

            <p className="uppercase tracking-[5px] text-yellow-400 mb-6 text-sm">
              Istanbul Experience
            </p>

            <h1 className="text-5xl md:text-8xl font-black max-w-5xl leading-tight mb-8">
              Bosphorus Dinner Cruise
            </h1>

            <p className="max-w-2xl text-lg md:text-2xl text-gray-200 leading-relaxed mb-10">
              Luxury dinner cruise experience with live entertainment,
              Bosphorus skyline views and unforgettable Istanbul nights.
            </p>

            <a
              href="https://wa.me/905555555555"
              className="bg-white text-black hover:bg-yellow-400 transition-all duration-300 px-8 py-5 rounded-2xl w-fit font-bold"
            >
              Reserve via WhatsApp
            </a>

          </div>

        </section>

        {/* Details Section */}

        <section className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid md:grid-cols-2 gap-16">

            {/* Left Side */}

            <div>

              <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
                About Experience
              </p>

              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Luxury Night On The Bosphorus
              </h2>

              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                Discover Istanbul from the water while enjoying premium dining,
                live performances and panoramic Bosphorus views between Europe and Asia.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Experience traditional Turkish entertainment, luxury seating,
                premium atmosphere and unforgettable city lights throughout the night.
              </p>

            </div>

            {/* Right Side */}

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

                <h3 className="text-yellow-400 text-sm uppercase tracking-[3px] mb-4">
                  Duration
                </h3>

                <p className="text-2xl font-bold">
                  3-4 Hours
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
                  Dinner
                </h3>

                <p className="text-2xl font-bold">
                  Included
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

        {/* Gallery */}

        <section className="px-6 pb-24">

          <div className="max-w-7xl mx-auto">

            <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
              Gallery
            </p>

            <h2 className="text-4xl md:text-6xl font-black mb-12">
              Experience Moments
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <img
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2070&auto=format&fit=crop"
                alt="Dinner Cruise"
                className="rounded-[32px] h-[500px] object-cover w-full hover:scale-[1.02] transition-all duration-500"
              />

              <img
                src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2070&auto=format&fit=crop"
                alt="Bosphorus Night"
                className="rounded-[32px] h-[500px] object-cover w-full hover:scale-[1.02] transition-all duration-500"
              />

              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Experience"
                className="rounded-[32px] h-[500px] object-cover w-full hover:scale-[1.02] transition-all duration-500"
              />

            </div>

          </div>

        </section>

      </div>

      {/* Footer */}

      <Footer/>

    </>
  )
}
