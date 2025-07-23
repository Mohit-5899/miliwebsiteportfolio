import Header from '@/components/header'
import Footer from '@/components/footer'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Services from '@/components/sections/services'
import Experience from '@/components/sections/experience'
import Education from '@/components/sections/education'
import Contact from '@/components/sections/contact'
import AnimatedBackground from '@/components/animated-background'
import ScrollToHashElement from '@/components/scroll-to-hash'

export default function HomePage() {
  return (
    <div className="min-h-screen animated-bg">
      <AnimatedBackground bubbleCount={15} />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToHashElement />
    </div>
  )
}