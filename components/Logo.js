import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Logo = ({ className = "text-brand-accent h-8 md:h-10" }) => (
  <Link href="/" legacyBehavior>
    {/* Wrap motion.a inside a span as the direct child of Link */}
    <span>
      <motion.a
        className="flex items-center group cursor-pointer"
        whileHover={{ scale: 1.05 }} // Subtle hover scale for interactivity
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <svg
          className={className}
          viewBox="0 0 200 50"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <motion.text
            x="5"
            y="38"
            fontFamily="Montserrat, sans-serif"
            fontSize="36"
            fontWeight="800"
            className="fill-current text-brand-accent"
            style={{
              textShadow: '0 0 8px rgba(230, 92, 146, 0.6), 0 0 15px rgba(230, 92, 146, 0.3)', // Soft glow
              transition: 'text-shadow 0.3s ease-in-out',
              stroke: '#ffffff', // White stroke
              strokeWidth: '0.8px', // Subtle stroke width
              strokeLinejoin: 'round', // Makes corners smooth
            }}
            initial={{ opacity: 0, x: -10 }} // Initial animation for the logo
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Elevan
          </motion.text>
        </svg>
      </motion.a>
    </span>
  </Link>
);

export default Logo;
