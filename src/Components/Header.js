import React from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
const Header = () => {
  const scroll = (id) => {
    window.location.href = "/#" + id;
  };
  const element = (
    <>
      <li className=" p-0 bg-white">
        <Link to="/#home" onlick={() => scroll("home")}>
          Home
        </Link>
      </li>

      <li className="bg-white">
        <Link to="/about">About</Link>
      </li>
      <li className="bg-white">
        <Link
          to="/#my-skill"
          onClick={() => scroll("my-skill")}
          smooth={true}
          duration={150}
        >
          My Skills
        </Link>
      </li>
      <li className="bg-white">
        <Link to="/#my-projects" onClick={() => scroll("my-projects")}>
          My Projects
        </Link>
      </li>
      <li className="bg-white">
        <Link to="/#contact" onClick={() => scroll("contact")}>
          Contact
        </Link>
      </li>
      <li className="bg-white">
        <Link to="/blogs">Blogs</Link>
      </li>
      <li className="bg-white">
        <button className="py-2 my-2 lg:mx-3 uppercase btn text-white font-bold text-sm px-5">
          <a
            href="Shariful_Islam_resume (final).pdf"
            target={"_blank"}
            download
          >
            download Resume
          </a>
        </button>
      </li>
    </>
  );
  return (
    <div class="navbar lg:px-[168px]  sticky  top-0 z-20 bg-[white] shadow-sm">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="bg-white menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
          >
            {element}
          </ul>
        </div>
        <a class=" normal-case text-xl text-gradient">Sharif</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 opacity-100">{element}</ul>
      </div>
    </div>
  );
};

export default Header;
