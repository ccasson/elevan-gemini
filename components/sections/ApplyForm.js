import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import Card from '../common/Card';

const ApplyForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState('');

  const onSubmit = async (data) => {
    // In a real application, you would send this data to your backend or a service like Formspree.
    // For this example, we'll simulate a submission.
    console.log('Form Data:', data);
    setSubmissionError(''); // Clear previous errors

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      // if (Math.random() > 0.5) throw new Error("Simulated server error!"); // Uncomment to test error
      setIsSubmitted(true);
      reset(); // Reset form fields
    } catch (error) {
      setSubmissionError('There was an error submitting your application. Please try again.');
      console.error("Submission error:", error);
    }
  };

  const inputClass = "w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-colors";
  const errorClass = "text-red-400 text-sm mt-1";

  if (isSubmitted) {
    return (
      <section id="apply" className="section-padding bg-brand-dark-secondary">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-headings text-white mb-4">
              Application <span className="text-brand-accent">Received!</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Thank you for your interest in partnering with Elevan! We&apos;ve received your application and our team will review it shortly. We&apos;ll be in touch within 24-48 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="primary">
              Submit Another Application
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="section-padding bg-brand-dark-secondary">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-headings text-center text-white mb-4">
            Partner With <span className="text-brand-accent">Elevan</span>
          </h2>
          <p className="text-center text-lg text-gray-300 mb-10 md:mb-12 max-w-xl mx-auto">
            Ready to elevate your OnlyFans career? Fill out the form below to start your journey with us. We respect your privacy and all information shared is confidential.
          </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
        <Card className="bg-brand-dark p-6 md:p-10" hoverEffect={false}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name / Creator Name</label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Your name is required' })}
                className={`${inputClass} ${errors.name ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="e.g., Jane Doe / YourCreatorAlias"
              />
              {errors.name && <p className={errorClass}>{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                })}
                className={`${inputClass} ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="you@example.com"
              />
              {errors.email && <p className={errorClass}>{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="onlyfansLink" className="block text-sm font-medium text-gray-300 mb-1">OnlyFans Profile Link (Optional)</label>
              <input
                id="onlyfansLink"
                type="url"
                {...register('onlyfansLink', {
                    pattern: { value: /^(https?:\/\/)?(www\.)?onlyfans\.com\/[a-zA-Z0-9_.-]+$/, message: 'Invalid OnlyFans URL format' }
                })}
                className={`${inputClass} ${errors.onlyfansLink ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="https://onlyfans.com/yourprofile"
              />
              {errors.onlyfansLink && <p className={errorClass}>{errors.onlyfansLink.message}</p>}
            </div>

            <div>
              <label htmlFor="socialMediaLink" className="block text-sm font-medium text-gray-300 mb-1">Main Social Media (Instagram, TikTok, Twitter)</label>
              <input
                id="socialMediaLink"
                type="url"
                {...register('socialMediaLink', {
                  required: 'A social media link is required for evaluation',
                  pattern: { value: /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/, message: 'Invalid URL format' }
                })}
                className={`${inputClass} ${errors.socialMediaLink ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="e.g., https://instagram.com/yourprofile"
              />
              {errors.socialMediaLink && <p className={errorClass}>{errors.socialMediaLink.message}</p>}
            </div>
            
            <div>
              <label htmlFor="monthlyEarnings" className="block text-sm font-medium text-gray-300 mb-1">Approx. Current Monthly Earnings (USD, Optional)</label>
              <select 
                id="monthlyEarnings"
                {...register('monthlyEarnings')}
                className={`${inputClass} ${errors.monthlyEarnings ? 'border-red-500' : 'border-gray-600'}`}
              >
                <option value="">Select range (optional)</option>
                <option value="0-500">$0 - $500</option>
                <option value="500-2000">$500 - $2,000</option>
                <option value="2000-5000">$2,000 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000-25000">$10,000 - $25,000</option>
                <option value="25000+">$25,000+</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Tell us about yourself and your goals (Optional)</label>
              <textarea
                id="message"
                rows="4"
                {...register('message')}
                className={`${inputClass} ${errors.message ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="What are you looking for in a management partner?"
              ></textarea>
            </div>
            
            {submissionError && <p className="text-red-400 text-sm text-center">{submissionError}</p>}

            <div>
              <Button type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Apply to Partner'}
              </Button>
            </div>
            <p className="text-xs text-gray-400 text-center">
              By submitting this form, you agree to be contacted by Elevan. We value your privacy.
            </p>
          </form>
        </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplyForm;
