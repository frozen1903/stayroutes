import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function SapancaMasukiyeTour() {

  const whatsappMessage = encodeURIComponent(`
Hello StayRoute,

Tour: Sapanca & Masukiye Tour
Date:
Guests:
Hotel:

Please provide availability and pricing.
`)

  return (
    <>
      <Navbar />

      <div className="min-h-screen">

        {/* Hero */}

        <section className="relative h-screen overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
            alt="Sapanca"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20">

            <p className="uppercase tracking-[5px] text-yellow-400 mb-6 text-sm">
              Nature Escape Experience
            </p>

            <h1 className="text-5xl md:text-8xl font-black max-w-5xl leading-tight mb-8">
              Sapanca & Maşukiye Tour
            </h1>

            <p className="max-w-3xl text-lg md:text-2xl text-gray-200 leading-relaxed mb-10">
              Escape the city and discover lakes, waterfalls, forests and breathtaking mountain views just a short drive from Istanbul.
            </p>

            <a
              href={`https://wa.me/905555555555?text=${whatsappMessage}`}
              className="bg-white text-black hover:bg-yellow-400 transition-all duration-300 px-8 py-5 rounded-2xl w-fit font-bold"
            >
              Reserve Experience
            </a>

          </div>

        </section>

        {/* About */}

        <section className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid md:grid-cols-2 gap-16">

            <div>

              <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
                About Experience
              </p>

              <h2 className="text-4xl md:text-6xl font-black mb-8">
                Discover Turkey's Natural Paradise
              </h2>

              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                Explore Sapanca Lake, Maşukiye waterfalls, Kartepe Mountain and breathtaking forest landscapes with premium transportation and local guidance.
              </p>

              <div className="space-y-4 text-gray-300">
                <p>✓ Sapanca Lake</p>
                <p>✓ Maşukiye Waterfalls</p>
                <p>✓ Glass Terrace</p>
                <p>✓ Kartepe Mountain</p>
                <p>✓ ATV Safari Options</p>
              </div>

            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-yellow-400 mb-4">Duration</h3>
                <p className="text-2xl font-bold">Full Day</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-yellow-400 mb-4">Nature</h3>
                <p className="text-2xl font-bold">Premium</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-yellow-400 mb-4">Transport</h3>
                <p className="text-2xl font-bold">Included</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-yellow-400 mb-4">Experience</h3>
                <p className="text-2xl font-bold">Adventure</p>
              </div>

            </div>

          </div>

        </section>

        {/* Highlights */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <h2 className="text-4xl md:text-6xl font-black mb-14">
            Experience Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
              <div className="text-5xl mb-6">🏞️</div>
              <h3 className="text-2xl font-bold mb-4">Sapanca Lake</h3>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
              <div className="text-5xl mb-6">🌊</div>
              <h3 className="text-2xl font-bold mb-4">Maşukiye</h3>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
              <div className="text-5xl mb-6">🚙</div>
              <h3 className="text-2xl font-bold mb-4">ATV Safari</h3>
            </div>

          </div>

        </section>

        {/* Timeline */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <h2 className="text-4xl md:text-6xl font-black mb-14">
            Your Journey
          </h2>

          <div className="space-y-6">

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
              <p className="text-yellow-400">08:00 AM</p>
              <h3 className="text-3xl font-bold">Hotel Pickup</h3>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
              <p className="text-yellow-400">10:00 AM</p>
              <h3 className="text-3xl font-bold">Sapanca Lake</h3>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
              <p className="text-yellow-400">12:00 PM</p>
              <h3 className="text-3xl font-bold">Maşukiye</h3>
            </div>

          </div>

        </section>

        {/* Gallery */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <h2 className="text-4xl md:text-6xl font-black mb-14">
            Gallery
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
              className="rounded-[32px] h-[450px] object-cover w-full"
            />

            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop"
              className="rounded-[32px] h-[450px] object-cover w-full"
            />

            <img
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop"
              className="rounded-[32px] h-[450px] object-cover w-full"
            />

          </div>

        </section>

        {/* FAQ */}

        <section className="max-w-5xl mx-auto px-6 pb-24">

          <h2 className="text-4xl md:text-6xl font-black mb-14">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold mb-4">
                Is lunch included?
              </h3>
              <p className="text-gray-400">
                Depending on the selected package.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold mb-4">
                Is ATV included?
              </h3>
              <p className="text-gray-400">
                Available in Adventure and VIP packages.
              </p>
            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="max-w-6xl mx-auto px-6 pb-32">

          <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-black rounded-[40px] p-12 md:p-20 text-center">

            <h2 className="text-4xl md:text-7xl font-black mb-8">
              Ready To Escape Into Nature?
            </h2>

            <p className="max-w-3xl mx-auto text-lg mb-10">
              Let our travel experts create the perfect Sapanca & Maşukiye experience for you.
            </p>

            <a
              href={`https://wa.me/905555555555?text=${whatsappMessage}`}
              className="bg-black text-white px-10 py-5 rounded-2xl inline-block font-bold"
            >
              Talk To A Travel Expert
            </a>

          </div>

        </section>

      </div>

      <Footer />
    </>
  )
}