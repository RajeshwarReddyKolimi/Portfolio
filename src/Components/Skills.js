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
    BiLogoRedux,
    BiLogoSpringBoot,
} from "react-icons/bi";
import { PiBracketsCurly, PiBracketsCurlyBold, PiGraph } from "react-icons/pi";
import { SiExpress, SiMysql, SiNeo4J } from "react-icons/si";
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
            <ul className="skills section-inner">
                <li
                    className={` skill-item ${
                        showItems ? "show-item" : "hide-item"
                    }`}
                >
                    <PiGraph
                        style={{ color: "#C70039" }}
                        className="skill-icon"
                    />
                    <p> DSA</p>{" "}
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
                    <p> Java</p>{" "}
                </li>
                <li
                    className={` skill-item ${
                        showItems ? "show-item" : "hide-item"
                    }`}
                >
                    <BiLogoHtml5
                        style={{ color: "#e34f26" }}
                        className="skill-icon"
                    />
                    <p> HTML</p>{" "}
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
                    <p> CSS</p>{" "}
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
                    <p> JavaScript</p>{" "}
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
                    <p> React.js</p>{" "}
                </li>
                <li
                    className={` skill-item ${
                        showItems ? "show-item" : "hide-item"
                    }`}
                >
                    <BiLogoRedux
                        style={{ color: "#764abc" }}
                        className="skill-icon"
                    />
                    <p> Redux</p>{" "}
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
                    <p> Node.js</p>{" "}
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
                    <p> Express.js</p>{" "}
                </li>
                <li
                    className={` skill-item ${
                        showItems ? "show-item" : "hide-item"
                    }`}
                >
                    <BiLogoSpringBoot
                        style={{ color: "#87BD48" }}
                        className="skill-icon"
                    />
                    <p> Spring Boot</p>{" "}
                </li>
                <li
                    className={` skill-item ${
                        showItems ? "show-item" : "hide-item"
                    }`}
                >
                    <SiNeo4J
                        style={{ color: "black" }}
                        className="skill-icon"
                    />
                    <p> Neo4J</p>{" "}
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
                    <p> MySQL</p>{" "}
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
                    <p> MongoDB</p>{" "}
                </li>
                <li
                    className={` skill-item ${
                        showItems ? "show-item" : "hide-item"
                    }`}
                >
                    <PiBracketsCurly
                        style={{ color: "black" }}
                        className="skill-icon"
                    />
                    <p>REST API</p>{" "}
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
                    <p> Github</p>{" "}
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
                    <p> Git</p>{" "}
                </li>
            </ul>
        </section>
    );
}
