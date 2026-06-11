"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
    { value: "3+", label: "Projects" },
    { value: "5+", label: "Technologies" },
    { value: "2+", label: "Years Coding" },
];

export default function About() {
    return (
        <section id="about" aria-label="About me">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-tag">About</span>
                    <h2 className="section-title">About Me</h2>
                </motion.div>

                <div className="about-content">
                    {/* Profile Image */}
                    <motion.div
                        className="profile-image-container"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="profile-image-wrapper">
                            <div className="profile-decorative-ring" aria-hidden="true"></div>
                            <div className="profile-decorative-blob" aria-hidden="true"></div>
                            <div className="profile-image">
                                <div className="profile-placeholder">
                                    <Image
                                        src="/profile.jpg"
                                        alt="Rahul Kumar — Software & Full Stack Developer"
                                        fill
                                        sizes="(max-width: 768px) 256px, 320px"
                                        style={{ objectFit: "cover" }}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Stat counters under the image */}
                        <motion.div
                            className="about-stats"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            {stats.map((stat, i) => (
                                <div key={i} className="about-stat">
                                    <span className="about-stat-value">{stat.value}</span>
                                    <span className="about-stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="bio-heading">Who am I?</h3>
                        <p className="bio-text">
                            I am a software developer skilled in React, Kotlin, Spring Boot,
                            SQL, and embedded systems. I build cross-platform mobile apps and
                            full-stack solutions that are performant, scalable, and
                            user-friendly.
                        </p>

                        <div className="personal-info">
                            <div>
                                <h4 className="info-item-label">Name</h4>
                                <p className="info-item-value">Rahul Kumar</p>
                            </div>
                            <div>
                                <h4 className="info-item-label">Email</h4>
                                <p className="info-item-value">romeydeviller@gmail.com</p>
                            </div>
                            <div>
                                <h4 className="info-item-label">Location</h4>
                                <p className="info-item-value">Jammu and Kashmir, India</p>
                            </div>
                            <div>
                                <h4 className="info-item-label">Availability</h4>
                                <p className="info-item-value availability-badge">
                                    <span className="availability-dot"></span>
                                    Full-time
                                </p>
                            </div>
                        </div>

                        <a href="#connect" className="about-cta">
                            Let&apos;s Connect
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="18" height="18">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
