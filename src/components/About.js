import React from "react";
import img1 from "../images/Anna.jpeg";

function AboutMe() {
    return (
        <section className="container mx-auto">
            <div className="flex justify-between items-center py-10">
                <img className="w-44 h-44" src={img1} alt="Anna profile" />
                <p>Hello, my name is Anna. I switched my career from being a Dental Hygienist and Makeup Artist to become a Web Developer. </p>
            </div>
          



        </section>
    )
};

export default AboutMe;