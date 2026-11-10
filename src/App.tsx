import { TopNav } from './components/landing/TopNav'
import { Hero } from './components/landing/Hero'
import { Pillars } from './components/landing/Pillars'
import { DemoHubLink } from './components/landing/DemoHubLink'
import { Products } from './components/landing/Products'
import { Footer } from './components/landing/Footer'

// Alternative A: the hero spans the page with the pillars beside it, and every hub sits in one
// compact grid below, so all hubs share a single row at desktop widths.
export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <TopNav />
      <main className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10 lg:py-6">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Hero />
              <DemoHubLink />
            </div>
            <Pillars className="lg:col-span-5" />
          </div>
          <Products className="mt-8" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
