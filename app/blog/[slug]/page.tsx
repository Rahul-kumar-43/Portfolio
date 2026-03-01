import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getAllBlogPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: ["Rahul Kumar"],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Simple MDX-like content rendering (convert markdown-ish content to HTML-safe text)
    const renderContent = (content: string) => {
        return content
            .split("\n")
            .map((line, i) => {
                if (line.startsWith("## ")) {
                    return (
                        <h2 key={i} style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                            {line.replace("## ", "")}
                        </h2>
                    );
                }
                if (line.startsWith("### ")) {
                    return (
                        <h3 key={i} style={{ marginTop: "1.5rem", marginBottom: "0.75rem" }}>
                            {line.replace("### ", "")}
                        </h3>
                    );
                }
                if (line.startsWith("- ")) {
                    return (
                        <li key={i} style={{ marginBottom: "0.5rem" }}>
                            {line.replace("- ", "")}
                        </li>
                    );
                }
                if (line.trim() === "") {
                    return <br key={i} />;
                }
                return (
                    <p key={i} style={{ marginBottom: "1rem" }}>
                        {line}
                    </p>
                );
            });
    };

    return (
        <div className="app-container">
            <article className="blog-post" style={{ paddingTop: "7rem" }}>
                <Link
                    href="/blog"
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
                    Back to Blog
                </Link>

                <h1>{post.title}</h1>
                <div className="blog-post-meta">
                    {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                    {post.readingTime && ` · ${post.readingTime}`}
                </div>

                {post.tags && post.tags.length > 0 && (
                    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
                        {post.tags.map((tag) => (
                            <span key={tag} className="tech-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <div className="blog-post-content">{renderContent(post.content)}</div>
            </article>
        </div>
    );
}
