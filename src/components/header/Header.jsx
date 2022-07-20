import React from "react";
import "./header.css";
import CTA from "./CTA.jsx";
import BWME from "../../assets/BWME.png";
import HeaderSocial from "./HeaderSocials.jsx";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Harri Best</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={BWME} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
