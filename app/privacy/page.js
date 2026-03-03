import React from 'react';

export const metadata = {
    title: 'Privacy Policy',
    description: 'Official privacy policy for the 3Monkey mobile application by Bloom Script Tech.',
};

export default function PrivacyPolicy() {
    const lastUpdated = "March 03, 2026";

    return (
        <div className="mesh-bg min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-24 leading-relaxed">

                {/* Header */}
                <header className="mb-14 text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-widest mb-6">
                        Legal
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-500 text-sm italic">Last Updated: {lastUpdated}</p>
                </header>

                {/* Content */}
                <div className="space-y-8 text-slate-300">

                    {/* 1. Introduction */}
                    <div className="glass rounded-2xl border border-white/10 p-8">
                        <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
                        <p>
                            Welcome to <strong className="text-white">3Monkey</strong>. This Privacy Policy is designed to
                            inform you about how <strong className="text-white">Bloom Script Tech</strong> ("we", "us", or "our")
                            handles information when you use our mobile application. We respect your privacy and are committed
                            to protecting it through our compliance with this policy.
                        </p>
                    </div>

                    {/* 2. Information Collection */}
                    <div className="glass rounded-2xl border border-white/10 p-8">
                        <h2 className="text-xl font-bold text-white mb-3">2. Information Collection</h2>
                        <p className="mb-4">
                            3Monkey is built as a Freemium app. We do not require users to create an account or provide
                            personally identifiable information (PII) to play. However, the app utilizes third-party
                            libraries that may collect data.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong className="text-slate-200">Device Information:</strong> We may collect data such
                                as device model, OS version, and unique device identifiers.
                            </li>
                            <li>
                                <strong className="text-slate-200">Usage Data:</strong> Information about how you interact
                                with the app (e.g., quiz scores, time spent).
                            </li>
                        </ul>
                    </div>

                    {/* 3. Advertising & Analytics */}
                    <div className="glass rounded-2xl border border-violet-500/20 p-8 bg-violet-500/5">
                        <h2 className="text-xl font-bold text-white mb-3">3. Advertising &amp; Analytics</h2>
                        <p className="mb-4">
                            We use <strong className="text-white">Google AdMob</strong> to serve advertisements. To
                            provide relevant ads, Google may collect and use your{' '}
                            <strong className="text-white">Advertising ID</strong>.
                        </p>
                        <p className="mb-3">AdMob uses these identifiers to:</p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-300">
                            <li>Personalize advertisements based on user interests.</li>
                            <li>Limit the number of times you see the same ad.</li>
                            <li>Measure the effectiveness of ad campaigns.</li>
                        </ul>
                        <p className="mt-4 text-sm text-violet-400 font-medium">
                            You can opt-out of personalized ads in your Android device settings (Google &gt; Ads).
                        </p>
                    </div>

                    {/* 4. Data Safety & Third Parties */}
                    <div className="glass rounded-2xl border border-white/10 p-8">
                        <h2 className="text-xl font-bold text-white mb-3">4. Data Safety &amp; Third Parties</h2>
                        <p className="mb-4">
                            We do not sell, trade, or otherwise transfer your information to outside parties.
                            The third-party service providers used by the app include:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <a
                                    href="https://policies.google.com/privacy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
                                >
                                    Google Play Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://support.google.com/admob/answer/6128543"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
                                >
                                    AdMob
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* 5. Children's Privacy */}
                    <div className="glass rounded-2xl border border-white/10 p-8">
                        <h2 className="text-xl font-bold text-white mb-3">5. Children&apos;s Privacy</h2>
                        <p>
                            Our services do not address anyone under the age of 13. We do not knowingly collect
                            personally identifiable information from children under 13. If we discover a child
                            under 13 has provided us with personal info, we immediately delete this from our servers.
                        </p>
                    </div>

                    {/* 6. Contact Information */}
                    <div className="glass rounded-2xl border border-white/10 p-8">
                        <h2 className="text-xl font-bold text-white mb-3">6. Contact Information</h2>
                        <p className="mb-3">
                            If you have any questions or suggestions about our Privacy Policy, do not hesitate to
                            contact <strong className="text-white">Bloom Script Tech</strong> at:
                        </p>
                        <a
                            href="mailto:bloom.script.tech@gmail.com"
                            className="font-mono text-violet-400 hover:text-violet-300 transition-colors"
                        >
                            bloom.script.tech@gmail.com
                        </a>
                    </div>

                </div>

                {/* Footer */}
                <footer className="mt-16 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Bloom Script Tech. All rights reserved.
                </footer>
            </div>
        </div>
    );
}
