import Profile from "../assets/reshot-icon-black-hair-Z8GE2SCDPX.svg";

function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Profile} alt="" className="about__image" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Trairat Kaewssad, web developer from Thailand. I have rich
              experience in web site design and building and customization, also
              I am good at WordPress.
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="about__skills--data">
              <div className="about__skills--titles">
                <h3 className="about__skills--name">Development</h3>
                <span className="about__skills--number">90%</span>
              </div>

              <div className="about__skills--bar">
                <span className="about__skills--percentage development"></span>
              </div>
            </div>

            <div className="about__skills--data">
              <div className="about__skills--titles">
                <h3 className="about__skills--name">UI/UX design</h3>
                <span className="about__skills--number">80%</span>
              </div>

              <div className="about__skills--bar">
                <span className="about__skills--percentage ui__design"></span>
              </div>
            </div>

            <div className="about__skills--data">
              <div className="about__skills--titles">
                <h3 className="about__skills--name">Photography</h3>
                <span className="about__skills--number">60%</span>
              </div>

              <div className="about__skills--bar">
                <span className="about__skills--percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about__boxes grid">
        <div className="about__box">
          <i className="about__icon icon-fire"></i>

          <div>
            <h3 className="about__title">198</h3>
            <span className="about__subtitle">Project completed</span>
          </div>
        </div>

        <div className="about__box">
          <i className="about__icon icon-cup"></i>

          <div>
            <h3 className="about__title">5670</h3>
            <span className="about__subtitle">Cup of coffee</span>
          </div>
        </div>

        <div className="about__box">
          <i className="about__icon icon-people"></i>

          <div>
            <h3 className="about__title">427</h3>
            <span className="about__subtitle">Satisfied clients</span>
          </div>
        </div>

        <div className="about__box">
          <i className="about__icon icon-badge"></i>

          <div>
            <h3 className="about__title">35</h3>
            <span className="about__subtitle">Nominees winner</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
