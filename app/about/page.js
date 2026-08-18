"use client";

import Image from "next/image";

const technologies = [
  { id: 1, name: "Javascript(ES6+)" },
  { id: 2, name: "React" },
  { id: 3, name: "Tailwind CSS" },
  { id: 4, name: "Nextjs" },
  { id: 5, name: "Nodejs" },
];

export default function About() {
  return (
    <main id="about" className="px-6 py-16 font-serif scroll-mt-24">
      <div className="mx-auto max-w-3xl flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
        <div className="py-3 flex-1">
          <h1 className="font-bold text-2xl sm:text-3xl">About Me</h1>

          <div className="py-3 space-y-4 text-sm sm:text-base leading-relaxed">
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
            <ul className="list-disc list-inside space-y-1 marker:text-teal-500 text-sm sm:text-base">
              {technologies.map((tech) => (
                <li key={tech.name}>{tech.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center shrink-0 lg:pt-24">
  <div className="relative w-40 sm:w-60 lg:w-64 aspect-[4/5] rounded-lg overflow-hidden">
    <Image
      src="https://res.cloudinary.com/tvuveq2c/image/upload/v1787040838/WhatsApp_Image_2026-08-13_at_11.26.15_AM_1_mccmzr.jpg"
      alt="Mary Nasieku"
      fill
      className="object-cover"
    />
  </div>
</div>
      </div>
    </main>
  );
}