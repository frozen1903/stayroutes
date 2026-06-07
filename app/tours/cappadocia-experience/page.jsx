import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function CappadociaExperience() {
  return (
    <>

      <Navbar/>

      <div className="min-h-screen">

        {/* Hero */}

        <section className="relative h-screen overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070&auto=format&fit=crop"
            alt="Cappadocia"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20">

            <p className="uppercase tracking-[5px] text-yellow-400 mb-6 text-sm">
              Luxury Cappadocia Experience
            </p>

            <h1 className="text-5xl md:text-8xl font-black leading-tight max-w-5xl mb-8">
              Discover The Magic Of Cappadocia
            </h1>

            <p className="max-w-3xl text-lg md:text-2xl text-gray-200 leading-relaxed mb-10">
              Explore breathtaking valleys, sunrise balloon rides and luxury cave hotels in one of Turkey’s most unforgettable destinations.
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

            <div>

              <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
                About Experience
              </p>

              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Luxury Adventures Above The Valleys
              </h2>

              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                Cappadocia offers one of the world’s most iconic travel experiences with sunrise balloon flights, unique cave hotels and magical landscapes.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                Discover hidden valleys, fairy chimneys and unforgettable sunset moments with professional guides and premium travel services.
              </p>

              <div className="space-y-4 text-gray-300">

                <p>✓ Hot Air Balloon Ride</p>
                <p>✓ Luxury Cave Hotel</p>
                <p>✓ Professional Tour Guide</p>
                <p>✓ VIP Transfer Options</p>
                <p>✓ Sunrise & Sunset Experiences</p>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

                <h3 className="text-yellow-400 text-sm uppercase tracking-[3px] mb-4">
                  Duration
                </h3>

                <p className="text-2xl font-bold">
                  2-3 Days
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

                <h3 className="text-yellow-400 text-sm uppercase tracking-[3px] mb-4">
                  Balloon Ride
                </h3>

                <p className="text-2xl font-bold">
                  Included
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

                <h3 className="text-yellow-400 text-sm uppercase tracking-[3px] mb-4">
                  Accommodation
                </h3>

                <p className="text-2xl font-bold">
                  Cave Hotel
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

        {/* Included Experiences */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
            Included Experiences
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-14">
            Explore Cappadocia
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <div className="text-5xl mb-6">
                🎈
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Balloon Ride
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Sunrise balloon flight above Cappadocia valleys.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <div className="text-5xl mb-6">
                🏨
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Cave Hotel
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Unique luxury cave accommodation experience.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <div className="text-5xl mb-6">
                🏍️
              </div>

              <h3 className="text-2xl font-bold mb-4">
                ATV Safari
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Adventure ride through valleys and dusty roads.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <div className="text-5xl mb-6">
                🌄
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Sunset Tour
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Watch magical sunsets over the valleys.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <div className="text-5xl mb-6">
                🐎
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Horse Riding
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Explore scenic routes with guided horse tours.
              </p>

            </div>

          </div>

        </section>

        {/* Timeline */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
            Experience Timeline
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-14">
            Your Journey
          </h2>

          <div className="space-y-6">

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <p className="text-yellow-400 mb-2">
                05:00 AM
              </p>

              <h3 className="text-3xl font-bold mb-3">
                Balloon Pickup
              </h3>

              <p className="text-gray-400">
                Early morning VIP pickup from your hotel.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <p className="text-yellow-400 mb-2">
                06:00 AM
              </p>

              <h3 className="text-3xl font-bold mb-3">
                Sunrise Balloon Flight
              </h3>

              <p className="text-gray-400">
                Fly above the valleys during sunrise.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <p className="text-yellow-400 mb-2">
                09:00 AM
              </p>

              <h3 className="text-3xl font-bold mb-3">
                Cave Hotel Breakfast
              </h3>

              <p className="text-gray-400">
                Traditional breakfast with panoramic valley views.
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
            Choose Your Package
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <h3 className="text-3xl font-black mb-6">
                Standard
              </h3>

              <div className="space-y-4 text-gray-300 mb-8">

                <p>✓ Balloon Ride</p>
                <p>✓ Cave Hotel</p>
                <p>✓ Group Tour</p>
                <p>✓ Breakfast Included</p>

              </div>

            </div>

            <div className="bg-yellow-500 text-black rounded-[32px] p-8 scale-105 shadow-2xl">

              <p className="uppercase tracking-[3px] text-sm mb-4">
                Most Popular
              </p>

              <h3 className="text-3xl font-black mb-6">
                Couple Escape ❤️
              </h3>

              <div className="space-y-4 mb-8">

                <p>✓ Romantic Cave Suite</p>
                <p>✓ Couple Balloon Ride</p>
                <p>✓ Sunset Dinner</p>
                <p>✓ Photo Stops</p>
                <p>✓ Luxury Transfer</p>

              </div>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <h3 className="text-3xl font-black mb-6">
                Honeymoon VIP 👑
              </h3>

              <div className="space-y-4 text-gray-300 mb-8">

                <p>✓ Private Balloon</p>
                <p>✓ Luxury Cave Suite</p>
                <p>✓ VIP Photoshoot</p>
                <p>✓ Premium Experiences</p>
                <p>✓ Concierge Support</p>

              </div>

            </div>

          </div>

        </section>

              {/* Detailed Experiences */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
            Detailed Experiences
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-20">
            Discover Every Moment
          </h2>

          <div className="space-y-32">

            {/* Balloon Ride */}

            <div className="grid md:grid-cols-2 gap-14 items-center">

              <img
                src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070&auto=format&fit=crop"
                alt="Balloon Ride"
                className="rounded-[40px] h-[600px] object-cover w-full"
              />

              <div>

                <p className="uppercase tracking-[4px] text-yellow-400 mb-4 text-sm">
                  Sunrise Experience
                </p>

                <h3 className="text-4xl md:text-6xl font-black mb-8">
                  Hot Air Balloon Ride 🎈
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Watch the sunrise above Cappadocia valleys with one of the most iconic balloon experiences in the world.
                </p>

                <div className="space-y-4 text-gray-400">

                  <p>✓ Sunrise Flight</p>
                  <p>✓ Professional Pilots</p>
                  <p>✓ Champagne Celebration</p>
                  <p>✓ Hotel Pickup Included</p>

                </div>

              </div>

            </div>

            {/* ATV Safari */}

            <div className="grid md:grid-cols-2 gap-14 items-center">

              <div>

                <p className="uppercase tracking-[4px] text-yellow-400 mb-4 text-sm">
                  Adventure Tour
                </p>

                <h3 className="text-4xl md:text-6xl font-black mb-8">
                  ATV Safari 🏍️
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Ride through dusty valley roads, hidden caves and magical sunset viewpoints with guided ATV adventures.
                </p>

                <div className="space-y-4 text-gray-400">

                  <p>✓ Sunset Valley Route</p>
                  <p>✓ Guided Adventure</p>
                  <p>✓ Safety Equipment</p>
                  <p>✓ Photo Stops</p>

                </div>

              </div>

              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop"
                alt="ATV Safari"
                className="rounded-[40px] h-[600px] object-cover w-full"
              />

            </div>

            {/* Cave Hotel */}

            <div className="grid md:grid-cols-2 gap-14 items-center">

              <img
                src="https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?q=80&w=2070&auto=format&fit=crop"
                alt="Cave Hotel"
                className="rounded-[40px] h-[600px] object-cover w-full"
              />

              <div>

                <p className="uppercase tracking-[4px] text-yellow-400 mb-4 text-sm">
                  Luxury Stay
                </p>

                <h3 className="text-4xl md:text-6xl font-black mb-8">
                  Cave Hotel Experience 🏨
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Stay inside authentic luxury cave suites with panoramic terraces and unforgettable valley views.
                </p>

                <div className="space-y-4 text-gray-400">

                  <p>✓ Luxury Cave Rooms</p>
                  <p>✓ Jacuzzi Suites</p>
                  <p>✓ Valley Breakfast</p>
                  <p>✓ Honeymoon Packages</p>

                </div>

              </div>

            </div>

            {/* Horse Riding */}

            <div className="grid md:grid-cols-2 gap-14 items-center">

              <div>

                <p className="uppercase tracking-[4px] text-yellow-400 mb-4 text-sm">
                  Romantic Journey
                </p>

                <h3 className="text-4xl md:text-6xl font-black mb-8">
                  Horse Riding 🐎
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Explore peaceful valleys and magical sunset routes with guided horse riding experiences.
                </p>

                <div className="space-y-4 text-gray-400">

                  <p>✓ Sunset Route</p>
                  <p>✓ Professional Guides</p>
                  <p>✓ Romantic Experience</p>
                  <p>✓ Scenic Valleys</p>

                </div>

              </div>

              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2070&auto=format&fit=crop"
                alt="Horse Riding"
                className="rounded-[40px] h-[600px] object-cover w-full"
              />

            </div>

            {/* Red Tour */}

            <div className="grid md:grid-cols-2 gap-14 items-center">

              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
                alt="Red Tour"
                className="rounded-[40px] h-[600px] object-cover w-full"
              />

              <div>

                <p className="uppercase tracking-[4px] text-yellow-400 mb-4 text-sm">
                  Historical Route
                </p>

                <h3 className="text-4xl md:text-6xl font-black mb-8">
                  Red Tour 🌄
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Discover fairy chimneys, Göreme Open Air Museum and Cappadocia’s most iconic historical attractions.
                </p>

                <div className="space-y-4 text-gray-400">

                  <p>✓ Göreme Museum</p>
                  <p>✓ Fairy Chimneys</p>
                  <p>✓ Historical Valleys</p>
                  <p>✓ Guided Experience</p>

                </div>

              </div>

            </div>

            {/* Green Tour */}

            <div className="grid md:grid-cols-2 gap-14 items-center">

              <div>

                <p className="uppercase tracking-[4px] text-yellow-400 mb-4 text-sm">
                  Nature Discovery
                </p>

                <h3 className="text-4xl md:text-6xl font-black mb-8">
                  Green Tour 🌿
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Explore underground cities, hidden caves and breathtaking green valleys across Cappadocia.
                </p>

                <div className="space-y-4 text-gray-400">

                  <p>✓ Underground City</p>
                  <p>✓ Nature Valleys</p>
                  <p>✓ Hidden Caves</p>
                  <p>✓ Scenic Routes</p>

                </div>

              </div>

              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
                alt="Green Tour"
                className="rounded-[40px] h-[600px] object-cover w-full"
              />

            </div>

            {/* Sunset Valley */}

            <div className="grid md:grid-cols-2 gap-14 items-center">

              <img
                src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2070&auto=format&fit=crop"
                alt="Sunset Valley"
                className="rounded-[40px] h-[600px] object-cover w-full"
              />

              <div>

                <p className="uppercase tracking-[4px] text-yellow-400 mb-4 text-sm">
                  Golden Hour
                </p>

                <h3 className="text-4xl md:text-6xl font-black mb-8">
                  Sunset Valley 🌅
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Experience magical sunsets over the valleys with panoramic viewpoints and unforgettable photo moments.
                </p>

                <div className="space-y-4 text-gray-400">

                  <p>✓ Golden Hour Views</p>
                  <p>✓ Panoramic Landscapes</p>
                  <p>✓ Romantic Atmosphere</p>
                  <p>✓ Professional Photo Stops</p>

                </div>

              </div>

            </div>

          </div>

        </section>

                {/* Gallery */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
            Gallery
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-14">
            Moments From Cappadocia
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070&auto=format&fit=crop"
              alt="Gallery"
              className="rounded-[32px] h-[450px] w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
              alt="Gallery"
              className="rounded-[32px] h-[450px] w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2070&auto=format&fit=crop"
              alt="Gallery"
              className="rounded-[32px] h-[450px] w-full object-cover"
            />

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
              <h3 className="text-2xl font-bold mb-4">
                Is the balloon ride included?
              </h3>
              <p className="text-gray-400">
                Depending on your selected package, balloon flights can be included or arranged separately.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold mb-4">
                How many days should I stay?
              </h3>
              <p className="text-gray-400">
                We recommend at least 2-3 days to fully experience Cappadocia.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold mb-4">
                Do you provide hotel transfers?
              </h3>
              <p className="text-gray-400">
                Yes. Private airport and hotel transfers can be arranged.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold mb-4">
                Can children join the tours?
              </h3>
              <p className="text-gray-400">
                Most experiences are suitable for families and children.
              </p>
            </div>

          </div>

        </section>

                {/* Final CTA */}

        <section className="max-w-6xl mx-auto px-6 pb-32">

          <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-black rounded-[40px] p-12 md:p-20 text-center">

            <p className="uppercase tracking-[4px] mb-5 text-sm font-bold">
              Start Your Journey
            </p>

            <h2 className="text-4xl md:text-7xl font-black mb-8">
              Ready To Explore Cappadocia?
            </h2>

            <p className="max-w-3xl mx-auto text-lg mb-10">
              Contact our concierge team and let us create your perfect Cappadocia experience.
            </p>

            <a
              href="https://wa.me/905555555555"
              className="bg-black text-white px-10 py-5 rounded-2xl inline-block font-bold hover:scale-105 transition-all"
            >
              Book Via WhatsApp
            </a>

          </div>

        </section>

      </div>

      <Footer/>

    </>
  )
}
