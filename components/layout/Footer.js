import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'; // Example social icons

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-dark-secondary text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 section-padding border-t border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-headings font-semibold text-white mb-4">Elevan</h3>
            <p className="text-sm">Empowering creators to achieve their full potential on OnlyFans. Your success is our mission.</p>
          </div>
          <div>
            <h3 className="text-lg font-headings font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#home" className="hover:text-brand-accent">Home</Link></li>
              <li><Link href="#services" className="hover:text-brand-accent">Services</Link></li>
              <li><Link href="#pricing" className="hover:text-brand-accent">Pricing</Link></li>
              <li><Link href="#apply" className="hover:text-brand-accent">Apply Now</Link></li>
              {/* Add links to Privacy Policy / Terms if you have them */}
              {/* <li><Link href="/privacy-policy" className="hover:text-brand-accent">Privacy Policy</Link></li> */}
              {/* <li><Link href="/terms-of-service" className="hover:text-brand-accent">Terms of Service</Link></li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-headings font-semibold text-white mb-4">Connect With Us</h3>
            <p className="text-sm mb-4">Follow us on social media for updates and insights.</p>
            <div className="flex space-x-4">
              {/* Replace with your actual social media links */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent"><FaInstagram size={24} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent"><FaTwitter size={24} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent"><FaTiktok size={24} /></a>
            </div>
             <p className="text-sm mt-4">Email: <a href="mailto:contact@elevan.agency" className="hover:text-brand-accent">contact@elevan.agency</a></p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {currentYear} Elevan Management. All rights reserved.</p>
          <p className="mt-1">Website by Gemini AI & You</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
