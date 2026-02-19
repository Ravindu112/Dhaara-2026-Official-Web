import { 
  Header, 
  FloatingBookIcon, 
  LoadingScreen, 
  BackgroundVideo, 
  HeroScrollIndicator, 
  AboutSection, 
  PageFooter,
  Hero, 
  Countdown, 
  Gallery, 
  Timeline, 
  Tickets, 
  Testimonials, 
  Sponsors, 
  Contact 
} from './components'
import { EVENT_CONFIG } from './constants'
import { useIsMobile, useVideoLoading } from './utils/hooks'
import './styles/gallery.css'
import bgVideo from './assets/Landing video/LandingVideo.mp4'

function App() {
  const isMobile = useIsMobile();
  const [isVideoLoaded, handleVideoLoaded] = useVideoLoading();

  return (
    <>
      <LoadingScreen isVideoLoaded={isVideoLoaded} />
      <BackgroundVideo bgVideo={bgVideo} onLoadedData={handleVideoLoaded} />
      
      <div className="relative min-h-screen text-white overflow-x-hidden w-full">
        <Header />
        
        {/* Hero Section with Scroll Indicator */}
        <section id="home" className="relative min-h-screen flex items-center justify-center">
          <HeroScrollIndicator />
        </section>
        
        <Hero />

        {/* Main Content Section */}
        <section className="py-10 px-4 backdrop-blur-md md:backdrop-blur-md bg-black/70 md:bg-slate-900/50">
          <Countdown targetDate={EVENT_CONFIG.targetDate} />
          <AboutSection isMobile={isMobile} />
          <Gallery />
          <Timeline />
          <Tickets />
          <Testimonials />
          <Sponsors />
          <Contact />
          <PageFooter />
        </section>
      </div>

      <FloatingBookIcon />
    </>
  )
}

export default App
