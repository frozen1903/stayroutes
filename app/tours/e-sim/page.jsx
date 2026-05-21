"use client"

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const plans = [
  {
    country: "Turkey eSIM",
    gb: "5 GB",
    days: "7 Days",
    price: "$9",
    popular: false
  },

  {
    country: "Turkey eSIM",
    gb: "10 GB",
    days: "15 Days",
    price: "$15",
    popular: true
  },

  {
    country: "Turkey eSIM",
    gb: "20 GB",
    days: "30 Days",
    price: "$25",
    popular: false
  },

  {
    country: "Europe eSIM",
    gb: "10 GB",
    days: "14 Days",
    price: "$22",
    popular: false
  },

  {
    country: "Europe eSIM",
    gb: "25 GB",
    days: "30 Days",
    price: "$39",
    popular: false
  },

  {
    country: "Global eSIM",
    gb: "50 GB",
    days: "60 Days",
    price: "$69",
    popular: false
  }
]

export default function EsimPage() {
  return (
    <>

      <Navbar/>

      <div className="min-h-screen px-6 pt-24 md:pt-32 pb-28">

        {/* Hero */}

        <div className="text-center mb-20">

          <p className="text-yellow-400 uppercase tracking-[4px] mb-4 text-sm">
            Travel Connectivity
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Premium eSIM Packages
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Stay connected during your trip with fast and secure eSIM data packages for Turkey and worldwide travel.
          </p>

        </div>

        {/* Plans */}

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`rounded-[32px] p-8 border transition-all duration-500 backdrop-blur-md ${
                plan.popular
                  ? "bg-yellow-500 text-black border-yellow-400 scale-105 shadow-2xl"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >

              {/* Popular Badge */}

              {plan.popular && (

                <div className="uppercase tracking-[3px] text-sm mb-6 font-bold">
                  Most Popular
                </div>

              )}

              {/* Country */}

              <p className={`uppercase tracking-[4px] text-sm mb-4 ${
                plan.popular ? "text-black" : "text-yellow-400"
              }`}>
                {plan.country}
              </p>

              {/* GB */}

              <h2 className="text-5xl font-black mb-4">
                {plan.gb}
              </h2>

              {/* Days */}

              <p className={`text-lg mb-8 ${
                plan.popular ? "text-black/70" : "text-gray-400"
              }`}>
                Valid for {plan.days}
              </p>

              {/* Includes */}

              <div className={`space-y-4 mb-10 ${
                plan.popular ? "text-black" : "text-gray-300"
              }`}>

                <p>✓ Instant Delivery</p>
                <p>✓ QR Code Activation</p>
                <p>✓ Fast 4G / 5G Network</p>
                <p>✓ No Physical SIM Needed</p>
                <p>✓ WhatsApp Support</p>

              </div>

              {/* Price */}

              <div className="flex items-center justify-between">

                <div>

                  <p className={`text-sm ${
                    plan.popular ? "text-black/60" : "text-gray-500"
                  }`}>
                    Starting From
                  </p>

                  <h3 className="text-4xl font-black">
                    {plan.price}
                  </h3>

                </div>

                <a
                  href="https://wa.me/905555555555"
                  className={`px-6 py-4 rounded-2xl font-bold transition-all ${
                    plan.popular
                      ? "bg-black text-white hover:bg-neutral-900"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  Buy Now
                </a>

              </div>

            </div>

          ))}

        </div>

        {/* Info Section */}

        <section className="max-w-6xl mx-auto mt-28">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <div className="text-5xl mb-6">
                ⚡
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Instant Activation
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Receive your QR code instantly after purchase and activate within minutes.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <div className="text-5xl mb-6">
                🌍
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Worldwide Coverage
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Reliable connectivity across Turkey, Europe and global destinations.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <div className="text-5xl mb-6">
                📲
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Easy Setup
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Scan the QR code, install your eSIM and start using mobile data instantly.
              </p>

            </div>

          </div>

        </section>

      </div>

      <Footer/>

    </>
  )
}
