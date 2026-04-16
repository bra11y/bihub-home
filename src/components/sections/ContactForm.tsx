import { useState } from 'react'
import type { FormEvent } from 'react'
import { MapPin } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setStatus('Thank you! We will be in touch shortly.')
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-sm)',
    fontSize: '14px',
    fontFamily: 'var(--font-body)',
    color: 'var(--color-text)',
    backgroundColor: 'var(--color-surface)',
    outline: 'none',
  }

  return (
    <section
      aria-labelledby="contact-heading"
      className="py-20"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--color-accent)' }}>
              Get in Touch
            </p>
            <h2
              id="contact-heading"
              className="text-4xl md:text-5xl mb-4"
              style={{ color: 'var(--color-text)' }}
            >
              Let's Get In Touch
            </h2>
            <p className="text-sm mb-8 max-w-sm" style={{ color: 'var(--color-text-muted)' }}>
              Ready to find your dream home? Make an investment or get in touch with us. We are here to help you out.
            </p>

            {submitted ? (
              <div
                className="p-5 rounded-[var(--radius-md)]"
                role="alert"
                aria-live="polite"
                style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              >
                <p className="text-sm font-medium" style={{ color: 'var(--color-success)' }}>{status}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-medium mb-1.5" style={{ color: 'var(--color-text-muted)' }}>
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      autoComplete="given-name"
                      placeholder="Enter your first name"
                      value={form.firstName}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-brand)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-medium mb-1.5" style={{ color: 'var(--color-text-muted)' }}>
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      autoComplete="family-name"
                      placeholder="Enter your last name"
                      value={form.lastName}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-brand)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium mb-1.5" style={{ color: 'var(--color-text-muted)' }}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-brand)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium mb-1.5" style={{ color: 'var(--color-text-muted)' }}>
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Enter your phone"
                      value={form.phone}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-brand)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label htmlFor="message" className="block text-xs font-medium mb-1.5" style={{ color: 'var(--color-text-muted)' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Your message"
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-brand)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-semibold rounded-[var(--radius-sm)] transition-colors duration-200"
                  style={{ backgroundColor: 'var(--color-brand)', color: '#ffffff' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-brand-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-brand)')}
                >
                  Submit Form
                </button>
              </form>
            )}
          </div>

          <div className="rounded-[var(--radius-lg)] overflow-hidden relative" style={{ minHeight: '400px' }}>
            <iframe
              title="Bihub Homes location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073367!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div
              className="absolute bottom-4 left-4 right-4 p-4 rounded-[var(--radius-md)] flex items-start gap-3"
              style={{ backgroundColor: 'var(--color-surface)', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-none mt-0.5"
                style={{ backgroundColor: 'var(--color-accent)' }}
                aria-hidden="true"
              >
                <MapPin size={14} style={{ color: 'var(--color-dark-bg)' }} />
              </div>
              <div>
                <p className="text-xs font-semibold" style={{ color: 'var(--color-text)' }}>Tranquil side Villa</p>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>350 Fifth Avenue, New York City</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
