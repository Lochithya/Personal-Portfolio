import React from 'react';
import { motion } from 'framer-motion';

export const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-16 text-center">
      {/* Dot + fading lines */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-4 flex items-center justify-center"
        aria-hidden
      >
        <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#4ade80] sm:w-28 md:w-36" />
        <span className="mx-2.5 h-2 w-2 shrink-0 rounded-full bg-[#4ade80] shadow-[0_0_12px_rgba(74,222,128,0.55)]" />
        <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#4ade80] sm:w-28 md:w-36" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="font-heading text-3xl font-bold tracking-tight text-[#4ade80] md:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-4 max-w-2xl text-sm text-gray-500 transition-colors duration-300 md:text-base dark:text-gray-400"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Faint horizontal accent line below the text */}
      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        whileInView={{ opacity: 1, width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-8 flex justify-center w-full"
      >
        <div className="h-px w-full max-w-[150px] sm:max-w-[250px] md:max-w-[350px] bg-gradient-to-r from-transparent via-[#22c55e]/40 to-transparent" />
      </motion.div>
    </div>
  );
};
