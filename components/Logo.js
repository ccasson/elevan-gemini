import React from 'react';
import Link from 'next/link';

const Logo = ({ className = "text-brand-accent h-8 md:h-10" }) => (
  <Link href="/" className="flex items-center">
    <svg
      className={className}
      viewBox="0 0 200 50"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <text x="5" y="38" fontFamily="Montserrat, sans-serif" fontSize="36" fontWeight="800">
        Elevan
      </text>
    </svg>
  </Link>
);

export default Logo;
