import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Zap,
  Truck,
  PoundSterling,
  Wrench,
  Gauge,
  HeadphonesIcon,
} from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Commercial-Grade Power',
    description:
      'Our units extract up to 70 litres per day — 10x more effective than consumer models. Faster drying means less disruption.',
    stat: '70L/day',
    statLabel: 'extraction rate',
  },
  {
    icon: Truck,
    title: 'Free Delivery & Collection',
    description:
      'We deliver directly to your property anywhere in Pembrokeshire and collect when you\'re done. No extra charges, no hassle.',
    stat: 'Free',
    statLabel: 'delivery & pickup',
  },
  {
    icon: PoundSterling,
    title: 'Affordable Daily Rates',
    description:
      'Hiring is a fraction of the cost of buying. Flexible daily and weekly rates with no hidden fees. Pay only for what you need.',
    stat: 'From £25',
    statLabel: 'per day',
  },
  {
    icon: Wrench,
    title: 'Fully Maintained & Serviced',
    description:
      'Every unit is professionally maintained, PAT-tested, and cleaned before each hire. Reliable performance guaranteed.',
    stat: '100%',
    statLabel: 'PAT tested',
  },
  {
    icon: Gauge,
    title: 'Expert Guidance',
    description:
      'Not sure what you need? We assess your situation and recommend the right unit for your space. Free advice with every enquiry.',
    stat: 'Free',
    statLabel: 'site assessment',
  },
  {
    icon: HeadphonesIcon,
    title: 'Local & Responsive',
    description:
      'Based in Pembrokeshire, we understand the local climate and respond quickly. Same-day delivery available for urgent situations.',
    stat: 'Same Day',
    statLabel: 'available',
  },
]

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
      {/* Stat badge */}
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

export default function Benefits() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-50px' })

  return (
    <section id="benefits" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
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
          <p className="mt-4 text-lg leading-relaxed text-gray-500">
            Professional equipment, local expertise, and hassle-free service —
            so you can focus on getting back to normal.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
