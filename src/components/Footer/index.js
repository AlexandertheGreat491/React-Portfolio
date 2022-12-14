//imports react
import React from "react";
// imports the icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

function Footer() {
  return (
    <footer id="foot">
      <a id="foot" className='m-4'href="https://github.com/AlexandertheGreat491"><FaGithub className="me-1"/>GitHub</a>
      <a id="foot" className='m-4' href="https://www.linkedin.com/in/alexander-van-dyke-a263a631"><FaLinkedin className="me-1"/>LinkedIn</a>
      <a id="foot" className='m-4' href="https://stackoverflow.com/users/18638174/alexander-van-dyke"><FaStackOverflow className="me-1"/>Stack Overflow</a>
      <span id="foot" className='m-4'>&copy; 2022 Alex Van Dyke</span>
    </footer>
  );
}

export default Footer;
