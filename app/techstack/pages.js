
"use client"
const technologies = [
  { id: 1, name: "Javascript(ES6+)" },
  { id: 1, name: "React" },
  { id: 1, name: "Tailwind CSS" },
  { id: 1, name: "Nextjs" },
  { id: 1, name: "Nodejs" },
];

export default function Techstack() {
  return (
    <ul>
      {technologies.map((tech) => (
        <li>{tech.name}</li>
      ))}
    </ul>
  );
}
