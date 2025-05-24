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
          className={className}
          viewBox="0 0 200 50" // Adjusted viewBox for potential larger text
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          {/* Using a slightly different font-family for more distinctiveness if available, otherwise Montserrat with bolder stroke */}
          <motion.text
            x="5"
            y="38"
            fontFamily="Montserrat, sans-serif" // Stick with Montserrat, but enhance styling
            fontSize="38" // Slightly larger text
            fontWeight="900" // Bolder weight
            className="fill-current text-brand-accent"
            style={{
              textShadow: '0 0 10px rgba(230, 92, 146, 0.8), 0 0 20px rgba(230, 92, 146, 0.4)', // Stronger glow
              transition: 'text-shadow 0.3s ease-in-out',
              stroke: '#ffffff', // White stroke
              strokeWidth: '1px', // Slightly thicker stroke
              strokeLinejoin: 'round',
            }}
            initial={{ opacity: 0, x: -20 }} // More pronounced initial fade/slide for navbar logo
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }} // Delayed to appear after hero intro
          >
            Elevan
          </motion.text>
        </svg>
      </motion.a>
    </span>
  </Link>
);

export default Logo;
