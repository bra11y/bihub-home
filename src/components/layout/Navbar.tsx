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

  useEffect(() => { setMobileOpen(false) }, [location])

  return (
    <header
      role="banner"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: scrolled ? 'var(--color-surface)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link
          to="/"
          aria-label="Bihub Homes — home"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em', color: scrolled ? 'var(--color-brand)' : '#fff', textDecoration: 'none' }}
        >
          BIHUB HOMES
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="md:flex hidden-mobile">
          {navLinks.map((link) => {
            const active = location.pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                style={{
                  fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none',
                  color: scrolled ? (active ? 'var(--color-brand)' : 'var(--color-text-muted)') : (active ? 'var(--color-accent)' : 'rgba(255,255,255,0.85)'),
                  transition: 'color 0.2s',
                }}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link
            to="/contact"
            className="btn btn-primary"
            style={{ fontSize: '0.8rem', padding: '0.5rem 1.25rem', display: window.innerWidth < 768 ? 'none' : 'inline-flex' }}
          >
            Contact Us
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            style={{
              display: 'none', background: 'none', border: 'none', padding: '0.5rem',
              color: scrolled ? 'var(--color-text)' : '#fff', cursor: 'pointer',
            }}
            className="mobile-menu-btn"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav"
          style={{ backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}
        >
          <nav aria-label="Mobile navigation" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 1.5rem', gap: '0.25rem' }}>
            {navLinks.map((link) => {
              const active = location.pathname === link.href
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    padding: '0.75rem 0', fontSize: '0.9rem', fontWeight: 500,
                    color: active ? 'var(--color-brand)' : 'var(--color-text-muted)',
                    borderBottom: '1px solid var(--color-border)', textDecoration: 'none',
                  }}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              to="/contact"
              className="btn btn-primary"
              style={{ marginTop: '1rem', justifyContent: 'center' }}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
