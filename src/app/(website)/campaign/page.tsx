"use client";

import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronLeft,
    ChevronRight,
    Heart,
    Users,
    Calendar,
    MapPin,
    Clock,
    Target,
    Gift,
    ArrowRight,
    CheckCircle
} from "lucide-react";

// Type definitions
interface Slide {
    id: number;
    image: string;
    title: string;
    subtitle: string;
}

interface Campaign {
    title: string;
    description: string;
    image: string;
    goal: number;
    raised: number;
    deadline: string;
    location: string;
}

interface Event {
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
}

interface CampaignCardProps extends Campaign {
    delay: number;
}

interface EventCardProps extends Event {
    delay: number;
}

interface StatCardProps {
    number: string;
    label: string;
    icon: React.ElementType;
}

interface ProgramCardProps {
    title: string;
    desc: string;
    icon: React.ElementType;
    delay: number;
}

// Hero Slider Component for Campaign Page
function CampaignHeroSlider(): React.JSX.Element {
    const slides: Slide[] = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2000&auto=format&fit=crop",
            title: "Join Our Campaigns",
            subtitle: "Be the change you wish to see in the world",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop",
            title: "Education For All",
            subtitle: "Help us provide quality education to underprivileged children",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop",
            title: "Health & Wellness",
            subtitle: "Support healthcare initiatives for communities in need",
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2000&auto=format&fit=crop",
            title: "Youth Empowerment",
            subtitle: "Empowering the next generation of leaders",
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop",
            title: "Community Support",
            subtitle: "Together we can build stronger communities",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const prevSlide = (): void => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = (): void => {
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
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

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
                                        Our Campaigns
                                    </span>
                                </div>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3 sm:mb-4 md:mb-6">
                                    {slide.title}
                                </h1>
                                <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
                                    {slide.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

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

// Campaign Card Component
function CampaignCard({ title, description, image, goal, raised, deadline, location, delay }: CampaignCardProps): React.JSX.Element {
    const progress: number = (raised / goal) * 100;

    return (
        <div
            className="rounded-2xl sm:rounded-3xl bg-white shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
        >
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                    Active
                </div>
            </div>

            <div className="p-5 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm mb-3">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{location}</span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {description}
                </p>

                <div className="mb-4 sm:mb-6">
                    <div className="flex justify-between text-sm sm:text-base mb-2">
                        <span className="text-gray-600">Raised: ₹{raised.toLocaleString()}</span>
                        <span className="text-gray-600 font-semibold">Goal: ₹{goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                        <div
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-1000"
                            style={{ width: `${Math.min(progress, 100)}%`, height: '100%' }}
                        />
                    </div>
                    <p className="text-right text-xs sm:text-sm text-gray-500 mt-1">
                        {progress.toFixed(1)}% funded
                    </p>
                </div>

                <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-1 sm:gap-2 text-gray-500 text-xs sm:text-sm">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>Deadline: {deadline}</span>
                    </div>
                </div>

                <Link
                    href="/donate"
                    className="group w-full flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 sm:px-6 py-2.5 sm:py-3 text-white font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                    Donate Now
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}

// Upcoming Event Card
function EventCard({ title, date, time, location, description, delay }: EventCardProps): React.JSX.Element {
    const [day, month] = date.split(' ');

    return (
        <div
            className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 md:p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
        >
            <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex-shrink-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center min-w-[70px] sm:min-w-[80px]">
                    <div className="text-emerald-600 font-black text-xl sm:text-2xl">{day}</div>
                    <div className="text-emerald-600 text-xs sm:text-sm font-semibold">{month}</div>
                </div>

                <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">{title}</h3>
                    <div className="space-y-1 mb-3">
                        <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                            <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{location}</span>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">{description}</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm sm:text-base hover:gap-3 transition-all"
                    >
                        Register Now
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

// Impact Stat Component
function ImpactStat({ number, label, icon: Icon }: StatCardProps): React.JSX.Element {
    return (
        <div className="text-center transform transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 rounded-2xl sm:rounded-3xl mb-3 sm:mb-4">
                <Icon className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{number}</h3>
            <p className="mt-1 sm:mt-2 text-emerald-100 text-xs sm:text-sm">{label}</p>
        </div>
    );
}

export default function CampaignPage(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const campaigns: Campaign[] = [
        {
            title: "Education for Every Child",
            description: "Help us provide quality education, school supplies, and learning resources to underprivileged children in rural areas.",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
            goal: 500000,
            raised: 325000,
            deadline: "Mar 30, 2026",
            location: "Multiple Locations",
        },
        {
            title: "Healthcare for Villages",
            description: "Support our mobile health clinics providing free checkups, medicines, and health awareness to remote communities.",
            image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1200&auto=format&fit=crop",
            goal: 750000,
            raised: 450000,
            deadline: "Apr 15, 2026",
            location: "Rural Areas",
        },
        {
            title: "Youth Skill Development",
            description: "Empower young people with vocational training, digital skills, and career guidance for better employment opportunities.",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
            goal: 300000,
            raised: 210000,
            deadline: "May 10, 2026",
            location: "Urban Centers",
        },
    ];

    const events: Event[] = [
        {
            title: "Annual Charity Walk",
            date: "15 Mar",
            time: "7:00 AM - 12:00 PM",
            location: "City Park, Main Street",
            description: "Join us for a 5km walk to raise awareness and funds for education initiatives.",
        },
        {
            title: "Community Health Camp",
            date: "22 Mar",
            time: "9:00 AM - 5:00 PM",
            location: "Community Center, Sector 12",
            description: "Free health checkups, medical consultations, and medicine distribution.",
        },
        {
            title: "Youth Leadership Workshop",
            date: "05 Apr",
            time: "10:00 AM - 4:00 PM",
            location: "Foundation Hall, Downtown",
            description: "One-day workshop on leadership, communication, and career development.",
        },
    ];

    const handleSubscribe = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            console.log("Subscribed with email:", email);
            setEmail("");
            setIsSubmitting(false);
            alert("Thank you for subscribing!");
        }, 1000);
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Slider */}
            <CampaignHeroSlider />

            {/* Campaigns Section */}
            <section className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
                <div className={`text-center transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <p className="inline-block rounded-full bg-emerald-100 px-3 sm:px-4 py-1 sm:py-1.5 text-emerald-700 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                        Active Campaigns
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Current Initiatives
                    </h2>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        Join us in making a difference through these impactful campaigns
                    </p>
                </div>

                <div className="mt-10 sm:mt-12 md:mt-14 grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 lg:grid-cols-3">
                    {campaigns.map((campaign, index) => (
                        <CampaignCard
                            key={index}
                            {...campaign}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </section>

            {/* Impact Stats Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-emerald-700 to-teal-700 py-12 sm:py-16 md:py-20">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full filter blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
                    <div className={`text-center mb-8 sm:mb-10 md:mb-12 transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            Our Campaign Impact
                        </h2>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-emerald-100">
                            Together we've achieved remarkable results
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
                        <ImpactStat number="15+" label="Campaigns Completed" icon={Target} />
                        <ImpactStat number="10K+" label="Lives Impacted" icon={Users} />
                        <ImpactStat number="₹2.5M+" label="Funds Raised" icon={Gift} />
                        <ImpactStat number="500+" label="Volunteers" icon={Heart} />
                    </div>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
                <div className={`text-center transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                    <p className="inline-block rounded-full bg-emerald-100 px-3 sm:px-4 py-1 sm:py-1.5 text-emerald-700 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                        Join Us
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Upcoming Events
                    </h2>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        Be part of our upcoming events and help create positive change
                    </p>
                </div>

                <div className="mt-10 sm:mt-12 md:mt-14 space-y-4 sm:space-y-5 md:space-y-6">
                    {events.map((event, index) => (
                        <EventCard
                            key={index}
                            {...event}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </section>

            {/* Volunteer CTA Section */}
            <section className="bg-gradient-to-r from-emerald-50 to-teal-50 py-12 sm:py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 text-center">
                    <div className={`transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                        <Users className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-emerald-600 mx-auto mb-4 sm:mb-6" />
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                            Want to Make a Difference?
                        </h2>
                        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Join our team of dedicated volunteers and help us create lasting change in communities.
                            Your time and skills can make a real impact.
                        </p>

                        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <Link
                                href="/join-us"
                                className="group inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-white font-extrabold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30"
                            >
                                <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                                Become a Volunteer
                                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl border-2 border-emerald-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-emerald-700 font-extrabold text-sm sm:text-base transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:scale-105"
                            >
                                Contact Us
                            </Link>
                        </div>

                        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500">
                            <CheckCircle className="h-4 w-4 text-emerald-500" />
                            <span>Flexible timing options available</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-white py-12 sm:py-16 md:py-20">
                <div className="mx-auto max-w-3xl px-5 sm:px-8 md:px-12 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                        Stay Updated
                    </h2>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">
                        Subscribe to our newsletter for campaign updates and event notifications
                    </p>

                    <form onSubmit={handleSubscribe} className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="flex-1 rounded-xl sm:rounded-2xl border border-gray-300 px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 sm:px-6 py-2.5 sm:py-3 text-white font-bold text-sm sm:text-base hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Subscribing..." : "Subscribe"}
                        </button>
                    </form>

                    <p className="mt-3 sm:mt-4 text-xs text-gray-500">
                        No spam, unsubscribe anytime.
                    </p>
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