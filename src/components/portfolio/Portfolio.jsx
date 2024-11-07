import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/messengerclone.png";
import IMG3 from "../../assets/tipcalc.png";
import IMG4 from "../../assets/houseparty.png";
import IMG9 from "../../assets/slotmachine.png"
import img10 from "../../assets/most_played_game.png"

const data = [
  
  {
    id: 1,
    // image: img10,
    title: "Most Popular Game In a Region",
    github: "https://github.com/aalok2/most-popular-game-type"
  },
  
  {
    id: 2,
    // image: IMG9,
    title: "Slot Machine",
    github: "https://github.com/aalok2/slot-machine"
  },
  
  {
    id: 3,
    // image: IMG1,
    title: "Climate Change Predictor",
    github: "https://github.com/aalok2/climate-change",
  
  },
  
  {
    id: 4,
    // image: IMG4,
    title: "Tab url Extractor - Chrome Extension",
    github: "https://github.com/aalok2/tab-url-extractior",
    
  },

  {
    id: 5,
    // image: IMG3,
    title: "E-commerce Backend Application",
    github: "https://github.com/aalok2/E-commerce-Application",

  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>PROJECT WORK</h5>
      <h2>My Recent Works</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github}) => {
          return (
            <article key={id} className="portfolio__item">
              {/* <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div> */}
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  View the Code
                </a>
                {/* <a href={brief} className="btn">
                  Project Brief
                </a> */}
              </div>
              {/* <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div> */}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
