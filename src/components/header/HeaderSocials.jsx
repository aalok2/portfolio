import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://leetcode.com/DivyasriN/">
        <SiLeetcode />
      </a>
      <a href="https://www.linkedin.com/in/divyasri-naraharisetti/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/divyasrinaraharisetti">
        <FaGithub />
      </a>
    </div>
  );
};

// https://react-icons.github.io/react-icons/
export default HeaderSocials;
