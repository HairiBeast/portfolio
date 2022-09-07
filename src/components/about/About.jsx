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
            <img src={ME2} alt="About Image" />
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
            Welcome to my site! Currently transitioning into the tech industry
            after a fulfilling decade of teaching. I bring a wealth of
            transferrable skills which have been invaluable when working within
            a team. I have experience of working with agile methods and
            collaborating within a team to deliver web apps from ideation
            through to deplayment, front-end to back-end. Of particular interest
            for me is UX/UI and user-centered aspects.
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
