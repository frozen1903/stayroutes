import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function TourDetail({
  title,
  eyebrow = 'Ancient Turkey',
  heroImage,
  intro,
  aboutTitle,
  aboutText,
  secondaryText,
  stats,
  inclusions,
  highlights,
  packages,
  gallery,
}) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden">
        <section className="relative min-h-screen overflow-hidden">
          <img
            src={heroImage}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />

          <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 pt-28 md:px-20">
            <a
              href="/tours"
              className="mb-8 w-fit rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-gray-200 backdrop-blur-md transition-all hover:border-yellow-400/60 hover:text-yellow-400"
            >
              Back to Tours
            </a>

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
                href="https://wa.me/905555555555"
                className="w-fit rounded-2xl bg-white px-8 py-5 font-bold text-black transition-all duration-300 hover:bg-yellow-400"
              >
                Reserve via WhatsApp
              </a>

              <a
                href="#packages"
                className="w-fit rounded-2xl border border-white/15 bg-white/10 px-8 py-5 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                View Packages
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-5 text-sm uppercase tracking-[4px] text-yellow-400">
                About Experience
              </p>

              <h2 className="mb-8 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                {aboutTitle}
              </h2>

              <p className="mb-8 text-lg leading-relaxed text-gray-300">
                {aboutText}
              </p>

              <p className="mb-10 leading-relaxed text-gray-400">
                {secondaryText}
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {inclusions.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-gray-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map(([label, value]) => (
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

              <div className="col-span-2 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06]">
                <img
                  src={gallery[1]?.src || heroImage}
                  alt={gallery[1]?.alt || title}
                  className="h-72 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-5 text-sm uppercase tracking-[4px] text-yellow-400">
                Tour Highlights
              </p>

              <h2 className="text-4xl font-black md:text-6xl">
                {title} Experiences
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <article
                key={highlight.title}
                className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-lg font-black text-black">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="mb-4 text-2xl font-bold">{highlight.title}</h3>

                <p className="leading-relaxed text-gray-400">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="packages" className="mx-auto max-w-7xl px-6 pb-24">
          <p className="mb-5 text-sm uppercase tracking-[4px] text-yellow-400">
            Packages
          </p>

          <h2 className="mb-14 text-4xl font-black md:text-6xl">
            Choose Your Tour
          </h2>

          <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
            {packages.map((tourPackage) => (
              <article
                key={tourPackage.name}
                className={
                  tourPackage.featured
                    ? 'rounded-[32px] bg-yellow-500 p-8 text-black shadow-2xl md:-translate-y-3'
                    : 'rounded-[32px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-md'
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
                    <p key={item}>{item}</p>
                  ))}
                </div>

                <a
                  href="https://wa.me/905555555555"
                  className={
                    tourPackage.featured
                      ? 'inline-block rounded-2xl bg-black px-6 py-4 font-bold text-white transition-all hover:bg-neutral-900'
                      : 'inline-block rounded-2xl bg-white/10 px-6 py-4 font-bold transition-all hover:bg-white/20'
                  }
                >
                  Select Package
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 pb-28">
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 text-sm uppercase tracking-[4px] text-yellow-400">
              Gallery
            </p>

            <h2 className="mb-12 text-4xl font-black md:text-6xl">
              {title} Moments
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {gallery.map((image, index) => (
                <div
                  key={image.alt}
                  className={
                    index === 1
                      ? 'overflow-hidden rounded-[32px] md:mt-12'
                      : 'overflow-hidden rounded-[32px]'
                  }
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-[420px] w-full object-cover transition-all duration-500 hover:scale-[1.04] md:h-[520px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
