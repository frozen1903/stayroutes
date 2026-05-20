import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Fleet from '../components/Fleet'

export default function Home(){
  return(
    <main>
      <Navbar/>
      <Hero/>
      <Services/>
      <Fleet/>
<a
  href="https://wa.me/90555555555"
  className="hidden md:flex fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 transition-all duration-300 text-white w-16 h-16 rounded-full items-center justify-center text-3xl shadow-2xl z-50"
>
  💬
</a>
     {/* Mobile Bottom Navigation */}

<div className="fixed bottom-0 left-0 w-full md:hidden z-40 px-4 pb-4">

  <div className="bg-black/70 backdrop-blur-2xl border border-white/10 rounded-3xl flex items-center justify-around py-4 shadow-2xl">

    <a
      href="/"
      className="flex flex-col items-center text-xs text-white"
    >
      <span className="text-2xl mb-1">🏠</span>
      Home
    </a>

    <a
      href="/transfer"
      className="flex flex-col items-center text-xs text-white"
    >
      <span className="text-2xl mb-1">✈️</span>
      Transfer
    </a>

    <a
      href="/tours"
      className="flex flex-col items-center text-xs text-white"
    >
      <span className="text-2xl mb-1">🗺️</span>
      Tours
    </a>

    <a
      href="https://wa.me/905555555555"
      className="flex flex-col items-center text-xs text-green-400"
    >
      <span className="text-2xl mb-1">💬</span>
      WhatsApp
    </a>

  </div>

</div> 
    </main>
  )
}
