import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Waves, ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Droplets } from 'lucide-react'

const steps = [
  {
    icon: Droplets,
    title: 'We Dry the Air & Structure',
    description:
      'Our commercial dehumidifiers pull moisture from walls, floors, and the air — tackling the root cause of water damage.',
  },
  {
    icon: Waves,
    title: 'Carpets Cleaned & Restored',
    description:
      'Once dried, Pembrokeshire Carpet Cleaners use professional hot-water extraction to deep-clean and restore water-damaged carpets and upholstery.',
  },
  {
    icon: Sparkles,
    title: 'Fully Restored Property',
    description:
      'Together, we handle the complete water damage recovery — from structural drying to carpet restoration — getting your property back to normal.',
  },
]

function StepCard({ step, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex gap-5 rounded-2xl bg-[#f5f5f5] p-6 border border-gray-100"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50">
        <step.icon className="h-6 w-6 text-brand-500" />
      </div>
      <div>
        <div className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-brand-500">
          Step {index + 1}
        </div>
        <h3 className="mb-1.5 text-base font-semibold text-gray-800">{step.title}</h3>
        <p className="text-sm leading-relaxed text-gray-500">{step.description}</p>
      </div>
    </motion.div>
  )
}

export default function WaterRemoval() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-50px' })

  return (
    <section id="water-removal" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: content */}
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, x: -40 }}
            animate={headingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-500">
              Complete Water Damage Solution
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Water Damaged Carpets?{' '}
              <span className="gradient-text">We Work With the Best</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-500">
              Drying out a property is only half the battle. Flood and leak damage often leaves
              carpets, rugs, and upholstery soaked, stained, and harbouring bacteria. That's why
              we work alongside <strong className="text-gray-700">Pembrokeshire Carpet Cleaners</strong> to
              offer a complete water damage recovery service.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              Once our dehumidifiers have done their job drying the structure, Pembrokeshire
              Carpet Cleaners step in with professional-grade hot-water extraction equipment
              to deep-clean and restore your carpets and upholstery — removing trapped moisture,
              stains, bacteria, and odours.
            </p>

            <div className="mt-6 space-y-3">
              {[
                'Professional hot-water extraction cleaning',
                'Stain and odour removal from flood damage',
                'Safe for all carpet types and upholstery',
                'Fully trained, insured, and locally based',
                'Products safe for children and pets',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://www.pembrokeshirecarpetcleaners.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/25"
              >
                Visit Pembrokeshire Carpet Cleaners
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:07824536685"
                className="text-sm font-medium text-brand-500 transition-colors hover:text-brand-600"
              >
                Call us for both services →
              </a>
            </div>
          </motion.div>

          {/* Right: process cards */}
          <div className="space-y-5">
            {steps.map((step, i) => (
              <StepCard key={step.title} step={step} index={i} />
            ))}

            {/* Partner card */}
            <motion.a
              href="https://www.pembrokeshirecarpetcleaners.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group flex items-center gap-4 rounded-2xl bg-brand-500 p-6 transition-all hover:bg-brand-600"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-white">
                  Pembrokeshire Carpet Cleaners
                </div>
                <div className="text-xs text-white/80">
                  #1 Carpet & Upholstery Cleaning Pembrokeshire
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-white/70 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
