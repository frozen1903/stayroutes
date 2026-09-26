"use client"

import { useState } from "react"

// Hafif YouTube gömme: tıklanana kadar sadece kapak görseli yüklenir (sayfa hızını korur),
// tıklanınca youtube-nocookie iframe'i açılır.
export default function YouTubeEmbed({ id, title }) {

  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[32px] border border-white/10 bg-black">

      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
          />

          <span className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-yellow-500 text-3xl text-black shadow-2xl transition-transform group-hover:scale-110">
            ▶
          </span>

          <span className="absolute bottom-6 left-6 right-6 text-left text-lg font-bold">
            {title}
          </span>
        </button>
      )}

    </div>
  )
}
