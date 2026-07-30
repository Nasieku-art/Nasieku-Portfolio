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
    <main className="min-h-screen bg-[#0F1418] px-6 py-16">
     
    <div
      style={{ opacity, transition: "opacity 0.1s linear" }}
      id="hero"
    >
      <p className="text-teal-500">Hi, my name is</p>
      <h1 className="text-5xl font-bold">Mary Nasieku</h1>
      <p className="mt-4 max-w-2xl">
        I'm a passionate{" "}
        <span className="text-teal-500">Full-Stack Software Developer</span>{" "}
        who enjoys building modern, responsive, and scalable web
        applications. I specialize in{" "}
        <span className="text-teal-500">
          React, Next.js, Tailwind CSS, JavaScript,
        </span>{" "}
        and backend technologies, creating seamless, user-centered digital
        experiences from concept to deployment.
      </p>
    </div>
    </main>
  );
}