import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const shouldRenderScreenshot =
    (project.slug === 'genoscript' ||
      project.slug === 'repright' ||
      project.slug === 'truebalance' ||
      project.slug === 'temporal-logic-reward-shaping-comparison' ||
      project.slug === 'prompt-abstention-eval') &&
    Boolean(project.screenshots[0])

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        'group block bg-card border border-border rounded-lg overflow-hidden',
        'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5',
        'transition-all duration-300'
      )}
    >
    <div className="aspect-video bg-muted relative overflow-hidden">
      {shouldRenderScreenshot ? (
        <Image
          src={project.screenshots[0]}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
          <span className="text-6xl font-serif text-primary/30">
            {project.title.charAt(0)}
          </span>
        </div>
      )}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="p-2 bg-primary text-primary-foreground rounded-full">
          <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-muted-foreground font-mono shrink-0">
            {project.year}
          </span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {project.description}
        </p>

        {project.awardTag && (
          <Badge variant="outline" className="mb-4 text-xs">
            {project.awardTag}
          </Badge>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="text-xs font-normal"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge 
              variant="outline" 
              className="text-xs font-normal"
            >
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
      </div>
    </Link>
  )
}
