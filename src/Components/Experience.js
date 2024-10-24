import React, { useState, useEffect } from "react";
import "./main.css";
import useIntersectionObserver from "./useIntersectionObserver";
import { FiExternalLink } from "react-icons/fi";
export default function Experience() {
    const [showItems, setShowItems] = useState(false);
    const [targetRef, isIntersecting] = useIntersectionObserver({
        rootMargin: "0px",
        threshold: 0.2,
    });
    const [works, setWorks] = useState([
        {
            company: "AusMyWay",
            website: "https://www.ausmyway.com.au/",
            role: "Full-Stack Development Intern",
            startDate: "April 2024",
            endDate: "Current",
            description: [
                "Developing a sophisticated trip planning website from scratch using React.js, Node.js, Express, and Neo4J following REST architecture.",
                "Leading the design, development and deployment of both frontend and backend components to deliver a 100% safe and seamless user experience.",
            ],
            logo: "/ausmyway.png",
            skills: [
                "React.js",
                "Node.js",
                "Express",
                "Neo4J",
                "Git",
                "Github",
                "Google App Engine",
            ],
        },
        {
            company: "Rentera",
            website: "https://rentera.in/",
            role: "Frontend Development Intern",
            startDate: "September 2021",
            endDate: "October 2021",
            description: [
                "Collaborated with a 3-member team to develop a responsive blog viewing page.",
                "Learnt and utilized skills of HTML, CSS, JavaScript, Bootstrap in a practical project.",
            ],
            logo: "/rentera.png",
            skills: [
                "HTML",
                "CSS",
                "Javascript",
                "Responsive Design",
                "Github",
            ],
        },
    ]);
    useEffect(() => {
        if (isIntersecting) setShowItems(true);
    }, [isIntersecting]);
    return (
        <section
            ref={targetRef}
            id="experience"
            className="section experience-section"
        >
            <h2 className="section-header">Experience</h2>
            <div className="experience section-inner">
                {works?.map((work, id) => (
                    <div className="experience-item" key={id}>
                        <h3 className="experience-time">
                            {work?.startDate} - {work?.endDate}
                        </h3>
                        <div className="experience-details">
                            <div className="experience-title">
                                <img
                                    src={work?.logo}
                                    className="experience-item-logo"
                                />
                                <div>
                                    <h2>{work?.role}</h2>
                                    <h3>
                                        <span>{work?.company}</span>
                                        <a href={work?.website} target="_blank">
                                            <FiExternalLink className="popup-link-icon" />
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <h4>Skills:</h4>
                                <ul className="experience-skills">
                                    {work?.skills?.map((skill, id) => (
                                        <li key={id} className="skill-used">
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4>Responsibilities:</h4>
                                <ul className="experience-description">
                                    {work?.description?.map((desc, id) => (
                                        <li key={id}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
