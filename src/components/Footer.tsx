import Link from "next/link";
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
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />

            {/* Top CTA */}
            <div className="border-b border-gray-800">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-center md:flex-row md:text-left">
                    <div>
                        <h2 className="text-3xl font-bold text-white">
                            Together We Can Make A Difference
                        </h2>

                        <p className="mt-3 max-w-2xl text-gray-400">
                            Support education, community welfare, and humanitarian
                            initiatives with your valuable contribution.
                        </p>
                    </div>

                    <Link
                        href="/donate"
                        className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-7 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/30"
                    >
                        <Heart className="h-5 w-5 fill-transparent transition duration-300 group-hover:fill-red-500 group-hover:text-red-500" />

                        Donate Now

                        <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </div>
            </div>

            {/* Main Footer */}
            <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">
                {/* About */}
                <div>
                    <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-2xl font-extrabold text-white shadow-lg">
                            T
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white">
                                Trust Foundation
                            </h2>

                            <p className="text-sm tracking-wide text-gray-400">
                                Humanity • Education • Hope
                            </p>
                        </div>
                    </div>

                    <p className="mt-7 leading-8 text-gray-400">
                        We are committed to empowering communities through
                        education, youth development, welfare programs, and
                        impactful social initiatives that create meaningful change.
                    </p>

                    {/* Social Icons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        {[
                            FaFacebookF,
                            FaInstagram,
                            FaYoutube,
                            FaTwitter,
                        ].map((Icon, index) => (
                            <a
                                key={index}
                                href="#"
                                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-800 bg-gray-900 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:bg-emerald-600"
                            >
                                <Icon className="h-5 w-5 transition group-hover:scale-110" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Quick Links
                    </h3>

                    <div className="mt-8 h-1 w-16 rounded-full bg-emerald-500" />

                    <ul className="mt-8 space-y-5">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="group inline-flex items-center gap-2 text-gray-400 transition hover:text-emerald-400"
                                >
                                    <span className="h-2 w-2 rounded-full bg-emerald-500 transition group-hover:scale-125" />

                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Programs */}
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Our Programs
                    </h3>

                    <div className="mt-8 h-1 w-16 rounded-full bg-emerald-500" />

                    <ul className="mt-8 space-y-5">
                        {programs.map((program, index) => (
                            <li
                                key={index}
                                className="group flex cursor-pointer items-center gap-3 text-gray-400 transition hover:text-emerald-400"
                            >
                                <span className="h-2 w-2 rounded-full bg-emerald-500 transition group-hover:scale-125" />

                                {program}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Contact Us
                    </h3>

                    <div className="mt-8 h-1 w-16 rounded-full bg-emerald-500" />

                    <div className="mt-8 space-y-7">
                        <div className="group flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 transition group-hover:bg-emerald-600">
                                <MapPin className="h-5 w-5 text-emerald-400 group-hover:text-white" />
                            </div>

                            <div>
                                <h4 className="font-semibold text-white">
                                    Address
                                </h4>

                                <p className="mt-1 leading-7 text-gray-400">
                                    Bhagalpur, Bihar, India
                                </p>
                            </div>
                        </div>

                        <div className="group flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 transition group-hover:bg-emerald-600">
                                <Phone className="h-5 w-5 text-emerald-400 group-hover:text-white" />
                            </div>

                            <div>
                                <h4 className="font-semibold text-white">
                                    Phone
                                </h4>

                                <p className="mt-1 text-gray-400">
                                    +91 9999999999
                                </p>
                            </div>
                        </div>

                        <div className="group flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 transition group-hover:bg-emerald-600">
                                <Mail className="h-5 w-5 text-emerald-400 group-hover:text-white" />
                            </div>

                            <div>
                                <h4 className="font-semibold text-white">
                                    Email
                                </h4>

                                <p className="mt-1 text-gray-400">
                                    info@trustfoundation.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800 bg-black/30">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-7 text-sm text-gray-500 md:flex-row">
                    <p>
                        © 2026 Trust Foundation. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <Link
                            href="#"
                            className="transition hover:text-emerald-400"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="#"
                            className="transition hover:text-emerald-400"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}