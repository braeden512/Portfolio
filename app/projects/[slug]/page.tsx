import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { projects, getProjectBySlug } from '@/lib/projects'
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  FileText,
  Calendar,
  ArrowUpRight
} from 'lucide-react'
import type { Metadata } from 'next'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    return {
      title: 'Project Not Found | Braeden',
    }
  }

  return {
    title: `${project.title} | Braeden`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const otherProjects = projects
    .filter((p) => p.slug !== project.slug && p.type === project.type)
    .slice(0, 2)

  const shouldRenderScreenshots =
    project.slug === 'genoscript' ||
    project.slug === 'repright' ||
    project.slug === 'truebalance' ||
    project.slug === 'temporal-logic-reward-shaping-comparison' ||
    project.slug === 'prompt-abstention-eval'

  return (
    <>
      <Navigation />
      
      <main className="pt-20 min-h-screen">
        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Back link */}
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all projects
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant={project.type === 'research' ? 'outline' : 'secondary'}>
                {project.type === 'research' ? 'Research' : 'Project'}
              </Badge>
              {project.awardTag && (
                <Badge variant="outline">{project.awardTag}</Badge>
              )}
              <span className="text-sm text-muted-foreground font-mono flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {project.year}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </header>

          {/* Links */}
          <div className="flex flex-wrap gap-3 mb-12">
            {project.links.demo && (
              <Button asChild>
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button asChild variant="outline">
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Source
                </a>
              </Button>
            )}
            {project.links.paper && (
              <Button asChild variant="outline">
                <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Read Paper
                </a>
              </Button>
            )}
          </div>

          {/* Screenshots */}
          <div className="mb-12">
            <h2 className="text-lg font-medium text-foreground mb-4">Screenshots</h2>
            <div className="grid gap-4">
              {project.screenshots.map((screenshot, index) => (
                <div 
                  key={index}
                  className="aspect-video bg-muted rounded-lg border border-border overflow-hidden relative"
                >
                  {shouldRenderScreenshots ? (
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-8xl font-serif text-primary/20">
                          {project.title.charAt(0)}
                        </span>
                        <p className="text-sm text-muted-foreground mt-2">
                          Screenshot {index + 1}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-12">
            <h2 className="text-lg font-medium text-foreground mb-4">About this {project.type === 'research' ? 'Research' : 'Project'}</h2>
            <div className="prose prose-neutral max-w-none">
              {project.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-lg font-medium text-foreground mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div className="border-t border-border pt-12">
              <h2 className="text-lg font-medium text-foreground mb-6">
                Other {project.type === 'research' ? 'Research' : 'Projects'}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {otherProjects.map((otherProject) => (
                  <Link
                    key={otherProject.slug}
                    href={`/projects/${otherProject.slug}`}
                    className="group block bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {otherProject.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {otherProject.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </>
  )
}
