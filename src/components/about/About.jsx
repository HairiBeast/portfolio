import React from "react";
import "./about.css";
import ME2 from "../../assets/ME2.JPG";
import CTASocials from "./CTASocials.jsx";
// import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
// import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h3>Hello I'm</h3>
      <h1>Harri Best</h1>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME2} alt="Me in front of Iceland Glaciers" />
          </div>
        </div>
        <div className="about_content">
          {/* <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>School of Code</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>Charities and Creators</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>Commissioned and Personal</small>
            </article>
          </div> */}

          <h3>
            Welcome to my coding based website. My design based website is up and running and is updated more frequently. You can find my design work <a href="www.harribestdesign.uk" target={"_blank"}>here!</a>
            <br />
            <br />
            Currently transitioning into the tech industry after a fulfilling
            decade of teaching. I bring a wealth of transferrable skills which
            have been invaluable when working within Agile team. I enjoy the
            process of creating intuitive UI/UX and applying front-end and
            back-end skills and am open to both coding-centric and
            design-centric roles. My CV is available upon request.
          </h3>
          {/* <h4 className="tagline">Currently seeking new opportunities.</h4> */}
          <CTASocials />

          {/* <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default about;
