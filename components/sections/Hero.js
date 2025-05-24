import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger animation for each word
        delayChildren: 0.3,   // Delay overall animation slightly
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const line1 = [
    { text: 'Elevate', color: 'text-white' },
    { text: 'Your', color: 'text-brand-accent' },
    { text: 'OnlyFans.', color: 'text-white' }
  ];

  const line2 = [
    { text: 'Maximize', color: 'text-brand-accent' },
    { text: 'Your', color: 'text-white' },
    { text: 'Earnings.', color: 'text-brand-accent' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden
                                  bg-gradient-hero bg-[length:400%_400%] animate-gradient-shift"> {/* Apply animated gradient here */}
      {/* Darker Overlay for better text contrast if gradient is too light */}
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Slightly lighter overlay than before */}

      {/* Content */}
      <motion.div
        className="relative z-10 p-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headings text-white mb-6 leading-tight">
          <div className="flex flex-wrap justify-center mb-2">
            {line1.map((word, index) => (
              <motion.span
                key={`line1-${index}`}
                className={`${word.color} inline-block mx-1 sm:mx-2`}
                variants={wordVariants}
              >
                {word.text}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center">
            {line2.map((word, index) => (
              <motion.span
                key={`line2-${index}`}
                className={`${word.color} inline-block mx-1 sm:mx-2`}
                variants={wordVariants}
              >
                {word.text}
              </motion.span>
            ))}
          </div>
        </h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto"
          variants={wordVariants} // Use wordVariants for this too
        >
          Partner with Elevan, the premier OnlyFans agency dedicated to your growth and maximization. We handle the business, so you can focus on creating.
        </motion.p>
        <motion.div variants={wordVariants}> {/* Use wordVariants for button */}
          <Button href="#apply" variant="primary" size="lg">
            Partner With Elevan
          </Button>
        </motion.div>
      </motion.div>
      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg className="w-8 h-8 text-gray-400 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
