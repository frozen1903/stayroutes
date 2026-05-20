const reviews = [
  {
    name: "Emily Carter",
    country: "United Kingdom",
    text: "Amazing concierge experience. Airport transfer was perfectly organized and very professional."
  },

  {
    name: "Michael Brown",
    country: "United States",
    text: "The easiest way to arrange tours and transportation during our Istanbul trip."
  },

  {
    name: "Sophie Laurent",
    country: "France",
    text: "Luxury experience from start to finish. Everything felt smooth and premium."
  }
]

export default function Reviews() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">

      {/* Heading */}

      <div className="text-center mb-14">

        <p className="text-yellow-400 uppercase tracking-[4px] mb-4 text-sm">
          Guest Reviews
        </p>

        <h2 className="text-4xl md:text-6xl font-black mb-6">
          Trusted By Travelers
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Premium guest experiences trusted by international travelers.
        </p>

      </div>

      {/* Reviews */}

      <div className="grid md:grid-cols-3 gap-6">

        {reviews.map((review, index) => (

          <div
            key={index}
            className="bg-white/10 border border-white/10 backdrop-blur-md rounded-[32px] p-8 shadow-2xl"
          >

            <div className="flex gap-1 text-yellow-400 text-xl mb-6">
              ★★★★★
            </div>

            <p className="text-gray-300 leading-relaxed mb-8">
              "{review.text}"
            </p>

            <div>

              <h3 className="font-bold text-xl mb-1">
                {review.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {review.country}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}
