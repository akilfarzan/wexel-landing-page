'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Heart, Zap } from 'lucide-react';

export default function MissionStatement() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Mission Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-6 py-3 mb-8 border border-blue-100"
          >
            <Target className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Our Mission</span>
          </motion.div>

          {/* Main Mission Statement */}
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight max-w-4xl mx-auto"
          >
            We believe every workshop owner deserves to 
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              work ON their business, not just IN it.
            </span>
          </motion.h2>

          {/* Supporting Text */}
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            That's why we built Wexel — to free workshop owners from endless paperwork, 
            missed calls, and late-night admin work. Our AI-powered platform handles the 
            boring stuff, so you can focus on what you love: fixing cars and growing your business.
          </motion.p>

          {/* Core Values */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Efficiency First</h3>
              <p className="text-gray-600">
                Every feature is designed to save you time and eliminate manual work.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-4 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Built for Workshops</h3>
              <p className="text-gray-600">
                Created by people who understand the unique challenges of running a workshop.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl mb-4 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Your Success</h3>
              <p className="text-gray-600">
                We succeed when you succeed. Your growth is our primary goal.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}