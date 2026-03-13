import { useState } from 'react'
import { Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
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
    <main className="min-h-screen bg-[#0F1C3A] bg-grid-dark pt-32 pb-20 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-[#3DA0E4]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-[#1F4494]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16 reveal visible">
          <p className="font-bold tracking-[0.3em] uppercase text-[#3DA0E4] text-sm mb-4">
            Get in touch
          </p>
          <h1 className="text-5xl md:text-6xl font-black mb-6 gradient-text-brand">
            Let's Connect
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Have a question about Zynzi? Our team is here to help you navigate your caregiving journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Contact Info Cards (Left Side) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {[
              {
                Icon: Mail,
                title: 'Email us',
                body: 'For general enquiries and partnerships.',
                link: { href: `mailto:${WAITLIST_EMAIL}`, label: WAITLIST_EMAIL },
              },
              {
                Icon: MapPin,
                title: 'Global Presence',
                body: "Zynzi is launching in London and Sheffield. We're a remote-first team.",
                link: null,
              },
              {
                Icon: Clock,
                title: 'Response time',
                body: 'We typically respond within 24-48 business hours.',
                link: null,
              },
            ].map(({ Icon, title, body, link }, idx) => (
              <div
                key={title}
                className={`glass border-white/10 p-6 rounded-2xl flex gap-5 reveal visible reveal-delay-${idx + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1F4494] to-[#3DA0E4] flex items-center justify-center shrink-0 shadow-lg shadow-[#3DA0E4]/20">
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">{title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-2">{body}</p>
                  {link && (
                    <a
                      href={link.href}
                      className="text-[#3DA0E4] hover:text-white font-medium text-sm transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form (Right Side) */}
          <div className="lg:col-span-7">
            <div className="glass border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl reveal visible reveal-delay-2">
              <h2 className="text-2xl font-bold text-white mb-8">Send a message</h2>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 rounded-full bg-[#3DA0E4]/20 flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-10 h-10 text-[#3DA0E4]" />
                  </div>
                  <p className="text-2xl font-bold text-white">Message Received!</p>
                  <p className="text-white/60 max-w-xs">We've received your inquiry and will be in touch shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')} 
                    className="mt-6 px-8 py-3 border border-white/10 rounded-full text-white hover:bg-white/5 transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form action="contact.php" method="post" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80 ml-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-[#3DA0E4] focus:ring-4 focus:ring-[#3DA0E4]/10 transition-all placeholder:text-white/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80 ml-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-[#3DA0E4] focus:ring-4 focus:ring-[#3DA0E4]/10 transition-all placeholder:text-white/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 ml-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="How can we help?"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-[#3DA0E4] focus:ring-4 focus:ring-[#3DA0E4]/10 transition-all placeholder:text-white/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 ml-1">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Share your thoughts with us..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-[#3DA0E4] focus:ring-4 focus:ring-[#3DA0E4]/10 transition-all placeholder:text-white/20 resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full group bg-gradient-to-r from-[#1F4494] to-[#3DA0E4] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#1F4494]/30 hover:shadow-[#3DA0E4]/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}