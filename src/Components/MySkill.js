import React from "react";
import Skill from "./Skill";

const MySkill = () => {
  return (
    <div
      className="my-8 flex flex-col align-items-center justify-center"
      id="my-skill"
    >
      <h2 className="text-3xl font-bold text-center">My Skills</h2>
      <div className="skills w-full lg:w-1/2 mx-auto my-[64px] px-4">
        <Skill title={"Html"} val={80} color={"green"}></Skill>
        <Skill title={"Css"} val={60} color={"blue"}></Skill>
        <Skill title={"Javascript"} val={52} color={"indigo"}></Skill>
        <Skill title={"React Js"} val={58} color={"lightblue"}></Skill>
        <Skill title={"Node Js"} val={35} color={"purple"}></Skill>
        <Skill title={"Express Js"} val={68} color={"lightgreen"}></Skill>
        <Skill title={"Mongodb"} val={40} color={"navy"}></Skill>
      </div>
    </div>
  );
};

export default MySkill;
