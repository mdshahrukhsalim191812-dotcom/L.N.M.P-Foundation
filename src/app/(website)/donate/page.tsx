"use client";

import { useState } from "react";

import {
    Heart,
    Users,
    GraduationCap,
    HandHelping,
} from "lucide-react";

const donationPrograms = [
    {
        title: "Education Support",
        amount: "₹500",
        description:
            "Help provide books, stationery, and educational resources for students.",
        icon: <GraduationCap className="h-8 w-8" />,
    },
    {
        title: "Community Welfare",
        amount: "₹1000",
        description:
            "Support families and communities through welfare initiatives.",
        icon: <Users className="h-8 w-8" />,
    },
    {
        title: "Emergency Relief",
        amount: "₹2000",
        description:
            "Provide urgent support and humanitarian assistance to those in need.",
        icon: <HandHelping className="h-8 w-8" />,
    },
];

export default function DonatePage() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        amount: "",
        message: "",
    });

    const handlePayment = async () => {
        try {
            const res = await fetch("/api/create-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: formData.amount,
                }),
            });

            const data = await res.json();

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: data.amount,
                currency: data.currency,
                name: "Trust Foundation",
                description: "Donation",
                order_id: data.id,

                handler: async function (response: any) {
                    const verifyRes = await fetch("/api/verify-payment", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            ...response,
                            name: formData.name,
                            email: formData.email,
                            amount: formData.amount,
                            message: formData.message,
                        }),
                    });

                    const data = await verifyRes.json();

                    if (data.success) {
                        window.location.href = "/success";
                    } else {
                        alert("Payment Verification Failed");
                    }
                },

                theme: {
                    color: "#059669",
                },
            };

            const razorpay = new (window as any).Razorpay(options);

            razorpay.open();
        } catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    };

    return (
        <main className="min-h-screen bg-white text-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-emerald-700 to-teal-700 py-24 text-white">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <p className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur">
                        Support Our Mission
                    </p>

                    <h1 className="text-4xl font-bold md:text-6xl">
                        Your Donation Can Change Lives
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-emerald-100">
                        Every contribution helps us continue educational, social,
                        and humanitarian initiatives for communities in need.
                    </p>
                </div>
            </section>

            {/* Donation Cards */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {donationPrograms.map((program, index) => (
                        <div
                            key={index}
                            className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                                {program.icon}
                            </div>

                            <h2 className="mt-6 text-2xl font-bold text-gray-900">
                                {program.title}
                            </h2>

                            <p className="mt-4 leading-7 text-gray-600">
                                {program.description}
                            </p>

                            <div className="mt-6">
                                <span className="text-4xl font-bold text-emerald-600">
                                    {program.amount}
                                </span>
                            </div>

                            <button className="mt-8 w-full rounded-2xl bg-emerald-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700">
                                Donate Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Custom Donation Form */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="rounded-3xl bg-white p-10 shadow-2xl">
                        <div className="text-center">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                                <Heart className="h-10 w-10" />
                            </div>

                            <h2 className="mt-6 text-4xl font-bold text-gray-900">
                                Make a Custom Donation
                            </h2>

                            <p className="mt-4 text-lg text-gray-600">
                                Choose your own amount and support our mission.
                            </p>
                        </div>

                        <form className="mt-10 space-y-6">
                            {/* Full Name */}
                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-emerald-500"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-emerald-500"
                                />
                            </div>

                            {/* Donation Amount */}
                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Donation Amount
                                </label>

                                <input
                                    type="number"
                                    placeholder="Enter donation amount"
                                    value={formData.amount}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            amount: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-emerald-500"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Message (Optional)
                                </label>

                                <textarea
                                    rows={5}
                                    placeholder="Write a message..."
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-emerald-500"
                                />
                            </div>

                            {/* Donate Button */}
                            <button
                                type="button"
                                onClick={handlePayment}
                                className="w-full rounded-2xl bg-emerald-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700"
                            >
                                Proceed To Donate
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Donation Impact */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-900">
                            Your Support Creates Impact
                        </h2>

                        <p className="mt-4 text-lg text-gray-600">
                            Together we can build stronger communities and brighter futures.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-3xl bg-white p-10 shadow-lg">
                            <h3 className="text-5xl font-bold text-emerald-600">
                                500+
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Students Supported
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-10 shadow-lg">
                            <h3 className="text-5xl font-bold text-emerald-600">
                                100+
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Families Helped
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-10 shadow-lg">
                            <h3 className="text-5xl font-bold text-emerald-600">
                                50+
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Community Events
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-10 shadow-lg">
                            <h3 className="text-5xl font-bold text-emerald-600">
                                1000+
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Lives Impacted
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}