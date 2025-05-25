// pages/index.js
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import Hero from '../components/sections/Hero';
import WhyElevan from '../components/sections/WhyElevan';
import Services from '../components/sections/Services';
import Pricing from '../components/sections/Pricing';
import Testimonials from '../components/sections/Testimonials';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import ApplyForm from '../components/sections/ApplyForm';

export default function Home() {
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const sections = [
    Hero,
    WhyElevan,
    Services,
    Pricing,
    Testimonials,
    About,
    Contact,
    ApplyForm,
  ];

  return (
    <>
      <Head>
        <title>Elevan – OnlyFans Agency</title>
        <meta name="description" content="Elevate your OnlyFans. Maximize your earnings." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {sections.map((Section, idx) => (
        <motion.section
          key={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeVariants}
          className="relative z-10"
        >
          <Section />
        </motion.section>
      ))}
    </>
  );
}
