import React, { useState, useEffect } from "react";
import "./main.css";
import { BiSolidSun } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
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
        <nav className={`nav-header ${scrolled ? "nav-header-scrolled" : ""}`}>
            <h1 className="nav-header-item">
                <a href="/" className="nav-title-a">
                    Portfolio
                </a>
            </h1>
            <div className="flex-buffer"></div>
            <ul className="nav-header-item nav-list" id="nav-bar">
                <a
                    href="#"
                    className={`nav-flex-item  ${
                        showMenu ? "nav-show-items" : ""
                    }`}
                >
                    Home
                </a>
                <a
                    href="#about"
                    className={`nav-flex-item  ${
                        showMenu ? "nav-show-items" : ""
                    }`}
                >
                    About
                </a>
                <a
                    href="#projects"
                    className={`nav-flex-item  ${
                        showMenu ? "nav-show-items" : ""
                    }`}
                >
                    Projects
                </a>
                <a
                    href="#skills"
                    className={`nav-flex-item  ${
                        showMenu ? "nav-show-items" : ""
                    }`}
                >
                    Skills
                </a>

                <div className="flex-buffer"></div>
                <a
                    href="#footer"
                    className={` nav-flex-item  ${
                        showMenu ? "nav-show-items" : ""
                    }`}
                >
                    Contact Me
                </a>
            </ul>
            <button
                className="menu-icon nav-header-item"
                onClick={() => setShowMenu((prev) => !prev)}
            >
                <HiMenu />
            </button>
        </nav>
    );
}
