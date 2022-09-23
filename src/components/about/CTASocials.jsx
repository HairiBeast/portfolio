import React from "react";
import HarriBestCV from "../../assets/HarriBestCV.pdf";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const CTASocials = () => {
  return (
    <div className="cta-socials">
      <div>
        <a href={HarriBestCV} download>
          <ImProfile size={50} className="cta-icon" />
        </a>
        {/* <h5 className="nav-text">CV</h5> */}
      </div>
      <div>
        <a
          href="https://linkedin.com/in/harri-best"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin size={50} className="cta-icon" />
        </a>
        {/* <h5 className="nav-text">Linkedin</h5> */}
      </div>
      <div>
        <a
          href="https://github.com/HairiBeast"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={50} className="cta-icon" />
        </a>
        {/* <h5 className="nav-text">GitHub</h5> */}
      </div>
    </div>
  );
};

export default CTASocials;
