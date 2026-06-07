"use client"

import Navbar from '../../components/Navbar'

import Footer from '../../components/Footer'
import { useState } from "react"

export default function Transfer() {

const [airport, setAirport] = useState("")
const [date, setDate] = useState("")
const [vehicle, setVehicle] = useState("")
const [guests, setGuests] = useState(1)

const [passengers, setPassengers] = useState([
{
name: "",
gender: ""
}
])

const handleGuestChange = (value) => {


const count = Number(value)

setGuests(count)

const newPassengers = Array.from(
  { length: count },
  (_, index) =>
    passengers[index] || {
      name: "",
      gender: ""
    }
)

setPassengers(newPassengers)

}

const passengerInfo = passengers
.map(
(p, index) =>
`Passenger ${index + 1}

Name: ${p.name}
Gender: ${p.gender}`
)
.join("\n\n")

const whatsappMessage = encodeURIComponent(`

Hello StayRoute,

Transfer Request

Airport: ${airport}
Date: ${date}
Guests: ${guests}
Vehicle: ${vehicle}

${passengerInfo}

Please provide availability and pricing.

`)

return (
<> <Navbar />


  <div className="min-h-screen">

    {/* Hero */}

    <section className="relative h-[90vh] overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
        alt="Luxury Transfer"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20">

        <p className="uppercase tracking-[5px] text-yellow-400 mb-6 text-sm">
          Luxury Transportation
        </p>

        <h1 className="text-5xl md:text-8xl font-black max-w-5xl mb-8">
          VIP Airport Transfers
        </h1>

        <p className="max-w-3xl text-lg md:text-2xl text-gray-200 leading-relaxed mb-10">
          Enjoy private luxury transportation with professional drivers,
          premium Mercedes vehicles and 24/7 concierge support.
        </p>

        <a
          href="#transfer-form"
          className="bg-white text-black hover:bg-yellow-400 transition-all duration-300 px-8 py-5 rounded-2xl w-fit font-bold"
        >
          Book Transfer
        </a>

      </div>

    </section>

    {/* Fleet */}

    <section className="max-w-7xl mx-auto px-6 py-24">

      <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
        Our Fleet
      </p>

      <h2 className="text-4xl md:text-6xl font-black mb-14">
        Travel In Comfort
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white/5 border border-white/10 rounded-[40px] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2070&auto=format&fit=crop"
            alt="Mercedes Vito"
            className="h-[320px] w-full object-cover"
          />

          <div className="p-8">

            <h3 className="text-3xl font-black mb-4">
              VIP Mercedes Vito
            </h3>

            <div className="space-y-3 text-gray-300">

              <p>✓ Up To 6 Guests</p>
              <p>✓ Leather Seats</p>
              <p>✓ Free WiFi</p>
              <p>✓ Airport Meet & Greet</p>
              <p>✓ Complimentary Water</p>

            </div>

          </div>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-[40px] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2070&auto=format&fit=crop"
            alt="Mercedes Sprinter"
            className="h-[320px] w-full object-cover"
          />

          <div className="p-8">

            <h3 className="text-3xl font-black mb-4">
              VIP Mercedes Sprinter
            </h3>

            <div className="space-y-3 text-gray-300">

              <p>✓ Up To 12 Guests</p>
              <p>✓ Extra Luggage</p>
              <p>✓ Luxury Interior</p>
              <p>✓ Group Travel Solution</p>
              <p>✓ Corporate Transfers</p>

            </div>

          </div>

        </div>

      </div>

    </section>

    {/* Why Choose StayRoute */}

    <section className="max-w-7xl mx-auto px-6 pb-24">

      <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
        Why Choose StayRoute
      </p>

      <h2 className="text-4xl md:text-6xl font-black mb-14">
        Premium Transfer Experience
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
```
        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
          <div className="text-5xl mb-5">✈️</div>
          <h3 className="text-xl font-bold mb-3">
            Flight Tracking
          </h3>
          <p className="text-gray-400">
            We monitor delays and arrival updates.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
          <div className="text-5xl mb-5">🚘</div>
          <h3 className="text-xl font-bold mb-3">
            Luxury Vehicles
          </h3>
          <p className="text-gray-400">
            Modern Mercedes fleet for maximum comfort.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
          <div className="text-5xl mb-5">🕐</div>
          <h3 className="text-xl font-bold mb-3">
            24/7 Support
          </h3>
          <p className="text-gray-400">
            Concierge assistance whenever you need it.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
          <div className="text-5xl mb-5">👔</div>
          <h3 className="text-xl font-bold mb-3">
            Professional Drivers
          </h3>
          <p className="text-gray-400">
            Experienced and reliable transportation team.
          </p>
        </div>

      </div>

    </section>

    {/* Transfer Process */}

    <section className="max-w-7xl mx-auto px-6 pb-24">

      <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
        Transfer Process
      </p>

      <h2 className="text-4xl md:text-6xl font-black mb-14">
        How It Works
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
          <div className="text-5xl mb-5">1️⃣</div>
          <h3 className="text-xl font-bold">
            Submit Request
          </h3>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
          <div className="text-5xl mb-5">2️⃣</div>
          <h3 className="text-xl font-bold">
            We Confirm
          </h3>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
          <div className="text-5xl mb-5">3️⃣</div>
          <h3 className="text-xl font-bold">
            Driver Assigned
          </h3>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
          <div className="text-5xl mb-5">4️⃣</div>
          <h3 className="text-xl font-bold">
            Airport Pickup
          </h3>
        </div>

      </div>

    </section>

    {/* Transfer Form */}

    <section
      id="transfer-form"
      className="px-6 pb-24"
    >

      <div className="max-w-5xl mx-auto bg-white/10 border border-white/10 backdrop-blur-xl rounded-[40px] p-8 md:p-12">

        <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
          Transfer Request
        </p>

        <h2 className="text-4xl md:text-6xl font-black mb-10">
          Book Your Transfer
        </h2>

        <div className="grid gap-6">

          <div>

            <label className="text-sm text-gray-400 block mb-3">
              Airport
            </label>

            <select
              value={airport}
              onChange={(e) => setAirport(e.target.value)}
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4"
            >
              <option value="">Select Airport</option>
              <option>IST Airport</option>
              <option>SAW Airport</option>
            </select>

          </div>

          <div>

            <label className="text-sm text-gray-400 block mb-3">
              Arrival Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4"
            />

          </div>

          <div>

            <label className="text-sm text-gray-400 block mb-3">
              Guests
            </label>

            <select
              value={guests}
              onChange={(e) => handleGuestChange(e.target.value)}
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4"
            >

              {[...Array(12)].map((_, i) => (
                <option key={i + 1}>
                  {i + 1}
                </option>
              ))}

            </select>

          </div>

          <div>

            <label className="text-sm text-gray-400 block mb-3">
              Vehicle Type
            </label>

            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4"
            >

              <option value="">
                Select Vehicle
              </option>

              <option>
                VIP Mercedes Vito
              </option>

              <option>
                VIP Mercedes Sprinter              </option>

            </select>

          </div>

          {/* Dynamic Passengers */}

          <div className="space-y-6">

            {passengers.map((passenger, index) => (

              <div
                key={index}
                className="bg-black/20 border border-white/10 rounded-[32px] p-6"
              >

                <h3 className="text-2xl font-bold mb-6">
                  Passenger {index + 1}
                </h3>

               <div className="grid md:grid-cols-2 gap-4">
                ```
                  <input
                    type="text"
                    placeholder="Name Surname"
                    value={passenger.name}
                    onChange={(e) => {

                      const updated = [...passengers]

                      updated[index].name = e.target.value

                      setPassengers(updated)

                    }}
                    className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4"
                  />

                  <select
                    value={passenger.gender}
                    onChange={(e) => {

                      const updated = [...passengers]

                      updated[index].gender = e.target.value

                      setPassengers(updated)

                    }}
                    className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4"
                  >

                    <option value="">
                      Select Gender
                    </option>

                    <option value="Male">
                      Male
                    </option>

                    <option value="Female">
                      Female
                    </option>

                  </select>

                </div>

              </div>

            ))}

          </div>

          <a
            href={`https://wa.me/905555555555?text=${whatsappMessage}`}
            className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 text-black font-bold rounded-2xl py-5 text-center text-lg mt-4"
          >
            Continue via WhatsApp
          </a>

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

          <h3 className="text-2xl font-bold mb-4">
            Do you monitor flight delays?
          </h3>

          <p className="text-gray-400">
            Yes. Our team tracks flight schedules and adjusts pickup times automatically.
          </p>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

          <h3 className="text-2xl font-bold mb-4">
            Are transfers private?
          </h3>

          <p className="text-gray-400">
            Yes. All transfers are private and reserved exclusively for your group.
          </p>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

          <h3 className="text-2xl font-bold mb-4">
            Can I request a child seat?
          </h3>

          <p className="text-gray-400">
            Absolutely. Child seats can be arranged upon request.
          </p>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

          <h3 className="text-2xl font-bold mb-4">
            Can I pay in cash?
          </h3>

          <p className="text-gray-400">
            Payment options will be discussed during confirmation.
          </p>

        </div>

      </div>

    </section>

    {/* Final CTA */}

    <section className="max-w-6xl mx-auto px-6 pb-32">

      <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-black rounded-[40px] p-12 md:p-20 text-center">

        <p className="uppercase tracking-[4px] mb-5 text-sm font-bold">
          Premium Transportation
        </p>

        <h2 className="text-4xl md:text-7xl font-black mb-8">
          Need A Custom Transfer?
        </h2>

        <p className="max-w-3xl mx-auto text-lg mb-10">
          Contact our concierge team for luxury transportation across Istanbul and Turkey.
        </p>

        <a
          href={`https://wa.me/905555555555?text=${whatsappMessage}`}
          className="bg-black text-white px-10 py-5 rounded-2xl inline-block font-bold hover:scale-105 transition-all"
        >
          Talk To A Travel Expert
        </a>

      </div>

    </section>

  </div>

  <Footer />

</>