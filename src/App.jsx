import {
  Header,
  FloatingBookIcon,
  LoadingScreen,
  BackgroundVideo,
  AboutSection,
  PageFooter,
  Hero,
  Countdown,
  Gallery,
  Timeline,
  Tickets,
  Testimonials,
  Sponsors,
  LeadershipTeam,
} from './components'
import TicketSection from './components/TicketSection'
import { EVENT_CONFIG } from './constants'
import { useVideoLoading } from './utils/hooks'
import bgVideo from './assets/Landing video/DHAARA BG WEB.webm'
import mobileBg from './assets/Background.webm'

function App() {
  const [isVideoLoaded, handleVideoLoaded] = useVideoLoading();

  return (
    <>
      <LoadingScreen isVideoLoaded={isVideoLoaded} />
      <BackgroundVideo
        bgVideo={bgVideo}
        mobileBackground={mobileBg}
        onLoadedData={handleVideoLoaded}
      />

      <div className="relative min-h-screen text-white overflow-x-hidden w-full">
        <Header />

        <Hero />

        {/* Main Content Section */}
        <section className="py-15 px-4 backdrop-blur-md md:backdrop-blur-md bg-slate-950/95 md:bg-slate-950/80">
          <Countdown targetDate={EVENT_CONFIG.targetDate} />
          <AboutSection />
          <Gallery />
          <Timeline />
          <Tickets /> 
          <TicketsCountdown />
          <Testimonials />
          {/*<Sponsors />*/}
          <LeadershipTeam />
          <PageFooter />
        </section>
      </div>

      <FloatingBookIcon />
    </>
  )
}

export default App
