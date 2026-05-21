import './globals.css'

export const metadata = {
  title: 'StayRoute',
  
  description: 'Digital Hotel Concierge',
   icons: {
    icon: "/favicon.png",
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
