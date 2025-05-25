// components/common/FeatureCard.js
import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-brand-dark-secondary rounded-lg p-6 text-center border-2 border-brand-accent-hover shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-brand-accent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-brand-accent text-5xl mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-headings">
        {title}
      </h3>
      <p className="text-gray-300 text-base md:text-lg">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
