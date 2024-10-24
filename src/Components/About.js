import React, { useState, useEffect } from "react";

import useIntersectionObserver from "./useIntersectionObserver";

import "./main.css";

export default function About() {
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
    return (
        <section ref={targetRef} id="about" className="section about-section">
            <h2 className="section-header">About Me</h2>
            <div className="profile details-div section-inner">
                <img
                    className={`profile-pic ${
                        showItems ? "show-item" : "hide-item"
                    }`}
                    src="/ProfilePic2.jpg"
                    alt="profile"
                />

                <div className="primary-details">
                    <div
                        className={`detail ${
                            showItems ? "show-item" : "hide-item"
                        }`}
                    >
                        <b>Name:</b>&nbsp;Rajeshwar Reddy Kolimi
                    </div>
                    <div
                        className={`detail ${
                            showItems ? "show-item" : "hide-item"
                        }`}
                    >
                        <b>Age:</b>&nbsp;21
                    </div>
                    <div
                        className={`detail ${
                            showItems ? "show-item" : "hide-item"
                        }`}
                    >
                        <b>Degree:</b>
                        &nbsp;Bachelor of Engineering
                    </div>

                    <div
                        className={`detail ${
                            showItems ? "show-item" : "hide-item"
                        }`}
                    >
                        <b>Email:</b>&nbsp;
                        <a href="mailto:kolimirajeshwarreddy@gmail.com">
                            kolimirajeshwarreddy@gmail.com
                        </a>
                    </div>
                    <div
                        className={`detail ${
                            showItems ? "show-item" : "hide-item"
                        }`}
                    >
                        <b>Location:</b>&nbsp;Kamareddy, Telangana
                    </div>
                    <div
                        className={`detail ${
                            showItems ? "show-item" : "hide-item"
                        }`}
                    >
                        I am a 2023 Engineering graduate, currently full-stack
                        developer intern, eager to launch my career as a Full
                        Stack Developer. I have a solid foundation in computer
                        science and a passion for both front-end and back-end
                        development. I have good problem solving skills. I am
                        well-equipped to contribute to dynamic and innovative
                        projects.
                    </div>
                    <div
                        className={`detail ${
                            showItems ? "show-item" : "hide-item"
                        }`}
                    >
                        <a
                            href="https://drive.google.com/file/d/16axtkiqVPVur3MtB4sKI2or23ZvNmV32/view?usp=sharing"
                            className="buttons"
                            target="_blank"
                        >
                            View Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
