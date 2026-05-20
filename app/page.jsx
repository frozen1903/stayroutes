import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'

export default function Home(){
  return(
    <main>
      <Navbar/>
      <Hero/>
      <Services/>
      <a
  href="https://wa.me/905555555555"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 transition-all duration-300 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl z-50"
>
  💬
</a>
    </main>
  )
}
