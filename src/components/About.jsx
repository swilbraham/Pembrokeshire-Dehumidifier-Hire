import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Award, Users, Clock } from 'lucide-react'

const credentials = [
  {
    icon: MapPin,
    title: 'Locally Based',
    description: 'Operated from the heart of Pembrokeshire — we know the area and the climate inside out.',
  },
  {
    icon: Award,
    title: 'Fully Insured & PAT Tested',
    description: 'All equipment is PAT-tested, fully insured, and compliant with UK health & safety standards.',
  },
  {
    icon: Users,
    title: 'Residential & Commercial',
    description: 'From single-room flats to large commercial warehouses, we have the right solution for every space.',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'We understand moisture emergencies. Same-day delivery is available for urgent situations across the county.',
  },
]

function CredentialCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50">
        <item.icon className="h-5 w-5 text-brand-500" />
      </div>
      <h3 className="mb-1.5 text-sm font-semibold text-gray-800">{item.title}</h3>
      <p className="text-xs leading-relaxed text-gray-500">{item.description}</p>
    </motion.div>
  )
}

export default function About() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-50px' })

  return (
    <section id="about" className="relative bg-[#f5f5f5] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Room illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg"
        >
          <img
            src="/dehumidifier-room.svg"
            alt="Dehumidifier working in a damp room removing moisture from walls"
            className="h-auto w-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: text */}
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, x: -40 }}
            animate={headingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-500">
              About Us
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Pembrokeshire's Trusted{' '}
              <span className="gradient-text">Damp & Moisture Specialists</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-500">
              We started Pembrokeshire Dehumidifier Hire because we saw a simple problem:
              when properties flood or suffer from damp, people need powerful drying equipment
              fast — not in two weeks from a national chain.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              As a local business, we deliver commercial-grade dehumidifiers directly to your
              door anywhere in Pembrokeshire. We provide straightforward advice, fair pricing,
              and equipment that actually gets the job done. No jargon, no call centres —
              just a reliable local service you can count on.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#quote"
                className="inline-flex items-center rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/25"
              >
                Get a Quote
              </a>
              <a
                href="tel:07824536685"
                className="text-sm font-medium text-brand-500 transition-colors hover:text-brand-600"
              >
                Or call 07824 536 685 →
              </a>
            </div>
          </motion.div>

          {/* Right: credential cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {credentials.map((item, i) => (
              <CredentialCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
