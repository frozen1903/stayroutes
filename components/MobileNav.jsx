import NavLink from './NavLink'
import { whatsappUrl } from '../lib/site'

const links = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/transfer', label: 'Transfer', icon: '✈️' },
  { href: '/tours', label: 'Tours', icon: '🗺️' },
]

export default function MobileNav() {
  return (
    <>
      {/* Desktop WhatsApp Button */}

      <a
        href={whatsappUrl()}
        aria-label="Chat on WhatsApp"
        className="hidden md:flex fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 transition-all duration-300 text-white w-16 h-16 rounded-full items-center justify-center text-3xl shadow-2xl z-50"
      >
        💬
      </a>

      {/* Mobile Bottom Navigation */}

      <div className="fixed bottom-0 left-0 w-full md:hidden z-40 px-4 pb-4">

        <div className="bg-black/70 backdrop-blur-2xl border border-white/10 rounded-3xl flex items-center justify-around py-4 shadow-2xl">

          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              className="flex flex-col items-center text-xs text-white"
              activeClassName="!text-yellow-400"
            >
              <span className="text-2xl mb-1">{link.icon}</span>
              {link.label}
            </NavLink>
          ))}

          <a
            href={whatsappUrl()}
            className="flex flex-col items-center text-xs text-green-400"
          >
            <span className="text-2xl mb-1">💬</span>
            WhatsApp
          </a>

        </div>

      </div>
    </>
  )
}
