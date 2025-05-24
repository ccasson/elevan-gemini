import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import Image from 'next/image';

const Hero = () => {
  const heroImageUrl = 'https://images.pexels.com/photos/7129713/pexels-photo-7129713.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1';
  // This image is: Photo by Anna Shvets on Pexels - (Elegant woman, looking towards future)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImageUrl}
          alt="Confident creator managed by Elevan"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority // Critical image, load first
        />
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay */}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 p-6 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-headings text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Elevate Your <span className="text-brand-accent">OnlyFans</span>.
          <br />
          Maximize Your <span className="text-brand-accent">Earnings</span>.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Partner with Elevan, the premier OnlyFans agency dedicated to your growth and success. We handle the business, so you can focus on creating.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button href="#apply" variant="primary" size="lg">
            Partner With Elevan
          </Button>
        </motion.div>
      </motion.div>
      {/* Optional: Scroll down indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg className="w-8 h-8 text-gray-400 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
