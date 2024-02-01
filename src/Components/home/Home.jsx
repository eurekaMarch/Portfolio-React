import Me from "../../assets/reshot-icon-astronaut-54M9J26W7N.svg"
import Shapes from "./Shapes"


function Home() {
  return (
    <section className="home container" id='home'>
      <div className="home__intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Trairat Kaewsaad</h1>
        <span className="home__education">{"I'm a Full-Stack developer"}</span>

        <div className="home__socials">
          <a href="https://www.instagram.com/" className="home__link" target='blank'><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.twitter.com/" className="home__link" target='blank'><i className="fa-brands fa-twitter"></i></a>
          <a href="https://www.behance.com/" className="home__link" target='blank'><i className="fa-brands fa-behance"></i></a>
          <a href="https://www.dribble.com/" className="home__link" target='blank'><i className="fa-brands fa-dribbble"></i></a>
          <a href="https://www.pinterest.com/" className="home__link" target='blank'><i className="fa-brands fa-pinterest"></i></a>
        </div>

        <a href="#contact" className="btn">Hire Me</a>

        <div className="home__scroll-down">
          <a href="#about" className="home__mouse-wrapper">
            <span className="home__scroll-name">Scroll Down</span>
            <span className="home__mouse">
              <span className="home__wheel"></span>
            </span>
         </a>
        </div>
      </div>
      <Shapes />
    
    </section>
  )
}

export default Home