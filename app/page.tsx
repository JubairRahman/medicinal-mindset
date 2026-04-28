"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  Users,
  ShieldCheck,
  Stethoscope,
  ArrowRight,
  HeartPulse,
  Activity,
  DoorOpen,
  Bed,
  Microscope,
  FlaskConical,
} from "lucide-react";
import { useEffect, useState } from "react";

// --- Types for TypeScript ---
interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
}

interface Doctor {
  id: string | number;
  name: string;
  isVerified: boolean;
  rating: number;
  reviewCount: number;
  location: string;
  availability: string;
  priceRange: {
    min: number;
    max: number;
    currency: string;
  };
  image: string;
  bgColor: string;
}

export default function Page() {
  // Use types to prevent the "type never" build error
  const [posts, setPosts] = useState<Post[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const GITHUB_JSON_URL =
      "https://raw.githubusercontent.com/JubairRahman/medicinal-mindset-data/refs/heads/main/blog.json";
    const Doctor_JSON_URL =
      "https://raw.githubusercontent.com/JubairRahman/medicinal-mindset-data/refs/heads/main/doctor.json";

    // Fetch Blog Posts
    fetch(GITHUB_JSON_URL)
      .then((res) => res.json())
      .then((data) => setPosts(data.posts))
      .catch((err) => console.error("Error fetching blog data:", err));

    // Fetch Doctors
    fetch(Doctor_JSON_URL)
      .then((res) => res.json())
      .then((data) => setDoctors(data.doctors))
      .catch((err) => console.error("Error fetching doctor data:", err));
  }, []);

  const topCards = [
    {
      title: "Easy appointments",
      desc: "Book or reschedule online anytime. Flexible slots including evenings and weekends.",
      icon: faCalendarDays, // ✅ correct
    },
    {
      title: "Emergency care",
      desc: "+1 (555) 123-4567\nUrgent medical support when you need it.",
      icon: faPhone, // ❌ NOT "📞"
    },
    {
      title: "Working hours",
      desc: "Sun - Wed 8AM - 5PM\nThu - Fri 9AM - 5PM\nSaturday 10AM - 4PM",
      icon: faClock, // ❌ NOT "🕒"
    },
  ];

  const specialties = [
    "UROLOGY",
    "NEUROLOGY",
    "ORTHOPEDIC",
    "CARDIOLOGIST",
    "DENTIST",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      {/* HERO SECTION */}
      <section className="relative px-6 md:px-16 py-24 md:py-32">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/20 blur-[140px] rounded-full"></div>

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-blue-400 uppercase tracking-[4px] text-sm font-semibold mb-4">
              Trusted Clinic & Learning Hub
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Progressive & <br />
              <span className="text-blue-500">Professional Care</span>
            </h1>

            <p className="mt-6 text-slate-300 text-lg leading-relaxed max-w-xl">
              Experience healthcare, learning, and appointment booking in one
              elegant digital platform crafted for simplicity and trust.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/course"
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition-all"
              >
                Our Courses
              </Link>

              <Link
                href="/services"
                className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all"
              >
                Services
              </Link>

              <Link
                href="/appointment"
                className="px-6 py-3 rounded-full bg-white text-slate-900 hover:bg-slate-200 transition-all"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-5">
                <div className="h-4 w-24 bg-blue-500 rounded-full"></div>
                <div className="h-4 w-40 bg-white/20 rounded-full"></div>
                <div className="h-40 rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-400/20"></div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-3xl font-bold text-blue-400">25+</p>
                    <p className="text-sm text-slate-400 mt-1">Doctors</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-3xl font-bold text-cyan-400">1000+</p>
                    <p className="text-sm text-slate-400 mt-1">Patients</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Blur */}
            <div className="absolute -z-10 top-10 right-10 w-48 h-48 bg-blue-500/20 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </section>
      {/* SECTION 1 */}
      <section className="bg-[#f4f7fb] text-slate-800 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-5">
          <div className="bg-gradient-to-br from-blue-950/100 to-cyan-950/50 text-white rounded-2xl p-8 shadow-xl">
            <p className="uppercase text-xs tracking-[3px] opacity-80">
              Why Choose Us
            </p>

            <h2 className="text-3xl font-bold mt-4 leading-tight">
              Healthcare you can trust, care that puts you first
            </h2>

            <p className="mt-5 text-blue-100 leading-relaxed text-sm">
              We combine experienced specialists, modern facilities, and a
              patient-centered approach.
            </p>
          </div>

          {topCards.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 shadow-md"
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="w-8 h-8 text-blue-500"
              />

              <h3 className="font-bold text-lg mt-5">{item.title}</h3>

              <p className="text-slate-500 text-xl mt-3 whitespace-pre-line">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* SECTION 2 */}
      <section className="bg-[#050A18] text-white py-24 px-6 overflow-hidden relative">
        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE: MODERN IMAGE GRID (Vertical & Horizontal Mix) */}
          <div className="grid grid-cols-2 gap-4 relative">
            {/* Main Tall Image */}
            <div className="row-span-2">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                alt="Medical Care"
                className="w-full h-full object-cover rounded-[2rem] border border-white/5 shadow-2xl"
              />
            </div>

            {/* Top Horizontal Image */}
            <div className="col-span-1">
              <img
                src="https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=1470&auto=format&fit=crop"
                alt="Modern Equipment"
                className="w-full h-48 object-cover rounded-[2rem] border border-white/5 shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Bottom Horizontal Image */}
            <div className="col-span-1">
              <img
                src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=1470&auto=format&fit=crop"
                alt="Patient Focus"
                className="w-full h-48 object-cover rounded-[2rem] border border-white/5 shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Small Floating Accent Icon for Modernity */}
            {/* Re-refined version with smooth float */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 p-5 rounded-2xl shadow-2xl hidden md:block animate-[float_4s_ease-in-out_infinite]">
              <HeartPulse size={28} className="text-white" />
            </div>
          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-400">
              <Stethoscope size={24} />
              <span className="text-xs font-bold uppercase tracking-widest">
                Clinical Excellence
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Quality care, <br />
                <span className="text-blue-500">close to you</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                Our clinic brings together experienced doctors, modern
                equipment, and a focus on clear communication. We offer
                check-ups, diagnostics, and ongoing care tailored to you.
              </p>
            </div>

            <ul className="space-y-4 pt-4">
              {[
                "Modern Diagnostic Equipment",
                "Expert Specialist Consultation",
                "Personalized Recovery Plans",
              ].map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm font-semibold text-slate-300"
                >
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all active:scale-95 shadow-lg shadow-blue-600/20"
              >
                View all Services
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      );
      {/* SECTION 3 */}
      <section className="bg-[#eaf1f8] py-20 text-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="uppercase text-blue-600 text-xs tracking-[3px] font-semibold">
              Our Focus
            </p>

            <h2 className="text-5xl font-bold mt-4">Clinic & Specialities</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-5 mt-14">
            {specialties.map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="w-20 h-20 mx-auto rounded-full border border-blue-100 flex items-center justify-center text-4xl text-blue-600">
                  +
                </div>

                <h3 className="font-bold text-sm mt-6 tracking-wide">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SECTION 4 */}
      <section className="bg-white py-20 text-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Illustration/Mockup */}
          <div className="lg:w-1/2 relative">
            {/* Replace src with your actual image path */}
            <img
              src="/assets/img/mobileApp.png"
              alt="Mobile App Interface"
              className="w-2/3 h-auto drop-shadow-2xl mx-auto"
            />
          </div>

          {/* Right Side: Content */}
          <div className="lg:w-1/2">
            <div className="mb-10">
              <p className="uppercase text-blue-600 text-xs tracking-[3px] font-semibold">
                Facilities
              </p>
              <h2 className="text-4xl font-bold mt-4">Available services</h2>
              <p className="text-slate-500 mt-4 text-sm">
                Modern facilities and dedicated spaces for your care.
              </p>
            </div>

            {/* Services Grid */}
            <div className="flex flex-wrap gap-4">
              {[
                { name: "Health", icon: <Activity size={24} /> },
                { name: "Chamber", icon: <DoorOpen size={24} /> },
                { name: "Patient Ward", icon: <Bed size={24} /> },
                { name: "Tests", icon: <Microscope size={24} /> },
                { name: "Laboratory", icon: <FlaskConical size={24} /> },
              ].map((service) => (
                <div
                  key={service.name}
                  className="bg-white border border-slate-100 rounded-xl p-4 w-28 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                >
                  {/* Changed: Replaced img tag with a div that renders the icon */}
                  <div className="w-16 h-16 rounded-lg bg-blue-50 mb-3 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>

                  <p className="text-[11px] font-bold text-center leading-tight text-slate-700">
                    {service.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 5 */}
      <section className="bg-white py-20 text-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
          {/* Left Side: Description */}
          <div className="lg:w-1/3">
            <p className="uppercase text-blue-600 text-xs tracking-[3px] font-semibold">
              Our Team
            </p>
            <h2 className="text-4xl font-bold mt-4 leading-tight">
              Book our doctors
            </h2>
            <p className="text-slate-500 mt-6 text-sm leading-relaxed">
              Choose from verified specialists and book an appointment at your
              convenience. Our doctors are experienced, qualified, and committed
              to your care.
            </p>
            <button className="mt-8 text-blue-600 font-bold text-sm border-b-2 border-transparent hover:border-blue-600 transition-all">
              View all doctors
            </button>
          </div>

          {/* Right Side: Doctor Cards */}
          <div className="lg:w-2/3 flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
            {doctors.map((doctor) => (
              <div
                key={doctor.id} // Always use a unique ID from your data
                className="min-w-[320px] bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex-shrink-0"
              >
                {/* Doctor Image Header */}
                <div
                  className="h-48 relative flex items-center justify-center"
                  style={{ backgroundColor: doctor.bgColor || "#d4e9ff" }} // Dynamic background color
                >
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm text-slate-400 hover:text-red-500 cursor-pointer transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>

                  {/* Profile Image from JSON */}
                  <div className="relative w-full h-full">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg text-slate-900">
                      {doctor.name}
                    </h3>
                    {doctor.isVerified && (
                      <span className="bg-green-500 text-white rounded-full p-0.5 text-[10px]">
                        ✓
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 mt-2">
                    {/* Dynamic Star Rating */}
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < doctor.rating
                            ? "text-orange-400 text-xs"
                            : "text-slate-200 text-xs"
                        }
                      >
                        ★
                      </span>
                    ))}
                    <span className="text-slate-400 text-xs ml-2">
                      ({doctor.reviewCount} reviews)
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 text-xs text-slate-500 font-medium">
                    <p className="flex items-center gap-2">
                      📍 {doctor.location}
                    </p>
                    <p className="flex items-center gap-2">
                      ⏰ {doctor.availability}
                    </p>
                    <p className="flex items-center gap-2 font-bold text-blue-600">
                      {doctor.priceRange.currency} {doctor.priceRange.min} -{" "}
                      {doctor.priceRange.max}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <button className="py-2.5 px-4 border border-blue-600 text-blue-600 rounded-lg font-bold text-xs hover:bg-blue-50 transition-colors">
                      Profile
                    </button>
                    <button className="py-2.5 px-4 bg-blue-600 text-white rounded-lg font-bold text-xs hover:bg-blue-700 transition-colors shadow-md">
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SECTION 6 */}
      <section className="bg-[#f8fafc] py-20 text-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="uppercase text-blue-600 text-xs tracking-[3px] font-semibold">
              From Our Blog
            </p>
            <h2 className="text-4xl font-bold mt-4">Our blog</h2>
            <p className="text-slate-500 mt-2 text-sm">
              Health tips, news, and updates from our team.
            </p>
          </div>

          {/* <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((post) => (
              <div
                key={post}
                className="bg-white rounded-2xl overflow-hidden shadow-sm group cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="h-52 bg-slate-200 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1511174511562-5f7f185879f9?q=80&w=2070"
                    alt="Blog"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg leading-snug group-hover:text-blue-600 transition-colors">
                    Lorem ipsum is simply dummy text of the printing and t...
                  </h3>
                  <div className="flex items-center gap-4 mt-4 text-[11px] text-slate-400 font-semibold">
                    <p>👤 Ujjal Zaman</p>
                    <p>📅 Mar 18, 2026</p>
                  </div>
                  <p className="text-slate-500 text-xs mt-4 leading-relaxed line-clamp-3">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever sin...
                  </p>
                  <button className="mt-6 text-blue-600 font-bold text-xs flex items-center gap-2">
                    Read more <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div> */}
          {/* try json */}
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm group cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="h-52 bg-slate-200 overflow-hidden">
                  <img
                    src={post.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg leading-snug group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-4 text-[11px] text-slate-400 font-semibold">
                    <p>👤 {post.author}</p>
                    <p>📅 {post.date}</p>
                  </div>
                  <p className="text-slate-500 text-xs mt-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="mt-6 text-blue-600 font-bold text-xs flex items-center gap-2">
                    Read more <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="px-10 py-3 border border-blue-600 text-blue-600 rounded-full font-bold text-sm hover:bg-blue-600 hover:text-white transition-all">
              View all posts
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
