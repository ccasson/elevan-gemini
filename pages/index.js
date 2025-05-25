// pages/index.js
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import GlobalParticles from '../components/common/Particles';
import Hero from '../components/sections/Hero';
import WhyElevan from '../components/sections/WhyElevan';
import Services from '../components/sections/Services';
import Pricing from '../components/sections/Pricing';
import Testimonials from '../components/sections/Testimonials';
import About from '../components/sections/About';
import ApplyForm from '../components/sections/ApplyForm';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Home() {
  const sectionVariants = {
    hidden:  { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <div className="relative overflow-hidden min-h-screen font-sans">
      <Head>
        <title>Elevan – OnlyFans Agency</title>
        <meta name="description" content="Elevate Your OnlyFans. Maximize Your Earnings." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* fixed, full-screen particles behind everything */}
      <GlobalParticles className="fixed inset-0 z-0" />

      <main className="relative z-10">
        {[
          Hero,
          WhyElevan,
          Services,
          Pricing,
          Testimonials,
          About,
          ApplyForm
        ].map((Section, idx) => (
          <motion.section
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <Section />
          </motion.section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
