'use client'

// next/image için özel loader: Unsplash görsellerini Unsplash'in kendi CDN'i (imgix) üzerinden
// istenen genişlikte ve otomatik formatta (webp/avif) ister. Vercel image optimization kotası harcanmaz.
export default function imageLoader({ src, width, quality }) {
  if (src.startsWith('https://images.unsplash.com/')) {
    const url = new URL(src)
    url.search = ''
    url.searchParams.set('w', String(width))
    url.searchParams.set('q', String(quality || 75))
    url.searchParams.set('auto', 'format')
    url.searchParams.set('fit', 'max')
    return url.toString()
  }

  // public/ içindeki yerel dosyalar olduğu gibi sunulur
  return `${src}?w=${width}`
}
