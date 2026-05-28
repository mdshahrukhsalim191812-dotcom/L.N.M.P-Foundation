const programs = [
    {
        title: "Education Support",
        description:
            "Providing educational resources, mentorship, and academic guidance for students.",
        icon: "📚",
    },
    {
        title: "Youth Development",
        description:
            "Empowering youth through workshops, leadership programs, and motivational sessions.",
        icon: "🚀",
    },
    {
        title: "Community Welfare",
        description:
            "Supporting families and communities through social welfare and humanitarian initiatives.",
        icon: "🤝",
    },
    {
        title: "Scholarship Programs",
        description:
            "Helping deserving students continue their education through financial assistance.",
        icon: "🎓",
    },
    {
        title: "Workshops & Seminars",
        description:
            "Organizing educational and awareness-based workshops for students and communities.",
        icon: "🧠",
    },
    {
        title: "Relief & Support",
        description:
            "Providing emergency support and assistance to people in need during difficult times.",
        icon: "❤️",
    },
];

export default function ProgramsPage() {
    return (
        <main className="min-h-screen bg-white text-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-emerald-700 to-teal-700 py-24 text-white">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <p className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur">
                        Our Programs
                    </p>

                    <h1 className="text-4xl font-bold md:text-6xl">
                        Programs That Create Positive Impact
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-emerald-100">
                        We organize educational, social, and community-focused initiatives
                        aimed at empowering individuals and strengthening society.
                    </p>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-4xl transition group-hover:bg-emerald-600 group-hover:text-white">
                                {program.icon}
                            </div>

                            <h2 className="mt-6 text-2xl font-bold text-gray-900">
                                {program.title}
                            </h2>

                            <p className="mt-4 leading-7 text-gray-600">
                                {program.description}
                            </p>

                            <button className="mt-6 rounded-xl bg-emerald-600 px-5 py-3 font-medium text-white transition hover:bg-emerald-700">
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Impact Section */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-900">
                            Our Impact
                        </h2>

                        <p className="mt-4 text-lg text-gray-600">
                            Small efforts creating meaningful change in communities.
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
                                50+
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Workshops Conducted
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-10 shadow-lg">
                            <h3 className="text-5xl font-bold text-emerald-600">
                                100+
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Active Volunteers
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-10 shadow-lg">
                            <h3 className="text-5xl font-bold text-emerald-600">
                                10+
                            </h3>

                            <p className="mt-4 text-gray-600">
                                Community Initiatives
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-emerald-700 py-20 text-white">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-4xl font-bold">
                        Become Part of Our Mission
                    </h2>

                    <p className="mt-6 text-lg text-emerald-100">
                        Join us as a volunteer, supporter, or donor and help us build
                        a stronger and more compassionate society.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-emerald-700 transition hover:bg-gray-100">
                            Join as Volunteer
                        </button>

                        <button className="rounded-2xl border border-white px-8 py-4 text-lg font-semibold transition hover:bg-white hover:text-emerald-700">
                            Donate Now
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}