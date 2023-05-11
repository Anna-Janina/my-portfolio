import React from "react";
import img1 from "../images/Anna.jpeg";


function AboutMe() {
    return (
        <section className="container mx-auto mb-16">
            <div className="flex justify-center items-center py-16 mt-16">
                <img className="w-64 h-64 rounded-full mr-10" src={img1} alt="Anna profile" />
                <div className="px-8">
                    <p className="text-center md:text-left">I am a multifaceted individual with a diverse background and many life experiences. Originally from Germany, I started my career as a Dental Hygienist before moving to Australia where I transitioned into the world of Makeup Artistry and Teaching. 
                    <br></br>
                Now, I am pursuing my passion for technology by completing a Full Stack Coding Bootcamp at Monash University. Through this program, I have gained proficiency in various programming languages and tools such as JavaScript, React, HTML, CSS, Bootstrap, Tailwind, Visual Studio Code, SQL, Heroku, Git, MySQL, MongoDB, Node.js, Express, and MERN Stack. With my strong communication skills, ability to work well under pressure, and attention to detail, I am excited to bring my unique perspective and skill set to my next career opportunity. </p>
                </div>
            </div>
        </section>
    )
};


export default AboutMe;