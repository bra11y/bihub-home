import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const footerLinks = {
  Service: [
    { label: 'Buy a Home', href: '/buy' },
    { label: 'Sell a Home', href: '/sell' },
    { label: 'Rent a Home', href: '/rent' },
    { label: 'Home Loans', href: '/home-loans' },
    { label: 'Property Listings', href: '/listings' },
  ],
  Help: [
    { label: 'FAQ', href: '#' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Support', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
  About: [
    { label: 'Our Story', href: '/about' },
    { label: 'Team', href: '/about#team' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
}

const linkMuted = 'rgba(240,237,228,0.6)'
const linkBase = 'rgba(240,237,228,0.65)'

export default function Footer() {
  return (
    <footer role="contentinfo" style={{ backgroundColor: 'var(--color-dark-bg)', color: 'var(--color-dark-text)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>

        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '3rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
          {/* Brand */}
          <div style={{ maxWidth: 220 }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-dark-text)', marginBottom: '0.75rem' }}>
              BIHUB HOMES
            </p>
            <a
              href="mailto:bihub.realestate@gmail.com"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.825rem', color: linkMuted, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = linkMuted)}
            >
              bihub.realestate@gmail.com <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Links */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(240,237,228,0.35)', marginBottom: '1rem' }}>
                  {group}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        style={{ fontSize: '0.85rem', color: linkBase, textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-dark-text)')}
                        onMouseLeave={e => (e.currentTarget.style.color = linkBase)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(240,237,228,0.08)', paddingTop: '1.5rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(240,237,228,0.3)' }}>
            © {new Date().getFullYear()} Bihub Homes. All rights reserved.
          </p>
          <p
            aria-hidden="true"
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, lineHeight: 1,
              fontSize: 'clamp(2.5rem, 8vw, 6rem)', letterSpacing: '-0.03em',
              color: 'rgba(240,237,228,0.05)', userSelect: 'none',
            }}
          >
            BIHUB HOMES
          </p>
        </div>
      </div>
    </footer>
  )
}
