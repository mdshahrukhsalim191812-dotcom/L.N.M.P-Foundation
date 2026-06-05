"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart, Users, BookOpen, Globe, Award } from "lucide-react";


// Hero Slider Component
function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: "/hero/hero1-bg.jpeg",
      title: "Building Hope Through Education",
      subtitle: "Empowering the next generation with knowledge and skills",
    },
    {
      id: 2,
      image: "/hero/hero2-bg.jpeg",
      title: "Community Development",
      subtitle: "Working together for a better tomorrow",
    },
    {
      id: 3,
      image: "/hero/hero3-bg.jpeg",
      title: "Youth Empowerment",
      subtitle: "Inspiring young minds to reach their full potential",
    },
    {
      id: 4,
      image: "/hero/hero4-bg.jpeg",
      title: "Healthcare Initiatives",
      subtitle: "Ensuring wellness for all community members",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2000&auto=format&fit=crop",
      title: "Sustainable Future",
      subtitle: "Creating lasting impact through eco-friendly programs",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[100vh] overflow-hidden">
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
            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Slide Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full">
              <div
                className={`max-w-3xl transform transition-all duration-700 delay-300 ${index === currentIndex
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
                    Welcome to L.N.M.P Foundation
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-3 sm:mb-4 md:mb-6">
                  {slide.title}
                </h1>
                <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-2xl">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5">
                  <Link
                    href="/donate"
                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-white font-extrabold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 inline-flex items-center justify-center gap-2"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-full" />
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                    Support Us
                  </Link>

                  <Link
                    href="/join-us"
                    className="rounded-xl sm:rounded-2xl border-2 border-white/30 backdrop-blur-sm px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-white font-extrabold text-sm sm:text-base transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 bg-white/5 inline-flex items-center justify-center gap-2"
                  >
                    <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                    Join as Volunteer
                  </Link>
                </div>
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
function StatCard({ number, label, icon: Icon, color }) {
  return (
    <div className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:scale-105 bg-gradient-to-br ${color}`}>
      <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white mb-3 sm:mb-4" />
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{number}</h3>
      <p className="mt-1 sm:mt-2 text-white/80 text-xs sm:text-sm">{label}</p>
    </div>
  );
}

// Program Card Component
function ProgramCard({ title, desc, icon: Icon, delay }) {
  return (
    <div
      className="rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-fadeInUp"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <div className="mb-4 sm:mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100">
        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-600" />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h3>
      <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-gray-600">{desc}</p>
    </div>
  );
}

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* About Section */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-center">
          <div className={`transform transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl" />
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
                alt="About Foundation"
                width={600}
                height={500}
                className="relative rounded-2xl sm:rounded-3xl shadow-xl w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
                <Award className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-600" />
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-700 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
            <p className="inline-block rounded-full bg-emerald-100 px-3 sm:px-4 py-1 sm:py-1.5 text-emerald-700 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              About Our Foundation
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Empowering Communities Through Compassion
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
              Our foundation works tirelessly to empower students, guide youth, support
              families, and organize educational and community-driven programs. We believe
              positive change begins with knowledge, compassion, and unity. Since our
              establishment, we have reached thousands of lives across the region.
            </p>

            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <StatCard
                number="500+"
                label="Students Supported"
                icon={BookOpen}
                color="from-emerald-500 to-emerald-600"
              />
              <StatCard
                number="50+"
                label="Community Events"
                icon={Globe}
                color="from-teal-500 to-teal-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
          <div className="text-center">
            <p className="inline-block rounded-full bg-emerald-100 px-3 sm:px-4 py-1 sm:py-1.5 text-emerald-700 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              What We Do
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Our Programs & Initiatives
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Programs focused on education, youth empowerment, and social welfare to create lasting impact.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 md:mt-14 grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <ProgramCard
              title="Education Support"
              desc="Helping students with learning resources, scholarships, mentorship programs, and educational guidance for brighter futures."
              icon={BookOpen}
              delay={0}
            />
            <ProgramCard
              title="Youth Development"
              desc="Workshops, seminars, leadership training, and motivational programs to empower the next generation of leaders."
              icon={Users}
              delay={100}
            />
            <ProgramCard
              title="Community Welfare"
              desc="Supporting needy families, healthcare initiatives, food distribution, and social welfare programs."
              icon={Heart}
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-700 to-teal-700 py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 md:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Our Impact in Numbers
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-emerald-100 max-w-2xl mx-auto">
            Every contribution helps us reach more lives and create sustainable change.
          </p>

          <div className="mt-10 sm:mt-12 md:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white">10K+</div>
              <p className="mt-2 text-emerald-100 text-xs sm:text-sm">Lives Impacted</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white">25+</div>
              <p className="mt-2 text-emerald-100 text-xs sm:text-sm">Partner Organizations</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white">15</div>
              <p className="mt-2 text-emerald-100 text-xs sm:text-sm">Active Projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white">100+</div>
              <p className="mt-2 text-emerald-100 text-xs sm:text-sm">Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 md:px-12 text-center">
          <div className="rounded-3xl bg-gradient-to-r from-emerald-50 to-teal-50 p-6 sm:p-8 md:p-12 lg:p-16 shadow-xl">
            <Heart className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-emerald-600 mx-auto mb-4 sm:mb-6 animate-pulse" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Together We Can Make a Difference
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Your support helps us continue educational, humanitarian, and community development initiatives.
              Every contribution, no matter the size, creates lasting change.
            </p>

            <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/donate"
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-white font-extrabold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 inline-flex items-center justify-center gap-2"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition duration-700 group-hover:translate-x-full" />
                <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                Donate Now
              </Link>

              <Link
                href="/join-us"
                className="rounded-xl sm:rounded-2xl border-2 border-emerald-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-emerald-700 font-extrabold text-sm sm:text-base transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                Become a Volunteer
              </Link>
            </div>

            <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500">
              * All donations are tax-deductible and go directly to our programs
            </p>
          </div>
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