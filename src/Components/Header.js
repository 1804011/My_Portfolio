import React from "react";

const Header = () => {
  const element = (
    <>
      <li className="mr-2 p-0 bg-transparent">
        <a className="bg-transparent">Home</a>
      </li>

      <li>
        <a className="bg-transparent" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="bg-transparent">My Skills</a>
      </li>
      <li>
        <a className="bg-transparent">My Projects</a>
      </li>
      <li>
        <a className="bg-transparent">Contact</a>
      </li>
      <li>
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
    <div class="navbar lg:px-[168px] sticky  top-0 z-20 bg-[white] shadow-sm">
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
            class="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
          >
            {element}
          </ul>
        </div>
        <a class=" normal-case text-xl text-gradient">Sharif</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{element}</ul>
      </div>
    </div>
  );
};

export default Header;
