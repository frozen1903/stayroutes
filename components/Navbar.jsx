export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-5">

      <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl">

        <h1 className="text-2xl font-black tracking-wide">
          StayRoute
        </h1>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-200">

          <a href="/" className="hover:text-yellow-400 transition-all">
            Home
          </a>

          <a href="/transfer" className="hover:text-yellow-400 transition-all">
            Transfer
          </a>

          <a href="/services" className="hover:text-yellow-400 transition-all">
            Services
          </a>

          <a href="/tours" className="hover:text-yellow-400 transition-all">
            Tours
          </a>

        </div>

      </div>

    </nav>
  )
}
