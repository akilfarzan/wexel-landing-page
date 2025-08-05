'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wrench, Users, DollarSign } from 'lucide-react';

export default function TransitionSection() {
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

  const animatedTextVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-10 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-10 blur-xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Main Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight px-4"
          >
            Built With Real Workshops.
            <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Customised For Yours.
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto mb-12 px-4"
          >
            Wexel was built side-by-side with Aussie mechanics to fix the exact problems 
            they deal with every day — from tracking jobs to chasing invoices and managing parts.
          </motion.p>

          {/* Animated Phrase */}
          <motion.div
            variants={animatedTextVariants}
            className="relative mb-16 px-4"
          >
            <div className="flex flex-col sm:justify-between sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl px-4 sm:px-8 py-6 border border-white/20">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex items-center space-x-2 justify-center"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">We Listen,</span>
              </motion.div>
              
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.7
                }}
                className="flex items-center space-x-2 justify-center"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">We Build,</span>
              </motion.div>
              
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.4
                }}
                className="flex items-center space-x-3 justify-center"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  You Cut Costs & Make More Profit!
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Supporting Elements */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4"
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-xl mb-4">
                <Users className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Real Feedback</h3>
              <p className="text-blue-200">Built with actual workshop owners</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-xl mb-4">
                <Wrench className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Real Solutions</h3>
              <p className="text-blue-200">Solving actual daily problems</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-xl mb-4">
                <DollarSign className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Real Results</h3>
              <p className="text-blue-200">Proven revenue growth</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}