"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
    title: string;
    skills: string[];
    icon: string;
    delay: number;
    accentClass: string;
}

function SkillCard({ title, skills, icon, delay, accentClass }: SkillCardProps) {
    return (
        <motion.div
            className={`skill-card-v2 ${accentClass}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5 }}
        >
            <div className="skill-card-header-v2">
                <span className="skill-icon-v2" role="img" aria-hidden="true">
                    {icon}
                </span>
                <h3 className="skill-title-v2">{title}</h3>
            </div>
            <div className="skill-tags">
                {skills.map((skill, index) => (
                    <motion.span
                        key={index}
                        className="skill-pill"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: delay + index * 0.05, duration: 0.3 }}
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
}

const skillCategories = [
    {
        title: "Frontend",
        icon: "🌐",
        accentClass: "skill-accent-cyan",
        skills: ["React", "Next.js", "TypeScript", "HTML/CSS"],
        delay: 0.1,
    },
    {
        title: "Backend",
        icon: "⚙️",
        accentClass: "skill-accent-violet",
        skills: ["Spring Boot", "Express.js", "Node.js", "SQL", "RESTful APIs", "Database Design"],
        delay: 0.2,
    },
    {
        title: "Mobile",
        icon: "📱",
        accentClass: "skill-accent-amber",
        skills: ["Kotlin", "Firebase", "Android SDK"],
        delay: 0.3,
    },
    {
        title: "Tools",
        icon: "🛠️",
        accentClass: "skill-accent-emerald",
        skills: ["Git", "Docker", "Android Studio", "VS Code"],
        delay: 0.4,
    },
];

export default function Skills() {
    return (
        <section id="skills" aria-label="Technical skills">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-tag">Expertise</span>
                    <h2 className="section-title">My Skills</h2>
                    <p className="section-subtitle">
                        Technologies and tools I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <SkillCard
                            key={index}
                            title={category.title}
                            icon={category.icon}
                            skills={category.skills}
                            delay={category.delay}
                            accentClass={category.accentClass}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
