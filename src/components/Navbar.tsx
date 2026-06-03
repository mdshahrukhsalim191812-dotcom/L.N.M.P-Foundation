"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

import {
    Menu,
    X,
    Heart,
    ChevronRight,
} from "lucide-react";

import {
    useState,
    useEffect,
} from "react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {

    const pathname = usePathname();

    const [open, setOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };

    }, []);

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${scrolled
                ? "border-b border-gray-200 bg-white/95 shadow-xl backdrop-blur-2xl"
                : "bg-transparent"
                }`}
        >

            {/* Glow Line only after scroll */}
            {scrolled && (
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-70" />
            )}

            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link
                    href="/"
                    className="group flex items-center gap-4"
                >

                    {/* Logo Image */}
                    <div className="relative">

                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl transition duration-500 group-hover:scale-125" />

                        <Image
                            src="/Navbar/logo.png"
                            alt="Trust Foundation Logo"
                            width={68}
                            height={68}
                            priority
                            className="relative h-[68px] w-[68px] object-contain transition duration-500 group-hover:scale-110"
                        />
                    </div>

                    {/* Text */}
                    <div>
                        <h1
                            className={`text-2xl font-black tracking-tight transition duration-300 ${scrolled
                                ? "bg-gradient-to-r from-gray-900 via-emerald-700 to-teal-600 bg-clip-text text-transparent"
                                : "text-white"
                                }`}
                        >
                            L.N.M.P Foundation
                        </h1>

                        <p
                            className={`mt-1 text-xs font-semibold uppercase tracking-[0.25em] transition duration-300 ${scrolled
                                ? "text-gray-500"
                                : "text-white/80"
                                }`}
                        >
                            Humanity • Education • Health
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-2 lg:flex">

                    {navLinks.map((link) => {

                        const isActive =
                            pathname === link.href;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`group relative overflow-hidden rounded-2xl px-5 py-3 text-sm font-bold transition-all duration-300 ${isActive
                                    ? scrolled
                                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                                        : "bg-white/20 text-white backdrop-blur-md"
                                    : scrolled
                                        ? "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                                        : "text-white hover:bg-white/10"
                                    }`}
                            >

                                {/* Hover Background */}
                                {!isActive && scrolled && (
                                    <span className="absolute inset-0 -z-10 translate-y-full rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 transition duration-300 group-hover:translate-y-0" />
                                )}

                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-3">

                    {/* Donate Button */}
                    <Link
                        href="/donate"
                        className={`group relative hidden overflow-hidden rounded-2xl px-7 py-3.5 text-sm font-extrabold transition-all duration-500 md:flex md:items-center md:gap-3 ${scrolled
                            ? "bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white shadow-xl shadow-emerald-200 hover:scale-105"
                            : "border border-white/20 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20"
                            }`}
                    >

                        {/* Shine Effect */}
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-1000 group-hover:translate-x-full" />

                        <Heart className="h-5 w-5 fill-transparent transition duration-500 group-hover:scale-125 group-hover:fill-red-500 group-hover:text-red-500" />

                        <span className="relative">
                            Support Us
                        </span>

                        <ChevronRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                    </Link>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className={`rounded-2xl p-3 transition duration-300 lg:hidden ${scrolled
                            ? "border border-gray-200 bg-white shadow-md hover:bg-emerald-50"
                            : "border border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white/20"
                            }`}
                    >

                        {open ? (
                            <X
                                className={`h-6 w-6 ${scrolled
                                    ? "text-gray-800"
                                    : "text-white"
                                    }`}
                            />
                        ) : (
                            <Menu
                                className={`h-6 w-6 ${scrolled
                                    ? "text-gray-800"
                                    : "text-white"
                                    }`}
                            />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden transition-all duration-500 lg:hidden ${open
                    ? "max-h-[700px]"
                    : "max-h-0"
                    }`}
            >

                <div
                    className={`px-6 py-6 backdrop-blur-2xl ${scrolled
                        ? "border-t border-gray-100 bg-white/95"
                        : "bg-black/40"
                        }`}
                >

                    {/* Mobile Links */}
                    <div className="space-y-3">

                        {navLinks.map((link) => {

                            const isActive =
                                pathname === link.href;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() =>
                                        setOpen(false)
                                    }
                                    className={`flex items-center justify-between rounded-2xl px-5 py-4 text-base font-bold transition-all duration-300 ${isActive
                                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                                        : scrolled
                                            ? "bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                                            : "bg-white/10 text-white hover:bg-white/20"
                                        }`}
                                >
                                    {link.name}

                                    <ChevronRight className="h-5 w-5" />
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Donate Button */}
                    <Link
                        href="/donate"
                        onClick={() => setOpen(false)}
                        className="group mt-6 flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 px-6 py-4 text-base font-extrabold text-white shadow-xl transition duration-500 hover:scale-[1.02]"
                    >
                        <Heart className="h-5 w-5 fill-transparent transition duration-500 group-hover:fill-red-500 group-hover:text-red-500" />

                        Donate Now
                    </Link>
                </div>
            </div>
        </header>
    );
}