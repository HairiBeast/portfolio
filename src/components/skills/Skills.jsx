import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { SiHtml5 } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiMiro } from "react-icons/si";
import { SiFigma } from "react-icons/si";

// BACKEND IMPORTS
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiCypress } from "react-icons/si";

const experience = () => {
  return (
    <section id="experience">
      <h5>My Experience</h5>
      <h2>Skills</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3 className="cardTitle">Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiHtml5 size={30} className="experience_details-icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <SiCss3 size={30} className="experience_details-icon" />
              <div>
                {" "}
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <DiJavascript size={30} className="experience_details-icon" />
              <div>
                <h4>JavasScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <GrReactjs size={30} className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <SiTypescript size={30} className="experience_details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <SiMiro size={30} className="experience_details-icon" />
              <div>
                <h4>Miro</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <SiFigma size={30} className="experience_details-icon" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* =========END OF FRONTEND============ */}
        <div className="experience_backend">
          <h3 className="cardTitle">Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiNodedotjs size={30} className="experience_details-icon" />
              <div>
                <h4>Node.JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <SiExpress size={30} className="experience_details-icon" />
              <div>
                <h4>Express.JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <SiJest size={30} className="experience_details-icon" />
              <div>
                <h4>Jest</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <SiPostgresql size={30} className="experience_details-icon" />
              <div>
                {" "}
                <h4>PostgreSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <SiHeroku size={30} className="experience_details-icon" />
              <div>
                <h4>Heroku</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <SiCypress size={30} className="experience_details-icon" />
              <div>
                <h4>Cypress</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
