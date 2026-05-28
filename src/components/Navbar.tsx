"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-bold text-white">
                        T
                    </div>

                    <div>
                        <h1 className="text-lg font-bold text-gray-900">
                            Trust Foundation
                        </h1>

                        <p className="text-xs text-gray-500">
                            Humanity • Education • Hope
                        </p>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition ${isActive
                                        ? "text-emerald-600"
                                        : "text-gray-700 hover:text-emerald-600"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Donate Button */}
                <div className="hidden md:block">
                    <button className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700">
                        <Link href="/donate">
                            Donate Now
                        </Link>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                >
                    {open ? (
                        <X className="h-7 w-7 text-gray-800" />
                    ) : (
                        <Menu className="h-7 w-7 text-gray-800" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="border-t border-gray-100 bg-white md:hidden">
                    <div className="space-y-4 px-6 py-5">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={`block text-base font-medium ${isActive
                                            ? "text-emerald-600"
                                            : "text-gray-700"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}

                        <button className="mt-4 w-full rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white">
                            Donate Now
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}