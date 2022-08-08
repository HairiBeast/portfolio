import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/RedeemPic.jpg";
import IMG2 from "../../assets/IMG2.jpg";
import IMG3 from "../../assets/IMG3.jpg";
import IMG4 from "../../assets/IMG4.jpg";
import IMG5 from "../../assets/IMG5.jpg";
import IMG6 from "../../assets/IMG6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Redeem App",
    github:
      "https://github.com/afam-io/final-project-front-end-boolean-pirates",
    demo: "https://final-project-front-end-boolean-pirates.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Placeholder1",
    github: "https://github.com",
    demo: "https://dribbble.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Placeholder2",
    github: "https://github.com",
    demo: "https://dribbble.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Placeholder3",
    github: "https://github.com",
    demo: "https://dribbble.com/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Placeholder4",
    github: "https://github.com",
    demo: "https://dribbble.com/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Placeholder5",
    github: "https://github.com",
    demo: "https://dribbble.com/",
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
