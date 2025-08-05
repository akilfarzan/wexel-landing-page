'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Wrench, Truck, CheckCircle, ArrowRight } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery Consult',
    description: 'We understand your business, automation, and logistical flow needs',
    color: 'from-blue-500 to-blue-600'
  },
  {
    number: '02',
    icon: Wrench,
    title: 'We Build Your Dream Workshop',
    description: 'First month\'s subscription fee is paid as a deposit',
    color: 'from-purple-500 to-purple-600'
  },
  {
    number: '03',
    icon: Truck,
    title: 'Delivery Within 72hrs',
    description: 'Final product delivered and ready for your review',
    color: 'from-orange-500 to-orange-600'
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Billing Starts',
    description: 'Once you\'re 100% happy with it, billing starts for the 1st month',
    color: 'from-green-500 to-green-600'
  }
];

export default function ProcessFlowSection() {
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
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
            <Wrench className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">How It Works</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            From Discovery to
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dream Workshop
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process ensures your workshop software is perfectly tailored 
            to your unique needs and workflow.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6">
                    <div className={`inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br ${step.color} rounded-full text-white font-bold text-sm shadow-lg`}>
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl mb-4 mt-2 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Desktop only) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Workshop Transformation?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Book your free discovery consult today and see how Wexel can revolutionize 
              your workshop operations in just 72 hours.
            </p>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer">
              <Search className="w-5 h-5" />
              <span>Book Your Discovery Consult</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}