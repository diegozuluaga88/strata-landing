import { TopNav } from './components/landing/TopNav'
import { Hero } from './components/landing/Hero'
import { Pillars } from './components/landing/Pillars'
import { DemoHubLink } from './components/landing/DemoHubLink'
import { Products } from './components/landing/Products'
import { Footer } from './components/landing/Footer'

// Alternative B: the hero and a compact list of hubs share the first row (one line per hub,
// details on demand), and the pillars move to a full-width band underneath.
export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <TopNav />
      <main className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10 lg:py-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <Hero />
              <DemoHubLink />
            </div>
            <Products className="lg:col-span-7" />
          </div>
          <Pillars className="mt-10 lg:mt-12" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
