import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/RedeemHomepage.jpg";
import IMG2 from "../../assets/calculator.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Redeem Eco App",
    github:
      "https://github.com/afam-io/final-project-front-end-boolean-pirates",
    demo: "https://final-project-front-end-boolean-pirates.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Calculator",
    github: "https://github.com/HairiBeast/Calculator",
    demo: "https://6324f2ff2139ab39ed8d36d2--super-kitsune-d54a55.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
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
