"use client"

import Link from "next/link"
import { useState } from "react"
import { site, whatsappUrl } from "../lib/site"

const links = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/transfer", label: "Transfer", icon: "✈️" },
  { href: "/tours", label: "Tours", icon: "🗺️" },
  { href: "/tours/e-sim", label: "eSIM", icon: "📶" },
  { href: "/services", label: "Why Us", icon: "✨" },
]

export default function Navbar() {

  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <>
      {/* Navbar */}

      <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4">

        <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl px-5 h-16 flex items-center justify-between shadow-2xl">

          <Link href="/" aria-label={`${site.name} home`}>

            <img
              src="/logo.png"
              alt={site.name}
              className="h-28 w-auto scale-[1.2] mt-2 object-contain cursor-pointer"
            />

          </Link>

          {/* Desktop Menu */}

          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-200">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-yellow-400 transition-all"
              >
                {link.label}
              </Link>
            ))}

          </div>

          {/* Mobile Hamburger */}

          <button
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
            aria-expanded={open}
            className="md:hidden text-3xl"
          >
            ☰
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}

      <div className={`fixed inset-0 z-50 transition-all duration-300 ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>

        {/* Overlay */}

        <div
          onClick={close}
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
              onClick={close}
              aria-label="Close menu"
              className="text-3xl"
            >
              ✕
            </button>

          </div>

          <div className="flex flex-col gap-6 text-lg">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="border-b border-white/10 pb-4"
              >
                {link.icon} {link.label}
              </Link>
            ))}

            <a
              href={whatsappUrl()}
              className="border-b border-white/10 pb-4 text-green-400"
            >
              💬 WhatsApp Concierge
            </a>

            {site.social.instagram && (
              <a
                href={site.social.instagram}
                className="border-b border-white/10 pb-4"
              >
                📸 Instagram
              </a>
            )}

          </div>

        </div>

      </div>
    </>
  )
}
