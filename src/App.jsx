import './App.css'
import './Default.css'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'

function App() {
  return (
    <>
      <Header/>
      <main>
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
      </main>
    </>
  )
}

export default App
