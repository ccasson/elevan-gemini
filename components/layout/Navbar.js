import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons

import Logo from '../Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: '0%', transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Why Partner', href: '#why-elevan' }, // Corrected href to match the section ID
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Apply', href: '#apply' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 py-4 bg-brand-dark shadow-lg"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12 lg:px-20">
        {/* Adjusted Logo size for larger impact */}
        <Logo className="text-brand-accent h-10 md:h-12 lg:h-14" />
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.li key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href={link.href} className="text-gray-200 hover:text-brand-accent transition-colors duration-300 font-bold text-lg">
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-200 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-brand-dark bg-opacity-95 z-40 flex flex-col items-center justify-center"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <button onClick={toggleMenu} className="absolute top-6 right-6 text-gray-200 focus:outline-none">
              <FaTimes size={28} />
            </button>
            <ul className="flex flex-col space-y-8 text-2xl">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  onClick={toggleMenu}
                >
                  <Link href={link.href} className="text-gray-200 hover:text-brand-accent transition-colors duration-300 font-bold">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
