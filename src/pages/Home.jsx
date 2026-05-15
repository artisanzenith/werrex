import Hero from '../sections/Hero'
import Services from '../sections/Services'
import About from '../sections/About'
import WhyChooseUs from '../sections/WhyChooseUs'
import Process from '../sections/Process'
import Stats from '../sections/Stats'
import Portfolio from '../sections/Portfolio'
import Testimonials from '../sections/Testimonials'
import Team from '../sections/Team'
import Pricing from '../sections/Pricing'
import FAQ from '../sections/FAQ'
import CTA from '../sections/CTA'
import Contact from '../sections/Contact'
import Newsletter from '../sections/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Process />
      <Stats />
      <Portfolio />
      <Testimonials />
      <Team />
      <Pricing />
      <FAQ />
      <CTA />
      <Contact />
      <Newsletter />
    </>
  )
}
