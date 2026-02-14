import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Clock, Shield, Phone } from 'lucide-react'

export default function Hero() {
  const stats = [
    { icon: MapPin, label: 'Covering all of Pembrokeshire' },
    { icon: Clock, label: 'Same-day delivery available' },
    { icon: Shield, label: 'Commercial-grade equipment' },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 pt-20">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 sm:pt-16 sm:pb-24 lg:px-8 lg:pt-20 lg:pb-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-white/90">
                Trusted across Pembrokeshire
              </span>
            </motion.div>

            {/* Logo */}
            <motion.img
              src="/logo-light.png"
              alt="Pembrokeshire Dehumidifier Hire"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-6 h-auto w-48 sm:w-56 md:w-60"
            />

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Professional Dehumidifier Hire Across Pembrokeshire
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg"
            >
              Damp walls? Flood damage? Post-build dry-out? We deliver commercial-grade
              dehumidifiers to your door — residential or commercial, short or long term.
            </motion.p>

            {/* CTA */}
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

          {/* Right: Dehumidifier image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative hidden lg:flex lg:items-center lg:justify-center"
          >
            <img
              src="/dehumidifier-hero.svg"
              alt="Commercial dehumidifier unit"
              className="h-auto w-full max-w-md drop-shadow-2xl"
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
          {stats.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 rounded-xl bg-white/10 px-5 py-4 backdrop-blur-sm"
            >
              <Icon className="h-5 w-5 shrink-0 text-brand-200" />
              <span className="text-sm font-medium text-white/90">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Towns */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs font-medium"
        >
          <span className="text-white/60">Serving:</span>
          {[
            'Haverfordwest',
            'Milford Haven',
            'Pembroke',
            'Pembroke Dock',
            'Narberth',
            'Tenby',
            'St Davids',
            'Fishguard',
            'Goodwick',
            'Saundersfoot',
            'Neyland',
            'Kilgetty',
            'Crymych',
            'Newport',
            'Letterston',
            'Clarbeston Road',
          ].map((town) => (
            <span
              key={town}
              className="rounded-md bg-white/10 px-2.5 py-1 text-white/70"
            >
              {town}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="relative h-16">
        <svg viewBox="0 0 1440 64" fill="none" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0 32L48 26.7C96 21 192 11 288 16C384 21 480 43 576 48C672 53 768 43 864 37.3C960 32 1056 32 1152 34.7C1248 37 1344 43 1392 45.3L1440 48V64H0V32Z" fill="#f5f5f5"/>
        </svg>
      </div>
    </section>
  )
}
