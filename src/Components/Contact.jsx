

function Contact() {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">{"Let's talk about everything!"}</h3>
          <p className="contact__details">{"Don't like forms? Send me an email. 👋"}</p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form--group">
            <div className="contact__form--div">
              <input type="text" placeholder="Insert your name" className="contact__form--input" />
            </div>

            <div className="contact__form--div">
              <input type="text" placeholder="Insert your email" className="contact__form--input" />
            </div>
          </div>

          <div className="contact__form--div">
              <input type="text" placeholder="Insert your subject" className="contact__form--input" />
          </div>

         
          <textarea name="" id="" cols="30" rows="10" placeholder="Write your message" className="contact__form--div contact__form--input contact__form--area"></textarea>
          
          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact