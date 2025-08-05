'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "Considering it's completely customised, do I have to pay a build cost?",
    answer: "Nope — there’s absolutely no setup or build fee. Wexel is the only workshop software in Australia that fully custom-builds your system to suit your workflow — and we include that as part of your monthly subscription. We design everything around how you operate — from job card logic and workflow automation to AI integrations and customer comms. That level of customisation requires advanced processing and backend power, which is why our plan is $159.99/month + GST. There’s no upfront cost. Just a system that fits your workshop like a glove — built and maintained for you."
  },
  {
    question: "How many times can I customise this workshop?",
    answer: "For intial set up and build, there is ZERO fee. However, if there are requests subsequent changes down the line to the logic, workflow, forms, integrations etc. We do charge extra for that, and that depends on the extent of the added work. So we aim to get a comprehensive and complete understanding and workflow done for you from the initial build consult."
  },
  {
    question: "What happens to my existing customer and job data?",
    answer: "We make data migration painless. Our team will help you import all your existing customer records, vehicle histories, and job data from spreadsheets, other software, or paper records. Nothing gets lost in the transition, and you'll have access to complete historical data from day one."
  },
  {
    question: "How does the AI automation actually work?",
    answer: "Wexel's AI learns from your workshop patterns and automates routine tasks. It can automatically send pickup reminders, follow up on overdue invoices, predict maintenance needs based on vehicle history, and even handle basic customer inquiries via phone or SMS. The AI gets smarter over time, adapting to your specific business needs."
  },
  {
    question: "Is my workshop data secure and backed up?",
    answer: "Absolutely. We use bank-level 256-bit encryption and store your data across multiple secure data centers in Australia. Your information is automatically backed up multiple times daily, and we maintain 99.9% uptime. You own your data and can export it anytime."
  },
  {
    question: "Can I use Wexel on my phone and tablet?",
    answer: "Yes! Wexel works perfectly on any device - desktop, tablet, or smartphone. Our mobile apps for iOS and Android let you manage jobs, update customers, and track progress from anywhere in your workshop or on the road. Everything syncs in real-time across all devices."
  },
  {
    question: "Is there any lock-in contract?",
    answer: "Nope. You can cancel anytime. Try Wexel risk-free with our 30-day money-back guarantee."
  },
  {
    question: "What if Wexel doesn't work for my specific type of workshop?",
    answer: "Wexel is designed to be flexible and customizable for any type of automotive workshop - from general mechanics to specialists in diesel, European cars, motorcycles, or fleet services. If our standard features don't meet your needs, we can customize workflows and add specific functionality. Plus, we offer a 30-day money-back guarantee."
  }
];

export default function FAQSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-blue-100">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Got Questions?
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              We've Got Answers.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Wexel and how it can transform your workshop.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-2 hover:shadow-xl transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg mb-4">
            Still have questions? We're here to help.
          </p>
          <div className="inline-flex items-center space-x-4">
            <a href="mailto:support@wexel.com" className="text-blue-600 hover:text-blue-700 font-medium">
              support@wexel.com
            </a>
            <span className="text-gray-400">|</span>
            <a href="tel:1300-WEXEL" className="text-blue-600 hover:text-blue-700 font-medium">
              1300-WEXEL
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}