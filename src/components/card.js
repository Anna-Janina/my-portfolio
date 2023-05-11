import React from "react";


function Card({project}) {
    return (
      <div className="flex flex-col items-center"> {/* Added flex and items-center classes */}
          <div
              className="w-96 h-44 border border-black bg-cover rounded-lg m-10"
              style={{
              backgroundImage: `url(${project.image})`,
              }}>
          </div>
          <div className="flex items-center justify-center">
              <h1>{project.title}</h1>
          </div>
          <div className="flex items-center justify-center"> {/* Added flex and justify-center classes */}
              <a href={project.url} target="_blank" rel="noopener noreferrer">Deployed App</a>
          </div>
          <div className="flex items-center justify-center"> {/* Added flex and justify-center classes */}
              <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
      </div>
    );
  }
  

export default Card;