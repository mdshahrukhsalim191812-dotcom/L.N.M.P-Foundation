"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Users, BookOpen, Heart, Globe, Award, Target, Eye } from "lucide-react";

// Hero Slider Component
function AboutHeroSlider() {
    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
            title: "Serving Humanity Through Knowledge & Compassion",
            subtitle: "Dedicated to education, youth empowerment, and community welfare",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop",
            title: "Empowering Youth for a Better Future",
            subtitle: "Creating opportunities through guidance and mentorship",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2000&auto=format&fit=crop",
            title: "Community Welfare Initiatives",
            subtitle: "Supporting families and building stronger communities",
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop",
            title: "Educational Programs for All",
            subtitle: "Making quality education accessible to everyone",
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2000&auto=format&fit=crop",
            title: "Sustainable Social Impact",
            subtitle: "Creating lasting change through meaningful initiatives",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[100vh] overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentIndex
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-full"
                        }`}
                >
                    <div className="relative h-full w-full">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            priority={index === 0}
                            className="object-cover"
                            sizes="100vw"
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    {/* Slide Content */}
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                        <div className="max-w-4xl mx-auto px-5 sm:px-8 md:px-12 w-full">
                            <div
                                className={`transform transition-all duration-700 delay-300 ${index === currentIndex
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-10 opacity-0"
                                    }`}
                            >
                                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-white/20">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-white text-[10px] sm:text-xs font-medium tracking-wide">
                                        About Our Foundation
                                    </span>
                                </div>

                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-3 sm:mb-4 md:mb-6">
                                    {slide.title}
                                </h1>
                                <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                                    {slide.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md rounded-full p-2 sm:p-3 hover:bg-white/30 transition-all duration-300 group"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:scale-110 transition" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md rounded-full p-2 sm:p-3 hover:bg-white/30 transition-all duration-300 group"
                aria-label="Next slide"
            >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:scale-110 transition" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2 md:gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`transition-all duration-300 rounded-full ${index === currentIndex
                            ? "w-6 sm:w-8 md:w-10 h-1.5 sm:h-2 bg-emerald-500"
                            : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

// Stat Card Component
type StatCardProps = {
    number: string;
    label: string;
    icon: any;
    color: string;
};

function StatCard({
    number,
    label,
    icon: Icon,
    color,
}: StatCardProps) {
    return (
        <div className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:scale-105 bg-gradient-to-br ${color}`}>
            <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white mb-3 sm:mb-4" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{number}</h3>
            <p className="mt-1 sm:mt-2 text-white/80 text-xs sm:text-sm">{label}</p>
        </div>
    );
}

// Value Card Component
function ValueCard({ title, desc, icon, delay }) {
    return (
        <div
            className="rounded-2xl sm:rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
        >
            <div className="text-4xl sm:text-5xl">{icon}</div>
            <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold text-gray-900">
                {title}
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-gray-600">{desc}</p>
        </div>
    );
}

// Team Member Component
function TeamMember({ name, role, description, image, delay }) {
    return (
        <div
            className="rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 text-center shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
        >
            <div className="relative mx-auto h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="rounded-full object-cover"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                />
            </div>
            <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold text-gray-900">
                {name}
            </h3>
            <p className="mt-1 sm:mt-2 text-emerald-700 text-sm sm:text-base font-semibold">{role}</p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Slider Section */}
            <AboutHeroSlider />

            {/* About Content */}
            <section className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
                <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-center">
                    <div className={`transform transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl" />
                            <Image
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                                alt="Foundation Team"
                                width={600}
                                height={500}
                                className="relative rounded-2xl sm:rounded-3xl shadow-xl w-full object-cover"
                            />
                            <div className="absolute -bottom-5 -right-5 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
                                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600" />
                            </div>
                        </div>
                    </div>

                    <div className={`transform transition-all duration-700 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
                        <p className="inline-block rounded-full bg-emerald-100 px-3 sm:px-4 py-1 sm:py-1.5 text-emerald-700 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                            Who We Are
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Serving Humanity Through Knowledge & Compassion
                        </h2>
                        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
                            We are a community-driven foundation focused on uplifting society
                            through educational programs, youth guidance, workshops, social
                            welfare, and awareness initiatives. Our mission is to inspire
                            positive transformation and support individuals in achieving a
                            better future.
                        </p>
                        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
                            We believe that real change begins with knowledge, unity,
                            compassion, and sincere efforts toward humanity.
                        </p>

                        <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                            <StatCard
                                number="500+"
                                label="Students Helped"
                                icon={BookOpen}
                                color="from-emerald-500 to-emerald-600"
                            />
                            <StatCard
                                number="50+"
                                label="Events Organized"
                                icon={Globe}
                                color="from-teal-500 to-teal-600"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
                    <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2">
                        {/* Mission */}
                        <div className={`rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 md:p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                            <div className="mb-4 sm:mb-5 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-emerald-100">
                                <Target className="h-7 w-7 sm:h-8 sm:w-8 text-emerald-600" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                Our Mission
                            </h2>
                            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
                                To empower youth, support education, strengthen communities,
                                and create opportunities for positive social and spiritual
                                development through impactful programs and initiatives.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className={`rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 md:p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl transform delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                            <div className="mb-4 sm:mb-5 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-teal-100">
                                <Eye className="h-7 w-7 sm:h-8 sm:w-8 text-teal-600" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                Our Vision
                            </h2>
                            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
                                To build a knowledgeable, compassionate, and empowered society
                                where education, moral values, and humanity lead the way toward
                                sustainable growth and positive change.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
                <div className="text-center">
                    <p className="inline-block rounded-full bg-emerald-100 px-3 sm:px-4 py-1 sm:py-1.5 text-emerald-700 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                        Our Principles
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Our Core Values
                    </h2>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        Principles that guide our work and mission.
                    </p>
                </div>

                <div className="mt-10 sm:mt-12 md:mt-14 grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    <ValueCard
                        title="Education"
                        desc="Promoting knowledge and lifelong learning for all."
                        icon="📚"
                        delay={0}
                    />
                    <ValueCard
                        title="Compassion"
                        desc="Serving humanity with sincerity and care."
                        icon="❤️"
                        delay={100}
                    />
                    <ValueCard
                        title="Integrity"
                        desc="Maintaining honesty and transparency."
                        icon="🤝"
                        delay={200}
                    />
                    <ValueCard
                        title="Unity"
                        desc="Building stronger communities together."
                        icon="🌟"
                        delay={300}
                    />
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-emerald-700 to-teal-700 py-12 sm:py-16 md:py-20">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full filter blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
                    <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-2 sm:grid-cols-4 text-center">
                        <div className="transform transition-all duration-300 hover:scale-105">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">500+</h3>
                            <p className="mt-2 sm:mt-3 text-emerald-100 text-xs sm:text-sm">Students Helped</p>
                        </div>
                        <div className="transform transition-all duration-300 hover:scale-105">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">50+</h3>
                            <p className="mt-2 sm:mt-3 text-emerald-100 text-xs sm:text-sm">Events Organized</p>
                        </div>
                        <div className="transform transition-all duration-300 hover:scale-105">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">100+</h3>
                            <p className="mt-2 sm:mt-3 text-emerald-100 text-xs sm:text-sm">Volunteers</p>
                        </div>
                        <div className="transform transition-all duration-300 hover:scale-105">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">10+</h3>
                            <p className="mt-2 sm:mt-3 text-emerald-100 text-xs sm:text-sm">Programs</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
                <div className="text-center">
                    <p className="inline-block rounded-full bg-emerald-100 px-3 sm:px-4 py-1 sm:py-1.5 text-emerald-700 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                        Our Leadership
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Meet Our Team
                    </h2>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        Dedicated individuals working passionately for a better future.
                    </p>
                </div>

                <div className="mt-10 sm:mt-12 md:mt-14 grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <TeamMember
                        name="Dr. Rajesh Kumar"
                        role="Founder & Director"
                        description="Passionate educator with 20+ years of experience in community development and youth empowerment initiatives."
                        image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
                        delay={0}
                    />
                    <TeamMember
                        name="Priya Sharma"
                        role="Program Coordinator"
                        description="Dedicated to organizing educational programs and workshops that create lasting impact in communities."
                        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop"
                        delay={100}
                    />
                    <TeamMember
                        name="Amit Patel"
                        role="Volunteer Lead"
                        description="Committed to building strong volunteer networks and fostering community engagement across regions."
                        image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
                        delay={200}
                    />
                </div>
            </section>

            <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
        </main>
    );
}