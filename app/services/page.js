"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaChevronDown, FaArrowRight, FaServer, FaStore, FaMobileAlt } from "react-icons/fa";
import { SiFlutter, SiReact } from "react-icons/si";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { services, pricingPlans, faqs } from "@/data/services";

const iconMap = { SiReact, SiFlutter, FaServer, FaStore, FaMobileAlt };

function ServiceSection({ service, index }) {
    const Icon = iconMap[service.iconName] || FaMobileAlt;
    const isEven = index % 2 === 0;

    return (
        <div id={service.id} className="py-20 border-b border-white/8 last:border-0">
            <div
                className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } items-center gap-12`}
            >
                {/* Text */}
                <AnimatedSection className="flex-1" delay={0}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-widest mb-5">
                        {Icon && <Icon size={14} />} {service.title}
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                        {service.title}
                    </h2>
                    <p className="text-slate-400 leading-relaxed mb-8">{service.description}</p>
                    <ul className="space-y-3">
                        {service.features.map((f) => (
                            <li key={f} className="flex items-center gap-3 text-slate-300 text-sm">
                                <FaCheckCircle className="text-violet-400 flex-shrink-0" size={14} />
                                {f}
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold text-sm shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 transition-all duration-200"
                    >
                        Get a Quote <FaArrowRight size={12} />
                    </Link>
                </AnimatedSection>

                {/* Visual card */}
                <AnimatedSection className="flex-1" delay={0.15}>
                    <div className="relative glass rounded-3xl border border-white/10 p-8 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/8 to-blue-600/8" />
                        <div className="relative z-10 flex flex-col items-center gap-5">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center shadow-xl shadow-violet-500/30">
                                {Icon && <Icon size={36} className="text-white" />}
                            </div>
                            <h3 className="text-white font-bold text-xl">{service.title}</h3>
                            <div className="w-full grid grid-cols-2 gap-3">
                                {service.features.slice(0, 4).map((f) => (
                                    <div
                                        key={f}
                                        className="bg-white/5 rounded-xl p-3 border border-white/8 text-slate-400 text-xs"
                                    >
                                        {f}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}

function FAQItem({ faq, index }) {
    const [open, setOpen] = useState(false);

    return (
        <AnimatedSection delay={index * 0.07}>
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left glass rounded-2xl border border-white/10 p-6 hover:border-violet-500/30 transition-all duration-200"
            >
                <div className="flex items-center justify-between gap-4">
                    <span className="text-white font-semibold text-sm sm:text-base">
                        {faq.question}
                    </span>
                    <motion.span
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-violet-400 flex-shrink-0"
                    >
                        <FaChevronDown size={14} />
                    </motion.span>
                </div>
                <AnimatePresence>
                    {open && (
                        <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="text-slate-400 text-sm leading-relaxed mt-4 overflow-hidden"
                        >
                            {faq.answer}
                        </motion.p>
                    )}
                </AnimatePresence>
            </button>
        </AnimatedSection>
    );
}

export default function ServicesPage() {
    return (
        <div className="mesh-bg pt-20">
            {/* Hero */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
                <AnimatedSection>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-widest mb-6">
                        Services
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
                        Expert Mobile{" "}
                        <span className="gradient-text">Development Services</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        End-to-end mobile app development — from ideation to App Store launch.
                        We specialize in React Native, Flutter, and full-stack solutions.
                    </p>
                </AnimatedSection>
            </section>

            {/* Service Sections */}
            {services.map((service, i) => (
                <ServiceSection key={service.id} service={service} index={i} />
            ))}

            {/* Pricing */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        label="Pricing"
                        title={
                            <>
                                Simple, Transparent{" "}
                                <span className="gradient-text">Pricing</span>
                            </>
                        }
                        subtitle="Choose the package that fits your project. All plans include full source code delivery."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {pricingPlans.map((plan, i) => (
                            <AnimatedSection key={plan.name} delay={i * 0.1}>
                                <div
                                    className={`relative glass rounded-2xl p-8 flex flex-col h-full transition-all duration-300 ${plan.highlighted
                                        ? "border-2 border-violet-500 glow-purple"
                                        : "border border-white/10 hover:border-violet-500/40"
                                        }`}
                                >
                                    {plan.highlighted && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                            <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 text-white text-xs font-bold shadow-lg">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}
                                    <div className="mb-6">
                                        <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                                        <div className="flex items-baseline gap-1 mb-3">
                                            <span className="text-4xl font-extrabold gradient-text">
                                                {plan.price}
                                            </span>
                                            <span className="text-slate-500 text-sm">{plan.period}</span>
                                        </div>
                                        <p className="text-slate-400 text-sm">{plan.description}</p>
                                    </div>
                                    <ul className="space-y-3 flex-1 mb-8">
                                        {plan.features.map((f) => (
                                            <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                                                <FaCheckCircle className="text-violet-400 flex-shrink-0" size={13} />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/contact"
                                        className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 ${plan.highlighted
                                            ? "bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-lg shadow-violet-500/25"
                                            : "glass border border-white/15 text-white hover:border-violet-500/40"
                                            }`}
                                    >
                                        {plan.cta} <FaArrowRight size={12} />
                                    </Link>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <SectionHeading
                        label="FAQ"
                        title={
                            <>
                                Frequently Asked{" "}
                                <span className="gradient-text">Questions</span>
                            </>
                        }
                        subtitle="Answers to the most common questions from clients."
                    />
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <FAQItem key={faq.question} faq={faq} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to get started?
                    </h2>
                    <p className="text-slate-400 mb-8">
                        Let's discuss your project requirements and build something amazing together.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white font-bold shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-200"
                    >
                        Schedule a Free Call <FaArrowRight size={14} />
                    </Link>
                </AnimatedSection>
            </section>
        </div>
    );
}
