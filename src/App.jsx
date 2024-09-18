import { useState } from 'react'
import './App.css'
import './Default.css'
import GithubIcon from './assets/icons/icon-github.svg'
import EmailIcon from './assets/icons/icon-email.svg'
import LinkedinIcon from './assets/icons/icon-linkedin.svg'
import ProfileImg from './assets/profile.jpg'
import ProjectImg from './assets/project-1-img.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="container" id="header">
        <div className="header--title">
          <p className="header--name">Sebastian Lee</p>
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="mailto:sebastian.lee@gmail.com">Contact</a></li>
            <li><a href="#" className="btn">View Resume</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="content-container" id="hero">
          <p className="hero--intro-text">Hello world! My name is</p>
          <h1>Sebastian Lee</h1>
          <p className="hero--description">
            <span>Software Engineer.</span> A driven individual interested in building high-quality products for the
            web.
          </p>
          <div className="hero--social-links">
            <a href="https://github.com/sebastian-lee" className="btn">
              <img src={GithubIcon} alt="GitHub Icon" />
              GitHub
            </a>
            <a href="#" className="btn">
              <img src={EmailIcon} alt="Email Icon" />
              Email
            </a>
            <a href="#" className="btn">
              <img src={LinkedinIcon} alt="LinkedIn Icon" />
              LinkedIn
            </a>
          </div>
        </section>


        <section className="content-container" id="about">
          <div className="about--content">
            <h2>About Me</h2>
            <p>Hey there, my name is Sebastian Lee (he/him) and I am a software systems student at <a
              href="https://langara.ca">Langara College.</a> I have always been fascinated by technology and its potential to make a positive
              impact on
              the
              world.

              My goal is to use my skills and knowledge to develop innovative solutions that can improve people's
              lives! I
              am dedicated to building high-quality products that help make the world a better place. To do this,
              I have
              completed <a href="#projects">various projects</a> that solve real-world problems.</p>
          </div>
          <img src={ProfileImg} alt="Sebastian Lee's Profile Image" />
        </section>

        <section class="content-container" id="projects">
          <h2>Projects</h2>
          <div class="project--item">
            <img src={ProjectImg} alt="Project image" />
            <div class="project--item--description">
              <h3>SSSS Website v2</h3>
              <p>The official website of the Software Systems Student Society (SSSS). Created alongside the SSSS website committee.</p>
              <div class="project--item--actions">
                <a href="#" class="btn">View Project</a>
                <a href="#" class="btn secondary">View Site</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
