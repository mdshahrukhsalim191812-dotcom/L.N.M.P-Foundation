"use client";

import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white text-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-emerald-700 to-teal-700 py-24 text-white">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <p className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur">
                        Contact Us
                    </p>

                    <h1 className="text-4xl font-bold md:text-6xl">
                        Let’s Connect Together
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-emerald-100">
                        Have questions, suggestions, or want to work with us? We would
                        love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900">
                            Get In Touch
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Reach out to us for partnerships, volunteer opportunities,
                            educational programs, or community initiatives.
                        </p>

                        <div className="mt-10 space-y-8">
                            {/* Address */}
                            <div className="flex items-start gap-5">
                                <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-700">
                                    <MapPin className="h-6 w-6" />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Address
                                    </h3>

                                    <p className="mt-2 text-gray-600">
                                        Bhagalpur, Bihar, India
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-5">
                                <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-700">
                                    <Phone className="h-6 w-6" />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Phone
                                    </h3>

                                    <p className="mt-2 text-gray-600">
                                        +91 9999999999
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-5">
                                <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-700">
                                    <Mail className="h-6 w-6" />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Email
                                    </h3>

                                    <p className="mt-2 text-gray-600">
                                        info@trustfoundation.com
                                    </p>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="flex items-start gap-5">
                                <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-700">
                                    <Clock className="h-6 w-6" />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Working Hours
                                    </h3>

                                    <p className="mt-2 text-gray-600">
                                        Monday - Saturday
                                    </p>

                                    <p className="text-gray-600">
                                        9:00 AM - 6:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-3xl bg-white p-8 shadow-2xl">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Send Message
                        </h2>

                        <p className="mt-4 text-gray-600">
                            Fill out the form and our team will contact you soon.
                        </p>

                        <form className="mt-8 space-y-6">
                            {/* Name */}
                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
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
                                    className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-emerald-500"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Phone Number
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your phone number"
                                    className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-emerald-500"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Message
                                </label>

                                <textarea
                                    rows={5}
                                    placeholder="Write your message..."
                                    className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-emerald-500"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full rounded-2xl bg-emerald-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="pb-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="overflow-hidden rounded-3xl shadow-2xl">
                        <iframe
                            src="https://maps.app.goo.gl/r2TBpqAVpBWoTVcm6"
                            width="100%"
                            height="450"
                            loading="lazy"
                            className="border-0"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </main>
    );
} 