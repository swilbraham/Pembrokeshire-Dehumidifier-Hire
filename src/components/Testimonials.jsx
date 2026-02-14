import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Haverfordwest',
    role: 'Homeowner',
    rating: 5,
    text: 'After a burst pipe flooded our kitchen, we were in a panic. They delivered a dehumidifier the same afternoon and it made an incredible difference. The walls were dry within a week. Brilliant local service.',
  },
  {
    name: 'James R.',
    location: 'Milford Haven',
    role: 'Landlord',
    rating: 5,
    text: 'I manage several rental properties and use this service regularly for damp issues between tenancies. Reliable, fairly priced, and they always deliver on time. Wouldn\'t go anywhere else.',
  },
  {
    name: 'Owain D.',
    location: 'Narberth',
    role: 'Building Contractor',
    rating: 5,
    text: 'We use their dehumidifiers on every new build for the drying-out phase. The commercial units are powerful and well-maintained. They understand the construction timeline and work around us.',
  },
  {
    name: 'Helen T.',
    location: 'Tenby',
    role: 'Holiday Let Owner',
    rating: 5,
    text: 'Our cottage had terrible condensation over winter. One week with their dehumidifier and it was transformed. They even advised us on preventing future damp. Excellent service from start to finish.',
  },
  {
    name: 'Mark P.',
    location: 'Pembroke Dock',
    role: 'Business Owner',
    rating: 5,
    text: 'Our warehouse took in water during the winter storms. They had two industrial units to us by the next morning. Saved us thousands in potential stock damage. Can\'t recommend them enough.',
  },
  {
    name: 'Catherine L.',
    location: 'St Davids',
    role: 'Homeowner',
    rating: 5,
    text: 'Living on the coast means constant battle with damp. We hire a dehumidifier every autumn and the team are always friendly, prompt, and professional. Great value for money.',
  },
]

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

      {/* Stars */}
      <div className="mb-4 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      <p className="mb-6 text-sm leading-relaxed text-gray-600">
        "{testimonial.text}"
      </p>

      <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-800">{testimonial.name}</div>
          <div className="text-xs text-gray-400">
            {testimonial.role} · {testimonial.location}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-50px' })

  return (
    <section id="testimonials" className="relative bg-white py-20 sm:py-28">
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
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            Trusted by Homes & Businesses{' '}
            <span className="gradient-text">Across the County</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-500">
            Don't just take our word for it — hear from customers who've used our service.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={i}
            />
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-8 rounded-2xl bg-brand-50 border border-brand-100 px-8 py-6"
        >
          {[
            { value: '500+', label: 'Hires Completed' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '98%', label: 'Would Recommend' },
            { value: '10+', label: 'Years Experience' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-brand-700">{value}</div>
              <div className="text-xs font-medium text-gray-500">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
