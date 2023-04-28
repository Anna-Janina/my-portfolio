import React from "react";

function Card({project}) {
  return (
    <div
      className="card"
      style={{
        background: `url(${project.image})`,
      }}
    >
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
    // <div>
    //     <img src={project.image} alt={project.title} />
    //     <h2>
    //         {project.title}
    //     </h2>
    //     <p>
    //         {project.description}
    //     </p>
    // </div>
  );
}

export default Card;
