import React from 'react';
import Link from 'next/link';

const Logo = ({ className = "text-brand-accent h-8 md:h-10" }) => (
  <Link href="/" className="flex items-center group"> {/* Added group for potential hover effects */}
    <svg
      className={className}
      viewBox="0 0 200 50"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor" // This will pick up the text-brand-accent
    >
      {/* Subtle background for depth or glow effect */}
      <text
        x="5"
        y="38"
        fontFamily="Montserrat, sans-serif"
        fontSize="36"
        fontWeight="800"
        className="fill-current text-brand-accent" // Explicitly ensure accent color
        style={{
          textShadow: '0 0 8px rgba(230, 92, 146, 0.6), 0 0 15px rgba(230, 92, 146, 0.3)', // Soft glow
          transition: 'text-shadow 0.3s ease-in-out',
        }}
      >
        Elevan
      </text>
    </svg>
  </Link>
);

export default Logo;
