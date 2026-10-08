import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { About, Associations, Stats } from './components/Intro'
import Programs from './components/Programs'
import Process from './components/Process'
import { Recognition, Records } from './components/Records'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { programs } from './data/content'

export default function App() {
  // Shared so "Request this program" pre-selects the program in the enquiry form
  const [selectedProgram, setSelectedProgram] = useState(programs[0].name)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Associations />
        <Stats />
        <About />
        <Programs onRequest={setSelectedProgram} />
        <Process />
        <Records />
        <Recognition />
        <Gallery />
        <Testimonials />
        <Contact program={selectedProgram} onProgramChange={setSelectedProgram} />
      </main>
      <Footer />
    </>
  )
}
