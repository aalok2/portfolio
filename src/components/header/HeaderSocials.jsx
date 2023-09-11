import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/divyasri-naraharisetti/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/divyasrinaraharisetti">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
