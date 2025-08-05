'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="/logo.gif"
              alt="Wexel Logo"
              className="h-40 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('integrations')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Integrations
            </button>
            <button 
              onClick={() => scrollToSection('process')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              FAQ
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('features')} 
              className="block text-gray-700 hover:text-blue-600 w-full text-left"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('integrations')} 
              className="block text-gray-700 hover:text-blue-600 w-full text-left"
            >
              Integrations
            </button>
            <button 
              onClick={() => scrollToSection('process')} 
              className="block text-gray-700 hover:text-blue-600 w-full text-left"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="block text-gray-700 hover:text-blue-600 w-full text-left"
            >
              FAQ
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}