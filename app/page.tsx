'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import MissionStatement from '@/components/MissionStatement';
import CustomizationSection from '@/components/CustomizationSection';
import DashboardSection from '@/components/DashboardSection';
import JobManagementSection from '@/components/JobManagementSection';
import IntegrationsSection from '@/components/IntegrationsSection';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <MissionStatement />
      <Features />
      <Benefits />
      <CustomizationSection />
      <JobManagementSection />
      <DashboardSection />
      <IntegrationsSection />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}