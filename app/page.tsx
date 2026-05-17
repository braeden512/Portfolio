import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects, getProjectsByType } from "@/lib/projects";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  MapPin,
  Briefcase,
  GraduationCap,
  Code2,
  BookOpen,
} from "lucide-react";

export default function HomePage() {
  const demoProjects = getProjectsByType("demo");
  const researchProjects = getProjectsByType("research");
  const resumePdfHref = "/projects/Braeden_Treutel_resume.pdf";

  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-[85vh] flex items-center relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--primary)_0%,_transparent_50%)] opacity-[0.03]" />

          <div className="max-w-6xl mx-auto px-6 py-20 relative">
            <div className="max-w-3xl">
              <p className="text-primary font-mono text-sm tracking-wider mb-4">
                Hello, I&apos;m
              </p>

              <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6 leading-tight">
                Braeden Treutel
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4">
                <span className="text-foreground font-medium">
                  Entry level software engineer / machine learning engineer
                </span>{" "}
                with a proven ability to build, deploy, and evaluate AI-driven
                applications.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Currently pursuing a M.S. in Computer Science at Middle
                Tennessee State University.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="#projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#contact">Get in Touch</Link>
                </Button>
              </div>
            </div>

            {/* Side decoration */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 opacity-10">
              <div className="text-[20rem] font-serif text-primary leading-none">
                B
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  <span className="text-primary font-mono text-sm tracking-wider">
                    PROJECTS
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                  Featured Work
                </h2>
              </div>
              <Link
                href="#research"
                className="text-sm text-muted-foreground hover:text-primary transition-colors hidden md:flex items-center gap-1"
              >
                View Research
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {demoProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="py-24 bg-secondary/30 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="text-primary font-mono text-sm tracking-wider">
                    RESEARCH
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                  Academic Work
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {researchProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group block bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground font-mono shrink-0">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-24 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span className="text-primary font-mono text-sm tracking-wider">
                    RESUME
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                  Experience & Education
                </h2>
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="hidden md:flex items-center gap-2"
              >
                <a href={resumePdfHref} download="Braeden_Treutel_resume.pdf">
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Experience */}
              <div>
                <h3 className="text-lg font-medium text-foreground mb-6 flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                  Work Experience
                </h3>
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                    <div className="mb-1">
                      <h4 className="font-medium text-foreground">
                        Graduate Research Assistant
                      </h4>
                      <p className="text-sm text-primary">
                        Middle Tennessee State University
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      January 2026 - Present
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Collaborated with faculty researchers to explore safe
                      reinforcement learning methods and formal specification
                      driven agent behavior.
                    </p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-border">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted border-2 border-border" />
                    <div className="mb-1">
                      <h4 className="font-medium text-foreground">
                        Cashier / Front Service Clerk
                      </h4>
                      <p className="text-sm text-primary">
                        Publix Supermarkets
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      December 2020 - December 2025
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Trained and mentored 10+ new employees, demonstrating
                      leadership and process standardization skills.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-lg font-medium text-foreground mb-6 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  Education
                </h3>
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                    <div className="mb-1">
                      <h4 className="font-medium text-foreground">
                        M.S. Computer Science
                      </h4>
                      <p className="text-sm text-primary">
                        Middle Tennessee State University
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      January 2026 - Present
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Expected graduation in December 2027
                    </p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-border">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted border-2 border-border" />
                    <div className="mb-1">
                      <h4 className="font-medium text-foreground">
                        B.S. Computer Science
                      </h4>
                      <p className="text-sm text-primary">
                        Middle Tennessee State University
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      August 2022 - December 2025
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Graduated cum laude, received multiple dean's list
                      recognitions, and awarded trustee scholarship.
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-10">
                  <h3 className="text-lg font-medium text-foreground mb-4">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "React",
                      "JavaScript",
                      "SQL",
                      "HTML/CSS",
                      "Git",
                      "Linux",
                      "C++",
                      "TypeScript",
                      "Next.js",
                      "Node.js",
                      "MongoDB",
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 md:hidden">
              <Button
                asChild
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
              >
                <a href={resumePdfHref} download="Braeden_Treutel_resume.pdf">
                  <Download className="h-4 w-4" />
                  Download Resume PDF
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-secondary/30 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-primary font-mono text-sm tracking-wider">
                  CONTACT
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-muted-foreground">
                I&apos;m always interested in hearing about new projects and
                opportunities. If you have any questions, feel free to reach out
                for more information.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="group hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:braeden4328@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    braeden4328@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="group hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">GitHub</h3>
                  <a
                    href="https://github.com/braeden512"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-1"
                  >
                    @braeden512
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>

              <Card className="group hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/braeden-treutel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-1"
                  >
                    /in/braeden-treutel/
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                <MapPin className="h-4 w-4" />
                Based in Nashville, TN - Available for remote work
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
