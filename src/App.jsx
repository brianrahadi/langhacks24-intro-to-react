import './App.css'
import './Default.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import GuestbookSection from './components/GuestbookSection'

function App() {
  return (
    <>
      <Header/>
      <main>
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
        <GuestbookSection/>
      </main>
    </>
  )
}

export default App
