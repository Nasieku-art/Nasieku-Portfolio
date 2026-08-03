"use client";
const EXPERIENCE = [
  {
    role: "Full-stack developer (Student)",
    company: "Magoso Youth Center",
    period: "2025 April — Present",
    location: "Nairbi, Kenya",
    summary:
      "I am a passionate full-stack developer currently at Magoso community center",
    highlights: [
      "Built and shipped features across the stack using React, Node.js, and PostgreSQL.",
      "Worked with a small team to plan, build, and iterate on community-facing tools.",
      "Took ownership of debugging and improving existing features for reliability.",
    ],
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "Javascript(ES6+)",
      "TailwindCSS",
      "Express",
      "PostgreSQL"
    ],
  },
  {
    role: "Junior Trainer",
    company: "UN Women",
    period: "2025 — 2026",
    location: "Nairobi, Kenya",
    summary:
      "Delivered digital literacy training sessions for young women, translating technical concepts into practical, hands-on lessons.",
    highlights: [
      "Trained and mentored program participants in foundational coding and digital skills.",
      "Supported curriculum delivery and helped participants build confidence with new tools.",
    ],
    stack: ["Make Art","Scratch","Advanced-Excel","Power BI"],
  },
  {
    role: "Junior Underwriter",
    company: "Findings Real Estate Company",
    period: "2025 — 2026",
    location: "Remote",
    summary:
      "Verified property and ownership documents for house hunters, ensuring accuracy before listings moved forward.",
    highlights: [
      "Verified the income of the leasers ensuring that they meet the Credit score as per the SOP provided by the property manger",
      "Reviewed and verified property documents for prospective Leasers.",
      "Flagged discrepancies to keep the listing process accurate and reliable.",
      "Ensure that the IDV was done manually and the uploaded documents were legitimate",
      "Background check and pet criteria ensuring the the leasers they dont have any debts outside as well",
    ],
  },
];

export default function Experience() {
  return (
    <main className="min-h-screen font-serif">
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <p className=" text-teal-500 uppercase">Career Ledger</p>
        <h1 className="mt-4 text-5xl sm:text-6xl ">Experience</h1>
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed ">
          A record of where I`ve worked and what I built while I was there
          logged roughly in the order it happened.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-32">
        <div
          className="relative
         border-l border-teal-500"
        >
          {EXPERIENCE.map((job, i) => (
            <article key={i} className="relative pl-10 pb-16 last:pb-0">
              <div className="absolute left-[-11px] top-1 flex h-5 w-5 items-center justify-center ">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500 " />
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h2 className="text-2xl ">{job.role}</h2>
                <span className=" text-[#12d6c0] ">{job.period}</span>
              </div>

              <p className="mt-1 text-sm ">
                {job.company} · {job.location}
              </p>

              <p className="mt-4 text-[15px] leading-relaxed ">{job.summary}</p>

              <ul className="mt-4 space-y-2">
                {job.highlights.map((h, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-[14px] leading-relaxed "
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#3a4256]" />
                    {h}
                  </li>
                ))}
              </ul>

              {job.stack?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span key={tech} className=" px-3 py-1">
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
