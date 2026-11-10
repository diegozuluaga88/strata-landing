import { getDemoHubUrl } from '../../lib/content'
import { useTheme } from '../../theme'
import logoLight from '../../assets/logo-light-brand.png'
import logoDark from '../../assets/logo-dark-brand.png'

export function Footer() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const demoHubUrl = getDemoHubUrl()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 sm:flex-row lg:px-10">
        <div className="flex items-center gap-3">
          <img src={isDark ? logoDark : logoLight} alt="Strata" className="h-5 w-auto" />
          <span className="text-xs text-muted-foreground">
            AI for contract dealers &amp; manufacturers
          </span>
        </div>
        <nav className="flex items-center gap-5 text-xs text-muted-foreground">
          <a href="/quote-converter/" className="transition-colors hover:text-foreground">
            Quote Converter
          </a>
          <a href="/expert-hub/" className="transition-colors hover:text-foreground">
            Expert Hub
          </a>
          <a href="/dealer-hub/" className="transition-colors hover:text-foreground">
            Dealer Hub
          </a>
          {demoHubUrl && (
            <a
              href={demoHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Demo Hub
            </a>
          )}
          <span>© {new Date().getFullYear()} Strata</span>
        </nav>
      </div>
    </footer>
  )
}
