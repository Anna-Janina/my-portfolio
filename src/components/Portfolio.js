import React from "react";
import Card from "./card";

import img1 from "../images/Anna.jpeg";

function Portfolio() {
  const projects = [
    {
      title: "title",
      description: "description",
      image: img1,
    },
    {
      title: "title",
      description: "description",
      image: img1,
    },
    {
      title: "title",
      description: "description",
      image: img1,
    },
  ];

  return (
    <div className="card-container">
      {projects.map((project, index) => {
        return <Card key={index} project={project} />;
      })}
    </div>
  );
}

export default Portfolio;
