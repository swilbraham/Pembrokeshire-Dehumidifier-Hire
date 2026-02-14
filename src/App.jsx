import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Benefits from './components/Benefits'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import About from './components/About'
import WaterRemoval from './components/WaterRemoval'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-gray-800">
      <Navbar />
      <Hero />
      <Problem />
      <Benefits />
      <Process />
      <Testimonials />
      <About />
      <WaterRemoval />
      <CTA />
      <Footer />
    </div>
  )
}
