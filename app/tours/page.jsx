"use client"

import { useEffect } from "react"

const categories = [
  {
    title: "Istanbul Experiences",
    tours: [
      {
        name: "Bosphorus Dinner Cruise",
        description:
          "Luxury dinner cruise with Bosphorus skyline views.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZ7nBoHvB3OC6gY1Ri83BehCZRVIBfMmh8g&s"
      },

      {
        name: "Luxury Yacht Tour",
        description:
          "Private yacht experience with premium concierge service.",
        image:
          "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070&auto=format&fit=crop"
      },

      {
        name: "Old City Tour",
        description:
          "Explore Istanbul’s historical landmarks and culture.",
        image:
          "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2070&auto=format&fit=crop"
      },

      {
        name: "Princes Islands Tour",
        description:
          "Peaceful island escape with beautiful sea views.",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },

  {
    title: "Cappadocia Experiences",
    tours: [
      {
        name: "Hot Air Balloon Ride",
        description:
          "Sunrise balloon ride above Cappadocia valleys.",
        image:
          "https://images.unsplash.com/photo-1641128322288-6b9b0a912055?q=80&w=2070&auto=format&fit=crop"
      },

      {
        name: "ATV Safari",
        description:
          "Adventure ride through caves and valleys.",
        image:
          "https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=2070&auto=format&fit=crop"
      },

      {
        name: "Red Tour",
        description:
          "Visit iconic Cappadocia viewpoints and valleys.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop"
      },

      {
        name: "Cave Hotel Experience",
        description:
          "Luxury cave suite accommodation experience.",
        image:
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },

  {
    title: "Ancient Turkey",
    tours: [
      {
        name: "Pamukkale Tour",
        description:
          "Discover thermal waters and white travertines.",
        image:
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=2070&auto=format&fit=crop"
      },

      {
        name: "Ephesus Ancient City",
        description:
          "Explore one of Turkey’s most iconic ancient cities.",
        image:
          "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=2070&auto=format&fit=crop"
      },

      {
        name: "Troy Ancient City",
        description:
          "Visit the legendary city from ancient mythology.",
        image:
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
      },

      {
        name: "Gallipoli Tour",
        description:
          "Historical battlefield and memorial experience.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  }
]

export default function ToursPage() {
  useEffect(() => {

  const sliders = document.querySelectorAll(".drag-scroll")

  sliders.forEach((slider) => {

    let isDown = false
    let startX
    let scrollLeft

    slider.addEventListener("mousedown", (e) => {

      isDown = true

      slider.classList.add("active")

      startX = e.pageX - slider.offsetLeft

      scrollLeft = slider.scrollLeft
    })

    slider.addEventListener("mouseleave", () => {

      isDown = false

      slider.classList.remove("active")
    })

    slider.addEventListener("mouseup", () => {

      isDown = false

      slider.classList.remove("active")
    })

    slider.addEventListener("mousemove", (e) => {

      if (!isDown) return

      e.preventDefault()

      const x = e.pageX - slider.offsetLeft

      const walk = (x - startX) * 2

      slider.scrollLeft = scrollLeft - walk
    })

  })

}, [])
  return (
    <div className="min-h-screen px-6 pt-32 pb-28">

      {/* Back */}

      <a
        href="/"
        className="inline-flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-all mb-10"
      >
        ← Back to Home
      </a>

      {/* Hero */}

      <div className="text-center mb-20">

        <p className="text-yellow-400 uppercase tracking-[4px] mb-4 text-sm">
          Premium Experiences
        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Explore Turkey
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Discover unforgettable tours, luxury experiences and premium concierge services across Turkey.
        </p>

      </div>

      {/* Categories */}

      <div className="space-y-20">

        {categories.map((category, index) => (

          <section key={index}>

            {/* Category Header */}

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl md:text-5xl font-black">
                {category.title}
              </h2>

              <button className="text-yellow-400 text-sm uppercase tracking-[3px]">
                Explore
              </button>

            </div>

            {/* Scroll Area */}

            <div className="drag-scroll flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar cursor-grab active:cursor-grabbing select-none">

              {category.tours.map((tour, i) => (

                <div
                  key={i}
                  className="relative min-w-[320px] md:min-w-[420px] h-[520px] rounded-[36px] overflow-hidden flex-shrink-0 snap-start group shadow-2xl"
                >

                  {/* Image */}

                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                  {/* Content */}

                  <div className="relative z-10 h-full flex flex-col justify-end p-8">

                    <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                      {tour.name}
                    </h3>

                    <p className="text-gray-200 leading-relaxed mb-6">
                      {tour.description}
                    </p>

                    <a
                      href="https://wa.me/905555555555"
                      className="bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300 px-6 py-4 rounded-2xl w-fit"
                    >
                      Ask via WhatsApp
                    </a>

                  </div>

                </div>

              ))}

            </div>

          </section>

        ))}

      </div>

    </div>
  )
}
