const projects = [
  {
    title: "Cheptulu Sunrise Academy",
    description:
      "An information website for Cheptulu Secondary School, built with Next.js, Tailwind CSS, and MongoDB, with an admin-managed dynamic layer for events and admissions.",
    github: "",
  },
  {
    title: "One Assist Ai",
    description:
      "A bilingual (English/Kiswahili) interactive web app built for the Kibera community, with quiz-based lessons and badges.",
    github: "https://one-assist-ai-f5cf-2yh3m1fkl-one-assist.vercel.app/",
  },
  {
    title: "Clozzet",
    description:
      "A full-stack e-commerce marketplace for Kenyan fashion, built with React, Node.js, Express, and MongoDB.",
    github: "https://github.com/Nasieku-art/Clozzet",
  },
  {
    title: "AGCCI Platform",
    description:
      "A platform built as part of UN Women's African Girls Can Code Initiative. Currently under development.",
    github: "",
    inProgress: true,
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen px-6 py-20 font-serif">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-white mb-10">My Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-white/10 bg-teal-800 p-6 sm:p-8"
            >
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  {project.title}
                </h2>
                {project.inProgress && (
                  <span className="text-xs rounded-full bg-white/10 text-white/80 px-3 py-1 whitespace-nowrap">
                    In Progress
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {project.description}
              </p>

              {project.github && (
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border px-4 py-2 text-sm font-medium text-white/80 hover:text-white"
                  >
                    GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}