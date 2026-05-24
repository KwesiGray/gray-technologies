import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import FeaturedProjects from '../components/FeaturedProjects'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
      <Certifications />
      <Contact />
    </main>
  )
}

export default Home