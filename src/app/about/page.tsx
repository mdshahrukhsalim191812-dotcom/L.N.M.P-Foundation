export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-gray-800">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-emerald-700 to-teal-700 py-24 text-white">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <p className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur">
                        About Our Foundation
                    </p>

                    <h1 className="text-4xl font-bold md:text-6xl">
                        Serving Humanity Through Knowledge & Compassion
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-emerald-100">
                        Our foundation is dedicated to education, youth empowerment,
                        community welfare, and creating positive social impact through
                        meaningful initiatives.
                    </p>
                </div>
            </section>

            {/* About Content */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                            alt="Foundation Team"
                            className="rounded-3xl shadow-2xl"
                        />
                    </div>

                    <div>
                        <h2 className="text-4xl font-bold text-gray-900">
                            Who We Are
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            We are a community-driven foundation focused on uplifting society
                            through educational programs, youth guidance, workshops, social
                            welfare, and awareness initiatives. Our mission is to inspire
                            positive transformation and support individuals in achieving a
                            better future.
                        </p>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            We believe that real change begins with knowledge, unity,
                            compassion, and sincere efforts toward humanity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-10 md:grid-cols-2">
                        {/* Mission */}
                        <div className="rounded-3xl bg-white p-10 shadow-xl">
                            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
                                🎯
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900">
                                Our Mission
                            </h2>

                            <p className="mt-6 leading-8 text-gray-600">
                                To empower youth, support education, strengthen communities,
                                and create opportunities for positive social and spiritual
                                development through impactful programs and initiatives.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="rounded-3xl bg-white p-10 shadow-xl">
                            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-3xl">
                                🌍
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900">
                                Our Vision
                            </h2>

                            <p className="mt-6 leading-8 text-gray-600">
                                To build a knowledgeable, compassionate, and empowered society
                                where education, moral values, and humanity lead the way toward
                                sustainable growth and positive change.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Our Core Values
                    </h2>

                    <p className="mt-4 text-lg text-gray-600">
                        Principles that guide our work and mission.
                    </p>
                </div>

                <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            title: "Education",
                            desc: "Promoting knowledge and lifelong learning.",
                            icon: "📚",
                        },
                        {
                            title: "Compassion",
                            desc: "Serving humanity with sincerity and care.",
                            icon: "❤️",
                        },
                        {
                            title: "Integrity",
                            desc: "Maintaining honesty and transparency.",
                            icon: "🤝",
                        },
                        {
                            title: "Unity",
                            desc: "Building stronger communities together.",
                            icon: "🌟",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="text-5xl">{item.icon}</div>

                            <h3 className="mt-6 text-2xl font-bold text-gray-900">
                                {item.title}
                            </h3>

                            <p className="mt-4 leading-7 text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-emerald-700 py-20 text-white">
                <div className="mx-auto grid max-w-6xl gap-10 px-6 text-center md:grid-cols-4">
                    <div>
                        <h3 className="text-5xl font-bold">500+</h3>
                        <p className="mt-3 text-emerald-100">Students Helped</p>
                    </div>

                    <div>
                        <h3 className="text-5xl font-bold">50+</h3>
                        <p className="mt-3 text-emerald-100">Events Organized</p>
                    </div>

                    <div>
                        <h3 className="text-5xl font-bold">100+</h3>
                        <p className="mt-3 text-emerald-100">Volunteers</p>
                    </div>

                    <div>
                        <h3 className="text-5xl font-bold">10+</h3>
                        <p className="mt-3 text-emerald-100">Community Programs</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Meet Our Team
                    </h2>

                    <p className="mt-4 text-lg text-gray-600">
                        Dedicated individuals working for a better future.
                    </p>
                </div>

                <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((member) => (
                        <div
                            key={member}
                            className="rounded-3xl bg-white p-8 text-center shadow-xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
                                alt="Team Member"
                                className="mx-auto h-32 w-32 rounded-full object-cover"
                            />

                            <h3 className="mt-6 text-2xl font-bold text-gray-900">
                                Team Member
                            </h3>

                            <p className="mt-2 text-emerald-700">Foundation Volunteer</p>

                            <p className="mt-4 text-gray-600">
                                Passionate about serving communities and empowering youth
                                through meaningful initiatives.
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}