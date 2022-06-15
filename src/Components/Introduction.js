import React from "react";
import bannerImage from "../Images/bannerImage.png";
const Introduction = () => {
  return (
    <div class="hero lg:py-[64px]" id="about">
      <div class="hero-content lg:w-3/4  flex-col lg:flex-row  ">
        <img src={bannerImage} width={450} height={450} className="img-fluid" />
        <div className="lg:ml-[64px]">
          <h1 class="text-3xl font-bold uppercase intro-h1">LET ME</h1>
          <h1 class="text-3xl font-bold uppercase my-3 intro-h1">
            Introduce myself
          </h1>
          <p class="py-6 text-xl my-2 lg:my-0 intro-p">
            I am Shariful Islam.I am studying B.Sc in Engineering(CSE) in
            Chittagong University of Engineering & Technology.I am a MERN stack
            developer who can develop professional.I also have medium level of
            knowledge about Mysql.
          </p>
          <button className="py-2 my-2 uppercase  font-bold text-sm px-5 intro-btn">
            More About Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
