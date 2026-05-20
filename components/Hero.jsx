export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.82)), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')",
        }}
      ></div>

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
          Premium hotel experience, airport transfers, tours and guest services directly from your phone.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-5 justify-center">

          <a
            href="/transfer"
            className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 text-black px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl"
          >
            Airport Transfer
          </a>

          <a
            href="https://wa.me/905555555555"
            className="border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 px-10 py-5 rounded-2xl font-semibold text-lg"
          >
            WhatsApp Reception
          </a>

        </div>

      </div>
    </section>
  )
}
