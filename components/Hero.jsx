import Image from 'next/image'
import Link from 'next/link'
import { whatsappUrl } from '../lib/site'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">

      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1789313946334-06674df4b775"
        alt="New Mosque and ferries on the Golden Horn at dusk, Istanbul"
        fill
        preload
        sizes="100vw"
        className="object-cover scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-black/80"></div>

      {/* Gold Glow */}
      <div className="absolute w-[500px] h-[500px] bg-yellow-500/20 blur-[60px] rounded-full top-[-150px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl">

        <p className="text-yellow-400 tracking-[6px] uppercase mb-6 text-sm font-semibold">
          Luxury Digital Concierge
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
          Welcome To
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-100">
            StayRoute
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
          VIP airport transfers, curated tours and travel concierge services across Turkey, directly from your phone.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-5 justify-center">

          <Link
            href="/transfer"
            className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 text-black px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl"
          >
            Airport Transfer
          </Link>

          <a
            href={whatsappUrl()}
            className="border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 px-10 py-5 rounded-2xl font-semibold text-lg"
          >
            WhatsApp Concierge
          </a>

            <Link
            href="/tours"
            className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 text-black px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl"
          >
            Explore Tours
          </Link>

        </div>

      </div>
    </section>
  )
}
