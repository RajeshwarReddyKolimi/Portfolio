import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Footer from "./Footer";
import "./main.css";

export default function Portfolio() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Footer />
        </div>
    );
}
