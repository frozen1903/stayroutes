import Link from 'next/link'
import { site, whatsappUrl } from '../lib/site'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-black mb-6">
              {site.name}
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Premium concierge experiences, airport transfers and unforgettable journeys across Turkey.
            </p>

          </div>

          {/* Explore */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Explore
            </h3>

            <div className="flex flex-col gap-4 text-gray-300">

              <Link href="/transfer">Airport Transfer</Link>
              <Link href="/tours">Tours</Link>
              <Link href="/tours/e-sim">eSIM Packages</Link>
              <Link href="/services">Why Us</Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="flex flex-col gap-4 text-gray-300">

              <a href={whatsappUrl()}>
                WhatsApp Concierge
              </a>

              {site.social.instagram && (
                <a href={site.social.instagram}>
                  Instagram
                </a>
              )}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-500 text-sm">

          © {new Date().getFullYear()} {site.name}. All rights reserved.

        </div>

      </div>

    </footer>
  )
}
