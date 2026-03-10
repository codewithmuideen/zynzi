import { useState } from 'react'
import { Mail, MapPin, Clock } from 'lucide-react'
import { WAITLIST_EMAIL } from '../constants'

export default function Contact() {
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    setStatus('loading')
    try {
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    form.name.value,
          email:   form.email.value,
          subject: form.subject.value,
          message: form.message.value,
        }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <main className="min-h-screen bg-brand-cream pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-roboto text-xs font-bold tracking-[0.2em] uppercase text-brand-sky mb-4">
            Get in touch
          </p>
          <h1 className="font-roboto font-black text-brand-text text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="font-roboto font-light text-brand-body text-lg leading-relaxed max-w-md mx-auto">
            Have a question, partnership enquiry, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact form */}
          <div className="bg-white rounded-2xl border border-brand-border p-8 shadow-brand-sm">
            <h2 className="font-roboto font-bold text-brand-text text-xl mb-6">Send a message</h2>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-roboto font-bold text-brand-text">Message sent!</p>
                <p className="font-roboto font-light text-brand-body text-sm">We'll get back to you within 1-2 business days.</p>
                <button onClick={() => setStatus('idle')} className="mt-2 text-sm text-brand-sky hover:underline font-roboto">Send another</button>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="font-roboto text-sm font-medium text-brand-text block mb-1.5">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Smith"
                  className="w-full font-roboto text-sm text-brand-text bg-brand-cream border border-brand-border rounded-xl px-4 py-3 outline-none focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/10 transition-all placeholder:text-brand-muted"
                />
              </div>
              <div>
                <label className="font-roboto text-sm font-medium text-brand-text block mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full font-roboto text-sm text-brand-text bg-brand-cream border border-brand-border rounded-xl px-4 py-3 outline-none focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/10 transition-all placeholder:text-brand-muted"
                />
              </div>
              <div>
                <label className="font-roboto text-sm font-medium text-brand-text block mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="How can we help?"
                  className="w-full font-roboto text-sm text-brand-text bg-brand-cream border border-brand-border rounded-xl px-4 py-3 outline-none focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/10 transition-all placeholder:text-brand-muted"
                />
              </div>
              <div>
                <label className="font-roboto text-sm font-medium text-brand-text block mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us more..."
                  className="w-full font-roboto text-sm text-brand-text bg-brand-cream border border-brand-border rounded-xl px-4 py-3 outline-none focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/10 transition-all placeholder:text-brand-muted resize-none"
                />
              </div>
              {status === 'error' && (
                <p className="font-roboto text-sm text-red-500">Something went wrong. Please try again.</p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-brand text-white font-roboto font-bold text-sm py-3.5 rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(59,130,246,0.35)] transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            {[
              {
                Icon: Mail,
                title: 'Email us',
                body: 'For general enquiries, partnerships, and press.',
                link: { href: `mailto:${WAITLIST_EMAIL}`, label: WAITLIST_EMAIL },
              },
              {
                Icon: MapPin,
                title: 'Where we are',
                body: "Zynzi is launching in London and Sheffield. We're a fully remote team.",
                link: null,
              },
              {
                Icon: Clock,
                title: 'Response time',
                body: 'We aim to reply to all messages within 1-2 business days.',
                link: null,
              },
            ].map(({ Icon, title, body, link }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-brand-border p-6 flex gap-4 shadow-brand-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-roboto font-bold text-brand-text text-sm mb-1">{title}</h3>
                  <p className="font-roboto font-light text-brand-body text-sm leading-relaxed">{body}</p>
                  {link && (
                    <a
                      href={link.href}
                      className="font-roboto text-sm text-brand-sky hover:text-brand-navy font-medium mt-1 inline-block transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
