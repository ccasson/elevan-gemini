// pages/index.js
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import GlobalParticles from '../components/common/Particles'; // Corrected import for global particles
import Hero from '../components/sections/Hero';
import WhyElevan from '../components/sections/WhyElevan'; // Correct path and name
import Services from '../components/sections/Services'; // From your structure
import Pricing from '../components/sections/Pricing';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import Navbar from '../components/layout/Navbar'; // Your existing Navbar (sticky header)
import Footer from '../components/layout/Footer'; // Your existing Footer

export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-brand-dark font-sans">
      <Head>
        <title>Elevan - OnlyFans Agency</title>
        <meta name="description" content="Elevate Your OnlyFans. Maximize Your Earnings." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar /> {/* Your sticky navigation header */}

      {/* Global Particles background for the entire page */}
      <GlobalParticles className="absolute inset-0 z-0" />

      <main className="relative z-10"> {/* Ensure content is above particles */}

        {/* Each section wrapped with motion.section for consistent scroll animation */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // 'once: true' is critical for preventing disappearance
          variants={sectionVariants}
        >
          <Hero />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <WhyElevan />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Services />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Pricing />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Testimonials />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Contact />
        </motion.section>

        {/* ApplyForm and About would also be wrapped like this if they are full sections to be displayed on index */}
        {/*
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <ApplyForm />
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <About />
        </motion.section>
        */}

      </main>

      <Footer /> {/* Your existing Footer component */}
    </div>
  );
}
