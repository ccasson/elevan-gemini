import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, author, title }) => {
  return (
    <motion.div
      className="bg-brand-dark-secondary rounded-lg p-6 text-center border-2 border-brand-accent-hover shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-brand-accent text-gray-200"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p className="italic text-lg mb-4">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="font-bold text-white text-xl font-headings">{author}</p>
      <p className="text-sm text-gray-400">{title}</p>
    </motion.div>
  );
};

export default TestimonialCard;
