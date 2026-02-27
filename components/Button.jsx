"use client";
import { motion } from "framer-motion";

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    onClick,
    type = "button",
    disabled = false,
    ...props
}) {
    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
    };

    const variants = {
        primary:
            "bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105",
        secondary:
            "glass border border-white/15 text-white hover:border-violet-500/50 hover:bg-white/8 hover:scale-105",
        outline:
            "border border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:scale-105",
    };

    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled}
            whileTap={{ scale: 0.97 }}
            className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 ${sizes[size]} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                } ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
}
