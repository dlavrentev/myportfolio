import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub, FaCodepen } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com" target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href="https://codepen.com" target='_blank' rel="noreferrer"><FaCodepen /></a>
    </div>
  )
}

export default HeaderSocials