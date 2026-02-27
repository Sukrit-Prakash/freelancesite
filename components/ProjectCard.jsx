"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function ProjectCard({ project, index = 0 }) {
    const colors = [
        "from-violet-600/20 to-blue-600/20",
        "from-blue-600/20 to-cyan-500/20",
        "from-fuchsia-600/20 to-violet-600/20",
        "from-cyan-500/20 to-teal-500/20",
        "from-emerald-500/20 to-blue-500/20",
        "from-orange-500/20 to-rose-500/20",
    ];
    const gradient = colors[index % colors.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="glass rounded-2xl border border-white/10 overflow-hidden group hover:border-violet-500/40 transition-colors duration-300"
        >
            {/* Card image area */}
            <div className={`relative h-48 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                            {project.title.charAt(0)}
                        </span>
                    </div>
                    <span className="text-xs text-white/60 font-medium px-3 py-1 bg-black/30 rounded-full">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Card body */}
            <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:gradient-text transition-all">
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

                <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors group/link"
                >
                    View Details
                    <FaArrowRight
                        size={12}
                        className="group-hover/link:translate-x-1 transition-transform"
                    />
                </Link>
            </div>
        </motion.div>
    );
}
