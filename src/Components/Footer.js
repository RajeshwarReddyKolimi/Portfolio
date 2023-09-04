import React, { useState, useEffect } from "react";

import useIntersectionObserver from "./useIntersectionObserver";

import "./main.css";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import {
    BiLogoTwitter,
    BiLogoGithub,
    BiLogoLinkedinSquare,
    BiLogoInstagram,
} from "react-icons/bi";
export default function Footer() {
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
        <footer ref={targetRef} id="footer" className="section footer-section">
            <h2 className="section-header">Lets Connect</h2>
            <div className="contact-holder">
                <div className="contact-item">
                    <a
                        target="_blank"
                        href="https://www.google.com/maps/place/Kamareddy,+Telangana+503111/@18.3223638,78.3378195,14z/data=!3m1!4b1!4m6!3m5!1s0x3bcc4905804135f1:0xa2c7ddb16b831743!8m2!3d18.3204832!4d78.3369523!16zL20vMDhjbXFq?entry=ttu"
                        className={`contact-detail ${
                            showItems ? "show-item" : "hide-item"
                        }`}
                    >
                        <MdLocationOn className="contact-icons" />
                    </a>
                    <a
                        target="_blank"
                        href="tel:+917671817339"
                        className={`contact-detail ${
                            showItems ? "show-item" : "hide-item"
                        }`}
                    >
                        <IoMdCall className="contact-icons" />
                    </a>
                    <a
                        target="_blank"
                        href="mailto:kolimirajeshwarreddy@gmail.com"
                        className={`contact-detail ${
                            showItems ? "show-item" : "hide-item"
                        }`}
                    >
                        <MdEmail className="contact-icons" />
                    </a>
                </div>
                <div className="contact-detail">Coding Profiles:</div>
                <div className="contact-detail contact-item">
                    <a
                        target="_blank"
                        className={`${showItems ? "show-item" : "hide-item"}`}
                        href="https://leetcode.com/RajeshwarKolimi/"
                    >
                        <SiLeetcode
                            className="contact-icons"
                            style={{ color: "orange" }}
                        />
                    </a>
                    <a
                        target="_blank"
                        className={`${showItems ? "show-item" : "hide-item"}`}
                        href="https://auth.geeksforgeeks.org/user/kolimirajeshwarreddy"
                    >
                        <SiGeeksforgeeks
                            className="contact-icons"
                            style={{ color: "green" }}
                        />
                    </a>
                    <a
                        target="_blank"
                        className={`${showItems ? "show-item" : "hide-item"}`}
                        href="https://www.hackerrank.com/kolimirajeshwar1?hr_r=1"
                    >
                        <FaHackerrank
                            className="contact-icons"
                            style={{ color: "#2AB95E" }}
                        />
                    </a>
                </div>
                <div className="contact-detail">Social media:</div>
                <div className="contact-detail contact-item">
                    <a
                        target="_blank"
                        className={`${showItems ? "show-item" : "hide-item"}`}
                        href="https://github.com/RajeshwarReddyKolimi"
                    >
                        <BiLogoGithub
                            className="contact-icons"
                            style={{ color: "black" }}
                        />
                    </a>
                    <a
                        target="_blank"
                        className={`${showItems ? "show-item" : "hide-item"}`}
                        href="https://www.linkedin.com/in/rajeshwar-reddy-kolimi-38580821b/"
                    >
                        <BiLogoLinkedinSquare
                            className="contact-icons"
                            style={{ color: "#0a66c2" }}
                        />
                    </a>
                    <a
                        target="_blank"
                        className={`${showItems ? "show-item" : "hide-item"}`}
                        href="https://www.instagram.com/rajeshwarreddykolimi/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                    >
                        <BiLogoInstagram
                            className="contact-icons"
                            style={{ color: "#e1306c" }}
                        />
                    </a>
                    <a
                        target="_blank"
                        className={`${showItems ? "show-item" : "hide-item"}`}
                        href="https://twitter.com/RajeshwarKolimi?t=bpA098sY5VQw7rui5NdqPw&s=08"
                    >
                        <BiLogoTwitter
                            className="contact-icons"
                            style={{ color: "#1da1f2" }}
                        />
                    </a>
                </div>
                <div>
                    <a
                        href="https://drive.google.com/file/d/16axtkiqVPVur3MtB4sKI2or23ZvNmV32/view?usp=sharing"
                        className="buttons"
                        target="_blank"
                    >
                        View Resume
                    </a>
                </div>
            </div>
        </footer>
    );
}
