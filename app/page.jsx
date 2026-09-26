import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import PopularTours from '../components/PopularTours'
import Fleet from '../components/Fleet'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'
import JsonLd from '../components/JsonLd'
import { organizationSchema } from '../lib/schema'

export const metadata = {
  title: {
    absolute: 'StayRoute | VIP Istanbul Airport Transfers & Private Tours',
  },
  description:
    'Private VIP airport transfers from IST and SAW, Bosphorus cruises, Old City, Cappadocia and Ephesus tours, plus travel eSIMs. Book in minutes on WhatsApp.',
}

export default function Home(){
  return(
    <main>
      <JsonLd data={organizationSchema()} />
      <Navbar/>
      <Hero/>
      <Services/>
      <PopularTours/>
      <Fleet/>
      <Reviews/>
      <Footer/>
    </main>
  )
}
