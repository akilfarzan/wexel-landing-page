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
  Settings,
  PhoneCall,
  Wrench,
  Link,
  Brain
} from 'lucide-react';

const featuresRow1 = [
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
  }
];

const featuresRow2 = [
  {
    icon: FileText,
    title: 'Invoice & Billing',
    description: 'Get Paid Faster, With Less Fuss. Auto-generate invoices from job cards, integrate with Xero or MYOB, and get reminders sent automatically.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Settings,
    title: 'Workflow Optimization',
    description: 'Run Smoother. Work Faster. Stress Less. Automate boring tasks, set up smart job templates, and make your team 2x more efficient overnight.',
    color: 'from-slate-500 to-slate-600'
  },
  {
    icon: PhoneCall,
    title: 'AI Calling Assistant',
    description: 'Wexel Calls Your Customers So You Don\'t Have To. Our AI agent confirms pickups, reminds customers, and handles no-shows — while you stay in the bay.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Wrench,
    title: 'Job Templates & Service Kits',
    description: 'No More Rewriting the Same Job Again and Again. Save prebuilt job card layouts like "Logbook Service" or "Brake Replacement" — apply with 1 click.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: Link,
    title: 'Integrations Galore',
    description: 'Connects to What You Already Use — Instantly. Integrate your favourite stack, right into Wexel. Whether it be MYOB, Xero, Repco, Burson Ezy Parts, TireConnect we will add it. From invoicing and stock reorders to automated SMS and emails — everything flows together.',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Brain,
    title: 'Predictive Maintenance (AI)',
    description: 'Wexel Tells You What\'s Coming — Before It Breaks. Your AI will spot trends and upcoming service needs based on job history. That means more upsells. Happier customers.',
    color: 'from-lime-500 to-lime-600'
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

        {/* First Row - Scrolling Left */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="flex w-max animate-scroll-left">
            {[...featuresRow1, ...featuresRow1].map((feature, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] mr-8 group relative"
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
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Right */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="flex w-max animate-scroll-right">
            {[...featuresRow2, ...featuresRow2].map((feature, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] mr-8 group relative"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}