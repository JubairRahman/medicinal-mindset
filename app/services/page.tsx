"use client";

import React, { useState } from "react";
// 1. These were imported but unused in the JSX
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  Activity,
  FlaskConical,
  Stethoscope,
  ArrowRight,
  Search,
  User,
} from "lucide-react";
import Link from "next/link";

const categories = ["All", "Critical Care", "Diagnostics", "Specialized"];

const services = [
  {
    id: 1,
    category: "Critical Care",
    name: "ICU & Life Support",
    icon: <Activity />,
    shortDesc: "24/7 advanced life support and monitoring.",
    features: ["Ventilatory Support", "Vital Monitoring"],
  },
  {
    id: 2,
    category: "Diagnostics",
    name: "Pathology Lab",
    icon: <FlaskConical />,
    shortDesc: "Automated testing with 99.9% precision.",
    features: ["Molecular Testing", "Digital Access"],
  },
  {
    id: 3,
    category: "Specialized",
    name: "Consultation",
    icon: <Stethoscope />,
    shortDesc: "Private sessions with leading specialists.",
    features: ["Prioritized Scheduling", "Expert Panels"],
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = services.filter((s) => {
    const matchesTab = activeTab === "All" || s.category === activeTab;
    const matchesSearch = s.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30">
      {/* 2. RENDER NAVBAR HERE */}
      <Navbar />

      <section className="pt-24 md:pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Cinematic Glows - Adjusted position to follow the content up */}
        <div className="absolute top-[-10%] left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Clinical Status Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-blue-400">
              World-Class Clinical Standards{" "}
            </span>
          </motion.div>

          {/* Primary Heading - Reduced top spacing */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] md:leading-tight"
          >
            Medical <span className="text-blue-500">Expertise</span>
            <br />
            <span className="text-white/90 underline decoration-blue-600/30 underline-offset-8 italic font-serif">
              Redefined.
            </span>
          </motion.h1>

          <p className="mt-6 text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Comprehensive specialized care utilizing precision diagnostics and
            multidisciplinary clinical interventions.
          </p>

          {/* Quick-Scan Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
            {[
              { label: "Precision Rate", val: "99.9%" },
              { label: "Emergency Response", val: "24/7" },
              { label: "Board Specialists", val: "15+" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center border-l border-white/5 pl-8 first:border-none first:pl-0"
              >
                <p className="text-xl font-black text-white">{stat.val}</p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-blue-500 font-bold mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* --- COMPACT SEARCH & FILTER BAR --- */}
          <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-4 bg-white/[0.02] p-2 rounded-[3rem] border border-white/10 backdrop-blur-xl shadow-2xl max-w-5xl mx-auto">
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar p-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-7 py-3 rounded-full text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                    activeTab === cat
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                      : "text-slate-500 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80 group pr-2">
              <Search
                className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors"
                size={16}
              />
              <input
                type="text"
                placeholder="Scan Specialized Units..."
                className="w-full bg-slate-900/40 border border-white/5 rounded-full py-4 pl-14 pr-6 text-xs outline-none focus:border-blue-600/50 transition-all font-bold tracking-wide"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={service.id}
                className="group relative bg-white/[0.03] border border-white/5 hover:border-blue-500/30 p-8 rounded-[2.5rem] transition-all duration-500 hover:bg-white/[0.06] flex flex-col justify-between overflow-hidden"
              >
                <span className="absolute -right-4 -bottom-4 text-8xl font-black text-white/[0.02] group-hover:text-blue-500/[0.05] transition-colors select-none">
                  0{service.id}
                </span>

                <div>
                  <div className="w-14 h-14 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-3">
                    {service.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((f, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-black uppercase tracking-widest bg-white/5 px-3 py-1 rounded-md text-slate-400"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-blue-500 text-xs font-black uppercase tracking-widest group/btn pt-4">
                    Learn More
                    <ArrowRight
                      size={14}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 font-bold uppercase tracking-widest">
              No services matching your search.
            </p>
          </div>
        )}
      </section>

      {/* 3. RENDER FOOTER HERE */}
      <Footer />
    </div>
  );
}
