const projects = [
  {
    title: "Clozzet",
    description:
      "A full-stack e-commerce marketplace for Kenyan fashion — built with React, Node.js, Express, and MongoDB.",
    github: "https://github.com/Nasieku-art/Clozzet",
  
  },
  {
    title: "DigiBridge",
    description:
      "A Kenya-based ICT literacy and digital learning platform with learner/admin dashboards and progress tracking.",
    github: "https://github.com/Nasieku-art/DigiBridge", 
  
  },
  {
    title: "One Assist Ai",
    description:
      "A bilingual (English/Kiswahili) interactive web app built for the Kibera community, with quiz-based lessons and badges.",
    github: "https://github.com/Nasieku-art/digital-literacy-hub", 
   
  },
];

export default function Projects() {
  return (
    
    <main className="min-h-screen bg-[#0F1418] px-6 py-16">
      <div className="flex max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-white mb-10">My Projects</h1>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-white/10 bg-[#141a1f] p-8"
            >
              <h2 className="text-2xl font-semibold text-white">{project.title}</h2>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {project.description}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  
                  className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white/80 hover:border-white/30 hover:text-white"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
               
                  className="rounded-lg bg-teal-500 px-4 py-2 text-sm font-medium text-[#141a1f] hover:bg-teal-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    
  );
}