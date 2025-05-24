import React, { useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../common/Button';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const Hero = () => {
  const { scrollYProgress } = useScroll();

  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 0.7]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-30%']);

  const headlineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 1.0,
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 1.8, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 2.2, ease: "easeOut" } },
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

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    // console.log("Particles container loaded", container);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-brand-dark">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0 z-0"
        options={{
          background: {
            color: { value: "#1E1E2D" },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#E65C92", "#D0487E", "#F8F8F8", "#9B59B6"],
            },
            links: {
              color: "#E65C92",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <motion.div
        className="relative z-10 p-6 max-w-4xl mx-auto"
        style={{ opacity: contentOpacity, y: contentY }}
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
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg className="w-8 h-8 text-gray-400 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
