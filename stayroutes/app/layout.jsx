import './globals.css'

export const metadata = {
  title: 'StayRoute',
  description: 'Digital Hotel Concierge',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}