"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaEnvelope,
    FaCalendarAlt,
    FaCheckCircle,
    FaPaperPlane,
} from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

const socials = [
    // {
    //     icon: FaGithub,
    //     label: "GitHub",
    //     handle: "@alexdev",
    //     href: "https://github.com",
    //     color: "hover:border-white/40 hover:text-white",
    // },
    {
        icon: FaLinkedin,
        label: "LinkedIn",
        handle: "in/bloomscripttechnologies",
        href: "https://linkedin.com",
        color: "hover:border-blue-500/50 hover:text-blue-400",
    },
    {
        icon: FaTwitter,
        label: "Twitter / X",
        handle: "@bloomscripttechnologies",
        href: "https://twitter.com",
        color: "hover:border-sky-500/50 hover:text-sky-400",
    },
    {
        icon: FaEnvelope,
        label: "Email",
        handle: "info@bloomscripttechnologies.com",
        href: "mailto:info@bloomscripttechnologies.com",
        color: "hover:border-violet-500/50 hover:text-violet-400",
    },
];

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate async submission
        await new Promise((r) => setTimeout(r, 1500));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <div className="mesh-bg pt-20">
            {/* Hero */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
                <AnimatedSection>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-widest mb-6">
                        Contact
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
                        Let's Build Something{" "}
                        <span className="gradient-text">Great Together</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind? We'd love to hear about it. Fill out the form below or reach
                        out via any of the channels — We typically respond within 24 hours.
                    </p>
                </AnimatedSection>
            </section>

            {/* Main grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Contact Form */}
                    <AnimatedSection className="lg:col-span-3" delay={0}>
                        <div className="glass rounded-3xl border border-white/10 p-8">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-16 text-center gap-4"
                                >
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center shadow-xl shadow-violet-500/30 mb-2">
                                        <FaCheckCircle size={32} className="text-white" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">Message Sent!</h2>
                                    <p className="text-slate-400 max-w-xs">
                                        Thanks for reaching out! We'll review your project details and get back to you within 24 hours.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <h2 className="text-white font-bold text-xl mb-6">Send Us a Message</h2>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-slate-400 text-sm font-medium mb-2" htmlFor="name">
                                                Your Name *
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="John Smith"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-slate-400 text-sm font-medium mb-2" htmlFor="email">
                                                Email Address *
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="john@company.com"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-slate-400 text-sm font-medium mb-2" htmlFor="budget">
                                            Estimated Budget
                                        </label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            value={form.budget}
                                            onChange={handleChange}
                                            className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-colors appearance-none"
                                        >
                                            <option value="">Select a range…</option>
                                            <option value="<5k">Under $5,000</option>
                                            <option value="5k-15k">$5,000 – $15,000</option>
                                            <option value="15k-50k">$15,000 – $50,000</option>
                                            <option value="50k+">$50,000+</option>
                                            <option value="discuss">Prefer to discuss</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-slate-400 text-sm font-medium mb-2" htmlFor="message">
                                            Project Description *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Tell me about your project — what it does, who it's for, and what you'd like to build…"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-colors resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white font-bold text-base shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-[1.02] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <>
                                                <motion.span
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                                                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                                />
                                                Sending…
                                            </>
                                        ) : (
                                            <>
                                                <FaPaperPlane size={14} /> Send Message
                                            </>
                                        )}
                                    </button>

                                    <p className="text-slate-500 text-xs text-center">
                                        I'll respond within 24 hours · No spam, ever.
                                    </p>
                                </form>
                            )}
                        </div>
                    </AnimatedSection>

                    {/* Sidebar */}
                    <AnimatedSection className="lg:col-span-2 space-y-6" delay={0.15}>
                        {/* Schedule a call CTA */}
                        <div className="glass rounded-2xl border border-violet-500/20 p-6 bg-gradient-to-br from-violet-600/10 to-blue-600/10">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center mb-4 shadow-lg shadow-violet-500/30">
                                <FaCalendarAlt size={18} className="text-white" />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Schedule a Free Call</h3>
                            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                                Prefer to talk? Book a free 30-minute discovery call and let's discuss your project live.
                            </p>
                            <a
                                href="https://calendly.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold text-sm shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 transition-all duration-200"
                            >
                                <FaCalendarAlt size={13} /> Book a Call
                            </a>
                        </div>

                        {/* Social links */}
                        <div className="glass rounded-2xl border border-white/10 p-6">
                            <h3 className="text-white font-bold text-base mb-4">Find Me Online</h3>
                            <div className="space-y-3">
                                {socials.map(({ icon: Icon, label, handle, href, color }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-3 p-3 rounded-xl border border-white/10 text-slate-400 transition-all duration-200 group ${color}`}
                                    >
                                        <Icon size={17} />
                                        <div>
                                            <div className="text-sm font-medium">{label}</div>
                                            <div className="text-xs text-slate-500">{handle}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Response time */}
                        <div className="glass rounded-2xl border border-white/10 p-5 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">Currently Available</p>
                                <p className="text-slate-400 text-xs">Typical response time: &lt; 24 hours</p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
}
