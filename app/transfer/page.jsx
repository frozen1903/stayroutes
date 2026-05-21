"use client"

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import { useState } from "react"

export default function Transfer() {

  const [name, setName] = useState("")
  const [airport, setAirport] = useState("")
  const [date, setDate] = useState("")
  const [guests, setGuests] = useState("")
  const [vehicle, setVehicle] = useState("")

  const whatsappMessage = `
Hello StayRoute,

I would like to book an airport transfer.

Name: ${name}
Airport: ${airport}
Date: ${date}
Guests: ${guests}
Vehicle: ${vehicle}
`
  return (
    <>
  <Navbar/>

  <div className="min-h-screen">

    
    <div className="min-h-screen px-6 pt-24 md:pt-32 pb-24">
      {/* Heading */}

      <div className="text-center mb-14">

        <p className="text-yellow-400 uppercase tracking-[4px] mb-4 text-sm">
          Airport Transfer
        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Private Transfer
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Safe and comfortable airport transportation service available 24/7.
        </p>

      </div>

      {/* Form */}

      <div className="max-w-3xl mx-auto bg-white/10 border border-white/10 backdrop-blur-xl rounded-[32px] p-8 shadow-2xl">

        <div className="grid gap-6">

          {/* Name */}

          <div>

            <label className="text-sm text-gray-400 block mb-3">
              Full Name
            </label>

            <input
              type="text"
              placeholder="John Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition-all"
            />

          </div>

          {/* Airport */}

          <div>

            <label className="text-sm text-gray-400 block mb-3">
              Airport
            </label>

            <select
              value={airport}
              onChange={(e) => setAirport(e.target.value)}
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition-all"
            >

              <option value="">Select Airport</option>
              <option>IST Airport</option>
              <option>SAW Airport</option>

            </select>

          </div>

          {/* Date */}

          <div>

            <label className="text-sm text-gray-400 block mb-3">
              Arrival Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition-all"
            />

          </div>

          {/* Guests */}

          <div>

            <label className="text-sm text-gray-400 block mb-3">
              Guests
            </label>

            <input
              type="number"
              placeholder="2"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition-all"
            />

          </div>

          {/* Vehicle */}

          <div>

            <label className="text-sm text-gray-400 block mb-3">
              Vehicle Type
            </label>

            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition-all"
            >

              <option value="">Select Vehicle</option>
              <option>VIP Mercedes Vito</option>
              <option>VIP Sprinter</option>
              

            </select>

          </div>

          {/* Button */}

          <a
            href={`https://wa.me/905555555555?text=${encodeURIComponent(whatsappMessage)}`}
            className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 text-black font-bold rounded-2xl py-5 text-center text-lg mt-4"
          >
            Continue via WhatsApp
          </a>

        </div>

      </div>

    </div>
  
  </div>
    
    <Footer/>
     </>
  )
}
