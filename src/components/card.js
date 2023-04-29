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
      {/* <p>{project.description}</p> */}
      {/* <p>{project.url}</p> */}
      <div>
        <a href={project.url} target="-blank" rel="noopener noreferrer">Deployed App</a>
      </div>
      <div>
        <a href={project.repo} target="-blank" rel="noopener noreferrer">GitHub</a>
      </div>
      {/* <p>{project.repo}</p> */}
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
