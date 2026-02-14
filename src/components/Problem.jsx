import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertTriangle, Droplets, ThermometerSun, Bug } from 'lucide-react'

const problems = [
  {
    icon: Droplets,
    title: 'Rising Damp & Condensation',
    description:
      'Persistent moisture seeps into walls and floors, weakening structures and leaving unsightly stains that worsen over time.',
  },
  {
    icon: AlertTriangle,
    title: 'Flood & Leak Damage',
    description:
      'After a flood or burst pipe, standing water and trapped moisture can cause irreversible damage within 48 hours if not addressed.',
  },
  {
    icon: Bug,
    title: 'Mould & Health Risks',
    description:
      'Excess moisture creates breeding grounds for mould and mildew — triggering allergies, respiratory issues, and compromising indoor air quality.',
  },
  {
    icon: ThermometerSun,
    title: 'Post-Build Dry-Out',
    description:
      'New builds and renovation projects trap thousands of litres of moisture in plaster, concrete, and timber that must be dried before finishing.',
  },
]

function ProblemCard({ problem, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl bg-white p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-red-100"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500 transition-colors group-hover:bg-red-100">
        <problem.icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-800">{problem.title}</h3>
      <p className="text-sm leading-relaxed text-gray-500">{problem.description}</p>
    </motion.div>
  )
}

export default function Problem() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-50px' })

  return (
    <section className="relative bg-[#f5f5f5] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-red-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-500">
            The Problem
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            Moisture Doesn't Wait.{' '}
            <span className="text-gray-400">Neither Should You.</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-500">
            Whether it's a flooded property, persistent damp, or a new-build that needs
            drying out — unchecked moisture causes thousands of pounds in damage and
            serious health risks.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, i) => (
            <ProblemCard key={problem.title} problem={problem} index={i} />
          ))}
        </div>

        {/* Urgency bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-12 max-w-2xl rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center"
        >
          <p className="text-sm font-medium text-amber-800">
            <strong>Every hour counts.</strong>{' '}
            Professional dehumidifiers extract up to 50 litres per day — domestic units
            can't compete. Act fast to protect your property.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
