import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import { LuUserCog, LuMegaphone, LuMessageSquare, LuLineChart, LuEye, LuShield } from 'react-icons/lu';

const services = [
  {
    icon: <LuUserCog className="w-12 h-12 text-brand-accent mb-4" />,
    title: 'Full Account Management',
    description: 'Comprehensive day-to-day management of your OnlyFans account, including posting, fan interaction, and optimization.',
  },
  {
    icon: <LuMegaphone className="w-12 h-12 text-brand-accent mb-4" />,
    title: 'Content & Promotion Strategy',
    description: 'Tailored content planning and cross-platform promotion strategies to maximize reach and subscriber acquisition.',
  },
  {
    icon: <LuMessageSquare className="w-12 h-12 text-brand-accent mb-4" />,
    title: 'Expert Chatting Services',
    description: 'Professional and engaging chatters to build relationships with your fans and significantly increase PPV & tip revenue.',
  },
  {
    icon: <LuLineChart className="w-12 h-12 text-brand-accent mb-4" />,
    title: 'Analytics & Performance Tracking',
    description: 'Regular reporting and analysis of your account performance to refine strategies and ensure continuous growth.',
  },
  {
    icon: <LuEye className="w-12 h-12 text-brand-accent mb-4" />,
    title: 'DMCA & Content Protection',
    description: 'Proactive monitoring and takedown services to protect your valuable content from unauthorized distribution.',
  },
  {
    icon: <LuShield className="w-12 h-12 text-brand-accent mb-4" />,
    title: 'Brand Building & Consulting',
    description: 'Guidance on building a strong personal brand that resonates with your audience and opens up new opportunities.',
  },
];

const Services = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="services" className="section-padding bg-brand-dark-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-headings text-center text-white mb-4">
            Our <span className="text-brand-accent">Services</span>
          </h2>
          <p className="text-center text-lg text-gray-300 mb-12 md:mb-16 max-w-2xl mx-auto">
            We provide a full suite of services designed to elevate your OnlyFans presence and maximize your income potential.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div variants={itemVariants} key={index}>
              <Card className="text-left h-full flex flex-col" hoverEffect={true}>
                <div className="flex justify-start mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold font-headings text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm flex-grow">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
