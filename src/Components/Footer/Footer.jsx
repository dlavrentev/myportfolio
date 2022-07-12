import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaCode } from "react-icons/fa";

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
          <a href="#services">mimo_dev</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__connecting">
      <a href="https://www.linkedin.com/in/dimitri-lavrentev-2a9bb8233" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/dlavrentev" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.codewars.com/users/dlavrentev" target="_blank" rel="noreferrer">
        <FaCode />
      </a>
      </div>

      <div className="footer__copyright">
        <small>Created 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
