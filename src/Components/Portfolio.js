import React, { useRef, useEffect, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";
import "./main.css";
import Experience from "./Experience";
export default function Portfolio() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Footer />
        </div>
    );
}
