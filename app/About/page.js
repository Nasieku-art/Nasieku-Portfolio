"use client";

import Image from "next/image";
import Techstack from "../techstack/pages";

export default function About() {
  

  return (
    <main className="min-h-screen  px-6 py-16">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="py-3 flex-1">
          <h1 className="font-bold text-3xl">About Me</h1>

          <div className="py-3 space-y-4">
            <p>
              I'm a passionate{" "}
              <span className="text-teal-500">
                Full-Stack Software Developer
              </span>{" "}
              who enjoys transforming ideas into modern, scalable, and
              high-performing web applications. I specialize in building
              seamless digital experiences using technologies such as{" "}
              <span className="text-teal-500">
                React, Next.js, Tailwind CSS, JavaScript, Node.js,
              </span>{" "}
              and databases, combining intuitive user interfaces with robust
              backend systems.
            </p>

            <p>
              My journey in technology extends beyond software development. I
              have experience in IT support, digital skills training, and
              community mentorship, where I've helped learners develop practical
              technical skills. These experiences have strengthened my
              communication, leadership, and problem-solving abilities while
              reinforcing my belief that technology should empower people and
              create opportunities.
            </p>

            <p>
              I'm constantly exploring emerging technologies, particularly
              artificial intelligence, cloud technologies, and modern web
              development, to build innovative solutions that address real-world
              challenges. Every project I undertake is an opportunity to learn,
              innovate, and deliver secure, scalable, and meaningful digital
              experiences.
            </p>
          </div>

          <div className="py-3">
            <Techstack />
          </div>
        </div>

        <div className="flex-1 flex justify-center md:py-25 rounded-xl">
          <Image
            src="/image/Portfolio.jpeg"
            alt="Mary Nasieku"
            width={280}
            height={350}
            loading="lazy"
            className="rounded-l-lg object-cover w-60 md:box-decoration-slice"
          />
        </div>
      </div>
    </main>
  );
}
