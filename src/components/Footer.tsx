import Link from "next/link";
import Image from "next/image";
import {
    Mail,
    Phone,
    MapPin,
    ArrowUpRight,
    Heart,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaTwitter,
} from "react-icons/fa";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

const programs = [
    "Education Support",
    "Youth Development",
    "Community Welfare",
    "Scholarship Programs",
    "Workshops & Seminars",
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-gray-950 text-gray-300">
            {/* Background Glow */}
            <div className="absolute left-0 top-0 h-48 sm:h-72 w-48 sm:w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-48 sm:h-72 w-48 sm:w-72 rounded-full bg-teal-500/10 blur-3xl" />

            {/* Top CTA */}
            <div className="border-b border-gray-800">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:px-6 py-8 sm:py-10 text-center md:flex-row md:text-left">
                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                            Together We Can Make A Difference
                        </h2>
                        <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base text-gray-400">
                            Support education, community welfare, and humanitarian
                            initiatives with your valuable contribution.
                        </p>
                    </div>

                    <Link
                        href="/donate"
                        className="group inline-flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/30 whitespace-nowrap"
                    >
                        <Heart className="h-4 w-4 sm:h-5 sm:w-5 fill-transparent transition duration-300 group-hover:fill-red-500 group-hover:text-red-500" />
                        Donate Now
                        <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </div>
            </div>

            {/* Main Footer */}
            <div className="relative mx-auto grid max-w-7xl gap-8 sm:gap-10 md:gap-12 lg:gap-14 px-5 sm:px-6 py-12 sm:py-16 md:py-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {/* About Section with Logo */}
                <div>
                    <Link href="/" className="group flex items-center gap-3 sm:gap-4">
                        {/* Logo Image */}
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl transition duration-500 group-hover:scale-125" />
                            <Image
                                src="/Navbar/logo.png"
                                alt="L.N.M.P Foundation Logo"
                                width={48}
                                height={48}
                                className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain transition duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Text */}
                        <div>
                            <h2 className="text-base sm:text-lg md:text-xl font-black tracking-tight text-white transition duration-300">
                                L.N.M.P Foundation
                            </h2>
                            <p className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-400 mt-0.5">
                                Humanity • Education • Health
                            </p>
                        </div>
                    </Link>

                    <p className="mt-5 sm:mt-6 md:mt-7 text-sm sm:text-base leading-6 sm:leading-7 md:leading-8 text-gray-400">
                        We are committed to empowering communities through
                        education, youth development, welfare programs, and
                        impactful social initiatives that create meaningful change.
                    </p>

                    {/* Social Icons */}
                    <div className="mt-6 sm:mt-7 md:mt-8 flex flex-wrap gap-3 sm:gap-4">
                        {[
                            { Icon: FaFacebookF, href: "https://facebook.com" },
                            { Icon: FaInstagram, href: "https://instagram.com" },
                            { Icon: FaYoutube, href: "https://youtube.com" },
                            { Icon: FaTwitter, href: "https://twitter.com" },
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-xl sm:rounded-2xl border border-gray-800 bg-gray-900 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:bg-emerald-600"
                                aria-label={`Follow us on ${social.Icon.name}`}
                            >
                                <social.Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 transition group-hover:scale-110" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-white">
                        Quick Links
                    </h3>
                    <div className="mt-4 sm:mt-5 md:mt-8 h-0.5 sm:h-1 w-12 sm:w-14 md:w-16 rounded-full bg-emerald-500" />
                    <ul className="mt-5 sm:mt-6 md:mt-8 space-y-3 sm:space-y-4 md:space-y-5">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="group inline-flex items-center gap-2 text-sm sm:text-base text-gray-400 transition hover:text-emerald-400"
                                >
                                    <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500 transition group-hover:scale-125" />
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Programs */}
                <div>
                    <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-white">
                        Our Programs
                    </h3>
                    <div className="mt-4 sm:mt-5 md:mt-8 h-0.5 sm:h-1 w-12 sm:w-14 md:w-16 rounded-full bg-emerald-500" />
                    <ul className="mt-5 sm:mt-6 md:mt-8 space-y-3 sm:space-y-4 md:space-y-5">
                        {programs.map((program, index) => (
                            <li
                                key={index}
                                className="group flex cursor-pointer items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-400 transition hover:text-emerald-400"
                            >
                                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500 transition group-hover:scale-125" />
                                {program}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-white">
                        Contact Us
                    </h3>
                    <div className="mt-4 sm:mt-5 md:mt-8 h-0.5 sm:h-1 w-12 sm:w-14 md:w-16 rounded-full bg-emerald-500" />
                    <div className="mt-5 sm:mt-6 md:mt-8 space-y-5 sm:space-y-6 md:space-y-7">
                        {/* Address */}
                        <div className="group flex items-start gap-3 sm:gap-4">
                            <div className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gray-900 transition group-hover:bg-emerald-600">
                                <MapPin className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 text-emerald-400 group-hover:text-white" />
                            </div>
                            <div>
                                <h4 className="text-sm sm:text-base font-semibold text-white">
                                    Address
                                </h4>
                                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm leading-5 sm:leading-6 md:leading-7 text-gray-400">
                                    Bhagalpur, Bihar, India
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="group flex items-start gap-3 sm:gap-4">
                            <div className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gray-900 transition group-hover:bg-emerald-600">
                                <Phone className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 text-emerald-400 group-hover:text-white" />
                            </div>
                            <div>
                                <h4 className="text-sm sm:text-base font-semibold text-white">
                                    Phone
                                </h4>
                                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-400">
                                    +91 9999999999
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="group flex items-start gap-3 sm:gap-4">
                            <div className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gray-900 transition group-hover:bg-emerald-600">
                                <Mail className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 text-emerald-400 group-hover:text-white" />
                            </div>
                            <div>
                                <h4 className="text-sm sm:text-base font-semibold text-white">
                                    Email
                                </h4>
                                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-400 break-all">
                                    info@lnmpfoundation.org
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800 bg-black/30">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:gap-5 px-5 sm:px-6 py-5 sm:py-6 md:py-7 text-xs sm:text-sm text-gray-500 md:flex-row">
                    <p className="text-center sm:text-left">
                        © 2026 L.N.M.P Foundation. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
                        <Link
                            href="/privacy"
                            className="transition hover:text-emerald-400 text-xs sm:text-sm"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="transition hover:text-emerald-400 text-xs sm:text-sm"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}