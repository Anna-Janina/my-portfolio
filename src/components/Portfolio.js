import React from "react";
import Card from "./Card";
import img1 from "../images/Work-Day-Scheduler.png";
import img2 from "../images/Weather-Dashboard.png";
import img3 from "../images/Readme-Generator.png";
import img4 from "../images/Team-Profile-Generator.png";
import img5 from "../images/Note-Tacker.png";
import img6 from "../images/Social-Network-API.png";


function Portfolio() {
  const projects = [
    {
      title: "Work Day Scheduler",
      image: img1,
      url: "https://anna-janina.github.io/am-module-5/",
      repo: "https://github.com/Anna-Janina/am-module-5",
    },
    {
      title: "Weather Dashboard",
      image: img2,
      url: "https://anna-janina.github.io/am-module-6/",
      repo: "https://github.com/Anna-Janina/am-module-6",
    },
    {
      title: "Professional READEME Generator",
      image: img3,
      url: "https://drive.google.com/file/d/1eMitHFbqD-IVUfJkWLOgmeNQW_3rlYzJ/view",
      repo: "https://github.com/Anna-Janina/am-module-9",
    },
    {
      title: "Team Profile Generator",
      image: img4,
      url: "https://drive.google.com/file/d/1dXmGqH26mjqoCHhamt8bvfgkHr_Mpr_P/view",
      repo: "https://github.com/Anna-Janina/am-module-10",
    },
    {
      title: "Note Taker",
      image: img5,
      url: "https://note-taker-bootcamp.herokuapp.com/",
      repo: "https://github.com/Anna-Janina/am-module-11",
    },
    {
      title: "Social Network API",
      image: img6,
      url: "https://drive.google.com/file/d/1QEBbY-EfkfGWTT8ca2lDicFvMpJSnqNp/view",
      repo: "https://github.com/Anna-Janina/am-module-18",
    },
  ];

  return (
    <div className="mt-10 mb-14 flex flex-wrap">
      {projects.map((project, index) => {
        return <div className={`w-full sm:w-1/2 md:w-1/3 ${index % 4 === 3 ? "clear-left" : ""}`}>
          <Card key={index} project={project} />
        </div> 
      })}
    </div>
  );
}

export default Portfolio;
