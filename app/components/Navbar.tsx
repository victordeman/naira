"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Vision", href: "#vision" },
    { name: "Pillars", href: "#pillars" },
    { name: "Architecture", href: "#architecture" },
    { name: "Revenue", href: "#revenue" },
    { name: "Content Model", href: "#content" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#hero" className="font-display text-2xl font-bold text-white">
          NAIRA
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#partner"
            className="text-indigo-400 hover:text-white transition font-medium border border-indigo-500/30 px-4 py-1.5 rounded-full hover:bg-indigo-500/10"
          >
            Partner
          </Link>
          <Link
            href="/login"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-1.5 rounded-full font-medium transition shadow-lg shadow-indigo-500/20"
          >
            Login
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 border-b border-white/10">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white transition py-2"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#partner"
              onClick={() => setIsOpen(false)}
              className="text-indigo-400 hover:text-white transition py-2 font-medium"
            >
              Partner
            </Link>
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-white bg-indigo-600 px-4 py-2 rounded-lg transition text-center font-medium mt-2"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
