import Image1 from '../assets/avatar-1.svg'
import Image3 from '../assets/avatar-3.svg'
import { v4 as uuidv4 } from 'uuid';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    image: Image1,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
];

function Testimonials() {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Clients & Reviews</h2>
      <Swiper className="testimonials__container grid" 
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      pagination={{ clickable: true }}>
        {data.map((element) => {
          return (
            <SwiperSlide className="testimonials__item" key={uuidv4()}>
              <div className="testimonials__thumb">
                <img src={element.image} alt="" />
              </div>
              <h3 className="testimonials__title">{element.title}</h3>
              <span className="testimonials__subtitle">{element.subtitle}</span>
              <div className="testimonials__comment">{element.comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials