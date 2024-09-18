import GithubIcon from '../assets/icons/icon-github.svg'
import EmailIcon from '../assets/icons/icon-email.svg'
import LinkedinIcon from '../assets/icons/icon-linkedin.svg'

export default function HeroSection() {
    return (
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
    )
}