"use client"

import { useEffect, useRef } from "react"

// Masaüstünde fare ile sürükleyerek yatay kaydırma. Mobilde normal dokunmatik kaydırma çalışır.
export default function DragScroll({ className = "", children }) {

  const ref = useRef(null)

  useEffect(() => {

    const slider = ref.current

    if (!slider) return

    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const onDown = (e) => {
      isDown = true
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    }

    const onUp = () => {
      isDown = false
    }

    const onMove = (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      slider.scrollLeft = scrollLeft - (x - startX) * 2
    }

    slider.addEventListener("mousedown", onDown)
    slider.addEventListener("mouseleave", onUp)
    slider.addEventListener("mouseup", onUp)
    slider.addEventListener("mousemove", onMove)

    return () => {
      slider.removeEventListener("mousedown", onDown)
      slider.removeEventListener("mouseleave", onUp)
      slider.removeEventListener("mouseup", onUp)
      slider.removeEventListener("mousemove", onMove)
    }

  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
