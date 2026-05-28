"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
import { useState, useEffect } from "react";

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
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                ? "border-b border-gray-200 bg-white/90 shadow-lg backdrop-blur-xl"
                : "bg-white/80 backdrop-blur-md"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="group flex items-center gap-3"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-xl font-bold text-white shadow-lg transition duration-300 group-hover:scale-105">
                        T
                    </div>

                    <div>
                        <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
                            Trust Foundation
                        </h1>

                        <p className="text-xs font-medium tracking-wide text-gray-500">
                            Humanity • Education • Hope
                        </p>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden items-center gap-2 md:flex">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${isActive
                                    ? "bg-emerald-50 text-emerald-600 shadow-sm"
                                    : "text-gray-700 hover:bg-gray-100 hover:text-emerald-600"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Desktop Donate Button */}
                <div className="hidden md:block">
                    <Link
                        href="/donate"
                        className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-125 hover:shadow-emerald-200"
                    >
                        <Heart className="h-4 w-4 fill-transparent transition duration-300 group-hover:scale-180 group-hover:fill-red-500 group-hover:text-red-500" />

                        Donate Now
                    </Link>
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="rounded-xl p-2 transition hover:bg-gray-100 md:hidden"
                >
                    {open ? (
                        <X className="h-7 w-7 text-gray-800" />
                    ) : (
                        <Menu className="h-7 w-7 text-gray-800" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-[500px]" : "max-h-0"
                    }`}
            >
                <div className="border-t border-gray-100 bg-white px-6 py-6 shadow-2xl">
                    <div className="space-y-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={`block rounded-2xl px-4 py-3 text-base font-semibold transition-all ${isActive
                                        ? "bg-emerald-50 text-emerald-600"
                                        : "text-gray-700 hover:bg-gray-100 hover:text-emerald-600"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Donate Button */}
                    <Link
                        href="/donate"
                        onClick={() => setOpen(false)}
                        className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-4 text-base font-bold text-white shadow-lg"
                    >
                        <Heart className="h-5 w-5 hover:bg-red-500" />

                        Donate Now
                    </Link>
                </div>
            </div>
        </header>
    );
}