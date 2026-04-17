import { useState } from 'react'
import type { FormEvent } from 'react'
import { MapPin } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.75rem 0.875rem',
    border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)',
    fontSize: '0.875rem', fontFamily: 'var(--font-body)', color: 'var(--color-text)',
    backgroundColor: 'var(--color-surface)', outline: 'none', transition: 'border-color 0.2s',
  }

  return (
    <section aria-labelledby="contact-heading" style={{ backgroundColor: 'var(--color-bg)', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="contact-grid">

          {/* Form */}
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
              Get in Touch
            </p>
            <h2 id="contact-heading" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', color: 'var(--color-text)', marginBottom: '0.875rem', lineHeight: 1.15 }}>
              Let's Get In Touch
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.7, maxWidth: 340 }}>
              Ready to find your dream home? We're here to help you out.
            </p>

            {submitted ? (
              <div role="alert" aria-live="polite" style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-success)' }}>Thank you! We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  {[{ id: 'firstName', label: 'First Name', placeholder: 'Enter first name', auto: 'given-name' },
                    { id: 'lastName',  label: 'Last Name',  placeholder: 'Enter last name',  auto: 'family-name' }].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.375rem' }}>{f.label}</label>
                      <input id={f.id} name={f.id} type="text" required autoComplete={f.auto} placeholder={f.placeholder}
                        value={form[f.id as keyof typeof form]} onChange={handleChange} style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'var(--color-brand)')}
                        onBlur={e  => (e.target.style.borderColor = 'var(--color-border)')} />
                    </div>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  {[{ id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', auto: 'email' },
                    { id: 'phone', label: 'Phone', type: 'tel',   placeholder: 'Enter your phone', auto: 'tel'   }].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.375rem' }}>{f.label}</label>
                      <input id={f.id} name={f.id} type={f.type} autoComplete={f.auto} placeholder={f.placeholder}
                        value={form[f.id as keyof typeof form]} onChange={handleChange} style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'var(--color-brand)')}
                        onBlur={e  => (e.target.style.borderColor = 'var(--color-border)')} />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.375rem' }}>Message</label>
                  <textarea id="message" name="message" required rows={4} placeholder="Your message"
                    value={form.message} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => (e.target.style.borderColor = 'var(--color-brand)')}
                    onBlur={e  => (e.target.style.borderColor = 'var(--color-border)')} />
                </div>
                <button type="submit"
                  style={{ width: '100%', padding: '0.875rem', fontSize: '0.875rem', fontWeight: 600, backgroundColor: 'var(--color-brand)', color: '#fff', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'background 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-brand-light)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-brand)')}>
                  Submit Form
                </button>
              </form>
            )}
          </div>

          {/* Map */}
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative', minHeight: 460 }}>
            <iframe
              title="Bihub Homes location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073367!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%" height="100%" style={{ border: 0, display: 'block', minHeight: 460 }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
            <div style={{
              position: 'absolute', bottom: 16, left: 16, right: 16, padding: '0.875rem 1rem',
              backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-md)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
            }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }} aria-hidden="true">
                <MapPin size={14} color="var(--color-dark-bg)" />
              </div>
              <div>
                <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text)' }}>Tranquil Side Villa</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>350 Fifth Avenue, New York City</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
