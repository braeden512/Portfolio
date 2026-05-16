import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/braeden512", label: "GitHub", icon: Github },
  {
    href: "https://linkedin.com/in/braeden-treutel",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "mailto:braeden4328@gmail.com", label: "Email", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-xl font-serif text-foreground hover:text-primary transition-colors"
            >
              Braeden<span className="text-primary">.dev</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              &copy; {new Date().getFullYear()} Braeden Treutel. All rights
              reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
