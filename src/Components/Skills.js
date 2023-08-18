import React, { useState, useEffect } from "react";
import "./main.css";
import {
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoJavascript,
    BiLogoJava,
    BiLogoReact,
    BiLogoNodejs,
    BiLogoMongodb,
    BiLogoGithub,
    BiLogoGit,
} from "react-icons/bi";
import { PiGraph } from "react-icons/pi";
import { SiExpress, SiMysql } from "react-icons/si";
import useIntersectionObserver from "./useIntersectionObserver.js";
export default function Skills() {
    const [showItems, setShowItems] = useState(false);
    const [targetRef, isIntersecting] = useIntersectionObserver({
        rootMargin: "0px",
        threshold: 0.2,
    });
    useEffect(() => {
        if (isIntersecting) setShowItems(true);
    }, [isIntersecting]);
    return (
        <section ref={targetRef} id="skills" className="section skills-section">
            <h2 className="section-header">Skills</h2>
            <ul className="skills">
                <li
                    className={` skill-item ${
                        showItems ? "show-item" : "hide-item"
                    }`}
                >
                    <BiLogoHtml5
                        style={{ color: "#e34f26" }}
                        className="skill-icon"
                    />
                    HTML
                </li>
                <li
                    className={` skill-item ${
                        showItems ? "show-item" : "hide-item"
                    }`}
                >
                    <BiLogoCss3
                        style={{ color: "#002561" }}
                        className="skill-icon"
                    />
                    CSS
                </li>
                <li
                    className={` skill-item ${
                        showItems ? "show-item" : "hide-item"
                    }`}
                >
                    <BiLogoJavascript
                        style={{ color: "#f7df1e" }}
                        className="skill-icon"
                    />
                    JavaScript
                </li>
                <li
                    className={` skill-item ${
                        showItems ? "show-item" : "hide-item"
                    }`}
                >
                    <BiLogoReact
                        style={{ color: "#00d8ff" }}
                        className="skill-icon"
                    />
                    React.js
                </li>
                <li
                    className={` skill-item ${
                        showItems ? "show-item" : "hide-item"
                    }`}
                >
                    <BiLogoJava
                        style={{ color: "#5382a1" }}
                        className="skill-icon"
                    />
                    Java
                </li>
                <li
                    className={` skill-item ${
                        showItems ? "show-item" : "hide-item"
                    }`}
                >
                    <BiLogoNodejs
                        style={{ color: "#215732" }}
                        className="skill-icon"
                    />
                    Node.js
                </li>
                <li
                    className={` skill-item ${
                        showItems ? "show-item" : "hide-item"
                    }`}
                >
                    <SiExpress
                        style={{ color: "#333333" }}
                        className="skill-icon"
                    />
                    Express.js
                </li>
                <li
                    className={` skill-item ${
                        showItems ? "show-item" : "hide-item"
                    }`}
                >
                    <SiMysql
                        style={{ color: "#00758f" }}
                        className="skill-icon"
                    />
                    MySQL
                </li>
                <li
                    className={` skill-item ${
                        showItems ? "show-item" : "hide-item"
                    }`}
                >
                    <BiLogoMongodb
                        style={{ color: "#589636" }}
                        className="skill-icon"
                    />
                    MongoDB
                </li>
                <li
                    className={` skill-item ${
                        showItems ? "show-item" : "hide-item"
                    }`}
                >
                    <BiLogoGithub
                        style={{ color: "#333" }}
                        className="skill-icon"
                    />
                    Github
                </li>
                <li
                    className={` skill-item ${
                        showItems ? "show-item" : "hide-item"
                    }`}
                >
                    <BiLogoGit
                        style={{ color: "#F1502F" }}
                        className="skill-icon"
                    />
                    Git
                </li>
                <li
                    className={` skill-item ${
                        showItems ? "show-item" : "hide-item"
                    }`}
                >
                    <PiGraph
                        style={{ color: "#C70039" }}
                        className="skill-icon"
                    />
                    DSA
                </li>
            </ul>
        </section>
    );
}
