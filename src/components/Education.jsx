import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';
import { SectionDecor } from './ui/SectionDecor';
import { education } from '../data/education';

const Education = () => {
  return (
    <section id="education" className="py-12 relative overflow-hidden">
      <SectionDecor flip />

      <div className="pointer-events-none absolute inset-0 hidden lg:block -z-10">
        <div className="absolute right-[-20%] top-[15%] aspect-square w-[min(100%,550px)] rounded-full border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent shadow-[inset_0_0_60px_rgba(255,255,255,0.02)]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-0">
        <SectionTitle 
          title="Education" 
          subtitle="My academic journey and qualifications."
        />

        <div className="max-w-6xl mx-auto">
          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline line - center */}
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#22c55e]/50 via-[#22c55e] to-[#22c55e]/50 md:-translate-x-1/2 shadow-lg" />

            {/* Timeline items - alternating left/right */}
            <div className="space-y-12">
              {education.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "50px" }}
                    transition={{ duration: 0.8, delay: index * 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                  >
                    {/* Timeline dot - center */}
                    <div className="absolute left-3 md:left-1/2 top-0 w-5 h-5 md:w-6 md:h-6 bg-[#22c55e] rounded-full -translate-x-1/2 shadow-[0_0_20px_rgba(34,197,94,0.6)] border-[3px] md:border-4 border-gray-50 dark:border-[#030303] z-20" />

                    {/* Content - alternating left/right */}
                    <div className={`ml-10 md:ml-0 w-auto md:w-[calc(50%-3px)] ${isLeft ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'}`}>
                      <motion.div
                        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "50px" }}
                        transition={{ duration: 0.8, delay: index * 0.25 + 0.15, ease: "easeOut" }}
                        className={`glass-hover glass group rounded-2xl p-4 md:p-6 border-2 border-transparent hover:border-[#22c55e]/50 transition-all duration-300 text-left ${isLeft ? 'md:text-right' : 'md:text-left'}`}
                      >
                      {/* Date badge */}
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-[#22c55e]/20 to-[#4ade80]/20 text-[#22c55e] dark:text-[#4ade80] text-xs font-bold tracking-wider">
                            {item.period}
                          </span>
                        </div>

                        {/* Degree */}
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {item.degree}
                        </h3>

                        {/* Institution */}
                        <h4 className="text-xs md:text-sm font-semibold text-[#22c55e] dark:text-[#4ade80] mb-3 tracking-wide">
                          {item.institution}
                        </h4>

                        {/* Divider */}
                        <div className={`h-0.5 bg-gradient-to-r from-[#22c55e]/0 via-[#22c55e] to-[#22c55e]/0 rounded-full mb-3`} />

                        {/* Details */}
                        <div className="space-y-2 mb-3">
                          {item.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed font-mono">
                              {detail}
                            </p>
                          ))}
                        </div>

                        {/* Tags */}
                        {item.tags && item.tags.length > 0 && (
                          <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex flex-wrap gap-1.5">
                              {item.tags.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
