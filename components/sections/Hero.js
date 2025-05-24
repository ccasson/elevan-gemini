import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../common/Button';

// A separate component for the large, animated hero logo
const HeroIntroLogo = () => {
  const { scrollYProgress } = useScroll();

  // Animate from center to top-left (navbar position)
  const x = useTransform(scrollYProgress, [0, 0.3], ['-50%', '-250%']); // Adjust these values for final positioning
  const y = useTransform(scrollYProgress, [0, 0.3], ['-50%', '-200%']); // Adjust these values for final positioning
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]); // Shrink to navbar size
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]); // Fade out slightly before full transition

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 z-20 flex items-center justify-center pointer-events-none" // Use pointer-events-none so it doesn't block clicks
      style={{ x, y, scale, opacity }}
    >
      <motion.svg
        className="h-32 md:h-48 lg:h-64" // Large initial size for dramatic effect
        viewBox="0 0 200 50"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        initial={{ opacity: 0, scale: 0.5, rotateY: 90 }} // Start invisible, small, rotated
        animate={{ opacity: 1, scale: 1, rotateY: 0 }} // Animate to full size, no rotation
        transition={{ duration: 1.5, ease: "easeOut" }} // Slower, impactful entrance
      >
        <motion.text
          x="5"
          y="38"
          fontFamily="Montserrat, sans-serif"
          fontSize="38" // Use the bolder font size here too
          fontWeight="900"
          className="fill-current text-brand-accent"
          style={{
            textShadow: '0 0 15px rgba(230, 92, 146, 0.8), 0 0 30px rgba(230, 92, 146, 0.5)', // Even stronger glow
            stroke: '#ffffff',
            strokeWidth: '1.2px', // Slightly thicker stroke for bold look
            strokeLinejoin: 'round',
          }}
        >
          Elevan
        </motion.text>
      </motion.svg>
    </motion.div>
  );
};


const Hero = () => {
  const { scrollYProgress } = useScroll();

  // Headline & Tagline animations for the hero text
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 1, 0.7]); // Fade in, then fade slightly out on scroll
  const headlineY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-50%']); // Move up on scroll

  const headlineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 2.0, // Delay text animation to let HeroIntroLogo play first
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 2.8, ease: "easeOut" } }, // Delayed
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 3.2, ease: "easeOut" } }, // Delayed
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
                                  bg-gradient-hero bg-[length:400%_400%] animate-gradient-shift">
      {/* Darker Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Intro Logo - will animate and shrink into Navbar Logo position */}
      <HeroIntroLogo />

      {/* Main Hero Content */}
      <motion.div
        className="relative z-10 p-6 max-w-4xl mx-auto"
        style={{ opacity: headlineOpacity, y: headlineY }} // Apply scroll-triggered animations
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-headings text-white mb-6 leading-tight"
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-wrap justify-center mb-2 perspective-[1000px]">
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
          <div className="flex flex-wrap justify-center perspective-[1000px]">
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
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto"
          variants={taglineVariants}
          initial="hidden"
          animate="visible"
        >
          Partner with Elevan, the premier OnlyFans agency dedicated to your growth and maximization. We handle the business, so you can focus on creating.
        </motion.p>
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
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
        transition={{ delay: 3.5, duration: 1, repeat: Infinity, repeatType: "reverse" }} // Delayed
      >
        <svg className="w-8 h-8 text-gray-400 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
