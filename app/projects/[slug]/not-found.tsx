import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Navigation />
      
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 py-20 text-center">
          <div className="text-8xl font-serif text-primary/30 mb-4">404</div>
          <h1 className="text-2xl font-medium text-foreground mb-2">
            Project Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The project you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="outline">
              <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
