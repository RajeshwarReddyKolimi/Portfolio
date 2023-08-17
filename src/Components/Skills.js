import React from "react";
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
export default function Skills() {
    return (
        <section id="skills" className="section skills-section">
            <h2 className="section-header">Skills</h2>
            <ul className="skills">
                <li className="skill-item">
                    <BiLogoHtml5
                        style={{ color: "#e34f26" }}
                        className="skill-icon"
                    />
                    <p className="skill-name">HTML</p>
                </li>
                <li className="skill-item">
                    <BiLogoCss3
                        style={{ color: "#002561" }}
                        className="skill-icon"
                    />
                    <p className="skill-name">CSS</p>
                </li>
                <li className="skill-item">
                    <BiLogoJavascript
                        style={{ color: "#f7df1e" }}
                        className="skill-icon"
                    />
                    <p className="skill-name">JavaScript</p>
                </li>
                <li className="skill-item">
                    <BiLogoReact
                        style={{ color: "#00d8ff" }}
                        className="skill-icon"
                    />
                    <p className="skill-name">React.js</p>
                </li>
                <li className="skill-item">
                    <BiLogoJava
                        style={{ color: "#5382a1" }}
                        className="skill-icon"
                    />
                    <p className="skill-name">Java</p>
                </li>
                <li className="skill-item">
                    <BiLogoNodejs
                        style={{ color: "#215732" }}
                        className="skill-icon"
                    />
                    <p className="skill-name">Node.js</p>
                </li>
                <li className="skill-item">
                    <SiExpress
                        style={{ color: "#333333" }}
                        className="skill-icon"
                    />
                    <p className="skill-name">Express.js</p>
                </li>
                <li className="skill-item">
                    <SiMysql
                        style={{ color: "#00758f" }}
                        className="skill-icon"
                    />
                    <p className="skill-name">MySQL</p>
                </li>
                <li className="skill-item">
                    <BiLogoMongodb
                        style={{ color: "#589636" }}
                        className="skill-icon"
                    />
                    <p className="skill-name">MongoDB</p>
                </li>
                <li className="skill-item">
                    <BiLogoGithub
                        style={{ color: "#333" }}
                        className="skill-icon"
                    />
                    <p className="skill-name">Github</p>
                </li>
                <li className="skill-item">
                    <BiLogoGit
                        style={{ color: "#F1502F" }}
                        className="skill-icon"
                    />
                    <p className="skill-name">Git</p>
                </li>
                <li className="skill-item">
                    <PiGraph
                        style={{ color: "#C70039" }}
                        className="skill-icon"
                    />
                    <p className="skill-name">DSA</p>
                </li>
            </ul>
        </section>
    );
}
