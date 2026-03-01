import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "BloomScript Technologies – Freelance React Native & Flutter Development Agency",
    template: "%s | BloomScript Technologies",
  },
  description:
    "Expert freelance mobile app developer specializing in React Native and Flutter. I build high-performance, scalable apps for iOS and Android. Let's bring your idea to life.",
  keywords: [
    "React Native developer",
    "Flutter developer",
    "freelance mobile app developer",
    "iOS app development",
    "Android app development",
    "cross-platform app developer",
  ],
  authors: [{ name: "BloomScript Technologies" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    // url: "https://bloomscripttechnologies.com",
    url:"https://freelancesite-beta.vercel.app/",
    siteName: "BloomScript Technologies",
    title: "BloomScript Technologies – Freelance React Native & Flutter Development Agency",
    description:
      "Expert freelance mobile app developer specializing in React Native and Flutter.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BloomScript Technologies – Freelance React Native & Flutter Development Agency",
    description: "Expert freelance mobile app developer specializing in React Native and Flutter.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#020817] text-slate-100`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
