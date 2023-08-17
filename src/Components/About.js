import React from "react";
import "./main.css";

export default function About() {
    return (
        <section id="about" className="section about-section">
            <h2>About Me</h2>
            <div className="details-div">
                <img
                    className="profile-pic"
                    src="/ProfilePic2.jpg"
                    alt="profile"
                    // width={"300px"}
                    // height={"452px"}
                />
                <div className="primary-details">
                    <h2 className="about-header">Who am I?</h2>
                    <div className="detail summary">
                        I am a 2023 Engineering graduate, eager to launch my
                        career as a Full Stack Developer. I have a solid
                        foundation in computer science and a passion for both
                        front-end and back-end development. Good problem solving skills. I am well-equipped
                        to contribute to dynamic and innovative projects.
                    </div>
                    <hr className="line" />
                    <div className="detail">
                        <b>Name:</b>&nbsp;Rajeshwar Reddy Kolimi
                    </div>
                    <div className="detail">
                        <b>Age:</b>&nbsp;21
                    </div>
                    <div className="detail">
                        <b>Degree:</b>
                        &nbsp;Bachelor of Engineering
                    </div>
                    <div className="detail">
                        <b>Course:</b>&nbsp;Electronics and Communications
                    </div>
                    <div className="detail">
                        <b>Study:</b>&nbsp;Matrusri Engineering College
                    </div>
                </div>
            </div>
        </section>
    );
}
