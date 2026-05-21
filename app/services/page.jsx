import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const features = [
  {
    title: "24/7 Concierge",
    description:
      "Professional support and personalized assistance anytime during your journey.",
    icon: "✨"
  },

  {
    title: "Luxury Fleet",
    description:
      "Premium Mercedes Vito and VIP Sprinter vehicles for maximum comfort.",
    icon: "🚘"
  },

  {
    title: "Instant Booking",
    description:
      "Fast WhatsApp booking system with quick response and easy communication.",
    icon: "📲"
  },

  {
    title: "Premium Experiences",
    description:
      "Luxury tours, yacht experiences and unforgettable travel moments across Turkey.",
    icon: "🌍"
  }
]

export default function Services() {
  return (

    <>

      <Navbar/>
      
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* Heading */}

      <div className="text-center mb-16">

        <p className="text-yellow-400 uppercase tracking-[4px] mb-4 text-sm">
          Why Choose StayGuest
        </p>

        <h2 className="text-4xl md:text-6xl font-black mb-6">
          Premium Concierge Experience
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Luxury transportation, premium tours and personalized concierge services designed for modern travelers.
        </p>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {features.map((feature, index) => (

          <div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[32px] p-8 hover:bg-white/10 transition-all duration-500"
          >

            {/* Icon */}

            <div className="text-5xl mb-8">
              {feature.icon}
            </div>

            {/* Title */}

            <h3 className="text-2xl font-bold mb-5">
              {feature.title}
            </h3>

            {/* Description */}

            <p className="text-gray-400 leading-relaxed">
              {feature.description}
            </p>

          </div>
   
        ))}

      </div>
    
    </section>
            <Footer/>

    </>

  )
}
