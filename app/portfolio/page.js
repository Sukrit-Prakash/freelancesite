"use client";
import { useState } from "react";
import { motion } from "framer-motion";
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
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-widest mb-6">
                        Portfolio
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
                        Projects That{" "}
                        <span className="gradient-text">Speak for Themselves</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        A curated collection of mobile apps We've designed, developed, and shipped for clients worldwide — from startups to enterprises.
                    </p>
                </AnimatedSection>
            </section>

            {/* Filters */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="flex justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${active === cat
                                    ? "bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-lg shadow-violet-500/25"
                                    : "glass border border-white/10 text-slate-400 hover:text-white hover:border-violet-500/40"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </AnimatedSection>

                {/* Grid */}
                <motion.div
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24"
                >
                    {filtered.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
