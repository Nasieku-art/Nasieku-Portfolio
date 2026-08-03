"use client";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-4">
      <nav className="flex items-center justify-between font-serif">
        <div>
          <Image
            src="/image/nasieku-logo.png"
            alt="Mary Nasieku"
            width={200}
            height={100}
          />
        </div>
        <div className="text-amber-50 flex items-center gap-3">
          <button className="btn bg-teal-700 rounded-3xl px-5 py-2 hover:bg-teal-600 transition-colors">
            About Me
          </button>

          <button className="btn bg-teal-700 rounded-3xl px-5 py-2 hover:bg-teal-600 transition-colors">
            Projects
          </button>

          <button className="btn bg-teal-700 rounded-3xl px-5 py-2 hover:bg-teal-600 transition-colors">
            Experience
          </button>

          <button className="btn bg-teal-700 rounded-3xl px-5 py-2 hover:bg-teal-600 transition-colors">
            Contact
          </button>

        </div>
      </nav>
    </div>
  );
}
