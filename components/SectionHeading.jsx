"use client";
import { motion } from "framer-motion";

export default function SectionHeading({ label, title, subtitle, centered = true }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className={`mb-14 ${centered ? "text-center" : ""}`}
        >
            {label && (
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4">
                    {label}
                </span>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className={`text-slate-400 text-lg leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-xl"}`}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
