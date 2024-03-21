import React from "react";
import "./main.css";
import { CgClose } from "react-icons/cg";
import { FiExternalLink } from "react-icons/fi";
import { BiLogoGithub } from "react-icons/bi";
export default function ProjectPopup(props) {
    const { setShowProject, title, imgSrc, skills, description, git, web } =
        props;
    return (
        <div
            className="project-popup-overlay"
            onClick={(e) => {
                if (e.target.className === "project-popup-overlay")
                    setShowProject(false);
            }}
        >
            <div className="project-popup">
                <div className="popup-header">
                    <h2>{title}</h2>
                    {git !== "" && (
                        <a href={git} target="_blank">
                            <BiLogoGithub className="popup-link-icon" />
                        </a>
                    )}
                    {web !== "" && (
                        <a href={web} target="_blank">
                            <FiExternalLink className="popup-link-icon" />
                        </a>
                    )}
                    <div className="flex-buffer"></div>
                    <button
                        onClick={() => setShowProject(false)}
                        className="popup-close"
                    >
                        <CgClose />
                    </button>
                </div>
                <div className="project-details">
                    <div className="popup-image">
                        <a href={web} target="_blank">
                            <img src={`${imgSrc}`} alt="project" />
                        </a>
                    </div>
                    <div className="project-info">
                        <h3>Skills Used</h3>
                        <ul className="project-skills">
                            {skills.map((skill, key) => (
                                <li key={key} className="skill-used">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                        <h3>Description</h3>
                        <div className="project-description">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
