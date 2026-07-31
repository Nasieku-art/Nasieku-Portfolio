export default function Hero() {
  return (
    <main className="min-h-screen  flex items-center justify-center font-serif text-xl">
      <div id="hero" className="max-w-2xl text-center">
        <p className="  text-teal-500">Hi, my name is</p>

        <h1 className="mt-4 text-5xl sm:text-7xl font-bold ">Mary Nasieku</h1>

        <p className="mt-3  sm:text-2xl font-medium">
          Full-Stack Software Developer
        </p>

        <p className="mt-6 text-6xl mx-auto max-w-xl sm:text-base leading-relaxed">
          I'm a passionate{" "}
          <span className="text-teal-500">Full-Stack Software Developer</span>{" "}
          who enjoys building modern, responsive, and scalable web applications.
          I specialize in{" "}
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
