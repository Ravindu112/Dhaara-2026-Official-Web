"use client";
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
  Testimonials,
  Sponsors,
  LeadershipTeam,
} from '../components'
import TicketSection from '../components/TicketSection'
import { EVENT_CONFIG } from '../constants'
import { useVideoLoading } from '../utils/hooks'
import { ScrollReveal } from '../components/ScrollReveal'

const bgVideo = '/assets/Landing video/DHAARA BG WEB2.webm'
const mobileBg = '/assets/Background.webm'

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
        <section className="py-15 px-4 bg-slate-950/[0.88]">
          <ScrollReveal direction="up"><Countdown targetDate={EVENT_CONFIG.targetDate} /></ScrollReveal>
          <ScrollReveal direction="up"><AboutSection /></ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}><Gallery /></ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}><Timeline /></ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}><TicketSection /></ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}><Testimonials /></ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}><Sponsors /></ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}><LeadershipTeam /></ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}><PageFooter /></ScrollReveal>
        </section>
      </div>

      <FloatingBookIcon />
    </>
  )
}


export default App
