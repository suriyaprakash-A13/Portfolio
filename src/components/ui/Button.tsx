import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';
import './Button.css';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', icon, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={clsx(
          'btn',
          `btn-${variant}`,
          `btn-${size}`,
          className
        )}
        {...props}
      >
        {children}
        {icon && <span className="btn-icon">{icon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
