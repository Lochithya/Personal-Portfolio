import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';
import { SectionDecor } from './ui/SectionDecor';
import { FaCode, FaMagic, FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <SectionDecor />
      <div className="container mx-auto px-6 md:px-12 relative z-0">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me and my background."
        />

        <div className="max-w-7xl mx-auto">
          {/* 50/50 split with center divider */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] gap-12 lg:gap-x-16 lg:gap-y-0 items-start">
            
            {/* Left Section - Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-start text-left self-start"
            >
              {/* Heading starts at the very top to align horizontally with the right side */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-6 leading-tight tracking-tight">
                Crafting <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-[#22c55e]">Experiences</span>
                <br />
                That Drive Value
              </h2>
              
              <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed mb-10 text-left">
                <p>
                  I am a Software Engineering undergraduate at the University of Kelaniya, Faculty of Science, 
                  specializing in Net-Centric Web Application Development, Data Science, and Business Engineering.
                </p>
                <p>
                  My interests span across software development, UI/UX design, and project management. I believe in 
                  technology-driven innovation and strive to build applications that create real value.
                </p>
                <p>
                  Beyond academics, I have gained practical experience through internships and leadership roles, 
                  which have honed my technical abilities as well as soft skills like active listening, 
                  problem-solving, and team leadership.
                </p>
              </div>

              {/* Stats at bottom of left section */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 sm:gap-x-10 gap-y-6 pt-6 border-t border-gray-800/40">
                {personalInfo.stats.map((stat, index) => (
                  <div key={index} className="border-l-[3px] border-[#22c55e] pl-3 sm:pl-4 text-left">
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-none mb-1">{stat.value}</h4>
                    <p className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Subtle vertical divider between left & right */}
            <div
              className="hidden lg:block w-px min-h-full self-stretch bg-gradient-to-b from-transparent via-white/[0.12] to-transparent"
              aria-hidden
            />

            {/* Right Section - Glassy Cards (Perfect Height Alignment) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 self-start relative"
            >
              {/* Local glow — shifted down so Leadership card stays readable */}
              <div
                className="pointer-events-none absolute -bottom-6 -right-6 w-[min(100%,22rem)] h-56 bg-[#22c55e]/10 rounded-full blur-[90px] -z-10 translate-y-[300px] dark:opacity-100 opacity-30"
                aria-hidden
              />

              {/* Expertise Card (Full Width) */}
              <div className="glass-about-card rounded-2xl p-6">
                <div className="flex gap-4 items-start text-left">
                  <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/25 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <FaCode size={18} />
                  </div>
                  <div>
                    <h4 className="font-card text-[1.125rem] font-semibold text-white mb-2 leading-snug">
                      Expertise
                    </h4>
                    <p className="font-sans text-[0.8125rem] font-normal text-gray-400/90 leading-[1.65]">
                      Specialized in building scalable web applications with modern technologies and best practices.
                    </p>
                  </div>
                </div>
              </div>

              {/* Clean Code & Performance Cards (Side by Side) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                {/* Clean Code */}
                <div className="glass-about-card rounded-2xl p-5 flex flex-col justify-between min-h-[145px]">
                  <div>
                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/25 text-emerald-400 flex items-center justify-center w-fit mb-3.5">
                      <FaMagic size={16} />
                    </div>
                    <h4 className="font-card text-[0.9375rem] font-semibold text-white mb-1.5 leading-snug">
                      Clean Code
                    </h4>
                    <p className="font-sans text-[0.75rem] font-normal text-gray-400/85 leading-[1.6]">
                      Writing maintainable, well-documented code that scales.
                    </p>
                  </div>
                </div>

                {/* Performance */}
                <div className="glass-about-card rounded-2xl p-5 flex flex-col justify-between min-h-[145px]">
                  <div>
                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/25 text-emerald-400 flex items-center justify-center w-fit mb-3.5">
                      <FaRocket size={16} />
                    </div>
                    <h4 className="font-card text-[0.9375rem] font-semibold text-white mb-1.5 leading-snug">
                      Performance
                    </h4>
                    <p className="font-sans text-[0.75rem] font-normal text-gray-400/85 leading-[1.6]">
                      Optimizing for speed and efficiency in every project.
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem Solving & Leadership Cards (Side by Side) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                {/* Problem Solving */}
                <div className="glass-about-card rounded-2xl p-5 flex flex-col justify-between min-h-[145px]">
                  <div>
                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/25 text-emerald-400 flex items-center justify-center w-fit mb-3.5">
                      <FaLightbulb size={16} />
                    </div>
                    <h4 className="font-card text-[0.9375rem] font-semibold text-white mb-1.5 leading-snug">
                      Problem Solving
                    </h4>
                    <p className="font-sans text-[0.75rem] font-normal text-gray-400/85 leading-[1.6]">
                      Designing elegant, optimized solutions for complex challenges.
                    </p>
                  </div>
                </div>

                {/* Leadership */}
                <div className="glass-about-card rounded-2xl p-5 flex flex-col justify-between min-h-[145px]">
                  <div>
                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/25 text-emerald-400 flex items-center justify-center w-fit mb-3.5">
                      <FaUsers size={16} />
                    </div>
                    <h4 className="font-card text-[0.9375rem] font-semibold text-white mb-1.5 leading-snug">
                      Leadership
                    </h4>
                    <p className="font-sans text-[0.75rem] font-normal text-gray-400/85 leading-[1.6]">
                      Guiding teams and driving projects to successful completion.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
