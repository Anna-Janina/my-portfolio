import React from "react";

function Card({project}) {
  return (
    <div
      className="w-96 h-44 border border-black bg-cover rounded-lg m-10"
      style={{
        background: `url(${project.image})`,
      }}>
      <h1>{project.title}</h1>
      <div>
        <a href={project.url} target="-blank" rel="noopener noreferrer">Deployed App</a>
      </div>
      <div>
        <a href={project.repo} target="-blank" rel="noopener noreferrer">GitHub</a>
      </div>
      
    </div>
  
  );
}

export default Card;
