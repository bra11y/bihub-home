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

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{ backgroundColor: 'var(--color-dark-bg)', color: 'var(--color-dark-text)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="max-w-xs">
            <p
              className="text-xl font-bold mb-3"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-dark-text)' }}
            >
              BIHUB HOMES
            </p>
            <a
              href="mailto:bihub.realestate@gmail.com"
              className="flex items-center gap-1 text-sm transition-colors duration-200"
              style={{ color: 'rgba(240,237,228,0.6)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,237,228,0.6)')}
            >
              bihub.realestate@gmail.com
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-12">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: 'rgba(240,237,228,0.4)' }}
                >
                  {group}
                </p>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: 'rgba(240,237,228,0.65)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-dark-text)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,237,228,0.65)')}
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

        <div
          className="border-t pt-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4"
          style={{ borderColor: 'rgba(240,237,228,0.1)' }}
        >
          <p
            className="text-xs"
            style={{ color: 'rgba(240,237,228,0.35)' }}
          >
            © {new Date().getFullYear()} Bihub Homes. All rights reserved.
          </p>
          <p
            className="font-bold tracking-tighter leading-none select-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 10vw, 7rem)',
              color: 'rgba(240,237,228,0.06)',
            }}
            aria-hidden="true"
          >
            BIHUB HOMES
          </p>
        </div>
      </div>
    </footer>
  )
}
