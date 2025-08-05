'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Brain, DollarSign, FileText, Clock } from 'lucide-react';

export default function DashboardSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const bulletPoints = [
    {
      icon: Search,
      text: 'Live Stock Status – Instantly see what\'s in stock, what\'s low, and what needs to be reordered',
      emoji: '🔍'
    },
    {
      icon: Brain,
      text: 'Smart Alerts – Get notified before you run out — so you never stall a job again',
      emoji: '🧠'
    },
    {
      icon: DollarSign,
      text: 'Profit Visibility – Track margins on every part in real-time. Sell smarter. Buy smarter.',
      emoji: '💸'
    },
    {
      icon: FileText,
      text: 'See Everything, Order Anything – See supplier, restock date, location, usage history at a glance, and re-order stock right from your Wexel app.',
      emoji: '🗂'
    },
    {
      icon: Clock,
      text: 'Faster Workflows – Cut hours of admin each week with bulk edit, part search, and reorder tools',
      emoji: '⏱'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/Inventory tracking.PNG"
                alt="Wexel Dashboard showing real-time analytics and stock management"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent" />
              
              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-700">Real-time Data</span>
                </div>
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">Profit Tracking</span>
                </div>
              </motion.div>
            </div>
            
            {/* Italicized text below image */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-gray-600 italic mt-4 text-center"
            >
              💥 It's like having your stock controller, purchasing assistant, and bookkeeper — all rolled into one.
            </motion.p>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Speed. Precision. Profit.
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  — All in One Dashboard.
                </span>
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Real-time tracking, margin clarity, and smart stock alerts that make your workshop leaner, faster, and more profitable.
              </p>
            </div>

            {/* Bullet Points */}
            <div className="space-y-6">
              {bulletPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg">{point.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {point.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}