import React from "react";
import "./footer.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#about" className="footer_logo">
        <BsFillArrowUpCircleFill size={30} className="footer_icon" />
      </a>

      <ul className="permalinks">
        {/* <li>
          <a href="#">Home</a>
        </li> */}
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#technologies">Tech</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/harri-best/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLinkedin size={20} />
        </a>
        <a
          href="https://github.com/HairiBeast"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
