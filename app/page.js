"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaMobileAlt,
  FaCheckCircle,
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
} from "react-icons/si";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

const techStack = [
  { icon: SiReact, name: "React Native", color: "text-cyan-400" },
  { icon: SiFlutter, name: "Flutter", color: "text-blue-400" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-400" },
  { icon: SiFirebase, name: "Firebase", color: "text-amber-400" },
  { icon: SiMongodb, name: "MongoDB", color: "text-emerald-400" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-300" },
  { icon: SiGraphql, name: "GraphQL", color: "text-pink-400" },
  { icon: SiAmazonwebservices, name: "AWS", color: "text-orange-400" },
];

const stats = [
  { value: "20+", label: "Apps Delivered" },
  // { value: "30+", label: "Happy Clients" },
  { value: "2+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

export default function HomePage() {
  return (
    <div className="mesh-bg">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              Available for new projects
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
            >
              We Build High-Performance{" "}
              <span className="gradient-text">Mobile Apps</span>
              {" "}for Android & iOS
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            >
              Expert React Native & Flutter development agency  delivering scalable, cross-platform
              mobile experiences that users love — from concept to App Store & Play Store.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white font-bold text-base shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-200"
              >
                Contact Us <FaArrowRight size={14} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass border border-white/15 text-white font-bold text-base hover:border-violet-500/50 hover:bg-white/8 hover:scale-105 transition-all duration-200"
              >
                View Projects <FaArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl border border-white/10 p-4 text-center"
                >
                  <div className="text-3xl font-extrabold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ──────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="What I Do"
            title={
              <>
                Services That{" "}
                <span className="gradient-text">Drive Results</span>
              </>
            }
            subtitle="From initial concept to App Store launch, I cover the full mobile development lifecycle."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
          <AnimatedSection className="text-center mt-10" delay={0.2}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-violet-400 font-semibold hover:text-violet-300 transition-colors group"
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
            subtitle="A selection of real-world apps I've built for clients across industries."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
          <AnimatedSection className="text-center mt-10" delay={0.2}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl glass border border-white/15 text-white font-semibold hover:border-violet-500/50 transition-all duration-200"
            >
              View All Projects <FaArrowRight size={13} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── TESTIMONIALS ──────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Testimonials"
            title={
              <>
                What{" "}
                <span className="gradient-text">Clients Say</span>
              </>
            }
            subtitle="Don't just take my word for it — hear from the people I've worked with."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Tech Stack"
            title={
              <>
                Technologies We {" "}
                <span className="gradient-text">Master</span>
              </>
            }
            subtitle="A curated toolkit of modern technologies I use to build production-grade apps."
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <AnimatedSection key={tech.name} delay={i * 0.05}>
                  <div className="glass rounded-2xl border border-white/10 p-4 hover:border-violet-500/40 group flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1">
                    <Icon
                      size={32}
                      className={`${tech.color} group-hover:scale-110 transition-transform`}
                    />
                    <span className="text-slate-400 text-xs font-medium text-center">
                      {tech.name}
                    </span>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="relative glass rounded-3xl border border-violet-500/20 p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-blue-600/10" />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-600/15 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl" />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-widest mb-6">
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
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 text-white font-bold shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-200"
                  >
                    Start Your Project <FaArrowRight size={14} />
                  </Link>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <FaCheckCircle className="text-green-400" />
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
