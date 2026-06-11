import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Team from '@/components/sections/Team'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'
import ProjectsPage from '@/pages/ProjectsPage'

function HomePage() {
  return (
    <div className="bg-stipo-dark text-stipo-text font-sans">
      <Navbar />
      <section id="naslovna">
        <Hero />
      </section>
      <section id="o-nama">
        <About />
      </section>
      <section id="usluge">
        <Services />
      </section>
      <section id="projekti">
        <Projects />
      </section>
      <section id="tim">
        <Team />
      </section>
      <section id="kontakt">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projekti" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
