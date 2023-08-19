import React, { useState, useEffect } from "react";
import "./main.css";
import { GoArrowUp } from "react-icons/go";
import useIntersectionObserver from "./useIntersectionObserver";
export default function Hero() {
    const [showItems, setShowItems] = useState(false);
    const [targetRef, isIntersecting] = useIntersectionObserver({
        rootMargin: "0px",
        threshold: 0.5,
    });
    useEffect(() => {
        if (isIntersecting) {
            setShowItems(true);
        }
    }, [isIntersecting]);
    const [w, setW] = useState(window.innerWidth);
    const [h, setH] = useState(window.innerHeight);
    useEffect(() => {
        const updateViewportDimensions = () => {
            setW(window.innerWidth);
            setH(window.innerHeight);
        };
        updateViewportDimensions();

        window.addEventListener("resize", updateViewportDimensions);

        return () => {
            window.removeEventListener("resize", updateViewportDimensions);
        };
    }, []);
    let imageSrc = `https://picsum.photos/id/6/${w}/${h}`;

    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <main ref={targetRef} className="section hero">
            <div className="wrapper">
                <div className="bg-image-container">
                    <div className="bg-image">
                        <img src={imageSrc} alt="bg"></img>
                    </div>
                </div>
                <div className="hero-content">
                    <h3
                        className={`${
                            showItems ? "show-item-side" : "hide-item-side"
                        }`}
                    >
                        Hello, I am
                    </h3>
                    <h1
                        className={`${
                            showItems ? "show-item-side" : "hide-item-side"
                        }`}
                    >
                        <span style={{ color: "rgb(7, 136, 255)" }}>
                            Rajeshwar Reddy
                        </span>{" "}
                        Kolimi
                    </h1>
                    <h2
                        className={`${
                            showItems ? "show-item-side" : "hide-item-side"
                        }`}
                    >
                        Full Stack Developer
                    </h2>
                    <div className={`flex-list`}>
                        <a href="#projects" className="buttons-special">
                            Projects
                        </a>
                        <a href="#about" className="buttons">
                            About
                        </a>
                    </div>
                </div>
            </div>
            <a
                href="#"
                className={`go-top ${scrolled ? "go-top-scrolled" : ""}`}
            >
                <GoArrowUp />
            </a>
        </main>
    );
}
