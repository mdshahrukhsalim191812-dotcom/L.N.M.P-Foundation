export default function AdminHomePage() {
    return (
        <main className="min-h-screen">
            {/* Header */}
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-gray-900">
                    Admin Dashboard
                </h1>

                <p className="mt-2 text-lg text-gray-600">
                    Welcome to Trust Foundation Admin Panel
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/* Total Donations */}
                <div className="rounded-3xl bg-white p-8 shadow-xl">
                    <p className="text-lg text-gray-500">
                        Total Donations
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-emerald-600">
                        ₹45,000
                    </h2>
                </div>

                {/* Total Donors */}
                <div className="rounded-3xl bg-white p-8 shadow-xl">
                    <p className="text-lg text-gray-500">
                        Total Donors
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-blue-600">
                        120
                    </h2>
                </div>

                {/* Programs */}
                <div className="rounded-3xl bg-white p-8 shadow-xl">
                    <p className="text-lg text-gray-500">
                        Active Programs
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-purple-600">
                        8
                    </h2>
                </div>

                {/* Events */}
                <div className="rounded-3xl bg-white p-8 shadow-xl">
                    <p className="text-lg text-gray-500">
                        Upcoming Events
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-orange-500">
                        5
                    </h2>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900">
                    Recent Activity
                </h2>

                <div className="mt-6 space-y-5">
                    <div className="rounded-2xl border border-gray-100 p-5">
                        <p className="font-semibold text-gray-800">
                            New donation received
                        </p>

                        <p className="mt-1 text-gray-500">
                            Md Shahrukh Salim donated ₹1000
                        </p>
                    </div>

                    <div className="rounded-2xl border border-gray-100 p-5">
                        <p className="font-semibold text-gray-800">
                            New program added
                        </p>

                        <p className="mt-1 text-gray-500">
                            Education Support Program created
                        </p>
                    </div>

                    <div className="rounded-2xl border border-gray-100 p-5">
                        <p className="font-semibold text-gray-800">
                            Upcoming Event Reminder
                        </p>

                        <p className="mt-1 text-gray-500">
                            Community Food Distribution this Sunday
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}