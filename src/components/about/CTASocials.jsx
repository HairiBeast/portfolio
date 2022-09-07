import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const CTASocials = () => {
  return (
    <div className="cta-socials">
      <div>
        <a href="www.linkedin.com/in/harri-best" target="_blank">
          <BsLinkedin size={30} className="cta-icon" />
        </a>
        {/* <h5 className="nav-text">Linkedin</h5> */}
      </div>
      <div>
        <a href="https://github.com/HairiBeast" target="_blank">
          <FaGithub size={30} className="cta-icon" />
        </a>
        {/* <h5 className="nav-text">GitHub</h5> */}
      </div>
    </div>
  );
};

export default CTASocials;
