import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import MobileNav from '../components/MobileNav'
import WhatsAppTracker from '../components/WhatsAppTracker'
import { site } from '../lib/site'

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | VIP Istanbul Airport Transfers & Private Tours`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_US',
    images: [{ url: '/logo.png', alt: site.name }],
  },
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
        <WhatsAppTracker />
        <Analytics />
      </body>
    </html>
  )
}
