import { v4 as uuidv4 } from 'uuid';
import Card from './Card';

const Data = [
  {
    category: "education",
    icon: "icon-graduation",
    year: "2019 - present",
    title: "Academic Degree",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerciad nec admodum perfecto.",
  },
  {
    category: "education",
    icon: "icon-graduation",
    year: "2013 - 2017",
    title: "Bachelor's Degree",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerciad nec admodum perfecto.",
  },
  {
    category: "education",
    icon: "icon-graduation",
    year: "2009 - 2013",
    title: "Honours Degree",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerciad nec admodum perfecto.",
  },
  {
    category: "experience",
    icon: "icon-briefcase",
    year: "2019 - present",
    title: "Web Designer",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerciad nec admodum perfecto.",
  },
  {
    category: "experience",
    icon: "icon-briefcase",
    year: "2013 - 2017",
    title: "Front-End Developer",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerciad nec admodum perfecto.",
  },
  {
    category: "experience",
    icon: "icon-briefcase",
    year: "2009 - 2013",
    title: "Back-End Developer",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerciad nec admodum perfecto.",
  },
];

function Resume() {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">
        <div className="resume__timeline grid">
          {Data.map((element) => {
            if (element.category === "education") {
              return <Card {...element} key={uuidv4()} />
            }
          })}
        </div>

        <div className="resume__timeline grid">
          {Data.map((element) => {
            if (element.category === "experience") {
              return <Card {...element} key={uuidv4()} />
            }
          })}
        </div>

      </div>
    </section>
  )
}

export default Resume