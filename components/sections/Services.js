// components/sections/Services.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCog, FaFileAlt, FaVideo, FaComments } from 'react-icons/fa';
import FeatureCard from '../common/FeatureCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Services = () => {
  const services = [
    {
      icon: <FaUserCog />,
      title: 'Full Account Management',
      description: 'Comprehensive day-to-day management of your OnlyFans account, including posting, fan interaction, and optimization.',
    },
    {
      icon: <FaFileAlt />,
      title: 'Content & Promotion Strategy',
      description: 'Tailored content planning and cross-platform promotion strategies to maximize reach and subscriber acquisition.',
    },
    {
      icon: <FaVideo />,
      title: 'Content Creation Guidance',
      description: 'Receive expert advice on creating high-quality, engaging content that resonates with your audience and drives subscriptions.',
    },
    {
      icon: <FaComments />,
      title: 'Fan Engagement & Messaging',
      description: 'Our team handles fan messages and engagement, building strong relationships and maximizing tips and custom content sales.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-brand-dark">
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold font-headings text-white text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        Our Services
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        We provide a full suite of services designed to elevate your OnlyFans presence and maximize your income potential.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            <FeatureCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
