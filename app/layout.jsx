import './globals.css'
import MobileNav from '../components/MobileNav'
import { site } from '../lib/site'

export const metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: '/favicon.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pb-28 md:pb-0">
        {children}
        <MobileNav />
      </body>
    </html>
  )
}
