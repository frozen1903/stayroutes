import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <>
      <Navbar />

      <section className="min-h-[80vh] flex items-center justify-center text-center px-6 pt-32">

        <div className="max-w-2xl">

          <p className="text-yellow-400 uppercase tracking-[4px] mb-4 text-sm">
            404
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Page Not Found
          </h1>

          <p className="text-gray-400 leading-relaxed mb-10">
            The page you are looking for does not exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              href="/"
              className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 text-black px-8 py-4 rounded-2xl font-bold"
            >
              Back To Home
            </Link>

            <Link
              href="/tours"
              className="border border-white/20 bg-white/10 hover:bg-white/20 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold"
            >
              Explore Tours
            </Link>

          </div>

        </div>

      </section>

      <Footer />
    </>
  )
}
