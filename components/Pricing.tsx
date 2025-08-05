'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Zap, Crown, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: 49,
    description: 'Perfect for small workshops getting started',
    features: [
      'Up to 100 job cards/month',
      'Basic customer management',
      'Email integration',
      'Mobile app access',
      'Basic reporting',
      'Phone support'
    ],
    popular: false,
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Professional',
    icon: Crown,
    price: 99,
    description: 'Most popular for growing workshops',
    features: [
      'Unlimited job cards',
      'Advanced customer management',
      'AI automations',
      'SMS integration',
      'Advanced analytics',
      'Invoice & billing',
      'Priority support',
      'Custom workflows'
    ],
    popular: true,
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'Enterprise',
    icon: Building,
    price: 199,
    description: 'For large workshops and chains',
    features: [
      'Everything in Professional',
      'Multi-location support',
      'Advanced AI features',
      'Custom integrations',
      'White-label options',
      'Dedicated account manager',
      'Custom training',
      'SLA guarantee'
    ],
    popular: false,
    color: 'from-purple-500 to-purple-600'
  }
];

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your workshop. All plans include a 30-day free trial 
            with no credit card required.
          </p>
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-lg">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
              Monthly
            </button>
            <button className="px-6 py-2 text-gray-600 rounded-full text-sm font-medium">
              Annual (Save 20%)
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative group ${plan.popular ? 'scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`h-full p-8 bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'border-orange-200' : 'border-gray-100'
              }`}>
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.color} rounded-xl mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                  } text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
                  size="lg"
                >
                  Start Free Trial
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}