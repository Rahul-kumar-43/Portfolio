import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return {};

    return {
        title: `${project.title} — Case Study`,
        description: project.description,
        openGraph: {
            title: `${project.title} — Case Study | Rahul Kumar`,
            description: project.description,
        },
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="app-container">
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "7rem 1.5rem 4rem" }}>
                <Link
                    href="/#projects"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        color: "var(--primary)",
                        fontWeight: 600,
                        marginBottom: "2rem",
                        gap: "0.25rem",
                    }}
                >
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Projects
                </Link>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        marginBottom: "1.5rem",
                    }}
                >
                    <span style={{ fontSize: "3rem" }}>{project.icon}</span>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.025em" }}>
                        {project.title}
                    </h1>
                </div>

                <p
                    style={{
                        fontSize: "1.15rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.7,
                        marginBottom: "2rem",
                    }}
                >
                    {project.longDescription}
                </p>

                {/* Tech Stack */}
                <div style={{ marginBottom: "2.5rem" }}>
                    <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--text-heading)" }}>
                        Tech Stack
                    </h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {project.techStack.map((tech) => (
                            <span key={tech} className="tech-tag" style={{ fontSize: "0.9rem", padding: "0.375rem 1rem" }}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div style={{ marginBottom: "2.5rem" }}>
                    <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--text-heading)" }}>
                        Key Features
                    </h2>
                    <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {project.features.map((feature, i) => (
                            <li key={i} style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Challenges */}
                <div style={{ marginBottom: "2.5rem" }}>
                    <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--text-heading)" }}>
                        Challenges & Solutions
                    </h2>
                    <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {project.challenges.map((challenge, i) => (
                            <li key={i} style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>
                                {challenge}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                    <a
                        href={project.github}
                        className="project-link project-link-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ padding: "0.75rem 1.5rem" }}
                    >
                        <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: "1.25rem", height: "1.25rem", marginRight: "0.5rem" }}>
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View on GitHub
                    </a>
                    {project.liveDemo && (
                        <a
                            href={project.liveDemo}
                            className="project-link project-link-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ padding: "0.75rem 1.5rem" }}
                        >
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: "1.25rem", height: "1.25rem", marginRight: "0.5rem" }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
