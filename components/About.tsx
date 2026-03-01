"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" aria-label="About me">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h2>

                <div className="about-content">
                    {/* Profile Image */}
                    <motion.div
                        className="profile-image-container"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
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
                                <p className="info-item-value">Full-time</p>
                            </div>
                        </div>

                        <a href="#contact" className="about-cta">
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
