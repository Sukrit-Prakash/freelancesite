"use client";
import { motion } from "framer-motion";
import { FaServer, FaStore, FaMobileAlt } from "react-icons/fa";
import { SiFlutter, SiReact } from "react-icons/si";

const iconMap = {
    SiReact,
    SiFlutter,
    FaServer,
    FaStore,
    FaMobileAlt,
};

export default function ServiceCard({ service, index = 0 }) {
    const Icon = iconMap[service.iconName] || FaMobileAlt;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="glass rounded-2xl border border-white/10 p-6 hover:border-violet-500/40 group transition-all duration-300"
        >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-blue-500/20 border border-violet-500/20 flex items-center justify-center mb-5 group-hover:border-violet-500/50 transition-colors">
                <Icon size={22} className="text-violet-400" />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{service.shortDesc}</p>
        </motion.div>
    );
}
