import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rahulkumar.dev";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Rahul Kumar | Software & Full Stack Developer",
        template: "%s | Rahul Kumar",
    },
    description:
        "Portfolio of Rahul Kumar — a Software & Full Stack Developer skilled in React, Kotlin, Spring Boot, and mobile app development. Building modern apps and digital experiences.",
    keywords: [
        "Rahul Kumar",
        "Software Developer",
        "Full Stack Developer",
        "React",
        "Next.js",
        "Kotlin",
        "Spring Boot",
        "Mobile App Developer",
        "Portfolio",
    ],
    authors: [{ name: "Rahul Kumar" }],
    creator: "Rahul Kumar",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteUrl,
        siteName: "Rahul Kumar — Portfolio",
        title: "Rahul Kumar | Software & Full Stack Developer",
        description:
            "Professional portfolio showcasing skills and projects in software and mobile app development.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Rahul Kumar — Software & Full Stack Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Rahul Kumar | Software & Full Stack Developer",
        description:
            "Professional portfolio showcasing skills and projects in software and mobile app development.",
        creator: "@rahul58627",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/lol.svg",
    },
    alternates: {
        canonical: siteUrl,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className={inter.variable}>
            <head>
                {/* Prevent flash of wrong theme */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
                    }}
                />
                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Rahul Kumar",
                            url: siteUrl,
                            image: `${siteUrl}/profile.jpg`,
                            jobTitle: "Software & Full Stack Developer",
                            worksFor: {
                                "@type": "Organization",
                                name: "Freelance",
                            },
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Jammu and Kashmir",
                                addressCountry: "India",
                            },
                            email: "romeydeviller@gmail.com",
                            sameAs: [
                                "https://github.com/Rahul-kumar-43",
                                "https://linkedin.com/in/rahul-kumar-724855bt",
                                "https://twitter.com/rahul58627",
                                "https://www.instagram.com/kumar_rahul_43",
                            ],
                            knowsAbout: [
                                "React",
                                "TypeScript",
                                "Spring Boot",
                                "Kotlin",
                                "Node.js",
                                "SQL",
                                "Mobile App Development",
                                "Full Stack Development",
                            ],
                        }),
                    }}
                />
            </head>
            <body
                className={`${inter.className} antialiased`}
                style={{ fontFamily: "var(--font-inter), 'Inter', system-ui, sans-serif" }}
            >
                <ThemeProvider>
                    {children}
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
