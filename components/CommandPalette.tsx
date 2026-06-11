"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CommandItem {
    label: string;
    icon: string;
    action: () => void;
    shortcut?: string;
}

export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const commands: CommandItem[] = [
        { label: "Home", icon: "🏠", action: () => scrollTo("#home"), shortcut: "H" },
        { label: "About", icon: "👤", action: () => scrollTo("#about"), shortcut: "A" },
        { label: "Skills", icon: "🎯", action: () => scrollTo("#skills"), shortcut: "S" },
        { label: "Projects", icon: "💼", action: () => scrollTo("#projects"), shortcut: "P" },
        { label: "Contact", icon: "📧", action: () => scrollTo("#contact"), shortcut: "C" },
        { label: "Blog", icon: "📝", action: () => { window.location.href = "/blog"; } },
        { label: "Resume", icon: "📄", action: () => scrollTo("#resume") },
        {
            label: "Toggle Dark Mode", icon: "🌙", action: () => {
                document.documentElement.classList.toggle("dark");
                const isDark = document.documentElement.classList.contains("dark");
                localStorage.setItem("theme", isDark ? "dark" : "light");
            }
        },
        { label: "GitHub", icon: "🐙", action: () => window.open("https://github.com/Rahul-kumar-43", "_blank") },
        { label: "LinkedIn", icon: "💼", action: () => window.open("https://linkedin.com/in/rahul-kumar-724855bt", "_blank") },
        { label: "LeetCode", icon: "LC", action: () => window.open("https://leetcode.com/u/rahulKumar43/", "_blank") },
    ];

    const scrollTo = (hash: string) => {
        const el = document.querySelector(hash);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    const filteredCommands = commands.filter((cmd) =>
        cmd.label.toLowerCase().includes(search.toLowerCase())
    );

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen((prev) => !prev);
                setSearch("");
                setActiveIndex(0);
            }

            if (!isOpen) return;

            if (e.key === "Escape") {
                setIsOpen(false);
            } else if (e.key === "ArrowDown") {
                e.preventDefault();
                setActiveIndex((prev) => (prev + 1) % filteredCommands.length);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActiveIndex((prev) =>
                    prev === 0 ? filteredCommands.length - 1 : prev - 1
                );
            } else if (e.key === "Enter") {
                e.preventDefault();
                if (filteredCommands[activeIndex]) {
                    filteredCommands[activeIndex].action();
                    setIsOpen(false);
                }
            }
        },
        [isOpen, filteredCommands, activeIndex]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        setActiveIndex(0);
    }, [search]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="command-palette-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        className="command-palette"
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.15 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="command-palette-input-wrapper">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                ref={inputRef}
                                type="text"
                                className="command-palette-input"
                                placeholder="Type a command or search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="command-palette-results">
                            {filteredCommands.map((cmd, index) => (
                                <div
                                    key={cmd.label}
                                    className={`command-palette-item ${index === activeIndex ? "active" : ""}`}
                                    onClick={() => {
                                        cmd.action();
                                        setIsOpen(false);
                                    }}
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    <span className="command-palette-item-icon">{cmd.icon}</span>
                                    <span className="command-palette-item-label">{cmd.label}</span>
                                    {cmd.shortcut && (
                                        <span className="command-palette-item-shortcut">{cmd.shortcut}</span>
                                    )}
                                </div>
                            ))}
                            {filteredCommands.length === 0 && (
                                <div style={{ padding: "1rem", textAlign: "center", color: "var(--text-muted)" }}>
                                    No results found
                                </div>
                            )}
                        </div>

                        <div className="command-palette-footer">
                            <span>
                                <kbd>↑↓</kbd> Navigate
                            </span>
                            <span>
                                <kbd>↵</kbd> Select
                            </span>
                            <span>
                                <kbd>Esc</kbd> Close
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
