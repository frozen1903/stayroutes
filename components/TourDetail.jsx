import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import TourCard from './TourCard'
import { site, whatsappUrl } from '../lib/site'

function bookingMessage(title, packageName) {
  return [
    `Hello ${site.name},`,
    '',
    `I'd like to book: ${title}`,
    packageName ? `Package: ${packageName}` : null,
    'Date:',
    'Guests:',
    'Pickup location:',
    '',
    'Please provide availability and pricing.',
  ]
    .filter((line) => line !== null)
    .join('\n')
}

function SectionHeading({ eyebrow, title, className = 'mb-14' }) {
  return (
    <>
      <p className="mb-5 text-sm uppercase tracking-[4px] text-yellow-400">
        {eyebrow}
      </p>

      <h2 className={`${className} text-4xl font-black leading-tight md:text-6xl`}>
        {title}
      </h2>
    </>
  )
}

export default function TourDetail({ tour, related = [] }) {
  const {
    title,
    eyebrow,
    heroImage,
    intro,
    aboutTitle,
    aboutText,
    secondaryText,
    inclusions,
    stats,
    aboutImage,
    highlightsTitle,
    highlightsText,
    highlights,
    timelineTitle,
    timeline,
    detailsEyebrow,
    detailsTitle,
    details,
    packagesTitle,
    packages,
    galleryTitle,
    gallery,
    faq,
    cta,
  } = tour

  const sideImage = aboutImage || gallery?.[1]

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden">

        {/* Hero */}

        <section className="relative min-h-screen overflow-hidden">
          <Image
            src={heroImage}
            alt={title}
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />

          <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 pt-28 md:px-20">
            <Link
              href="/tours"
              className="mb-8 w-fit rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-gray-200 backdrop-blur-md transition-all hover:border-yellow-400/60 hover:text-yellow-400"
            >
              Back to Tours
            </Link>

            <p className="mb-6 text-sm uppercase tracking-[5px] text-yellow-400">
              {eyebrow}
            </p>

            <h1 className="mb-8 max-w-5xl text-5xl font-black leading-tight md:text-8xl">
              {title}
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-2xl">
              {intro}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappUrl(bookingMessage(title))}
                className="w-fit rounded-2xl bg-white px-8 py-5 font-bold text-black transition-all duration-300 hover:bg-yellow-400"
              >
                Reserve via WhatsApp
              </a>

              {packages && (
                <a
                  href="#packages"
                  className="w-fit rounded-2xl border border-white/15 bg-white/10 px-8 py-5 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
                >
                  View Packages
                </a>
              )}
            </div>
          </div>
        </section>

        {/* About */}

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading eyebrow="About Experience" title={aboutTitle} className="mb-8 max-w-3xl" />

              <p className="mb-8 text-lg leading-relaxed text-gray-300">
                {aboutText}
              </p>

              {secondaryText && (
                <p className="mb-10 leading-relaxed text-gray-400">
                  {secondaryText}
                </p>
              )}

              {inclusions && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {inclusions.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-gray-300"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 content-start gap-4 md:gap-6">
              {stats?.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md md:p-8"
                >
                  <h3 className="mb-4 text-xs uppercase tracking-[3px] text-yellow-400 md:text-sm">
                    {label}
                  </h3>

                  <p className="text-xl font-bold leading-tight md:text-2xl">
                    {value}
                  </p>
                </div>
              ))}

              {sideImage && (
                <div className="relative col-span-2 h-72 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06]">
                  <Image
                    src={sideImage.src}
                    alt={sideImage.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Highlights */}

        {highlights && (
          <section className="mx-auto max-w-7xl px-6 pb-24">
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionHeading
                  eyebrow="Tour Highlights"
                  title={highlightsTitle || `${title} Experiences`}
                  className=""
                />
              </div>

              {highlightsText && (
                <p className="max-w-md leading-relaxed text-gray-400">
                  {highlightsText}
                </p>
              )}
            </div>

            <div className={`grid gap-6 md:grid-cols-2 ${highlights.length === 5 ? 'lg:grid-cols-5' : highlights.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
              {highlights.map((highlight, index) => (
                <article
                  key={highlight.title}
                  className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
                >
                  {highlight.icon ? (
                    <div className="mb-6 text-5xl">{highlight.icon}</div>
                  ) : (
                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-lg font-black text-black">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  )}

                  <h3 className="mb-4 text-2xl font-bold">{highlight.title}</h3>

                  {highlight.description && (
                    <p className="leading-relaxed text-gray-400">
                      {highlight.description}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Timeline */}

        {timeline && (
          <section className="mx-auto max-w-7xl px-6 pb-24">
            <SectionHeading eyebrow="Experience Timeline" title={timelineTitle || 'Your Journey'} />

            <div className="space-y-6">
              {timeline.map((step) => (
                <div
                  key={`${step.time}-${step.title}`}
                  className="rounded-[32px] border border-white/10 bg-white/5 p-8"
                >
                  <p className="mb-2 text-yellow-400">{step.time}</p>

                  <h3 className="mb-3 text-3xl font-bold">{step.title}</h3>

                  {step.description && (
                    <p className="text-gray-400">{step.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Detailed Experiences */}

        {details && (
          <section className="mx-auto max-w-7xl px-6 pb-24">
            <SectionHeading
              eyebrow={detailsEyebrow || 'Detailed Experiences'}
              title={detailsTitle || 'Discover Every Moment'}
              className="mb-20"
            />

            <div className="space-y-24 md:space-y-32">
              {details.map((detail, index) => (
                <div
                  key={detail.title}
                  className="grid items-center gap-10 md:grid-cols-2 md:gap-14"
                >
                  <div className={`relative h-[380px] w-full overflow-hidden rounded-[40px] md:h-[600px] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <Image
                      src={detail.image}
                      alt={detail.alt || detail.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="mb-4 text-sm uppercase tracking-[4px] text-yellow-400">
                      {detail.eyebrow}
                    </p>

                    <h3 className="mb-8 text-4xl font-black md:text-6xl">
                      {detail.title}
                    </h3>

                    <p className="mb-8 text-lg leading-relaxed text-gray-300">
                      {detail.text}
                    </p>

                    {detail.bullets && (
                      <div className="space-y-4 text-gray-400">
                        {detail.bullets.map((bullet) => (
                          <p key={bullet}>✓ {bullet}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Packages */}

        {packages && (
          <section id="packages" className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-24">
            <SectionHeading eyebrow="Packages" title={packagesTitle || 'Choose Your Tour'} />

            <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
              {packages.map((tourPackage) => (
                <article
                  key={tourPackage.name}
                  className={
                    tourPackage.featured
                      ? 'flex flex-col rounded-[32px] bg-yellow-500 p-8 text-black shadow-2xl md:-translate-y-3'
                      : 'flex flex-col rounded-[32px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-md'
                  }
                >
                  {tourPackage.badge && (
                    <p className="mb-4 text-sm uppercase tracking-[3px]">
                      {tourPackage.badge}
                    </p>
                  )}

                  <h3 className="mb-8 text-3xl font-black">
                    {tourPackage.name}
                  </h3>

                  <div
                    className={
                      tourPackage.featured
                        ? 'mb-8 space-y-4 text-black/80'
                        : 'mb-8 space-y-4 text-gray-300'
                    }
                  >
                    {tourPackage.items.map((item) => (
                      <p key={item}>✓ {item}</p>
                    ))}
                  </div>

                  <a
                    href={whatsappUrl(bookingMessage(title, tourPackage.name))}
                    className={
                      tourPackage.featured
                        ? 'mt-auto inline-block w-fit rounded-2xl bg-black px-6 py-4 font-bold text-white transition-all hover:bg-neutral-900'
                        : 'mt-auto inline-block w-fit rounded-2xl bg-white/10 px-6 py-4 font-bold transition-all hover:bg-white/20'
                    }
                  >
                    Select Package
                  </a>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Gallery */}

        {gallery && (
          <section className="px-6 pb-24">
            <div className="mx-auto max-w-7xl">
              <SectionHeading eyebrow="Gallery" title={galleryTitle || `${title} Moments`} className="mb-12" />

              <div className="grid gap-6 md:grid-cols-3">
                {gallery.map((image) => (
                  <div
                    key={image.alt}
                    className="relative h-[420px] overflow-hidden rounded-[32px] md:h-[520px]"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-all duration-500 hover:scale-[1.04]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}

        {faq && (
          <section className="mx-auto max-w-5xl px-6 pb-24">
            <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />

            <div className="space-y-6">
              {faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-[32px] border border-white/10 bg-white/5 p-8"
                >
                  <h3 className="mb-4 text-2xl font-bold">{item.question}</h3>

                  <p className="text-gray-400">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Tours */}

        {related.length > 0 && (
          <section className="mx-auto max-w-7xl px-6 pb-24">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionHeading eyebrow="More Experiences" title="You May Also Like" className="" />
              </div>

              <Link
                href="/tours"
                className="w-fit text-sm uppercase tracking-[3px] text-yellow-400 hover:text-yellow-300"
              >
                View All Tours →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedTour) => (
                <TourCard key={relatedTour.slug} tour={relatedTour} />
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}

        <section className="mx-auto max-w-6xl px-6 pb-32">
          <div className="rounded-[40px] bg-gradient-to-r from-yellow-500 to-yellow-300 p-12 text-center text-black md:p-20">
            <p className="mb-5 text-sm font-bold uppercase tracking-[4px]">
              {cta?.eyebrow || 'Start Your Journey'}
            </p>

            <h2 className="mb-8 text-4xl font-black md:text-7xl">
              {cta?.title || `Ready For ${title}?`}
            </h2>

            <p className="mx-auto mb-10 max-w-3xl text-lg">
              {cta?.text || 'Contact our concierge team and we will plan every detail of your experience.'}
            </p>

            <a
              href={whatsappUrl(bookingMessage(title))}
              className="inline-block rounded-2xl bg-black px-10 py-5 font-bold text-white transition-all hover:scale-105"
            >
              Book Via WhatsApp
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
