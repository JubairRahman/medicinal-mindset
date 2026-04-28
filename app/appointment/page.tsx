"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
  User,
  Calendar as CalIcon,
  Clock,
  CreditCard,
  ChevronRight,
  Stethoscope,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Wallet,
  AlertCircle,
} from "lucide-react";

export default function AppointmentPage() {
  const doctors = [
    {
      name: "Dr. Rahman",
      specialization: "Internal Medicine",
      degree: "MBBS, FCPS",
      fee: 700,
    },
    {
      name: "Dr. Anika",
      specialization: "Gynecology & Obstetrics",
      degree: "MBBS, MCPS",
      fee: 900,
    },
    {
      name: "Dr. Hasan",
      specialization: "Cardiology",
      degree: "MBBS, MD",
      fee: 1200,
    },
    {
      name: "Dr. Sumi",
      specialization: "General Dentistry",
      degree: "BDS",
      fee: 600,
    },
  ];

  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    visitType: "",
    reason: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for submission status
  const [payment, setPayment] = useState("");
  const [trxId, setTrxId] = useState("");
  // submitform function
  const submitForm = async () => {
    if (
      !selectedDoctor ||
      !date ||
      !time ||
      !form.name ||
      !form.phone ||
      !payment
    ) {
      alert("Please complete all required fields (*)");
      return;
    }

    // Start the loader
    setIsSubmitting(true);

    const bookingData = {
      "Patient Name": form.name,
      "Phone Number": form.phone,
      Email: form.email,
      Address: form.address,
      Doctor: selectedDoctor.name,
      Specialization: selectedDoctor.specialization,
      Date: date,
      Time: time,
      "Visit Type": form.visitType,
      Fee: selectedDoctor.fee,
      "Payment Method": payment,
      "Transaction ID": trxId,
      Status: "Confirmed",
      "Booking Timestamp": new Date().toLocaleString(),
    }; // new lines for loader

    try {
      // POSTING TO APPS SCRIPT
      await fetch(
        "https://script.google.com/macros/s/AKfycbyyLq3WndmxiLk_iDRcAAq7-CUvGvmd_wRXQA-Npol0v2h_KUJucj8Qi14YXHQYZo1I/exec",
        {
          method: "POST",
          body: JSON.stringify(bookingData),
        },
      );

      alert("Appointment Registered Successfully!");

      // Redirect to Home instead of Dashboard or About
      window.location.href = "/";
    } catch (error) {
      console.error("Booking Error:", error);
      alert("Something went wrong. Please try again.");

      // Turn off loader so the user can try clicking again
      setIsSubmitting(false);
    }
  };
  // submit form end

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* REFINED HERO */}
      <section className="relative bg-slate-900 py-24 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <span className="bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/20">
            Clinical Excellence
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mt-6 tracking-tight">
            Schedule Your Visit
          </h1>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-lg">
            Complete your booking in less than 2 minutes with our verified
            specialist network.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-12 mb-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* MAIN FORM AREA */}
          <div className="lg:w-2/3 space-y-6">
            {/* 1. DOCTOR SELECTION */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                  <Stethoscope size={24} />
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  Select Specialist
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {doctors.map((doc) => (
                  <button
                    key={doc.name}
                    onClick={() => setSelectedDoctor(doc)}
                    className={`text-left p-5 rounded-2xl border-2 transition-all group ${
                      selectedDoctor?.name === doc.name
                        ? "border-blue-600 bg-blue-50/50 shadow-md shadow-blue-900/5"
                        : "border-slate-50 bg-slate-50/50 hover:border-blue-200"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-slate-800 leading-none">
                          {doc.name}
                        </h3>
                        <p className="text-xs font-bold text-blue-600 uppercase mt-2 tracking-wide">
                          {doc.specialization}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1 uppercase font-medium">
                          {doc.degree}
                        </p>
                      </div>
                      {selectedDoctor?.name === doc.name && (
                        <ShieldCheck className="text-blue-600" size={20} />
                      )}
                    </div>
                    <div className="mt-4 pt-4 border-t border-blue-100/50 flex justify-between items-center">
                      <span className="text-xs text-slate-400 font-medium">
                        Consultation Fee
                      </span>
                      <span className="font-bold text-slate-900">
                        ৳{doc.fee}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. DATE & TIME */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
                  <CalIcon size={24} />
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  Date & Schedule
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-slate-50 border-none p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-700"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">
                    Time Slot
                  </label>
                  <select
                    className="w-full bg-slate-50 border-none p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-700"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  >
                    <option value="">Select a time</option>
                    <option>09:00 AM</option>
                    <option>10:30 AM</option>
                    <option>01:30 PM</option>
                    <option>04:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 3. PATIENT INFORMATION */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                  <User size={24} />
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  Patient Details
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {[
                  {
                    label: "Full Name *",
                    icon: <User size={18} />,
                    key: "name",
                    type: "text",
                  },
                  {
                    label: "Phone Number *",
                    icon: <Phone size={18} />,
                    key: "phone",
                    type: "text",
                  },
                  {
                    label: "Email Address",
                    icon: <Mail size={18} />,
                    key: "email",
                    type: "email",
                  },
                  {
                    label: "Current Address",
                    icon: <MapPin size={18} />,
                    key: "address",
                    type: "text",
                  },
                ].map((input) => (
                  <div key={input.key} className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                      {input.icon}
                    </div>
                    <input
                      type={input.type}
                      placeholder={input.label}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-green-50/50 border border-slate-100 outline-none focus:ring-2 focus:ring-blue-500/10 focus:bg-white transition-all text-slate-500"
                      onChange={(e) =>
                        setForm({ ...form, [input.key]: e.target.value })
                      }
                    />
                  </div>
                ))}

                <select
                  className="w-full p-4 rounded-2xl bg-slate-50/50 border border-slate-100 outline-none text-sm md:col-span-2 text-slate-700 focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all"
                  onChange={(e) =>
                    setForm({ ...form, visitType: e.target.value })
                  }
                >
                  <option value="">Visit Category</option>
                  <option>New Consultation</option>
                  <option>Routine Follow-up</option>
                  <option>Emergency Care</option>
                </select>

                <textarea
                  placeholder="Reason for visit & medical history notes..."
                  rows={4}
                  className="w-full p-4 rounded-2xl bg-slate-50/50 border border-slate-100 outline-none text-slate-400 md:col-span-2 focus:bg-white transition-all"
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                ></textarea>
              </div>
            </div>

            {/* 4. PAYMENT */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
                  <Wallet size={24} />
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  Billing Information
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {["bKash", "Nagad", "Cash"].map((method) => (
                  <button
                    key={method}
                    onClick={() => setPayment(method)}
                    className={`py-4 rounded-2xl border-2 font-bold text-xs uppercase tracking-widest transition-all ${
                      payment === method
                        ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200"
                        : "bg-white text-slate-400 border-slate-50 hover:border-slate-200"
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>

              {payment !== "Cash" && payment !== "" && (
                <div className="mt-6 animate-in fade-in slide-in-from-top-2">
                  <div className="p-4 bg-amber-50 border border-amber-100 rounded-2xl flex items-start gap-3 mb-4">
                    <AlertCircle className="text-amber-600 mt-0.5" size={18} />
                    <p className="text-xs text-amber-700 leading-relaxed font-medium">
                      Please send the fee to our official merchant number and
                      provide the Transaction ID below to verify your slot
                      instantly.
                    </p>
                  </div>
                  <input
                    placeholder="Enter Transaction ID (8-10 Characters)"
                    className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/10 text-slate-400"
                    value={trxId}
                    onChange={(e) => setTrxId(e.target.value)}
                  />
                </div>
              )}
            </div>

            {/* CONFIRM BUTTON */}
            <button
              onClick={submitForm}
              disabled={isSubmitting}
              className={`w-full py-5 rounded-[1.5rem] font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-3 ${
                isSubmitting
                  ? "bg-slate-600 cursor-not-allowed opacity-80"
                  : "bg-slate-900 hover:bg-black text-white active:scale-[0.98] shadow-slate-200"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Registering Slot...</span>
                </>
              ) : (
                <>
                  Complete Booking <ChevronRight size={20} />
                </>
              )}
            </button>
          </div>

          {/* RIGHT SIDEBAR: SUMMARY */}
          {/* RIGHT SIDEBAR: SUMMARY */}
          <div className="lg:w-1/3">
            <div className="sticky top-10 bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-blue-900/20 overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[60px] rounded-full"></div>

              <h2 className="text-xl font-bold mb-8 relative z-10 flex items-center gap-2">
                <ShieldCheck className="text-blue-400" size={20} />
                Booking Invoice
              </h2>

              <div className="space-y-6 relative z-10">
                {/* Specialist Info */}
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-xl uppercase shadow-lg shadow-blue-600/20">
                    {selectedDoctor?.name[4] || "?"}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-blue-400 tracking-widest">
                      Specialist
                    </p>
                    <p className="font-bold text-sm truncate">
                      {selectedDoctor?.name || "Pending Selection"}
                    </p>
                  </div>
                </div>

                {/* NEW: Patient Information Section */}
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-3">
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest border-b border-white/5 pb-2">
                    Patient Details
                  </p>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-slate-400 font-medium">
                        Name
                      </span>
                      <span className="text-xs font-bold truncate max-w-[150px]">
                        {form.name || "—"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-slate-400 font-medium">
                        Contact
                      </span>
                      <span className="text-xs font-bold">
                        {form.phone || "—"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-slate-400 font-medium">
                        Category
                      </span>
                      <span className="text-xs font-bold text-blue-400">
                        {form.visitType || "Not Selected"}
                      </span>
                    </div>

                    {/* Notes (Conditional rendering if text exists) */}
                    {form.notes && (
                      <div className="pt-2 border-t border-white/5">
                        <p className="text-[10px] text-slate-500 mb-1">Notes</p>
                        <p className="text-[10px] italic text-slate-300 leading-relaxed line-clamp-2">
                          "{form.notes}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Schedule Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
                      Schedule
                    </p>
                    <p className="font-bold text-xs mt-1 text-blue-100">
                      {date || "Not set"}
                    </p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
                      Slot
                    </p>
                    <p className="font-bold text-xs mt-1 text-blue-100">
                      {time || "Not set"}
                    </p>
                  </div>
                </div>

                {/* Financials */}
                <div className="space-y-3 pt-6 border-t border-white/10">
                  <div className="flex justify-between text-xs font-medium text-slate-400">
                    <span>Consultation Fee</span>
                    <span className="text-white font-bold">
                      ৳{selectedDoctor?.fee || 0}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs font-medium text-slate-400">
                    <span>Booking & Service</span>
                    <span className="text-white font-bold">৳0</span>
                  </div>

                  <div className="pt-6 flex justify-between items-end">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-blue-400 tracking-widest">
                        Total Payable
                      </p>
                      <p className="text-4xl font-black mt-1 tracking-tighter">
                        ৳
                        {(
                          selectedDoctor?.fee +
                          0 +
                          selectedDoctor?.fee * 0.0
                        ).toFixed(0) || 0}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 flex items-center gap-3 text-slate-600">
                  <div className="p-1 bg-slate-800 rounded-md">
                    <ShieldCheck size={14} className="text-blue-500" />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider">
                    Verified patient registration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
