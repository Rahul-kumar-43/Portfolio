import Link from "next/link";

export default function NotFound() {
    return (
        <div
            className="app-container"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                textAlign: "center",
                padding: "2rem",
            }}
        >
            <h1
                style={{
                    fontSize: "8rem",
                    fontWeight: 800,
                    background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: 1,
                    marginBottom: "1rem",
                }}
            >
                404
            </h1>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--text-heading)" }}>
                Page Not Found
            </h2>
            <p style={{ color: "var(--text-muted)", marginBottom: "2rem", maxWidth: "400px" }}>
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link href="/" className="btn btn-primary">
                Go Back Home
            </Link>
        </div>
    );
}
