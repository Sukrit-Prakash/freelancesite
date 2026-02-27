"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? "glass border-b border-white/10 shadow-lg shadow-black/20"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-shadow">
                                <span className="text-white font-bold text-sm">BS</span>
                            </div>
                            <span className="font-bold text-lg text-white">
                                Bloom<span className="gradient-text">Script</span>
                            </span>
                        </Link>
                    
                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === link.href
                                            ? "text-white"
                                            : "text-slate-400 hover:text-white"
                                        }`}
                                >
                                    {pathname === link.href && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-white/8 rounded-lg"
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.label}</span>
                                </Link>
                            ))}
                        </nav>

                        {/* CTA + Hamburger */}
                        <div className="flex items-center gap-3">
                            <Link
                                href="/contact"
                                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white text-sm font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 transition-all duration-200"
                            >
                                Contact Us  
                            </Link>
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/8 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setMenuOpen(false)}
                        />
                        <div className="absolute right-0 top-0 h-full w-72 glass border-l border-white/10 p-6 pt-24 flex flex-col gap-2">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors ${pathname === link.href
                                                ? "bg-violet-600/20 text-violet-400 border border-violet-500/30"
                                                : "text-slate-300 hover:text-white hover:bg-white/8"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="mt-4 pt-4 border-t border-white/10">
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold shadow-lg shadow-violet-500/25"
                                >
                                    Contact Us  
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
