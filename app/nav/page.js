"use client";
import { useState } from "react";
import Image from "next/image";

const NAV_ITEMS = ["About Me", "Projects", "Experience", "Contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-6">
      <nav className="flex items-center justify-between font-serif py-4">
        <Image
          src="/Image/nasieku-logo.png"
          alt="Mary Nasieku"
          width={140}
          height={70}
          className="w-28 sm:w-36 h-auto"
        />

   
        <div className="hidden md:flex items-center gap-3 text-amber-50">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className="btn bg-teal-700 rounded-3xl px-5 py-2 hover:bg-teal-600 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-teal-500" />
          <span className="w-6 h-0.5 bg-teal-500" />
          <span className="w-6 h-0.5 bg-teal-500" />
        </button>
      </nav>

   
      {open && (
        <div className="md:hidden flex flex-col gap-2 pb-4 text-amber-50">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className="btn bg-teal-700 rounded-3xl px-5 py-2 hover:bg-teal-600 transition-colors w-full"
              onClick={() => setOpen(false)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}