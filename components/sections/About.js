import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../common/Button';

const About = () => {
  const aboutImageUrl = 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  // This image is: Photo by fauxels on Pexels (Diverse team meeting, professional)

  return (
    <section id="about" className="section-padding bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-video lg:aspect-auto lg:h-[500px] rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src={aboutImageUrl}
              alt="Elevan Agency Team - Professional OnlyFans Management"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay:0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-headings text-white mb-6">
              About <span className="text-brand-accent">Elevan</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Elevan was founded with a singular vision: to empower OnlyFans creators by providing unparalleled management, innovative growth strategies, and unwavering support. We believe in your talent, and we're here to handle the complexities so you can shine.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our team comprises industry experts in marketing, content strategy, fan engagement, and creator relations. We operate on principles of transparency, trust, and a deep commitment to our partners' success. At Elevan, you're not just a client; you're a valued partner.
            </p>
            <Button href="#apply" variant="primary" size="md">
              Start Your Journey With Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
