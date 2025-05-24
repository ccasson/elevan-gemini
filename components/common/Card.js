import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true }) => {
  const baseClasses = `
    rounded-lg p-6 transition-all duration-300 relative
    bg-brand-dark-secondary
    border-2 border-brand-accent-hover  // Default border for cards
  `;

  const dynamicClasses = hoverEffect
    ? 'hover:shadow-2xl hover:border-brand-accent transform hover:scale-103'
    : '';

  return (
    <motion.div
      className={`${baseClasses} ${dynamicClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
