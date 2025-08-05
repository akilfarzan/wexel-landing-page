'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const integrationLogos = [
  {
    name: 'Xero',
    src: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    alt: 'Xero Accounting Integration'
  },
  {
    name: 'MYOB',
    src: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    alt: 'MYOB Accounting Integration'
  },
  {
    name: 'Haynes Pro',
    src: 'public/haynesPro.png',
    alt: 'Haynes Pro Integration'
  },
  {
    name: 'Repco',
    src: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    alt: 'Repco Parts Integration'
  },
  {
    name: 'Burson',
    src: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    alt: 'Burson Auto Parts Integration'
  },
  {
    name: 'TireConnect',
    src: 'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    alt: 'TireConnect Integration'
  },
  {
    name: 'SMS Gateway',
    src: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    alt: 'SMS Gateway Integration'
  },
  {
    name: 'Outlook',
    src: '/outlook-logo.png',
    alt: 'Email Service Integration'
  },
  {
    name: 'QuickBooks',
    src: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    alt: 'QuickBooks Integration'
  },
  {
    name: 'PayPal',
    src: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
    alt: 'PayPal Integration'
  }
];

export default function IntegrationsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
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
              Tools You Already Use
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
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
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