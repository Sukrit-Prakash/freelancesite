import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { FaArrowLeft, FaCheckCircle, FaGooglePlay, FaAppStore } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return {};
    return {
        title: project.title,
        description: project.shortDesc,
    };
}

const gradients = [
    "from-violet-600/30 to-blue-600/30",
    "from-blue-600/30 to-cyan-500/30",
    "from-fuchsia-600/30 to-violet-600/30",
    "from-cyan-500/30 to-teal-500/30",
    "from-emerald-500/30 to-blue-500/30",
    "from-orange-500/30 to-rose-500/30",
];

export default function ProjectDetailPage({ params }) {
    const idx = projects.findIndex((p) => p.slug === params.slug);
    const project = projects[idx];

    if (!project) notFound();

    const gradient = gradients[idx % gradients.length];

    return (
        <div className="mesh-bg pt-20 min-h-screen">
            {/* Hero banner */}
            <div className={`relative bg-gradient-to-br ${gradient} py-24 border-b border-white/8`}>
                <div className="absolute inset-0 bg-[#020817]/60" />
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <AnimatedSection>
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-violet-400 transition-colors text-sm mb-8"
                        >
                            <FaArrowLeft size={12} /> Back to Portfolio
                        </Link>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-400 text-xs font-semibold">
                                {project.category}
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                            {project.title}
                        </h1>
                        <p className="text-slate-300 text-lg max-w-2xl">{project.shortDesc}</p>

                        {/* Store links */}
                        <div className="flex gap-3 mt-8">
                            {project.appStore && (
                                <a
                                    href={project.appStore}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/15 text-white text-sm font-medium hover:border-violet-500/40 transition-all"
                                >
                                    <FaAppStore className="text-blue-400" /> App Store
                                </a>
                            )}
                            {project.playStore && (
                                <a
                                    href={project.playStore}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/15 text-white text-sm font-medium hover:border-violet-500/40 transition-all"
                                >
                                    <FaGooglePlay className="text-green-400" /> Play Store
                                </a>
                            )}
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                            <ul className="space-y-3">
                                {project.features.map((f) => (
                                    <li key={f} className="flex items-start gap-3 text-slate-300">
                                        <FaCheckCircle className="text-violet-400 flex-shrink-0 mt-0.5" size={15} />
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
                                            className="text-xs px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 font-medium"
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
                                    className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold text-sm shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 transition-all duration-200"
                                >
                                    Discuss Your Project
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Other projects */}
                <AnimatedSection delay={0.2} className="mt-20 pt-12 border-t border-white/8">
                    <h2 className="text-2xl font-bold text-white mb-2">More Projects</h2>
                    <p className="text-slate-400 mb-8 text-sm">Explore other work from BloomScript Technologies portfolio.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {projects
                            .filter((p) => p.slug !== project.slug)
                            .slice(0, 3)
                            .map((related) => (
                                <Link
                                    key={related.slug}
                                    href={`/portfolio/${related.slug}`}
                                    className="glass rounded-xl border border-white/10 p-4 hover:border-violet-500/40 transition-all group"
                                >
                                    <span className="text-xs text-violet-400 font-medium">{related.category}</span>
                                    <h4 className="text-white font-semibold text-sm mt-1 group-hover:gradient-text transition-all">
                                        {related.title}
                                    </h4>
                                </Link>
                            ))}
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}
