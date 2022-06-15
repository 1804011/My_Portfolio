import React from "react";
import Project from "./Project";
import pc_part_home from "../Images/pc_part_home.png";
import { Link } from "react-router-dom";
const MyProject = () => {
  return (
    <div className="my-[36px]">
      <h1 className="text-3xl font-bold text-center">My Projects</h1>
      <div className="my-projects flex  flex-col lg:flex-row justify-center  gap-x-0 gap-y-8 lg:gap-x-8 my-[64px]">
        <a href="https://final-assignment-e7661.web.app" target={"_blank"}>
          <Project
            title={"Pc Parts Manufacturer"}
            img={pc_part_home}
            description={
              "This is website for manufacturing different parts of personal computer such as,monitor,keyboard,mouse,ssd card etc."
            }
            tech={[
              "React Js",
              "Mongodb",
              "Heroku",
              "Firebase",
              "Daisyui",
              "Express Js",
              "Node Js",
            ]}
          />
        </a>
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default MyProject;
