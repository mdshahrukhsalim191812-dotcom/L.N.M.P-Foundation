import Link from "next/link";
import {
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-300">
            {/* Top Footer */}
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
                {/* Logo & About */}
                <div>
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-bold text-white">
                            T
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-white">
                                Trust Foundation
                            </h2>

                            <p className="text-sm text-gray-400">
                                Humanity • Education • Hope
                            </p>
                        </div>
                    </div>

                    <p className="mt-6 leading-7 text-gray-400">
                        Dedicated to education, youth empowerment, community welfare,
                        and creating positive social impact through meaningful initiatives.
                    </p>

                    {/* Social Icons */}
                    <div className="mt-6 flex gap-4">
                        <a
                            href="#"
                            className="rounded-full bg-gray-800 p-3 transition hover:bg-emerald-600"
                        >
                            <FaFacebookF className="h-5 w-5" />
                        </a>

                        <a
                            href="#"
                            className="rounded-full bg-gray-800 p-3 transition hover:bg-emerald-600"
                        >
                            <FaInstagram className="h-5 w-5" />
                        </a>

                        <a
                            href="#"
                            className="rounded-full bg-gray-800 p-3 transition hover:bg-emerald-600"
                        >
                            <FaYoutube className="h-5 w-5" />
                        </a>
                        <a
                            href="#"
                            className="rounded-full bg-gray-800 p-3 transition hover:bg-emerald-600"
                        >
                            <FaTwitter className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white">
                        Quick Links
                    </h3>

                    <ul className="mt-6 space-y-4">
                        <li>
                            <Link
                                href="/"
                                className="transition hover:text-emerald-400"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/about"
                                className="transition hover:text-emerald-400"
                            >
                                About Us
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/programs"
                                className="transition hover:text-emerald-400"
                            >
                                Programs
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/events"
                                className="transition hover:text-emerald-400"
                            >
                                Events
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/contact"
                                className="transition hover:text-emerald-400"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Programs */}
                <div>
                    <h3 className="text-xl font-semibold text-white">
                        Our Programs
                    </h3>

                    <ul className="mt-6 space-y-4">
                        <li className="hover:text-emerald-400">
                            Education Support
                        </li>

                        <li className="hover:text-emerald-400">
                            Youth Development
                        </li>

                        <li className="hover:text-emerald-400">
                            Community Welfare
                        </li>

                        <li className="hover:text-emerald-400">
                            Scholarship Programs
                        </li>

                        <li className="hover:text-emerald-400">
                            Workshops & Seminars
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold text-white">
                        Contact Us
                    </h3>

                    <div className="mt-6 space-y-5">
                        <div className="flex items-start gap-4">
                            <MapPin className="mt-1 h-5 w-5 text-emerald-500" />

                            <p className="leading-7 text-gray-400">
                                Bhagalpur, Bihar, India
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <Phone className="h-5 w-5 text-emerald-500" />

                            <p className="text-gray-400">
                                +91 9999999999
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <Mail className="h-5 w-5 text-emerald-500" />

                            <p className="text-gray-400">
                                info@trustfoundation.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row">
                    <p>
                        © 2026 Trust Foundation. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-emerald-400">
                            Privacy Policy
                        </Link>

                        <Link href="#" className="hover:text-emerald-400">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}