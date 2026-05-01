"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-xl font-bold tracking-tight cursor-pointer">
            <span className="text-gray-900">&lt;</span>
            <span className="text-blue-300">sherry</span>
            <span className="text-gray-900"> /&gt;</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">

          <Link
            href="/"
            className="px-4 py-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-200 font-medium"
          >
            Home
          </Link>

          <Link
            href="/posts"
            className="px-4 py-2 rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-200 font-medium"
          >
            Posts
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-white border-t border-gray-200">

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            href="/posts"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            Posts
          </Link>

        </div>
      )}
    </nav>
  );
}