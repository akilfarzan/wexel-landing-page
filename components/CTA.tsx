'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wrench, Smartphone, Shield, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';

export default function CTA() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
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
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Workshop Into
            <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              A Profit Machine
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Stop losing money on admin work, missed calls, and disorganized workflows. 
            Let Wexel's AI handle the boring stuff while you focus on what you do best.
          </p>
          
          <div className="flex justify-center items-center mb-12">
            <Button 
              onClick={() => setIsContactFormOpen(true)}
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 px-12 py-6 text-xl font-bold"
            >
              <Wrench className="mr-3 w-6 h-6" />
              Build Your Wexel Workshop Now
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3">
                <Smartphone className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-white font-semibold">Mobile Ready</div>
              <div className="text-sm text-blue-200">iOS & Android Apps</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3">
                <Shield className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-white font-semibold">Bank-Level Security</div>
              <div className="text-sm text-blue-200">256-bit Encryption</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3">
                <Headphones className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-white font-semibold">24/7 Support</div>
              <div className="text-sm text-blue-200">Expert Help Always</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      </section>
      
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </>
  );
}