import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react'

export default function CTA() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    const formData = new FormData(e.target)

    try {
      await fetch('https://formsubmit.co/ajax/pembsdehuhire@outlook.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      })
      setSubmitted(true)
    } catch {
      // Still show success — FormSubmit may redirect
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  const inputClasses =
    'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500'

  return (
    <section id="quote" className="relative bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 py-20 sm:py-28">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div ref={sectionRef} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
              Get a Quote
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Dry Out Your Property?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Tell us about your situation and we'll recommend the right equipment,
              give you a clear price, and arrange delivery at a time that works for you.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-medium text-white/60">Call us</div>
                  <a href="tel:07824536685" className="text-base font-semibold text-white hover:text-brand-200 transition-colors">
                    07824 536 685
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-medium text-white/60">Email us</div>
                  <a href="mailto:pembsdehuhire@outlook.com" className="text-base font-semibold text-white hover:text-brand-200 transition-colors">
                    pembsdehuhire@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-medium text-white/60">Service area</div>
                  <div className="text-base font-semibold text-white">
                    All of Pembrokeshire
                  </div>
                </div>
              </div>
            </div>

            {/* Quick promise */}
            <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-200" />
                <div>
                  <div className="text-sm font-semibold text-white">No obligation quote</div>
                  <div className="mt-1 text-xs leading-relaxed text-white/70">
                    We'll get back to you within 2 hours during business hours with a
                    clear quote. No pressure, no hidden fees.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="rounded-2xl bg-white p-8 shadow-2xl shadow-black/10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Quote Request Sent!</h3>
                  <p className="mt-2 max-w-xs text-sm text-gray-500">
                    We'll review your details and get back to you within 2 hours during
                    business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* FormSubmit config */}
                  <input type="hidden" name="_subject" value="New Dehumidifier Hire Quote Request" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="text" name="_honey" style={{ display: 'none' }} />

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-gray-500">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Smith"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-gray-500">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="07123 456 789"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-gray-500">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="mb-1.5 block text-xs font-medium text-gray-500">
                      Location / Town *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      placeholder="e.g. Haverfordwest"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="type" className="mb-1.5 block text-xs font-medium text-gray-500">
                      Property Type
                    </label>
                    <select
                      id="type"
                      name="type"
                      className={inputClasses}
                    >
                      <option value="">Select type...</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="new-build">New Build / Renovation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-gray-500">
                      Tell Us About Your Situation *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Describe the issue — e.g. flooded kitchen, persistent damp in bedroom, new build drying..."
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/25 disabled:opacity-60"
                  >
                    <Send className="h-4 w-4" />
                    {submitting ? 'Sending...' : 'Send Quote Request'}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    No obligation. We'll respond within 2 hours during business hours.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
