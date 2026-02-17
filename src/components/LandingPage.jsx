import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight, MapPin, Clock, Shield, Phone,
  Zap, Truck, PoundSterling, HeadphonesIcon,
  Settings, CheckCircle2,
  Star, Quote,
  Send, Mail,
} from 'lucide-react'

/* ── Data ───────────────────────────────────────────── */

const benefits = [
  {
    icon: Zap,
    title: 'Commercial-Grade Power',
    description: 'Units extract up to 70 litres per day — 10x more effective than consumer models.',
    stat: '70L/day',
    statLabel: 'extraction rate',
  },
  {
    icon: Truck,
    title: 'Free Delivery & Collection',
    description: 'We deliver anywhere in Pembrokeshire and collect when you\'re done. No extra charges.',
    stat: 'Free',
    statLabel: 'delivery & pickup',
  },
  {
    icon: PoundSterling,
    title: 'Affordable Daily Rates',
    description: 'Flexible daily and weekly rates with no hidden fees. Pay only for what you need.',
    stat: 'From £25',
    statLabel: 'per day',
  },
  {
    icon: HeadphonesIcon,
    title: 'Local & Responsive',
    description: 'Based in Pembrokeshire — we understand the local climate and respond quickly.',
    stat: 'Same Day',
    statLabel: 'available',
  },
]

const steps = [
  { icon: Phone, label: 'Call or enquire' },
  { icon: Settings, label: 'We recommend' },
  { icon: Truck, label: 'We deliver' },
  { icon: CheckCircle2, label: 'We collect' },
]

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Haverfordwest',
    role: 'Homeowner',
    text: 'After a burst pipe flooded our kitchen, we were in a panic. They delivered a dehumidifier the same afternoon and it made an incredible difference. Brilliant local service.',
  },
  {
    name: 'James R.',
    location: 'Milford Haven',
    role: 'Landlord',
    text: 'I manage several rental properties and use this service regularly for damp issues between tenancies. Reliable, fairly priced, and they always deliver on time.',
  },
  {
    name: 'Owain D.',
    location: 'Narberth',
    role: 'Building Contractor',
    text: 'We use their dehumidifiers on every new build for the drying-out phase. The commercial units are powerful and well-maintained. They understand the construction timeline.',
  },
]

const trustStats = [
  { value: '500+', label: 'Hires Completed' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '98%', label: 'Would Recommend' },
  { value: '10+', label: 'Years Experience' },
]

const towns = [
  'Haverfordwest', 'Milford Haven', 'Pembroke', 'Pembroke Dock',
  'Narberth', 'Tenby', 'St Davids', 'Fishguard', 'Goodwick',
  'Saundersfoot', 'Neyland', 'Kilgetty', 'Crymych', 'Newport',
  'Letterston', 'Clarbeston Road', 'Whitland', 'Johnston',
]

/* ── Sub-components ─────────────────────────────────── */

function BenefitCard({ benefit, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-brand-100"
    >
      <div className="absolute top-4 right-4 text-right">
        <div className="text-lg font-bold text-brand-500">{benefit.stat}</div>
        <div className="text-[11px] font-medium text-gray-400">{benefit.statLabel}</div>
      </div>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors group-hover:bg-brand-100">
        <benefit.icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-800">{benefit.title}</h3>
      <p className="text-sm leading-relaxed text-gray-500 pr-8">{benefit.description}</p>
    </motion.div>
  )
}

function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative rounded-2xl bg-white p-6 shadow-sm border border-gray-100"
    >
      <Quote className="absolute top-4 right-4 h-8 w-8 text-brand-100" />
      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="mb-6 text-sm leading-relaxed text-gray-600">"{testimonial.text}"</p>
      <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-800">{testimonial.name}</div>
          <div className="text-xs text-gray-400">{testimonial.role} · {testimonial.location}</div>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Main Component ─────────────────────────────────── */

export default function LandingPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const whyUsRef = useRef(null)
  const whyUsInView = useInView(whyUsRef, { once: true, margin: '-50px' })

  const reviewsRef = useRef(null)
  const reviewsInView = useInView(reviewsRef, { once: true, margin: '-50px' })

  const quoteRef = useRef(null)
  const quoteInView = useInView(quoteRef, { once: true, margin: '-50px' })

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
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  const inputClasses =
    'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500'

  const heroStats = [
    { icon: MapPin, label: 'Covering all of Pembrokeshire' },
    { icon: Clock, label: 'Same-day delivery available' },
    { icon: Shield, label: 'Commercial-grade equipment' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 pt-20">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 sm:pt-16 sm:pb-24 lg:px-8 lg:pt-20 lg:pb-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
              >
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-white/90">Trusted across Pembrokeshire</span>
              </motion.div>

              <motion.img
                src="/logo-light.png"
                alt="Pembrokeshire Dehumidifier Hire"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mb-6 h-auto w-48 sm:w-56 md:w-60"
              />

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl"
              >
                Professional Dehumidifier Hire Across Pembrokeshire
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg"
              >
                Damp walls? Flood damage? Post-build dry-out? We deliver commercial-grade
                dehumidifiers to your door — residential or commercial, short or long term.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
              >
                <a
                  href="tel:07824536685"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-brand-700 shadow-xl shadow-black/10 transition-all hover:bg-brand-50 hover:shadow-2xl"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: 07824 536 685
                </a>
                <a
                  href="#quote"
                  className="group inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative hidden lg:flex lg:items-center lg:justify-center"
            >
              <img
                src="/dehumidifier1.png"
                alt="Commercial dehumidifier unit"
                className="h-auto w-full max-w-sm rounded-2xl drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-14 grid w-full max-w-4xl mx-auto grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {heroStats.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-3 rounded-xl bg-white/10 px-5 py-4 backdrop-blur-sm">
                <Icon className="h-5 w-5 shrink-0 text-brand-200" />
                <span className="text-sm font-medium text-white/90">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Urgency line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 mx-auto max-w-3xl text-center rounded-xl bg-amber-400/15 px-6 py-3 backdrop-blur-sm"
          >
            <p className="text-sm font-medium text-white/90">
              Damp walls. Flood damage. Mould growth. Post-build moisture —{' '}
              <span className="text-amber-300 font-semibold">every hour of delay causes more damage.</span>
            </p>
          </motion.div>
        </div>

        {/* Wave */}
        <div className="relative h-16">
          <svg viewBox="0 0 1440 64" fill="none" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0 32L48 26.7C96 21 192 11 288 16C384 21 480 43 576 48C672 53 768 43 864 37.3C960 32 1056 32 1152 34.7C1248 37 1344 43 1392 45.3L1440 48V64H0V32Z" fill="#ffffff"/>
          </svg>
        </div>
      </section>

      {/* ════════ WHY US (Benefits + Process) ════════ */}
      <section id="why-us" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={whyUsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-500">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Everything You Need to{' '}
              <span className="gradient-text">Dry Out Fast</span>
            </h2>
          </motion.div>

          {/* Benefits grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => (
              <BenefitCard key={benefit.title} benefit={benefit} index={i} />
            ))}
          </div>

          {/* How it works strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 rounded-2xl bg-brand-50 border border-brand-100 px-6 py-5"
          >
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-brand-500">How It Works</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {steps.map(({ icon: Icon, label }, i) => (
                <div key={label} className="flex items-center justify-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                    {i + 1}
                  </div>
                  <Icon className="h-4 w-4 text-brand-500" />
                  <span className="text-sm font-medium text-gray-700">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Equipment showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <img
              src="/dehumidifier2.png"
              alt="Commercial dehumidifier in warehouse setting"
              className="h-auto w-full max-w-2xl rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* ════════ REVIEWS ════════ */}
      <section id="reviews" className="bg-[#f5f5f5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={reviewsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-500">
              Testimonials
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Trusted by Homes & Businesses{' '}
              <span className="gradient-text">Across the County</span>
            </h2>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-8 rounded-2xl bg-white border border-gray-100 px-8 py-5"
          >
            {trustStats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-brand-700">{value}</div>
                <div className="text-xs font-medium text-gray-500">{label}</div>
              </div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════ GET A QUOTE ════════ */}
      <section id="quote" className="relative bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 py-16 sm:py-20">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <div ref={quoteRef} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={quoteInView ? { opacity: 1, x: 0 } : {}}
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
                    <div className="text-base font-semibold text-white">All of Pembrokeshire</div>
                  </div>
                </div>
              </div>

              {/* About + Partner callout */}
              <div className="mt-10 space-y-3">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-sm leading-relaxed text-white/80">
                    We're a local Pembrokeshire business delivering commercial-grade dehumidifiers to your door.
                    Fully insured, PAT-tested equipment with free delivery and expert advice.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-sm leading-relaxed text-white/80">
                    Water damaged carpets?{' '}
                    <a
                      href="https://www.pembrokeshirecarpetcleaners.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-white underline decoration-white/40 hover:decoration-white transition-colors"
                    >
                      Pembrokeshire Carpet Cleaners ↗
                    </a>{' '}
                    can restore your carpets and upholstery after water damage.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={quoteInView ? { opacity: 1, x: 0 } : {}}
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
                      We'll review your details and get back to you within 2 hours during business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="_subject" value="New Dehumidifier Hire Quote Request" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="text" name="_honey" style={{ display: 'none' }} />

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-gray-500">Full Name *</label>
                        <input type="text" id="name" name="name" required placeholder="John Smith" className={inputClasses} />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-gray-500">Phone Number *</label>
                        <input type="tel" id="phone" name="phone" required placeholder="07123 456 789" className={inputClasses} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-gray-500">Email Address</label>
                      <input type="email" id="email" name="email" placeholder="john@example.com" className={inputClasses} />
                    </div>

                    <div>
                      <label htmlFor="location" className="mb-1.5 block text-xs font-medium text-gray-500">Location / Town *</label>
                      <input type="text" id="location" name="location" required placeholder="e.g. Haverfordwest" className={inputClasses} />
                    </div>

                    <div>
                      <label htmlFor="type" className="mb-1.5 block text-xs font-medium text-gray-500">Property Type</label>
                      <select id="type" name="type" className={inputClasses}>
                        <option value="">Select type...</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="new-build">New Build / Renovation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-gray-500">Tell Us About Your Situation *</label>
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

      {/* ════════ FOOTER ════════ */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Brand + contact */}
            <div>
              <a href="#">
                <img src="/logo-color.png" alt="Pembrokeshire Dehumidifier Hire" className="h-auto w-44" />
              </a>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
                Professional dehumidifier hire for residential and commercial properties across Pembrokeshire.
              </p>
              <div className="mt-5 space-y-2.5">
                <a href="tel:07824536685" className="flex items-center gap-3 text-sm text-gray-500 transition-colors hover:text-brand-500">
                  <Phone className="h-4 w-4 text-brand-500" /> 07824 536 685
                </a>
                <a href="mailto:pembsdehuhire@outlook.com" className="flex items-center gap-3 text-sm text-gray-500 transition-colors hover:text-brand-500">
                  <Mail className="h-4 w-4 text-brand-500" /> pembsdehuhire@outlook.com
                </a>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <MapPin className="h-4 w-4 text-brand-500" /> Pembrokeshire, West Wales
                </div>
              </div>
              <a
                href="https://www.pembrokeshirecarpetcleaners.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-brand-500 hover:text-brand-600 transition-colors"
              >
                Pembrokeshire Carpet Cleaners ↗
              </a>
            </div>

            {/* Areas we cover */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                Areas We Cover
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {towns.map((town) => (
                  <span key={town} className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                    {town}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row">
            <p className="text-xs text-gray-400">
              &copy; {currentYear} Pembrokeshire Dehumidifier Hire. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-400">
              <a href="#" className="transition-colors hover:text-gray-600">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-gray-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
