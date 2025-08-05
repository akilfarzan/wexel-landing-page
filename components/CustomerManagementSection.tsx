'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Car, FileText, Filter, Brain } from 'lucide-react';
import { ImageDialog } from '@/components/ui/image-dialog';

const images = [
  {
    src: '/Customers 1.PNG',
    alt: 'Customer database with search functionality',
    overlay: 'Search & Filter Customers'
  },
  {
    src: '/Customers 2.PNG', 
    alt: 'Vehicle history and service records',
    overlay: 'Complete Vehicle History'
  },
  {
    src: '/Customers 3.PNG',
    alt: 'Invoice tracking and payment status',
    overlay: 'Invoice & Payment Tracking'
  }
];

export default function CustomerManagementSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const bulletPoints = [
    {
      icon: Search, 
      text: 'Search by rego, name, phone, or company',
    },
    {
      icon: Car, 
      text: 'Link multiple vehicles to one customer',
    },
    {
      icon: FileText, 
      text: 'View unpaid invoices and job history at a glance',
    },
    {
      icon: Filter, 
      text: 'Filter by business vs individual clients',
    },
    {
      icon: Brain, 
      text: 'Pull up details instantly from job card view or invoice screen',
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:col-span-1"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Every Customer, Every Vehicle,
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Every Job — Instantly Accessible.
                </span>
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Track complete service history, contact info, unpaid invoices, and vehicles — all in one clean, searchable dashboard.
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

          {/* Image Carousel Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:col-span-1"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <ImageDialog
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
              >
                <div className="cursor-pointer group relative">
                  <img
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                      <Search className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>
                  
                  {/* Image overlay content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {images[currentImageIndex].overlay}
                      </h3>
                    </div>
                  </div>
                </div>
              </ImageDialog>
            </div>

            {/* Image indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-blue-600 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            {/* Italicized text below image */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-gray-600 italic mt-6 text-center"
            >
              You'll know what car they drove, when you last saw them, and what you serviced — before they even walked in.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}