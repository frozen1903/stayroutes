"use client"

import { useEffect } from "react"
import { track } from "@vercel/analytics"

// Sitedeki tüm WhatsApp linklerine yapılan tıklamaları tek noktadan Vercel Analytics'e "WhatsApp Click" olayı olarak gönderir.
// Not: Vercel'de özel olaylar (custom events) Pro planda görünür; Hobby planda sayfa görüntülemeleri görünür.
export default function WhatsAppTracker() {

  useEffect(() => {

    const onClick = (e) => {
      const link = e.target.closest?.('a[href*="wa.me"]')
      if (!link) return

      track("WhatsApp Click", {
        page: window.location.pathname,
        label: link.textContent.trim().replace(/\s+/g, " ").slice(0, 60) || "icon",
      })
    }

    // Transfer formu linke değil location.href ile gider; onu da yakalamak için submit butonları da izlenir
    const onSubmit = (e) => {
      if (e.target.closest?.("#transfer-form")) {
        track("Transfer Form Submit", { page: window.location.pathname })
      }
    }

    document.addEventListener("click", onClick)
    document.addEventListener("submit", onSubmit)

    return () => {
      document.removeEventListener("click", onClick)
      document.removeEventListener("submit", onSubmit)
    }

  }, [])

  return null
}
