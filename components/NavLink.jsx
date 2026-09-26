"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

// Menü linki: bulunulan sayfanın linkine tıklanınca sayfanın başına kaydırır
// (Next.js aynı sayfaya geçişte kaydırma yapmaz) ve aktif sayfayı işaretler.
export default function NavLink({ href, className = "", activeClassName = "", onClick, children, ...props }) {

  const pathname = usePathname()
  const isCurrentPage = pathname === href
  // /tours/cappadocia-experience gibi alt sayfalarda da "Tours" vurgulanır
  const isActive = isCurrentPage || (href !== "/" && pathname.startsWith(`${href}/`))

  const handleClick = (e) => {
    if (isCurrentPage) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    onClick?.(e)
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      aria-current={isCurrentPage ? "page" : undefined}
      className={`${className} ${isActive ? activeClassName : ""}`.trim()}
      {...props}
    >
      {children}
    </Link>
  )
}
