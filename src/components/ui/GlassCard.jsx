import React from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`glass rounded-2xl p-6 md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};
