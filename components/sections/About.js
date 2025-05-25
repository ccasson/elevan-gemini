// components/sections/About.js
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const About = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="section-padding bg-brand-dark text-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold font-headings mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentVariants}
        >
          About <span className="text-brand-accent">Elevan</span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-6 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentVariants}
        >
          Elevan was founded with a singular vision: to empower OnlyFans creators by providing unparalleled management, innovative growth strategies, and unwavering support. We believe in your talent, and we’re here to handle the complexities so you can shine.
        </motion.p>

        <motion.p
          className="text-lg text-gray-300 mb-8 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          variants={contentVariants}
        >
          Our team comprises industry experts in marketing, content strategy, fan engagement, and creator relations. We operate on principles of transparency, trust, and a deep commitment to our partners’ success. At Elevan, you’re not just a client; you’re a valued partner.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4 }}
          variants={contentVariants}
        >
          <Button href="#apply" variant="primary" size="md">
            Start Your Journey With Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
