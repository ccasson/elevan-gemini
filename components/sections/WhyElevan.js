import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import { LuDollarSign, LuBarChart2, LuHeadphones, LuShieldCheck } from 'react-icons/lu';

const features = [
  {
    icon: <LuDollarSign className="w-10 h-10 text-brand-accent mb-4" />,
    title: 'Keep 100% Subscription Revenue',
    description: 'You retain all your subscription earnings. We only partner on tips and messages, ensuring your primary income is yours.',
  },
  {
    icon: <LuBarChart2 className="w-10 h-10 text-brand-accent mb-4" />,
    title: 'Expert Growth Strategies',
    description: 'Leverage our proven techniques for audience growth, content optimization, and strategic promotion to significantly boost your earnings.',
  },
  {
    icon: <LuHeadphones className="w-10 h-10 text-brand-accent mb-4" />,
    title: 'Dedicated Account Management',
    description: 'Receive personalized support from a dedicated account manager focused on your success and available to guide you every step.',
  },
  {
    icon: <LuShieldCheck className="w-10 h-10 text-brand-accent mb-4" />,
    title: 'Privacy & Security Focused',
    description: 'We prioritize your safety and privacy with secure practices and discreet management, giving you peace of mind.',
  },
];

const WhyElevan = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="why-elevan" className="section-padding bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-headings text-center text-white mb-4">
            Why Partner with <span className="text-brand-accent">Elevan?</span>
          </h2>
          <p className="text-center text-lg text-gray-300 mb-12 md:mb-16 max-w-2xl mx-auto">
            We&apos;re more than just an agency; we&apos;re your dedicated partners in success. Discover the Elevan difference.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div variants={itemVariants} key={index}>
              <Card className="text-center h-full flex flex-col items-center">
                {feature.icon}
                <h3 className="text-xl font-semibold font-headings text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm flex-grow">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyElevan;
