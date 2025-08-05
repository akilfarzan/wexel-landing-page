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
        <div className="max-w-4xl mx-auto text-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
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
        </div>
      </div>
    </section>
  );
}