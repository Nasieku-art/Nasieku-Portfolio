const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "HTML5 / CSS3", level: 90 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js / Express", level: 75 },
      { name: "REST APIs", level: 75 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 65 },
      { name: "Firebase", level: 60 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "VS Code", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <main id="skills" className="px-6 py-20 font-serif scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-teal-500 text-sm uppercase tracking-wide">
            Expertise
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            Skills &amp; Technologies
          </h1>
          <span className="mt-4 inline-block h-0.5 w-16 bg-teal-500" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h2 className="text-teal-500 font-semibold mb-5">
                {group.category}
              </h2>

              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs text-white/50">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-teal-600 to-teal-300"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}