import React, { useEffect, useState } from "react";
import "./main.css";
import ProjectPopup from "./ProjectPopup";
export default function ProjectCard(props) {
    const [showProject, setShowProject] = useState(false);
    const { imgSrc, title, skills, description, showItems } = props;
    useEffect(() => {
        if (showProject) document.body.classList.add("unscrollable");
        else document.body.classList.remove("unscrollable");
    }, [showProject]);
    return (
        <div>
            <div
                className={`project-item ${
                    showItems ? "show-item" : "hide-item"
                }`}
            >
                <img
                    className="project-image"
                    src={`${imgSrc}`}
                    alt="project"
                />
                <button
                    type="text"
                    className="project-title"
                    onClick={() => setShowProject(true)}
                >
                    {title}
                </button>
            </div>
            {showProject && (
                <ProjectPopup setShowProject={setShowProject} {...props} />
            )}
        </div>
    );
}
