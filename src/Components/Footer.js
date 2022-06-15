import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Github from "../Images/Github.svg";
const Footer = () => {
  return (
    <footer class="footer footer-center bg-[#050505]   text-white font-bold py-8">
      <div>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
