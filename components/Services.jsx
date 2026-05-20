const items = [
  {
    title: "Airport Transfer",
    desc: "Private luxury airport transportation."
  },
  {
    title: "Room Services",
    desc: "Cleaning, towels and guest requests."
  },
  {
    title: "Luxury Tours",
    desc: "Discover unforgettable experiences."
  },
  {
    title: "24/7 Reception",
    desc: "Instant WhatsApp guest support."
  }
]

export default function Services() {
  return (
    <section className="relative z-20 max-w-7xl mx-auto px-6 -mt-24 pb-20">

      <div className="grid md:grid-cols-4 gap-6">

        {items.map((item, index) => (

          <div
            key={index}
            className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-2xl"
          >

            <div className="text-5xl mb-5">
              ✨
            </div>

            <h2 className="text-2xl font-bold mb-4">
              {item.title}
            </h2>

            <p className="text-gray-300 leading-relaxed">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

    </section>
  )
}
