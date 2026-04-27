"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ChevronDown,
  Clock,
  Users,
  Star,
  ArrowRight,
  CheckCircle2,
  Globe,
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "First Aid & Emergency Response",
    shortDesc:
      "Master the essential skills to handle medical emergencies with confidence.",
    fullDesc:
      "This comprehensive course covers CPR, wound management, fracture stabilization, and rapid assessment. Designed for both healthcare professionals and laypeople, it provides hands-on knowledge to bridge the gap between an incident and professional medical arrival.",
    price: "৳2,500",
    duration: "4 Weeks",
    students: "1.2k+",
    rating: 4.9,
    formUrl: "https://forms.google.com/your-form-link-1",
  },
  {
    id: 2,
    title: "Clinical Patient Management",
    shortDesc:
      "Advanced strategies for healthcare providers to optimize patient care cycles.",
    fullDesc:
      "Learn the intricacies of digital health-tech integration, patient queue management, and clinical empathy. This course is ideal for clinic administrators and junior doctors looking to modernize their practice and improve satisfaction rates.",
    price: "৳4,800",
    duration: "6 Weeks",
    students: "850+",
    rating: 4.8,
    formUrl: "https://forms.google.com/your-form-link-2",
  },
  {
    id: 3,
    title: "Digital Health-Tech Fundamentals",
    shortDesc:
      "Explore the intersection of software quality assurance and medical technology.",
    fullDesc:
      "Dive into how clinical software is built and tested. We cover IoT device integration, data privacy (HIPAA compliance basics), and the role of QA in digital healthcare startups like CMED Health.",
    price: "৳3,200",
    duration: "5 Weeks",
    students: "500+",
    rating: 5.0,
    formUrl: "https://forms.google.com/your-form-link-3",
  },
];

export default function CoursePage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-slate-900 pt-32 pb-20 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-blue-500 font-black uppercase tracking-widest text-xs border border-blue-500/20 px-4 py-1.5 rounded-full bg-blue-500/5">
            Knowledge Hub
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mt-6 tracking-tight">
            Professional <span className="text-blue-500">Medical Courses</span>
          </h1>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            Enhance your clinical expertise and technical skills with our
            industry-certified learning programs.
          </p>
        </div>
      </section>

      {/* Course List Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              layout
              className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col h-fit"
            >
              {/* Card Top: Visual Header */}
              <div className="p-8 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 text-slate-100 group-hover:text-blue-500 transition-colors">
                  <BookOpen size={60} strokeWidth={1} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4 text-amber-500">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold">
                      {course.rating} Rating
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">
                    {course.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 space-y-6">
                {/* Stats Row */}
                <div className="flex justify-between items-center py-4 border-y border-slate-50">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock size={16} />
                    <span className="text-xs font-bold">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Users size={16} />
                    <span className="text-xs font-bold">{course.students}</span>
                  </div>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed">
                  {course.shortDesc}
                </p>

                {/* Expandable Description */}
                <AnimatePresence>
                  {expandedId === course.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-slate-50 mt-4">
                        <h4 className="text-xs font-black uppercase text-blue-600 tracking-wider mb-2">
                          Detailed Curriculum
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {course.fullDesc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Pricing & Actions */}
                <div className="pt-4 space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-bold text-slate-400 uppercase">
                      Course Fee
                    </span>
                    <span className="text-3xl font-black text-slate-900">
                      {course.price}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() =>
                        setExpandedId(
                          expandedId === course.id ? null : course.id,
                        )
                      }
                      className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-slate-100 text-slate-600 font-bold text-xs hover:bg-slate-50 transition-all"
                    >
                      {expandedId === course.id ? "Show Less" : "Learn More"}
                      <ChevronDown
                        className={`transition-transform duration-300 ${expandedId === course.id ? "rotate-180" : ""}`}
                        size={16}
                      />
                    </button>

                    <a
                      href={course.formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
                    >
                      Enroll Now <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-white border-y border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {[
            {
              icon: <CheckCircle2 className="text-blue-600" />,
              text: "Verified Certification",
            },
            {
              icon: <Globe className="text-blue-600" />,
              text: "Online & Offline Access",
            },
            {
              icon: <Users className="text-blue-600" />,
              text: "Expert Mentorship",
            },
            {
              icon: <BookOpen className="text-blue-600" />,
              text: "Lifetime Resources",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              {item.icon}
              <span className="font-bold text-slate-700 text-sm">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
