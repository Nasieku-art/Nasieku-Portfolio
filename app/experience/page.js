const EXPERIENCE = [
  {
    role: "Full-stack developer (Student)",
    company: "Magoso Community Center",
    period: "2025 April — Present",
    location: "Nairbi, Kenya",
    summary:
      "I am a passionate full-stack developer currently at Magoso community center",
    highlights: [
      "A concrete outcome you drove — include a number if you can.",
      "Something you built, shipped, or improved.",
      "A collaboration or leadership moment worth noting.",
    ],
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    role: "Junior Trainer",
    company: "UN Women",
    period: "2025 — 2026",
    location: "Nairobi, Kenya",
    summary: "Same idea — keep it to what mattered, not a job description.",
    highlights: [
      "Result or responsibility one.",
      "Result or responsibility two.",
    ],
    stack: ["JavaScript", "Express", "MongoDB"],
  },
  {
    role: "Juniour Underwriter",
    company: "Findings Real Estate Company",
    period: "2025 — 2026",
    location: "Remote",
    summary: "Where it started.",
    highlights: ["What you learned.", "What you shipped, even if small."],
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

export const metadata = {
  title: "Experience",
  description: "Career timeline and professional experience.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#12151f] text-[#ede9e0]">
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-16">
        <p className="font-mono text-xs tracking-[0.3em] text-[#c9a227] uppercase">
          Career Ledger
        </p>
        <h1 className="mt-4 text-5xl sm:text-6xl font-serif font-medium tracking-tight text-[#f4f1e8]">
          Experience
        </h1>
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#9aa1b5]">
          A record of where I&apos;ve worked and what I built while I was there
          — logged roughly in the order it happened.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-32">
        <div className="relative border-l border-[#2b3040]">
          {EXPERIENCE.map((job, i) => (
            <article key={i} className="relative pl-10 pb-16 last:pb-0">
              <div className="absolute left-[-11px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#12151f] border-2 border-[#c9a227]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#12d6c0]" />
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h2 className="text-2xl font-serif text-[#f4f1e8]">
                  {job.role}
                </h2>
                <span className="font-mono text-xs text-[#12d6c0] tracking-wide">
                  {job.period}
                </span>
              </div>

              <p className="mt-1 text-sm text-[#9aa1b5]">
                {job.company} · {job.location}
              </p>

              <p className="mt-4 text-[15px] leading-relaxed text-[#c7cad6]">
                {job.summary}
              </p>

              <ul className="mt-4 space-y-2">
                {job.highlights.map((h, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-[14px] leading-relaxed text-[#c7cad6]"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#3a4256]" />
                    {h}
                  </li>
                ))}
              </ul>

              {job.stack?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] tracking-wide text-[#9aa1b5] border border-[#2b3040] rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
