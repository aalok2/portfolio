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
    title: "Web Development and Design Intern",
    company: "Sails Software Solutions",
    date: "January 2022 - June 2022",
    description: "I constructed a robust full-stack application by building a RESTful API using Django's MVT framework. I effectively managed over 10 endpoints, ensuring seamless communication between the frontend and backend. Additionally, I designed a responsive user interface in Angular to elevate the overall user experience. My contributions extended to website redesigns aimed at enhancing navigation and improving visual aesthetics."
  },
  {
    title: "Data Analysis Intern",
    company: "QUEST Global Engineering Pvt. Ltd.",
    date: "May 2021 - Aug 2021",
    description: "I streamlined dataset analysis to expedite high-value aerospace orders, boosting our performance maturity by 15% and automating anomaly detection. I analyzed aerospace datasets, uncovering an average of 55 defects per model weekly. I processed data for daily testing and enhanced visualization methods for weekly defect reports to our team."
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
