"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const navLinks = [
        {
            name: "Dashboard",
            href: "/admin",
        },
        {
            name: "Donations",
            href: "/admin/donations",
        },
        {
            name: "Programs",
            href: "/admin/programs",
        },
        {
            name: "Events",
            href: "/admin/events",
        },
        {
            name: "Messages",
            href: "/admin/messages",
        },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 z-50 flex h-screen w-72 flex-col bg-emerald-700 p-6 text-white shadow-2xl">
                {/* Logo */}
                <div>
                    <h1 className="text-3xl font-bold">
                        Trust Foundation
                    </h1>

                    <p className="mt-2 text-emerald-100">
                        Admin Panel
                    </p>
                </div>

                {/* Navigation */}
                <nav className="mt-10 flex-1 space-y-3">
                    {navLinks.map((link) => {
                        const isActive =
                            pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`block rounded-2xl px-5 py-4 text-lg font-medium transition ${isActive
                                        ? "bg-white text-emerald-700 shadow-lg"
                                        : "text-white hover:bg-emerald-600"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom Button */}
                <div className="mt-6">
                    <Link
                        href="/"
                        className="block rounded-2xl bg-red-500 px-5 py-4 text-center text-lg font-semibold transition hover:bg-red-600"
                    >
                        Back To Website
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <div className="ml-72 min-h-screen w-full">
                {/* Content Wrapper */}
                <div className="p-8">
                    {children}
                </div>
            </div>
        </div>
    );
}