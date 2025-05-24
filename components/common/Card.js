import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true }) => {
  const cardVariants = {
    rest: { scale: 1, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" },
    hover: { scale: 1.03, boxShadow: "0 10px 15px -3px rgba(230, 92, 146, 0.3), 0 4px 6px -2px rgba(230, 92, 146, 0.15)" } // Hover shadow with brand-accent color
  };

  return (
    <motion.div
      className={`bg-brand-dark-secondary p-6 md:p-8 rounded-xl shadow-xl ${className}`}
      variants={hoverEffect ? cardVariants : {}}
      initial="rest"
      whileHover={hoverEffect ? "hover" : ""}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
