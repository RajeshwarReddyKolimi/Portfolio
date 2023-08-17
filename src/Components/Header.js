import React, { useState, useEffect } from "react";
import "./main.css";
import { BiSolidSun } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
export default function Header() {
    function showMenu() {
        document.getElementById("nav-bar").classList.toggle("nav-show-items");
    }
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
        <nav className={`nav-header ${scrolled ? "nav-header-scrolled" : ""}`}>
            <h1 className="nav-header-item">
                <a href="/" className="nav-title-a">
                    Portfolio
                </a>
            </h1>
            <div className="flex-buffer"></div>
            <ul className="nav-header-item nav-list" id="nav-bar">
                <a href="#" className="nav-flex-item">
                    Home
                </a>
                <a href="#about" className="nav-flex-item">
                    About
                </a>
                <a href="#projects" className="nav-flex-item">
                    Projects
                </a>
                <a href="#skills" className="nav-flex-item">
                    Skills
                </a>

                <div className="flex-buffer"></div>
            </ul>
            <a href="#footer" className="buttons-special">
                Contact Me
            </a>
            <button className="menu-icon nav-header-item" onClick={showMenu}>
                <HiMenu />
            </button>
        </nav>
    );
}
