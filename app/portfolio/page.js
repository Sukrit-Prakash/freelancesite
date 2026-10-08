"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

const categories = ["All", "React Native", "Flutter"];

export default function PortfolioPage() {
    const [active, setActive] = useState("All");

    const filtered =
        active === "All"
            ? projects
            : projects.filter((p) => p.category === active);

    return (
        <div className="mesh-bg pt-20">
            {/* Hero */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
                <AnimatedSection>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-semibold uppercase tracking-widest mb-6">
                        Portfolio
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
                        Projects That{" "}
                        <span className="gradient-text">Speak for Themselves</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        A curated collection of mobile apps we've designed, developed, and shipped for clients worldwide — from startups to enterprises.
                    </p>
                </AnimatedSection>
            </section>

            {/* Filters */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="flex justify-center mb-12">
                    <div className="inline-flex gap-1 p-1.5 rounded-full glass border border-white/10">
                        {categories.map((cat) => {
                            const count = cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActive(cat)}
                                    className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${active === cat ? "text-ink-950" : "text-slate-400 hover:text-white"}`}
                                >
                                    {active === cat && (
                                        <motion.span
                                            layoutId="portfolio-filter"
                                            className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-400 to-accent-500 shadow-lg shadow-brand-500/25"
                                            transition={{ type: "spring", stiffness: 400, damping: 32 }}
                                        />
                                    )}
                                    <span className="relative z-10">
                                        {cat} <span className="opacity-60 font-medium">{count}</span>
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </AnimatedSection>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, i) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard project={project} index={i} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
