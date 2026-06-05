"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
    type Donation = {
        _id: string;
        userId: string;
        name: string;
        email: string;
        amount: number;
        currency: string;
        message: string | null;
        donationType: string;
        paymentMethod: string;
        paymentStatus: string;
        transactionId: string;
        isAnonymous: boolean;
        donationDate: string;
        createdAt: string;
        updatedAt: string;
    };

    const [donations, setDonations] = useState<Donation[]>([]);
    const [loading, setLoading] = useState(true);
    const [totalAmount, setTotalAmount] = useState(0);
    const [completedCount, setCompletedCount] = useState(0);

    useEffect(() => {
        fetchDonations();
    }, []);

    const fetchDonations = async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/donate");
            const data = await res.json();

            setDonations(data.donations);

            // Calculate statistics
            const completed = data.donations.filter(
                (d: Donation) => d.paymentStatus === "completed"
            );
            setCompletedCount(completed.length);

            const total = completed.reduce(
                (sum: number, d: Donation) => sum + d.amount,
                0
            );
            setTotalAmount(total);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const getPaymentStatusBadge = (status: string) => {
        const statusStyles = {
            completed: "bg-green-100 text-green-800",
            pending: "bg-yellow-100 text-yellow-800",
            failed: "bg-red-100 text-red-800",
            refunded: "bg-gray-100 text-gray-800",
        };
        return statusStyles[status as keyof typeof statusStyles] || "bg-gray-100 text-gray-800";
    };

    const getDonationTypeBadge = (type: string) => {
        const typeStyles = {
            one_time: "bg-blue-100 text-blue-800",
            monthly: "bg-purple-100 text-purple-800",
            yearly: "bg-indigo-100 text-indigo-800",
        };
        return typeStyles[type as keyof typeof typeStyles] || "bg-gray-100 text-gray-800";
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
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
                        View and manage all donation records
                    </p>
                </div>

                {/* Statistics Cards */}
                <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
                    <div className="rounded-2xl bg-white p-6 shadow-lg">
                        <p className="text-sm font-medium text-gray-500">Total Donations</p>
                        <p className="text-3xl font-bold text-gray-900">{donations.length}</p>
                    </div>
                    <div className="rounded-2xl bg-white p-6 shadow-lg">
                        <p className="text-sm font-medium text-gray-500">Completed Donations</p>
                        <p className="text-3xl font-bold text-green-600">{completedCount}</p>
                    </div>
                    <div className="rounded-2xl bg-white p-6 shadow-lg">
                        <p className="text-sm font-medium text-gray-500">Total Amount (Completed)</p>
                        <p className="text-3xl font-bold text-emerald-600">
                            ${totalAmount.toLocaleString()}
                        </p>
                    </div>
                    <div className="rounded-2xl bg-white p-6 shadow-lg">
                        <p className="text-sm font-medium text-gray-500">Pending Approval</p>
                        <p className="text-3xl font-bold text-yellow-600">
                            {donations.filter((d) => d.paymentStatus === "pending").length}
                        </p>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-3xl bg-white shadow-2xl">
                    <table className="w-full border-collapse">
                        <thead className="bg-emerald-600 text-white">
                            <tr>
                                <th className="px-6 py-5 text-left text-lg font-semibold">Name</th>
                                <th className="px-6 py-5 text-left text-lg font-semibold">Email</th>
                                <th className="px-6 py-5 text-left text-lg font-semibold">Amount</th>
                                <th className="px-6 py-5 text-left text-lg font-semibold">Message</th>
                                <th className="px-6 py-5 text-left text-lg font-semibold">Type</th>
                                <th className="px-6 py-5 text-left text-lg font-semibold">Status</th>
                                <th className="px-6 py-5 text-left text-lg font-semibold">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={7} className="px-6 py-10 text-center text-gray-500">
                                        Loading donations...
                                    </td>
                                </tr>
                            ) : donations.length > 0 ? (
                                donations.map((donation: Donation) => (
                                    <tr
                                        key={donation._id}
                                        className="border-b border-gray-200 transition hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-5 font-medium text-gray-800">
                                            {donation.isAnonymous ? "🤍 Anonymous" : donation.name}
                                        </td>
                                        <td className="px-6 py-5 text-gray-700">
                                            {donation.isAnonymous ? "—" : donation.email}
                                        </td>
                                        <td className="px-6 py-5 font-bold text-emerald-600">
                                            {donation.currency} {donation.amount.toLocaleString()}
                                        </td>
                                        <td className="px-6 py-5 text-gray-700">
                                            {donation.message || "—"}
                                        </td>
                                        <td className="px-6 py-5">
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-semibold ${getDonationTypeBadge(
                                                    donation.donationType
                                                )}`}
                                            >
                                                {donation.donationType.replace("_", " ")}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-semibold ${getPaymentStatusBadge(
                                                    donation.paymentStatus
                                                )}`}
                                            >
                                                {donation.paymentStatus}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 text-gray-600">
                                            {formatDate(donation.donationDate)}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="px-6 py-10 text-center text-gray-500">
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