"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto" id="about">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="py-3 md:py-55 flex-1">
          <h1 className="font-bold text-3xl">About Me</h1>
          <div className="py-3">
            <p>
              I'm a passionate{" "}
              <span className="text-teal-500">
                Full-Stack Software Developer{" "}
              </span>
              who enjoys transforming
            </p>
            <p>
              ideas into modern, scalable, and high-performing web applications.
              I
            </p>
            <p>
              specialize in building seamless digital experiences using
              technologies such as
            </p>
            <p>
              <span className="text-teal-500">
                React, Next.js, Tailwind CSS, JavaScript, Node.js,{" "}
              </span>
              and databases, combining
            </p>
            <p>intuitive user interfaces with robust backend systems.</p>
          </div>

          <div className="py-3">
            <p>
              My journey in technology extends beyond software development. I
              have
            </p>
            <p>
              experience in IT support, digital skills training, and community
              mentorship,
            </p>
            <p>
              where I've helped learners develop practical technical skills.
              These
            </p>
            <p>
              experiences have strengthened my communication, leadership, and
              problem-
            </p>
            <p>
              solving abilities while reinforcing my belief that technology
              should empower
            </p>
            <p>people and create opportunities.</p>
          </div>

          <div className="py-3">
            <p>
              I'm constantly exploring emerging technologies, particularly
              artificial
            </p>
            <p>
              intelligence, cloud technologies, and modern web development, to
              build
            </p>
            <p>
              innovative solutions that address real-world challenges. Every
              project I
            </p>
            <p>
              undertake is an opportunity to learn, innovate, and deliver
              secure, scalable,
            </p>
            <p>and meaningful digital experiences.</p>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center py-10 md:py-20">
          <Image
            src="/image/Mary Nasieku Photo.jpg"
            alt="Mary Nasieku"
            width={200}
            height={50}
            loading="lazy"
            className="rounded-lg object-cover "
          />
        </div>
      </div>
      <div className="py-3 flex text-center">
        <p>Here are some of the technologies that I have been working with:</p>
        <p>Javascript(ES6+)</p>
        <p> React</p>
        <p>Nextjs</p>
        <p>WordPress</p>
      </div>
    </div>
  );
}
