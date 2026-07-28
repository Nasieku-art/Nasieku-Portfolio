
"use client"
const technologies = [
  { id: 1, name: "Javascript(ES6+)" },
  { id: 2, name: "React" },
  { id: 3, name: "Tailwind CSS" },
  { id: 4, name: "Nextjs" },
  { id: 5, name: "Nodejs" },
];

export default function Techstack() {
  return (
    <ul className="list-disc list-inside space-y-1 marker:text-teal-500">
      {technologies.map((tech) => (
        <li key={tech.name}>{tech.name}</li>
      ))}
    </ul>
  );
}
