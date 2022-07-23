import React from "react";
import "./Portfolio.css";
import IMG1 from "./../../Assets/travel-diaries.png";
import IMG2 from "./../../Assets/designandfly.png";
import IMG3 from "./../../Assets/coffeebeanpage.png"
import IMG4 from "./../../Assets/infinityscroll.png"
import IMG5 from "./../../Assets/interactiverating.png"
import IMG6 from "./../../Assets/pictureinpicture.png"
import IMG7 from "./../../Assets/quotegenerator.png"
import IMG8 from "./../../Assets/signupform.png"
import IMG9 from "./../../Assets/splash.png"
import IMG10 from "./../../Assets/darklight.png"
import IMG11 from "./../../Assets/ultimateski.png"
import IMG12 from "./../../Assets/weatherapi.png"
import IMG13 from "./../../Assets/jokebot.png"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Travel-Diaries - Fullstack React App, Backend Server",
    github: "https://github.com/dlavrentev/travel-diaries",
    demo: "https://travel-diaries-dl.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Design and Fly! - HTML, CSS, JavaScript, API",
    github: "https://github.com/dlavrentev/design-and-fly",
    demo: "https://designandfly.netlify.app/index.html",
  },
  {
    id: 3,
    image: IMG3,
    title: "The Bean Machine - HTML, CSS",
    github: "https://github.com/dlavrentev/thebeanmachine",
    demo: "https://the-bean-machine.netlify.app",
  },
  {
    id: 4,
    image: IMG4,
    title: "Infinity Scroll - HTML, CSS, JavaScript, API",
    github: "https://github.com/dlavrentev/infinityscroll",
    demo: "https://infinity-scroll-dl.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Interactive Rating - HTML, CSS, JavaScript",
    github: "https://github.com/dlavrentev/interactive-rating-component-main",
    demo: "https://interactive-rating-component-dl.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Picture in Picture - HTML, CSS, JavaScript, API",
    github: "https://github.com/dlavrentev/pictureinpicture",
    demo: "https://picture-in-picture-dl.netlify.app/",
  },
  {
    id: 7,
    image: IMG7,
    title: "Quote Generator - HTML, CSS, API",
    github: "https://github.com/dlavrentev/quote-generator",
    demo: "https://quote-generator-dl.netlify.app",
  },
  {
    id: 8,
    image: IMG8,
    title: "Sign Up Form - HTML, CSS",
    github: "https://github.com/dlavrentev/sign-up-form",
    demo: "https://sign-up-form-dl.netlify.app",
  },
  {
    id: 9,
    image: IMG9,
    title: "Splash - HTML, CSS, Figma",
    github: "https://github.com/dlavrentev/splash-page",
    demo: "https://splash-page-dl.netlify.app",
  },
  {
    id: 10,
    image: IMG10,
    title: "Dark-Light-Website - HTML, CSS, JavaScript",
    github: "https://github.com/dlavrentev/light-dark-mode",
    demo: "https://dark-light-mode-dl.netlify.app/",
  },
  {
    id: 11,
    image: IMG11,
    title: "Ultimate Ski Adventure - HTML, CSS",
    github: "https://github.com/dlavrentev/ultimate-ski-adventure",
    demo: "https://ultimate-ski-adventure.netlify.app",
  },
  {
    id: 12,
    image: IMG12,
    title: "Weather API-Test - HTML, CSS, API",
    github: "https://github.com/dlavrentev/ajax",
    demo: "https://weather-api-dl.netlify.app",
  },
  {
    id: 13,
    image: IMG13,
    title: "Jokebot - HTML, CSS, JS, API",
    github: "https://github.com/dlavrentev/jokebot",
    demo: "https://jokebot.netlify.app",
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
