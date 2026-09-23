import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import ConnectCTA from "@/components/ConnectCTA";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import CommandPalette from "@/components/CommandPalette";
import ScrollToTop from "@/components/ScrollToTop";
import GitHubStats from "@/components/GitHubStats";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rahulkumar43.dev";
const siteUrl = rawSiteUrl.replace(/\/$/, "");

export const metadata: Metadata = {
    title: "Rahul Kumar | Software & Full Stack Developer",
    description:
        "Welcome to the portfolio of Rahul Kumar — a Software & Full Stack Developer building modern web and mobile applications with React, Next.js, Kotlin, and Spring Boot.",
    alternates: {
        canonical: `${siteUrl}/`,
    },
    openGraph: {
        url: `${siteUrl}/`,
    },
};

export default function Home() {
    return (
        <>
            <LoadingScreen />
            <CommandPalette />
            <div className="app-container">
                <header>
                    <Navbar />
                </header>
                <main>
                    <Hero />
                    <About />
                    <GitHubStats />
                    <Skills />
                    <Projects />
                    <Resume />
                    <ConnectCTA />
                </main>
                <Footer />
            </div>
            <ScrollToTop />
        </>
    );
}
