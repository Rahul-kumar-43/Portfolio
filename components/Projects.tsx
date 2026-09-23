"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TechItem {
    name: string;
    category: "frontend" | "backend" | "mobile" | "tool";
}

interface Project {
    title: string;
    slug: string;
    description: string;
    techStack: TechItem[];
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

export { projects };

const categoryIcon: Record<string, string> = {
    frontend: "🎨",
    backend: "⚙️",
    mobile: "📱",
    tool: "🔧",
};

const categoryLabel: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend",
    mobile: "Mobile",
    tool: "Tool",
};

function StatusPip({ status }: { status: string }) {
    const colorClass =
        status === "Live"
            ? "tree-status-live"
            : status === "In Development"
            ? "tree-status-dev"
            : "tree-status-done";
    return (
        <span className={`tree-status-pip ${colorClass}`}>
            <span className="tree-status-dot" />
            {status}
        </span>
    );
}

function TreeProjectNode({ project, index, isLast }: { project: Project; index: number; isLast: boolean }) {
    const [isOpen, setIsOpen] = useState(index === 0);
    const [activeTab, setActiveTab] = useState<"desc" | "stack" | "links">("desc");

    // Group tech by category
    const grouped = project.techStack.reduce<Record<string, TechItem[]>>((acc, tech) => {
        if (!acc[tech.category]) acc[tech.category] = [];
        acc[tech.category].push(tech);
        return acc;
    }, {});

    return (
        <motion.div
            className="tree-node-root"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
        >
            {/* Vertical line connector (skip for last) */}
            {!isLast && <div className="tree-vert-line" />}

            <div className="tree-node-row">
                {/* Horizontal connector */}
                <div className="tree-horiz-connector">
                    <div className="tree-horiz-line" />
                    <div className="tree-horiz-dot" />
                </div>

                {/* Folder toggle button */}
                <button
                    className={`tree-folder-btn ${isOpen ? "tree-folder-open" : ""} ${project.featured ? "tree-folder-featured" : ""}`}
                    onClick={() => setIsOpen((v) => !v)}
                    aria-expanded={isOpen}
                    aria-label={`${isOpen ? "Collapse" : "Expand"} ${project.title}`}
                >
                    <span className="tree-folder-chevron">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                    <span className="tree-folder-icon">
                        {isOpen ? (
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 20H5a2 2 0 01-2-2V7a2 2 0 012-2h4.586a1 1 0 01.707.293l1.414 1.414A1 1 0 0012.414 7H19a2 2 0 012 2v9a2 2 0 01-2 2z" />
                            </svg>
                        ) : (
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z" />
                            </svg>
                        )}
                    </span>
                    <span className="tree-folder-name">
                        <span className="tree-folder-emoji">{project.icon}</span>
                        {project.title}
                        {project.featured && <span className="tree-featured-badge">★ Featured</span>}
                    </span>
                    <StatusPip status={project.status} />
                </button>
            </div>

            {/* Expanded content */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        className="tree-children"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: "hidden" }}
                    >
                        <div className="tree-content-panel">
                            {/* Tab Bar */}
                            <div className="tree-tabs">
                                {(["desc", "stack", "links"] as const).map((tab) => (
                                    <button
                                        key={tab}
                                        className={`tree-tab-btn ${activeTab === tab ? "tree-tab-active" : ""}`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab === "desc" && (
                                            <>
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                                README.md
                                            </>
                                        )}
                                        {tab === "stack" && (
                                            <>
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                                stack.json
                                            </>
                                        )}
                                        {tab === "links" && (
                                            <>
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                                                links.sh
                                            </>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="tree-tab-content">
                                {activeTab === "desc" && (
                                    <div className="tree-readme">
                                        <p className="tree-readme-text">{project.description}</p>
                                        <div className="tree-highlights">
                                            {project.highlights.map((h, i) => (
                                                <span key={i} className="tree-highlight-chip">
                                                    <span className="tree-chip-bullet">▸</span>
                                                    {h}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === "stack" && (
                                    <div className="tree-stack-view">
                                        {Object.entries(grouped).map(([cat, techs]) => (
                                            <div key={cat} className="tree-stack-group">
                                                <div className="tree-stack-cat-label">
                                                    <span>{categoryIcon[cat]}</span>
                                                    <span>{categoryLabel[cat]}</span>
                                                </div>
                                                <div className="tree-stack-items">
                                                    {techs.map((t, i) => (
                                                        <div key={i} className="tree-stack-item">
                                                            <span className="tree-stack-connector">└─</span>
                                                            <span className={`tree-stack-badge tree-badge-${t.category}`}>{t.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === "links" && (
                                    <div className="tree-links-view">
                                        <div className="tree-link-list">
                                            <div className="tree-link-item">
                                                <span className="tree-link-prefix">$ git clone</span>
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="tree-link-anchor"
                                                >
                                                    <svg fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                    </svg>
                                                    Source Code
                                                </a>
                                            </div>
                                            {project.liveDemo && (
                                                <div className="tree-link-item">
                                                    <span className="tree-link-prefix">$ open</span>
                                                    <a
                                                        href={project.liveDemo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="tree-link-anchor tree-link-live"
                                                    >
                                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                        Live Demo ↗
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="projects-tree-section" aria-label="Projects">
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

                {/* Tree Explorer Panel */}
                <div className="tree-explorer">
                    {/* Explorer header bar */}
                    <div className="tree-explorer-header">
                        <div className="tree-explorer-dots">
                            <span className="dot dot-red" />
                            <span className="dot dot-yellow" />
                            <span className="dot dot-green" />
                        </div>
                        <span className="tree-explorer-title">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                            ~/rahul-kumar/projects
                        </span>
                    </div>

                    {/* Tree root */}
                    <div className="tree-explorer-body">
                        <div className="tree-root-label">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="tree-root-icon">
                                <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z" />
                            </svg>
                            <span className="tree-root-name">projects/</span>
                            <span className="tree-root-count">{projects.length} items</span>
                        </div>

                        <div className="tree-nodes">
                            {projects.map((project, index) => (
                                <TreeProjectNode
                                    key={project.slug}
                                    project={project}
                                    index={index}
                                    isLast={index === projects.length - 1}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Footer teaser */}
                    <motion.a
                        href="https://github.com/Rahul-kumar-43"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tree-github-footer"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <svg fill="currentColor" viewBox="0 0 24 24" className="tree-gh-icon">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <div className="tree-gh-text">
                            <span className="tree-gh-cmd">$ cd github.com/Rahul-kumar-43</span>
                            <span className="tree-gh-sub">Explore more projects &amp; open-source work ↗</span>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
