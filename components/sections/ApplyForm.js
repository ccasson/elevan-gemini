// components/sections/ApplyForm.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    onlyFansLink: '',
    socialMedia: '',
    currentEarnings: '',
    goals: '',
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleInputChange = (e) => {
    setFormData(curr => ({ ...curr, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus(s => ({ ...s, submitting: true }));

    try {
      // simulate API call
      await new Promise(res => setTimeout(res, 1500));
      setFormStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Application submitted successfully! We'll review it soon." },
      });
      setFormData({
        fullName: '',
        email: '',
        onlyFansLink: '',
        socialMedia: '',
        currentEarnings: '',
        goals: '',
      });
    } catch {
      setFormStatus({
        submitted: true,
        submitting: false,
        info: { error: true, msg: 'There was an error submitting your application. Please try again.' },
      });
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="apply" className="section-padding bg-brand-dark-secondary text-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold font-headings text-center mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Partner With <span className="text-brand-accent">Elevan</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Ready to elevate your OnlyFans career? Fill out the form below to start your journey with us.
        </motion.p>

        <motion.div
          className="bg-brand-dark p-8 rounded-lg shadow-lg border-2 border-brand-accent-hover"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-gray-300 text-sm font-bold mb-2">
                Full Name / Creator Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full py-3 px-4 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-brand-accent"
                placeholder="Jane Doe / CreatorAlias"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full py-3 px-4 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-brand-accent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="onlyFansLink" className="block text-gray-300 text-sm font-bold mb-2">
                OnlyFans Profile Link (Optional)
              </label>
              <input
                id="onlyFansLink"
                name="onlyFansLink"
                type="url"
                value={formData.onlyFansLink}
                onChange={handleInputChange}
                className="w-full py-3 px-4 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-brand-accent"
                placeholder="https://onlyfans.com/yourprofile"
              />
            </div>

            <div>
              <label htmlFor="socialMedia" className="block text-gray-300 text-sm font-bold mb-2">
                Main Social Media (Optional)
              </label>
              <input
                id="socialMedia"
                name="socialMedia"
                type="text"
                value={formData.socialMedia}
                onChange={handleInputChange}
                className="w-full py-3 px-4 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-brand-accent"
                placeholder="Instagram / TikTok / Twitter link"
              />
            </div>

            <div>
              <label htmlFor="currentEarnings" className="block text-gray-300 text-sm font-bold mb-2">
                Approx. Current Monthly Earnings (Optional)
              </label>
              <select
                id="currentEarnings"
                name="currentEarnings"
                value={formData.currentEarnings}
                onChange={handleInputChange}
                className="w-full py-3 px-4 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-brand-accent"
              >
                <option value="">Select range</option>
                <option value="0-500">$0–$500</option>
                <option value="500-2000">$500–$2,000</option>
                <option value="2000-5000">$2,000–$5,000</option>
                <option value="5000+">$5,000+</option>
              </select>
            </div>

            <div>
              <label htmlFor="goals" className="block text-gray-300 text-sm font-bold mb-2">
                Tell Us About Your Goals (Optional)
              </label>
              <textarea
                id="goals"
                name="goals"
                rows="4"
                value={formData.goals}
                onChange={handleInputChange}
                className="w-full py-3 px-4 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-brand-accent"
                placeholder="Your goals and brief intro..."
              />
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full" disabled={formStatus.submitting}>
              {formStatus.submitting ? 'Submitting...' : 'Submit Application'}
            </Button>

            {formStatus.submitted && (
              <p className={`mt-4 text-center ${formStatus.info.error ? 'text-red-500' : 'text-green-500'}`}>
                {formStatus.info.msg}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplyForm;
