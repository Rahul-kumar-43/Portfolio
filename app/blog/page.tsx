import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Articles and insights on software development, web technologies, and mobile app development by Rahul Kumar.",
    openGraph: {
        title: "Blog | Rahul Kumar",
        description: "Articles on software development, web technologies, and mobile apps.",
    },
};

export default function BlogPage() {
    const posts = getAllBlogPosts();

    return (
        <div className="app-container">
            <div className="container" style={{ paddingTop: "7rem", paddingBottom: "4rem" }}>
                <h1 className="section-title">Blog</h1>
                <p
                    style={{
                        textAlign: "center",
                        color: "var(--text-muted)",
                        marginBottom: "3rem",
                        maxWidth: "600px",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    Thoughts, tutorials, and insights on software development, web technologies, and building great products.
                </p>

                {posts.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "3rem 0" }}>
                        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
                            Coming soon! Stay tuned for articles on web development, mobile apps, and more.
                        </p>
                        <Link
                            href="/"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                marginTop: "1.5rem",
                                color: "var(--primary)",
                                fontWeight: 600,
                            }}
                        >
                            ← Back to Home
                        </Link>
                    </div>
                ) : (
                    <div className="blog-grid">
                        {posts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                                <article className="blog-card">
                                    <div className="blog-card-body">
                                        <span className="blog-card-date">
                                            {new Date(post.date).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                            {post.readingTime && ` · ${post.readingTime}`}
                                        </span>
                                        <h2 className="blog-card-title">{post.title}</h2>
                                        <p className="blog-card-excerpt">{post.excerpt}</p>
                                        {post.tags && post.tags.length > 0 && (
                                            <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem", flexWrap: "wrap" }}>
                                                {post.tags.map((tag) => (
                                                    <span key={tag} className="tech-tag">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        <span className="blog-card-link">
                                            Read More
                                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
