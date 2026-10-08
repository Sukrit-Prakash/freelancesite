"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaGooglePlay } from "react-icons/fa";
import PhoneMockup from "@/components/PhoneMockup";

export default function ProjectCard({ project, index = 0 }) {
    const [cover, second] = project.screens;
    const isLive = Boolean(project.playStore || project.appStore);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
        >
            <Link
                href={`/portfolio/${project.slug}`}
                className="group block h-full glass rounded-2xl border border-white/10 overflow-hidden hover:border-brand-500/40 hover:-translate-y-1.5 transition-all duration-300"
            >
                {/* Mockup area */}
                <div className="relative h-64 overflow-hidden bg-ink-900">
                    <div
                        className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                        style={{ background: `radial-gradient(circle at 50% 85%, ${project.color}, transparent 65%)` }}
                    />
                    <div className="absolute inset-0 grid-bg" />

                    {second && (
                        <PhoneMockup
                            src={second}
                            alt=""
                            sizes="140px"
                            className="absolute left-1/2 top-12 w-32 -translate-x-[15%] rotate-10 opacity-80 transition-transform duration-500 group-hover:translate-x-0 group-hover:rotate-14"
                        />
                    )}
                    <PhoneMockup
                        src={cover}
                        alt={`${project.title} app screen`}
                        sizes="160px"
                        className="absolute left-1/2 top-8 w-36 -translate-x-[85%] -rotate-6 transition-transform duration-500 group-hover:-translate-y-3 group-hover:-rotate-3"
                    />

                    <div className="absolute top-4 left-4 flex gap-2">
                        <span className="text-xs text-white/80 font-medium px-3 py-1 bg-ink-950/70 backdrop-blur rounded-full border border-white/10">
                            {project.category}
                        </span>
                        {isLive && (
                            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-300 font-medium px-3 py-1 bg-ink-950/70 backdrop-blur rounded-full border border-emerald-400/30">
                                <FaGooglePlay size={10} /> Live
                            </span>
                        )}
                    </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-brand-300 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                        {project.shortDesc}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tech.slice(0, 3).map((t) => (
                            <span
                                key={t}
                                className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
                            >
                                {t}
                            </span>
                        ))}
                        {project.tech.length > 3 && (
                            <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-500">
                                +{project.tech.length - 3}
                            </span>
                        )}
                    </div>

                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400">
                        View case study
                        <FaArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </Link>
        </motion.div>
    );
}
