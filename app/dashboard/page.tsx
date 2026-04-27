"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import {
  Printer,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  FilterX,
} from "lucide-react";

export default function DashboardPage() {
  // 1. States
  const [appointments, setAppointments] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // 2. Fetch Data
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbzwEDYeno-0ybQeTQrRDG4HC_HVg03G49GkPN9eYeh_LzCi56K2QYQ0fOpsp8UeDaBz/exec",
        );
        const data = await res.json();
        const sorted = data.sort(
          (a: any, b: any) =>
            new Date(b["Booking Timestamp"]).getTime() -
            new Date(a["Booking Timestamp"]).getTime(),
        );
        setAppointments(sorted);
        setFilteredData(sorted);
      } catch (err) {
        console.error("Fetch Error:", err);
      }
    };
    fetchBookings();
  }, []);

  // 3. Filter Logic (Unifies Date Range & Initial Load)
  useEffect(() => {
    let result = [...appointments];

    const normalize = (dateStr: string) => {
      const d = new Date(dateStr);
      d.setHours(0, 0, 0, 0);
      return d.getTime();
    };

    if (fromDate || toDate) {
      result = result.filter((app) => {
        const appDateRaw = app["Date"];
        if (!appDateRaw) return false;
        try {
          const appTimestamp = normalize(appDateRaw);
          if (fromDate && toDate)
            return (
              appTimestamp >= normalize(fromDate) &&
              appTimestamp <= normalize(toDate)
            );
          if (fromDate) return appTimestamp >= normalize(fromDate);
          if (toDate) return appTimestamp <= normalize(toDate);
          return true;
        } catch {
          return true;
        }
      });
    }

    setFilteredData(result);
    setCurrentPage(1); // Reset to first page on filter change
  }, [fromDate, toDate, appointments]);

  // 4. Pagination Constants
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // 5. Helpers
  const handlePrint = (app: any) => {
    const win = window.open("", "_blank");
    win?.document.write(`
      <html>
        <head><title>Token - ${app["Patient Name"]}</title></head>
        <body style="font-family: sans-serif; text-align: center; padding: 20px;">
          <div style="border: 2px dashed #000; padding: 20px; display: inline-block;">
            <h2 style="margin:0;">MEDICINAL MINDSET</h2>
            <p style="font-size: 12px; color: #666;">Patient Token</p>
            <hr/>
            <div style="text-align: left; font-size: 14px;">
              <p><strong>Patient:</strong> ${app["Patient Name"]}</p>
              <p><strong>Doctor:</strong> ${app["Doctor"]}</p>
              <p><strong>Slot:</strong> ${app["Date"]} at ${app["Time"]}</p>
              <p><strong>Fee:</strong> ৳${app["Fee"]} (${app["Payment Method"]})</p>
            </div>
            <p style="font-size: 10px; margin-top: 20px;">Generated: ${new Date().toLocaleString()}</p>
          </div>
          <script>window.onload = function() { window.print(); window.close(); }</script>
        </body>
      </html>
    `);
    win?.document.close();
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (timeStr: string) => {
    if (!timeStr) return "N/A";
    const date = new Date(timeStr);
    return isNaN(date.getTime())
      ? timeStr
      : date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header & Filter Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-8 gap-6">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              Clinic Ledger
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Manage patient bookings and generate tokens.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 bg-white p-3 rounded-[1.5rem] shadow-sm border border-slate-100">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase ml-2 mb-1">
                From
              </span>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="text-xs font-semibold p-2 bg-slate-50 rounded-lg outline-none border border-transparent focus:border-blue-500/20"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase ml-2 mb-1">
                To
              </span>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="text-xs font-semibold p-2 bg-slate-50 rounded-lg outline-none border border-transparent focus:border-blue-500/20"
              />
            </div>
            <button
              onClick={() => {
                setFromDate("");
                setToDate("");
              }}
              className="mt-5 p-2 text-slate-400 hover:text-red-500 transition-colors"
            >
              <FilterX size={20} />
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-[2rem] shadow-xl shadow-blue-900/5 border border-slate-100 overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-900 text-white text-[10px] uppercase tracking-[0.2em]">
                <th className="p-6">Patient Details</th>
                <th className="p-6">Doctor</th>
                <th className="p-6">Time Slot</th>
                <th className="p-6">Fee Status</th>
                <th className="p-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {currentItems.length > 0 ? (
                currentItems.map((app: any, i) => (
                  <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                    <td className="p-6">
                      <p className="font-bold text-slate-800">
                        {app["Patient Name"] || "N/A"}
                      </p>
                      <p className="text-xs text-slate-500">
                        {app["Phone Number"] || "N/A"}
                      </p>
                    </td>
                    <td className="p-6">
                      <p className="text-sm font-semibold text-slate-700">
                        {app["Doctor"]}
                      </p>
                      <p className="text-[10px] text-blue-500 font-bold uppercase">
                        {app["Specialization"]}
                      </p>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2 text-slate-700">
                        <Calendar size={14} className="text-slate-400" />
                        <span className="text-sm font-medium">
                          {formatDate(app["Date"])}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 mt-1">
                        <Clock size={14} className="text-slate-400" />
                        <span className="text-xs">
                          {formatTime(app["Time"])}
                        </span>
                      </div>
                    </td>
                    <td className="p-6">
                      <p className="text-sm font-black text-slate-900">
                        ৳{app["Fee"] || "0"}
                      </p>
                      <span className="text-[10px] px-2 py-0.5 bg-slate-100 rounded text-slate-500 font-bold">
                        {app["Payment Method"]}
                      </span>
                    </td>
                    <td className="p-6 text-right">
                      <button
                        onClick={() => handlePrint(app)}
                        className="p-3 bg-slate-900 text-white rounded-xl hover:bg-blue-600 transition-all shadow-md active:scale-95"
                      >
                        <Printer size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-20 text-center text-slate-400">
                    No appointments found for this range.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination UI */}
          {filteredData.length > itemsPerPage && (
            <div className="p-6 border-t border-slate-50 flex items-center justify-between bg-slate-50/50">
              <p className="text-xs text-slate-500 font-medium">
                Showing{" "}
                <span className="text-slate-900 font-bold">
                  {indexOfFirstItem + 1}
                </span>{" "}
                to{" "}
                <span className="text-slate-900 font-bold">
                  {Math.min(indexOfLastItem, filteredData.length)}
                </span>{" "}
                of{" "}
                <span className="text-slate-900 font-bold">
                  {filteredData.length}
                </span>{" "}
                results
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-bold uppercase tracking-widest disabled:opacity-50 hover:bg-white transition-all"
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                      currentPage === i + 1
                        ? "bg-slate-900 text-white shadow-lg"
                        : "hover:bg-white text-slate-400"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-bold uppercase tracking-widest disabled:opacity-50 hover:bg-white transition-all"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
