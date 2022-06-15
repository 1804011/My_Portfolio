import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Github from "../Images/Github.svg";
import Linkedin from "../Images/Linkedin.svg";
const Footer = () => {
  return (
    <footer class="footer footer-center bg-primary  text-white font-bold py-8">
      <div>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>

        <div className="flex justify-center gap-3 mt-4">
          <a href="https://github.com/1804011" target={"_blank"}>
            <img src={Github} width={36} height={36}></img>
          </a>
          <a
            href="https://www.linkedin.com/in/shariful-islam-7a8b37198"
            target={"_blank"}
          >
            <img src={Linkedin} width={36} height={36}></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
