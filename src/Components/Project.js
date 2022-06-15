import React from "react";

const Project = ({ img, description, title, tech, live, git }) => {
  return (
    <div class="card w-72 lg:w-96  bg-base-100 shadow-xl mx-auto lg:mx-0">
      <figure>
        <img src={img} alt={img} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {title}
          {/* <div class="badge badge-secondary">NEW</div> */}
        </h2>
        <p>{description}</p>
        <div class="card-actions justify-center my-4">
          {tech?.map((t) => (
            <div class="badge badge-outline">{t}</div>
          ))}
        </div>
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
        <button className="btn btn-outline btn-primary mt-5">
          Explore Detail
        </button>
      </div>
    </div>
  );
};

export default Project;
