// components/sections/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import Button from '../common/Button'; // Assuming you have a Button component

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });

    // In a real application, you'd send this data to a backend or a service like Formspree/Netlify Forms
    // For this example, we'll just simulate a successful submission.
    console.log('Form data submitted:', formData);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message sent successfully! We\'ll be in touch soon.' },
      });
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      setFormStatus({
        submitted: true,
        submitting: false,
        info: { error: true, msg: 'There was an error sending your message. Please try again.' },
      });
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="section-padding bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold font-headings text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Get in <span className="text-brand-accent">Touch</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have questions or ready to start maximizing your earnings? Reach out to us.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            className="bg-brand-dark-secondary p-8 rounded-lg shadow-lg border-2 border-brand-accent-hover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <h3 className="text-2xl font-bold font-headings text-white mb-6">Contact Information</h3>
            <ul className="space-y-6 text-lg text-gray-300">
              <li className="flex items-center">
                <FaPhoneAlt className="text-brand-accent text-2xl mr-4" />
                <span>+1 (555) 123-4567</span> {/* Replace with actual phone */}
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-brand-accent text-2xl mr-4" />
                <span>contact@elevanagency.com</span> {/* Replace with actual email */}
              </li>
            </ul>
            <div className="mt-8">
              <h4 className="text-xl font-bold font-headings text-white mb-4">Follow Us</h4>
              <div className="flex space-x-6">
                <a href="https://instagram.com/your_instagram" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-brand-light transition duration-300">
                  <FaInstagram className="text-4xl" />
                </a>
                <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-brand-light transition duration-300">
                  <FaTelegramPlane className="text-4xl" />
                </a>
                {/* Add more social icons as needed */}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-brand-dark-secondary p-8 rounded-lg shadow-lg border-2 border-brand-accent-hover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-headings text-white mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 focus:border-brand-accent"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 focus:border-brand-accent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 focus:border-brand-accent resize-y"
                  placeholder="Your message to us..."
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
              </Button>

              {formStatus.submitted && (
                <p className={`mt-4 text-center ${formStatus.info.error ? 'text-red-500' : 'text-green-500'}`}>
                  {formStatus.info.msg}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
