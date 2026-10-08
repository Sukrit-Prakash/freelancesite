import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaGooglePlay, FaAppStore } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";
import PhoneMockup from "@/components/PhoneMockup";

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return {};
    return {
        title: project.title,
        description: project.shortDesc,
    };
}

export default async function ProjectDetailPage({ params }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) notFound();

    const [cover, second] = project.screens;
    const storeLinks = [
        project.playStore && { href: project.playStore, label: "Get it on Google Play", icon: FaGooglePlay, iconClass: "text-emerald-400" },
        project.appStore && { href: project.appStore, label: "Download on App Store", icon: FaAppStore, iconClass: "text-sky-400" },
    ].filter(Boolean);

    return (
        <div className="mesh-bg pt-20 min-h-screen">
            {/* Hero banner */}
            <section className="relative overflow-hidden border-b border-white/8">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{ background: `radial-gradient(circle at 75% 60%, ${project.color}, transparent 55%)` }}
                />
                <div className="absolute inset-0 grid-bg" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-20">
                    <AnimatedSection>
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-400 transition-colors text-sm mb-8"
                        >
                            <FaArrowLeft size={12} /> Back to Portfolio
                        </Link>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-300 text-xs font-semibold">
                                {project.category}
                            </span>
                            {storeLinks.length > 0 && (
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    Live in store
                                </span>
                            )}
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-slate-300 text-lg max-w-xl">{project.shortDesc}</p>

                        {storeLinks.length > 0 && (
                            <div className="flex flex-wrap gap-3 mt-8">
                                {storeLinks.map(({ href, label, icon: Icon, iconClass }) => (
                                    <a
                                        key={href}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/15 text-white text-sm font-semibold hover:border-brand-500/50 transition-all"
                                    >
                                        <Icon className={iconClass} /> {label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </AnimatedSection>

                    {/* Phones */}
                    <AnimatedSection delay={0.15} className="relative h-[420px] sm:h-[520px]">
                        {second && (
                            <PhoneMockup
                                src={second}
                                alt={`${project.title} second screen`}
                                sizes="240px"
                                className="absolute left-1/2 top-10 w-40 sm:w-56 translate-x-[5%] rotate-6 opacity-90"
                            />
                        )}
                        <PhoneMockup
                            src={cover}
                            alt={`${project.title} main screen`}
                            sizes="260px"
                            priority
                            className="absolute left-1/2 top-0 w-44 sm:w-60 -translate-x-[95%] -rotate-3 animate-float-slow"
                        />
                    </AnimatedSection>
                </div>
            </section>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Main content */}
                    <div className="lg:col-span-2 space-y-10">
                        <AnimatedSection>
                            <h2 className="text-2xl font-bold text-white mb-4">About the Project</h2>
                            <p className="text-slate-400 leading-relaxed text-base">
                                {project.longDesc}
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.1}>
                            <h2 className="text-2xl font-bold text-white mb-5">Key Features</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {project.features.map((f) => (
                                    <li key={f} className="flex items-start gap-3 text-slate-300 glass rounded-xl border border-white/8 p-4 text-sm">
                                        <FaCheckCircle className="text-brand-400 flex-shrink-0 mt-0.5" size={15} />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>
                    </div>

                    {/* Sidebar */}
                    <AnimatedSection delay={0.15}>
                        <div className="glass rounded-2xl border border-white/10 p-6 sticky top-24 space-y-6">
                            <div>
                                <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-200 font-medium"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="border-t border-white/8 pt-6">
                                <p className="text-slate-400 text-sm mb-4">
                                    Interested in a similar project?
                                </p>
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-brand-400 to-accent-500 text-ink-950 font-semibold text-sm shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-105 transition-all duration-200"
                                >
                                    Discuss Your Project
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Screens gallery */}
                <AnimatedSection delay={0.1} className="mt-20">
                    <h2 className="text-2xl font-bold text-white mb-8">Screens</h2>
                    <div className="relative rounded-3xl border border-white/8 bg-ink-900/60 overflow-hidden px-6 py-12">
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{ background: `radial-gradient(circle at 50% 100%, ${project.color}, transparent 60%)` }}
                        />
                        <div className="relative flex flex-wrap justify-center gap-8 sm:gap-12">
                            {project.screens.map((src, i) => (
                                <PhoneMockup
                                    key={src}
                                    src={src}
                                    alt={`${project.title} screen ${i + 1}`}
                                    sizes="260px"
                                    className="w-52 sm:w-60"
                                />
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* Other projects */}
                <AnimatedSection delay={0.2} className="mt-20 pt-12 border-t border-white/8">
                    <h2 className="text-2xl font-bold text-white mb-2">More Projects</h2>
                    <p className="text-slate-400 mb-8 text-sm">Explore other work from the BloomScript Technologies portfolio.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {projects
                            .filter((p) => p.slug !== project.slug)
                            .slice(0, 3)
                            .map((related) => (
                                <Link
                                    key={related.slug}
                                    href={`/portfolio/${related.slug}`}
                                    className="glass rounded-xl border border-white/10 p-4 hover:border-brand-500/40 transition-all group flex items-center gap-4"
                                >
                                    <div className="relative w-12 h-16 rounded-lg overflow-hidden flex-shrink-0 ring-1 ring-white/10">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={related.screens[0]} alt="" className="w-full h-full object-cover object-top" />
                                    </div>
                                    <div className="min-w-0">
                                        <span className="text-xs text-brand-400 font-medium">{related.category}</span>
                                        <h4 className="text-white font-semibold text-sm mt-1 group-hover:text-brand-300 transition-colors">
                                            {related.title}
                                        </h4>
                                    </div>
                                    <FaArrowRight size={11} className="ml-auto text-slate-500 group-hover:text-brand-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                                </Link>
                            ))}
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}
