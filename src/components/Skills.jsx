import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';
import { SectionDecor } from './ui/SectionDecor';
import { skills, levelProgress } from '../data/skills';
import { FaReact, FaJs, FaNodeJs, FaGithub, FaDatabase, FaChartBar } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiFigma,
  SiVite,
  SiHtml5,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

// Tools for the marquee
const toolsMarquee = [
  { name: 'React JS', icon: FaReact },
  { name: 'JavaScript', icon: FaJs },
  { name: 'HTML & CSS', icon: SiHtml5 },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'MySQL', icon: SiMysql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Git & GitHub', icon: FaGithub },
  { name: 'Figma', icon: SiFigma },
  { name: 'Vite', icon: SiVite },
  { name: 'VS Code', icon: VscCode },
];

const skillIcons = {
  'React JS': FaReact,
  JavaScript: FaJs,
  'HTML & CSS': SiHtml5,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': FaNodeJs,
  'Spring Boot': SiSpringboot,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  'REST APIs': FaDatabase,
  'Git & GitHub': FaGithub,
  Figma: SiFigma,
  Vite: SiVite,
  'VS Code': VscCode,
  PowerBI: FaChartBar,
};

const levelBadgeStyles = {
  Expert: 'border-[#22c55e]/50 text-[#4ade80] bg-[#22c55e]/10',
  Advanced: 'border-blue-500/50 text-blue-400 bg-blue-500/10',
  Intermediate: 'border-teal-500/45 text-teal-400 bg-teal-500/10',
};

const Skills = () => {
  return (
    <section id="skills" className="py-12 relative overflow-hidden">
      <SectionDecor />
      <div className="absolute inset-0 -z-10 opacity-[0.22] pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#22c55e]/6 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#4ade80]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-0">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="A comprehensive overview of my technical skills and proficiency levels"
        />

        {/* Tools Marquee */}
        <div className="mb-16 relative overflow-hidden py-6">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none" />
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4ade80]/5 to-transparent pointer-events-none" />
          
          <motion.div
            className="flex gap-4 md:gap-6 will-change-transform"
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...toolsMarquee, ...toolsMarquee, ...toolsMarquee].map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div
                  key={idx}
                  className="group flex items-center gap-3 px-6 py-3.5 rounded-lg border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 hover:border-[#8DD154]/40 hover:shadow-[0_0_20px_rgba(141,209,84,0.15)] transition-all duration-300 whitespace-nowrap shrink-0"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-700/40 group-hover:bg-[#8DD154]/10 transition-colors duration-300">
                    <Icon className="text-gray-300 group-hover:text-[#8DD154] text-xl transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 tracking-wide">
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              className="glass-skills-card rounded-2xl p-6 md:p-8"
            >
              {/* Category header — vertical green accent + title */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <div className="w-1 h-9 rounded-full bg-gradient-to-b from-[#4ade80] to-[#22c55e] shrink-0" />
                <h3 className="text-lg md:text-xl font-heading font-bold text-white tracking-tight">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="space-y-7 md:space-y-8">
                {skillGroup.items.map((skill, idx) => {
                  const Icon = skillIcons[skill.name] || FaJs;
                  const progress = levelProgress[skill.level] ?? 70;
                  const badgeClass = levelBadgeStyles[skill.level] ?? levelBadgeStyles.Intermediate;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "50px" }}
                      transition={{ duration: 0.3, delay: 0.08 + idx * 0.05 }}
                    >
                      <div className="flex gap-3">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#22c55e]/20 bg-[#22c55e]/10 text-[#4ade80]">
                          <Icon className="text-base" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="mb-2.5 flex items-start justify-between gap-2">
                            <div>
                              <p className="text-sm font-semibold text-white leading-tight">
                                {skill.name}
                              </p>
                              <p className="mt-0.5 text-xs text-gray-500">{skill.years}</p>
                            </div>
                            <span
                              className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${badgeClass}`}
                            >
                              {skill.level}
                            </span>
                          </div>

                          <div className="h-1.5 overflow-hidden rounded-full bg-gray-800/80">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${progress}%` }}
                              viewport={{ once: true, margin: "50px" }}
                              transition={{ duration: 0.8, delay: 0.15 + idx * 0.05, ease: 'easeOut' }}
                              className="h-full rounded-full bg-gradient-to-r from-[#4ade80] via-[#22c55e] to-[#34d399] shadow-[0_0_12px_rgba(74,222,128,0.4)]"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
