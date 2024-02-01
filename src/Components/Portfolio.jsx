import { v4 as uuidv4 } from "uuid";
import Work1 from "../assets/work-1.svg";
import Work2 from "../assets/work-2.svg";
import Work3 from "../assets/work-3.svg";
import Work4 from "../assets/work-4.svg";
import Work5 from "../assets/work-5.svg";
import Work6 from "../assets/work-6.svg";
import { useState } from "react";

const Menu = [
  {
    image: Work1,
    title: "Project Management Illustration",
    category: "Design",
  },
  {
    image: Work2,
    title: "Guest App Walkthrough Screens",
    category: "Art",
  },
  {
    image: Work3,
    title: "Delivery App Wireframe",
    category: "Branding",
  },
  {
    image: Work4,
    title: "Onboarding Motivation",
    category: "Design",
  },
  {
    image: Work5,
    title: "iMac Mockup Design",
    category: "Creative",
  },
  {
    image: Work6,
    title: "Game Store App Concept",
    category: "Art",
  },
];

function Portfolio() {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updateItems);
  };

  return (
    <section className="portfolio container section" id="portfolio">
      <h2 className="section__title">Resent Works</h2>

      <div className="portfolio__filters">
        <span className="portfolio__item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span
          className="portfolio__item"
          onClick={() => filterItem("Creative")}
        >
          Creative
        </span>
        <span className="portfolio__item" onClick={() => filterItem("Art")}>
          Art
        </span>
        <span className="portfolio__item" onClick={() => filterItem("Design")}>
          Design
        </span>
        <span
          className="portfolio__item"
          onClick={() => filterItem("Branding")}
        >
          Branding
        </span>
      </div>

      <div className="portfolio__container grid">
        {items.map((element) => {
          // const {image, title, category} = element

          return (
            <div className="portfolio__card" {...element} key={uuidv4()}>
              <div className="portfolio__thumnail">
                <img src={element.image} alt="" className="portfolio__img" />
                <div className="portfolio__mask"></div>
              </div>

              <span className="portfolio__category">{element.category}</span>
              <h3 className="portfolio__title">{element.title}</h3>
              <a href="#" className="portfolio__button">
                <i className="icon-link portfolio__button--icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
