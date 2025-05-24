import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Logo = ({ className = "text-brand-accent h-8 md:h-10" }) => (
  <Link href="/" legacyBehavior>
    <span>
      <motion.a
        className="flex items-center group cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <svg
          className={`${className} filter`}
          viewBox="0 0 200 50"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <defs>
            <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
              <feFlood floodColor="#E65C92" floodOpacity="0.8" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="inner-shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="0.5" result="offset-blur" />
              <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
              <feFlood floodColor="#1E1E2D" floodOpacity="0.6" result="color" />
              <feComposite operator="in" in="color" in2="inverse" result="shadow" />
              <feMerge>
                <feMergeNode in="shadow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.text
            x="5"
            y="38"
            fontFamily="Orbitron, sans-serif" // Using Orbitron for the logo text
            fontSize="38"
            fontWeight="900"
            className="fill-current text-brand-accent animate-shimmer" // Apply shimmer animation
            style={{
              stroke: '#ffffff',
              strokeWidth: '1.5px',
              strokeLinejoin: 'round',
              filter: 'url(#neon-glow) url(#inner-shadow)',
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Elevan
          </motion.text>
        </svg>
      </motion.a>
    </span>
  </Link>
);

export default Logo;
