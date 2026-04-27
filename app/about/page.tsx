"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Users,
  Stethoscope,
  Award,
  HeartPulse,
  ShieldCheck,
  Activity,
  Sparkles,
} from "lucide-react";

// 1. Define an interface for the props
interface StatCounterProps {
  target: number;
  label: string;
  icon: React.ElementType; // or any if you prefer, but ElementType is better for Lucide icons
  suffix?: string;
}
// Count-up Component for the Stats
// 2. Apply the interface to the component
const StatCounter = ({
  target,
  label,
  icon: Icon,
  suffix = "+",
}: StatCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
      <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400 mb-4">
        <Icon size={28} />
      </div>
      <h3 className="text-3xl font-black text-white">
        {count}
        {suffix}
      </h3>
      <p className="text-blue-200/60 text-xs font-bold uppercase tracking-widest mt-2">
        {label}
      </p>
    </div>
  );
};

export default function AboutPage() {
  const values = [
    {
      title: "Excellence in Care",
      desc: "We maintain the highest standards of medical care, combining expertise with compassion.",
      icon: <ShieldCheck className="text-blue-400" size={32} />,
    },
    {
      title: "Patient First",
      desc: "Your health and comfort are our top priorities. We listen, understand, and act accordingly.",
      icon: <HeartPulse className="text-emerald-400" size={32} />,
    },
    {
      title: "Continuous Innovation",
      desc: "We stay at the forefront of medical advancements to provide you with the best treatments.",
      icon: <Sparkles className="text-amber-400" size={32} />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050A18] text-white selection:bg-blue-500/30">
      <Navbar />

      {/* SECTION 1: WHO WE ARE */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-sm">
              Our Identity
            </span>
            <h1 className="text-5xl md:text-7xl font-black mt-6 leading-[1.1] tracking-tight">
              Compassionate Care, <br />
              <span className="text-blue-600">Global Standards.</span>
            </h1>
            <p className="mt-8 text-slate-400 text-lg leading-relaxed max-w-xl">
              Since our inception, we have been dedicated to redefining the
              clinical experience. We blend state-of-the-art medical technology
              with a deeply human touch to ensure every patient feels seen,
              heard, and healed.
            </p>
            <div className="mt-10 flex gap-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all active:scale-95 shadow-lg shadow-blue-600/20">
                Meet Our Specialists
              </button>
            </div>
          </motion.div>

          {/* Right Side Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[3rem] rotate-3 blur-sm opacity-20"></div>
            <div className="relative rounded-[3.5rem] overflow-hidden border border-white/10 aspect-square md:aspect-video lg:aspect-square bg-slate-800">
              {/* Replace with your actual clinical image */}
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
                alt="Clinical Excellence"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-blue-600 p-6 rounded-3xl shadow-2xl hidden md:block">
              <Activity className="text-white animate-pulse" size={32} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ANIMATED STATS */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCounter target={1000} label="Happy Patients" icon={Users} />
            <StatCounter target={20} label="Specialists" icon={Stethoscope} />
            <StatCounter target={8} label="Years Experience" icon={Award} />
            <StatCounter
              target={98}
              label="Satisfaction"
              icon={HeartPulse}
              suffix="%"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR VALUES (GLASSMORPHISM) */}
      <section className="py-32 relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h2 className="text-4xl font-black">Our Core Values</h2>
          <p className="text-slate-500 mt-4">
            The principles that guide our clinical journey every day.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden hover:bg-white/[0.08] transition-all"
            >
              {/* Card Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[50px] rounded-full group-hover:bg-blue-500/20 transition-all"></div>

              <div className="relative z-10">
                <div className="mb-6 inline-block p-4 rounded-2xl bg-slate-900 border border-white/5 shadow-inner">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
