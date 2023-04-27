import React from "react";

function Card({ project }) {
    return (
        <div>
            <img src={project.image} alt={project.title} />
            <h2>
                {project.title}
            </h2>
            <p>
                {project.description}
            </p>
        </div>
    )
}

export default Card