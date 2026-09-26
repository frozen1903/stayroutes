import Image from 'next/image'
import Link from 'next/link'

const vehicles = [
  {
    key: "vito",
    title: "Mercedes VIP Vito",
    image:
      "https://images.unsplash.com/photo-1765461734605-34657fa04db2?q=80&w=2070&auto=format&fit=crop"
  },

  {
    key: "sprinter",
    title: "Mercedes VIP Sprinter",
    image:
      "https://images.unsplash.com/photo-1750210505997-ed85e9f8cb12?q=80&w=2070&auto=format&fit=crop"
  }
]

export default function Fleet() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">

      <div className="text-center mb-14">

        <p className="text-yellow-400 uppercase tracking-[4px] mb-4 text-sm">
          Luxury Fleet
        </p>

        <h2 className="text-4xl md:text-6xl font-black mb-6">
          Premium Vehicles
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Comfortable and luxury transportation for your stay in Turkey.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {vehicles.map((item, index) => (

          <div
            key={index}
            className="relative overflow-hidden rounded-[32px] min-h-[400px] group shadow-2xl"
          >

            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover group-hover:scale-110 transition-all duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

            <div className="relative z-10 h-full flex flex-col justify-end p-8">

              <h3 className="text-3xl md:text-4xl font-black mb-4">
                {item.title}
              </h3>

              <Link
                href={`/transfer?vehicle=${item.key}#transfer-form`}
                className="bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300 px-6 py-4 rounded-2xl w-fit"
              >
                Book This Vehicle
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}
