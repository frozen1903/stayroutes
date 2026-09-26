import Image from 'next/image'
import Link from 'next/link'

// Tur kartı: /tours listesi, ana sayfadaki "Popular Tours" ve tur sayfalarındaki "You may also like" bölümünde kullanılır.
// Boyut dışarıdan className ile verilir (örn. sabit genişlikli yatay liste ya da grid).
//
// Kartın tamamı tıklanabilir: başlıktaki linkin ::after'ı tüm kartı kaplar ("stretched link").
// Link başlıkta durur çünkü butondaki backdrop-blur, ::after'ı butonun içine hapseder.
export default function TourCard({ tour, className = 'h-[440px]', sizes = '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw', headingLevel = 'h3' }) {
  const Heading = headingLevel

  return (
    <div className={`relative rounded-[36px] overflow-hidden group shadow-2xl ${className}`}>

      {/* Image */}

      <Image
        src={tour.card.image}
        alt=""
        fill
        sizes={sizes}
        draggable={false}
        className="object-cover group-hover:scale-110 transition-all duration-700"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      {/* Content */}

      <div className="relative z-10 h-full flex flex-col justify-end p-8">

        <Heading className="text-3xl md:text-4xl font-black mb-4 leading-tight">
          <Link
            href={`/tours/${tour.slug}`}
            draggable={false}
            className="after:absolute after:inset-0 after:content-[''] after:rounded-[36px] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-inset focus-visible:after:ring-yellow-400"
          >
            {tour.card.name}
          </Link>
        </Heading>

        <p className="text-gray-200 leading-relaxed mb-6">
          {tour.card.description}
        </p>

        <span
          aria-hidden="true"
          className="bg-white/10 backdrop-blur-md border border-white/10 group-hover:bg-white/20 transition-all duration-300 px-6 py-4 rounded-2xl w-fit"
        >
          View Experience
        </span>

      </div>

    </div>
  )
}
