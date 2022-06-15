import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch("Projects.json")
      .then((res) => res.json())
      .then((data) => setProject(data[id - 1]));
  }, []);
  const { title, ss, git, live, tech, description } = project;
  return (
    <div className="my-8">
      <h1 className="text-4xl text-center my-3 font-bold">{title}</h1>
      <p className="text-center text-xl font-semibold lg:w-1/2 mx-auto">
        {description}
      </p>
      <h2 className="text-3xl text-center font-bold my-4">
        Projects Screenshots
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:w-1/2 mx-auto gap-y-4 p-6">
        {ss?.map((img) => (
          <figure className="flex justify-center">
            <img
              src={img}
              className=" w-[95%] max-w-[90vw] shadow-xl border-2"
            ></img>
          </figure>
        ))}
      </div>
      <h2 className="text-3xl text-center font-bold my-4">Technology Used</h2>
      <div class="card-actions justify-center my-6">
        {tech?.map((t) => (
          <div class="badge badge-outline p-3">{t}</div>
        ))}
      </div>
      <h2 className="text-3xl text-center font-bold my-4">Site Links</h2>
      <div class="card-actions justify-center my-6">
        <div className="flex justify-center">
          <a href={live} target={"_blank"}>
            <button className="btn btn-sm btn-secondary w-auto">
              Live link
            </button>
          </a>
          <a href={git} target={"_blank"}>
            <button className="btn btn-sm btn-secondary w-auto mx-2">
              Github link
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
