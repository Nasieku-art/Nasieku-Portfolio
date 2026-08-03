const projects = [
  {
    title: "Clozzet",
    description:
      "A full-stack e-commerce marketplace for Kenyan fashion, built with React, Node.js, Express, and MongoDB.",
    github: "https://github.com/Nasieku-art/Clozzet",
  
  },
  {
    title: "DigiBridge",
    description:
      "A Kenya-based ICT literacy and digital learning platform with learner/admin dashboards and progress tracking. I buildt this project with purely Javascript",
    github: "https://nasieku-art.github.io/DigiBridge-Project/", 
  
  },
  {
    title: "One Assist Ai",
    description:
      "A bilingual (English/Kiswahili) interactive web app built for the Kibera community, with quiz-based lessons and badges.",
    github: "https://one-assist-ai-f5cf-2yh3m1fkl-one-assist.vercel.app/", 
   
  },
];

export default function Projects() {
  return (
    
    <main className="min-h-screen px-6 py-20 font-serif">
      <div className=" max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-white mb-10">My Projects</h1>

        <div className="flex gap-6 sm:flex-cols">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-white/10 bg-[teal] p-8"
            >
              <h2 className="text-2xl font-semibold text-white">{project.title}</h2>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {project.description}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  
                  className="rounded-lg border  px-4 py-2 text-sm font-medium text-white/80  hover:text-white"
                >
                  GitHub
                </a>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    
  );
}