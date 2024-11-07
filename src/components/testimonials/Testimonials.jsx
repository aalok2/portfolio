import React from "react";
import "./testimonials.css";

// import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const data = [
  {
    title: "SDE-1",
    company: "ZenAdmin",
    date: "Feb 2023 - Present",
    description: "Pioneered the development of Access and SaaS Management Integrations, implementing automated workflows that slashed IT/HR processing department time from one hour tomilliseconds, dramatically boosting operational efficiency. Optimized costs and ensured system availability by leveraging Lambda Engineered critical integrations such as Mobile Device Management (MDM) and Human Resources Information Systems (HRIS) to automate device and personnel onboarding management . This streamlined process enabled the seamless onboarding of 25 clients. Created a scalable, event-driven notification and email service based on asynchronous messaging for end-to-end notifications. Architected and implemented RESTful APIs using best practices for various modules, and structured optimized NoSQL and SQL database schemas. Developed a Chrome Extension using React and TypeScript to monitor 500+ SaaS applications, delivering insights to 20+ clients for efficient SaaS discovery. Ensured data privacy and security throughout."
  },
  {
    title: "SDE-1",
    company: "Medibuddy",
    date: "June 2022 - Feb 2023",
    description: "Developed the Medibuddy Gold homepage using Server-Side Rendering, achieving a 9% increase in renewals within a quarter. Implemented a cohort-based architecture for patients across various modules, providing valuable insights for feature experimentation to the product team. Contributed to pricing strategies and discount offers. Enhanced the Lab-to-Consultation module's efficiency from 80% to 99.9% by adopting an event-based architecture. Led the implementation of security protocols for microservices, focusing on request authorization and validation, while improving data protection by migrating sensitive information to AWS Secret Manager."
  },
    {
    title: "SDE Intern",
    company: "Zluri",
    date: "Jult 2021 - May 2022",
    description: "Developed connectors for over 75 integrations, including Notion, Zoho, and GitHub, facilitating seamless data collection and analysis for organizational insights on usage and payments. Created automated workflows using n8n for employee onboarding and offboarding, significantly streamlining user access management by efficiently granting, revoking, and managing user permissions. This enhanced operational efficiency and improved the overall onboarding experience for employees."
  }
];

// https://swiperjs.com/demos#pagination-dynamic

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Previous Experience</h5>
      <h2>EXPERIENCE</h2>
      <Swiper
        className="container testiomonials__container"
        // install Swiper modules
        modules={[Pagination]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map(({ title, company, date, description }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <h3 className="coworker__name">{title}</h3>
              <h4 className="coworker__name">{company}</h4>
              <h5 className="coworker__name">{date}</h5>
              <small className="coworker__review">{description}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
