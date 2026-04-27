"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import {
  Lock,
  User,
  Key,
  ArrowRight,
  ShieldAlert,
  Activity,
  ArrowLeft, // Import ArrowLeft for the back button
} from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const credentials: any = {
    Admin: "Admin@00123",
    Doctor: "Doctor@00456",
    dev_doc: "dev#123456",
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials[username] === password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", username);
      router.push("/dashboard");
    } else {
      setError("Verify credentials and try again.");
    }
  };

  const clinicalImages = [
    {
      src: "https://images.unsplash.com/photo-1641757625075-d018760a4fb5?q=80&w=880",
      alt: "Lab Analysis",
    },
    {
      src: "https://images.unsplash.com/photo-1674702685239-b4ab4f44f944?q=80&w=3000",
      alt: "Advanced Laboratory Diagnostics",
    },
    {
      src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1472",
      alt: "Medical Research",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans overflow-hidden">
      {/* LEFT SIDE: THE CINEMATIC VIBE (Floating Mosaic) */}
      <div className="hidden lg:flex w-7/12 bg-[#020617] p-16 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow delay-700"></div>

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.3em] leading-none">
              Medicinal<span className="text-white">Mindset</span>
            </h2>
            <h1 className="text-5xl font-extrabold text-white mt-12 tracking-tighter leading-tight max-w-sm">
              Access Secure Clinical Records
            </h1>
          </div>

          <div className="relative p-1">
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30 group animate-float">
                <Image
                  src={clinicalImages[1].src}
                  alt={clinicalImages[1].alt}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-6">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30 group animate-float-delayed">
                  <Image
                    src={clinicalImages[0].src}
                    alt={clinicalImages[0].alt}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30 group animate-float">
                  <Image
                    src={clinicalImages[2].src}
                    alt={clinicalImages[2].alt}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-600/20 rounded-3xl blur-[120px] opacity-60"></div>
            </div>
          </div>
          <p className="text-center text-slate-700 text-[10px] uppercase tracking-widest font-bold">
            MedicinalMindset Security Layer v2.0
          </p>
        </div>
      </div>
      {/* RIGHT SIDE: THE ANIMATED FORM INTERFACE */}
      <div className="w-full lg:w-5/12 flex flex-col bg-white relative">
        {/* --- BACK BUTTON COMPONENT --- */}
        <div className="p-8 pb-0 z-20">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 font-bold text-xs uppercase tracking-widest transition-all"
          >
            <div className="p-2 rounded-xl bg-slate-50 group-hover:bg-blue-50 transition-colors">
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
            </div>
            Back to Home
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center p-6 md:p-12 relative">
          <Activity
            className="absolute top-10 right-10 text-slate-50 opacity-[0.03] animate-pulse"
            size={400}
          />

          <div className="w-full max-w-md z-10">
            <div className="relative group p-[2px] rounded-[2.5rem] bg-gradient-to-b from-slate-200 to-transparent hover:from-blue-500 transition-all duration-500 shadow-2xl shadow-blue-500/5">
              <div className="bg-white rounded-[2.4rem] p-10 lg:p-12 relative overflow-hidden">
                <div className="text-center mb-10">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 animate-pulse"></div>
                    <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center relative z-10 shadow-xl group-hover:rotate-[360deg] transition-transform duration-1000">
                      <Lock className="text-blue-500" size={32} />
                    </div>
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 mt-6 tracking-tighter">
                    Clinic Portal
                  </h2>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
                    Access Clinical Dashboard
                  </p>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="relative group/input">
                    <User
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-blue-500 transition-colors"
                      size={18}
                    />
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-5 pl-14 pr-6 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all duration-300 font-semibold"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="relative group/input">
                    <Key
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-blue-500 transition-colors"
                      size={18}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-5 pl-14 pr-6 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all duration-300 font-semibold"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-3 bg-red-50 border border-red-100 p-4 rounded-2xl animate-shake">
                      <ShieldAlert className="text-red-500" size={18} />
                      <p className="text-red-700 text-xs font-bold uppercase tracking-tight">
                        {error}
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full relative group/btn overflow-hidden rounded-2xl bg-slate-900 py-5 text-white font-black text-lg transition-all active:scale-95 shadow-xl shadow-slate-900/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center justify-center gap-3">
                      Verify & Login
                      <ArrowRight
                        size={22}
                        className="group-hover/btn:translate-x-2 transition-transform duration-300"
                      />
                    </div>
                  </button>
                </form>

                <div className="mt-10 pt-8 border-t border-slate-100 flex justify-between items-center text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>Encrypted Access for Clinic</span>
                  <span className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    Node Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* developer sign */}
        {/* --- DEVELOPER SIGNATURE --- */}
        <div className="p-8 pt-0 flex justify-end items-center gap-3 z-20">
          <div className="flex flex-col items-end">
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-slate-400">
              Architected By
            </span>
            <span className="text-[10px] font-black text-blue-600 tracking-tighter drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">
              JUBAIR RAHMAN
            </span>
          </div>
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-100 shadow-sm bg-slate-50">
            <Image
              src="/assets/img/jubu.png"
              alt="Jubair Rahman"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>{" "}
      {/* End of Right Side Column */}
      {/* End of Main Container */}
    </div>
  );
}
