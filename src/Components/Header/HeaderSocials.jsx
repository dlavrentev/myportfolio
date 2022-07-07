import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaCodepen } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/dimitri-lavrentev-2a9bb8233" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/dlavrentev" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://codepen.io/dlavrentev" target="_blank" rel="noreferrer">
        <FaCodepen />
      </a>
    </div>
  );
};

export default HeaderSocials;
