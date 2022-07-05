import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I learned @</h5>
      <h2>mimo_dev</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Developer thinking</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Asking the right questions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Problem solving</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Breaking down problems</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Prioritizing development effort</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet conset elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESIGN */}
        <article className="service">
          <div className="service__head">
            <h3>Fundamentals</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Using developer tools</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Reviewing other developers’ code</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Using documentation effectively</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Pseudocode</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Writing DRY code</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Extended learning</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Giving and receiving feedback</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Team collaboration and communication</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Helping other developers and asking the community for help</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cultivating a growth mindset</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Effective goal-setting and planning</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
