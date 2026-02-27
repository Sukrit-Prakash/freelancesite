"use client";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const avatarColors = [
    "from-violet-500 to-blue-500",
    "from-blue-500 to-cyan-400",
    "from-fuchsia-500 to-violet-500",
    "from-emerald-500 to-blue-500",
];

export default function TestimonialCard({ testimonial, index = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-2xl border border-white/10 p-6 flex flex-col gap-4"
        >
            {/* Stars */}
            <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} size={14} className="text-amber-400" />
                ))}
            </div>

            {/* Quote */}
            <p className="text-slate-300 text-sm leading-relaxed flex-1">
                &ldquo;{testimonial.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-2 border-t border-white/8">
                <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[index % avatarColors.length]
                        } flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                >
                    {testimonial.avatar}
                </div>
                <div>
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-slate-500 text-xs">{testimonial.role}</p>
                </div>
            </div>
        </motion.div>
    );
}
