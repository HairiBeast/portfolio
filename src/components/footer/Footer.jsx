import React from "react";
import "./footer.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#about" className="footer_logo">
        ^ Scroll Up ^
      </a>

      <ul className="permalinks">
        {/* <li>
          <a href="#">Home</a>
        </li> */}
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
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="www.linkedin.com/in/harri-best">
          <AiOutlineLinkedin size={20} />
        </a>
        <a href="https://github.com/HairiBeast">
          <AiOutlineGithub size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
