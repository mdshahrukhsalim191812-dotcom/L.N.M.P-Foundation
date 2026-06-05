"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, ChevronRight, Play, Users, DollarSign } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Campaign", href: "/events" },
    { name: "Join Us", href: "/join-us" },
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
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
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

                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 md:py-4">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="group flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0"
                    >
                        {/* Logo Image */}
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl transition duration-500 group-hover:scale-125" />
                            <Image
                                src="/Navbar/logo.png"
                                alt="Trust Foundation Logo"
                                width={48}
                                height={48}
                                priority
                                className="relative h-10 w-10 sm:h-14 sm:w-14 md:h-[68px] md:w-[68px] object-contain transition duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Text */}
                        <div className="max-w-[130px] sm:max-w-[180px] md:max-w-full">
                            <h1
                                className={`text-sm sm:text-lg md:text-2xl font-black tracking-tight transition duration-300 leading-tight ${scrolled
                                        ? "bg-gradient-to-r from-gray-900 via-emerald-700 to-teal-600 bg-clip-text text-transparent"
                                        : "text-white"
                                    }`}
                            >
                                L.N.M.P Foundation
                            </h1>
                            <p
                                className={`hidden sm:block text-[8px] sm:text-[9px] md:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] transition duration-300 mt-0.5 ${scrolled ? "text-gray-500" : "text-white/80"
                                    }`}
                            >
                                Humanity • Education • Health
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`group relative overflow-hidden rounded-2xl px-3 xl:px-5 py-2 xl:py-3 text-xs xl:text-sm font-bold transition-all duration-300 whitespace-nowrap ${isActive
                                            ? scrolled
                                                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                                                : "bg-white/20 text-white backdrop-blur-md"
                                            : scrolled
                                                ? "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                                                : "text-white hover:bg-white/10"
                                        }`}
                                >
                                    {!isActive && scrolled && (
                                        <span className="absolute inset-0 -z-10 translate-y-full rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 transition duration-300 group-hover:translate-y-0" />
                                    )}
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right Side Buttons */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <Link
                            href="/donate"
                            className={`group relative hidden md:flex overflow-hidden rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-extrabold transition-all duration-500 items-center gap-2 sm:gap-3 ${scrolled
                                    ? "bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white shadow-xl shadow-emerald-200 hover:scale-105"
                                    : "border border-white/20 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20"
                                }`}
                        >
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-1000 group-hover:translate-x-full" />
                            <Heart className="h-4 w-4 sm:h-5 sm:w-5 fill-transparent transition duration-500 group-hover:scale-125 group-hover:fill-red-500 group-hover:text-red-500" />
                            <span className="relative">Support Us</span>
                            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 transition duration-300 group-hover:translate-x-1" />
                        </Link>

                        <button
                            onClick={() => setOpen(!open)}
                            className={`rounded-2xl p-2 sm:p-3 transition duration-300 lg:hidden ${scrolled
                                    ? "border border-gray-200 bg-white shadow-md hover:bg-emerald-50"
                                    : "border border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white/20"
                                }`}
                            aria-label={open ? "Close menu" : "Open menu"}
                        >
                            {open ? (
                                <X
                                    className={`h-5 w-5 sm:h-6 sm:w-6 ${scrolled ? "text-gray-800" : "text-white"
                                        }`}
                                />
                            ) : (
                                <Menu
                                    className={`h-5 w-5 sm:h-6 sm:w-6 ${scrolled ? "text-gray-800" : "text-white"
                                        }`}
                                />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${open ? "max-h-[800px]" : "max-h-0"
                        }`}
                >
                    <div
                        className={`px-5 sm:px-6 py-5 sm:py-6 backdrop-blur-2xl ${scrolled
                                ? "border-t border-gray-100 bg-white/95"
                                : "bg-black/40"
                            }`}
                    >
                        <div className="space-y-2 sm:space-y-3">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base font-bold transition-all duration-300 ${isActive
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

                        <Link
                            href="/donate"
                            onClick={() => setOpen(false)}
                            className="group mt-5 sm:mt-6 flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 px-5 py-3.5 sm:py-4 text-sm sm:text-base font-extrabold text-white shadow-xl transition duration-500 hover:scale-[1.02]"
                        >
                            <Heart className="h-5 w-5 fill-transparent transition duration-500 group-hover:fill-red-500 group-hover:text-red-500" />
                            Support Us
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}