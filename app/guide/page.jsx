import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { guide } from '../../data/guide'
import { site, whatsappUrl } from '../../lib/site'

const description =
  'Practical Istanbul travel tips: airport transfers, Istanbulkart and public transport, money and tipping, eSIM, emergency numbers and mosque etiquette.'

export const metadata = {
  title: 'Istanbul Travel Guide: Airport, Transport, Money & Tips',
  description,
  alternates: {
    canonical: '/guide',
  },
  openGraph: {
    title: 'Istanbul Travel Guide',
    description,
    url: '/guide',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: guide.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function GuidePage() {
  return (
    <>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <main className="min-h-screen">

        {/* Hero */}

        <section className="relative min-h-[70vh] overflow-hidden flex items-end">

          <Image
            src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200"
            alt="Galata Tower above the rooftops of Istanbul"
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-black/60 to-black/40" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-36 pb-16">

            <p className="uppercase tracking-[5px] text-yellow-400 mb-6 text-sm">
              Istanbul Travel Guide
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-4xl mb-6">
              Everything You Need Before You Land
            </h1>

            <p className="max-w-2xl text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
              Practical, up-to-date tips from our local concierge team — from the airport to the Grand Bazaar.
            </p>

            {/* Quick Navigation */}

            <nav aria-label="Guide sections" className="flex flex-wrap gap-3">
              {guide.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-4 py-2 text-sm hover:border-yellow-400/60 hover:text-yellow-400 transition-all"
                >
                  {section.icon} {section.eyebrow}
                </a>
              ))}
            </nav>

          </div>

        </section>

        {/* Sections */}

        <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">

          {guide.sections.map((section) => (

            <section key={section.id} id={section.id} className="scroll-mt-28">

              <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
                {section.icon} {section.eyebrow}
              </p>

              <h2 className="text-4xl md:text-5xl font-black mb-6">
                {section.title}
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-10">
                {section.intro}
              </p>

              <div className="grid md:grid-cols-2 gap-6">

                {section.items.map((item) => (
                  <article
                    key={item.title}
                    className="bg-white/5 border border-white/10 rounded-[32px] p-8"
                  >
                    <h3 className="text-2xl font-bold mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {item.text}
                    </p>
                  </article>
                ))}

              </div>

              {section.cta && (
                <Link
                  href={section.cta.href}
                  className="inline-block mt-8 bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 text-black px-8 py-4 rounded-2xl font-bold"
                >
                  {section.cta.label}
                </Link>
              )}

            </section>

          ))}

          {/* FAQ */}

          <section id="faq" className="scroll-mt-28 max-w-5xl">

            <p className="uppercase tracking-[4px] text-yellow-400 mb-5 text-sm">
              FAQ
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-10">
              Quick Answers
            </h2>

            <div className="space-y-4">

              {guide.faq.map((item) => (
                <details
                  key={item.question}
                  className="group bg-white/5 border border-white/10 rounded-[24px] p-6 open:bg-white/[0.07]"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-xl font-bold">
                    {item.question}
                    <span className="text-yellow-400 text-2xl transition-transform group-open:rotate-45">+</span>
                  </summary>

                  <p className="text-gray-400 leading-relaxed mt-4">
                    {item.answer}
                  </p>
                </details>
              ))}

            </div>

          </section>

          <p className="text-gray-400 text-sm">
            Last updated: {guide.updated}. Rules and prices can change — check official sources before you travel.
          </p>

        </div>

        {/* Final CTA */}

        <section className="max-w-6xl mx-auto px-6 pb-32">

          <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-black rounded-[40px] p-12 md:p-20 text-center">

            <p className="uppercase tracking-[4px] mb-5 text-sm font-bold">
              Still Have Questions?
            </p>

            <h2 className="text-4xl md:text-6xl font-black mb-8">
              Ask Our Istanbul Concierge
            </h2>

            <p className="max-w-3xl mx-auto text-lg mb-10">
              Airport pickup, tours, restaurant tips or a SIM that works on arrival — message us and we will help you plan it.
            </p>

            <a
              href={whatsappUrl(`Hello ${site.name},\n\nI have a question about my trip to Istanbul:\n`)}
              className="bg-black text-white px-10 py-5 rounded-2xl inline-block font-bold hover:scale-105 transition-all"
            >
              Chat On WhatsApp
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  )
}
