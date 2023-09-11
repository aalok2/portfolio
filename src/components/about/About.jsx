import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.png";
// import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
// import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="About Divyasri" />
          </div>
        </div>
        <div className="about__content text-gray-400 text-justify py-4 max-w-md">
          <p>
            I'm Divyasri a versatile professional with a passion for both full stack development and Data Analysis.
            With a strong foundation in these two distinct yet interconnected fields, 
            I strive to bridge the gap between data-driven insights and functional applications.
          </p>
          <p>
            In the world of full stack development, I bring to the table a comprehensive skill set that encompasses both frontend and backend technologies. 
            I take pride in crafting user-friendly interfaces that prioritize seamless experiences, leveraging React, JavaScript. 
            On the backend, I excel in designing efficient databases and developing server-side logic using languages like Python, and Node.js.
            This combination of skills allows me to create holistic and responsive web applications that deliver value to users.
          </p>
          <p>
            My journey into data analysis has provided me with a deep appreciation for the power of data in driving informed decisions.
            I am adept at collecting, cleaning, and visualizing data, using tools like Python, R, and SQL.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;



// {/* <div className="about__cards">
//             <article className="about__card">
//               <FaAward className="about__icon" />
//               <h5>Experience</h5>
//               <small>
//                 6 Months + <br /> Developer Experience
//               </small>
//             </article>
//             <article className="about__card">
//               <FiUsers className="about__icon" />
//               <h5>Education</h5>
//               <small>
//                Master of Science in Computer Science in University of Florida.
//               </small>
//             </article>
//             <article className="about__card">
//               <VscFolderLibrary className="about__icon" />
//               <h5>Projects</h5>
//               <small>
//                 3+ Completed
//                 <br />
//                 and Counting
//               </small>
//             </article>
//           </div> */}