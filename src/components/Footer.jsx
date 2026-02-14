import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const towns = [
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
    'Whitland',
    'Johnston',
  ]

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#">
              <img
                src="/logo-color.png"
                alt="Pembrokeshire Dehumidifier Hire"
                className="h-auto w-44"
              />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Professional dehumidifier hire for residential and commercial properties
              across Pembrokeshire. Fast delivery, fair pricing, expert advice.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Contact
            </h3>
            <div className="space-y-3">
              <a href="tel:07824536685" className="flex items-center gap-3 text-sm text-gray-500 transition-colors hover:text-brand-500">
                <Phone className="h-4 w-4 text-brand-500" />
                07824 536 685
              </a>
              <a href="mailto:pembsdehuhire@outlook.com" className="flex items-center gap-3 text-sm text-gray-500 transition-colors hover:text-brand-500">
                <Mail className="h-4 w-4 text-brand-500" />
                pembsdehuhire@outlook.com
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <MapPin className="h-4 w-4 text-brand-500" />
                Pembrokeshire, West Wales
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Quick Links
            </h3>
            <div className="space-y-2.5">
              {[
                { label: 'Why Choose Us', href: '#benefits' },
                { label: 'How It Works', href: '#process' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'About Us', href: '#about' },
                { label: 'Water Removal', href: '#water-removal' },
                { label: 'Get a Quote', href: '#quote' },
                { label: 'Pembrokeshire Carpet Cleaners', href: 'https://www.pembrokeshirecarpetcleaners.co.uk', external: true },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="block text-sm text-gray-500 transition-colors hover:text-brand-500"
                >
                  {link.label} {link.external && '↗'}
                </a>
              ))}
            </div>
          </div>

          {/* Areas we cover */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Areas We Cover
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {towns.map((town) => (
                <span
                  key={town}
                  className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-500"
                >
                  {town}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row">
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
  )
}
