import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import Button from '../common/Button';
import { LuStar, LuTrendingUp, LuRocket } from 'react-icons/lu';

const pricingTiers = [
  {
    icon: <LuStar className="w-10 h-10 text-brand-accent mb-4" />,
    name: 'Starter',
    tagline: 'For emerging creators',
    commission: '25%',
    description: 'Essential management to kickstart your growth. You keep 100% of subscriptions.',
    features: [
      'Basic Account Setup & Audit',
      'Content Scheduling',
      'Fan Engagement (Light)',
      'Monthly Performance Snapshot',
    ],
    highlight: false,
  },
  {
    icon: <LuTrendingUp className="w-10 h-10 text-white mb-4" />,
    name: 'Growth',
    tagline: 'For established creators',
    commission: '35%',
    description: 'Comprehensive strategies for scaling your earnings. You keep 100% of subscriptions.',
    features: [
      'Full Account Management',
      'Advanced Content Strategy',
      'Dedicated Chatting Team',
      'Weekly Performance Reports',
      'Promotion Assistance',
    ],
    highlight: true,
  },
  {
    icon: <LuRocket className="w-10 h-10 text-brand-accent mb-4" />,
    name: 'Elite',
    tagline: 'For top-tier creators',
    commission: '40%',
    description: 'Premium, all-inclusive service for maximum impact. You keep 100% of subscriptions.',
    features: [
      'All Growth Tier Features',
      'Personalized Branding & PR',
      'DMCA Protection Services',
      'Custom Growth Initiatives',
      '24/7 Priority Support',
    ],
    highlight: false,
  },
];

const Pricing = () => {
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

  return (
    <section id="pricing" className="section-padding bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
            <h2 className="text-3xl md:text-4xl font-bold font-headings text-center text-white mb-4">
                Our Partnership <span className="text-brand-accent">Tiers</span>
            </h2>
            <p className="text-center text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                Transparent pricing designed for your success. You always keep 100% of your subscription revenue.
            </p>
            <p className="text-center text-md text-brand-accent font-semibold mb-12 md:mb-16">
                Elevan takes a percentage ONLY from tips & messages.
            </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {pricingTiers.map((tier) => (
            <motion.div variants={itemVariants} key={tier.name} className="flex">
              <Card 
                className={`flex flex-col w-full ${tier.highlight ? 'bg-brand-accent text-white scale-105 ring-2 ring-brand-accent-hover shadow-2xl' : 'bg-brand-dark-secondary'}`}
                hoverEffect={!tier.highlight} // Disable default hover for highlighted card
              >
                <div className="text-center">
                  {React.cloneElement(tier.icon, { className: `w-10 h-10 mx-auto mb-4 ${tier.highlight ? 'text-white' : 'text-brand-accent'}` })}
                  <h3 className={`text-2xl font-bold font-headings ${tier.highlight ? 'text-white' : 'text-white'} mb-2`}>{tier.name}</h3>
                  <p className={`text-sm ${tier.highlight ? 'text-gray-100' : 'text-gray-400'} mb-1`}>{tier.tagline}</p>
                  <p className={`text-4xl font-bold my-4 ${tier.highlight ? 'text-white' : 'text-brand-accent'}`}>{tier.commission}
                    <span className={`text-sm font-normal ml-1 ${tier.highlight ? 'text-gray-200' : 'text-gray-400'}`}>from tips & messages</span>
                  </p>
                  <p className={`text-sm ${tier.highlight ? 'text-gray-100' : 'text-gray-300'} mb-6`}>{tier.description}</p>
                </div>
                <ul className={`space-y-2 text-sm mb-8 flex-grow ${tier.highlight ? 'text-gray-50' : 'text-gray-300'}`}>
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className={`w-4 h-4 mr-2 ${tier.highlight ? 'text-green-300' : 'text-brand-accent'}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button href="#apply" variant={tier.highlight ? 'secondary' : 'primary'} fullWidth className={tier.highlight ? 'bg-white text-brand-accent hover:bg-gray-200' : ''}>
                  Apply for {tier.name}
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
