import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaCodepen } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Dimitri Lavrentev
      </a>

      <ul className="permalinks">
        <li>
          <a href="#"></a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__connecting">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://codepen.com" target="_blank" rel="noreferrer">
        <FaCodepen />
      </a>
      </div>

      <div className="footer__copyright">
        <small>2022</small>
      </div>
    </footer>
  );
};

export default Footer;
