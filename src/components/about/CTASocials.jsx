import React from "react";
import CV from "../../assets/CV.pdf";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const CTASocials = () => {
  return (
    <div className="cta-socials">
      <div>
        <a href={CV} download>
          <ImProfile size={30} className="cta-icon" />
        </a>
        {/* <h5 className="nav-text">CV</h5> */}
      </div>
      <div>
        <a href="www.linkedin.com/in/harri-best" target="_blank">
          <BsLinkedin size={30} className="cta-icon" />
        </a>
        {/* <h5 className="nav-text">Linkedin</h5> */}
      </div>
      <div>
        <a
          href="https://github.com/HairiBeast"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={30} className="cta-icon" />
        </a>
        {/* <h5 className="nav-text">GitHub</h5> */}
      </div>
    </div>
  );
};

export default CTASocials;
