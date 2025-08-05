'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import TransitionSection from '@/components/TransitionSection';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import MissionStatement from '@/components/MissionStatement';
import CustomizationSection from '@/components/CustomizationSection';
import DashboardSection from '@/components/DashboardSection';
import JobManagementSection from '@/components/JobManagementSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import CustomerManagementSection from '@/components/CustomerManagementSection';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <MissionStatement />
      <Features />

      <CustomizationSection />
      <JobManagementSection />
      <DashboardSection />
      <IntegrationsSection />
      <TransitionSection />
      <CustomerManagementSection />
      <Pricing />
            <Benefits />
      <CTA />
      <Footer />
    </main>
  );
}