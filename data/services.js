export const services = [
    {
        id: "react-native",
        iconName: "SiReact",
        title: "React Native Development",
        shortDesc: "Native-feel cross-platform apps for iOS and Android using a single codebase.",
        description:
            "I build performant, scalable mobile applications using React Native that feel truly native on both iOS and Android. From complex animations to native module integrations, I deliver apps that users love.",
        features: [
            "Single codebase for iOS & Android",
            "Custom native module integrations",
            "Redux / Zustand state management",
            "Offline-first architecture",
            "Push notifications (FCM / APNs)",
            "Deep linking & universal links",
        ],
    },
    {
        id: "flutter",
        iconName: "SiFlutter",
        title: "Flutter Development",
        shortDesc: "Beautiful, blazing-fast apps with Google's Flutter framework.",
        description:
            "Flutter enables pixel-perfect UI across Android, iOS, and beyond. I leverage Flutter's rich widget library and Dart's strong typing to build stunning, high-performance apps with smooth 60/120 fps animations.",
        features: [
            "Custom UI with Material 3 & Cupertino",
            "Riverpod / BLoC state management",
            "Platform channel for native APIs",
            "Lottie & custom animations",
            "Firebase integration",
            "Flavors for dev/staging/prod",
        ],
    },
    {
        id: "fullstack",
        iconName: "FaServer",
        title: "Full Stack Mobile Solutions",
        shortDesc: "End-to-end app development including REST/GraphQL APIs and databases.",
        description:
            "Beyond the mobile client, I build the full backend ecosystem: RESTful or GraphQL APIs, databases, authentication systems, and cloud infrastructure to support your app at scale.",
        features: [
            "Node.js / Express / NestJS APIs",
            "MongoDB, PostgreSQL, Firebase",
            "JWT & OAuth 2.0 authentication",
            "Real-time features with Socket.io",
            "AWS / GCP cloud deployment",
            "CI/CD pipelines with GitHub Actions",
        ],
    },
    {
        id: "deployment",
        iconName: "FaStore",
        title: "App Store & Play Store Deployment",
        shortDesc: "Complete publishing process for App Store and Google Play, including ASO.",
        description:
            "Getting your app live is more than hitting 'submit'. I handle the full deployment pipeline — code signing, app metadata, screenshots, ASO keywords, and handling reviewer feedback — so your app reaches users fast.",
        features: [
            "Apple App Store submission & review",
            "Google Play Store publishing",
            "Code signing & certificate management",
            "ASO (App Store Optimization)",
            "Beta testing via TestFlight / Firebase Distribution",
            "Post-launch monitoring & crash reporting",
        ],
    },
];

export const pricingPlans = [
    {
        name: "Basic",
        price: "$1,500",
        period: "/ project",
        description: "Perfect for startups needing a solid MVP to validate their idea.",
        features: [
            "Single platform (iOS or Android)",
            "Up to 5 screens",
            "Basic UI design",
            "Firebase backend",
            "2 rounds of revisions",
            "1 month post-launch support",
        ],
        cta: "Get Started",
        highlighted: false,
    },
    {
        name: "Pro",
        price: "$4,500",
        period: "/ project",
        description: "The most popular option for businesses ready to launch a full product.",
        features: [
            "iOS + Android (cross-platform)",
            "Up to 15 screens",
            "Premium UI/UX design",
            "Custom REST API & database",
            "Payment gateway integration",
            "App Store & Play Store deployment",
            "Unlimited revisions",
            "3 months post-launch support",
        ],
        cta: "Most Popular",
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "quote",
        description: "For complex, large-scale apps with advanced requirements.",
        features: [
            "Everything in Pro",
            "Unlimited screens & complexity",
            "Full-stack architecture design",
            "Third-party API integrations",
            "Dedicated project manager",
            "Source code ownership",
            "6 months post-launch support",
            "SLA & priority support",
        ],
        cta: "Contact Me",
        highlighted: false,
    },
];

export const faqs = [
    {
        question: "How long does it take to build a mobile app?",
        answer:
            "A basic MVP typically takes 4–6 weeks. A full-featured app with backend integration usually takes 8–16 weeks depending on complexity. I'll give you a precise estimate after our discovery call.",
    },
    {
        question: "Do you build for both iOS and Android?",
        answer:
            "Yes! I specialize in cross-platform development with React Native and Flutter, which means you get a single codebase that runs natively on both iOS and Android — saving time and budget.",
    },
    {
        question: "Will I own the source code?",
        answer:
            "Absolutely. Upon final payment, full source code ownership transfers to you. You'll also get all design files, documentation, and deployment credentials.",
    },
    {
        question: "Do you integrate backend/APIs?",
        answer:
            "Yes. I provide full-stack solutions including REST/GraphQL APIs, databases (MongoDB, PostgreSQL, Firebase), authentication, and cloud deployment on AWS or GCP.",
    },
    {
        question: "What's your revision policy?",
        answer:
            "The Basic plan includes 2 revision rounds, the Pro plan includes unlimited revisions during development, and Enterprise includes unlimited revisions with a dedicated feedback loop.",
    },
    {
        question: "How do we communicate during the project?",
        answer:
            "I provide weekly progress updates via a shared project board (Notion/GitHub). We'll have bi-weekly video calls, and you can reach me anytime via Slack or email.",
    },
];
