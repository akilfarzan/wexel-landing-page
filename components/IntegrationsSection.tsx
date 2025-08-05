'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const integrationLogos = [
  {
    name: 'Xero',
    src: '/xero.svg',
    alt: 'Xero Accounting Integration'
  },
  {
    name: 'MYOB',
    src: '/myob-2.svg',
    alt: 'MYOB Accounting Integration'
  },
  {
    name: 'Haynes Pro',
    src: '/haynesPro.png',
    alt: 'Haynes Pro Integration'
  },
  {
    name: 'Repco',
    src: '/repco.png',
    alt: 'Repco Parts Integration'
  },
  {
    name: 'Burson',
    src: '/bursonautoparts.png',
    alt: 'Burson Auto Parts Integration'
  },
  {
    name: 'TireConnect',
    src: '/tireconnect.png',
    alt: 'TireConnect Integration'
  },
  {
    name: 'VV Garage',
    src: '/vvgarage.png',
    alt: 'VV Garage Integration'
  },
  {
    name: 'Outlook',
    src: '/outlook-logo.png',
    alt: 'Email Service Integration'
  },
  {
    name: 'QuickBooks',
    src: '/quickbooks.svg',
    alt: 'QuickBooks Integration'
  },
  {
    name: 'HSY',
    src: '/hsy.svg',
    alt: 'HSY Integration'
  }
];

export default function IntegrationsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="integrations" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Works Seamlessly With the
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tools You Work With
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto italic">
            Wexel connects instantly to your existing software — from accounting and parts ordering 
            to SMS and payments — so you never have to double-handle anything again.
          </p>
        </motion.div>

        {/* Scrolling Logos */}
        <div className="relative w-full overflow-hidden py-8">
          <div className="flex w-max animate-scroll-left">
            {[...integrationLogos, ...integrationLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[200px] h-[100px] mr-8 group relative"
              >
                <div className="h-full bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center p-4">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain hover:grayscale-0 transition-all duration-300"
                  />
                  {/* Logo name overlay on hover */}
                  <div className="absolute inset-0 bg-black/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{logo.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg">
            <span className="font-semibold">Plus 50+ more integrations</span> — and if we don't have what you need, 
            we'll build it for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}