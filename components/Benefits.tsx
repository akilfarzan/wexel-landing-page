'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Clock, DollarSign, Heart } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increase Revenue by 45%',
    description: 'Our customers see an average revenue increase of 45% within the first 6 months through improved efficiency and customer retention.',
    stats: '+45%',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Clock,
    title: 'Save 20+ Hours Weekly',
    description: 'Automation and streamlined processes save workshop owners over 20 hours per week, letting you focus on growing your business.',
    stats: '20+ hrs',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: DollarSign,
    title: 'Reduce Costs by 30%',
    description: 'Eliminate redundant processes, reduce paperwork, and optimize resource allocation to cut operational costs significantly.',
    stats: '-30%',
    color: 'from-purple-500 to-violet-600'
  },
  {
    icon: Heart,
    title: 'Boost Customer Satisfaction',
    description: 'Transparent communication, faster service, and personalized experiences lead to happier customers and more referrals.',
    stats: '98%',
    color: 'from-pink-500 to-rose-600'
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
            Real Results from
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Real Workshops
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of workshop owners who have transformed their business 
            with Wexel and achieved measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="h-full p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {benefit.title}
                      </h3>
                      <span className={`text-2xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                        {benefit.stats}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}