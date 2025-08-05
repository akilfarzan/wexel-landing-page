'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, Check } from 'lucide-react';

const scenarios = [
  {
    before: 'Chasing paperwork, missed calls',
    after: 'AI calls & confirms pickups'
  },
  {
    before: 'Admin takes 3 hours daily',
    after: 'Admin done in 15 minutes'
  },
  {
    before: 'Job notes on paper or whiteboards',
    after: 'All digital, with photos & updates'
  },
  {
    before: 'Forgotten parts orders',
    after: 'Auto re-orders & low stock alerts'
  },
  {
    before: 'Manual invoices',
    after: 'Auto-synced to Xero'
  },
  {
    before: 'Lost customer history',
    after: 'Complete service records at fingertips'
  },
  {
    before: 'Double-handling everything',
    after: 'One system, everything connected'
  },
  {
    before: 'Working late on admin',
    after: 'Home by 5pm, stress-free'
  }
];

export default function Benefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Workshop.
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Before & After Wexel.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Emotionally picture how your life is better with Wexel. See the transformation 
            from chaos to clarity, stress to success.
          </p>
        </motion.div>

        {/* Column Headers */}
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl mb-4">
              <X className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">BEFORE WEXEL</h3>
            <p className="text-gray-600">The daily struggle</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">AFTER WEXEL</h3>
            <p className="text-gray-600">Your dream workshop</p>
          </motion.div>
        </div>

        {/* Before vs After Scenarios */}
        <div className="space-y-6">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              className="grid grid-cols-2 gap-6"
            >
              {/* Before */}
              <div className="group relative">
                <div className="h-full p-6 bg-white rounded-2xl shadow-lg border-2 border-red-100 hover:shadow-xl transition-all duration-300 hover:border-red-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 font-medium leading-relaxed">
                        {scenario.before}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="group relative">
                <div className="h-full p-6 bg-white rounded-2xl shadow-lg border-2 border-green-100 hover:shadow-xl transition-all duration-300 hover:border-green-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 font-medium leading-relaxed">
                        {scenario.after}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your workshop from chaos to clarity?
          </p>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer">
            <span>Start Your Transformation Today</span>
            <Check className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}