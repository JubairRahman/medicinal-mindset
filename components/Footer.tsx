import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const socialLinks = [
    {
      icon: faFacebook,
      href: "https://www.facebook.com/medicinalmindsetbd/",
      color: "hover:bg-[#1877F2]",
    },
    {
      icon: faLinkedin,
      href: "#",
      color: "hover:bg-[#0A66C2]",
    },
    {
      icon: faWhatsapp,
      href: "https://wa.me/+8801959709029",
      color: "hover:bg-[#25D366]",
    },
  ];

  return (
    <footer className="bg-[#020617] text-slate-400 pt-16 pb-8 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 1. Brand & Intro */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-black text-white uppercase tracking-tight">
                MEDICINAL<span className="text-blue-500">MINDSET</span>
              </h2>
              <p className="text-[13px] text-blue-400 font-medium mt-1">
                Page · Medical & Health
              </p>
            </div>
            <p className="text-sm leading-relaxed">
              Medicinal Mindset - আপনার জরুরি চিকিৎসার নির্ভরযোগ্য ঠিকানা।
              আমাদের লক্ষ্য আপনার সুস্থতা।
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white transition-all duration-300 ${social.color}`}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Contact Details */}
          <div className="space-y-5">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              যোগাযোগ করুন
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-blue-500 mt-1 w-4"
                />
                <div className="text-sm">
                  <p className="text-slate-200">
                    House #04, Block- E, Main Road
                  </p>
                  <p>Banasree, Dhaka-1219, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-blue-500 w-4" />
                <div className="text-sm">
                  <p className="font-bold text-white">01324401750 (Hotline)</p>
                  <p className="text-xs">01956-225626</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Digital Channels */}
          <div className="space-y-5">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Digital Connect
            </h4>
            <div className="space-y-4 text-sm">
              <a
                href="mailto:info@medicinalmindsetbd.com"
                className="flex items-center gap-3 hover:text-blue-400 transition-colors"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-blue-500 w-4"
                />
                info@medicinalmindsetbd.com
              </a>
              <a
                href="https://medicinalmindsetbd.com"
                target="_blank"
                className="flex items-center gap-3 hover:text-blue-400 transition-colors"
              >
                <FontAwesomeIcon icon={faGlobe} className="text-blue-500 w-4" />
                medicinalmindsetbd.com
              </a>
              <a
                href="https://wa.me/+8801959709029"
                target="_blank"
                className="flex items-center gap-3 text-green-500 hover:text-green-400 transition-colors"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="w-4" />
                +880 1959-709029
              </a>
            </div>
          </div>

          {/* 4. Availability Status */}
          <div className="space-y-5">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Availability
            </h4>
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-blue-400 mt-1"
                />
                <p className="text-xs leading-relaxed text-slate-300">
                  সকাল ও সন্ধ্যার সময় পরামর্শের জন্য যোগাযোগ করুন।
                </p>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase text-green-500 tracking-tighter">
                  Always Open
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Standard Copyright & Legal Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 order-2 md:order-1">
            <p className="text-[11px] text-slate-700">
              © 2026 Medicinal Mindset BD. Specialized medical partner in
              Banasree.
            </p>
            <div className="flex gap-6 text-[11px] text-slate-700 font-medium">
              <Link href="#" className="hover:text-blue-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-blue-500 transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>

          {/* Right: Sophisticated Developer Branding (Node Active Cyan) */}
          <div className="flex items-center gap-3 order-1 md:order-2 self-center md:self-end">
            <div className="flex flex-col items-end">
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-600">
                Architected By
              </span>
              <span className="text-[11px] font-black text-cyan-900 tracking-tighter drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                JUBAIR RAHMAN
              </span>
            </div>

            {/* Always-on photo with sophisticated Cyan border */}
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-green-500/20 shadow-xl bg-slate-900">
              <Image
                src="/assets/img/jubu.png"
                alt="Jubair Rahman"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
