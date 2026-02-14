import Header from './components/Header'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Roadmap from './components/Roadmap'
import About from './components/About'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Tickets from './components/Tickets'
import Sponsors from './components/Sponsors'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingBookIcon from './components/FloatingBookIcon'
import dhaaraLogo from './assets/Background.svg'

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden w-full">
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: `url(${dhaaraLogo})`,
          filter: 'brightness(1.6) contrast(1.1) saturate(1)',
        }}
      />
      
      
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <Hero />

    <section id="RestContent" className="py-20 px-4 backdrop-blur-md bg-slate-900/50">
      {/* Countdown Timer */}
      <Countdown targetDate="2026-04-24" />

      {/* About Section */}
      <About />

      {/* Moments of DHAARA - Gallery Section */}
      <Gallery />

      {/* DHAARA Roadmap */}
      <Roadmap />

      {/* Tickets Booking Section */}
      <Tickets />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Awards Section */}
      {/*<Awards />*/}

      {/* Sponsors Section */}
      <Sponsors />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
      </section>

      {/* Floating Book Icon */}
      <FloatingBookIcon />
    </div>
  )
}

export default App