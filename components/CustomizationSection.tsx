'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Settings, Wrench, Users, TextCursor as Cursor } from 'lucide-react';
import { ImageDialog } from '@/components/ui/image-dialog';

const subheadings = [
  {
    text: "Whether you're doing logbook servicing, engine rebuilds, or fleet repairs — Wexel is built to match your way of working.",
    icon: Wrench
  },
  {
    text: "Other workshop softwares force you to adapt. Wexel adapts to you.",
    icon: Settings
  },
  {
    text: "Every workshop runs differently. So Wexel is customised to your people, your process, and your priorities.",
    icon: Users
  }
];

export default function CustomizationSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % subheadings.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 order-first lg:order-first"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your Workshop Is
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                YOUR Workshop.
              </span>
            </h2>

            {/* Alternating Subheadings */}
            <div className="relative min-h-[120px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start space-x-4 justify-center"
                >
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                    {React.createElement(subheadings[currentIndex].icon, {
                      className: "w-6 h-6 text-white"
                    })}
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed flex-1 max-w-2xl">
                    {subheadings[currentIndex].text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Indicators */}
            <div className="flex space-x-2 justify-center">
              {subheadings.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-600 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-last lg:order-last"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <ImageDialog
                src="/wex solution.png"
                alt="Wexel customizable workshop solution interface"
              >
                <div className="cursor-pointer group">
                  <img
                    src="/wexal solution.png"
                    alt="Wexel customizable workshop solution interface"
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                      <Settings className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>
                  
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
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-gray-700">Customizable</span>
                    </div>
                  </motion.div>
                </div>
              </ImageDialog>
            </div>
            
            {/* Italicized text below image */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-gray-600 italic mt-4 text-center"
            >
              Every workshop is unique. Wexel adapts to your specific workflow and requirements.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}