"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
    "Software Developer",
    "Full Stack Developer",
    "Mobile App Developer",
    "React Developer",
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting && displayText === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            timeout = setTimeout(
                () => {
                    setDisplayText(
                        isDeleting
                            ? currentRole.substring(0, displayText.length - 1)
                            : currentRole.substring(0, displayText.length + 1)
                    );
                },
                isDeleting ? 50 : 100
            );
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section id="home" aria-label="Hero section">
            {/* Animated background circles */}
            <div className="bg-circles" aria-hidden="true">
                <div className="bg-circle bg-circle-1"></div>
                <div className="bg-circle bg-circle-2"></div>
                <div className="bg-circle bg-circle-3"></div>
            </div>

            {/* Floating tech icons */}
            <div className="hero-floating-icons" aria-hidden="true">
                <span className="floating-icon floating-icon-1">⚛️</span>
                <span className="floating-icon floating-icon-2">🚀</span>
                <span className="floating-icon floating-icon-3">💻</span>
                <span className="floating-icon floating-icon-4">⚡</span>
            </div>

            <div className="container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p
                        className="hero-greeting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hello, I&apos;m
                    </motion.p>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Rahul Kumar
                    </motion.h1>

                    <motion.h2
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {displayText}
                        <span
                            style={{
                                borderRight: "2px solid var(--primary)",
                                marginLeft: "2px",
                                animation: "blink 1s step-end infinite",
                            }}
                        >
                            &nbsp;
                        </span>
                        <style jsx>{`
              @keyframes blink {
                50% { opacity: 0; }
              }
            `}</style>
                    </motion.h2>

                    <motion.p
                        className="hero-tagline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Building scalable apps that solve real problems.
                    </motion.p>

                    <motion.div
                        className="hero-cta-group"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                    >
                        <a href="#projects" className="hero-cta">
                            View My Work
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                            </svg>
                        </a>
                        <a href="#connect" className="btn-outline btn" style={{ borderRadius: "0.75rem" }}>
                            Get In Touch
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="hero-scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                aria-hidden="true"
            >
                <span className="scroll-text">Scroll</span>
                <div className="scroll-line">
                    <div className="scroll-dot"></div>
                </div>
            </motion.div>
        </section>
    );
}
