"use client";
import Link from "next/link";
import Nav from "./nav/page";
import Hero from "./Hero/page";
import About from "./about/page";
import Projects from "./projects/page";
import Experience from "./experience/page";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>
    </div>
  );
}
