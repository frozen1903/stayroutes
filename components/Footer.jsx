export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-black mb-6">
              StayGuest
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Premium concierge experiences, airport transfers and unforgettable journeys across Turkey.
            </p>

          </div>

         

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="flex flex-col gap-4 text-gray-300">

              <a href="https://wa.me/905555555555">
                WhatsApp Concierge
              </a>

              <a href="https://instagram.com">
                Instagram
              </a>

              <a href="https://maps.google.com">
                Google Maps
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-500 text-sm">

          © 2026 StayGuest. All rights reserved.

        </div>

      </div>

    </footer>
  )
}
