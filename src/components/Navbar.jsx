import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  // Navbar shadow when scrolling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Smooth scroll on link click
  const handleLinkClick = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-slate-950/95 shadow-md backdrop-blur-md border-b border-gray-800"
          : "bg-transparent backdrop-blur-sm border-b border-gray-800"
      }`}
    >
      {/* ==== Navbar container ==== */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* ---- Logo ---- */}
        <a
          href="#home"
          className="text-teal-400 text-2xl font-extrabold tracking-wide hover:text-teal-300 transition-colors"
        >
          <span className="text-white">Fullstack</span>{" "}
          <span className="text-teal-400">Developer</span>
        </a>

        {/* ---- Desktop Nav Links ---- */}
        <nav className="hidden md:flex gap-8">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="relative text-gray-200 text-lg font-medium group transition-all duration-300 ease-in-out"
            >
              {link.label}
              <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-teal-400 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </nav>

        {/* ---- Mobile Toggle ---- */}
        <button
          className="md:hidden text-teal-400 text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
{/* ==== Mobile Slide-In Menu (Perfect Vertical Alignment) ==== */}
{/* ==== Mobile Slide-In Menu (Left-Aligned Vertical List) ==== */}
<div
  ref={menuRef}
  className={`fixed top-[64px] right-0 h-[calc(100vh-64px)] w-3/4 sm:w-2/3 max-w-sm 
  bg-slate-950 shadow-lg backdrop-blur-md 
  transform transition-transform duration-500 ease-in-out md:hidden ${
    open ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div className="flex flex-col justify-start h-full pt-10 pb-10 px-8 text-left overflow-y-auto">
    <ul className="flex flex-col gap-6">
      {links.map((link, i) => (
        <li key={i}>
          <button
            onClick={() => handleLinkClick(link.href)}
            className="text-gray-200 text-lg font-medium hover:text-teal-400 transition-all duration-300 ease-in-out tracking-wide"
          >
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  </div>
</div>

{/* ==== Dim Overlay (Click Outside to Close) ==== */}
{open && (
  <div
    className="fixed inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity duration-500 md:hidden"
    onClick={() => setOpen(false)}
  ></div>
)}



    </header>
  );
}
