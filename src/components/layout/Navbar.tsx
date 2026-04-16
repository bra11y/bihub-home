import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Buy', href: '/buy' },
  { label: 'Rent', href: '/rent' },
  { label: 'Sell', href: '/sell' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Home Loans', href: '/home-loans' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--color-surface)' : 'transparent',
        boxShadow: scrolled ? '0 1px 0 var(--color-border)' : 'none',
      }}
    >
      <div
        className="max-w-[1200px] mx-auto px-6 flex items-center justify-between"
        style={{ height: '72px' }}
      >
        <Link
          to="/"
          className="font-bold text-xl tracking-tight"
          style={{ fontFamily: 'var(--font-display)', color: scrolled ? 'var(--color-brand)' : '#ffffff' }}
          aria-label="Bihub Homes — home"
        >
          BIHUB HOMES
        </Link>

        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = location.pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color: scrolled
                    ? active ? 'var(--color-brand)' : 'var(--color-text-muted)'
                    : active ? 'var(--color-accent)' : 'rgba(255,255,255,0.85)',
                }}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-[var(--radius-sm)] transition-colors duration-200"
          style={{
            backgroundColor: 'var(--color-accent)',
            color: 'var(--color-dark-bg)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
        >
          Contact Us
        </Link>

        <button
          className="md:hidden p-2 rounded-[var(--radius-sm)]"
          style={{ color: scrolled ? 'var(--color-text)' : '#ffffff' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          type="button"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="md:hidden"
          style={{ backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}
        >
          <nav aria-label="Mobile navigation" className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.href
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="py-3 text-sm font-medium border-b transition-colors duration-200"
                  style={{
                    color: active ? 'var(--color-brand)' : 'var(--color-text-muted)',
                    borderColor: 'var(--color-border)',
                  }}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center justify-center px-5 py-3 text-sm font-medium rounded-[var(--radius-sm)]"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-dark-bg)' }}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
