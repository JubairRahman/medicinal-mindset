import Link from "next/link";

export default function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Course", href: "/course" },
    { name: "Services", href: "/services" },
    { name: "Appointment", href: "/appointment" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl group-hover:bg-blue-700 transition-colors">
            +
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-800">
            MEDICINAL.<span className="text-blue-600">MINDSET</span>
          </span>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE: Login & Dashboard */}
        <div className="flex items-center gap-4">
          {/* <Link
            href="/dashboard"
            className="hidden sm:block text-sm font-semibold text-slate-600 hover:text-blue-600 px-4"
          >
            Dashboard
          </Link> */}

          <Link
            href="/login"
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition-all shadow-md shadow-blue-100 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
