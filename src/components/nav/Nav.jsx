import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
// import { AiOutlineUser } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { BiBook } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      {/* <div>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <h5 className="nav-text">Home</h5>
      </div> */}
      <div>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <h5 className="nav-text">Home</h5>
      </div>
      <div>
        <a
          href="#experience"
          onClick={() => setActiveNav("#technology")}
          className={activeNav === "#technology" ? "active" : ""}
        >
          <MdDesignServices />
        </a>
        <h5 className="nav-text">Tech</h5>
      </div>
      <div>
        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <BiBook />
        </a>
        <h5 className="nav-text">Portfolio</h5>
      </div>
      <div>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <MdMailOutline />
        </a>
        <h5 className="nav-text">Contact</h5>
      </div>
    </nav>
  );
};

export default Nav;
