import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/RedeemHomepage.jpg";
import IMG2 from "../../assets/calculator.jpg";
// Icons
// import { SiHtml5 } from "react-icons/si";
// import { DiJavascript } from "react-icons/di";
// import { SiTypescript } from "react-icons/si";
// import { SiCss3 } from "react-icons/si";
// import { GrReactjs } from "react-icons/gr";
// import { SiMiro } from "react-icons/si";
// import { SiFigma } from "react-icons/si";
// import { TbBrandNextjs } from "react-icons/tb";

// // BACKEND IMPORTS
// import { SiNodedotjs } from "react-icons/si";
// import { SiExpress } from "react-icons/si";
// import { SiPostgresql } from "react-icons/si";
// import { SiHeroku } from "react-icons/si";
// import { SiJest } from "react-icons/si";
// import { SiCypress } from "react-icons/si";
// import { SiMongodb } from "react-icons/si";

// const icons = [
//   "SiHtml5",
//   "DiJavascript",
//   "SiTypescript",
//   "SiCss3",
//   "GrReactjs",
//   "SiMiro",
//   "SiFigma",
//   "SiNodedotjs",
//   "SiExpress",
//   "SiPostgresql",
//   "SiHeroku",
//   "SiJest",
//   "SiCypress",
//   "SiMongodb",
//   ]

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Redeem Eco App",
    github:
      "https://github.com/afam-io/final-project-front-end-boolean-pirates",
    demo: "https://final-project-front-end-boolean-pirates.vercel.app/",
    description:
      "The final project for School of Code. Redeem is a platform for eco-minded creators and users.",
    icon: "TbBrandNextjs",
  },
  {
    id: 2,
    image: IMG2,
    title: "Calculator",
    github: "https://github.com/HairiBeast/Calculator",
    demo: "https://6324f2ff2139ab39ed8d36d2--super-kitsune-d54a55.netlify.app/",
    description:
      "A Calculator with button press effects and an optional dark mode",
    icon: "SiCss3",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo, description, icon }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p className="description">{description}</p>
              <div className="portfolio_item-cta">
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
