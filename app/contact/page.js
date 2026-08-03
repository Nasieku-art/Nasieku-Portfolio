import Link from "next/link";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mary-nasieku-2633a6388",
  },
  {
    label: "GitHub",
    href: "https://github.com/Nasieku-art",
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen flex justify-center font-serif sm:block">
      <div className="w-full max-w-md ">
        <h1 className="text-5xl font-bold">Get in touch</h1>
        <p className=" text-sm mb-6">
          Reach out through any of the channels below.
        </p>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium">Email</p>
            <a
              href="mailto:nasiekunasiekumary77@gmail.com"
              className="text-sm text-teal-600 hover:underline"
            >
              nasiekunasiekumary77@gmail.com
            </a>
          </div>

          <div>
            <p className="text-sm font-medium">Phone</p>
            <a
              href="tel:+254701391756"
              className="text-sm text-teal-600 hover:underline"
            >
              +254701391756
            </a>
          </div>

          <div>
            <p className="text-sm font-medium">Location</p>
            <p className="text-sm">Nairobi, Kenya</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-25 text-teal-600 gap-5">
        {SOCIALS.map((social) => (
          <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
            <button className="btn bg-teal-700 rounded-3xl px-7">
              {social.label}
            </button>
          </Link>
        ))}
      </div>
    </main>
  );
}