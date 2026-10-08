"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle, FaGooglePlay } from "react-icons/fa";
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
  SiStripe,
} from "react-icons/si";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import AnimatedSection from "@/components/AnimatedSection";
import PhoneMockup from "@/components/PhoneMockup";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { processSteps } from "@/data/process";

const techStack = [
  { icon: SiReact, name: "React Native", color: "text-cyan-400" },
  { icon: SiFlutter, name: "Flutter", color: "text-sky-400" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-400" },
  { icon: SiFirebase, name: "Firebase", color: "text-amber-400" },
  { icon: SiMongodb, name: "MongoDB", color: "text-emerald-400" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-400" },
  { icon: SiGraphql, name: "GraphQL", color: "text-pink-400" },
  { icon: SiAmazonwebservices, name: "AWS", color: "text-orange-400" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "text-sky-300" },
  { icon: SiStripe, name: "Stripe", color: "text-indigo-400" },
];

const stats = [
  { value: "20+", label: "Apps Delivered" },
  { value: "2+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const bySlug = (slug) => projects.find((p) => p.slug === slug);
const heroPhones = [
  { project: bySlug("rentify-app"), className: "left-0 top-16 w-36 sm:w-48 -rotate-8 animate-float-slow [animation-delay:-2s]" },
  { project: bySlug("eduflow-lms"), className: "right-0 top-16 w-36 sm:w-48 rotate-8 animate-float-slow [animation-delay:-4s]" },
  { project: bySlug("imagene"), className: "left-1/2 top-0 -translate-x-1/2 w-48 sm:w-56 z-10 animate-float", priority: true },
];

export default function HomePage() {
  return (
    <div className="mesh-bg">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-sm font-medium mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                Available for new projects
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
              >
                We Build High-Performance{" "}
                <span className="gradient-text">Mobile Apps</span>
                {" "}for Android & iOS
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
              >
                A React Native & Flutter development agency delivering scalable, cross-platform
                apps that users love — from concept to App Store & Play Store.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-400 to-accent-500 text-ink-950 font-bold text-base shadow-2xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-105 transition-all duration-200"
                >
                  Start Your Project <FaArrowRight size={14} />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass border border-white/15 text-white font-bold text-base hover:border-brand-500/50 hover:bg-white/8 hover:scale-105 transition-all duration-200"
                >
                  View Projects <FaArrowRight size={14} />
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0"
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass rounded-2xl border border-white/10 p-4 text-center lg:text-left"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-slate-400 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Phones */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="relative h-[470px] sm:h-[570px] max-w-[460px] w-full mx-auto"
            >
              <div className="absolute inset-x-8 bottom-6 top-24 rounded-full bg-gradient-to-tr from-brand-500/30 to-accent-600/20 blur-3xl" />
              {heroPhones.map(({ project, className, priority }) => (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  aria-label={project.title}
                  className={`absolute block hover:scale-[1.03] transition-transform duration-300 ${className}`}
                >
                  <PhoneMockup
                    src={project.screens[0]}
                    alt={`${project.title} app screen`}
                    sizes="(min-width: 640px) 224px, 192px"
                    priority={priority}
                    className="w-full"
                  />
                </Link>
              ))}

              {/* Floating badges */}
              <div className="absolute left-0 bottom-0 z-20 rounded-2xl border border-white/15 px-4 py-3 flex items-center gap-3 shadow-xl shadow-black/40 bg-ink-900/95 backdrop-blur">
                <div className="flex -space-x-1.5">
                  <span className="w-7 h-7 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center"><SiReact className="text-cyan-400" size={14} /></span>
                  <span className="w-7 h-7 rounded-full bg-ink-800 border border-white/10 flex items-center justify-center"><SiFlutter className="text-sky-400" size={13} /></span>
                </div>
                <div className="text-left">
                  <div className="text-white text-xs font-bold">One codebase</div>
                  <div className="text-slate-400 text-[11px]">iOS + Android</div>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 z-20 rounded-2xl border border-white/15 px-4 py-3 flex items-center gap-3 shadow-xl shadow-black/40 bg-ink-900/95 backdrop-blur">
                <span className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center">
                  <FaGooglePlay className="text-emerald-400" size={13} />
                </span>
                <div className="text-left">
                  <div className="text-white text-xs font-bold">Shipped to stores</div>
                  <div className="text-slate-400 text-[11px]">Submission handled</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TECH MARQUEE ─────────────────────────────────────── */}
      <section className="py-10 border-y border-white/8 bg-ink-900/40">
        <p className="text-center text-slate-500 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
          Technologies we build with
        </p>
        <div className="fade-x overflow-hidden">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...techStack, ...techStack].map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`${tech.name}-${i}`}
                  aria-hidden={i >= techStack.length}
                  className="flex items-center gap-3 px-8 text-slate-400 hover:text-white transition-colors"
                >
                  <Icon size={26} className={tech.color} />
                  <span className="text-sm font-semibold whitespace-nowrap">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ──────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="What We Do"
            title={
              <>
                Services That{" "}
                <span className="gradient-text">Drive Results</span>
              </>
            }
            subtitle="From initial concept to App Store launch, we cover the full mobile development lifecycle."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
          <AnimatedSection className="text-center mt-10" delay={0.2}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand-400 font-semibold hover:text-brand-300 transition-colors group"
            >
              View all services{" "}
              <FaArrowRight
                size={12}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Portfolio"
            title={
              <>
                Featured{" "}
                <span className="gradient-text">Projects</span>
              </>
            }
            subtitle="A selection of real-world apps we've built for clients across industries."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
          <AnimatedSection className="text-center mt-10" delay={0.2}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl glass border border-white/15 text-white font-semibold hover:border-brand-500/50 transition-all duration-200"
            >
              View All Projects <FaArrowRight size={13} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="How We Work"
            title={
              <>
                From Idea to{" "}
                <span className="gradient-text">App Store</span>
              </>
            }
            subtitle="A clear four-step process, so you always know what happens next."
          />
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-500/0 via-brand-500/40 to-brand-500/0" />
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.step} delay={i * 0.1} className="relative text-center">
                  <div className="relative mx-auto w-16 h-16 rounded-2xl bg-ink-900 border border-brand-500/30 flex items-center justify-center mb-5 shadow-lg shadow-brand-500/10">
                    <Icon className="text-brand-400" size={22} />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-brand-400 to-accent-500 text-ink-950 text-[11px] font-extrabold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-[15rem] mx-auto">{step.short}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ──────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Testimonials"
            title={
              <>
                What{" "}
                <span className="gradient-text">Clients Say</span>
              </>
            }
            subtitle="Don't just take our word for it — hear from the people we've worked with."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="relative glass rounded-3xl border border-brand-500/20 p-8 sm:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-accent-600/10" />
              <div className="absolute inset-0 grid-bg" />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-500/15 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-600/15 rounded-full blur-3xl" />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-semibold uppercase tracking-widest mb-6">
                  Ready to build?
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-5">
                  Have a{" "}
                  <span className="gradient-text">project in mind?</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                  Let's turn your idea into a polished, production-ready mobile app.
                  Get a free consultation and project estimate today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-400 to-accent-500 text-ink-950 font-bold shadow-2xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-105 transition-all duration-200"
                  >
                    Start Your Project <FaArrowRight size={14} />
                  </Link>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <FaCheckCircle className="text-emerald-400" />
                    Free consultation · No commitment
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
