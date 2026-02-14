import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Truck, Settings, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    step: '01',
    title: 'Get in Touch',
    description:
      'Call us or fill out the quote form. Tell us about your property, the issue, and when you need the equipment.',
  },
  {
    icon: Settings,
    step: '02',
    title: 'We Recommend the Right Unit',
    description:
      'Based on your space and situation, we recommend the best dehumidifier and agree on a hire period that suits you.',
  },
  {
    icon: Truck,
    step: '03',
    title: 'We Deliver & Set Up',
    description:
      'We deliver the unit to your door, walk you through operation, and make sure everything is running before we leave.',
  },
  {
    icon: CheckCircle2,
    step: '04',
    title: 'Dry Property, We Collect',
    description:
      'Once the job\'s done, just give us a call. We collect the equipment — leaving you with a dry, healthy property.',
  },
]

function StepCard({ step, index, total }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Connector line (desktop) */}
      {index < total - 1 && (
        <div className="absolute top-8 left-[calc(50%+2rem)] hidden h-0.5 w-[calc(100%-4rem)] bg-gradient-to-r from-brand-300 to-brand-100 lg:block" />
      )}

      {/* Icon container */}
      <div className="relative mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 ring-1 ring-brand-100">
          <step.icon className="h-7 w-7 text-brand-500" />
        </div>
        <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white shadow-md">
          {step.step}
        </span>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-gray-800">{step.title}</h3>
      <p className="max-w-xs text-sm leading-relaxed text-gray-500">
        {step.description}
      </p>
    </motion.div>
  )
}

export default function Process() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-50px' })

  return (
    <section id="process" className="relative bg-[#f5f5f5] py-20 sm:py-28">
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
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            Four Simple Steps to a{' '}
            <span className="gradient-text">Dry Property</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-500">
            From first call to collection, we make the whole process effortless.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <StepCard
              key={step.step}
              step={step}
              index={i}
              total={steps.length}
            />
          ))}
        </div>

        {/* Dehumidifier illustration accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-14 flex justify-center"
        >
          <img
            src="/dehumidifier-small.svg"
            alt="Dehumidifier unit"
            className="h-36 w-auto opacity-40"
          />
        </motion.div>
      </div>
    </section>
  )
}
