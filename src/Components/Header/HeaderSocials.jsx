import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaCode } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
