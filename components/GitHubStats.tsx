"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GitHubData {
    publicRepos: number;
    followers: number;
    following: number;
    totalStars: number;
}

export default function GitHubStats() {
    const [stats, setStats] = useState<GitHubData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "Rahul-kumar-43";

        async function fetchStats() {
            try {
                const userRes = await fetch(`https://api.github.com/users/${username}`);
                const userData = await userRes.json();

                const reposRes = await fetch(
                    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
                );
                const reposData = await reposRes.json();

                const totalStars = Array.isArray(reposData)
                    ? reposData.reduce(
                        (acc: number, repo: { stargazers_count: number }) =>
                            acc + repo.stargazers_count,
                        0
                    )
                    : 0;

                setStats({
                    publicRepos: userData.public_repos || 0,
                    followers: userData.followers || 0,
                    following: userData.following || 0,
                    totalStars,
                });
            } catch (error) {
                console.error("Failed to fetch GitHub stats:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchStats();
    }, []);

    if (loading || !stats) return null;

    const statItems = [
        { label: "Repositories", value: stats.publicRepos },
        { label: "Stars", value: stats.totalStars },
        { label: "Followers", value: stats.followers },
        { label: "Following", value: stats.following },
    ];

    return (
        <div className="github-stats-section">
            <motion.h3
                style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: "1.25rem",
                    color: "var(--primary)",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                GitHub Activity
            </motion.h3>
            <div className="github-stats-grid">
                {statItems.map((item, index) => (
                    <motion.div
                        key={item.label}
                        className="github-stat-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                        <div className="github-stat-value">{item.value}</div>
                        <div className="github-stat-label">{item.label}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
