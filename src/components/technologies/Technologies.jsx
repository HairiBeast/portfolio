import React from "react";
import "./technologies.css";
import { SiHtml5 } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiMiro } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

// BACKEND IMPORTS
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";

const experience = () => {
  return (
    <section id="experience">
      <h1>Technologies</h1>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3 className="cardTitle">Frontend</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiHtml5 size={30} className="experience_details-icon" />
              <div>
                <h4>HTML5</h4>
                {/* <small className="text-light">Placeholder</small> */}
              </div>
            </article>
            <article className="experience_details">
              <SiCss3 size={30} className="experience_details-icon" />
              <div>
                {" "}
                <h4>CSS</h4>
                {/* <small className="text-light">Placeholder</small> */}
              </div>
            </article>
            <article className="experience_details">
              <DiJavascript size={30} className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                {/* <small className="text-light">Placeholder</small> */}
              </div>
            </article>
            <article className="experience_details">
              <SiTypescript size={30} className="experience_details-icon" />
              <div>
                <h4>TypeScript</h4>
                {/* <small className="text-light">Placeholder</small> */}
              </div>
            </article>
            <article className="experience_details">
              <GrReactjs size={30} className="experience_details-icon" />
              <div>
                <h4>React</h4>
                {/* <small className="text-light">Placeholder</small> */}
              </div>
            </article>
            <article className="experience_details">
              <TbBrandNextjs size={30} className="experience_details-icon" />
              <div>
                <h4>Next.js</h4>
                {/* <small className="text-light">Placeholder</small> */}
              </div>
            </article>
            <article className="experience_details">
              <SiMiro size={30} className="experience_details-icon" />
              <div>
                <h4>Miro</h4>
                {/* <small className="text-light">Placeholder</small> */}
              </div>
            </article>
            <article className="experience_details">
              <SiFigma size={30} className="experience_details-icon" />
              <div>
                <h4>Figma</h4>
                {/* <small className="text-light">Placeholder</small> */}
              </div>
            </article>
            <article className="experience_details">
              <SiTailwindcss size={30} className="experience_details-icon" />
              <div>
                <h4>Tailwind</h4>
                {/* <small className="text-light">Placeholder</small> */}
              </div>
            </article>
          </div>
        </div>
        {/* =========END OF FRONTEND============ */}
        <div className="experience_backend">
          <h3 className="cardTitle">Backend and Platform</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiNodedotjs size={30} className="experience_details-icon" />
              <div>
                <h4>Node.js</h4>
                {/* <small className="text-light">Placeholder</small> */}
              </div>
            </article>
            <article className="experience_details">
              <SiExpress size={30} className="experience_details-icon" />
              <div>
                <h4>Express</h4>
                {/* <small className="text-light">Placeholder</small> */}
              </div>
            </article>
            <article className="experience_details">
              <SiJest size={30} className="experience_details-icon" />
              <div>
                <h4>Jest</h4>
                {/* <small className="text-light">Placeholder</small> */}
              </div>
            </article>
            <article className="experience_details">
              <SiCypress size={30} className="experience_details-icon" />
              <div>
                <h4>Cypress</h4>
                {/* <small className="text-light">Placeholder</small> */}
              </div>
            </article>
            <article className="experience_details">
              <SiPostgresql size={30} className="experience_details-icon" />
              <div>
                {" "}
                <h4>PostgreSQL</h4>
                {/* <small className="text-light">Placeholder</small> */}
              </div>
            </article>
            <article className="experience_details">
              <SiMongodb size={30} className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                {/* <small className="text-light">Placeholder</small> */}
              </div>
            </article>
            <article className="experience_details">
              <SiHeroku size={30} className="experience_details-icon" />
              <div>
                <h4>Heroku</h4>
                {/* <small className="text-light">Placeholder</small> */}
              </div>
            </article>
            <article className="experience_details">
              <SiNetlify size={30} className="experience_details-icon" />
              <div>
                <h4>Netlify</h4>
                {/* <small className="text-light">Placeholder</small> */}
              </div>
            </article>
            <article className="experience_details">
              <TbBrandVercel size={30} className="experience_details-icon" />
              <div>
                <h4>Vercel</h4>
                {/* <small className="text-light">Placeholder</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
