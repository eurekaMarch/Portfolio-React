import Image1 from '../assets/service-1.svg'
import Image2 from '../assets/service-2.svg'
import Image3 from '../assets/service-3.svg'
import { v4 as uuidv4 } from 'uuid';

const data = [
  {
    image: Image1,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget."
  },
  {
    image: Image2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget."
  },
  {
    image: Image3,
    title: "Photography",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget."
  }
];

function Services() {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map((element) => {
          return (
            <div className="services__card" key={uuidv4()}>
              <img src={element.image} alt="" className="services__img" />

              <h3 className="services__title">{element.title}</h3>

              <p className="services__description">{element.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services