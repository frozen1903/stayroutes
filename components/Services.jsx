import { whatsappUrl } from '../lib/site'

const items = [
  {
    title: "Airport Transfer",
    desc: "Private luxury airport transportation.",
    href: "/transfer",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1974&auto=format&fit=crop"
  },

  {
    title: "eSIM Packages",
    desc: "Stay connected from the moment you land.",
    href: "/tours/e-sim",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
  },

  {
    title: "Luxury Tours",
    desc: "Discover unforgettable experiences.",
    href: "/tours",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2070&auto=format&fit=crop"
  },

  {
    title: "24/7 Concierge",
    desc: "Instant WhatsApp travel support.",
    href: whatsappUrl(),
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop"
  }
]

export default function Services() {
  return (
    <section className="relative z-20 max-w-7xl mx-auto px-6 mt-10 pb-20">

      <div className="grid md:grid-cols-4 gap-6">

        {items.map((item, index) => (

          <a
            key={index}
            href={item.href}
            className="relative overflow-hidden rounded-3xl hover:scale-105 transition-all duration-300 shadow-2xl min-h-[350px] flex items-end"
          >

            {/* Background Image */}
            <img
              src={item.image}
              className="absolute inset-0 w-full h-full object-cover"
              alt=""
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 p-8">

              <h2 className="text-2xl font-bold mb-4">
                {item.title}
              </h2>

              <p className="text-gray-200 leading-relaxed">
                {item.desc}
              </p>

            </div>

          </a>

        ))}

      </div>

    </section>
  )
}
