import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../Logo';
import { LuMenu, LuX } from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Why Elevan?', href: '#why-elevan' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 }
  };

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-brand-dark-secondary shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} legacyBehavior>
                  <a className="text-gray-300 hover:text-brand-accent px-3 py-2 rounded-md text-sm font-medium transition-colors" onClick={() => setIsOpen(false)}>
                    {item.name}
                  </a>
                </Link>
              ))}
              <Button href="#apply" variant="primary" size="sm">Apply Now</Button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-300 hover:text-brand-accent focus:outline-none p-2"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden bg-brand-dark-secondary pb-3"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                 <motion.div variants={mobileMenuItemVariants} key={item.name}>
                    <Link href={item.href} legacyBehavior>
                    <a className="text-gray-300 hover:text-brand-accent block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={toggleMenu}>
                        {item.name}
                    </a>
                    </Link>
                 </motion.div>
              ))}
            </div>
            <div className="px-5 pt-2 pb-3">
              <Button href="#apply" variant="primary" size="sm" fullWidth onClick={toggleMenu}>Apply Now</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
