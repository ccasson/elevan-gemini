import React from 'react';
import { motion } from 'framer-motion';
import { FaDollarSign, FaChartLine, FaHeadphones } from 'react-icons/fa'; // Example icons
import FeatureCard from '../common/FeatureCard'; // Import the new FeatureCard

const WhyElevan = () => { // Corrected component name
  const features = [
    {
      icon: <FaDollarSign />,
      title: 'Keep 100% Subscription Revenue',
      description: 'You retain all your subscription earnings. We only partner on tips and messages, ensuring your primary income is yours.',
    },
    {
      icon: <FaChartLine />,
      title: 'Expert Growth Strategies',
      description: 'Leverage our proven techniques for audience growth, content optimization, and strategic promotion to significantly boost your earnings.',
    },
    {
      icon: <FaHeadphones />,
      title: 'Dedicated Account Management',
      description: 'Receive personalized support from a dedicated account manager focused on your success and available to guide you every step.',
    },
  ];

  return (
    <section id="why-elevan" className="section-padding bg-brand-dark"> {/* Corrected id */}
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold font-headings text-white text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        Why Partner with Elevan?
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        We're more than just an agency; we're your dedicated partners in success. Discover the Elevan difference.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyElevan; // Corrected export name
