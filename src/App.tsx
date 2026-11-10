import { TopNav } from './components/landing/TopNav'
import { Hero } from './components/landing/Hero'
import { DemoHubLink } from './components/landing/DemoHubLink'
import { Products } from './components/landing/Products'
import { Footer } from './components/landing/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <TopNav />
      <main className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10 lg:py-6">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <Hero />
              <DemoHubLink />
            </div>
            <Products />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
