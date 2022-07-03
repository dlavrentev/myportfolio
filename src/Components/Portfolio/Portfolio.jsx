import React from "react";
import "./Portfolio.css";
import IMG from "./../../Assets/uistock.png";
import IMG2 from "./../../Assets/uistock2.webp";
import IMG3 from "./../../Assets/uistock3.webp";

const data = [
  {
    id: 1,
    image: IMG,
    title: "Stock Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Stock Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Stock Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: IMG2,
    title: "Stock Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: IMG3,
    title: "Stock Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    image: IMG,
    title: "Stock Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt="project" />
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
