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
          <a href="#about"></a>
        </li>
        <li>
          <a href="#experience"></a>
        </li>
        <li>
          <a href="#services"></a>
        </li>
        <li>
          <a href="#portfolio"></a>
        </li>
        <li>
          <a href="#testimonials"></a>
        </li>
        <li>
          <a href="#contact"></a>
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
        <small>Dimitri Lavrentev</small>
      </div>
    </footer>
  );
};

export default Footer;
