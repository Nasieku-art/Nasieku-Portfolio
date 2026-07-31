"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeDistance = 400; 
      const newOpacity = Math.max(1 - scrollY / fadeDistance, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen px-6 flex items-center justify-center">
      <div
        style={{ opacity, transition: "opacity 0.1s linear" }}
        id="hero"
        className="max-w-2xl text-center"
      >
        <p className="  text-teal-500">
          Hi, my name is
        </p>

        <h1 className="mt-4 text-5xl sm:text-7xl font-bold tracking-tight text-white leading-[1.05]">
          Mary Nasieku
        </h1>

        <p className="mt-3  sm:text-2xl font-medium text-[#9aa1b5]">
          Full-Stack Software Developer
        </p>

        <p className="mt-6 mx-auto max-w-xl sm:text-base leading-relaxed">
          I'm a passionate{" "}
          <span className="text-[#12d6c0]">Full-Stack Software Developer</span>{" "}
          who enjoys building modern, responsive, and scalable web
          applications. I specialize in{" "}
          <span className="text-[#12d6c0]">
            React, Next.js, Tailwind CSS, JavaScript,
          </span>{" "}
          and backend technologies, creating seamless, user-centered digital
          experiences from concept to deployment.
        </p>
      </div>
    </main>
  );
}