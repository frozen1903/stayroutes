export default function Hero(){
  return(
    <section className="hero px-6">
      <div>
        <h1 className="text-6xl font-bold mb-6">
          Welcome To StayRoute
        </h1>

        <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
          Your Digital Hotel Concierge Experience.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/transfer" className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold">
            Airport Transfer
          </a>

          <a href="https://wa.me/905555555555" className="border border-white px-8 py-4 rounded-2xl">
            WhatsApp Reception
          </a>
        </div>
      </div>
    </section>
  )
}