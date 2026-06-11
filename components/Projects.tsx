"use client";

import { motion } from "framer-motion";

interface Project {
    title: string;
    slug: string;
    description: string;
    techStack: { name: string; category: "frontend" | "backend" | "mobile" | "tool" }[];
    github: string;
    liveDemo?: string;
    icon: string;
    status: "Live" | "In Development" | "Completed";
    highlights: string[];
    featured?: boolean;
}

const projects: Project[] = [
    {
        title: "Fast Bike and Taxi Application",
        slug: "fast-bike-and-taxi",
        description:
            "A driver-focused transportation app for bike and taxi drivers to manage rides, track earnings, accept bookings, and navigate efficiently with real-time GPS tracking.",
        techStack: [
            { name: "React", category: "frontend" },
            { name: "Spring Boot", category: "backend" },
            { name: "SQL", category: "backend" },
            { name: "RESTful API", category: "backend" },
        ],
        github: "https://github.com/Rahul-kumar-43/Fast-Bike-and-Taxi--application",
        liveDemo: "https://fast-bike-and-taxi-application.vercel.app/",
        icon: "🏍️",
        status: "Live",
        highlights: ["Real-time GPS", "Driver Dashboard", "Payment Integration"],
        featured: true,
    },
    {
        title: "Bus Ticket Booking Portal",
        slug: "bus-ticket-booking-portal",
        description:
            "A full-stack web application for booking bus tickets with user authentication, seat selection, and payment integration.",
        techStack: [
            { name: "Spring Boot", category: "backend" },
            { name: "SQL", category: "backend" },
            { name: "RESTful API", category: "backend" },
        ],
        github: "https://github.com/Rahul-kumar-43/Bus-Ticket-Portal",
        icon: "🚌",
        status: "Completed",
        highlights: ["Seat Selection", "Auth System", "Payment Flow"],
    },
    {
        title: "Pulse Chat",
        slug: "pulse-chat",
        description:
            "A real-time group chat application enabling multiple users to communicate simultaneously in chat rooms identified by unique session keypins with WebSocket technology.",
        techStack: [
            { name: "React", category: "frontend" },
            { name: "TypeScript", category: "frontend" },
            { name: "Node.js", category: "backend" },
            { name: "Socket.IO", category: "backend" },
        ],
        github: "https://github.com/Rahul-kumar-43/Pulse-Chat",
        liveDemo: "https://pulsechat-34w3.onrender.com",
        icon: "💬",
        status: "Live",
        highlights: ["WebSocket", "Real-time Sync", "Session Rooms"],
    },
];

const categoryColors: Record<string, string> = {
    frontend: "tech-tag-frontend",
    backend: "tech-tag-backend",
    mobile: "tech-tag-mobile",
    tool: "tech-tag-tool",
};

function StatusBadge({ status }: { status: string }) {
    const statusClass =
        status === "Live"
            ? "status-live"
            : status === "In Development"
            ? "status-dev"
            : "status-completed";

    return (
        <span className={`project-status ${statusClass}`}>
            <span className="status-dot"></span>
            {status}
        </span>
    );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const isFeatured = project.featured;

    const variants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
        }),
    };

    return (
        <motion.div
            className={`project-card-v2 ${isFeatured ? "project-card-featured" : ""}`}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
        >
            <div className="project-card-glow" aria-hidden="true"></div>
            <div className="project-card-inner">
                {/* Header */}
                <div className="project-card-header">
                    <div className="project-card-icon-wrap">
                        <span className="project-card-emoji">{project.icon}</span>
                    </div>
                    <StatusBadge status={project.status} />
                </div>

                {/* Body */}
                <div className="project-card-body-v2">
                    <h3 className="project-title-v2">{project.title}</h3>
                    <p className="project-desc-v2">{project.description}</p>

                    {/* Highlights */}
                    <div className="project-highlights">
                        {project.highlights.map((h, i) => (
                            <span key={i} className="project-highlight-tag">
                                {h}
                            </span>
                        ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="project-tech-v2">
                        {project.techStack.map((tech, i) => (
                            <span
                                key={i}
                                className={`tech-tag-v2 ${categoryColors[tech.category]}`}
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="project-card-footer">
                    {project.liveDemo && (
                        <a
                            href={project.liveDemo}
                            className="project-btn project-btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                            Live Demo
                        </a>
                    )}
                    <a
                        href={project.github}
                        className="project-btn project-btn-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Source Code
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

function GitHubTeaser() {
    return (
        <motion.a
            href="https://github.com/Rahul-kumar-43"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-v2 github-teaser-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ y: -8 }}
        >
            <div className="github-teaser-inner">
                <div className="github-teaser-icon">
                    <svg fill="currentColor" viewBox="0 0 24 24" width="48" height="48">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </div>
                <h3 className="github-teaser-title">Explore More on GitHub</h3>
                <p className="github-teaser-desc">
                    Check out my other projects, contributions, and open-source work.
                </p>
                <span className="github-teaser-link">
                    Visit Profile
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </div>
        </motion.a>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="projects-section-v2" aria-label="Projects">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-tag">Portfolio</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        A selection of projects that showcase my skills in full-stack development,
                        real-time systems, and scalable architecture.
                    </p>
                </motion.div>

                <div className="projects-grid-v2">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                    <GitHubTeaser />
                </div>
            </div>
        </section>
    );
}

export { projects };
