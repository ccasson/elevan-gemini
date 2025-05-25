// components/common/Card.js
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true }) => {
  const baseClasses = 'rounded-lg p-6 transition-all duration-300 relative bg-brand-dark-secondary border-2 border-brand-accent-hover';

  const hoverClasses = hoverEffect
    ? 'transform hover:scale-105 hover:shadow-2xl hover:border-brand-accent'
    : '';

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
