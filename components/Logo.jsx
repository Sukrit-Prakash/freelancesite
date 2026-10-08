import { useId } from "react";

// The BloomScript bulb, redrawn as SVG so it stays crisp and works on dark backgrounds.
// The original logo (public/logo.png) has navy strokes on a cream grid, which disappear on the dark theme.
export function LogoMark({ size = 40, className = "" }) {
    const id = useId();
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <defs>
                <linearGradient id={`${id}-bulb`} x1="20" y1="8" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#fcd34d" />
                    <stop offset="1" stopColor="#f58b0b" />
                </linearGradient>
            </defs>
            {/* Glow arcs */}
            <path d="M12.27 32.18A21 21 0 0 1 28.35 4.32" stroke="#fdf6e9" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M51.73 17.82A21 21 0 0 1 48.09 38.5" stroke="#fdf6e9" strokeWidth="2.6" strokeLinecap="round" />
            {/* Bulb */}
            <circle cx="32" cy="25" r="15" fill={`url(#${id}-bulb)`} />
            <rect x="25" y="32" width="14" height="11" rx="3" fill={`url(#${id}-bulb)`} />
            {/* Circuit tree */}
            <g stroke="#2b2546" strokeWidth="2.4" strokeLinecap="round" fill="none">
                <path d="M32 16v27" />
                <path d="M32 30c-4 0-6-2-6-6" />
                <path d="M32 35c4 0 6-2 6-6" />
            </g>
            <g fill="#2b2546">
                <circle cx="32" cy="15" r="2.6" />
                <circle cx="26" cy="23" r="2.6" />
                <circle cx="38" cy="28" r="2.6" />
            </g>
            {/* Base */}
            <g stroke="#fdf6e9" strokeWidth="2.4" strokeLinecap="round">
                <path d="M25 48h14" />
                <path d="M26.5 52h11" />
                <path d="M28.5 56h7" />
            </g>
        </svg>
    );
}

export default function Logo({ size = 40, className = "" }) {
    return (
        <span className={`flex items-center gap-2 ${className}`}>
            <LogoMark size={size} className="shrink-0 transition-transform duration-300 group-hover:rotate-[-8deg]" />
            <span className="font-bold text-lg text-white tracking-tight">
                Bloom<span className="gradient-text">Script</span>
            </span>
        </span>
    );
}
