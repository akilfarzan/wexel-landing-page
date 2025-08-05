'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ClipboardList, Users, Clock, FileText, Smartphone } from 'lucide-react';
import { ImageDialog } from '@/components/ui/image-dialog';

export default function JobManagementSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const bulletPoints = [
    {
      icon: ClipboardList, 
      text: 'Live Job Cards – Instantly see active, in-progress, and completed jobs',
    },
    {
      icon: Users, 
      text: 'Technician Status Tags – Know who\'s working on what at all times',
    },
    {
      icon: Clock, 
      text: 'Start & Due Dates – Keep jobs on track and avoid backlog',
    },
    {
      icon: FileText, 
      text: 'One-Click Invoicing – No double-handling or missed billables',
    },
    {
      icon: Smartphone, 
      text: 'Real-Time Sync – Access and update from anywhere, even the workshop floor',
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Know Every Job. Every Time.
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  At a Glance.
                </span>
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                One quick glance, and you'll know exactly where every vehicle is in your workflow — from booking to invoice.
              </p>
            </div>

            {/* Bullet Points */}
            <div className="space-y-6">
              {bulletPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <point.icon className="w-5 h-5 text-white" />
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

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <ImageDialog
                src="/Job managment.PNG"
                alt="Wexel Job Management Dashboard showing live job cards and workflow status"
              >
                <div className="cursor-pointer group">
                  <img
                    src="/section.inspect-element-1754376989310.jpeg"
                    alt="Wexel Job Management Dashboard showing live job cards and workflow status"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                      <ClipboardList className="w-6 h-6 text-gray-700" />
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
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-gray-700">Live Status</span>
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
                      <span className="text-sm font-medium text-gray-700">Job Tracking</span>
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
              It's like having a whiteboard, admin desk, and job folder — all rolled into one, without the mess.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}