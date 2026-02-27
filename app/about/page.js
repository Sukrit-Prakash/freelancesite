"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaCheckCircle,
    FaLightbulb,
    FaPencilRuler,
    FaCode,
    FaRocket,
    FaArrowRight,
} from "react-icons/fa";
import {
    SiReact,
    SiFlutter,
    SiNodedotjs,
    SiFirebase,
    SiMongodb,
    SiTypescript,
    SiGraphql,
    SiAmazonwebservices,
    SiPostgresql,
    SiGit,
} from "react-icons/si";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";

const skills = [
    { icon: SiReact, name: "React Native", level: 98, color: "from-cyan-500 to-cyan-400" },
    { icon: SiFlutter, name: "Flutter / Dart", level: 94, color: "from-blue-500 to-blue-400" },
    { icon: SiNodedotjs, name: "Node.js", level: 90, color: "from-green-500 to-green-400" },
    { icon: SiFirebase, name: "Firebase", level: 92, color: "from-amber-500 to-amber-400" },
    { icon: SiMongodb, name: "MongoDB", level: 87, color: "from-emerald-500 to-emerald-400" },
    { icon: SiTypescript, name: "TypeScript", level: 88, color: "from-blue-400 to-blue-300" },
    { icon: SiGraphql, name: "GraphQL", level: 82, color: "from-pink-500 to-pink-400" },
    { icon: SiAmazonwebservices, name: "AWS", level: 80, color: "from-orange-500 to-orange-400" },
    { icon: SiPostgresql, name: "PostgreSQL", level: 85, color: "from-sky-500 to-sky-400" },
    { icon: SiGit, name: "Git / CI/CD", level: 95, color: "from-rose-500 to-rose-400" },
];

const process = [
    {
        step: "01",
        icon: FaLightbulb,
        title: "Discovery",
        desc: "We start with a deep-dive conversation to understand your goals, target audience, and technical requirements. We produce a detailed project scope and timeline.",
    },
    {
        step: "02",
        icon: FaPencilRuler,
        title: "Design",
        desc: "We create wireframes and high-fidelity UI mockups for your review. We iterate until the design perfectly reflects your vision before a single line of code is written.",
    },
    {
        step: "03",
        icon: FaCode,
        title: "Development",
        desc: "Clean, well-tested code following SOLID principles. We deliver features in sprints with weekly demos so you always know exactly where the project stands.",
    },
    {
        step: "04",
        icon: FaRocket,
        title: "Deployment",
        desc: "Full app store submission, code signing, ASO optimization, and post-launch monitoring. We're with you every step of the way through launch and beyond.",
    },
];

const whyChooseMe = [
    "2+ years of mobile-first development experience",
    "50+ apps shipped to App Store & Google Play",
    "Single developer accountability — no handoff chaos",
    "Pixel-perfect UI with outstanding UX attention",
    "Full transparency: weekly updates & shared project board",
    "End-to-end ownership from backend to app store",
    "Post-launch support & maintenance on every project",
    "NDA-friendly with full source code ownership",
];

function SkillBar({ skill, index }) {
    const Icon = skill.icon;
    return (
        <AnimatedSection delay={index * 0.05}>
            <div className="glass rounded-xl border border-white/10 p-4 hover:border-violet-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                    <Icon size={18} className="text-slate-300" />
                    <span className="text-slate-300 text-sm font-medium flex-1">{skill.name}</span>
                    <span className="text-violet-400 text-sm font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 + index * 0.04 }}
                        className={`h-1.5 rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                </div>
            </div>
        </AnimatedSection>
    );
}

export default function AboutPage() {
    return (
        <div className="mesh-bg pt-20">
            {/* Hero */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: text */}
                        <AnimatedSection>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-widest mb-6">
                                About Our Agency
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
                                We Build <span className="gradient-text">High-Performance</span> Mobile Apps 🚀
                            </h1>

                            <p className="text-slate-400 leading-relaxed mb-5">
                                We are a mobile app development agency specializing in React Native and Flutter,
                                delivering scalable, cross-platform applications for startups, growing businesses,
                                and enterprises worldwide.
                            </p>


                            <p className="text-slate-400 leading-relaxed mb-8">
                                With 2+ years of experience and 50+ successfully launched apps on the App Store
                                and Google Play, our team focuses on clean architecture, exceptional UI/UX,
                                and long-term product scalability. We don’t just build apps — we build
                                digital products that drive growth.
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold text-sm shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 transition-all duration-200"
                                >
                                    Start a Project <FaArrowRight size={12} />
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl glass border border-white/15 text-white font-semibold text-sm hover:border-violet-500/40 transition-all duration-200"
                                >
                                   View Case Studies
                                </Link>
                            </div>
                        </AnimatedSection>

                        {/* Right: avatar card */}
                        <AnimatedSection delay={0.15}>
                            <div className="relative">
                                <div className="glass rounded-3xl border border-white/10 p-8 text-center overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/8 to-blue-600/8" />
                                    <div className="relative z-10">
                                        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-violet-500/30">
                                            <span className="text-white font-extrabold text-4xl">BST</span>
                                        </div>
                                        <h2 className="text-white font-bold text-xl mb-1">Bloom Script Technologies</h2>
                                        <p className="text-violet-400 text-sm font-medium mb-5">
                                            Mobile App Development Agency
                                        </p>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                { n: "50+", l: "Apps Shipped" },
                                                // { n: "30+", l: "Happy Clients" },
                                                { n: "2+", l: "Years Exp." },
                                                { n: "99%", l: "Satisfaction" },
                                            ].map((s) => (
                                                <div
                                                    key={s.l}
                                                    className="bg-white/5 rounded-xl p-3 border border-white/8"
                                                >
                                                    <div className="text-2xl font-extrabold gradient-text">{s.n}</div>
                                                    <div className="text-slate-500 text-xs">{s.l}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Skills
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        label="Skills"
                        title={
                            <>
                                My Technical{" "}
                                <span className="gradient-text">Expertise</span>
                            </>
                        }
                        subtitle="A decade of sharpening these skills across real production projects."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {skills.map((skill, i) => (
                            <SkillBar key={skill.name} skill={skill} index={i} />
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Process */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        label="Our Process"
                        title={
                            <>
                                How We Work With{" "}
                                <span className="gradient-text">Clients</span>
                            </>
                        }
                        subtitle="A proven 4-step process that delivers great results, on time and on budget."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <AnimatedSection key={step.step} delay={i * 0.1}>
                                    <div className="glass rounded-2xl border border-white/10 p-6 hover:border-violet-500/40 group transition-all h-full">
                                        <div className="text-6xl font-extrabold text-white/5 mb-3 leading-none">
                                            {step.step}
                                        </div>
                                        <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center mb-4">
                                            <Icon className="text-violet-400" size={18} />
                                        </div>
                                        <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Me */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <SectionHeading
                            label="Why Us"
                            title={
                                <>
                                    Why Clients Choose{" "}
                                    <span className="gradient-text">Us</span>
                                </>
                            }
                            subtitle="Beyond technical skill, We bring reliability, communication, and a genuine investment in your project's success."
                            centered={false}
                        />
                        <AnimatedSection delay={0.1}>
                            <div className="grid grid-cols-1 gap-3">
                                {whyChooseMe.map((point, i) => (
                                    <motion.div
                                        key={point}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.07, duration: 0.4 }}
                                        className="flex items-center gap-3 glass rounded-xl border border-white/10 px-4 py-3"
                                    >
                                        <FaCheckCircle className="text-violet-400 flex-shrink-0" size={13} />
                                        <span className="text-slate-300 text-sm">{point}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to build something great?
                    </h2>
                    <p className="text-slate-400 mb-8">
                        Let's hop on a free 30-minute call to discuss your project.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white font-bold shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-200"
                    >
                        Let's Talk <FaArrowRight size={14} />
                    </Link>
                </AnimatedSection>
            </section>
        </div>
    );
}
