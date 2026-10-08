import { FaLightbulb, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";

export const processSteps = [
    {
        step: "01",
        icon: FaLightbulb,
        title: "Discovery",
        short: "Goals, users and scope — agreed before any code.",
        desc: "We start with a deep-dive conversation to understand your goals, target audience, and technical requirements. We produce a detailed project scope and timeline.",
    },
    {
        step: "02",
        icon: FaPencilRuler,
        title: "Design",
        short: "Wireframes and UI mockups you sign off on.",
        desc: "We create wireframes and high-fidelity UI mockups for your review. We iterate until the design perfectly reflects your vision before a single line of code is written.",
    },
    {
        step: "03",
        icon: FaCode,
        title: "Development",
        short: "Weekly sprints and demos, so you always see progress.",
        desc: "Clean, well-tested code following SOLID principles. We deliver features in sprints with weekly demos so you always know exactly where the project stands.",
    },
    {
        step: "04",
        icon: FaRocket,
        title: "Deployment",
        short: "Store submission, launch and post-launch support.",
        desc: "Full app store submission, code signing, ASO optimization, and post-launch monitoring. We're with you every step of the way through launch and beyond.",
    },
];
