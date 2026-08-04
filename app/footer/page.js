import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand and Socials */}
          <div>
            <Link href="/#" className="inline-block text-2xl font-bold text-gradient mb-4">
              <img
                src="/levi.png"
                alt="Logo"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs text-justify">
              Competitive programmer &amp; full-stack developer crafting
              elegant solutions to complex problems.
            </p>
            <div className="flex gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/mubich1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-muted hover:bg-accent transition-colors group"
                aria-label="GitHub"
                tabIndex={0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/mubashir-naseer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-muted hover:bg-accent transition-colors group"
                aria-label="LinkedIn"
                tabIndex={0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/chaudhrymubshir.chaudhrymubshir"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-muted hover:bg-accent transition-colors group"
                aria-label="Facebook"
                tabIndex={0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="https://x.com/mubi_ch1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-muted hover:bg-accent transition-colors group"
                aria-label="Twitter"
                tabIndex={0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:mubshirnaseer24@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-muted hover:bg-accent transition-colors group"
                aria-label="Email"
                tabIndex={0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/#about" },
                { label: "Skills", href: "/#skills" },
                { label: "Experience", href: "/#experience" },
                { label: "Projects", href: "/#projects" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Let&apos;s Work Together
            </h4>
            <p className="text-muted-foreground mb-4">
              Looking for a competitive programmer or developer for your team?
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              tabIndex={0}
            >
              Get in Touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail w-4 h-4"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © {new Date().getFullYear()} Mubashir Naseer. Built with
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart w-4 h-4 text-primary fill-primary"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            and
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-code w-4 h-4 text-primary"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-mono">&lt;</span>Solving problems, one
            algorithm at a time
            <span className="font-mono"> /&gt;</span>
          </p>
        </div>
      </div>
    </footer>
  );
}