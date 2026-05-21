"use client"

import { useState } from "react"

export default function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Navbar */}

      <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4">

        <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl px-5 h-16 flex items-center justify-between shadow-2xl">

           <a href="/">

      <img
        src="/logo.png"
        alt="StayRoute"
        className="h-28 w-auto scale-[1.2] mt-2 object-contain cursor-pointer"
      />

    </a>
          {/* Desktop Menu */}

          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-200">

            <a href="/" className="hover:text-yellow-400 transition-all">
              Home
            </a>

            <a href="/transfer" className="hover:text-yellow-400 transition-all">
              Transfer
            </a>

            <a href="/tours" className="hover:text-yellow-400 transition-all">
              Tours
            </a>

            <a href="/services" className="hover:text-yellow-400 transition-all">
              Why Us
            </a>

            
         </div>

          {/* Mobile Hamburger */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}

      <div className={`fixed inset-0 z-40 transition-all duration-300 ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>

        {/* Overlay */}

        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        ></div>

        {/* Menu Content */}

        <div className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-[#07111f] border-l border-white/10 p-8 transition-all duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}>

          <div className="flex items-center justify-between mb-10">

            <h2 className="text-3xl font-bold">
              Menu
            </h2>

            <button
              onClick={() => setOpen(false)}
              className="text-3xl"
            >
              ✕
            </button>

          </div>

          <div className="flex flex-col gap-6 text-lg">

            <a href="/" className="border-b border-white/10 pb-4">
              🏠 Home
            </a>

            <a href="/transfer" className="border-b border-white/10 pb-4">
              ✈️ Airport Transfer
            </a>

            <a href="/tours" className="border-b border-white/10 pb-4">
              🗺️ Tours
            </a>

            <a href="/services" className="border-b border-white/10 pb-4">
              🛎️ Hotel Services
            </a>

            <a
              href="https://wa.me/902125119292"
              className="border-b border-white/10 pb-4 text-green-400"
            >
              💬 WhatsApp Reception
            </a>

            <a
              href="https://www.google.com/travel/search?gsas=1&ts=EggKAggDCgIIAxocEhoSFAoHCOkPEAoYDxIHCOkPEAoYEBgBMgIQAA&qs=MhNDZ29JX2RDUGl1elF4dXRYRUFFOAI&ap=ugEHcmV2aWV3cw&ictx=111&rlz=1C1GCEA_enTR1034TR1034&biw=1707&bih=801&hl=tr-TR&ved=0CAAQ5JsGahcKEwi45rabuMiUAxUAAAAAHQAAAAAQBA"
              className="border-b border-white/10 pb-4"
            >
              ⭐ Google Reviews
            </a>

            <a
              href="https://www.tripadvisor.com.tr/Hotel_Review-g293974-d19141459-Reviews-Pell_Palace_Hotel_Spa-Istanbul.html"
              className="border-b border-white/10 pb-4"
            >
              🏆 TripAdvisor
            </a>

            <a
              href="https://www.instagram.com/pellpalace?igshid=1fu2b8uwr8g52"
              className="border-b border-white/10 pb-4"
            >
              📸 Instagram
            </a>

            <a
              href="https://maps.google.com/?q=Pell+Palace+Hotel+Spa+Istanbul"
              className="border-b border-white/10 pb-4"
            >
              📍 Hotel Location
            </a>

          </div>

        </div>

      </div>
    </>
  )
}
