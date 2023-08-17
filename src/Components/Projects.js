import React from "react";
import "./main.css";
import ProjectCard from "./ProjectCard";
import { BiLogoChrome } from "react-icons/bi";
export default function Projects() {
    const skills1 = [
        "HTML",
        "CSS",
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git",
        "GitHub",
        "Responsive",
        "JWT",
    ];
    const skills2 = ["HTML", "CSS", "React.js", "JavaScript", "Responsive"];

    const skills3 = ["HTML", "CSS", "React.js", "JavaScript"];
    const skills4 = ["HTML", "CSS", "Bootstrap", "JavaScript", "Responsive"];
    const skills5 = [
        "ESP32",
        "Pressure Sensor",
        "Temperature Sensor",
        "Arduino IDE",
    ];
    const skills6 = ["Arduino", "Arduino IDE", "GPS", "GSM"];
    return (
        <section id="projects" className="section projects-section">
            <h2 className="section-header">Projects</h2>
            <div className="projects">
                <ProjectCard
                    imgSrc="5"
                    title="Task Manager"
                    skills={skills1}
                    git="https://github.com/RajeshwarReddyKolimi/Task-Manager-App"
                    web="https://task-manager-by-rajeshwar.netlify.app/"
                    description="Task Manager is a web application which allows users to Login/Signup, add, delete, update tasks, set deadlines, set priorities. The website is built using MERN stack and is responsive."
                />
                <ProjectCard
                    imgSrc="55"
                    title="Portfolio"
                    skills={skills2}
                    git="https://github.com/RajeshwarReddyKolimi/Portfolio"
                    web="https://portfolio-rajeshwar.netlify.app/"
                    description="Portfolio is a React based website which features my personal and professional information. It provides basic details of me, skills, projects, contact details in a attractive manner."
                />
                <ProjectCard
                    imgSrc="85"
                    title="Tic-Tac-Toe"
                    skills={skills3}
                    git="https://github.com/RajeshwarReddyKolimi/TicTacToe"
                    web=""
                    description="Tic-Tac-Toe is a classic two player game everyone played atleast once. This is built using React. It uses the basic React concepts in its functionality."
                />
                <ProjectCard
                    imgSrc="29"
                    title="Blog-Site"
                    skills={skills4}
                    git="https://github.com/RajeshwarReddyKolimi/Rentera-blog"
                    web="https://rajeshwarreddykolimi.github.io/Rentera-blog/"
                    description="This is a project created to a startup company to display its blogs in a simple and good looking way. It is built using HTML, CSS, JavaScript and Bootstrap."
                />
                <ProjectCard
                    imgSrc="400"
                    title="Smart Pressure Sensing System"
                    skills={skills5}
                    git=""
                    web=""
                    description="Smart Pressure Sensing or Monitoring System is a practical project which helps to automate the current pressure monitoring system. It has features like remote pressure monitoring and alert system. The main technologies involved are Arduino programming, sensors, ESP32."
                />
                <ProjectCard
                    imgSrc="289"
                    title="Vehicle Tracking System"
                    skills={skills6}
                    git=""
                    web=""
                    description="This is a GPS and GSM based vehicle tracking system. It is built using Arduino, GPS and GSM. It effectively tracks the vehicles location by GPS and allows navigation through GSM."
                />
            </div>
        </section>
    );
}
