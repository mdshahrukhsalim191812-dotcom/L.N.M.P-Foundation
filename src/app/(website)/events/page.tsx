const events = [
  {
    title: "Youth Motivation Seminar",
    date: "15 June 2026",
    location: "Bhagalpur, Bihar",
    description:
      "An inspiring seminar focused on youth development, education, and personal growth.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Educational Quiz Competition",
    date: "22 June 2026",
    location: "Community Hall",
    description:
      "A competitive and engaging quiz event for school and college students.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Community Welfare Program",
    date: "5 July 2026",
    location: "Sultanganj",
    description:
      "A social welfare initiative supporting families and promoting community unity.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-700 to-teal-700 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur">
            Upcoming Events
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Events That Inspire Communities
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-emerald-100">
            Join our educational, motivational, and community-driven programs
            designed to create positive impact in society.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Event Image */}
              <div className="overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-64 w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              {/* Event Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 text-sm text-emerald-600">
                  <span className="rounded-full bg-emerald-100 px-3 py-1">
                    {event.date}
                  </span>

                  <span className="rounded-full bg-teal-100 px-3 py-1 text-teal-700">
                    {event.location}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold text-gray-900">
                  {event.title}
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  {event.description}
                </p>

                <button className="mt-6 rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Timeline */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Event Journey
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Our mission-driven events continue to impact communities.
            </p>
          </div>

          <div className="mt-16 space-y-10">
            {[
              {
                year: "2024",
                text: "Started community awareness and educational workshops.",
              },
              {
                year: "2025",
                text: "Expanded youth development and quiz competition programs.",
              },
              {
                year: "2026",
                text: "Organizing large-scale educational and social welfare initiatives.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-6 rounded-3xl bg-white p-8 shadow-lg"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-bold text-white">
                  {item.year}
                </div>

                <div>
                  <p className="text-lg leading-8 text-gray-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Want To Participate In Our Events?
          </h2>

          <p className="mt-6 text-lg text-emerald-100">
            Become a volunteer, participant, or supporter and contribute
            toward meaningful community initiatives.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-emerald-700 transition hover:bg-gray-100">
              Become Volunteer
            </button>

            <button className="rounded-2xl border border-white px-8 py-4 text-lg font-semibold transition hover:bg-white hover:text-emerald-700">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}