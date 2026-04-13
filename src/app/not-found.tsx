import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#141414] px-6 text-center">
      <p className="mb-4 text-sm font-semibold tracking-widest text-[#0A8FBF] uppercase">
        404
      </p>
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
        Page Not Found
      </h1>
      <p className="mb-8 max-w-md text-lg text-[#8A8A8A]">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button href="/" variant="secondary" size="lg">
        Back to Home
      </Button>
    </main>
  )
}
