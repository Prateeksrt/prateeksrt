import heroImg from './assets/hero.jpg'
import './App.css'

function App() {
  return (
    <div className="page">
      <header className="hero">
        <img
          className="hero__image"
          src={heroImg}
          alt="Prateek Srivastava"
          width={1500}
          height={2000}
        />
        <div className="hero__veil" aria-hidden="true" />
        <div className="hero__content">
          <p className="hero__brand">Prateek Srivastava</p>
          <h1 className="hero__headline">Technologist &amp; Engineering Manager</h1>
          <p className="hero__lede">
            Building high-performing teams that ship systems people rely on.
          </p>
          <div className="hero__actions">
            <a className="hero__cta" href="#about">
              About me
            </a>
          </div>
        </div>
      </header>

      <main id="about" className="about">
        <p>
          With over 12 years of experience in software development. I have led
          cross-functional engineering teams in creating, deploying, monitoring,
          scaling, and maintaining systems that meet user needs and business
          goals.
        </p>
        <p>
          As an Engineering Manager at Bolt, I bootstrapped a high-performing
          team from scratch, creating a culture of collaboration, honest
          feedback, and data-driven decisions. I am now ensuring the delivery of
          a new domain, working closely with the product team to build the right
          solution in the right way. I am passionate about driving innovation,
          quality, and efficiency in the fast-growing mobility industry.
        </p>
      </main>
    </div>
  )
}

export default App
