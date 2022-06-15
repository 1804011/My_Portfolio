import React from "react";
import Project from "./Project";
import pc_part_home from "../Images/pc_part_home.png";
import ass_11_home from "../Images/ass_11_home.png";
import a9_home from "../Images/a9_home.png";
import { Link } from "react-router-dom";
const MyProject = () => {
  return (
    <div className="my-[36px]" id="my-projects">
      <h1 className="text-3xl font-bold text-center">My Projects</h1>
      <div className="my-projects flex  flex-col lg:flex-row justify-center  gap-x-0 gap-y-8 lg:gap-x-8 my-[64px]">
        <Project
          title={"Pc Parts Manufacturer"}
          img={pc_part_home}
          description={
            "This is website for manufacturing different parts of personal computer such as,monitor,keyboard,mouse,ssd card etc."
          }
          live={"https://final-assignment-e7661.web.app"}
          git={"https://github.com/1804011/assignment-12-client"}
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

        <Project
          title={"Electronics Inventory"}
          img={ass_11_home}
          description={
            "This is a inventory management website for electronics devices.Suc as,mobile,laptop etc."
          }
          tech={[
            "React Js",
            "Node Js",
            "Firebase",
            "Heroku",
            "Express Js",
            "Mongodb",
          ]}
          git={"https://github.com/1804011/assignment-11-client"}
          live={"https://assignment-11-124e0.web.app"}
        />
        <Project
          title="Laptop Review Website"
          img={a9_home}
          description={
            "This is a laptop review website to implement react router dom and dashboard"
          }
          tech={["React Js", "React Router Dom", "Rechart", "Javascript"]}
          live="https://sharif-assigments9.netlify.app"
          git="https://github.com/1804011/assignment-9"
        />
      </div>
    </div>
  );
};

export default MyProject;
