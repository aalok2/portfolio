import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/messenger.jpeg";
import IMG2 from "../../assets/todolist.png";
import IMG3 from "../../assets/tipcalc.png";
import IMG4 from "../../assets/houseparty.png";
import IMG5 from "../../assets/portfolio.png";
import IMG6 from "../../assets/mvrecsyst.png";
import IMG7 from "../../assets/campuscrib.webp";
import IMG8 from "../../assets/cartapp.png";

const data = [
  
  {
    id: 1,
    image: IMG1,
    title: "Messenger Clone | NextJS | TailwindCSS | Prisma",
    github: "https://github.com/divyasrinaraharisetti/messenger-clone",
  
  },
  
  {
    id: 2,
    image: IMG2,
    title: "ToDo-List | MongoDB | Express | ReactJS | NodeJS ",
    github: "https://github.com/divyasrinaraharisetti/To-do-List",
  },
  
  {
    id: 3,
    image: IMG3,
    title: "Tip Calculator | JavaScript | HTML | CSS",
    github: "https://github.com/divyasrinaraharisetti/Tip-Calculator",

  },
  {
    id: 4,
    image: IMG4,
    title: "House Party Music Controller | React | Django",
    github: "https://github.com/divyasrinaraharisetti/HouseParty-Music-Controller",
    
  },
  {
    id: 5,
    image: IMG5,
    title: "JavaScript | HTML | CSS Portfolio",
    github: "",
    
  },
  {
    id: 6,
    image: IMG6,
    title: "Movie Recommendation System | Python | JavaScript | Flask",
    github: "https://github.com/divyasrinaraharisetti/Movie-Recommendation-System",
  },
  {
    id: 7,
    image: IMG7,
    title: "Campus Crib | JavaScript | React | Tailwind ",
    github: "https://github.com/divyasrinaraharisetti/CampusCrib",
  },
  {
    id: 7,
    image: IMG8,
    title: "Cart App | JavaScript | React | CSS ",
    github: "https://github.com/divyasrinaraharisetti/Cart-App",
  },

];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
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
