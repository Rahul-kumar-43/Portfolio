"use client";

import { motion } from "framer-motion";

export default function Resume() {
    return (
        <section id="resume" className="resume-section" aria-label="Resume download">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Resume
                </motion.h2>
                <motion.div
                    className="resume-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="resume-description">
                        Interested in working together? Download my resume to learn more about
                        my experience, skills, and the projects I&apos;ve worked on.
                    </p>
                    <a
                        href="/Rahul_Kumar_Resume.pdf"
                        download
                        className="resume-button"
                    >
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        Download Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
