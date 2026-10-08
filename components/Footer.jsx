import Link from "next/link";
import Logo from "@/components/Logo";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const footerLinks = {
    Pages: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ],
    Services: [
        { label: "React Native", href: "/services#react-native" },
        { label: "Flutter", href: "/services#flutter" },
        { label: "Full Stack", href: "/services#fullstack" },
        { label: "App Deployment", href: "/services#deployment" },
    ],
};

const socials = [
    // { icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/bloomscript-tech", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://x.com/bloom_script", label: "Twitter" },
    { icon: FaEnvelope, href: "mailto:bloom.script.tech@gmail.com", label: "Email" },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/8 bg-ink-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="group inline-flex mb-4" aria-label="BloomScript home">
                            <Logo size={36} />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            BloomScript Technologies is a leading mobile app development company specializing in React Native & Flutter.
                            Building high-performance apps for iOS & Android since 2024.
                        </p>
                        <div className="flex gap-3 mt-6">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-400 hover:border-brand-500/40 transition-all hover:scale-110"
                                >
                                    <Icon size={17} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([group, links]) => (
                        <div key={group}>
                            <h3 className="text-white font-semibold mb-4 text-sm">{group}</h3>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-400 hover:text-brand-400 text-sm transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/8 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} BloomScript. All rights reserved.
                    </p>
                    <p className="text-slate-500 text-sm">
                        Built with{" "}
                        <span className="gradient-text font-medium">Next.js & Tailwind</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
