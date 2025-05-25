// components/sections/Pricing.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaStar, FaChartLine } from 'react-icons/fa';
import Button from '../common/Button';

const Pricing = () => {
  const tiers = [
    {
      id: 'starter',
      name: 'Starter',
      icon: <FaStar />,
      description: 'For aspiring creators taking their first step into professional management.',
      fee: '35%',
      feeFrom: 'of tips & messages',
      features: [
        'Full Account Management',
        'Basic Content Strategy',
        'Basic Chatting Team',
        'Weekly Performance Reports',
      ],
      buttonText: 'Apply for Starter',
      buttonLink: 'https://manageher.typeform.com/to/eN4XvN0V',
    },
    {
      id: 'growth',
      name: 'Growth',
      icon: <FaChartLine />,
      description: 'For established creators seeking comprehensive strategies for scaling.',
      fee: '45%',
      feeFrom: 'of tips & messages',
      features: [
        'Full Account Management',
        'Advanced Content Strategy',
        'Dedicated Chatting Team',
        'Weekly Performance Reports',
        'Promotion Assistance',
      ],
      buttonText: 'Apply for Growth',
      buttonLink: 'https://manageher.typeform.com/to/eN4XvN0V',
      highlight: true,
    },
    {
      id: 'elite',
      name: 'Elite',
      icon: <FaRocket />,
      description: 'For top-tier creators demanding exclusive strategies and maximum support.',
      fee: '55%',
      feeFrom: 'of tips & messages',
      features: [
        'Full Account Management',
        'Premium Content Strategy',
        'VIP Chatting Team',
        'Daily Performance Insights',
        'Aggressive Promotion Campaigns',
        'Personal Brand Development',
      ],
      buttonText: 'Apply for Elite',
      buttonLink: 'https://manageher.typeform.com/to/eN4XvN0V',
    },
  ];

  const cardClasses = (highlight) => `
    bg-brand-dark-secondary
    rounded-lg
    p-8
    flex flex-col items-center justify-between text-center
    transition-all duration-300
    ${highlight 
       ? 'border-4 border-brand-accent shadow-2xl scale-105' 
       : 'border-2 border-brand-accent-hover shadow-lg'}
    text-gray-200 h-full
  `.replace(/\s+/g, ' ').trim();

  return (
    <section id="pricing" className="section-padding bg-transparent">
      {/* Animated heading + intro */}
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold font-headings text-white text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          Our Flexible Pricing
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Choose the partnership tier that best suits your goals. We ensure transparency and maximize your earnings.
        </motion.p>
      </div>

      {/* Static cards—no scroll-jump animations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier) => (
          <div key={tier.id} className={cardClasses(tier.highlight)}>
            <div className="flex flex-col items-center mb-6">
              <div className="text-brand-accent text-6xl mb-4">
                {tier.icon}
              </div>
              <h3 className="text-3xl font-extrabold font-headings text-white mb-2">
                {tier.name}
              </h3>
              <p className="text-gray-400 mb-4">{tier.description}</p>
              <p className="text-5xl font-extrabold text-brand-accent">
                {tier.fee}
              </p>
              <p className="text-gray-400 mb-6">{tier.feeFrom}</p>
            </div>

            <ul className="text-left w-full mb-8 space-y-2">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-200">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              href={tier.buttonLink}
              variant={tier.highlight ? 'primary' : 'secondary'}
              size="lg"
            >
              {tier.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
