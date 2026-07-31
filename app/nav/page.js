"use client";
import Image from "next/image";

export default function Nav() {
  return (
   <div className=" container mx-auto ">
      <nav className="flex items-center justify-between font-serif">
        <div>
          <Image
            src="/image/Nasieku Logo.png"
            alt="Mary Nasieku"
            width={200}
            height={100}
          />
        </div>
        <div className="text-amber-50 flex item-center gap-5 -py-6">
          <button className="btn bg-teal-700 rounded-3xl">About</button>

          <button className="btn bg-teal-700 rounded-3xl">Projects</button>

          <button className="btn bg-teal-700 rounded-3xl">Experience</button>

          <button className="btn bg-teal-700 rounded-3xl">Contact</button>

          <button className="btn bg-teal-700 rounded-3xl">Resume</button>
        </div>
      </nav>
      </div>
   
  );
}

