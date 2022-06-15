import React from "react";
import sharif_final_2 from "../Images/sharif_final_2.png";
const About = () => {
  return (
    <div className="my-6 py-3">
      <h1 className="text-3xl font-bold text-center">Shariful Islam</h1>
      <p className="text-xl font-semibold my-6 text-center lg:w-1/2 mx-auto">
        I am Shariful Islam.I am from Chattogram.Now I am studying B.Sc in
        Engineering(CSE) from Chittagong University Of Engineering and
        Technology(CUET)
      </p>
      <p className="text-xl font-semibold my-6 text-center lg:w-1/2 mx-auto">
        I want to be a professional web developer and a good software engineer.
      </p>
      <h3 className="my-6 text-3xl text-center font-bold">My Skills</h3>
      <div className="flex justify-center gap-4 lg:w-1/2 flex-wrap mx-auto">
        <button className="btn btn-sm btn-outline block">Html</button>
        <button className="btn btn-sm btn-outline block">Css</button>
        <button className="btn btn-sm btn-outline block">Bootstrap</button>
        <button className="btn btn-sm btn-outline block">Tailwind Css</button>
        <button className="btn btn-sm btn-outline block">Javascript</button>
        <button className="btn btn-sm btn-outline block">React Js</button>
        <button className="btn btn-sm btn-outline block">Node Js</button>
        <button className="btn btn-sm btn-outline block">Express Js</button>
        <button className="btn btn-sm btn-outline block">Mongodb</button>
        <button className="btn btn-sm btn-outline block">
          Firebase authentication
        </button>
        <button className="btn btn-sm btn-outline block">Axios</button>
        <button className="btn btn-sm btn-outline block">Rechart</button>
        <button className="btn btn-sm btn-outline block">d3 Chart</button>
      </div>
    </div>
  );
};

export default About;
