import React, { useState, useEffect } from "react";
import "./main.css";
import ProjectCard from "./ProjectCard";
import useIntersectionObserver from "./useIntersectionObserver";
export default function Projects() {
    const [showItems, setShowItems] = useState(false);
    const [targetRef, isIntersecting] = useIntersectionObserver({
        rootMargin: "0px",
        threshold: 0.2,
    });
    useEffect(() => {
        if (isIntersecting) {
            setShowItems(true);
        }
    }, [isIntersecting]);
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
    const skills2 = [
        "HTML",
        "CSS",
        "React.js",
        "JavaScript",
        "Responsive",
        "Git",
        "GitHub",
    ];
    const skillsGame = [
        "HTML",
        "CSS",
        "React.js",
        "JavaScript",
        "Git",
        "GitHub",
    ];
    const skills4 = [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "Responsive",
        "Git",
        "GitHub",
    ];
    const skills5 = [
        "ESP32",
        "Pressure Sensor",
        "Temperature Sensor",
        "Arduino IDE",
    ];
    const skills6 = ["Arduino", "Arduino IDE", "GPS", "GSM"];
    const skills8 = [
        "HTML",
        "CSS",
        "React.js",
        "JavaScript",
        "REST APIs",
        "Git",
        "GitHub",
    ];
    const skillsEcom = [
        "HTML",
        "CSS",
        "React",
        "Redux",
        "JavaScript",
        "Node",
        "Express",
        "MongoDB",
        "Git",
        "GitHub",
        "Responsive",
        "JWT",
    ];
    const skillsChat = [
        "HTML",
        "CSS",
        "React",
        "Redux",
        "JavaScript",
        "Node",
        "Express",
        "Socket.io",
        "MongoDB",
        "Git",
        "GitHub",
        "Responsive",
        "JWT",
    ];
    return (
        <section
            ref={targetRef}
            id="projects"
            className="section projects-section"
        >
            <h2 className="section-header">Projects</h2>
            <div className="projects">
                <ProjectCard
                    showItems={showItems}
                    imgSrc="/BlackBasket.png"
                    title="BlackBasket"
                    skills={skillsEcom}
                    git="https://github.com/RajeshwarReddyKolimi/BlackBasket"
                    web="https://blackbasket-by-rajeshwar.netlify.app/"
                    description="
• BlackBasket is a fully responsive eCommerce website built from scratch using the MERN stack and Redux Toolkit.
• User log in and security are implemented with JSON Web Tokens (JWT) for authentication.
• Has separate dashboards for admins and users. Admins can manage products and coupons by adding, updating, or
deleting them. Admins also have the ability to block, unblock, or remove users.
• Users can easily navigate, search for products, and apply filters. Users can add products to their cart, save items for
later, apply coupons during checkout, manage addresses, submit queries, and review products."
                />
                <ProjectCard
                    showItems={showItems}
                    imgSrc="/chitchat.png"
                    title="ChitChat"
                    skills={skillsChat}
                    git="https://github.com/RajeshwarReddyKolimi/ChatApplication"
                    web="https://chitchat-by-rajeshwar.netlify.app/"
                    description="ChitChat is a chat application built using Socket.io and MERN stack where users can register and chat individually"
                />
                <ProjectCard
                    showItems={showItems}
                    imgSrc="/MovieAPI.png"
                    title="MovieBase"
                    skills={skills8}
                    git="https://github.com/RajeshwarReddyKolimi/MovieBase"
                    web="https://moviebase-by-rajeshwar.netlify.app/"
                    description="The MovieBase is a React and RESTAPI based web application which has the data of various Movies, Series, Artists, etc. This data is taken from TMDB API. The Site has features like Searching Movies, Series, Artists; view detailed information regarding each; various filtering options like language, genre, year, rating, etc; provides Streaming platform  information for each Movie and Series."
                />
                <ProjectCard
                    showItems={showItems}
                    imgSrc="/Portfolio.png"
                    title="Portfolio"
                    skills={skills2}
                    git="https://github.com/RajeshwarReddyKolimi/Portfolio"
                    web="https://portfolio-rajeshwar.netlify.app/"
                    description="Portfolio is a React based website which features my personal and professional information. It provides basic details of me, skills, projects, contact details in a attractive manner."
                />
                <ProjectCard
                    showItems={showItems}
                    imgSrc="/TaskManager.png"
                    title="Task Manager"
                    skills={skills1}
                    git="https://github.com/RajeshwarReddyKolimi/Task-Manager-App"
                    web="https://task-manager-by-rajeshwar.netlify.app/"
                    description="Task Manager is a web application which allows users to Login/Signup, add, delete, update tasks, set deadlines, set priorities. The website is built using MERN stack and is responsive."
                />
                <ProjectCard
                    showItems={showItems}
                    imgSrc="/gameZone.png"
                    title="GameZone"
                    skills={skillsGame}
                    git="https://github.com/RajeshwarReddyKolimi/GameZone"
                    web="https://gamezone-by-rajeshwar.netlify.app/"
                    description="GameZone is a React based gaming site which has board games like Tic-Tac-Toe and Card matching Memory Game"
                />
                <ProjectCard
                    showItems={showItems}
                    imgSrc="/BlogSite.png"
                    title="Blog-Site"
                    skills={skills4}
                    git="https://github.com/RajeshwarReddyKolimi/Rentera-blog"
                    web="https://rajeshwarreddykolimi.github.io/Rentera-blog/"
                    description="This is a project created to a startup company to display its blogs in a simple and good looking way. It is built using HTML, CSS, JavaScript and Bootstrap."
                />
                <ProjectCard
                    showItems={showItems}
                    imgSrc="/PressureSensor.png"
                    title="Smart Pressure Sensing System"
                    skills={skills5}
                    git=""
                    web=""
                    description="Smart Pressure Sensing or Monitoring System is a practical project which helps to automate the current pressure monitoring system. It has features like remote pressure monitoring and alert system. The main technologies involved are Arduino programming, sensors, ESP32."
                />
                <ProjectCard
                    showItems={showItems}
                    imgSrc="/GPSTracker.png"
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
