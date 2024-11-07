import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/aalok-bhairraju-395081170/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/aalok2">
        <FaGithub />
      </a>
    </div>
  );
};

// https://react-icons.github.io/react-icons/
export default HeaderSocials;
