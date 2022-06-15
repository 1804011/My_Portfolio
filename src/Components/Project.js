import React from "react";

const Project = ({ img, description, title, tech }) => {
  return (
    <div class="card w-96  bg-base-100 shadow-xl mx-auto lg:mx-0">
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
      </div>
    </div>
  );
};

export default Project;
