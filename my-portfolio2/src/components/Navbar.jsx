import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Resume from "../assets/Resume.pdf"
// import logo from "../assets/My-Logo.png";
const Navbar = () => {
  return (
    <nav className="lg:ml-24 mb-20 flex items-center justify-between py-6">
      <div className="flex cursor-pointer text-4xl flex-shrink-0 items-center">
        MS
      </div>
     
      <div className="lg:mr-48 m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/m-samee/"><FaLinkedin /></a>
        <a href="https://github.com/samiawais"><FaGithub /></a>
        <a href="https://www.instagram.com/samiawais_/"><FaInstagram /></a>
      </div>
      {/* <div>
        <a download='' href={Resume}>
          Resume
        </a>
      </div> */}
     
    </nav>
  );
};

export default Navbar;
