export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur">
              Welcome to Our Foundation
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Building Hope <br />
              Through Education & Humanity
            </h1>

            <p className="mt-6 text-lg text-emerald-100">
              We are committed to helping communities through education,
              awareness, youth development, and social support programs.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                className="rounded-xl bg-white px-6 py-3 font-semibold text-emerald-700 transition hover:bg-gray-100">
                Donate Now
              </button>

              <button className="rounded-xl border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-emerald-700">
                Join as Volunteer
              </button>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop"
              alt="Foundation"
              className="w-full max-w-lg rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
              alt="About"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              About Our Foundation
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our foundation works to empower students, guide youth, support
              families, and organize educational and community-driven programs.
              We believe positive change begins with knowledge, compassion, and
              unity.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-emerald-50 p-6">
                <h3 className="text-3xl font-bold text-emerald-700">500+</h3>
                <p className="mt-2 text-gray-600">Students Supported</p>
              </div>

              <div className="rounded-2xl bg-teal-50 p-6">
                <h3 className="text-3xl font-bold text-teal-700">50+</h3>
                <p className="mt-2 text-gray-600">Community Events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Our Programs
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Programs focused on education, youth empowerment, and social
              welfare.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Education Support",
                desc: "Helping students with learning resources and guidance.",
              },
              {
                title: "Youth Development",
                desc: "Workshops, seminars, and motivational programs.",
              },
              {
                title: "Community Welfare",
                desc: "Supporting needy families and social initiatives.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                  🌱
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="bg-emerald-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Together We Can Make a Difference
          </h2>

          <p className="mt-6 text-lg text-emerald-100">
            Your support helps us continue educational, humanitarian, and
            community development initiatives.
          </p>

          <button className="mt-8 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-emerald-700 transition hover:bg-gray-100">
            Donate Now
          </button>
        </div>
      </section>

    </main>
  );
}