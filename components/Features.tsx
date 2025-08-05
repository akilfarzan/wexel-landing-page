'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ClipboardList, 
  Users, 
  BarChart3, 
  Bot, 
  Mail, 
  MessageSquare, 
  FileText, 
  Settings 
} from 'lucide-react';

const features = [
  {
    icon: ClipboardList,
    title: 'Smart Job Card Management',
    description: 'Never lose track of a job again. Snap photos, add notes, and track every job in real time — all from your phone or PC. Your whole team stays in sync, start to finish.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Users,
    title: 'Advanced Customer Management',
    description: 'Every customer’s history, at a glance. See previous jobs, service notes, preferences, and communication logs. Know who’s coming in and what they’ll need — before they arrive.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: BarChart3,
    title: 'Intelligent Analytics',
    description: 'Turn your workshop into a profit machine. See what jobs make you the most money, where time is lost, and how to run leaner. Wexel gives you clarity that boosts margins.',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: Bot,
    title: 'AI-Powered Automations',
    description: 'Automated follow-ups, smart scheduling, and predictive maintenance reminders powered by machine learning.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Mail,
    title: 'Email Integration',
    description: 'No more manual emails. Generate invoices, emails and reminders like clockwork, right from your Wexel app. Stay professional — without lifting a finger.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: MessageSquare,
    title: 'SMS Automation',
    description: 'Instant updates. Zero chasing. Reminders, job status, and pickup alerts sent via SMS automatically — no more missed calls or delays.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: FileText,
    title: 'Invoice & Billing',
    description: 'Professional invoicing with multiple payment gateways, recurring billing, and automated payment reminders.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Settings,
    title: 'Workflow Optimization',
    description: 'Customizable workflows, task automation, and process optimization tools for maximum efficiency.',
    color: 'from-slate-500 to-slate-600'
  }
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Scale Your Workshop
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools designed specifically for modern workshops. 
            Streamline operations, delight customers, and grow your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}