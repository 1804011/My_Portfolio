import React from "react";
import sharif from "../Images/sharif.jpg";
import "./Banner..css";
const Banner = () => {
  return (
    <div class="hero min-h-screen -z-10">
      <div class="hero-content flex-col lg:flex-row-reverse lg:justify-between lg:w-3/4">
        <img
          src={sharif}
          class="max-w-lg rounded-lg shadow-2xl"
          width={250}
          height={250}
          className="lg:mr-[124px]"
        />
        <div>
          <h1 class="text-4xl font-bold my-3 first relative">Hey</h1>
          <h1 class="text-5xl font-bold uppercase name">I am Sharif</h1>
          <p class="pt-2 text-2xl font-semibold">Mern Stack Developer</p>
          {/* <button class="btn border-0  bg-gradient-to-r from-primary to-secondary ... my-4">
            Hire me
          </button>
          <button class="btn border-0 bg-secondary my-4 lg:mx-3">Get CV</button> */}
          <button className="py-2 my-2 uppercase  font-bold text-sm px-5">
            Hire me
          </button>
          <button className="py-2 my-2 lg:mx-3 uppercase  font-bold text-sm px-5">
            Get CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
