"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
    type Donation = {
        _id: string;
        name: string;
        email: string;
        amount: number;
        message: string;
    };

    const [donations, setDonations] = useState<Donation[]>([]);

    useEffect(() => {
        fetchDonations();
    }, []);

    const fetchDonations = async () => {
        try {
            const res = await fetch("/api/donate");
            const data = await res.json();

            setDonations(data.donations);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 p-6">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Donation Dashboard
                    </h1>

                    <p className="mt-2 text-lg text-gray-600">
                        View all donation records
                    </p>
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-3xl bg-white shadow-2xl">
                    <table className="w-full border-collapse">
                        <thead className="bg-emerald-600 text-white">
                            <tr>
                                <th className="px-6 py-5 text-left text-lg font-semibold">
                                    Name
                                </th>

                                <th className="px-6 py-5 text-left text-lg font-semibold">
                                    Email
                                </th>

                                <th className="px-6 py-5 text-left text-lg font-semibold">
                                    Amount
                                </th>

                                <th className="px-6 py-5 text-left text-lg font-semibold">
                                    Message
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {donations.length > 0 ? (
                                donations.map((donation: Donation) => (
                                    <tr
                                        key={donation._id}
                                        className="border-b border-gray-200 hover:bg-gray-50 transition"
                                    >
                                        <td className="px-6 py-5 text-gray-800 font-medium">
                                            {donation.name}
                                        </td>

                                        <td className="px-6 py-5 text-gray-700">
                                            {donation.email}
                                        </td>

                                        <td className="px-6 py-5 font-bold text-emerald-600">
                                            ₹{donation.amount}
                                        </td>

                                        <td className="px-6 py-5 text-gray-700">
                                            {donation.message || "No Message"}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={4}
                                        className="px-6 py-10 text-center text-gray-500"
                                    >
                                        No donations found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}