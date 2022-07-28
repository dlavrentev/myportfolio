import React from "react";
import "./About.css";
import Image from "./../../Assets/profilepicture2.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Image} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Graduated</h5>
              <small>@ mimo_dev</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Teamwork</h5>
              <small>build on team projects</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            I'm Dimitri Lavrentev and have a mechanical, industrial profession
            background. Finding solutions was and is my daily drive. I like to
            work in a team and creating things. I'm a very concentrated,
            powerful and collaborative employee. I would really love to dive
            into the coding world, as a frontend developer!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
