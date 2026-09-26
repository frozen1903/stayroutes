import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Fleet from '../components/Fleet'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'


export default function Home(){
  return(
    <main>
      <Navbar/>
      <Hero/>
      <Services/>
      <Fleet/>
      <Reviews/>
      <Footer/>
    </main>
  )
}
