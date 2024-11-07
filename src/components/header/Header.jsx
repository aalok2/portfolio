import React from "react";
import ReactTyped from "react-typed";
import "./header.css";
import CTA from "./CTA";
// import header_picture from "../../assets/header-picture2.png";
import header_picture from "../../assets/headerPictureMain.jpg";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Hello I'm </h2>
        <h1>Aalok Bhairraju</h1>
        <h2> {" "} 
        <ReactTyped
          strings={["Full Stack Developer", "Software Developer"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          showCursor={true}
        />
        </h2>
        <CTA />
        <HeaderSocials />
        <div className="aalok">
          <img className='aalok-picture' src={header_picture} alt="divyasrinaraharisetti" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
