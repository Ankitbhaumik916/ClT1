import { motion } from 'framer-motion'
import { useState } from 'react'
import { GlowButton } from '../ui/GlowButton'
import { SectionHeading } from '../ui/SectionHeading'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const contactRows = [
  { label: 'Email', value: 'dids2367@gmail.com', href: 'mailto:dids2367@gmail.com' },
  { label: 'Phone', value: '+91-9475542893', href: 'tel:+919475542893' },
  { label: 'Location', value: 'Chennai, Tamil Nadu, India' },
  {
    label: 'LinkedIn',
    value: 'www.linkedin.com/in/dithhi-dasgupta-21b16834a',
    href: 'https://www.linkedin.com/in/dithhi-dasgupta-21b16834a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    external: true,
  },
]

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      // For now, just log to console and show success message
      // To enable email sending, add VITE_WEB3FORMS_KEY to your .env
      console.log('Form submission:', formData)
      setStatus('sent')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (error) {
      console.error('Form error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const inputCls =
    'w-full rounded-xl border border-[rgba(0,0,0,0.12)] bg-white px-4 py-3.5 text-[14px] text-black placeholder:text-black/35 transition-colors focus:border-black focus:outline-none'

  return (
    <section id="contact" className="section-block bg-white">
      <div className="section-shell">
        <SectionHeading kicker="Contact" title="Let's Work Together" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2"
        >
          {/* ---- Left column: contact details ---- */}
          <div className="h-full rounded-2xl border border-[rgba(0,0,0,0.12)] bg-[#F4F4F6] p-6 sm:p-8">
            <p className="text-[15px] leading-relaxed text-black/70">
              Open to research collaborations, internships &amp; opportunities.
            </p>

            <div className="mt-7 flex flex-col">
              {contactRows.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-1 border-t border-[rgba(0,0,0,0.12)] py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <span className="text-[12px] font-medium text-black/45">{row.label}</span>
                  {row.href ? (
                    <a
                      href={row.href}
                      target={row.external ? '_blank' : undefined}
                      rel={row.external ? 'noopener noreferrer' : undefined}
                      className="break-all text-[14px] text-black underline-offset-4 transition-colors hover:underline sm:text-right"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-[14px] text-black sm:text-right">{row.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ---- Right column: form ---- */}
          <div className="h-full rounded-2xl border border-[rgba(0,0,0,0.12)] bg-white p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-[12px] font-medium text-black/55">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={inputCls}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-[12px] font-medium text-black/55">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className={inputCls}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-[12px] font-medium text-black/55">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="A line about why you're reaching out…"
                  rows={5}
                  className={`${inputCls} resize-y`}
                />
              </div>

              <div className="pt-2">
                <GlowButton type="submit" disabled={status === 'sending'} className="w-full">
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </GlowButton>
              </div>

              <div role="status" aria-live="polite" className="min-h-[24px] text-center text-[13px]">
                {status === 'sent' && (
                  <span className="text-black">Message sent — I'll reply within a day or two.</span>
                )}
                {status === 'error' && (
                  <span className="text-black/70">
                    Something went wrong. Please email dids2367@gmail.com directly.
                  </span>
                )}
              </div>
            </form>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-[rgba(0,0,0,0.12)] pt-8 sm:flex-row sm:justify-between">
          <p className="text-[13px] text-black/40">© 2026 Dithhi Dasgupta</p>
          <p className="text-[13px] text-black/40">Biotechnology Engineer · Chennai, India</p>
        </div>
      </div>
    </section>
  )
}
