import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Button = ({
  children,
  href,
  onClick,
  variant = 'primary', // 'primary', 'secondary', 'outline'
  size = 'md', // 'sm', 'md', 'lg'
  fullWidth = false,
  type = 'button', // 'button', 'submit', 'reset'
  className = '',
  disabled = false,
}) => {
  const baseStyles = "font-medium rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark";
  
  const variantStyles = {
    primary: 'bg-brand-accent hover:bg-brand-accent-hover text-white focus:ring-brand-accent',
    secondary: 'bg-gray-600 hover:bg-gray-500 text-white focus:ring-gray-500',
    outline: 'bg-transparent hover:bg-brand-accent text-brand-accent border-2 border-brand-accent hover:text-white focus:ring-brand-accent',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  const combinedClassName = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? 'w-full block text-center' : 'inline-block'}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-105'}
    ${className}
  `;

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.05 },
    whileTap: disabled ? {} : { scale: 0.95 },
  };

  if (href) {
    return (
      <Link href={href} legacyBehavior>
        <motion.a {...motionProps} className={combinedClassName} onClick={onClick}>
          {children}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default Button;
